import Header from "./components/Header/Header";
import Footer from "./components/Footer";

import HomePage from "./pages/HomePage";
import Login from "./components/Header/Login";
import Register from "./components/Header/Register";
import SearchPage from "./pages/SearchPage";
import {Route, Routes} from "react-router-dom";
import PrivateRoute from "./components/utils/PrivateRoute";
import RestaurantPage from "./pages/RestaurantPage"
import EditPage from "./pages/EditPage";

function App(props) {

  return (
    <div className="App">
      <Header/>
          <Routes>
              <Route exact path="/" element={<HomePage/>}/>
              <Route path="/profile" element={<PrivateRoute/>}/>
              <Route path="/login" element={<Login/>}/>
              <Route path="/register" element={<Register/>}/>
              <Route path="/search" element={<SearchPage/>}/>
              <Route path="/restaurant/:id" element={<RestaurantPage/>}/>
              <Route path="/restaurant/:id/edit" element={<EditPage/>}/>
          </Routes>
      <Footer/>
    </div>
  );
}

export default App;
