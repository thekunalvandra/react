import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

export default function Empadd() {
  const navigate = useNavigate();
  const params = useParams();
  const [data, setData] = useState({});

  useEffect(() => {
    if (params.id > 0) {
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
          setData(res);
        });
    }
  }, []);

  return (
    <>
      <div className="bg-img " style={{height: "457px"}}>
      <table >
      
        <tr>
          <td>Enter Name:</td>
          <td>:</td>
          <td>
            <input
              value={data.empname}
              onChange={(e) => {
                setData({ ...data, empname: e.target.value });
              }}
              type="text"
            />
          </td>
        </tr>

        <tr>
          <td>Enter Code:</td>
          <td>:</td>
          <td>
            <input
              value={data.empcode}
              onChange={(e) => {
                setData({ ...data, empcode: e.target.value });
              }}
              type="text"
            />
          </td>
        </tr>

        <tr>
          <td>Enter Email:</td>
          <td>:</td>
          <td>
            <input
              value={data.empemail}
              onChange={(e) => {
                setData({ ...data, empemail: e.target.value });
              }}
              type="text"
            />
          </td>
        </tr>

        <tr>
          <td>Enter Mobile:</td>
          <td>:</td>
          <td>
            <input
              value={data.empmobile}
              onChange={(e) => {
                setData({ ...data, empmobile: e.target.value });
              }}
              type="text"
            />
          </td>
        </tr>

        <tr>
          <td>Enter Image:</td>
          <td>:</td>
          <td>
            <input
              value={data.empimage}
              onChange={(e) => {
                setData({ ...data, empimage: e.target.value });
              }}
              type="text"
            />
          </td>
        </tr>

        <tr>
          <td>Enter Joiningdate:</td>
          <td>:</td>
          <td>
            <input type="text"
              value={data.empdate}
              onChange={(e) => {
                setData({ ...data, empdata: e.target.value });
              }}/>
              
          </td>
        </tr>
        <tr>
          <td colSpan="3">
            <button
              onClick={() => {
                if (params.id > 0) {
                  fetch(
                    "https://6312ca5ea8d3f673ffbf7931.mockapi.io/employees/" +params.id,
                    {
                      method: "PUT",
                      body: JSON.stringify(data),
                      headers: {
                        "Content-Type": "application/json"
                      }
                    }
                  ).then(() => {
                    navigate("/employees");
                  });
                } else {
                  fetch(
                    "https://6312ca5ea8d3f673ffbf7931.mockapi.io/employees/",
                    {
                      method: "POST",
                      body: JSON.stringify(data),
                      headers: {
                        "Content-Type": "application/json"
                      }
                    }
                  ).then(() => {
                    navigate("/employees");
                  });
                }
              }}
            >
              {params.id > 0 && "Edit  "}
              {!(params.id > 0) && "Add  "}
              employees
            </button>
          </td>
        </tr>
      </table>
      </div>
    </>
  );
}
