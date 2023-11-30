import React from "react";
import "./App.css";
import Header from "./components/Header";
import About from "./components/About";
import Payment from "./components/Payment";
import Services from "./components/Services";
// import Clients from "./components/Clients";
import Servicetwo from "./components/Service-2";
import Booking from "./components/Booking";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="container-fluid">
      <Header />
      <About />
      <Payment />
      <Services />
      <Servicetwo />
      <Booking />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
