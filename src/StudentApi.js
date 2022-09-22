import { React, useEffect, useState } from "react";
import { Link, Outlet } from "react-router-dom";
//import DeleteStudent from "./DeleteStudent";
import "./styles.css";
export default function StudentApi() {
  const [data, setData] = useState([]);
  // fetch('https://630c3df653a833c5342623fc.mockapi.io/StudentMocApi')
  // .then ((res)=>{return res.json();})
  // .then((res)=>{setData(res)})
  // return (<h3>{data.FName}</h3>)
  useEffect(() => {
    fetch("https://631ebaf258a1c0fe9f568e6f.mockapi.io/StudentApi/StudentApi")
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        setData(res);
      });
  });
  let formatFac = data.map((Fac) => {
    return (
      <>
        <div class=" mainCard card col-md-3 p-0" >
          <div class=" cardImg ">
            <img
              src={Fac.SImg}
              class="card-img fLogo rounded-circle ms-2 float-start w-50 h-auto mt-4"
              alt="..."
            />
            <div class = "fb scm ms-2 ms-5"></div>
              <div class = "google scm ms-2"></div>
              <div class = "twitter scm ms-2"></div>
          </div>
          <h2 class="cardFName card-title blackColor ms-2">{Fac.SName}</h2>
          <div class="card-body">
            <h6>Branch : <span class = "txtColor ">{Fac.SBranch}</span></h6>
            <hr />
            <h6>Email : <span class = "txtColor">{Fac.SEmail}</span></h6>
            <hr />
            <h6>Phone Number : <span class = "txtColor">{Fac.SNumber}</span></h6>
            <hr />
            <h6>Parent Number : <span class = "txtColor">{Fac.SPNumber}</span></h6>

            <Link class="btn btn-primary" to={"index" + Fac.SId}>
              Edit Profile
            </Link>
            &nbsp;&nbsp;&nbsp;&nbsp;
            <Link class="btn btn-danger" to={"index/" + Fac.SId}>
              Delete Profile
            </Link>
          </div>{" "}
        </div>

        <Outlet />
      </>
    );
  });
  return <div className="row">{formatFac}</div>;
}
