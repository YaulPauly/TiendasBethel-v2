import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home, About, Contact } from "./pages";
import './App.css';
import "@fontsource/montserrat";

function App() {
    return (
      <BrowserRouter>
        <div className="App">
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/nosotros' element={<About/>}/>
            <Route path='/contactanos' element={<Contact/>}/>
          </Routes>
        </div>
      </BrowserRouter>
    );
}

export default App;
