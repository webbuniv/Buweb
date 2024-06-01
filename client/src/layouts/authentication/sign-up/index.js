import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Card from "@mui/material/Card";
import SoftBox from "../../../components/SoftBox";
import SoftTypography from "../../../components/SoftTypography";
import SoftInput from "../../../components/SoftInput";
import SoftButton from "../../../components/SoftButton";
import BasicLayout from "../../../layouts/authentication/components/BasicLayout";
import Socials from "../../../layouts/authentication/components/Socials";
import Separator from "../../../layouts/authentication/components/Separator";
import curved6 from "../../../assets/images/curved-images/curved14.jpg";

const  SignUp = () => {
  const [form, setForm] = useState({ 
    firstName: "", 
    lastName: "", 
    email: "", 
    password: "",
  });
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("https://buweb.onrender.com/auth/register", form);
      console.log(response.data);
      setErrorMessage("User created successfully")
      setForm({ firstName: '', lastName: '', email: '', password: '' });
    } catch (error) {
      setErrorMessage(error.response.data.error || 'Registration failed!');
    }
  };

  return (
    <BasicLayout
      title="Welcome to admin panel!"
      image={curved6}
    >
      <Card>
        <SoftBox p={3} mb={1} textAlign="center">
          <SoftTypography variant="h5" fontWeight="medium">
            SIGN-UP
          </SoftTypography>
        </SoftBox>
        <SoftBox pt={2} pb={3} px={3}>
        {errorMessage && (
            <SoftBox mb={2}>
              <SoftTypography variant="body2" color="error">
                {errorMessage}
              </SoftTypography>
            </SoftBox>
          )}
          <SoftBox 
            component="form" 
            role="form" 
            onSubmit={handleSubmit}>
          <SoftBox mb={2}>
              <SoftInput 
                placeholder="First Name" name="firstName" 
                value={form.firstName} 
                onChange={handleChange} 
                required/>
            </SoftBox>
            <SoftBox mb={2}>
              <SoftInput 
                placeholder="Last Name" 
                name="lastName" 
                value={form.lastName} 
                onChange={handleChange} 
                required/>
            </SoftBox>
            <SoftBox mb={2}>
              <SoftInput 
                type="email" 
                placeholder="Email" 
                name="email" 
                value={form.email} 
                onChange={handleChange} 
                required />
            </SoftBox>
            <SoftBox mb={2}>
              <SoftInput 
                type="password" 
                placeholder="Password" 
                name="password" 
                value={form.password} 
                onChange={handleChange} 
                required/>
            </SoftBox>
            <SoftBox 
              display="flex" 
              alignItems="center">
            </SoftBox>
            <SoftBox 
              mt={4} 
              mb={1}>
              <SoftButton 
                type="submit" 
                variant="gradient" 
                color="dark" 
                fullWidth>
                sign up
              </SoftButton>
            </SoftBox>
            <SoftBox 
              mt={3} 
              textAlign="center">
              <SoftTypography 
                variant="button" 
                color="text" 
                fontWeight="regular">
                Already have an account?&nbsp;
                <SoftTypography
                  component={Link}
                  to="/authentication/sign-in"
                  variant="button"
                  color="dark"
                  fontWeight="bold"
                  textGradient
                >
                  Sign in
                </SoftTypography>
              </SoftTypography>
            </SoftBox>
          </SoftBox>
        </SoftBox>
      </Card>
    </BasicLayout>
  );
}

export default SignUp;