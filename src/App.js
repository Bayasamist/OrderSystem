import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";

import OrderEdit from "./pages/Department/OrderPage/OrderEdit";
import Home from "./pages/Home";
import View from "./pages/View";
import About from "./pages/About";
import Login from "./components/Login";
import Header from "./components/Header";
import { PrivateOutlet } from "./components/PrivateRoute";
import OrderPage from "./pages/Department/OrderPage/Order";
import OrderHome from "./pages/Department/HangamjBuilder/OrderHome";
import NewOrderZahialsanTable from "./pages/Department/OrderPage/NewOrderZahialsanTable";
import EquipmentOrder from "./pages/Department/OrderPage/EquipmentOrder";
// css imports
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-toastify/dist/ReactToastify.css";
import AcceptedOrder from '../src/pages/Department/OrderPage/AcceptedOrder';
import "react-bootstrap-typeahead/css/Typeahead.css";
import ReactTable from 'react-table';
import AddEq from "./pages/Department/OrderPage/AddEq";

function App() {
  return (
    <div className="App">
      <Header />
      <BrowserRouter>
        <ToastContainer position="top-center" />
        <Routes>
          <Route exact path="/" element={<Login />}></Route>
          <Route path="/home" element={<PrivateOutlet />}>
            <Route path="/home" element={<Home />} />
          </Route>
          <Route path="/add" element={<PrivateOutlet />}>
            <Route path="/add" element={<AddEq />} />
          </Route>
          <Route path="/update/:OID" element={<PrivateOutlet />}>
            <Route path="/update/:OID" element={<OrderEdit />} />
          </Route>

          <Route path="/view/:OID" element={<PrivateOutlet />}>
            <Route path="/view/:OID" element={<View />} />
          </Route>
          <Route path="about" element={<PrivateOutlet />}>
            <Route path="/about" element={<About />} />
          </Route>

          <Route path="/order" element={<PrivateOutlet />}>
            <Route path="/order" element={<OrderPage />} />
          </Route>
          <Route path="/orderhome" element={<PrivateOutlet />}>
           
            <Route path="/orderhome" element={<OrderHome />} />
          </Route>
          <Route path="/newOrderZahialsanTable" element={<PrivateOutlet />}>
            <Route
              path="/newOrderZahialsanTable"
              element={<NewOrderZahialsanTable />}
            />
          </Route>

          <Route path="/equipmentOrder" element={<PrivateOutlet />}>
            <Route path="/equipmentOrder" element={<EquipmentOrder />} />
          </Route>
          <Route path="/acceptedOrder" element={<PrivateOutlet />}>
            <Route path="/acceptedOrder" element={<AcceptedOrder />} />
          </Route>

          {/* <Route
            path='/private-nested'
            element={
              <PrivateRoute>
                <Private />
              </PrivateRoute>
            }
          /> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
