import React, { useState, createContext } from "react";
import { Route, Routes } from "react-router-dom";
import {
  HomePage,
  EventsPage,
  ContactPage,
  LoginSignupPage,
  ProjectsPage,
  TeamPage,
  IndividualProjectPage,
  TestingPage,
  AboutPage,
} from "./pages";
import Page404 from "./pages/Page404";
import { Navbar, Footer } from "./components/index";
// import Page404  from "./pages/Page404";
import Chatbotfolder from "./components/common/chatbot/Chatbotfolder";

export const ThemeContext = createContext("light")
const App = () => {
  const [theme, setTheme] = useState("light");
  const toggleTheme = () => {
    setTheme((curr) => (curr === 'light' ? "dark" : "light"))
  }
  return (
    <>
      <ThemeContext.Provider value={{ theme, toggleTheme }}>
        
        <Navbar />
        <Routes>
        {
            (theme !== "light")?document.body.style.backgroundColor ="black"
            :document.body.style.backgroundColor ="white"
        }
          <Route path="/" element={<HomePage />} />
          <Route path="/login-signup" element={<LoginSignupPage />} />
          <Route path="/events" element={<EventsPage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route
            path="/projects/:projectId"
            element={<IndividualProjectPage />}
          />
          <Route path="/team" element={<TeamPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/testing" element={<TestingPage />} />
          <Route path="*" element={<Page404 />} />
        </Routes>
        <Chatbotfolder />
        <Footer />
      </ThemeContext.Provider>
    </>
  );
};

export default App;
