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
    maxWidth: "100px",
    maxHeight: "50px",
  },
  headerCell: {
    fontWeight: "bold",
    padding: "20px",
  },
});

const Teams = () => {
  const [teams, setTeams] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [showNewTeamModal, setShowNewTeamModal] = useState(false);
  const [showEditTeamModal, setShowEditTeamModal] = useState(false);
  const [isCreating, setIsCreating] = useState(false);
  const [isUpdating, setIsUpdating] = useState(false);
  const token = useSelector((state) => state.token);

  const [createFormFields, setCreateFormFields] = useState({
    image_url: null,
    name: "",
    position: "",
    social_twitter: "",
    social_facebook: "",
    social_instagram: "",
    social_linkedin: "",
    bio: "",
    quote: "",
  });

  const [editFormFields, setEditFormFields] = useState({
    _id: "",
    image_url: null,
    name: "",
    position: "",
    social_twitter: "",
    social_facebook: "",
    social_instagram: "",
    social_linkedin: "",
    bio: "",
    quote: "",
  });

  const fetchTeams = async () => {
    setLoading(true);
    try {
      const response = await axios.get("https://buweb.onrender.com/team", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setTeams(response.data);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchTeams();
  }, []);

  const handleCreateTeam = async (e) => {
    e.preventDefault();
    setIsCreating(true);
    try {
      const formData = {
        image_url: createFormFields.image_url,
      name: createFormFields.name,
      position: createFormFields.position,
      social_twitter: createFormFields.social_twitter,
      social_facebook: createFormFields.social_facebook,
      social_instagram: createFormFields.social_instagram,
      social_linkedin: createFormFields.social_linkedin,
      bio: createFormFields.bio,
      quote: createFormFields.quote
      }

      const response = await axios.post(
        "https://buweb.onrender.com/team/create",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (response.status === 201) {
        fetchTeams();
        setShowNewTeamModal(false);
        setCreateFormFields({
          image_url: null,
          name: "",
          position: "",
          social_twitter: "",
          social_facebook: "",
          social_instagram: "",
          social_linkedin: "",
          bio: "",
          quote: "",
        });
      }
    } catch (error) {
      setError(error.message);
    } finally {
      setIsCreating(false);
    }
  };

  const handleUpdateTeam = async (e) => {
    e.preventDefault();
    setIsUpdating(true);
    try {
      const formData = new FormData();
      if (editFormFields.image_url) {
        formData.append("image_url", editFormFields.image_url);
      }
      formData.append("name", editFormFields.name);
      formData.append("position", editFormFields.position);
      formData.append("social_twitter", editFormFields.social_twitter);
      formData.append("social_facebook", editFormFields.social_facebook);
      formData.append("social_instagram", editFormFields.social_instagram);
      formData.append("social_linkedin", editFormFields.social_linkedin);
      formData.append("bio", editFormFields.bio);
      formData.append("quote", editFormFields.quote);

      await axios.patch(
        `https://buweb.onrender.com/team/${editFormFields._id}/update`,
        formData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "multipart/form-data",
          },
        }
      );
      fetchTeams();
      setShowEditTeamModal(false);
      setEditFormFields({
        _id: "",
        image_url: null,
        name: "",
        position: "",
        social_twitter: "",
        social_facebook: "",
        social_instagram: "",
        social_linkedin: "",
        bio: "",
        quote: "",
      });
    } catch (error) {
      setError(error.message);
    } finally {
      setIsUpdating(false);
    }
  };

  const handleEditTeam = (team) => {
    setEditFormFields({
      _id: team._id,
      image_url: team.image_url,
      name: team.name,
      position: team.position,
      social_twitter: team.social_twitter,
      social_facebook: team.social_facebook,
      social_instagram: team.social_instagram,
      social_linkedin: team.social_linkedin,
      bio: team.bio,
      quote: team.quote,
    });
    setShowEditTeamModal(true);
  };

  const handleDeleteTeam = async (id) => {
    try {
      await axios.delete(`https://buweb.onrender.com/team/${id}/delete`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      fetchTeams();
    } catch (error) {
      setError(error.message);
    }
  };

  const classes = useStyles();

  const columns = [
    { name: "image_url", label: "Cover Photo" },
    { name: "name", label: "Name" },
    { name: "position", label: "Position" },

    {
      name: "actions",
      align: "center",
      label: "Actions",
      render: (team) => (
        <div>
          <Button
            variant="contained"
            color="primary"
            onClick={() => handleEditTeam(team)}
            style={{ marginRight: "8px" }}
          >
            Edit
          </Button>
          <Button
            variant="contained"
            color="secondary"
            onClick={() => handleDeleteTeam(team._id)}
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
      <SoftBox py={3}>
        <SoftBox mb={3}>
          <Card>
            <SoftBox
              display="flex"
              justifyContent="space-between"
              alignItems="center"
              p={3}
            >
              <SoftTypography variant="h6">Teams Table</SoftTypography>
              <Button
                variant="contained"
                color="primary"
                onClick={() => setShowNewTeamModal(true)}
              >
                Create New Team Member
              </Button>
            </SoftBox>
            {loading && <CircularProgress />}
            {!loading && (
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
                    {teams.map((team) => (
                      <TableRow key={team._id}>
                        {columns.map((column) => (
                          <TableCell
                            key={column.name}
                            align={column.align}
                            component="th"
                            scope="row"
                          >
                            {column.render
                              ? column.render(team)
                              : column.name === "image_url"
                              ? team.image_url && (
                                  <img
                                    src={team.image_url}
                                    alt="Cover"
                                    className={classes.image}
                                  />
                                )
                              : team[column.name]}
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
        <Footer />
      </SoftBox>

      <Modal open={showNewTeamModal} onClose={() => setShowNewTeamModal(false)}>
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
          <Typography variant="h6" component="h2">
            Create New Team Member
          </Typography>
          <form onSubmit={handleCreateTeam}>
            <Dropzone
              acceptedFiles=".jpg,.jpeg,.png"
              multiple={false}
              onDrop={(acceptedFiles) =>
                setCreateFormFields((prevFields) => ({
                  ...prevFields,
                  image_url: acceptedFiles[0],
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
                  {!createFormFields.image_url ? (
                    <Typography>Add Cover Photo Here</Typography>
                  ) : (
                    <div>
                      <Typography>{createFormFields.image_url.name}</Typography>
                      <EditOutlinedIcon />
                    </div>
                  )}
                </Box>
              )}
            </Dropzone>
            <TextField
              label="Name"
              variant="outlined"
              fullWidth
              margin="normal"
              value={createFormFields.name}
              onChange={(e) =>
                setCreateFormFields((prevFields) => ({
                  ...prevFields,
                  name: e.target.value,
                }))
              }
            />
            <TextField
              label="Position"
              variant="outlined"
              fullWidth
              margin="normal"
              value={createFormFields.position}
              onChange={(e) =>
                setCreateFormFields((prevFields) => ({
                  ...prevFields,
                  position: e.target.value,
                }))
              }
            />
            <TextField
              label="Twitter"
              variant="outlined"
              fullWidth
              margin="normal"
              value={createFormFields.social_twitter}
              onChange={(e) =>
                setCreateFormFields((prevFields) => ({
                  ...prevFields,
                  social_twitter: e.target.value,
                }))
              }
            />
            <TextField
              label="Facebook"
              variant="outlined"
              fullWidth
              margin="normal"
              value={createFormFields.social_facebook}
              onChange={(e) =>
                setCreateFormFields((prevFields) => ({
                  ...prevFields,
                  social_facebook: e.target.value,
                }))
              }
            />
            <TextField
              label="Instagram"
              variant="outlined"
              fullWidth
              margin="normal"
              value={createFormFields.social_instagram}
              onChange={(e) =>
                setCreateFormFields((prevFields) => ({
                  ...prevFields,
                  social_instagram: e.target.value,
                }))
              }
            />
            <TextField
              label="LinkedIn"
              variant="outlined"
              fullWidth
              margin="normal"
              value={createFormFields.social_linkedin}
              onChange={(e) =>
                setCreateFormFields((prevFields) => ({
                  ...prevFields,
                  social_linkedin: e.target.value,
                }))
              }
            />
            <TextField
              label="Bio"
              variant="outlined"
              fullWidth
              margin="normal"
              multiline
              rows={4}
              value={createFormFields.bio}
              onChange={(e) =>
                setCreateFormFields((prevFields) => ({
                  ...prevFields,
                  bio: e.target.value,
                }))
              }
            />
            <TextField
              label="Quote"
              variant="outlined"
              fullWidth
              margin="normal"
              value={createFormFields.quote}
              onChange={(e) =>
                setCreateFormFields((prevFields) => ({
                  ...prevFields,
                  quote: e.target.value,
                }))
              }
            />
            <Button
              variant="contained"
              color="primary"
              type="submit"
              fullWidth
              disabled={isCreating}
              sx={{ mt: 2 }}
            >
              {isCreating ? "Creating..." : "Create"}
            </Button>
          </form>
        </Box>
      </Modal>

      <Modal open={showEditTeamModal} onClose={() => setShowEditTeamModal(false)}>
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
          <Typography variant="h6" component="h2">
            Edit Team Member
          </Typography>
          <form onSubmit={handleUpdateTeam}>
            <Dropzone
              acceptedFiles=".jpg,.jpeg,.png"
              multiple={false}
              onDrop={(acceptedFiles) =>
                setEditFormFields((prevFields) => ({
                  ...prevFields,
                  image_url: acceptedFiles[0],
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
                  {!editFormFields.image_url ? (
                    <Typography>Add Cover Photo Here</Typography>
                  ) : (
                    <div>
                      <Typography>{editFormFields.image_url.name}</Typography>
                      <EditOutlinedIcon />
                    </div>
                  )}
                </Box>
              )}
            </Dropzone>
            <TextField
              label="Name"
              variant="outlined"
              fullWidth
              margin="normal"
              value={editFormFields.name}
              onChange={(e) =>
                setEditFormFields((prevFields) => ({
                  ...prevFields,
                  name: e.target.value,
                }))
              }
            />
            <TextField
              label="Position"
              variant="outlined"
              fullWidth
              margin="normal"
              value={editFormFields.position}
              onChange={(e) =>
                setEditFormFields((prevFields) => ({
                  ...prevFields,
                  position: e.target.value,
                }))
              }
            />
            <TextField
              label="Twitter"
              variant="outlined"
              fullWidth
              margin="normal"
              value={editFormFields.social_twitter}
              onChange={(e) =>
                setEditFormFields((prevFields) => ({
                  ...prevFields,
                  social_twitter: e.target.value,
                }))
              }
            />
            <TextField
              label="Facebook"
              variant="outlined"
              fullWidth
              margin="normal"
              value={editFormFields.social_facebook}
              onChange={(e) =>
                setEditFormFields((prevFields) => ({
                  ...prevFields,
                  social_facebook: e.target.value,
                }))
              }
            />
            <TextField
              label="Instagram"
              variant="outlined"
              fullWidth
              margin="normal"
              value={editFormFields.social_instagram}
              onChange={(e) =>
                setEditFormFields((prevFields) => ({
                  ...prevFields,
                  social_instagram: e.target.value,
                }))
              }
            />
            <TextField
              label="LinkedIn"
              variant="outlined"
              fullWidth
              margin="normal"
              value={editFormFields.social_linkedin}
              onChange={(e) =>
                setEditFormFields((prevFields) => ({
                  ...prevFields,
                  social_linkedin: e.target.value,
                }))
              }
            />
            <TextField
              label="Bio"
              variant="outlined"
              fullWidth
              margin="normal"
              multiline
              rows={4}
              value={editFormFields.bio}
              onChange={(e) =>
                setEditFormFields((prevFields) => ({
                  ...prevFields,
                  bio: e.target.value,
                }))
              }
            />
            <TextField
              label="Quote"
              variant="outlined"
              fullWidth
              margin="normal"
              multiline
              rows={4}
              value={editFormFields.quote}
              onChange={(e) =>
                setEditFormFields((prevFields) => ({
                  ...prevFields,
                  quote: e.target.value,
                }))
              }
            />
            <Button
              variant="contained"
              color="primary"
              type="submit"
              fullWidth
              disabled={isUpdating}
              sx={{ mt: 2 }}
            >
              {isUpdating ? "Updating..." : "Update"}
            </Button>
          </form>
        </Box>
      </Modal>
    </DashboardLayout>
  );
};

export default Teams;
