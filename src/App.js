import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import MidlleHome from "./components/MidlleHome";
import About2 from "./components/About2";
import Service from "./components/Service";
import Clients from "./components/Clients";
import Contact from "./components/Contact";

// import { HashRouter, Switch, Route } from "react-router-dom";
// import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      {/* <BrowserRouter> */}
        <Navbar />
        {/* <Routes> */}
        <Home/> 
        {/* </Routes> */}
        {/* <Routes> */}
          <MidlleHome/>
        {/* </Routes> */}
        {/* <Routes> */}
        <About/>
        {/* </Routes> */}
        {/* <Routes> */}
        <About2/>
        {/* </Routes> */}
        {/* <Routes> */}
         <Service/>
        {/* </Routes> */}
        {/* <Routes> */}
         <Clients/> 
        {/* </Routes> */}
        {/* <Routes> */}

        <Contact/> 
        {/* </Routes> */}
      {/* </BrowserRouter> */}
    </div>
  );
}

export default App;
