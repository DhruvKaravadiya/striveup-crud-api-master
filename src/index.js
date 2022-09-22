
import ReactDOM from "react-dom/client";

import {React, useEffect, useState} from "react";
import { Component } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Link, Outlet, Route, Routes, useNavigate, useParams } from "react-router-dom";
import DeleteStudent from "./DeleteStudent";
import EditStudent from "./EditStudent";
//import App from './App';
import reportWebVitals from "./reportWebVitals";
import StudentApi from "./StudentApi";
import Navbar from "./Navbar";
//import About from "./About";
import Front from './Front';
import AddStudent from "./AddStudent";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    <BrowserRouter>
    <Navbar  />
      <Routes>

          <Route index path="/" element={<StudentApi />} />
          <Route  path = "index/home" element={<Front />}/>
          <Route path="/index/add" element={<AddStudent />} />
          <Route path ="/index/:id" element={<DeleteStudent />}/>
          <Route path="/index:id" element={<EditStudent />} />
      </Routes>
    </BrowserRouter>
  </>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
