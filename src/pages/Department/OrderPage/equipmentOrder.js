import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import axios from "axios";
import { toast } from "react-toastify";


const EquipmentOrder = () => {
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
            
            <th style={{ testAlign: "center" }}>OID</th>
            <th style={{ testAlign: "center" }}>name</th>
            <th style={{ testAlign: "center" }}>description</th>
            <th style={{ testAlign: "center" }}>department</th>
            <th style={{ testAlign: "center" }}>optimisticLockField</th>
            <th style={{ testAlign: "center" }}>gcrecord</th>
            <th style={{ testAlign: "center" }}>departmentNavigation</th>
            
            <th style={{ testAlign: "center" }}>action</th>
          </tr>
        </thead>
        <tbody>
          {data &&
            data.map((OrderRequestParts) => {
              return (
                <tr >
                 
                  <td>{OrderRequestParts.OID}</td>
                  <td>{OrderRequestParts.OrderRequest}</td>
                  <td>{OrderRequestParts.PartName}</td>
                  <td>{OrderRequestParts.PartName}</td>
                  <td>{OrderRequestParts.Requirement}</td>
                  <td>{OrderRequestParts.Comment}</td>
                  <td>{OrderRequestParts.Meashure}</td>
                 
                  <td>
                    <Link to={"/update/${OrderRequestParts.id}"}>
                      <button className="btn btn-edit">Edit</button>
                    </Link>

                    <button
                      className="btn btn-delete"
                      onClick={() => onDeleteDevice(OrderRequestParts.id)}
                    >
                      Delete
                    </button>

                    <Link to={"/view/${OrderRequestParts.id}"}>
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

export default EquipmentOrder;
