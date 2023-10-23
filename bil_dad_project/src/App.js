import {BrowserRouter, Route, Routes} from "react-router-dom";
import './App.css';
import Login from "./pages/Login/login.page";
import Mainmenu from "./pages/Mainmenu/menu.page";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login/>}/>
        <Route path="/mainMenu" element={<Mainmenu/>}/>
      </Routes>
    </BrowserRouter>
  );
}
 
export default App;
