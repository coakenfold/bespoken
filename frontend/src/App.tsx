import React from "react";
import "./bootstrap.min.css";
import { Container } from "react-bootstrap";
import { HomeScreen } from "./screens/HomeScreen";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";

function App() {
  return (
    <div>
      <Header />
      <main>
        <Container>
          <h1>Main</h1>
          <HomeScreen />
        </Container>
      </main>
      <Footer />
    </div>
  );
}

export default App;
