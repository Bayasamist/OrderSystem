import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import axios from "axios";
import { toast } from "react-toastify";
import {
  BsTrash,
  BsStickies,
  BsPencilSquare,
  BsPlusCircle,
  BsFillGridFill,
} from "react-icons/bs";
import Table from "react-bootstrap/Table";
import "bootstrap/dist/css/bootstrap.min.css";
import Pagination from "react-bootstrap/Pagination";
import _, { slice } from "lodash";

const pageSize = 10;


const EquipmentOrder = () => {
  const [data, setData] = useState([]);
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
  const pageCount = data? Math.ceil(data.lenght/pageSize) :0;
  if (pageCount ===1) return null;
  const pages = _.range(1, pageCount+1);
 
  const pagination = (pageNo)=> {
    setcurrentPage(pageNo);
    const startIndex = (pageNo -1)*pageSize;
    const paginatedData = _(data)/slice(startIndex).take(pageSize).value();
    setpaginatedData(paginatedData)
  };
  
  return (
    <div className="container">
      <div className="col-mb-6">
        <Table striped bordered hover>
          <thead>
            <tr style={{ testAlign: "center" }}>
              <th>action</th>
              <th>OID</th>
              <th>Машины марк, дугаар</th>
              <th>Тоо ширхэг</th>
              <th>Хэмжих нэгж</th>
              <th>Сэлбэгийн дугаар</th>
              <th>Сэлбэгийн нэр</th>
              <th>Шаардлага</th>
              <th>Тайлбар</th>
            </tr>
          </thead>
          <tbody>
            {data &&
              data.map((OrderRequestParts) => {
                return (
                  <tr>
                    <td>
                      <Link to={"/update/${OrderRequestParts.id}"}>
                        <Button variant="outline-secondary" id="button-addon2">
                          <BsPencilSquare />
                        </Button>
                      </Link>

                      <Button
                        variant="outline-secondary"
                        id="button-addon2"
                        onClick={() => onDeleteDevice(OrderRequestParts.id)}
                      >
                        <BsTrash />
                      </Button>

                      <Link to={"/view/${OrderRequestParts.id}"}>
                        <Button variant="outline-secondary" id="button-addon2">
                          <BsFillGridFill />
                        </Button>
                      </Link>
                    </td>
                    <td>{OrderRequestParts.OID}</td>
                    <td>{OrderRequestParts.DeviceNumber}</td>
                    <td>{OrderRequestParts.Quantity}</td>
                    <td>{OrderRequestParts.Meashure}</td>
                    <td>{OrderRequestParts.PartNumber}</td>
                    <td>{OrderRequestParts.PartName}</td>
                    <td>{OrderRequestParts.Requirement}</td>
                    <td>{OrderRequestParts.Comment}</td>
                  </tr>
                );
              })}
          </tbody>
        </Table>
        <nav className="d-flex justify-content-center">
            <ul className="pagination">
              {
                pages.map((page)=>(
                  <li className={
                    page === currentPage ? "page-item active" : "page-item"
                  }>
                    <p className="page-link" onClick={()=>pagination(page)}>{page}</p></li>
                ))
              }
            </ul>
          </nav>
      </div>
    </div>
  );
};

export default EquipmentOrder;
