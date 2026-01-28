import React, { useEffect, useState } from "react";

function Use() {
  let [f, setF] = useState("🍏");
  useEffect(() => {
    if (f == "🍏") {
      setF("🍎");
    } else {
      setF("🍏");
    }
  },[]);
  return <h1>fruit : {f}</h1>;
}

export default Use;
