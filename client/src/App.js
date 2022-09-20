import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "semantic-ui-css/semantic.css";
import { Container } from "semantic-ui-react";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import MenuBar from "./components/MenuBar";
import { AuthProvider } from "./context/auth";
import AuthRoute from "./util/AuthRoute";
import SinglePost from "./pages/SinglePost";

function App() {
  return (
    <AuthProvider>
      <Container>
        <BrowserRouter>
          <MenuBar />
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/" element={<AuthRoute />}>
              <Route exact path="/login" element={<Login />} />
              <Route exact path="/register" element={<Register />} />
            </Route>
            <Route exact path="/posts/:postId" element={<SinglePost />} />
          </Routes>
        </BrowserRouter>
      </Container>
    </AuthProvider>
  );
}

export default App;
