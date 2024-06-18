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
  headerCell: {
    fontWeight: "bold",
    padding: "20px",
  },
});

const Department = () => {
  const [departments, setDepartments] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [showNewDepartmentModal, setShowNewDepartmentModal] = useState(false);
  const [showEditDepartmentModal, setShowEditDepartmentModal] = useState(false);
  const [isCreating, setIsCreating] = useState(false);
  const [isUpdating, setIsUpdating] = useState(false);
  const token = useSelector((state) => state.token);

  const [createFormFields, setCreateFormFields] = useState({
    name: "",
    schoolId: "",
    lecturers: [],
    programs: []
  });
  const [editFormFields, setEditFormFields] = useState({
    _id: "",
    name: "",
    schoolId: "",
    lecturers: [],
    programs: []
  });

  const fetchDepartments = async () => {
    setLoading(true);
    try {
      const response = await axios.get("https://buweb.onrender.com/department", {
        headers: {
          Authorization: `Bearer ${token}`,
        }
      });
      setDepartments(response.data);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchDepartments();
  }, []);

  const handleCreateDepartment = async (e) => {
    e.preventDefault();
    setIsCreating(true);
    try {
      const response = await axios.post("https://buweb.onrender.com/department/create", createFormFields, {
        headers: {
          Authorization: `Bearer ${token}`,
        }
      });
      if (response.status === 201) {
        fetchDepartments();
        setShowNewDepartmentModal(false);
        setCreateFormFields({ name: "", schoolId: "", lecturers: [], programs: [] });
      }
    } catch (error) {
      setError(error.message);
    } finally {
      setIsCreating(false);
      setShowNewDepartmentModal(false);
      setCreateFormFields({ name: "", schoolId: "", lecturers: [], programs: [] });
      fetchDepartments();
    }
  };

  const handleUpdateDepartment = async (e) => {
    e.preventDefault();
    setIsUpdating(true);
    try {
      await axios.patch(`https://buweb.onrender.com/department/${editFormFields._id}/update`, editFormFields, {
        headers: {
          Authorization: `Bearer ${token}`,
        }
      });
      fetchDepartments();
      setShowEditDepartmentModal(false);
      setEditFormFields({ _id: "", name: "", schoolId: "", lecturers: [], programs: [] });
    } catch (error) {
      setError(error.message);
    } finally {
      setIsUpdating(false);
      fetchDepartments();
      setShowEditDepartmentModal(false);
    }
  };

  const handleEditDepartment = (department) => {
    setEditFormFields({
      _id: department._id,
      name: department.name,
      schoolId: department.school._id,
      lecturers: department.lecturers.map(lecturer => lecturer._id),
      programs: department.programs.map(program => program._id)
    });
    setShowEditDepartmentModal(true);
  };

  const handleDeleteDepartment = async (id) => {
    try {
      await axios.delete(`https://buweb.onrender.com/department/${id}/delete`, {
        headers: {
          Authorization: `Bearer ${token}`,
        }
      });
      fetchDepartments();
    } catch (error) {
      setError(error.message);
    }
  };

  const classes = useStyles();

  const columns = [
    { name: 'name', label: 'Name' },
    { name: 'school', label: 'School', render: (department) => department.school.name },
    { name: 'lecturers', label: 'Lecturers', render: (department) => department.lecturers.length },
    { name: 'programs', label: 'Programs', render: (department) => department.programs.length },
    {
      name: 'actions',
      align: 'center',
      label: 'Actions',
      render: (department) => (
        <div>
          <Button variant="contained" color="primary" onClick={() => handleEditDepartment(department)} style={{ marginRight: '8px' }}>
            Edit
          </Button>
          <Button variant="contained" color="secondary" onClick={() => handleDeleteDepartment(department._id)}>
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
              <SoftTypography variant="h6">Departments Table</SoftTypography>
              <Button variant="contained" color="primary" onClick={() => setShowNewDepartmentModal(true)}>
                Create New Department
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
                    {departments.map((department) => (
                      <TableRow key={department._id}>
                        {columns.map((column) => (
                          <TableCell key={column.name} align={column.align} component="th" scope="row">
                            {column.render
                              ? column.render(department)
                              : department[column.name]
                            }
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

        {/* Create new department modal */}
        <Modal
          open={showNewDepartmentModal}
          onClose={() => setShowNewDepartmentModal(false)}
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
            <form onSubmit={handleCreateDepartment}>
              <div
                style={{
                  display: "grid",
                  gap: "30px",
                  gridTemplateColumns: "repeat(4, minmax(0, 1fr))"
                }}
              >
                <TextField
                  label="Name"
                  type="text"
                  value={createFormFields.name}
                  onChange={(e) =>
                    setCreateFormFields((prevFields) => ({
                      ...prevFields,
                      name: e.target.value
                    }))
                  }
                  style={{ gridColumn: "span 4" }}
                />
                <TextField
                  label="School ID"
                  type="text"
                  value={createFormFields.schoolId}
                  onChange={(e) =>
                    setCreateFormFields((prevFields) => ({
                      ...prevFields,
                      schoolId: e.target.value
                    }))
                  }
                  style={{ gridColumn: "span 4" }}
                />
                <TextField
                  label="Lecturers"
                  type="text"
                  value={createFormFields.lecturers.join(", ")}
                  onChange={(e) =>
                    setCreateFormFields((prevFields) => ({
                      ...prevFields,
                      lecturers: e.target.value.split(",").map(id => id.trim())
                    }))
                  }
                  style={{ gridColumn: "span 4" }}
                />
                <TextField
                  label="Programs"
                  type="text"
                  value={createFormFields.programs.join(", ")}
                  onChange={(e) =>
                    setCreateFormFields((prevFields) => ({
                      ...prevFields,
                      programs: e.target.value.split(",").map(id => id.trim())
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
                    backgroundColor: "#6A0DAD",
                    color: "#fff",
                    "&:hover": { color: "#6A0DAD" }
                  }}
                  disabled={isCreating}
                >
                  {isCreating ? "Creating..." : "Create Department"}
                </Button>
              </div>
            </form>
          </Box>
        </Modal>

        {/* Edit department modal */}
        <Modal
          open={showEditDepartmentModal}
          onClose={() => setShowEditDepartmentModal(false)}
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
            <form onSubmit={handleUpdateDepartment}>
              <div
                style={{
                  display: "grid",
                  gap: "30px",
                  gridTemplateColumns: "repeat(4, minmax(0, 1fr))"
                }}
              >
                <TextField
                  label="Name"
                  type="text"
                  value={editFormFields.name}
                  onChange={(e) =>
                    setEditFormFields((prevFields) => ({
                      ...prevFields,
                      name: e.target.value
                    }))
                  }
                  style={{ gridColumn: "span 4" }}
                />
                <TextField
                  label="School ID"
                  type="text"
                  value={editFormFields.schoolId}
                  onChange={(e) =>
                    setEditFormFields((prevFields) => ({
                      ...prevFields,
                      schoolId: e.target.value
                    }))
                  }
                  style={{ gridColumn: "span 4" }}
                />
                <TextField
                  label="Lecturers"
                  type="text"
                  value={editFormFields.lecturers.join(", ")}
                  onChange={(e) =>
                    setEditFormFields((prevFields) => ({
                      ...prevFields,
                      lecturers: e.target.value.split(",").map(id => id.trim())
                    }))
                  }
                  style={{ gridColumn: "span 4" }}
                />
                <TextField
                  label="Programs"
                  type="text"
                  value={editFormFields.programs.join(", ")}
                  onChange={(e) =>
                    setEditFormFields((prevFields) => ({
                      ...prevFields,
                      programs: e.target.value.split(",").map(id => id.trim())
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
                    backgroundColor: "#6A0DAD",
                    color: "#fff",
                    "&:hover": { color: "#6A0DAD" }
                  }}
                  disabled={isUpdating}
                >
                  {isUpdating ? "Updating..." : "Update Department"}
                </Button>
              </div>
            </form>
          </Box>
        </Modal>
      </SoftBox>
      <Footer />
    </DashboardLayout>
  );
};

export default Department;
