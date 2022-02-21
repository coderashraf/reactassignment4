import './App.css';
import Header from './Components/Header';
import {Routes,Route} from "react-router-dom"
import Home from './Components/Home';
import Contact from './Components/Contact';
import Students from './Components/Students';
function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/home" element={<Home/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/students" element={<Students/>}/>
      </Routes>
    </div>
  );
}

export default App;
