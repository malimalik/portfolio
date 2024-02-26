import logo from "./logo.svg";
import Welcome from "./Components/homepage/Welcome";
import Header from "./Components/Header";
import "./App.css";
import { Container, Typography } from "@mui/material";

function App() {
  return (
    <>
      <Header></Header>
      <Welcome></Welcome>
    </>
  );
}

export default App;
