import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import axios from "axios";
import { toast } from "react-toastify";


const AcceptedOrder = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    getDevices();
  }, []);

  const getDevices = async () => {
    const response = await axios.get("http://192.168.10.25:5001/api/device");
    if (response.status === 200) {
      setData(response.data);
    }
  };
  const onDeleteDevice = async (id) => {
    if (window.confirm("are tou sure to delete")) {
      const response = await axios.delete(
        "http://192.168.10.25:5001/api/device/${id}"
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
            <th style={{ testAlign: "center" }}>name</th>
            <th style={{ testAlign: "center" }}>description</th>
            <th style={{ testAlign: "center" }}>department</th>
            <th style={{ testAlign: "center" }}>optimisticLockField</th>
            <th style={{ testAlign: "center" }}>gcrecord</th>
            <th style={{ testAlign: "center" }}>departmentNavigation</th>
            <th style={{ testAlign: "center" }}>orderRequestDevices</th>
            <th style={{ testAlign: "center" }}>action</th>
          </tr>
        </thead>
        <tbody>
          {data &&
            data.map((item, index) => {
              return (
                <tr key={index}>
                  <th scope="row">{index + 1}</th>
                  <td>{item.oid}</td>
                  <td>{item.name}</td>
                  <td>{item.description}</td>
                  <td>{item.department}</td>
                  <td>{item.optimisticLockField}</td>
                  <td>{item.gcrecord}</td>
                  <td>{item.departmentNavigation}</td>
                  <td>{item.orderRequestDevices}</td>
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

export default AcceptedOrder;
