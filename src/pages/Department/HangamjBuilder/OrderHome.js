import React, { useState, Fragment, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Table from "react-bootstrap/Table";
import { Link } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import "bootstrap/dist/css/bootstrap.min.css";
import Card from "react-bootstrap/Card";
import Collapse from "react-bootstrap/Collapse";
import {
  BsTrash,
  BsStickies,
  BsPencilSquare,
  BsPlusCircle,
} from "react-icons/bs";
import Pagination from "react-bootstrap/Pagination";
import _, { slice } from "lodash";

const pageSize = 10;

const HangamjBuilder = () => {
  const [data, setData] = useState([]);
  const [open, setOpen] = useState(false);
  const [paginatedData, setpaginatedData] = useState();
  const [currentPage, setcurrentPage] = useState(1);
  useEffect(() => {
    getDevices();
  }, []);

  const getDevices = async () => {
    const response = await axios.get(
      "http://192.168.11.8:22222/api/OrderRequestDevices"
    );
    if (response.status === 200) {
      setData(response.data);
      setpaginatedData(_(response.data).slice(0).take(pageSize).value());
    }
  };
  const onDeleteDevice = async (OID) => {
    if (window.confirm("are tou sure to delete")) {
      const response = await axios.delete(
        "http://192.168.11.8:22222/api/OrderRequestDevices/${OID}"
      );
      if (response.status === 200) {
        toast.success(response.data);
        getDevices();
      }
    }
  };

  console.log("data=>", data);

  const pageCount = data ? Math.ceil(data.lenght / pageSize) : 0;
  if (pageCount === 1) return null;
  const pages = _.range(1, pageCount + 1);

  const pagination = (pageNo) => {
    setcurrentPage(pageNo);
    const startIndex = (pageNo - 1) * pageSize;
    const paginatedData = _(data) / slice(startIndex).take(pageSize).value();
    setpaginatedData(paginatedData);
  };

  return (
    <div className="container">
      <h2>Захиалга хуудас</h2>
      <Link to="/order">
        <Button variant="primary" id="button-addon1">
          <BsPlusCircle /> Захиалга нэмэх
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
                    <tr>
                      <th>
                        <Link to={'/update/${item.OID}'}>
                          <Button style={{color: 'blue'}}
                            variant="outline-secondary"
                            id="button-addon2"
                            
                          >
                            <BsPencilSquare />
                          </Button>
                        </Link>

                        <Button style={{color: 'red'}}
                          variant="outline-secondary"
                          id="button-addon2"
                          onClick={() => onDeleteDevice(item.OID)}
                        >
                          <BsTrash />
                        </Button>

                        <Link to="/equipmentOrder">
                          <Button style={{color: 'green'}}
                            variant="outline-secondary"
                            id="button-addon2"
                          >
                            <BsStickies />
                          </Button>
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
          <nav className="d-flex justify-content-center">
            <ul className="pagination">
              {pages.map((page) => (
                <li
                  className={
                    page === currentPage ? "page-item active" : "page-item"
                  }
                >
                  <p className="page-link" onClick={() => pagination(page)}>
                    {page}
                  </p>
                </li>
              ))}
            </ul>
          </nav>
          {/* <Pagination>
          <Pagination.First />
          <Pagination.Prev />
          <Pagination.Item active>{1}</Pagination.Item>

          <Pagination.Item>{2}</Pagination.Item>
          <Pagination.Item>{3}</Pagination.Item>
          <Pagination.Item>{4}</Pagination.Item>
          <Pagination.Ellipsis />
          <Pagination.Item>{13}</Pagination.Item>
          <Pagination.Item disabled>{14}</Pagination.Item>

          <Pagination.Ellipsis />
          <Pagination.Item>{20}</Pagination.Item>
          <Pagination.Next />
          <Pagination.Last />
        </Pagination> */}
        </div>
      </div>
    </div>
  );
};

export default HangamjBuilder;
