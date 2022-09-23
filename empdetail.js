import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

export default function Empdetail() {
  let params = useParams();
  console.log(params.id)
  const navigate = useNavigate();

  const [data, setdata] = useState({});

  useEffect(() => {
    fetch(
      "https://6312ca5ea8d3f673ffbf7931.mockapi.io/employees/" + params.id,
      {
        method: "GET"
      }
    )
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        setdata(res);
      });
  }, []);
  console.log(data)
  return (
    <>
              <div class="card mb-3 text-center">
              <div class="p-3 mb-2 bg-primary text-white">
          <img class="card-img-top " src={data.empimage} alt="Card image cap"  style={{width:"30%",borderRadius: "5%",height:"400px",margin:"10px auto"}}/>
          <div class="card-body">
            <p class="card-title">Name:{data.empname}</p>
            <p class="card-text">Code:{data.empcode}</p>
            <p class="card-text">Email:{data.empemail}</p>
            <p class="card-text">Mobile:{data.empmobile}</p>
            <p class="card-text">Joiningdate:{data.empdate}</p>
               <button className="btn btn-dark m-1"
              onClick={() => {
                fetch("https://6312ca5ea8d3f673ffbf7931.mockapi.io/employees/" + params.id,
                  {
                    method: "DELETE"
                  }
                ).then((res) => {
                  navigate("/employees");
                });
              }}
            >
              Delete
            </button>
          
            <button className="btn btn-dark m-1"
              onClick={() => {
                navigate("/employees/edit/" + params.id);
              }}
            >
              Edit
            </button>
          </div>
        </div>
      </div>
     
    </>
  );
}

