/** @format */

import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";
import Form from "./components/form";
import Home from "./components/home";
import React from "react";
import { Provider } from "react-redux";
import store from "./store";
import Navbar from "./components/navbar";

function App() {
  return (
    <>
      <Provider store={store}>
        <Router>
          <div>
            <Navbar />
            <Routes>
              <Route path='/' Component={Home} />
              <Route path='/form' Component={Form} />
            </Routes>
          </div>
        </Router>
      </Provider>
    </>
  );
}

export default App;
