import "./App.css";
import Header from "./components/Header/Header";
import Shop from "./components/Shop/Shop";
import { Routes, Route, Link } from "react-router-dom";
import Orders from "./components/Orders/Orders";
import Inventory from "./components/Inventory/Inventory";
import About from "./components/About/About";
import Login from "./components/Login/Login";
import Signup from "./components/Signup/Signup";
import RequireAuth from "./components/RequrieAuth/RequireAuth";
import Shipment from "./components/Shipment/Shipment";

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Shop />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/orders" element={<Orders></Orders>} />
        <Route
          path="/inventory"
          element={
            <RequireAuth>
              <Inventory></Inventory>
            </RequireAuth>
          }
        />
        <Route
          path="/shipment"
          element={
            <RequireAuth>
              <Shipment></Shipment>
            </RequireAuth>
          }
        ></Route>
        <Route path="/about" element={<About></About>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/signup" element={<Signup></Signup>}></Route>
      </Routes>
    </div>
  );
}

export default App;
