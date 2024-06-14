import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { savePersonalInfo } from "../store/actions";
import { Container, TextField, Button, Typography, Grid } from "@mui/material";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./style.css"; 

const PersonalInfoForm = () => {
  const [personalInfo, setPersonalInfo] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
  });
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPersonalInfo({ ...personalInfo, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(savePersonalInfo(personalInfo));
    navigate("/EducationForm");
  };

  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        Personal Information
      </Typography>
      <form onSubmit={handleSubmit}>
        <Grid container spacing={3}>
          <Grid item xs={8}>
            <TextField
              name="name"
              label="Name"
              variant="outlined"
              fullWidth
              value={personalInfo.name}
              onChange={handleChange}
              required
            />
          </Grid>
          <Grid item xs={8}>
            <TextField
              name="email"
              label="Email"
              type="email"
              variant="outlined"
              fullWidth
              value={personalInfo.email}
              onChange={handleChange}
              required
            />
          </Grid>
          <Grid item xs={8}>
            <TextField
              name="phone"
              label="Phone"
              type="tel"
              variant="outlined"
              fullWidth
              value={personalInfo.phone}
              onChange={handleChange}
              required
            />
          </Grid>
          <Grid item xs={8}>
            <TextField
              name="address"
              label="Address"
              variant="outlined"
              fullWidth
              value={personalInfo.address}
              onChange={handleChange}
              required
            />
          </Grid>
          <Grid item xs={8} >
            <Button style={{ marginTop: "20px" }} type="submit" variant="contained" color="primary">
              Next
            </Button>
          </Grid>
        </Grid>
      </form>
    </Container>
  );
};

export default PersonalInfoForm;
