import React from "react";
import { useSelector } from "react-redux";
import {
  Container,
  Typography,
  Grid,
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

const ReviewForm = () => {
  const formData = useSelector((state) => state);
  const navigate = useNavigate();

  const handlePrev = () => {
    navigate("/AdditionalInfoForm");
  };

  const handleSubmit = () => {
    alert("Application Submitted!");
    navigate('/PersonalInfo');
    // Here you can send the form data to your server
  };

  const tableContainerStyle = {
    border: '1px solid #ccc',
    borderRadius: '8px',
    marginBottom: '20px'
  };

  const getPostGraduationValue = (value) => {
    return value || "NA";
  };

  return (
    <Container >
      <Typography variant="h4" gutterBottom>
        Review and Submit Application
      </Typography>

      <Typography variant="h5" gutterBottom>
        Personal Information
      </Typography>
      <TableContainer component={Paper} sx={tableContainerStyle}>
        <Table >
          <TableBody >
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell>{formData.personalInfo.name}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Email</TableCell>
              <TableCell>{formData.personalInfo.email}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Phone</TableCell>
              <TableCell>{formData.personalInfo.phone}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Address</TableCell>
              <TableCell>{formData.personalInfo.address}</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>

      <Typography variant="h5" gutterBottom>
        Education
      </Typography>
      <TableContainer component={Paper} sx={tableContainerStyle}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Level</TableCell>
              <TableCell>School/Institute Name</TableCell>
              <TableCell>Board/University</TableCell>
              <TableCell>CGPA</TableCell>
              <TableCell>Passing Year</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {["ssc", "hsc", "graduation", "postGraduation"].map((level) => (
              <TableRow key={level}>
                <TableCell>{level.toUpperCase()}</TableCell>
                <TableCell>{getPostGraduationValue(formData.education[level]?.name)}</TableCell>
                <TableCell>{getPostGraduationValue(formData.education[level]?.board)}</TableCell>
                <TableCell>{getPostGraduationValue(formData.education[level]?.cgpa)}</TableCell>
                <TableCell>{getPostGraduationValue(formData.education[level]?.year)}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      <Typography variant="h5" gutterBottom>
        Work Experience
      </Typography>
      <TableContainer component={Paper} sx={tableContainerStyle}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Company Name</TableCell>
              <TableCell>Job Title</TableCell>
              <TableCell>Duration</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {formData.workExperience.map((experience, index) => (
              <TableRow key={index}>
                <TableCell>{experience.company}</TableCell>
                <TableCell>{experience.title}</TableCell>
                <TableCell>{experience.duration}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      <Typography variant="h5" gutterBottom>
        Skills and Qualifications
      </Typography>
      <TableContainer component={Paper} sx={tableContainerStyle}>
        <Table>
          <TableBody>
            <TableRow>
              <TableCell>Technical Skills</TableCell>
              <TableCell>{formData.skills.technicalSkills}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Certifications</TableCell>
              <TableCell>{formData.skills.certifications}</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>

      <Typography variant="h5" gutterBottom>
        Additional Information
      </Typography>
      <TableContainer component={Paper} sx={tableContainerStyle}>
        <Table>
          <TableBody>
            <TableRow>
              <TableCell>Cover Letter</TableCell>
              <TableCell>{formData.additionalInfo.coverLetter}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Resume</TableCell>
              <TableCell>
                {formData.additionalInfo.resume
                  ? formData.additionalInfo.resume.name
                  : "No file uploaded"}
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>

      <Grid
        container
        spacing={2}
        justifyContent="space-between"
        
      >
        <Grid item>
          <Button style={{ marginTop: "20px" }} variant="contained" onClick={handlePrev}>
            Previous
          </Button>
        </Grid>
        <Grid item>
          <Button style={{ marginTop: "20px" }} variant="contained" color="primary" onClick={handleSubmit}>
            Submit
          </Button>
        </Grid>
      </Grid>
    </Container>
  );
};

export default ReviewForm;
