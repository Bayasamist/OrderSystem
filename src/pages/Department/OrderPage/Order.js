import Button from "react-bootstrap/Button";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";
import Form from "react-bootstrap/Form";
import DatePicker from "react-datepicker";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import InputGroup from "react-bootstrap/InputGroup";
import BootstrapDatePickerComponent from "./BootstrapDatePickerComponent";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import Table from "react-bootstrap/Table";
import EquipmentOrder from "./EquipmentOrder";
import acceptedOrder from "./AcceptedOrder";
import { BsPlusLg } from "react-icons/bs";
import { Typeahead } from "react-bootstrap-typeahead";
import Select from "react-select";
import _, { slice } from "lodash";
import Pagination from "react-bootstrap/Pagination";
const pageSize = 10;

function OrderPage() {
  const [data, setData] = useState([]);
  //const [selected, setSelected] = useState();
  const [paginatedData, setpaginatedData] = useState();
  const [currentPage, setcurrentPage] = useState(1);
  useEffect(() => {
    getOrderRequestDevices();
  }, []);

  const [equipment, setEquipment] = useState([]);
  const [selected, setSelected] = useState();

  useEffect(() => {
    getDevices();
  }, []);
  const getDevices = async () => {
    const response = await axios.get("https://dog.ceo/api/breeds/list/all");
    if (response.status === 200) {
      const propertyNames = Object.keys(response.data.message);
      setEquipment(propertyNames);
    }
  };
  const handleChange = (selected) => {
    setSelected(selected);
  };

  const orderType = [
    { label: "Энгийн", value: 1 },
    { label: "Яаралтай", value: 2 },
  ];

  const orderStatus = [
    { label: "Нэхэмжлэх илгээсэн", value: 1 },
    { label: "Олдоогүй байгаа", value: 2 },
    { label: "Төлбөр хийгдсэн нийлүүлэлт хүлээгдэж байна ", value: 3 },
    { label: "Олдоогүй байгаа", value: 4 },
    { label: "Нийлүүлсэн", value: 5 },
  ];
  const getOrderRequestDevices = async () => {
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
        "http://192.168.11.9:8081/api/device/${OID}"
      );
      if (response.status === 200) {
        toast.success(response.data);
        getOrderRequestDevices();
      }
    }
  };
  console.log("equipment=>", equipment);
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
    <div className="container" align="center">
      <h2>Бараа материалын захиалга</h2>
      <h4 align="left">Ерөнхий мэдээлэл</h4>
      <Container>
        <Row className="g-2">
          <Col xs={6}>
            {/* <div className="col-md-12 col-sm-12 col-sm-offset-4 col-xs-offset-2"> */}
              <Form>
                <Form.Group className="mb-2">
                  <fieldset disabled>
                    <Form.Label htmlFor="disabledTextInput">
                      ҮНДСЭН ХЭСЭГ
                    </Form.Label>
                    <InputGroup className="mb-2">
                    <Form.Control
                      id="disabledTextInput"
                      placeholder="Үндсэн хэсэг"
                    />
</InputGroup>
                    <Form.Label htmlFor="disabledTextInput">
                      ЗАХИАЛГАГЧ
                    </Form.Label>
                    <InputGroup className="mb-2">
                    <Form.Control
                      id="disabledTextInput"
                      placeholder="Захиалагч"
                    />
                    </InputGroup>
                  </fieldset>
                  
                  <BootstrapDatePickerComponent />
               
                  <Form.Label>НЭР </Form.Label>  
                  <InputGroup className="mb-2">
                    <Form.Control
                      id="TextInput"
                      placeholder="Нэр"
                    />
                    </InputGroup>
                </Form.Group>
              </Form>
            {/* </div> */}
          </Col>
          <Col xs={6}>
            {/* <div className="col-md-12 col-sm-12 col-sm-offset-4 col-xs-offset-2"> */}
              <Form>
                <Form.Group className="mb-2">
                  <Form.Label htmlFor="TextInput">ТӨХӨӨРӨМЖ</Form.Label>

                  <InputGroup className="mb-2">
                    
                    <Typeahead
                      id="basic-typeahead-single"
                      // onChange={setSingleSelections}
                      options={equipment}
                      onChange={handleChange}
                      placeholder="choose a dog breed"
                      selected={selected}
                    />
                   
                  </InputGroup>
             
                </Form.Group>

                <Form.Group className="mb-2">
                  <Form.Label htmlFor="TextInput">ТӨРӨЛ</Form.Label>

                  {/* <div className="mb-2"> */}
                    <Select options={orderType} />
                  {/* </div> */}
                </Form.Group>

                <Form.Group className="mb-2">
                  <Form.Label htmlFor="TextInput">ЗАХИАЛГА ДУГААР</Form.Label>
                  <InputGroup className="mb-2">
                    <Form.Control
                      id="TextInput"
                      aria-describedby="basic-addon3"
                      placeholder="Захиалга дугаар"
                    />
                  </InputGroup>
                </Form.Group>

                <Form.Group className="mb-2">
                  <Form.Label htmlFor="TextInput">ТӨЛӨВ</Form.Label>
                  {/* <div className="mb-2"> */}
                    <Select options={orderStatus} />
                  {/* </div> */}
                </Form.Group>
              </Form>
          
            {/* </div> */}
          
          </Col>
       
        </Row>
       
        
            

        <div
          className="col-md-20 col-sm-20 col-sm-offset-4 col-xs-offset-2"
          align="left"
        >
          <h4 align="left">Захиалга нэмэх</h4>
          <Link to="/newOrderZahialsanTable">
            <Button variant="primary" id="button-addon2">
              Захиалга нэмэх
            </Button>
          </Link>

          <Tabs
            defaultActiveKey="EquipmentOrder"
            id="fill-tab-example"
            className="mb-3"
            fill
          >
            <Tab eventKey="EquipmentOrder" title="Захиалсан">
              <div>
                <Container>
                  <divs
                    className="col-md-20 col-sm-20 col-sm-offset-4 col-xs-offset-2"
                    align="left"
                  >
                    <Table striped bordered hover>
                      <thead>
                        <tr>
                          <th> </th>
                          <th>#</th>
                          <th>DeviceNumber</th>
                          <th>Quantity</th>
                          <th>Meashure</th>
                          <th>PartNumber</th>
                          <th>PartName</th>
                          <th>Requirement</th>
                          <th>Comment</th>
                        </tr>
                      </thead>
                      <tbody>
                        {data &&
                          data.map((item, index) => {
                            return (
                              <tr key={index}>
                                <th scope="row">{index + 1}</th>
                                <td>{item.oid}</td>
                                <td>{item.DeviceNumber}</td>
                                <td>{item.Quantity}</td>
                                <td>{item.Meashure}</td>
                                <td>{item.PartNumber}</td>
                                <td>{item.PartName}</td>
                                <td>{item.Requirement}</td>
                                <td>{item.Comment}</td>
                                <td>
                                  <Link to={"/update/${item.id}"}>
                                    <button className="btn btn-edit">
                                      Edit
                                    </button>
                                  </Link>

                                  <button
                                    className="btn btn-delete"
                                    onClick={() => onDeleteDevice(item.id)}
                                  >
                                    Delete
                                  </button>

                                  <Link to={"/view/${item.id}"}>
                                    <button className="btn btn-view">
                                      View
                                    </button>
                                  </Link>
                                </td>
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
                              page === currentPage
                                ? "page-item active"
                                : "page-item"
                            }
                          >
                            <p
                              className="page-link"
                              onClick={() => pagination(page)}
                            >
                              {page}
                            </p>
                          </li>
                        ))}
                      </ul>
                    </nav>
                  </divs>
                </Container>
              </div>
            </Tab>
            <Tab eventKey="AcceptedOrder" title="Зөвшөөрсөн">
              <div>
                <Container>
                  <divs
                    className="col-md-20 col-sm-20 col-sm-offset-4 col-xs-offset-2"
                    align="left"
                  >
                    <Table striped bordered hover>
                      <thead>
                        <tr>
                          <th> </th>
                          <th>#</th>
                          <th>Огноо</th>
                          <th>Захиалгын дугаар</th>
                          <th>Үндсэн хэсэг</th>
                          <th>Захиалагч</th>
                          <th>Нэр</th>
                          <th>Төхөөрөмж</th>
                          <th>Төрөл</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <th>
                            <Link to="/acceptedOrder">
                              <Button
                                variant="outline-secondary"
                                id="button-addon2"
                              >
                                View
                              </Button>{" "}
                            </Link>
                          </th>
                          <th>1</th>
                          <th>2022-08-30</th>
                          <th>25</th>
                          <th>ТАМАХ</th>
                          <th> </th>
                          <th>Баяр</th>
                          <th> ЛЕД гэрэл</th>
                          <th>Энгийн</th>
                        </tr>
                      </tbody>
                    </Table>
                  </divs>
                </Container>
              </div>
            </Tab>
          </Tabs>
        </div>
        <Button variant="outline-secondary" id="button-addon2">
          Илгээх
        </Button>
      </Container>
    </div>
  );
}

export default OrderPage;
