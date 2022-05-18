import React, {useState, useRef, useEffect} from 'react';
import "./App.scss";
import FormValidation from "./FormValidation";
// import LoginPage from "./LoginPage";
import {BrowserRouter, Routes, Route } from 'react-router-dom';
// import NextPage from './NextPage';
// import NextPage from "./NextPage1";
// import Success from './Success';
import Chart from './Component/Chart';

function App() {
  

  return (
    <div>
      <BrowserRouter>
      <Routes>
         <Route path='/' element={<FormValidation/>}></Route> 
        <Route path='/success' element={<Chart/>}></Route>
      </Routes>
      </BrowserRouter>
      {/* <LoginPage/> */}
      {/* <FormValidation/>
      <Chart/> */}
      {/* <Success/> */}
      {/* <NextPage1/> */}
    </div>
  );
}



export default App;






