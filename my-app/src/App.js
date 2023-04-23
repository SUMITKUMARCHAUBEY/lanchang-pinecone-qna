import "./App.css";
import Form from "./COMPONENTS/Form";
import NavBar from "./COMPONENTS/NavBar";
import Navigation from "./COMPONENTS/Navigation";
import About from "./COMPONENTS/About";
import Contect from "./COMPONENTS/Contect";


import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Question from "./COMPONENTS/Question";

function App() {
  return (
    <div className="App">
     <Router>

      <NavBar />
      <div className="mt-5 pt-2" style={{ display: "flex" }}>
        <Navigation />
        <Routes>

      <Route path='/' element={<Form />}></Route>  
      <Route path="/about" element={<About/>}></Route>
      <Route path="/contect" element={<Contect/>}></Route>
      <Route path="/qna" element={<Question/>}></Route>
      </Routes>
      </div>
     </Router>
    </div>
  );
}

export default App;
