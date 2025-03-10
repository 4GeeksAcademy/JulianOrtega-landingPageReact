import React from "react";
import ReactDOM from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import CardSection from "./components/CardSection";
import Footer from "./components/Footer";
import '../styles/index.css'

const App = () => (
  <div>
    <Navbar />
    <Banner />
    <CardSection />
    <Footer />
  </div>
);

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
