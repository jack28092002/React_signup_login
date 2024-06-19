import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  TextField,
  Button,
  Container,
  Typography,
  Box,
  Alert,
  Stack,
} from "@mui/material";
import "./Login.css";

const Signup = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const handleSignup = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }
    const users = JSON.parse(localStorage.getItem("users")) || [];
    if (users.some((u) => u.email === email)) {
      setError("User already exists");
      return;
    }
    users.push({ email, password });
    localStorage.setItem("users", JSON.stringify(users));
    alert("Signup successful");
    navigate("/login");
  };
  return (
    <Box className="container">
      <Box
        className="innerContainer"
        component={"form"}
        onSubmit={handleSignup}
      >
        <Typography variant="h4" color="white" textTransform="uppercase">
          Signup
        </Typography>
        {error && <Alert severity="error">{error}</Alert>}
        <TextField
          margin="normal"
          required
          fullWidth
          label="Email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <TextField
          margin="normal"
          required
          fullWidth
          label="Password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <TextField
          margin="normal"
          required
          fullWidth
          label="Confirm Password"
          type="password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
        <Button
          fullWidth
          variant="contained"
          color="primary"
          type="submit"
          sx={{
            my: "1rem",
            py: "1rem",
            borderRadius: "5rem",
            fontSize: "1.2rem",
          }}
        >
          Signup
        </Button>
        <Stack direction={"row"} alignItems={"center"}>
          <Typography variant="body1" color={"white"}>
            Already have an account?
          </Typography>
          <Button
            color="secondary"
            onClick={() => navigate("/login")}
            sx={{
              py: "1rem",
              borderRadius: "5rem",
              fontSize: "1.2rem",
              color: "white",
              textDecoration: "underline",
            }}
          >
            Login
          </Button>
        </Stack>
      </Box>
      <footer className="footer">Made by Jack</footer>
    </Box>
  );
};
export default Signup;
