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

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const handleLogin = (e) => {
    e.preventDefault();
    const users = JSON.parse(localStorage.getItem("users")) || [];
    const user = users.find(
      (u) => u.email === email && u.password === password
    );
    if (user) {
      localStorage.setItem("currentUser", JSON.stringify(user));
      alert("Login successful");
      navigate("/home");
    } else {
      setError("Invalid email or password");
    }
  };

  return (
    <Box className="container">
      <Box
        className="innerContainer"
        component={"form"}
        onSubmit={(e) => handleLogin(e)}
      >
        <Typography variant="h4" color="white" textTransform="uppercase">
          Login
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
          className="inputField"
          sx={{ fontSize: "2rem" }}
        />
        <TextField
          margin="normal"
          required
          fullWidth
          label="Password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="inputField"
        />
        <Button
          fullWidth
          type="submit"
          variant="contained"
          color="primary"
          sx={{
            my: "1rem",
            py: "1rem",
            borderRadius: "5rem",
            fontSize: "1.2rem",
          }}
        >
          Submit
        </Button>

        <Stack direction={"row"} alignItems={"center"}>
          <Typography variant="body1" color={"white"}>
            Don't have an account ?
          </Typography>
          <Button
            color="secondary"
            onClick={() => navigate("/signup")}
            sx={{
              py: "1rem",
              borderRadius: "5rem",
              fontSize: "1.2rem",
              color: "white",
              textDecoration: "underline",
            }}
          >
            Signup
          </Button>
        </Stack>
      </Box>
    </Box>
  );
};
export default Login;
