import Header from "./components/Header/Header";
import Footer from "./components/Footer";
import ProfilePage from "./pages/ProfilePage";
import HomePage from "./pages/HomePage";
import Login from "./components/Header/Login";
import Register from "./components/Header/Register";
import SearchPage from "./pages/SearchPage";

import {Route, Routes} from "react-router-dom";
import queryString from 'query-string'

function App() {
  
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route exact path="/" element={<HomePage/>}/>
        <Route path="/profile" element={<ProfilePage/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="/search" element={<SearchPage/>}/>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
