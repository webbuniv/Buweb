import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from "@mui/material/Card";
import Modal from "@mui/material/Modal";

// Soft UI Dashboard React components
import SoftBox from "../../components/SoftBox";
import SoftTypography from "../../components/SoftTypography";

// Soft UI Dashboard React examples
import DashboardLayout from "../../examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "../../examples/Navbars/DashboardNavbar";
import Footer from "../../examples/Footer";
import Table from "../../examples/Tables/Table";

const Tables = () => {
  const [slides, setSlides] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [newSlide, setNewSlide] = useState({ photo: "", title: "", tagline: "" });
  const [editSlide, setEditSlide] = useState(null);
  const [showNewSlideModal, setShowNewSlideModal] = useState(false);
  const [showEditSlideModal, setShowEditSlideModal] = useState(false);

  const token = localStorage.getItem("token");

  useEffect(() => {
    fetchSlides();
  }, []);

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

  const handleCreateSlide = async () => {
    try {
      await axios.post("https://buweb.onrender.com/slide/create", newSlide, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      });
      fetchSlides();
      setNewSlide({ photo: "", title: "", tagline: "" });
      setShowNewSlideModal(false); 
    } catch (error) {
      setError(error.message);
    }
  };

  const handleUpdateSlide = async () => {
    try {
      await axios.patch(`https://buweb.onrender.com/slide/${editSlide._id}/update`, editSlide, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      });
      fetchSlides(); 
      setEditSlide(null);
      setShowEditSlideModal(false); 
    } catch (error) {
      setError(error.message);
    }
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

  const handleChangeNewSlide = (e) => {
    setNewSlide({ ...newSlide, [e.target.name]: e.target.value });
  };

  const handleChangeEditSlide = (e) => {
    setEditSlide({ ...editSlide, [e.target.name]: e.target.value });
  };

  const handleEditSlide = (slide) => {
    setEditSlide(slide);
    setShowEditSlideModal(true);
  };

  const handleNewPhotoChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setNewSlide({ ...newSlide, photo: reader.result });
      };
      reader.readAsDataURL(file);
    }
  };

  const handlePhotoChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setEditSlide({ ...editSlide, photo: reader.result });
      };
      reader.readAsDataURL(file);
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
            </SoftBox>
            {loading && <div>Loading...</div>}
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
          <SoftBox>
            <h3>Create New Slide</h3>
            <input type="file" onChange={handleNewPhotoChange} />            <input type="text" name="title" placeholder="Title" value={newSlide.title} onChange={handleChangeNewSlide} />
            <input type="text" name="tagline" placeholder="Tagline" value={newSlide.tagline} onChange={handleChangeNewSlide} />
            <button onClick={handleCreateSlide}>Create</button>
          </SoftBox>
        </Modal>
        {/* Edit slide modal */}
        <Modal open={showEditSlideModal} onClose={() => setShowEditSlideModal(false)}>
          <SoftBox>
            <h3>Edit Slide</h3>
            <input type="file" name="photo" onChange={handlePhotoChange} />
            <input type="text" name="title" placeholder="Title" value={editSlide?.title || ""} onChange={handleChangeEditSlide} />
            <input type="text" name="tagline" placeholder="Tagline" value={editSlide?.tagline || ""} onChange={handleChangeEditSlide} />
            <button onClick={handleUpdateSlide}>Update</button>
            <button onClick={() => setShowEditSlideModal(false)}>Cancel</button>
          </SoftBox>
        </Modal>
        {/* Button to open create new slide modal */}
        <button onClick={() => setShowNewSlideModal(true)}>Create New Slide</button>
      </SoftBox>
      <Footer />
    </DashboardLayout>
  );
};

export default Tables;
