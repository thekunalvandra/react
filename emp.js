import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Emp() {
  const [data, setData] = useState([]);
  useEffect(()=>{
    fetch("https://6312ca5ea8d3f673ffbf7931.mockapi.io/employees")
      .then((res)=>{
        return res.json();
      })
      .then((res)=>{
        setData(res);
      });
    },[]);

  const foramtedemployees=data.map((emp)=>{
    return (<>
        <Link style={{textDecoration:"none"}} to={"../employees/" + emp.id}>
        <div class="card m-1">
    <img class="card-img-top" src={emp.empimage} alt="Card image cap" style={{width:"300px",height:"350px"}}/>
    <div class="card-body">
      <p class="card-title">{emp.empname}</p>

    </div>
  </div>
  
        </Link>
      </>);
  });

  return (
    <>
      <div class="card-group bg-secondary">
          {foramtedemployees}
      </div>
    </>);
}
