import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { saveSkills } from "../store/actions";
import { Container, TextField, Button, Typography, Grid } from "@mui/material";
import { useNavigate } from "react-router-dom";
import "./style.css"; 
import "bootstrap/dist/css/bootstrap.min.css";

const SkillsForm = () => {
  const [skills, setSkills] = useState({
    technicalSkills: "",
    certifications: "",
  });
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setSkills({ ...skills, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const updatedSkills = {
      ...skills,
      certifications: skills.certifications || "NA",
    };
    dispatch(saveSkills(updatedSkills));
    navigate("/AdditionalInfoForm");
  };

  const handlePrev = () => {
    navigate("/WorkExperience");
  };

  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        Skills and Qualifications
      </Typography>
      <form onSubmit={handleSubmit}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              name="technicalSkills"
              label="Technical Skills"
              variant="outlined"
              fullWidth
              value={skills.technicalSkills}
              onChange={handleChange}
              required
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              name="certifications"
              label="Certifications"
              variant="outlined"
              fullWidth
              value={skills.certifications}
              onChange={handleChange}
            />
          </Grid>
        </Grid>
        <Grid container spacing={2} justifyContent="space-between">
          <Grid item>
            <Button style={{ marginTop: "20px" }} variant="contained" onClick={handlePrev}>
              Previous
            </Button>
          </Grid>
          <Grid item>
            <Button style={{ marginTop: "20px" }} type="submit" variant="contained" color="primary">
              Next
            </Button>
          </Grid>
        </Grid>
      </form>
    </Container>
  );
};

export default SkillsForm;