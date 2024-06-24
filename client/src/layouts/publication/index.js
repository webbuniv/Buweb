import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from "@mui/material/Card";
import Modal from "@mui/material/Modal";
import Button from "@mui/material/Button";
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
import { useSelector } from "react-redux";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles({
  table: {
    minWidth: 550,
  },
  image: {
    maxWidth: '100px',
    maxHeight: '50px',
  },
  headerCell: {
    fontWeight: "bold",
    padding: "20px",
    // Add any other styles you want
  },
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  modalContent: {
    backgroundColor: '#fff', // Set background color
    border: '2px solid #000',
    boxShadow: '0px 3px 5px rgba(0, 0, 0, 0.2)', // Add box shadow
    padding: '24px',
    overflowY: 'auto',
    borderRadius: '8px', // Add border radius
    maxWidth: '600px',
    margin: '1% auto 5%',
  },
});

const Publication = () => {
  const [publications, setPublications] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [showNewPublicationModal, setShowNewPublicationModal] = useState(false);
  const [showEditPublicationModal, setShowEditPublicationModal] = useState(false);
  const [isCreating, setIsCreating] = useState(false);
  const [isUpdating, setIsUpdating] = useState(false);
  const token = useSelector((state) => state.token);

  const [createFormFields, setCreateFormFields] = useState({
    coverPhotoUrl: "",
    firstName: "",
    lastName: "",
    email: "",
    title: "",
    tags: "",
    description: "",
    publicationUrl: ""
  });
  const [editFormFields, setEditFormFields] = useState({
    _id: "",
    coverPhotoUrl: null,
    firstName: "",
    lastName: "",
    email: "",
    title: "",
    tags: "",
    description: "",
    publicationUrl: ""
  });

  const fetchPublications = async () => {
    setLoading(true);
    try {
      const response = await axios.get("https://buweb.onrender.com/publication", {
        headers: {
          Authorization: `Bearer ${token}`,
        }
      });
      setPublications(response.data);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPublications();
  }, []);

  const handleCreatePublication = async (e) => {
    e.preventDefault();
    setIsCreating(true);
    try {
      const formData = new FormData();
      formData.append("coverPhotoUrl", createFormFields.coverPhotoUrl);
      formData.append("firstName", createFormFields.firstName);
      formData.append("lastName", createFormFields.lastName);
      formData.append("email", createFormFields.email);
      formData.append("title", createFormFields.title);
      formData.append("tags", createFormFields.tags);
      formData.append("description", createFormFields.description);
      formData.append("publicationUrl", createFormFields.publicationUrl);

      const response = await axios.post("https://buweb.onrender.com/publication/create", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${token}`,
        }
      });
      if (response.status === 201) {
        fetchPublications();
        setShowNewPublicationModal(false);
        setCreateFormFields({
          
          coverPhotoUrl: "",
          firstName: "",
          lastName: "",
          email: "",
          title: "",
          tags: "",
          description: "",
          publicationUrl: ""
        });
      }
    } catch (error) {
      setError(error.message);
    } finally {
      setIsCreating(false);
    }
  };

  const handleUpdatePublication = async (e) => {
    e.preventDefault();
    setIsUpdating(true);
    try {
      const formData = new FormData();
      if (editFormFields.coverPhotoUrl) {
        formData.append("coverPhotoUrl", editFormFields.coverPhotoUrl);
      }
      formData.append("firstName", editFormFields.firstName);
      formData.append("lastName", editFormFields.lastName);
      formData.append("email", editFormFields.email);
      formData.append("title", editFormFields.title);
      formData.append("tags", editFormFields.tags);
      formData.append("description", editFormFields.description);
      formData.append("publicationUrl", editFormFields.publicationUrl);

      await axios.patch(`https://buweb.onrender.com/publication/${editFormFields._id}/update`, formData, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "multipart/form-data"
        }
      });
      fetchPublications();
      setShowEditPublicationModal(false);
      setEditFormFields({
        _id: "",
        coverPhotoUrl: "",
        firstName: "",
        lastName: "",
        email: "",
        title: "",
        tags: "",
        description: "",
        publicationUrl: ""
      });
    } catch (error) {
      setError(error.message);
    } finally {
      setIsUpdating(false);
    }
  };

  const handleEditPublication = (publication) => {
    setEditFormFields({
      _id: publication._id,
      coverPhotoUrl: publication.coverPhotoUrl,
      firstName: publication.firstName,
      lastName: publication.lastName,
      email: publication.email,
      title: publication.title,
      tags: publication.tags.join(", "),
      description: publication.description,
      publicationUrl: publication.publicationUrl
    });
    setShowEditPublicationModal(true);
  };

  const handleDeletePublication = async (id) => {
    try {
      await axios.delete(`https://buweb.onrender.com/publication/${id}/delete`, {
        headers: {
          Authorization: `Bearer ${token}`,
        }
      });
      fetchPublications();
    } catch (error) {
      setError(error.message);
    }
  };

  const classes = useStyles();

  const columns = [
    { name: 'coverPhotoUrl', label: 'Cover Photo' },
    { name: 'firstName', label: 'First Name' },
    { name: 'lastName', label: 'Last Name' },
    { name: 'email', label: 'Email' },
    { name: 'title', label: 'Title' },
    { name: 'tags', label: 'Tags' },
    { name: 'description', label: 'Description' },
    {
      name: 'actions',
      align: 'center',
      label: 'Actions',
      render: (publication) => (
        <div>
          <Button variant="contained" color="primary" onClick={() => handleEditPublication(publication)} style={{ marginRight: '8px' }}>
            Edit
          </Button>
          <Button variant="contained" color="secondary" onClick={() => handleDeletePublication(publication._id)}>
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
              <SoftTypography variant="h6">Publications Table</SoftTypography>
              <Button variant="contained" color="primary" onClick={() => setShowNewPublicationModal(true)}>
                Create New Publication
              </Button>
            </SoftBox>
            {loading && <CircularProgress />}
            {error && <div>Error: {error}</div>}
            {!loading && !error && (
              <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                  <TableBody>
                    <TableRow>
                      {columns.map((column) => (
                        <TableCell
                          key={column.name}
                          align={column.align}
                          className={classes.headerCell} 
                        >
                          {column.label.toUpperCase()}
                        </TableCell>
                      ))}
                    </TableRow>
                    {publications.map((publication) => (
                      <TableRow key={publication._id}>
                        {columns.map((column) => (
                          <TableCell key={column.name}>
                            {column.render
                              ? column.render(publication)
                              : (column.name === 'coverPhotoUrl'
                                ? <img src={publication[column.name]} alt="Photo" className={classes.image} />
                                : publication[column.name]
                              )}
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
      </SoftBox>
      <Footer />

      {/* Modal for creating a new publication */}
      <Modal
      open={showNewPublicationModal}
      onClose={() => setShowNewPublicationModal(false)}
      aria-labelledby="new-publication-modal-title"
      aria-describedby="new-publication-modal-description"
    >
      <Box 
        p={3} 
        bgcolor="background.paper" 
        boxShadow={3} 
        borderRadius={2} 
        maxWidth="600px" 
        mx="auto" 
        mt="1%" 
        mb="5%"
      >
        <form onSubmit={handleCreatePublication}>
          <div style={{ 
            display: 'flex', 
            flexDirection: 'column', 
            gap: '20px',
            gridTemplateColumns: "repeat(4, minmax(0, 1fr))"
            }}
          >
            <Dropzone
              acceptedFiles=".jpg,.jpeg,.png"
              multiple={false}
              onDrop={(acceptedFiles) =>
                setCreateFormFields((prevFields) => ({
                  ...prevFields,
                  coverPhotoUrl: acceptedFiles[0],
                }))
              }
              style={{ border: "1px solid", borderRadius: "5px", padding: "1rem" }}
            >
              {({ getRootProps, getInputProps }) => (
                <Box
                  {...getRootProps()}
                  border={`2px dashed grey`}
                  p={2}
                  textAlign="center"
                  sx={{ "&:hover": { cursor: "pointer" } }}
                >
                  <input {...getInputProps()} />
                  {!createFormFields.coverPhotoUrl ? (
                    <p>Add Cover Photo Here</p>
                  ) : (
                    <div style={{ display: "flex", justifyContent: "space-between" }}>
                      <Typography>{createFormFields.coverPhotoUrl.name}</Typography>
                      <EditOutlinedIcon />
                    </div>
                  )}
                </Box>
              )}
            </Dropzone>
          </div>
          <div 
            style={{ 
              display: 'grid', 
              gap: '30px', 
              gridTemplateColumns: 'repeat(2, minmax(0, 1fr))',
              gridTemplateRows: 'repeat(3, minmax(0, 1fr))',
              padding: '20px',
            }}
          >
            <TextField
              fullWidth
              style={{
                paddingTop: '20px'
              }}
              label="First Name"
              value={createFormFields.firstName}
              onChange={(e) => setCreateFormFields({ ...createFormFields, firstName: e.target.value })}
            />
            <TextField
              fullWidth
              label="Last Name"
              value={createFormFields.lastName}
              onChange={(e) => setCreateFormFields({ ...createFormFields, lastName: e.target.value })}
            />
            <TextField
              fullWidth
              label="Email"
              value={createFormFields.email}
              onChange={(e) => setCreateFormFields({ ...createFormFields, email: e.target.value })}
            />
            <TextField
              fullWidth
              label="Title"
              value={createFormFields.title}
              onChange={(e) => setCreateFormFields({ ...createFormFields, title: e.target.value })}
            />
            <TextField
              fullWidth
              label="Tags"
              value={createFormFields.tags}
              onChange={(e) => setCreateFormFields({ ...createFormFields, tags: e.target.value })}
            />
            <TextField
              fullWidth
              label="Description"
              value={createFormFields.publicationUrl}
              onChange={(e) => setCreateFormFields({ ...createFormFields, publicationUrl: e.target.value })}
            />
          </div>
          <TextField
              fullWidth
              label="Description"
              value={createFormFields.description}
              style={{
                paddingBottom: '20px'
              }}
              onChange={(e) => setCreateFormFields({ ...createFormFields, description: e.target.value })}
            />
          <Button
            fullWidth
            type="submit"
            variant="contained"
            color="primary"
            disabled={isCreating}
          >
            {isCreating ? "Creating..." : "Create Publication"}
          </Button>
        </form>
      </Box>
    </Modal>

      {/* Modal for editing a publication */}
      <Modal
      open={showEditPublicationModal}
      onClose={() => setShowEditPublicationModal(false)}
      aria-labelledby="edit-publication-modal-title"
      aria-describedby="edit-publication-modal-description"
    >
      <Box p={3} bgcolor="background.paper" boxShadow={3} borderRadius={2} maxWidth="500px" mx="auto" mt="5%" mb="5%">
        <form onSubmit={handleUpdatePublication}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            <Dropzone
              acceptedFiles=".jpg,.jpeg,.png"
              multiple={false}
              onDrop={(acceptedFiles) =>
                setEditFormFields((prevFields) => ({
                  ...prevFields,
                  coverPhotoUrl: acceptedFiles[0],
                }))
              }
              style={{ border: "1px solid", borderRadius: "5px", padding: "1rem" }}
            >
              {({ getRootProps, getInputProps }) => (
                <Box
                  {...getRootProps()}
                  border={`2px dashed grey`}
                  p={2}
                  textAlign="center"
                  sx={{ "&:hover": { cursor: "pointer" } }}
                >
                  <input {...getInputProps()} />
                  {!editFormFields.coverPhotoUrl ? (
                    <p>Add Cover Photo Here</p>
                  ) : (
                    <div style={{ display: "flex", justifyContent: "space-between" }}>
                      <Typography>{editFormFields.coverPhotoUrl.name}</Typography>
                      <EditOutlinedIcon />
                    </div>
                  )}
                </Box>
              )}
            </Dropzone>
          </div>
          <div style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap', gap: '20px', 
            paddingTop: '20px'
          }}>
            <TextField
              fullWidth
              label="First Name"
              value={editFormFields.firstName}
              onChange={(e) => setEditFormFields({ ...editFormFields, firstName: e.target.value })}
            />
            <TextField
              fullWidth
              label="Last Name"
              value={editFormFields.lastName}
              onChange={(e) => setEditFormFields({ ...editFormFields, lastName: e.target.value })}
            />
            <TextField
              fullWidth
              label="Email"
              value={editFormFields.email}
              onChange={(e) => setEditFormFields({ ...editFormFields, email: e.target.value })}
            />
            <TextField
              fullWidth
              label="Title"
              value={editFormFields.title}
              onChange={(e) => setEditFormFields({ ...editFormFields, title: e.target.value })}
            />
            <TextField
              fullWidth
              label="Tags"
              value={editFormFields.tags}
              onChange={(e) => setEditFormFields({ ...editFormFields, tags: e.target.value })}
            />
            <TextField
              fullWidth
              style={{
                paddingBottom: '20px'
              }}
              label="Description"
              value={editFormFields.description}
              onChange={(e) => setEditFormFields({ ...editFormFields, description: e.target.value })}
            />
          </div>
          <Button
            type="submit"
            variant="contained"
            color="primary"
            fullWidth
            disabled={isUpdating}
          >
            {isUpdating ? "Updating..." : "Update Publication"}
          </Button>
        </form>
      </Box>
    </Modal>
    </DashboardLayout>
  );
};

export default Publication;
