import './App.css';
import { Routes, Route} from "react-router-dom";
import Signup from './components/signUp/Signup';
import Login from './components/login/Login';
import Home from './pages/home/Home';
import UpdateStu from './pages/update/UpdateStu';
import AddStu from './pages/add/AddStu';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/students/create" element={<AddStu />} />
         <Route path="/students/:id" element={<UpdateStu />} />
      </Routes>
    </div>
  );
}

export default App;
