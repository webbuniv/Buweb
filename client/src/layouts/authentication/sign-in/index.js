import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import Switch from "@mui/material/Switch";
import SoftBox from "../../../components/SoftBox";
import SoftTypography from "../../../components/SoftTypography";
import SoftInput from "../../../components/SoftInput";
import SoftButton from "../../../components/SoftButton";
import CoverLayout from "../../../layouts/authentication/components/CoverLayout";
import curved9 from "../../../assets/images/curved-images/curved-6.jpg";
import { setLogin } from "../../../state";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(true);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSetRememberMe = () => setRememberMe(!rememberMe);

  const login = async (e) => {
    e.preventDefault();
    setError(null);

    try {
      const loggedInResponse = await fetch("https://buweb.onrender.com/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      // const data = await response.json();

      // if (!response.ok) {
      //   setError(data.msg || "Something went wrong. Please try again.");
      // } else {
      //   localStorage.setItem("token", data.token);
      //   localStorage.setItem("user", JSON.stringify(data.user));
      //   setSuccess("Login Successfull")
      //   navigate("/dashboard");
      // }
      const loggedIn = await loggedInResponse.json();
      if (loggedIn) {
        dispatch(
          setLogin({
            user: loggedIn.user,
            token: loggedIn.token,
          })
        );
        navigate("/dashboard");
      }

    } catch (err) {
      setError("Failed to sign in. Please try again later.");
    }
  };

  return (
    <CoverLayout
      image={curved9}
      title="Welcome back"
      description="Enter your email and password"
    >
      {error && (
        <SoftBox mb={2}>
          <SoftTypography variant="body2" color="error">
            {error}
          </SoftTypography>
        </SoftBox>
      )}
      {success && (
          <SoftBox mb={2}>
            <SoftTypography variant="body2" color="success">
              {success}
            </SoftTypography>
          </SoftBox>
        )}
      <SoftBox component="form" role="form" onSubmit={login}>
        
        <SoftBox mb={2}>
          <SoftBox mb={1} ml={0.5}>
            <SoftTypography component="label" variant="caption" fontWeight="bold">
              Email
            </SoftTypography>
          </SoftBox>
          <SoftInput
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </SoftBox>
        <SoftBox mb={2}>
          <SoftBox mb={1} ml={0.5}>
            <SoftTypography component="label" variant="caption" fontWeight="bold">
              Password
            </SoftTypography>
          </SoftBox>
          <SoftInput
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </SoftBox>
        <SoftBox display="flex" alignItems="center">
          <Switch checked={rememberMe} onChange={handleSetRememberMe} />
          <SoftTypography
            variant="button"
            fontWeight="regular"
            onClick={handleSetRememberMe}
            sx={{ cursor: "pointer", userSelect: "none" }}
          >
            &nbsp;&nbsp;Remember me
          </SoftTypography>
        </SoftBox>
        {error && (
          <SoftBox mt={2} mb={2}>
            <SoftTypography color="error">{error}</SoftTypography>
          </SoftBox>
        )}
        <SoftBox mt={4} mb={1}>
          <SoftButton type="submit" variant="gradient" color="info" fullWidth>
            Sign In
          </SoftButton>
        </SoftBox>
        <SoftBox mt={3} textAlign="center">
          <SoftTypography variant="button" color="text" fontWeight="regular">
            Don&apos;t have an account?{" "}
            <SoftTypography
              component={Link}
              to="/authentication/sign-up"
              variant="button"
              color="info"
              fontWeight="medium"
              textGradient
            >
              Sign up
            </SoftTypography>
          </SoftTypography>
        </SoftBox>
      </SoftBox>
    </CoverLayout>
  );
}

export default SignIn;
