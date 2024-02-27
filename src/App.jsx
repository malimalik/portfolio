import React, { useState } from "react";

import logo from "./logo.svg";
import Welcome from "./Components/homepage/Welcome";
import Resume from "./Components/resume/Resume";
import Freelancing from "./Components/freelancing/Freelancing";
import TheRealWorld from "./Components/trw/TheRealWorld";
import Header from "./Components/Header";
import About from "./Components/about/About";
import "./App.css";
import { Container, Typography } from "@mui/material";
import Homepage from "./Components/homepage/Homepage";

function App() {
  const [currentPage, setCurrentPage] = useState("home");

  const navigateToPage = (page) => {
    setCurrentPage(page);
  };

  let pageContent;

  switch (currentPage) {
    case "resume":
      pageContent = <Resume />;
      break;
    case "about":
      pageContent = <About />;
      break;
    case "freelancing":
      pageContent = <Freelancing />;
      break;
    case "trw":
      pageContent = <TheRealWorld />;
      break;
    default:
      pageContent = <Homepage />;
  }

  return (
    <>
      <Header onNavLinkClick={(page) => navigateToPage(page)} />

      {pageContent}
    </>
  );
}

export default App;
