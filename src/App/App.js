import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { Container } from "react-bootstrap";
import Home from "../Pages/Home/Home";
import { AppProvider } from "../Context/AppContext";

function App() {
  return (
    <Router>

      <Container fluid>
        <AppProvider>
          <Routes>
            <Route path="/" element={<Navigate to="/calculadora" />} />
            <Route path="/calculadora" element={<Home />} />
          </Routes>
        </AppProvider>
      </Container>
    </Router>
  );
}

export default App;
