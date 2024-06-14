import React from "react";
import { Provider } from "react-redux";
import store from "./store/store";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import PersonalInfoForm from "./components/PersonalInfoForm";
import EducationForm from "./components/EducationForm.js";
import WorkExperienceForm from "./components/WorkExperienceForm.js";
import SkillsForm from "./components/SkillsForm.js";
import AdditionalInfoForm from "./components/AdditionalInfoForm";
import ReviewForm from "./components/ReviewForm";
import { Container } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const theme = createTheme();

const App = () => {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <Router>
          <Container>
            <Routes>
              <Route path="/PersonalInfo" element={<PersonalInfoForm/>} />
              <Route path="/EducationForm" element={<EducationForm />} />
              <Route path="/WorkExperience" element={<WorkExperienceForm />} />
              <Route path="/Skills" element={<SkillsForm />} />
              <Route path="/AdditionalInfoForm" element={<AdditionalInfoForm />} />
              <Route path="/ReviewForm" element={<ReviewForm />} />
              <Route path="/" element={<Navigate to="/PersonalInfo" />} />
            </Routes>
          </Container>
        </Router>
      </ThemeProvider>
    </Provider>
  );
};

export default App;
