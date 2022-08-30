import React, { useState, Fragment, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Table from "react-bootstrap/Table";
import { Link } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import "bootstrap/dist/css/bootstrap.min.css";
import Card from "react-bootstrap/Card";
import Collapse from "react-bootstrap/Collapse";

function HangamjBuilder() {
  const [data, setData] = useState([]);
  const [open, setOpen] = useState(false);
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
      <h2>Захиалга хуудас</h2>
      <Link to="/order">
        <Button variant="outline-secondary" id="button-addon2">
          Захиалга нэмэх
        </Button>{" "}
      </Link>
      <div className="row">
        <div className="col-mb-6">
          <Table striped bordered hover>
            <thead>
              <tr style={{ testAlign: "center" }}>
                <th> </th>
                <th>#</th>
                <th>Нэр</th>
                <th>Үндсэн хэсэг</th>
                <th>Захиалагч</th>
                <th>Огноо</th>
                <th>Төхөөрөмж</th>
                <th>Төрөл</th>
                <th>Сэлбэгийн дугаар</th>
                <th>Материалын нэр</th>
                <th>Тоо/Хэмжээ</th>
                <th>Шаардлага</th>
                <th>Тайлбар</th>
                <th>Төлөв</th>
              </tr>
            </thead>
            <tbody>
              {data &&
                data.map((item, index) => {
                  return (
                    <tr key={index}>
                      <th scope="row">{index + 1}</th>
                      <th>
                        <Link to={"/update/${item.id}"}>
                          <button variant="outline-secondary" id="button-addon2">Edit</button>
                        </Link>

                        <button
                          variant="outline-secondary" id="button-addon2"
                          onClick={() => onDeleteDevice(item.id)}
                        >
                          Delete
                        </button>

                        <Link to={"/view/${item.id}"}>
                          <button className="btn btn-view">View</button>
                        </Link>
                      </th>
                      <th>{item.oid}</th>
                      <th>{item.name}</th>
                      <th>{item.department}</th>
                      <th>Программ хангамж</th>
                      <th>{item.date}</th>
                      <th>Monitor</th>
                      <th>Энгийн</th>
                      <th>Inspiron 1999555</th>
                      <th> </th>
                      <th>10</th>
                      <th>144hz</th>
                      <th>Агуулхад байхгүй</th>
                      <th>Баталгаажсан</th>
                    </tr>
                  );
                })}
            </tbody>
          </Table>
        </div>
      </div>
    </div>
  );
}

export default HangamjBuilder;
