import {Header} from "./Componentes/Header";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {Contacto} from "./Views/Contacto";
import cakeLogo from "./assets/img/img2.png"
import {Home} from "./Views/Home";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  return (
    <>
      <BrowserRouter>
      <Header/>
        <Routes>
          <Route path="/" element={<Home logo={cakeLogo}/>}></Route>
          <Route path="/Contacto" element={<Contacto/>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App