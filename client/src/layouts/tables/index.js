import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from "@mui/material/Card";
import Modal from "@mui/material/Modal";
import Button from "@mui/material/Button";
import * as Yup from "yup";
import {
  Typography,
  CircularProgress,
  TableContainer,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  Paper,
  Box,
  TextField,
} from "@mui/material";
import Dropzone from "react-dropzone";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";

import SoftBox from "../../components/SoftBox";
import SoftTypography from "../../components/SoftTypography";
import DashboardLayout from "../../examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "../../examples/Navbars/DashboardNavbar";
import Footer from "../../examples/Footer";
import FlexBetween from "../../components/FlexBetween";

const Tables = () => {
  const [slides, setSlides] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [showNewSlideModal, setShowNewSlideModal] = useState(false);
  const [showEditSlideModal, setShowEditSlideModal] = useState(false);
  const [isCreating, setIsCreating] = useState(false);
  const [isUpdating, setIsUpdating] = useState(false);
  // const { palette } = useTheme();
  const [createFormFields, setCreateFormFields] = useState({
    photo: "",
    title: "",
    tagline: ""
  });
  const [editFormFields, setEditFormFields] = useState({
    _id: "",
    photo: null,
    title: "",
    tagline: ""
  });

  const fetchSlides = async () => {
    setLoading(true);
    try {
      const response = await axios.get("https://buweb.onrender.com/slide");
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

  const handleCreateSlide = async (e) => {
    e.preventDefault();
    setIsCreating(true);
    try {
      const formData = new FormData();
      formData.append("photo", createFormFields.photo);
      formData.append("title", createFormFields.title);
      formData.append("tagline", createFormFields.tagline);

      const response = await axios.post("http://localhost:3001/slide/create", formData, {
        headers: {
          "Content-Type": "multipart/form-data"
        }
      });
      if (response.ok) {
        fetchSlides();
        setShowNewSlideModal(false);
        setCreateFormFields({ photo: "", title: "", tagline: "" });
      }
    } catch (error) {
      setError(error.message);
    } finally {
      setIsCreating(false);
      setShowNewSlideModal(false);
      setCreateFormFields({ photo: "", title: "", tagline: "" });
      fetchSlides();
    }
  };

  const handleUpdateSlide = async (e) => {
    e.preventDefault();
    setIsUpdating(true);
    try {
      const formData = new FormData();
      formData.append("photo", editFormFields.photo);
      formData.append("title", editFormFields.title);
      formData.append("tagline", editFormFields.tagline);

      await axios.patch(`https://buweb.onrender.com/slide/${editFormFields._id}/update`, formData, {
        headers: {
          "Content-Type": "multipart/form-data"
        }
      });
      fetchSlides();
      setShowEditSlideModal(false);
      setEditFormFields({ _id: "", photo: "", title: "", tagline: "" });
    } catch (error) {
      setError(error.message);
    } finally {
      setIsUpdating(false);
    }
  };

  const handleEditSlide = (slide) => {
    setEditFormFields({
      _id: slide._id,
      photo: null,
      title: slide.title,
      tagline: slide.tagline
    });
    setShowEditSlideModal(true);
  };

  const handleDeleteSlide = async (id) => {
    try {
      await axios.delete(`https://buweb.onrender.com/slide/${id}/delete`);
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
            <form onSubmit={handleCreateSlide}>
              <div
                style={{
                  display: "grid",
                  gap: "30px",
                  gridTemplateColumns: "repeat(4, minmax(0, 1fr))"
                }}
              >
                <div
                  style={{
                    gridColumn: "span 4",
                    border: "1px solid",
                    borderRadius: "5px",
                    padding: "1rem"
                  }}
                >
                  <Dropzone
                    acceptedFiles=".jpg,.jpeg,.png"
                    multiple={false}
                    onDrop={(acceptedFiles) =>
                      setCreateFormFields((prevFields) => ({
                        ...prevFields,
                        photo: acceptedFiles[0]
                      }))
                    }
                  >
                    {({ getRootProps, getInputProps }) => (
                      <div
                        {...getRootProps()}
                        style={{
                          border: "2px dashed",
                          padding: "1rem",
                          cursor: "pointer",
                          "&:hover": { backgroundColor: "#333" }
                        }}
                      >
                        <input {...getInputProps()} />
                        {!createFormFields.photo ? (
                          <p>Add Picture Here</p>
                        ) : (
                          <div>
                            <Typography>{createFormFields.photo.name}</Typography>
                            <EditOutlinedIcon />
                          </div>
                        )}
                      </div>
                    )}
                  </Dropzone>
                </div>
                <TextField
                  label="Title"
                  type="text"
                  value={createFormFields.title}
                  onChange={(e) =>
                    setCreateFormFields((prevFields) => ({
                      ...prevFields,
                      title: e.target.value
                    }))
                  }
                  style={{ gridColumn: "span 4" }}
                />
                <TextField
                  label="Tagline"
                  type="text"
                  value={createFormFields.tagline}
                  onChange={(e) =>
                    setCreateFormFields((prevFields) => ({
                      ...prevFields,
                      tagline: e.target.value
                    }))
                  }
                  style={{ gridColumn: "span 4" }}
                />
              </div>
              <div>
                <Button
                  fullWidth
                  type="submit"
                  style={{
                    margin: "2rem 0",
                    padding: "1rem",
                    backgroundColor: "#000",
                    color: "#fff",
                    "&:hover": { backgroundColor: "#333" }
                  }}
                  disabled={isCreating}
                >
                  {isCreating ? <CircularProgress size={24} /> : "Create Slide"}
                </Button>
              </div>
            </form>
          </Box>
        </Modal>

        {/* Edit slide modal */}
        {/* <Modal
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
            <form onSubmit={handleUpdateSlide}>
              <Box
                display="grid"
                gap="30px"
                gridTemplateColumns="repeat(4, minmax(0, 1fr))"
              >
                <Box
                  gridColumn="span 4"
                  border="1px solid"
                  borderRadius="5px"
                  p="1rem"
                >
                  <Dropzone
                    acceptedFiles=".jpg,.jpeg,.png"
                    multiple={false}
                    onDrop={(acceptedFiles) =>
                      setEditFormFields((prevFields) => ({
                        ...prevFields,
                        photo: acceptedFiles[0]
                      }))
                    }
                  >
                    {({ getRootProps, getInputProps }) => (
                      <Box
                        {...getRootProps()}
                        border='2px dashed'
                        p="1rem"
                        sx={{ "&:hover": { cursor: "pointer" } }}
                      >
                        <input {...getInputProps()} />
                        {!editFormFields.photo ? (
                          <p>Add Picture Here</p>
                        ) : (
                          <FlexBetween>
                            <Typography>{editFormFields.photo.name}</Typography>
                            <EditOutlinedIcon />
                          </FlexBetween>
                        )}
                      </Box>
                    )}
                  </Dropzone>
                </Box>
                <TextField
                  label="Title"
                  type="text"
                  value={editFormFields.title}
                  onChange={(e) =>
                    setEditFormFields((prevFields) => ({
                      ...prevFields,
                      title: e.target.value
                    }))
                  }
                  sx={{ gridColumn: `span 4` }}
                />
                <TextField
                  label="Tagline"
                  type="text"
                  value={editFormFields.tagline}
                  onChange={(e) =>
                    setEditFormFields((prevFields) => ({
                      ...prevFields,
                      tagline: e.target.value
                    }))
                  }
                  sx={{ gridColumn: `span 4` }}
                />
              </Box>
              <Box>
                <Button
                  fullWidth
                  type="submit"
                  sx={{
                    m: "2rem 0",
                    p: "1rem",
                    backgroundColor: "#000",
                    color: "#fff",
                    "&:hover": { backgroundColor: "#333" },
                  }}
                  disabled={isUpdating}
                >
                  {isUpdating ? <CircularProgress size={24} /> : "Update Slide"}
                </Button>
              </Box>
            </form>
          </Box>
        </Modal> */}
      </SoftBox>
      <Footer />
    </DashboardLayout>
  );
};

export default Tables;
