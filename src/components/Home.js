import React from "react";
import { useNavigate } from "react-router-dom";
import { Container, Button, Typography, Box } from "@mui/material";
import "./Login.css";

const Home = () => {
  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem("currentUser");
    navigate("/login");
  };
  return (
    <Box className="container">
      <Box display="flex" flexDirection="column" alignItems="center">
        <Typography variant="h2" color="white">
          Home
        </Typography>
        <Typography variant="h4" color="white">
          Welcome to the home page!
        </Typography>
        <Button
          variant="contained"
          color="primary"
          onClick={handleLogout}
          sx={{
            my: "1rem",
            py: "0.5rem",
            px: "3rem",
            borderRadius: "5rem",
            fontSize: "1.2rem",
          }}
        >
          Logout
        </Button>
      </Box>
      <footer className="footer">Made by Jack</footer>
    </Box>
  );
};
export default Home;
