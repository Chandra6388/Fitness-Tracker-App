
import './App.css';
import Navbar from './componet/Navbar';
import Home from './componet/Home';
import { BrowserRouter as Router, Routes, Route }  from "react-router-dom";
import AddWorkOut from './componet/AddWorkOut';
import Edit from './componet/Edit';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/addworkoutbtn" element={<AddWorkOut />} />
          <Route exact path="/editworkout/:id" element={<Edit/>}/>
        </Routes>
      </Router>
    </>
  );
}

export default App;
