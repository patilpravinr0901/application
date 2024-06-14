import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { saveEducation } from "../store/actions";
import { Container, TextField, Button, Typography, Grid } from "@mui/material";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

const EducationForm = () => {
  const initialEducation = {
    ssc: { name: "", board: "", cgpa: "", year: "" },
    hsc: { name: "", board: "", cgpa: "", year: "" },
    graduation: { name: "", board: "", cgpa: "", year: "" },
    postGraduation: { name: "", board: "", cgpa: "", year: "" },
  };
  const [education, setEducation] = useState(initialEducation);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleChange = (e, level) => {
    const { name, value } = e.target;
    setEducation({
      ...education,
      [level]: { ...education[level], [name]: value },
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(saveEducation(education));
    navigate("/WorkExperience");
  };

  const handlePrev = () => {
    navigate("/PersonalInfo");
  };

  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        Education
      </Typography>
      <form onSubmit={handleSubmit}>
        {["ssc", "hsc", "graduation", "postGraduation"].map((level) => (
          <div key={level}>
            <Typography variant="h6" gutterBottom>
              {level.toUpperCase()}
            </Typography>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  name="name"
                  label="School/Institute Name"
                  variant="outlined"
                  fullWidth
                  value={education[level].name}
                  onChange={(e) => handleChange(e, level)}
                  required={level !== "postGraduation"}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  name="board"
                  label="Board/University"
                  variant="outlined"
                  fullWidth
                  value={education[level].board}
                  onChange={(e) => handleChange(e, level)}
                  required={level !== "postGraduation"}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  name="cgpa"
                  label="CGPA"
                  variant="outlined"
                  fullWidth
                  value={education[level].cgpa}
                  onChange={(e) => handleChange(e, level)}
                  required={level !== "postGraduation"}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  name="year"
                  label="Passing Year"
                  variant="outlined"
                  fullWidth
                  value={education[level].year}
                  onChange={(e) => handleChange(e, level)}
                  required={level !== "postGraduation"}
                />
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
            <Button style={{ marginTop: "20px" }} type="submit" variant="contained" color="primary">
              Next
            </Button>
          </Grid>
        </Grid>
      </form>
    </Container>
  );
};

export default EducationForm;







// import React, { useState } from "react";
// import { useDispatch } from "react-redux";
// import { saveEducation } from "../store/actions";
// import { Container, TextField, Button, Typography, Grid } from "@mui/material";
// import { useNavigate } from "react-router-dom";
// import "bootstrap/dist/css/bootstrap.min.css";

// const EducationForm = () => {
//   const initialEducation = {
//     ssc: { name: "", board: "", cgpa: "", year: "" },
//     hsc: { name: "", board: "", cgpa: "", year: "" },
//     graduation: { name: "", board: "", cgpa: "", year: "" },
//     postGraduation: { name: "", board: "", cgpa: "", year: "" },
//   };
//   const [education, setEducation] = useState(initialEducation);
//   const dispatch = useDispatch();
//   const navigate = useNavigate();

//   const handleChange = (e, level) => {
//     const { name, value } = e.target;
//     setEducation({
//       ...education,
//       [level]: { ...education[level], [name]: value },
//     });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     dispatch(saveEducation(education));
//     navigate("/WorkExperience");
//   };

//   const handlePrev = () => {
//     navigate("/PersonalInfo");
//   };

//   return (
//     <Container>
//       <Typography variant="h4" gutterBottom>
//         Education
//       </Typography>
//       <form onSubmit={handleSubmit}>
//         {["ssc", "hsc", "graduation", "postGraduation"].map((level) => (
//           <div key={level}>
//             <Typography variant="h6" gutterBottom>
//               {level.toUpperCase()}
//             </Typography>
//             <Grid container spacing={2}>
//               <Grid item xs={12} sm={6}>
//                 <TextField
//                   name="name"
//                   label="School/Institute Name"
//                   variant="outlined"
//                   fullWidth
//                   value={education[level].name}
//                   onChange={(e) => handleChange(e, level)}
//                   required
//                 />
//               </Grid>
//               <Grid item xs={12} sm={6}>
//                 <TextField
//                   name="board"
//                   label="Board/University"
//                   variant="outlined"
//                   fullWidth
//                   value={education[level].board}
//                   onChange={(e) => handleChange(e, level)}
//                   required
//                 />
//               </Grid>
//               <Grid item xs={12} sm={6}>
//                 <TextField
//                   name="cgpa"
//                   label="CGPA"
//                   variant="outlined"
//                   fullWidth
//                   value={education[level].cgpa}
//                   onChange={(e) => handleChange(e, level)}
//                   required
//                 />
//               </Grid>
//               <Grid item xs={12} sm={6}>
//                 <TextField
//                   name="year"
//                   label="Passing Year"
//                   variant="outlined"
//                   fullWidth
//                   value={education[level].year}
//                   onChange={(e) => handleChange(e, level)}
//                   required
//                 />
//               </Grid>
//             </Grid>
//           </div>
//         ))}
//         <Grid container spacing={2} justifyContent="space-between">
//           <Grid item>
//             <Button style={{ marginTop: "20px" }} variant="contained" onClick={handlePrev}>
//               Previous
//             </Button>
//           </Grid>
//           <Grid item>
//             <Button style={{ marginTop: "20px" }} type="submit" variant="contained" color="primary">
//               Next
//             </Button>
//           </Grid>
//         </Grid>
//       </form>
//     </Container>
//   );
// };

// export default EducationForm;
