import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Home.css";
import axios from "axios";
import { toast } from "react-toastify";


const Home = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    getDevices();
  }, []);

  const getDevices = async () => {
    const response = await axios.get("http://192.168.11.8:22222/api/OrderRequestDevices");
    if (response.status === 200) {
      setData(response.data);
    }
  };
  const onDeleteDevice = async (id) => {
    if (window.confirm("are tou sure to delete")) {
      const response = await axios.delete(
        "http://192.168.11.8:22222/api/OrderRequestDevices/${id}"
      );
      if (response.status === 200) {
        toast.success(response.data);
        getDevices();
      }
    }
  };
  console.log("data=>", data);
  return (
    <div className="container">
      
      <div style={{ marginTop: "150px" }}>
      <table className="styled-table">
        <thead>
          <tr>
            <th style={{ testAlign: "center" }}>No.</th>
            <th style={{ testAlign: "center" }}>OID</th>
            <th style={{ testAlign: "center" }}>OrderName</th>
            <th style={{ testAlign: "center" }}>Department</th>
            <th style={{ testAlign: "center" }}>Employee</th>
            <th style={{ testAlign: "center" }}>OrderDate</th>
            <th style={{ testAlign: "center" }}>Device</th>
            <th style={{ testAlign: "center" }}>OrderType</th>
            <th style={{ testAlign: "center" }}>OrderNumber</th>
            <th style={{ testAlign: "center" }}>OrderStatus</th>
          </tr>
        </thead>
        <tbody>
          {data &&
            data.map((item, index) => {
              return (
                <tr key={index}>
                  <th scope="row">{index + 1}</th>
                 <th>{item.OID}</th>
                      <th>{item.OrderName}</th>
                      <th>{item.Department}</th>
                      <th>{item.Employee}</th>
                      <th>{item.OrderDate}</th>
                      <th>{item.Device}</th>
                      <th>{item.OrderType}</th>
                      <th>{item.OrderNumber}</th>

                      <th>{item.OrderStatus}</th>
                  <td>
                    <Link to={"/update/${item.id}"}>
                      <button className="btn btn-edit">Edit</button>
                    </Link>

                    <button
                      className="btn btn-delete"
                      onClick={() => onDeleteDevice(item.id)}
                    >
                      Delete
                    </button>

                    <Link to={"/view/${item.id}"}>
                      <button className="btn btn-view">View</button>
                    </Link>
                  </td>
                </tr>
              );
            })}
        </tbody>
      </table>
      </div>
    </div>
  );
};

export default Home;
