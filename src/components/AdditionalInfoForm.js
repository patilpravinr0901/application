import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { saveAdditionalInfo } from "../store/actions";
import { Container, TextField, Button, Typography, Grid } from "@mui/material";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./style.css"; 

const AdditionalInfoForm = () => {
  const [additionalInfo, setAdditionalInfo] = useState({
    coverLetter: "",
    resume: null,
  });
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setAdditionalInfo({ ...additionalInfo, [name]: value });
  };

  const handleFileChange = (e) => {
    setAdditionalInfo({ ...additionalInfo, resume: e.target.files[0] });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(saveAdditionalInfo(additionalInfo));
    navigate("/ReviewForm");
  };

  const handlePrev = () => {
    navigate("/Skills");
  };

  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        Additional Information
      </Typography>
      <form onSubmit={handleSubmit}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              name="coverLetter"
              label="Cover Letter"
              variant="outlined"
              multiline
              rows={4}
              fullWidth
              value={additionalInfo.coverLetter}
              onChange={handleChange}
              required
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              name="resume"
              type="file"
              variant="outlined"
              fullWidth
              onChange={handleFileChange}
              required
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

export default AdditionalInfoForm;
