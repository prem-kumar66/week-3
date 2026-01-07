import React, { use, useState } from "react";

function Signup() {
  let [n, setN] = useState("test");
  let [e, setE] = useState("test@gmail.com");
  let [p, setP] = useState("password");

async  function submitHandler() {
    let objData = {
      name: n,
      email: e,
      password: p,
    };
    console.log(" object : " + JSON.stringify(objData,null,2));
    try{
      let res= await  fetch("http://localhost:4040/api/signup",
        {
        method:"POST",
        headers:{
          "Content-Type":"application/json"
        },
        body:JSON.stringify(objData)
      }
    )
    let dataText=await res.text();
    console.log("\n\t res = "+dataText)

    }catch{
      console.log("\n\t error")
    }


  }

  return (
    <>
      <div>
        <h3>create account</h3>
        <input
          type="text"
          placeholder="name"
          onChange={(e) => {
            // console.log("name : " + e.target.value);
            setN(e.target.value);
          }}
        />
        <br />
        <input
          type="text"
          placeholder="email"
          onChange={(e) => {
            // console.log("name : " + e.target.value);
            setE(e.target.value);
          }}
        />
        <br />
        <input
          type="text"
          placeholder="password"
          onChange={(e) => {
            // console.log("name : " + e.target.value);
            setP(e.target.value);
          }}
        />
        <br />
        <br />
        <button onClick={submitHandler}>submit</button>
        <br />
        <br />
        <div>name : {n}</div>
        <div>name : {e}</div>
        <div>name : {p}</div>
      </div>
    </>
  );
}

export default Signup;
