import "./App.css";
import Navbar from "../src/Components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import React from "react";
import { useState } from "react";
// import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Alert from "./Components/Alert";
function App() {
  let [alert, setAlert] = useState(null);
  const ShowAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
  };
  setTimeout(() => {
    setAlert(null);
  }, 3000);

  // const [mode,setMode]=useState('light')

  // const ToggleMode=()=>{
  //   if(mode=='light')
  //   {
  //     setMode('dark')
  //     document.body.style.backgroundColor='grey'
  //     ShowAlert('Dark Mode enabled ','success')
  //   }
  //   else{
  //     setMode('light')
  //     document.body.style.backgroundColor='whitesmoke'
  //     ShowAlert('Light Mode enabled ','success')
  //   }
  // }
  return (
    <>
      <Navbar />
      <Home />
      {/* <About /> */}
      <Alert alert={alert} />
      
      {/* <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home ShowAlert={ShowAlert} />} />
          <Route path="About" element={<About />} />
        </Routes>
      </BrowserRouter> */}
    </>
  );
}

export default App;
