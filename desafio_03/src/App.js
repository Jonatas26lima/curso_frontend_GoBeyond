import React from "react";
import "./app.css";

import Header from "./components/Header";
import Nav from "./components/Nav";
import { data } from "./data";


function App() {
  return (
    <main  className="main">
      <Header {...data.user} />
      <Nav />      
            
    </main>    
  );
}

export default App;
