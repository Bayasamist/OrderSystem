import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";

import AddEdit from "./pages/AddEdit";
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
            <Route path="/add" element={<AddEdit />} />
          </Route>
          <Route path="/update/:id" element={<PrivateOutlet />}>
            <Route path="/update/:id" element={<AddEdit />} />
          </Route>

          <Route path="/view/:id" element={<PrivateOutlet />}>
            <Route path="/view/:id" element={<View />} />
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
