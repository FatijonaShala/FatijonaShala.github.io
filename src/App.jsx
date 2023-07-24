import "./App.css";
import SidebarNav from "./components/sidebarNav.jsx";
import Intro from "./components/intro";
import Experience from "./components/experience.jsx";
import About from "./components/about.jsx";
import Projects from "./components/projektet.jsx";
import Footer from "./components/footer";
import "./style/global.css";

 import 'rsuite/styles/index.less';



function App() {
  return (
    <div className="App">
      <div id="content">
       <Intro/>
       <About/>
       <Experience/>
       <Projects/>
       <Footer/>
      </div>
       <SidebarNav /> 
    </div>
  );
}

export default App;
