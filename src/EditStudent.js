import { useNavigate, useParams } from "react-router-dom";
import { useState, React, useEffect } from "react";
import "./styles.css";
export default function EditStudent() {
  const param = useParams();
  const navigate = useNavigate();
  const apiUrl = "https://631ebaf258a1c0fe9f568e6f.mockapi.io/StudentApi/StudentApi";
  //<img class="rounded " src={data.FImg} id = "imgEditId" />
  useEffect(() => {
    fetch(apiUrl + "/" + param.id, { method: "GET" })
      .then((res) => res.json())
      .then((res) => setData(res));
  }, [param.id]);

  const [data, setData] = useState({});
  return (
    <>
      <div class=" marginL w-50 text-center h-auto d-inline-flex p-2">
        <div class="inputsEdit w-100">
          <input
            class="w-100 display-content-center mt-3 mb-1"
            type="text"
            value={data.SName}
            onChange={(e) => {
              setData({ ...data, SName: e.target.value });
            }}
          /><br/>

          <input
            class="w-100  display-content-center mb-1"
            type="text"
            value={data.SImg}
            onChange={(e) => {
              setData({ ...data, SImg: e.target.value });
            }}
          /><br/>
          <input
            class="w-100  display-content-center  mb-1"
            type="text"
            value={data.SBranch}
            onChange={(e) => {
              setData({ ...data, SBranch: e.target.value });
            }}
          /><br/>
          
          <input
            class="w-100  display-content-center  mb-1"
            type="text"
            value={data.SEmail}
            onChange={(e) => {
              setData({ ...data, SEmail: e.target.value });
            }}
          /><br/>
          <input
            class="w-100  display-content-center mb-1"
            type="text"
            value={data.SNumber}
            onChange={(e) => {
              setData({ ...data, SNumber: e.target.value });
            }}
          /><br/>
          <input
            class="w-100  display-content-center mb-1"
            type="text"
            value={data.SPNumber}
            onChange={(e) => {
              setData({ ...data, SPNumber: e.target.value });
            }}
          /><br/>
          <input
          class="btn btn-primary h-auto w-25 display-content-center mb-1"
          type="button"
          value="Edit Student"
          onClick={() => {
            fetch(apiUrl + "/" + param.id, {
              method: "PUT",
              body: JSON.stringify(data),
              headers: {
                "Content-Type": "application/json",
              },
            }).then((res) => {
              //console.log(res);
              navigate("/index/view");
            });
          }}
        />
        </div>

        
      </div>
    </>
  );
}
