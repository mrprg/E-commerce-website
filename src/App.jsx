import React from 'react';
import Home from './pages/Home';
import './App.css';
import ProductList from './pages/ProductList';
import Product from './pages/Product';
import Login from './pages/Login';
import Register from './pages/Register';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
            <Route path='/' element={ [<Home />] } />
            <Route path='/register' element={ [<Register />] } />
            <Route path='/login' element={ [<Login />] } />
            <Route path='/product' element={ [<Product />] } />
        </Routes>
    </div>
    </Router>
  );
}

export default App;
