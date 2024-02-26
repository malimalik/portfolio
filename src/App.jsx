import logo from "./logo.svg";
import Welcome from "./Components/homepage/Welcome";
import Header from "./Components/Header";
import "./App.css";
import { Container, Typography } from "@mui/material";
import Homepage from "./Components/homepage/Homepage";

function App() {
  return (
    <>
      <Header></Header>
      <Homepage></Homepage>
    </>
  );
}

export default App;
