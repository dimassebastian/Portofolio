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
import Splash from "./components/Splash";

function App() {
  return (
    <div className="App">
      <Splash />
      <div className="frame">
        <div className="isi">
          <header className="header">
            <Header></Header>
          </header>
          <nav className="nav">
            <Navbar></Navbar>
          </nav>
          <footer className="footer">
            <a
              href="https://github.com/dimassebastian"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={github} alt="github" />
            </a>
            <a href="https://www.instagram.com/dimassebastiandev/">
              <img src={instagram} alt="instagram" />
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
          <Design></Design>
        </div>
      </div>
    </div>
  );
}

export default App;
