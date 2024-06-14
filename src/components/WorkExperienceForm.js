import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { saveWorkExperience } from "../store/actions";
import {
  Container,
  TextField,
  Button,
  Typography,
  Grid,
  IconButton,
} from "@mui/material";
import { AddCircle, RemoveCircle } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

const WorkExperienceForm = () => {
  const [workExperience, setWorkExperience] = useState([
    { company: "", title: "", duration: "" },
  ]);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleChange = (e, index) => {
    const { name, value } = e.target;
    const updatedWorkExperience = workExperience.map((experience, i) =>
      i === index ? { ...experience, [name]: value } : experience
    );
    setWorkExperience(updatedWorkExperience);
  };

  const handleAddRow = () => {
    setWorkExperience([
      ...workExperience,
      { company: "", title: "", duration: "" },
    ]);
  };

  const handleRemoveRow = (index) => {
    setWorkExperience(workExperience.filter((_, i) => i !== index));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(saveWorkExperience(workExperience));
    navigate("/Skills");
  };

  const handlePrev = () => {
    navigate("/EducationForm");
  };

  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        Work Experience
      </Typography>
      <form onSubmit={handleSubmit}>
        {workExperience.map((experience, index) => (
          <div key={index}>
            <Grid container spacing={2} alignItems="center">
              <Grid item xs={12} sm={4}>
                <TextField
                  name="company"
                  label="Company Name"
                  variant="outlined"
                  fullWidth
                  value={experience.company}
                  onChange={(e) => handleChange(e, index)}
                  required
                />
              </Grid>
              <Grid item xs={12} sm={4}>
                <TextField
                  name="title"
                  label="Job Title"
                  variant="outlined"
                  fullWidth
                  value={experience.title}
                  onChange={(e) => handleChange(e, index)}
                  required
                />
              </Grid>
              <Grid item xs={12} sm={3}>
                <TextField
                  name="duration"
                  label="Duration"
                  variant="outlined"
                  fullWidth
                  value={experience.duration}
                  onChange={(e) => handleChange(e, index)}
                  required
                />
              </Grid>
              <Grid item xs={12} sm={1}>
                <IconButton
                  onClick={() => handleRemoveRow(index)}
                  color="secondary"
                >
                  <RemoveCircle />
                </IconButton>
              </Grid>
            </Grid>
          </div>
        ))}
        <Grid container spacing={2} justifyContent="space-between">
          <Grid item>
            <Button style={{ marginTop: "20px" }} variant="contained" onClick={handlePrev}>
              Previous
            </Button>
          </Grid>
          <Grid item>
            <IconButton onClick={handleAddRow} color="primary">
              <AddCircle />
            </IconButton>
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

export default WorkExperienceForm;
