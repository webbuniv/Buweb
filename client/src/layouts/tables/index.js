import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from "@mui/material/Card";
import Modal from "@mui/material/Modal";
import Button from "@mui/material/Button";
import * as Yup from "yup";
import CircularProgress from "@mui/material/CircularProgress";
import TableContainer from "@mui/material/TableContainer";
import Table from "@mui/material/Table";
import TableHead from "@mui/material/TableHead";
import TableBody from "@mui/material/TableBody";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";

// Soft UI Dashboard React components
import SoftBox from "../../components/SoftBox";
import SoftTypography from "../../components/SoftTypography";

// Soft UI Dashboard React examples
import DashboardLayout from "../../examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "../../examples/Navbars/DashboardNavbar";
import Footer from "../../examples/Footer";

// Custom components
import Form from "../../components/Form";

const Tables = () => {
  const [slides, setSlides] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [showNewSlideModal, setShowNewSlideModal] = useState(false);
  const [showEditSlideModal, setShowEditSlideModal] = useState(false);
  const [isCreating, setIsCreating] = useState(false);
  const [isUpdating, setIsUpdating] = useState(false);

  const validationSchema = Yup.object().shape({
    photo: Yup.string().required("Photo is required"),
    title: Yup.string().required("Title is required"),
    tagline: Yup.string().required("Tagline is required"),
  });

  const [initialValues, setInitialValues] = useState({
    photo: "",
    title: "",
    tagline: ""
  });

  const fields = [
    { name: "photo", label: "Photo", type: "dropzone", placeholder: "Drop or select a photo" },
    { name: "title", label: "Title", type: "text" },
    { name: "tagline", label: "Tagline", type: "text" },
  ];

  const fetchSlides = async () => {
    setLoading(true);
    try {
      const response = await axios.get("https://buweb.onrender.com/slide", {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      });
      setSlides(response.data);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchSlides();
  }, []);

  const handleCreateSlide = async (values, { setSubmitting }) => {
    setIsCreating(true);
    try {
      await axios.post("https://buweb.onrender.com/slide/create", values, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      });
      fetchSlides();
      setShowNewSlideModal(false);
    } catch (error) {
      setError(error.message);
    } finally {
      setIsCreating(false);
      setSubmitting(false);
    }
  };

  const handleUpdateSlide = async (values, { setSubmitting }) => {
    setIsUpdating(true);
    try {
      await axios.patch(`https://buweb.onrender.com/slide/${values._id}/update`, values, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      });
      fetchSlides();
      setShowEditSlideModal(false);
    } catch (error) {
      setError(error.message);
    } finally {
      setIsUpdating(false);
      setSubmitting(false);
    }
  };

  const handleEditSlide = (slide) => {
    setInitialValues(slide);
    setShowEditSlideModal(true);
  };

  const handleDeleteSlide = async (id) => {
    try {
      await axios.delete(`https://buweb.onrender.com/slide/${id}/delete`, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      });
      fetchSlides();
    } catch (error) {
      setError(error.message);
    }
  };

  const columns = [
    { name: "photo", align: "left" },
    { name: "title", align: "left" },
    { name: "tagline", align: "left" },
    {
      name: "actions",
      align: "center",
      render: (slide) => (
        <div>
          <Button variant="contained" color="primary" onClick={() => handleEditSlide(slide)} style={{ marginRight: '8px' }}>
            Edit
          </Button>
          <Button variant="contained" color="secondary" onClick={() => handleDeleteSlide(slide._id)}>
            Delete
          </Button>
        </div>
      ),
    },
  ];

  return (
    <DashboardLayout>
      <DashboardNavbar />
      <SoftBox py={3}>
        <SoftBox mb={3}>
          <Card>
            <SoftBox display="flex" justifyContent="space-between" alignItems="center" p={3}>
              <SoftTypography variant="h6">Slides table</SoftTypography>
              <Button variant="contained" color="primary" onClick={() => setShowNewSlideModal(true)}>
                Create New Slide
              </Button>
            </SoftBox>
            {loading && <CircularProgress />}
            {error && <div>Error: {error}</div>}
            {!loading && !error && (
              <TableContainer component={Paper}>
                <Table>
                  <TableHead>
                    <TableRow>
                      {columns.map((column) => (
                        <TableCell key={column.name} align={column.align}>
                          {column.name.toUpperCase()}
                        </TableCell>
                      ))}
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {slides.map((slide) => (
                      <TableRow key={slide._id}>
                        {columns.map((column) => (
                          <TableCell key={column.name} align={column.align}>
                            {column.render ? column.render(slide) : slide[column.name]}
                          </TableCell>
                        ))}
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            )}
          </Card>
        </SoftBox>
        {/* Create new slide modal */}
        <Modal
          open={showNewSlideModal}
          onClose={() => setShowNewSlideModal(false)}
          BackdropProps={{
            style: { backgroundColor: 'rgba(0, 0, 0, 0.5)' },
          }}
        >
          <Box
            p={3}
            bgcolor="background.paper"
            boxShadow={3}
            borderRadius={2}
            maxWidth="500px"
            mx="auto"
            mt="10%"
          >
            <Form
              initialValues={initialValues}
              validationSchema={validationSchema}
              onSubmit={handleCreateSlide}
              fields={fields}
              submitButtonLabel="Create"
              toggleButtonLabel="Cancel"
              togglePageType={() => setShowNewSlideModal(false)}
              isLoading={isCreating}
            />
          </Box>
        </Modal>
        {/* Edit slide modal */}
        <Modal
          open={showEditSlideModal}
          onClose={() => setShowEditSlideModal(false)}
          BackdropProps={{
            style: { backgroundColor: 'rgba(0, 0, 0, 0.5)' },
          }}
        >
          <Box
            p={3}
            bgcolor="background.paper"
            boxShadow={3}
            borderRadius={2}
            maxWidth="500px"
            mx="auto"
            mt="10%"
          >
            <Form
              initialValues={initialValues}
              validationSchema={validationSchema}
              onSubmit={handleUpdateSlide}
              fields={fields}
              submitButtonLabel="Update"
              toggleButtonLabel="Cancel"
              togglePageType={() => setShowEditSlideModal(false)}
              isLoading={isUpdating}
            />
          </Box>
        </Modal>
      </SoftBox>
      <Footer />
    </DashboardLayout>
  );
};

export default Tables;
