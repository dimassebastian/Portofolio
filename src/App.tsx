import Header from "./components/Header";
import "./App.css";
import Navbar from "./components/Navbar";
import Design from "./components/Design";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Info from "./pages/Info";
import Faq from "./pages/Faq";
import { Route, Routes } from "react-router-dom";
import github from "./assets/github.svg";
import instagram from "./assets/instagram.svg";

//import "bootstrap/dist/css/bootstrap.css";
function App() {
  return (
    <div className="App">
      <div className="frame">
        <div className="isi">
          <Design></Design>
          <header className="header">
            <Header></Header>
          </header>
          <nav className="nav">
            <Navbar></Navbar>
          </nav>
          <footer className="footer">
            <a href="#">
              <img src={github} alt="icon 1" />
            </a>
            <a href="#">
              <img src={instagram} alt="icon 2" />
            </a>
          </footer>
          <div className="container">
            <Routes>
              <Route path="/" element={<About />}></Route>
              <Route path="/projects" element={<Projects />}></Route>
              <Route path="/info" element={<Info />}></Route>
              <Route path="/Faq" element={<Faq />}></Route>
            </Routes>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
