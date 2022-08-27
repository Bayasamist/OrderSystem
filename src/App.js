import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

import AddEdit from './pages/AddEdit';
import Home from './pages/Home';
import View from './pages/View';
import About from './pages/About';
import Login from './components/Login';
import { PrivateOutlet } from './components/PrivateRoute';
import OrderPage from './pages/Department/OrderPage/Order';
import OrderHome from './pages/Department/HangamjBuilder/OrderHome';

// css imports
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-toastify/dist/ReactToastify.css';

import 'react-bootstrap-typeahead/css/Typeahead.css';

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <ToastContainer position='top-center' />
        <Routes>
          <Route exact path='/' element={<Login />}></Route>
          <Route path='/home' element={<PrivateOutlet />}>
            <Route path='/home' element={<Home />} />
          </Route>
          <Route path='/add' element={<AddEdit />}>
            <Route path='/add' element={<AddEdit />} />
          </Route>
          <Route path='/update/:id' element={<AddEdit />}>
            <Route path='/update/:id' element={<AddEdit />} />
          </Route>
          <Route path='/view/:id' element={<View />}>
            <Route path='/view/:id' element={<View />} />
          </Route>
          <Route path='/about' element={<About />}>
            <Route path='/about' element={<About />} />
          </Route>

          <Route path='/order' element={<OrderPage />} />

          <Route path='/orderhome' element={<OrderHome />}>
            <Route path='/orderhome' element={<OrderHome />} />
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
