import Home from "./components/Header/Home"
import NavBar from "./components/Header/NavBar"
import Proyectos from "./components/Main/Proyectos"
import Directivos from "./components/Main/Directivos"
import Contactenos from "./components/Footer/Contactenos"
import Footer from "./components/Footer/Footer"
import "bootstrap/dist/css/bootstrap.min.css";
import "./app.css"
function App() {
  return (
    <>
    <Home/>
    <NavBar/>
    <Proyectos/>
    <Directivos/>
    <Contactenos/>
    <Footer/>
    </>
  );
}

export default App;
