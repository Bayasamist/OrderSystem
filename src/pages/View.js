import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import "./View.css";


const View = () => {
  const [device, setDevice] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    if (id) {
      getSingleDevice(id);
    }
  }, [id]);

  const getSingleDevice = async (id) => {
    const response = await axios.get(
      "http://192.168.10.25:5001/api/device/${id}"
    );
    if (response.status === 200) {
      setDevice({ ...response.data[0] });
    }
  };

  return (
    <div style={{ marginTop: "150px" }}>
      <div className="card">
        <div className="card=header">
          <p>Device Details</p>
        </div>
        <div className="container">
          <strong>ID: </strong>
          <span>{id}</span>
          <br />
          <br />
          <strong>oid: </strong>
          <span>{device && device.oid}</span>
          <br />
          <br />
          <strong>name: </strong>
          <span>{device && device.name}</span>
          <br />
          <br />
          <strong>description: </strong>
          <span>{device && device.description}</span>
          <br />
          <br />
          <strong>department: </strong>
          <span>{device && device.department}</span>
          <br />
          <br />
          <Link to="/">
            <button className="btn btn-edit">Go back</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default View;
