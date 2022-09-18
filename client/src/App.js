import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "semantic-ui-css/semantic.css";
import { Container } from "semantic-ui-react";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import MenuBar from "./components/MenuBar";

function App() {
  return (
    <Container>
      <BrowserRouter>
        <MenuBar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/register" element={<Register />} />
        </Routes>
      </BrowserRouter>
    </Container>
  );
}

export default App;
