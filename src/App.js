import Home from "./components/Header/Home"
import NavBar from "./components/Header/NavBar"
import Inicio from "./components/Main/Inicio"
import Proyectos from "./components/Main/Proyectos"
import Directivos from "./components/Main/Directivos"
import Contactenos from "./components/Footer/Contactenos"
import "bootstrap/dist/css/bootstrap.min.css";
import "./app.css"
function App() {
  return (
    <>
    <Home/>
    <NavBar/>
    <Inicio/>
    <Proyectos/>
    <Directivos/>
    <Contactenos/>
    </>
  );
}

export default App;
