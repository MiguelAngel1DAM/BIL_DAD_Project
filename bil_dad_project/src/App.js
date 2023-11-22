import {BrowserRouter, Route, Routes} from "react-router-dom";
import './App.css';
import Login from "./pages/Login/login.page";
import Settings from "./pages/settingspage/settings.page.js";
import Mainmenu from "./pages/Mainmenu/menu.page";
import Serverpage from "./pages/serverspage/server.page";
import Addserverpage from "./pages/addserverpage/add.server.page";
import Basepage from "./pages/databasepage/base.page.js";
import Adddatabasepage from "./pages/addbasepage/add.server.page";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login/>}/>
        <Route path="/mainMenu" element={<Mainmenu/>}/>
        <Route path="/settings" element={<Settings/>}/>
        <Route path="/serverpage" element={<Serverpage/>}/>
        <Route path="/addserverpage" element={<Addserverpage/>}/>
        <Route path="/basepage" element={<Basepage/>}/>
        <Route path="/adddatabasepage" element={<Adddatabasepage/>}/>
      </Routes>
    </BrowserRouter>
  );
}
 
export default App;
