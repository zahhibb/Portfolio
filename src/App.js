import React from "react";
import "./App.css";
import Navigation from "./components/Navigation/navigation";
import Index from "./pages/index.js";
import Footer from "./sections/footer";

const App = () => {
  return (
    <div className="main">
      <Navigation />
      <div className="content">
        <Index />
        <Footer />
      </div>
    </div>
  );
}

export default App;
