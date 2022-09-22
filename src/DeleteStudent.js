import {React, useState ,useEffect } from "react";
import { useNavigate } from "react-router-dom";
//import { Component } from "react";
//import { createRoot } from "react-dom/client";
import { useParams } from "react-router-dom";


export default function DeleteStudent(){
    const navigate = useNavigate();
    const param = useParams();
  
    const apiUrl = "https://631ebaf258a1c0fe9f568e6f.mockapi.io/StudentApi/StudentApi";
  
    const [data,setData] = useState({});
  
    useEffect(()=>{
      fetch(apiUrl+"/"+param.id,{method:"GET"})
      .then(res=>res.json())
      .then(res=>setData(res));
    },[]);
  
    return <>
    <div class = "card border-none d-flex justify-content-center h-100 mt-5">

        <h1 class = "d-flex justify-content-center"> {data.SName} </h1>
        <h1 class = "d-flex justify-content-center"> {data.SDepartment} </h1>
        <img class = "d-flex m-auto justify-content-center h-25 w-25 rounded" src={data.SImg} />
        <button class = "d-flex justify-content-center m-auto mt-4 w-25 btn btn-danger" onClick={()=>{
          fetch(apiUrl+"/"+param.id,{method:"DELETE"})
          .then(res=>{
            navigate('/');
          });
        }}>Delete</button>
        {/* <button onClick={()=>{
          navigate('../index/'+param.id);
        }}>Edit</button> */}
      </div>
      </>;
  }
