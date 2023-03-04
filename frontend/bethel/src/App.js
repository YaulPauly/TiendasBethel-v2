import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home, About } from "./pages";
import './App.css';


function App() {
    return (
      <BrowserRouter>
        <div className="App">
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/nosotros' element={<About/>}/>
          </Routes>
        </div>
      </BrowserRouter>
    );
}

export default App;
