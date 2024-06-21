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
  },
});

const Events = () => {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [showNewEventModal, setShowNewEventModal] = useState(false);
  const [showEditEventModal, setShowEditEventModal] = useState(false);
  const [isCreating, setIsCreating] = useState(false);
  const [isUpdating, setIsUpdating] = useState(false);
  const token = useSelector((state) => state.token);

  const [createFormFields, setCreateFormFields] = useState({
    coverPhotoUrl: "",
    title: "",
    description: "",
    date: "",
    location: "",
  });
  const [editFormFields, setEditFormFields] = useState({
    _id: "",
    coverPhotoUrl: null,
    title: "",
    description: "",
    date: "",
    location: "",
  });

  const fetchEvents = async () => {
    setLoading(true);
    try {
      const response = await axios.get("https://buweb.onrender.com/events", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setEvents(response.data);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchEvents();
  }, []);

  const handleCreateEvent = async (e) => {
    e.preventDefault();
    setIsCreating(true);
    try {
      const formData = new FormData();
      formData.append("coverPhotoUrl", createFormFields.coverPhotoUrl);
      formData.append("title", createFormFields.title);
      formData.append("description", createFormFields.description);
      formData.append("date", createFormFields.date);
      formData.append("location", createFormFields.location);

      const response = await axios.post("https://buweb.onrender.com/events/create", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${token}`,
        },
      });

      if (response.status === 201) {
        fetchEvents();
        setShowNewEventModal(false);
        setCreateFormFields({
          coverPhotoUrl: "",
          title: "",
          description: "",
          date: "",
          location: "",
        });
      }
    } catch (error) {
      setError(error.message);
    } finally {
      setIsCreating(false);
      fetchEvents();
      setShowNewEventModal(false);
      setCreateFormFields({
        coverPhotoUrl: "",
        title: "",
        description: "",
        date: "",
        location: "",
      });
    }
  };

  const handleUpdateEvent = async (e) => {
    e.preventDefault();
    setIsUpdating(true);
    try {
      const formData = new FormData();
      if (editFormFields.coverPhotoUrl) {
        formData.append("coverPhotoUrl", editFormFields.coverPhotoUrl);
      }
      formData.append("title", editFormFields.title);
      formData.append("description", editFormFields.description);
      formData.append("date", editFormFields.date);
      formData.append("location", editFormFields.location);

      await axios.patch(`https://buweb.onrender.com/events/${editFormFields._id}/update`, formData, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "multipart/form-data",
        },
      });
      fetchEvents();
      setShowEditEventModal(false);
      setEditFormFields({
        _id: "",
        coverPhotoUrl: "",
        title: "",
        description: "",
        date: "",
        location: "",
      });
    } catch (error) {
      setError(error.message);
    } finally {
      setIsUpdating(false);
    }
  };

  const handleEditEvent = (event) => {
    setEditFormFields({
      _id: event._id,
      coverPhotoUrl: event.coverPhotoUrlUrl,
      title: event.title,
      description: event.description,
      date: event.date,
      location: event.location,
    });
    setShowEditEventModal(true);
  };

  const handleDeleteEvent = async (id) => {
    try {
      await axios.delete(`https://buweb.onrender.com/events/${id}/delete`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      fetchEvents();
    } catch (error) {
      setError(error.message);
    }
  };

  const classes = useStyles();

  const columns = [
    { name: 'coverPhotoUrl', label: 'Cover Photo' },
    { name: 'title', label: 'Title' },
    { name: 'description', label: 'Description' },
    { name: 'date', label: 'Date' },
    { name: 'location', label: 'Location' },
    {
      name: 'actions',
      align: 'center',
      label: 'Actions',
      render: (event) => (
        <div>
          <Button variant="contained" color="primary" onClick={() => handleEditEvent(event)} style={{ marginRight: '8px' }}>
            Edit
          </Button>
          <Button variant="contained" color="secondary" onClick={() => handleDeleteEvent(event._id)}>
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
              <SoftTypography variant="h6">Events Table</SoftTypography>
              <Button variant="contained" color="primary" onClick={() => setShowNewEventModal(true)}>
                Create New Event
              </Button>
            </SoftBox>
            {loading && <CircularProgress />}
            {error && <div>Error: {error}</div>}
            {!loading && !error && (
              <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                  <TableBody>
                    {columns.map((column) => (
                      <TableCell
                        key={column.name}
                        align={column.align}
                        className={classes.headerCell}
                      >
                        {column.label.toUpperCase()}
                      </TableCell>
                    ))}
                    {events.map((event) => (
                      <TableRow key={event._id}>
                        {columns.map((column) => (
                          <TableCell key={column.name} align={column.align} component="th" scope="row">
                            {column.render
                              ? column.render(event)
                              : (column.name === 'coverPhotoUrl'
                                ? <img src={event[column.name]} alt="Cover Photo" className={classes.image} />
                                : event[column.name]
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

        {/* Create new event modal */}
        <Modal
          open={showNewEventModal}
          onClose={() => setShowNewEventModal(false)}
        >
          <Box
            p={3}
            bgcolor="background.paper"
            boxShadow={3}
            borderRadius={2}
            maxWidth="500px"
            mx="auto"
            mt="5%"
            mb="5%"
            sx={{
              height: '80vh',
              overflowY: 'scroll'
            }}
          >
            <form onSubmit={handleCreateEvent}>
              <div
                style={{
                  display: "grid",
                  gap: "30px",
                  gridTemplateColumns: "repeat(4, minmax(0, 1fr))",
                }}
              >
                <div
                  style={{
                    gridColumn: "span 4",
                    border: "1px solid",
                    borderRadius: "5px",
                    padding: "1rem",
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
                  >
                    {({ getRootProps, getInputProps }) => (
                      <div
                        {...getRootProps()}
                        style={{
                          border: "2px dashed",
                          padding: "1rem",
                          cursor: "pointer",
                        }}
                      >
                        <input {...getInputProps()} />
                        {!createFormFields.coverPhotoUrl ? (
                          <p>Add Cover Photo Here</p>
                        ) : (
                          <div>
                            <Typography>{createFormFields.coverPhotoUrl.name}</Typography>
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
                      title: e.target.value,
                    }))
                  }
                  style={{ gridColumn: "span 4" }}
                />
                <TextField
                  label="Description"
                  type="text"
                  value={createFormFields.description}
                  onChange={(e) =>
                    setCreateFormFields((prevFields) => ({
                      ...prevFields,
                      description: e.target.value,
                    }))
                  }
                  style={{ gridColumn: "span 4" }}
                />
                <TextField
                  label="Date"
                  type="text"
                  value={createFormFields.date}
                  onChange={(e) =>
                    setCreateFormFields((prevFields) => ({
                      ...prevFields,
                      date: e.target.value,
                    }))
                  }
                  style={{ gridColumn: "span 4" }}
                />
                <TextField
                  label="Location"
                  type="text"
                  value={createFormFields.location}
                  onChange={(e) =>
                    setCreateFormFields((prevFields) => ({
                      ...prevFields,
                      location: e.target.value,
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
                    "&:hover": { backgroundColor: "#333" },
                  }}
                  disabled={isCreating}
                >
                  {isCreating ? <CircularProgress size={24} /> : "Create Event"}
                </Button>
              </div>
            </form>
          </Box>
        </Modal>

        {/* Edit event modal */}
        <Modal
          open={showEditEventModal}
          onClose={() => setShowEditEventModal(false)}
        >
          <Box
            p={3}
            bgcolor="background.paper"
            boxShadow={3}
            borderRadius={2}
            maxWidth="500px"
            mx="auto"
            mt="10%"
            sx={{
              height: '80vh',
              overflowY: 'scroll'
            }}
          >
            <form onSubmit={handleUpdateEvent}>
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
                        coverPhotoUrl: acceptedFiles[0],
                      }))
                    }
                  >
                    {({ getRootProps, getInputProps }) => (
                      <Box
                        {...getRootProps()}
                        border="2px dashed"
                        p="1rem"
                        sx={{ "&:hover": { cursor: "pointer" } }}
                      >
                        <input {...getInputProps()} />
                        {!editFormFields.coverPhotoUrl ? (
                          <p>Add Cover Photo Here</p>
                        ) : (
                          <div>
                            <Typography>{editFormFields.coverPhotoUrl.name}</Typography>
                            <EditOutlinedIcon />
                          </div>
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
                      title: e.target.value,
                    }))
                  }
                  sx={{ gridColumn: `span 4` }}
                />
                <TextField
                  label="Description"
                  type="text"
                  value={editFormFields.description}
                  onChange={(e) =>
                    setEditFormFields((prevFields) => ({
                      ...prevFields,
                      description: e.target.value,
                    }))
                  }
                  sx={{ gridColumn: `span 4` }}
                />
                <TextField
                  label="Date"
                  type="text"
                  value={editFormFields.date}
                  onChange={(e) =>
                    setEditFormFields((prevFields) => ({
                      ...prevFields,
                      date: e.target.value,
                    }))
                  }
                  sx={{ gridColumn: `span 4` }}
                />
                <TextField
                  label="Location"
                  type="text"
                  value={editFormFields.location}
                  onChange={(e) =>
                    setEditFormFields((prevFields) => ({
                      ...prevFields,
                      location: e.target.value,
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
                  {isUpdating ? <CircularProgress size={24} /> : "Update Event"}
                </Button>
              </Box>
            </form>
          </Box>
        </Modal>
      </SoftBox>
      <Footer />
    </DashboardLayout>
  );
};

export default Events;
