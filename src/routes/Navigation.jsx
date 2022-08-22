import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";  

import MainPages from "../pages/MainPages";
import ControllPage from "../pages/ControllPage";
import Header from "../layout/Header";
import Footer from "../layout/Footer";
const Navigation =()=>{
    return(
      <>
        <Router>
          <div className="flex justify-between flex-col min-h-screen">
            <Header/>
            <Routes>
              <Route exact path="/"  element={<MainPages/>} />
              <Route path="/:id" element={<ControllPage/>} />
            </Routes>
            <Footer/>
          </div>
        </Router>
      </>
    )
}

export default Navigation;