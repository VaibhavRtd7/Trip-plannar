/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import { getCall } from "../api";

function Restorants() {
  const [restros, setRestros] = useState([]);
  useEffect( () => {
    (async () => {
      const data = await getCall(`hotels`);
      setRestros(data);
    })();
  });
   
  console.log("Restros...");

  return (
    <div>
         <h1> This is the Restro.</h1>
    </div>
  )
}

export default Restorants;
