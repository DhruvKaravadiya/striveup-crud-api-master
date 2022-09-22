import { React, useState, Component } from "react";
import { createRoot } from "react-dom/client";
import { useNavigate } from "react-router-dom";
import "./styles.css";
export default function AddFaculty() {
  const navigate = useNavigate();
  const apiUrl = "https://631ebaf258a1c0fe9f568e6f.mockapi.io/StudentApi/StudentApi";

  const [data, setData] = useState({ FName: "" });
  return (
    <>
      <div class="bodyMain">
        <div
          class="addFacMainCard mt-5
      "
        >
            

          <div class="rightCardBox " style={{ height: "70vh" }}>
            <div class="headName w-100 p-4 mt-3">
              {" "}
              <h1 class=" d-flex justify-content-center">Enter Details</h1>
            </div>
            <div class="inpNames ms-3">
              <h5 class="mt-3 ms-5">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;UserName</h5>
              <h5 class="mt-3 ms-5">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;ImageLink</h5>
              <h5 class="mt-4 ms-5">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;SNumber</h5>
              <h5 class="mt-3 ms-5">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;SPNumber</h5>
              <h5 class="mt-4 ms-5">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;SDepartment</h5>
              <h5 class="mt-3 ms-5">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;SEmail</h5>
            </div>
            <div class="inpts">
              <div class="d-flex justify-content-center mt-3">
                <input
                  class="addFacInputs w-100"
                  placeholder="Enter your Full-Name"
                  type="text"
                  onChange={(e) => {
                    setData({ ...data, SName: e.target.value });
                  }}
                />
              </div>
              <div class=" d-flex justify-content-center mt-3">
                <input
                  class="addFacInputs w-100"
                  placeholder="Enter your Image"
                  type="text"
                  onChange={(e) => {
                    setData({ ...data, SImg: e.target.value });
                  }}
                />
              </div>
              <div class=" d-flex justify-content-center mt-3">
                <input
                  class="addFacInputs w-100"
                  placeholder=" Enter your Salary"
                  type="text"
                  onChange={(e) => {
                    setData({ ...data, SNumber: e.target.value });
                  }}
                />
              </div>
              <div class=" d-flex justify-content-center mt-3">
                <input
                  class="addFacInputs w-100"
                  placeholder="Enter your Gender"
                  type="text"
                  onChange={(e) => {
                    setData({ ...data, SPNumber: e.target.value });
                  }}
                />
              </div>
              <div class=" d-flex justify-content-center mt-3">
                <input
                  class="addFacInputs w-100"
                  placeholder="Enter your Department"
                  type="text"
                  onChange={(e) => {
                    setData({ ...data, SDepartment: e.target.value });
                  }}
                />
              </div>
              
              <div class=" d-flex justify-content-center mt-3">
                <input
                  class="addFacInputs w-100"
                  placeholder="Enter your Email"
                  type="text"
                  onChange={(e) => {
                    setData({ ...data, SEmail: e.target.value });
                  }}
                />
              </div>
              
              <div class="m-2 d-flex justify-content-center mt-3">
                <input
                
                  class="btn subBtn border-0 border-secondary pinkColor w-75 rounded"
                  type="button"
                  value="ADD"
                  onClick={() => {
                    fetch(apiUrl, {
                      method: "POST",
                      body: JSON.stringify(data),
                      headers: {
                        "Content-Type": "application/json",
                      },
                    }).then((res) => {
                      navigate("/index/view");
                    });
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

//      /faculties/add
