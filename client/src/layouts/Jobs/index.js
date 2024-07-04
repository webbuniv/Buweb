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
  TableBody,
  TableRow,
  TableCell,
  Paper,
  Box,
  TextField,
} from "@mui/material";
import Dropzone from "react-dropzone";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
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
    maxWidth: "100px",
    maxHeight: "50px",
  },
  headerCell: {
    fontWeight: "bold",
    padding: "20px",
  },
});

const Jobs = () => {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [showNewJobModal, setShowNewJobModal] = useState(false);
  const [showEditJobModal, setShowEditJobModal] = useState(false);
  const [isCreating, setIsCreating] = useState(false);
  const [isUpdating, setIsUpdating] = useState(false);
  const token = useSelector((state) => state.token);

  const [createFormFields, setCreateFormFields] = useState({
    title: "",
    numberOfPositions: "",
    responsibleTo: "",
    termsOfEmployment: "",
    purposeOfJob: "",
    minimumQualifications: [],
    additionalRequirements: [],
    immediateContact: "",
    deadline: "",
  });
  const [editFormFields, setEditFormFields] = useState({
    _id: "",
    title: "",
    numberOfPositions: "",
    responsibleTo: "",
    termsOfEmployment: "",
    purposeOfJob: "",
    minimumQualifications: [],
    additionalRequirements: [],
    immediateContact: "",
    deadline: "",
  });

  const classes = useStyles();

  useEffect(() => {
    fetchJobs();
  }, []);

  const fetchJobs = async () => {
    setLoading(true);
    try {
      const response = await axios.get("http://localhost:3001/jobs", {
            headers: {
            Authorization: `Bearer ${token}`,
          }
      });
      setJobs(response.data);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  const handleCreateJob = async (e) => {
    e.preventDefault();
    setIsCreating(true);
    try {
      const formData = {
        title: createFormFields.title,
        numberOfPositions: createFormFields.numberOfPositions,
        responsibleTo: createFormFields.responsibleTo,
        deadline: createFormFields.deadline,
        immediateContact: createFormFields.immediateContact,
        purposeOfJob: createFormFields.purposeOfJob,
        termsOfEmployment: createFormFields.termsOfEmployment,
        additionalRequirements: createFormFields.additionalRequirements.join(","),
        minimumQualifications: createFormFields.minimumQualifications.join(","),
      };
  
      const response = await axios.post(
        "http://localhost:3001/jobs/create",
        formData,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );
  
      if (response.status === 201) {
        fetchJobs();
        setShowNewJobModal(false);
        resetCreateForm();
      }
    } catch (error) {
      setError(error.message);
    } finally {
      setIsCreating(false);
      setShowNewJobModal(false);
      resetCreateForm();
    }
  };
  

  const handleUpdateJob = async (e) => {
    e.preventDefault();
    setIsUpdating(true);
    try {
      const formData = new FormData();
      formData.append("title", createFormFields.title);
      formData.append("numberOfPositions", createFormFields.numberOfPositions);
      formData.append("responsibleTo", createFormFields.responsibleTo);
      formData.append("deadline", createFormFields.deadline);
      formData.append("immediateContact", createFormFields.immediateContact);
      formData.append("purposeOfJob", createFormFields.purposeOfJob);
      formData.append("termsOfEmployment", createFormFields.termsOfEmployment);
      formData.append("additionalRequirements", createFormFields.additionalRequirements.join(","));
      formData.append("minimumQualifications", createFormFields.minimumQualifications.join(","));

      await axios.patch(
        `http://localhost:3001/jobs/${editFormFields._id}/update`,
        formData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "multipart/form-data",
          },
        }
      );
      fetchJobs();
      setShowEditJobModal(false);
      resetEditForm();
    } catch (error) {
      setError(error.message);
    } finally {
      setIsUpdating(false);
      setShowEditJobModal(false);
      fetchJobs();
    }
  };

  const handleEditJob = (jobItem) => {
    setEditFormFields({
      _id: jobItem._id,
      title: jobItem.title,
      numberOfPositions: jobItem.numberOfPositions,
      responsibleTo: jobItem.responsibleTo,
      deadline: jobItem.deadline,
      immediateContact: jobItem.immediateContact,
      purposeOfJob: jobItem.purposeOfJob,
      termsOfEmployment: jobItem.termsOfEmployment,
      additionalRequirements: jobItem.additionalRequirements,
      minimumQualifications: jobItem.minimumQualifications,
    });
    setShowEditJobModal(true);
  };

  const handleDeleteJob = async (id) => {
    try {
      await axios.delete(`http://localhost:3001/jobs/${id}/delete`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      fetchJobs();
    } catch (error) {
      setError(error.message);
    }
  };

  const resetCreateForm = () => {
    setCreateFormFields({
      title: "",
      numberOfPositions: "",
      responsibleTo: "",
      deadline: "",
      immediateContact: "",
      purposeOfJob: "",
      termsOfEmployment: "",
      additionalRequirements: [],
      minimumQualifications: [],
    });
  };

  const resetEditForm = () => {
    setEditFormFields({
        _id: "",
        title: "",
        numberOfPositions: "",
        responsibleTo: "",
        deadline: "",
        immediateContact: "",
        purposeOfJob: "",
        termsOfEmployment: "",
        additionalRequirements: [],
        minimumQualifications: [],
    });
  };

  const columns = [
    { name: "title", label: "Title" },
    { name: "numberOfPosistions", label: "Positions" },
    { name: "responsibleTo", label: "Responsible To" },
    { name: "deadline", label: "Deadline" },
    {
      name: "actions",
      align: "center",
      label: "Actions",
      render: (jobItem) => (
        <div>
          <Button
            variant="contained"
            color="primary"
            onClick={() => handleEditJob(jobItem)}
            style={{ marginRight: "8px" }}
          >
            Edit
          </Button>
          <Button
            variant="contained"
            color="secondary"
            onClick={() => handleDeleteJob(jobItem._id)}
          >
            Delete
          </Button>
        </div>
      ),
    },
  ];

  return (
    <DashboardLayout>
      <DashboardNavbar />
      <Box p={3}>
        <Card>
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            p={3}
          >
            <Typography variant="h6">Jobs Table</Typography>
            <Button
              variant="contained"
              color="primary"
              onClick={() => setShowNewJobModal(true)}
            >
              Create New Job
            </Button>
          </Box>
          {loading && <CircularProgress />}
          {!loading && (
            <TableContainer component={Paper}>
              <Table className={classes.table}>
                <TableBody>
                  <TableRow>
                    {columns.map((column) => (
                      <TableCell key={column.name} className={classes.headerCell}>
                        {column.label}
                      </TableCell>
                    ))}
                  </TableRow>
                  {jobs.map((jobItem) => (
                    <TableRow key={jobItem._id}>
                      {columns.map((column) => (
                        <TableCell key={column.name}>
                          {column.render
                            ? column.render(jobItem)
                            : column.name === "logo"
                            ? (
                              <img
                                src={jobItem[column.name]}
                                alt="Logo"
                                className={classes.image}
                              />
                            )
                            : jobItem[column.name]}
                        </TableCell>
                      ))}
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          )}
        </Card>
      </Box>

      {/* Create new job modal */}
    <Modal 
        open={showNewJobModal} 
        onClose={() => setShowNewJobModal(false)}
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
          <Typography variant="h6">Create New Job</Typography>
            <form onSubmit={handleCreateJob}>
                <TextField
                    fullWidth
                    margin="none"
                    label="Title"
                    value={createFormFields.title}
                    onChange={(e) =>
                        setCreateFormFields((prevFields) => ({
                            ...prevFields,
                            title: e.target.value,
                        }))
                    }
                />
                <TextField
                    fullWidth
                    margin="normal"
                    label="Positions"
                    type="number"
                    value={createFormFields.numberOfPositions}
                    onChange={(e) =>
                        setCreateFormFields((prevFields) => ({
                            ...prevFields,
                            numberOfPositions: e.target.value,
                        }))
                    }
                />
                <TextField
                    fullWidth
                    margin="normal"
                    label="Responsible To"
                    value={createFormFields.responsibleTo}
                    onChange={(e) =>
                        setCreateFormFields((prevFields) => ({
                            ...prevFields,
                            responsibleTo: e.target.value,
                        }))
                    }
                />
                <TextField
                    fullWidth
                    margin="normal"
                    label="Deadline"
                    type="date"
                    InputLabelProps={{
                    shrink: true,
                    }}
                    value={createFormFields.deadline}
                    onChange={(e) =>
                        setCreateFormFields((prevFields) => ({
                            ...prevFields,
                            deadline: e.target.value,
                        }))
                    }
                />
                <TextField
                    fullWidth
                    margin="normal"
                    label="Immediate Contact"
                    type="email"
                    value={createFormFields.immediateContact}
                    onChange={(e) =>
                        setCreateFormFields((prevFields) => ({
                            ...prevFields,
                            immediateContact: e.target.value,
                        }))
                    }
                />
                <TextField
                    fullWidth
                    margin="normal"
                    label="Purpose Of Job"
                    type="text"
                    value={createFormFields.purposeOfJob}
                    onChange={(e) =>
                        setCreateFormFields((prevFields) => ({
                            ...prevFields,
                            purposeOfJob: e.target.value,
                        }))
                    }
                />
                <TextField
                    fullWidth
                    margin="normal"
                    label="Terms Of Employment"
                    value={createFormFields.termsOfEmployment}
                    onChange={(e) =>
                        setCreateFormFields((prevFields) => ({
                            ...prevFields,
                            termsOfEmployment: e.target.value,
                        }))
                    }
                    multiline
                    rows={4}
                    variant="outlined"
                    sx={{ gridColumn: "span 4" }}
                />
                <TextField
                    fullWidth
                    margin="normal"
                    label="Minimum Qualifications (comma separated)"
                    value={createFormFields.minimumQualifications}
                    onChange={(e) =>
                        setCreateFormFields((prevFields) => ({
                            ...prevFields,
                            minimumQualifications: e.target.value.split(",").map(tag => tag.trim()),
                        }))
                    }
                    multiline
                    rows={10}
                    variant="outlined"
                    sx={{ gridColumn: "span 4" }}
                />
                <TextField
                    fullWidth
                    margin="normal"
                    label="Additional Requirements (comma separated)"
                    value={createFormFields.additionalRequirements}
                    onChange={(e) =>
                        setCreateFormFields((prevFields) => ({
                            ...prevFields,
                            additionalRequirements: e.target.value.split(",").map(tag => tag.trim()),
                        }))
                    }
                    multiline
                    rows={10}
                    variant="outlined"
                    sx={{ gridColumn: "span 4" }}
                />
                
            <Box mt={2}>
                <Button
                    type="submit"
                    variant="contained"
                    color="primary"
                    disabled={isCreating}
                >
                    {isCreating ? <CircularProgress size={24} /> : "Create"}
                </Button>
            </Box>
        </form>

        </Box>
      </Modal>

      {/* Edit job modal */}
      <Modal open={showEditJobModal} onClose={() => setShowEditJobModal(false)}>
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
          <Typography variant="h6">Edit Job</Typography>
          <form onSubmit={handleUpdateJob}>
            <TextField
                fullWidth
                margin="none"
                label="Title"
                value={createFormFields.title}
                onChange={(e) =>
                  setCreateFormFields({
                    ...createFormFields,
                    title: e.target.value,
                  })
                }
              />
              <TextField
                fullWidth
                margin="normal"
                label="Positions"
                type="number"
                value={createFormFields.numberOfPositions}
                onChange={(e) =>
                  setCreateFormFields({
                    ...createFormFields,
                    numberOfPositions: e.target.value,
                  })
                }
              />
              <TextField
                fullWidth
                margin="normal"
                label="Responsible To"
                value={createFormFields.responsibleTo}
                onChange={(e) =>
                  setCreateFormFields({
                    ...createFormFields,
                    responsibleTo: e.target.value,
                  })
                }
              />
              <TextField
                fullWidth
                margin="normal"
                label="Deadline"
                type="date"
                InputLabelProps={{
                  shrink: true,
                }}
                value={createFormFields.deadline}
                onChange={(e) =>
                  setCreateFormFields({
                    ...createFormFields,
                    deadline: e.target.value,
                  })
                }
              />
              <TextField
                fullWidth
                margin="normal"
                label="Immediate Contact"
                type="email"
                value={createFormFields.immediateContact}
                onChange={(e) =>
                  setCreateFormFields({
                    ...createFormFields,
                    immediateContact: e.target.value,
                  })
                }
              />
              <TextField
                fullWidth
                margin="normal"
                label="Purpose Of Job"
                type="text"
                value={createFormFields.purposeOfJob}
                onChange={(e) =>
                  setCreateFormFields({
                    ...createFormFields,
                    purposeOfJob: e.target.value,
                  })
                }
              />
              <TextField
                fullWidth
                margin="normal"
                label="Terms Of Employment"
                value={createFormFields.termsOfEmployment}
                onChange={(e) =>
                  setCreateFormFields({
                    ...createFormFields,
                    termsOfEmployment: e.target.value,
                  })
                }
                multiline
                  rows={4}
                  variant="outlined"
                  sx={{ gridColumn: "span 4" }}
              />
              <TextField
                  fullWidth
                  margin="normal"
                  label="Additional Requirements (comma separated)"
                  value={createFormFields.additionalRequirements.join(",")}
                  onChange={(e) =>
                      setCreateFormFields({
                      ...createFormFields,
                      additionalRequirements: e.target.value.split(","),
                      })
                  }
                  multiline
                  rows={10}
                  variant="outlined"
                  sx={{ gridColumn: "span 4" }}
              />
              <TextField
                  fullWidth
                  margin="normal"
                  label="Minimum Qualifications (comma separated)"
                  value={createFormFields.minimumQualifications.join(",")}
                  onChange={(e) =>
                      setCreateFormFields({
                      ...createFormFields,
                      minimumQualifications: e.target.value.split(","),
                      })
                  }
                  multiline
                  rows={10}
                  variant="outlined"
                  sx={{ gridColumn: "span 4" }}
              />
            <Box mt={2}>
              <Button
                type="submit"
                variant="contained"
                color="primary"
                disabled={isUpdating}
              >
                {isUpdating ? <CircularProgress size={24} /> : "Update"}
              </Button>
            </Box>
          </form>
        </Box>
      </Modal>

      <Footer />
    </DashboardLayout>
  );
};

export default Jobs;
