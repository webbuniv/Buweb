import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from "@mui/material/Card";
import Modal from "@mui/material/Modal";
import * as Yup from "yup";
import { CircularProgress } from "@mui/material";
import SoftBox from "../../components/SoftBox";
import SoftTypography from "../../components/SoftTypography";
import DashboardLayout from "../../examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "../../examples/Navbars/DashboardNavbar";
import Footer from "../../examples/Footer";
import Table from "../../examples/Tables/Table";
import Form from "../../components/Form";

const apiUrl = process.env.REACT_APP_API_URL;

const Tables = () => {
  const [slides, setSlides] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [showNewSlideModal, setShowNewSlideModal] = useState(false);
  const [showEditSlideModal, setShowEditSlideModal] = useState(false);
  const [isCreating, setIsCreating] = useState(false);
  const [isUpdating, setIsUpdating] = useState(false);

  const [initialValues, setInitialValues] = useState({
    photo: null,
    title: "",
    tagline: ""
  });

  const validationSchema = Yup.object().shape({
    photo: Yup.mixed().required("Photo is required"),
    title: Yup.string().required("Title is required"),
    tagline: Yup.string().required("Tagline is required"),
  });

  const fields = [
    { name: "photo", label: "Photo", type: "dropzone", placeholder: "Drop or select a photo" },
    { name: "title", label: "Title", type: "text" },
    { name: "tagline", label: "Tagline", type: "text" },
  ];

  useEffect(() => {
    fetchSlides();
  }, []);

  const fetchSlides = async () => {
    setLoading(true);
    try {
      const response = await axios.get(`${apiUrl}/slide`, {
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

  const handleCreateSlide = async (values, { setSubmitting }) => {
    setIsCreating(true);
    try {
      await axios.post(`${apiUrl}/slide/create`, values, {
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
      await axios.patch(`${apiUrl}/slide/${values._id}/update`, values, {
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
      await axios.delete(`${apiUrl}/slide/${id}/delete`, {
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
          <button onClick={() => handleEditSlide(slide)}>Edit</button>
          <button onClick={() => handleDeleteSlide(slide._id)}>Delete</button>
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
              <button onClick={() => setShowNewSlideModal(true)}>Create New Slide</button>
            </SoftBox>
            {loading && <CircularProgress />}
            {error && <div>Error: {error}</div>}
            {!loading && !error && (
              <SoftBox
                sx={{
                  "& .MuiTableRow-root:not(:last-child)": {
                    "& td": {
                      borderBottom: ({ borders: { borderWidth, borderColor } }) =>
                        `${borderWidth[1]} solid ${borderColor}`,
                    },
                  },
                }}
              >
                <Table columns={columns} rows={slides} />
              </SoftBox>
            )}
          </Card>
        </SoftBox>
        {/* Create new slide modal */}
        <Modal open={showNewSlideModal} onClose={() => setShowNewSlideModal(false)}>
          <SoftBox p={3} bgcolor="background.paper">
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
          </SoftBox>
        </Modal>
        {/* Edit slide modal */}
        <Modal open={showEditSlideModal} onClose={() => setShowEditSlideModal(false)}>
          <SoftBox p={3} bgcolor="background.paper">
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
          </SoftBox>
        </Modal>
      </SoftBox>
      <Footer />
    </DashboardLayout>
  );
};

export default Tables;
