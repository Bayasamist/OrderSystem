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
      "http://192.168.11.8:22222/api/OrderRequestDevices/${id}"
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
          <strong>Машины марк, дугаар: </strong>
          <span>{device && device.DeviceNumber}</span>
          <br />
          <br />
          <strong>Тоо ширхэг: </strong>
          <span>{device && device.Quantity}</span>
          <br />
          <br />
          <strong>Хэмжих нэгж: </strong>
          <span>{device && device.Meashure}</span>
          <br />
          <br />
          <strong>Сэлбэгийн дугаар: </strong>
          <span>{device && device.PartNumber}</span>
          <br />
          <br />
          <strong>Сэлбэгийн нэр: </strong>
          <span>{device && device.PartName}</span>
          <br />
          <br />
          <strong>Шаардлага: </strong>
          <span>{device && device.Requirement}</span>
          <br />
          <br />
          <strong>Тайлбар: </strong>
          <span>{device && device.Comment}</span>
          <br />
          <br />
          <Link to="/equipmentOrder">
            <button className="btn btn-edit">Go back</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default View;
