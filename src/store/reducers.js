const initialState = {
    personalInfo: {},
    education: [],
    workExperience: [],
    skills: [],
    additionalInfo: {},
  };
  
  const rootReducer = (state = initialState, action) => {
    switch (action.type) {
      case "SAVE_PERSONAL_INFO":
        return { ...state, personalInfo: action.payload };
      case "SAVE_EDUCATION":
        return { ...state, education: action.payload };
      case "SAVE_WORK_EXPERIENCE":
        return { ...state, workExperience: action.payload };
      case "SAVE_SKILLS":
        return { ...state, skills: action.payload };
      case "SAVE_ADDITIONAL_INFO":
        return { ...state, additionalInfo: action.payload };
      default:
        return state;
    }
  };
  
  export default rootReducer;
  