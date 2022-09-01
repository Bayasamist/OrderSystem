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
            
                <th>Төлөв</th>
              </tr>
            </thead>
            <tbody>
              {data &&
                data.map((item) => {
                  return (
                    <tr >
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

                        <Link to="/equipmentOrder">
                              <Button
                                variant="outline-secondary"
                                id="button-addon2"
                              >
                                View
                              </Button>{" "}
                            </Link>
                      </th>
                      
                     
                      <th>{item.OID}</th>
                      <th>{item.OrderName}</th>
                      <th>{item.Department}</th>
                      <th>{item.Employee}</th>
                      <th>{item.OrderDate}</th>
                      <th>{item.Device}</th>
                      <th>{item.OrderType}</th>
                      <th>{item.OrderNumber}</th>
                    
                      <th>{item.OrderStatus}</th>
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
