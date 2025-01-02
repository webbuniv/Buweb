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
    maxWidth: '100px',
    maxHeight: '50px',
  },
  headerCell: {
    fontWeight: "bold",
    padding: "20px",
  },
});

const News = () => {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [showNewNewsModal, setShowNewNewsModal] = useState(false);
  const [showEditNewsModal, setShowEditNewsModal] = useState(false);
  const [isCreating, setIsCreating] = useState(false);
  const [isUpdating, setIsUpdating] = useState(false);
  const token = useSelector((state) => state.token);

  const [createFormFields, setCreateFormFields] = useState({
    photo: null,
    title: "",
    category: "",
    content: "",
    date: "",
    author: "",
    tags: [],
    summary: "",
  });
  const [editFormFields, setEditFormFields] = useState({
    _id: "",
    photo: null,
    title: "",
    category: "",
    content: "",
    date: "",
    author: "",
    tags: [],
    summary: "",
  });

  const classes = useStyles();

  useEffect(() => {
    fetchNews();
  }, []);

  const fetchNews = async () => {
    setLoading(true);
    try {
      const response = await axios.get("http://localhost:3001/new/create", {
        headers: {
          Authorization: `Bearer ${token}`,
        }
      });
      setNews(response.data);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  const handleCreateNews = async (e) => {
    e.preventDefault();
    setIsCreating(true);
    try {
      const formData = new FormData();
      formData.append("photo", createFormFields.photo);
      formData.append("title", createFormFields.title);
      formData.append("category", createFormFields.category);
      formData.append("content", createFormFields.content);
      formData.append("date", createFormFields.date);
      formData.append("author", createFormFields.author);
      formData.append("tags", createFormFields.tags.join(","));
      formData.append("summary", createFormFields.summary);

      const response = await axios.post("http://localhost:3001/new/create", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${token}`,
        }
      });
      if (response.status === 201) {
        fetchNews();
        setShowNewNewsModal(false);
        resetCreateForm();
      }
    } catch (error) {
      setError(error.message);
    } finally {
      setIsCreating(false);
      setShowNewNewsModal(false);
      resetCreateForm();
    }
  };

  const handleUpdateNews = async (e) => {
    e.preventDefault();
    setIsUpdating(true);
    try {
      const formData = new FormData();
      if (editFormFields.photo) {
        formData.append("photo", editFormFields.photo);
      }
      formData.append("title", editFormFields.title);
      formData.append("category", editFormFields.category);
      formData.append("content", editFormFields.content);
      formData.append("date", editFormFields.date);
      formData.append("author", editFormFields.author);
      formData.append("tags", editFormFields.tags.join(","));
      formData.append("summary", editFormFields.summary);

      await axios.patch(`https://buweb.onrender.com/news/${editFormFields._id}/update`, formData, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "multipart/form-data"
        }
      });
      fetchNews();
      setShowEditNewsModal(false);
      resetEditForm();
    } catch (error) {
      setError(error.message);
    } finally {
      setIsUpdating(false);
      setShowEditNewsModal(false);
      fetchNews();
    }
  };

  const handleEditNews = (newsItem) => {
    setEditFormFields({
      _id: newsItem._id,
      photo: newsItem.photo,
      title: newsItem.title,
      category: newsItem.category,
      content: newsItem.content,
      date: newsItem.date,
      author: newsItem.author,
      tags: newsItem.tags,
      summary: newsItem.summary,
    });
    setShowEditNewsModal(true);
  };

  const handleDeleteNews = async (id) => {
    try {
      await axios.delete(`https://buweb.onrender.com/news/${id}/delete`, {
        headers: {
          Authorization: `Bearer ${token}`,
        }
      });
      fetchNews();
    } catch (error) {
      setError(error.message);
    }
  };

  const resetCreateForm = () => {
    setCreateFormFields({ photo: null, title: "", category: "", content: "", date: "", author: "", tags: [], summary: "" });
  };

  const resetEditForm = () => {
    setEditFormFields({ _id: "", photo: null, title: "", category: "", content: "", date: "", author: "", tags: [], summary: "" });
  };

  const columns = [
    { name: 'photo',  label: 'Photo' },
    { name: 'title', label: 'Title' },
    { name: 'category', label: 'Category' },
    {
      name: 'date',
      label: 'Date',
      render: (newsItem) => {
        const date = new Date(newsItem.date);
        return date.toLocaleDateString(); 
      },
    },
    {
      name: 'actions',
      align: 'center',
      label: 'Actions',
      render: (newsItem) => (
        <div>
          <Button variant="contained" color="primary" onClick={() => handleEditNews(newsItem)} style={{ marginRight: '8px' }}>
            Edit
          </Button>
          <Button variant="contained" color="secondary" onClick={() => handleDeleteNews(newsItem._id)}>
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
          <Box display="flex" justifyContent="space-between" alignItems="center" p={3}>
            <Typography variant="h6">News Table</Typography>
            <Button variant="contained" color="primary" onClick={() => setShowNewNewsModal(true)}>
              Create New News
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
                  {news.map((newsItem) => (
                    <TableRow key={newsItem._id}>
                      {columns.map((column) => (
                        <TableCell key={column.name}>
                          {column.render
                            ? column.render(newsItem)
                            : (column.name === 'photo'
                              ? <img src={newsItem[column.name]} alt="Photo" className={classes.image} />
                              : newsItem[column.name]
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
      </Box>

      {/* Create new news modal */}
      <Modal
        open={showNewNewsModal}
        onClose={() => setShowNewNewsModal(false)}
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
          <form onSubmit={handleCreateNews}>
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
                      photo: acceptedFiles[0],
                    }))
                  }
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
                      {!createFormFields.photo ? (
                        <p>Add Picture Here</p>
                      ) : (
                        <div style={{ display: "flex", justifyContent: "space-between" }}>
                          <Typography>{createFormFields.photo.name}</Typography>
                          <EditOutlinedIcon />
                        </div>
                      )}
                    </Box>
                  )}
                </Dropzone>
              </div>

              <TextField
                fullWidth
                label="Title"
                value={createFormFields.title}
                onChange={(e) =>
                  setCreateFormFields((prevFields) => ({
                    ...prevFields,
                    title: e.target.value,
                  }))
                }
                sx={{ gridColumn: "span 4" }}
              />

              <TextField
                fullWidth
                label="Category"
                value={createFormFields.category}
                onChange={(e) =>
                  setCreateFormFields((prevFields) => ({
                    ...prevFields,
                    category: e.target.value,
                  }))
                }
                sx={{ gridColumn: "span 4" }}
              />

              <TextField
                fullWidth
                label="Content"
                value={createFormFields.content}
                onChange={(e) =>
                  setCreateFormFields((prevFields) => ({
                    ...prevFields,
                    content: e.target.value,
                  }))
                }
                multiline
                rows={10}
                variant="outlined"
                sx={{ gridColumn: "span 4" }}
              />

              <TextField
                fullWidth
                label="Date"
                type="date"
                InputLabelProps={{
                  shrink: true,
                }}
                value={createFormFields.date}
                onChange={(e) =>
                  setCreateFormFields((prevFields) => ({
                    ...prevFields,
                    date: e.target.value,
                  }))
                }
                sx={{ gridColumn: "span 4" }}
              />

              <TextField
                fullWidth
                label="Author"
                value={createFormFields.author}
                onChange={(e) =>
                  setCreateFormFields((prevFields) => ({
                    ...prevFields,
                    author: e.target.value,
                  }))
                }
                sx={{ gridColumn: "span 4" }}
              />

              <TextField
                fullWidth
                label="Tags (comma separated)"
                value={createFormFields.tags}
                onChange={(e) =>
                  setCreateFormFields((prevFields) => ({
                    ...prevFields,
                    tags: e.target.value.split(",").map(tag => tag.trim()),
                  }))
                }
                sx={{ gridColumn: "span 4" }}
              />

              <TextField
                fullWidth
                label="Summary"
                value={createFormFields.summary}
                onChange={(e) =>
                  setCreateFormFields((prevFields) => ({
                    ...prevFields,
                    summary: e.target.value,
                  }))
                }
                multiline
                rows={3}
                variant="outlined"
                sx={{ gridColumn: "span 4" }}
              />

              <Button
                fullWidth
                type="submit"
                variant="contained"
                color="primary"
                sx={{ gridColumn: "span 4" }}
                disabled={isCreating}
              >
                {isCreating ? "Creating..." : "Create News"}
              </Button>
            </div>
          </form>
        </Box>
      </Modal>

      {/* Edit news modal */}
      <Modal
        open={showEditNewsModal}
        onClose={() => setShowEditNewsModal(false)}
      >
        <Box
          p={3}
          bgcolor="background.paper"
          boxShadow={3}
          borderRadius={2}
          maxWidth="500px"
          mx="auto"
          mt="1%"
          mb="5%"
          sx={{
            height: '80vh',
            overflowY: 'scroll'
          }}
        >
          <form onSubmit={handleUpdateNews}>
            <div
              style={{
                display: "grid",
                gap: "20px",
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
                    setEditFormFields((prevFields) => ({
                      ...prevFields,
                      photo: acceptedFiles[0],
                    }))
                  }
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
                      {!editFormFields.photo ? (
                        <p>Add Picture Here</p>
                      ) : (
                        <div style={{ display: "flex", justifyContent: "space-between" }}>
                          <Typography>{editFormFields.photo.name}</Typography>
                          <EditOutlinedIcon />
                        </div>
                      )}
                    </Box>
                  )}
                </Dropzone>
              </div>

              <TextField
                fullWidth
                label="Title"
                value={editFormFields.title}
                onChange={(e) =>
                  setEditFormFields((prevFields) => ({
                    ...prevFields,
                    title: e.target.value,
                  }))
                }
                sx={{ gridColumn: "span 4" }}
              />

              <TextField
                fullWidth
                label="Category"
                value={editFormFields.category}
                onChange={(e) =>
                  setEditFormFields((prevFields) => ({
                    ...prevFields,
                    category: e.target.value,
                  }))
                }
                sx={{ gridColumn: "span 4" }}
              />

              <TextField
                fullWidth
                label="Content"
                value={editFormFields.content}
                onChange={(e) =>
                  setEditFormFields((prevFields) => ({
                    ...prevFields,
                    content: e.target.value,
                  }))
                }
                multiline
                rows={10}
                variant="outlined"
                sx={{ gridColumn: "span 4" }}
              />

              <TextField
                fullWidth
                label="Date"
                type="date"
                InputLabelProps={{
                  shrink: true,
                }}
                value={editFormFields.date}
                onChange={(e) =>
                  setEditFormFields((prevFields) => ({
                    ...prevFields,
                    date: e.target.value,
                  }))
                }
                
                sx={{ gridColumn: "span 4" }}
              />

              <TextField
                fullWidth
                label="Author"
                value={editFormFields.author}
                onChange={(e) =>
                  setEditFormFields((prevFields) => ({
                    ...prevFields,
                    author: e.target.value,
                  }))
                }
                sx={{ gridColumn: "span 4" }}
              />

              <TextField
                fullWidth
                label="Tags (comma separated)"
                value={editFormFields.tags}
                onChange={(e) =>
                  setEditFormFields((prevFields) => ({
                    ...prevFields,
                    tags: e.target.value.split(",").map(tag => tag.trim()),
                  }))
                }
                sx={{ gridColumn: "span 4" }}
              />

              <TextField
                fullWidth
                label="Summary"
                value={editFormFields.summary}
                onChange={(e) =>
                  setEditFormFields((prevFields) => ({
                    ...prevFields,
                    summary: e.target.value,
                  }))
                }
                multiline
                rows={3}
                variant="outlined"
                sx={{ gridColumn: "span 4" }}
              />

              <Button
                fullWidth
                type="submit"
                variant="contained"
                color="primary"
                sx={{ gridColumn: "span 4" }}
                disabled={isUpdating}
              >
                {isUpdating ? "Updating..." : "Update News"}
              </Button>
            </div>
          </form>
        </Box>
      </Modal>

      <Footer />
    </DashboardLayout>
  );
};

export default News;
