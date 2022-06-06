import Header from "./components/Header/Header";
import Footer from "./components/Footer";
import ProfilePage from "./pages/ProfilePage";
import HomePage from "./pages/HomePage";
import Login from "./components/Login";
import Register from "./components/Register";

import {Route, Routes} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route exact path="/" element={<HomePage/>}/>
        <Route path="/profile" element={<ProfilePage/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/register" element={<Register/>}/>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
