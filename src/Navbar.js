import { React, useEffect, useState } from "react";
import { createRoot } from "react-dom/client";
import {
  BrowserRouter,
  Link,
  Outlet,
  Route,
  Routes,
  useNavigate,
  useParams,
} from "react-router-dom";
import "./styles.css";

export default function Navbar() {
  return (
    <>
      <nav class="navbar container-fluid">
        <div class="w-100">
          <div class=" logoNavbar navbar-brand float-start">
            <h3></h3>
          </div>
          <h2 class=" float-start webName">
            &nbsp; &#8686;&#8686;&nbsp;&nbsp;&nbsp;Strive Up
          </h2>
          
          <a className="navbar-brand">
            <button class="me-2 mt-1 pt-2 addFacBtn">
              <Link
                class="linkR"
                style={{ textDecoration: "none", color: "white" }}
                to="/index/add"
              >
                <h5>Add Profile</h5>
              </Link>
            </button>
          </a>

          <a className="navbar-brand" href="/index/home">
            <button class="viewFacultyTxt mt-1 me-5">
              
              <h4 class="">Home</h4>
            </button>
          </a>

          <a className="navbar-brand" href="/">
            <button class="viewFacultyTxt mt-1 me-5">
              
              <h4 class="">View Profiles</h4>
            </button>
          </a>
         
        </div>
      </nav>
      <Outlet />
    </>
  );
}
//