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

function OrderPage() {
  const [data, setData] = useState([]);
  const [selected, setSelected] = useState();

  useEffect(() => {
    getDevices();
  }, []);

  const getDevices = async () => {
    const response = await axios.get("https://dog.ceo/api/breeds/list/all");
    if (response.status === 200) {
      const propertyNames = Object.keys(response.data.message);
      setData(propertyNames);
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

  return (
    <div className="container" align="center">
      
      <h2>Бараа материалын захиалга</h2>
      <h4 align="left">Ерөнхий мэдээлэл</h4>
      <Container>
        <Row>
          <Col xs={6}>
            <div className="col-md-12 col-sm-12 col-sm-offset-4 col-xs-offset-2">
              <Form>
                <fieldset disabled>
                  <Form.Group className="mb-2">
                    <Form.Label htmlFor="disabledTextInput">
                      ҮНДСЭН ХЭСЭГ
                    </Form.Label>
                    <Form.Control
                      id="disabledTextInput"
                      placeholder="Үндсэн хэсэг"
                    />

                    <Form.Label htmlFor="disabledTextInput">
                      ЗАХИАЛГАГЧ
                    </Form.Label>
                    <Form.Control
                      id="disabledTextInput"
                      placeholder="Захиалагч"
                    />
                  </Form.Group>
                </fieldset>

                <Form.Group className="mb-2">
                  <BootstrapDatePickerComponent />
                </Form.Group>
                <Form.Group className="mb-2">
                  <Form.Label>НЭР </Form.Label>
                  <Form.Control type="text" rows={3} placeholder="Нэр" />
                </Form.Group>
              </Form>
            </div>
          </Col>
          <Col xs={6}>
            <div className="col-md-15 col-sm-15 col-sm-offset-4 col-xs-offset-2">
              <Form>
                <Form.Group className="mb-2">
                  <Form.Label htmlFor="TextInput">ТӨХӨӨРӨМЖ</Form.Label>

                  <InputGroup className="mb-2">
                    <Typeahead
                      id="basic-typeahead-single"
                      // onChange={setSingleSelections}
                      options={data}
                      onChange={handleChange}
                      placeholder="choose a dog breed"
                      selected={selected}
                    />
                    {/* <Button variant='outline-secondary' id='button-addon2'>
                      <BsPlusLg />
                    </Button> */}
                  </InputGroup>
                </Form.Group>

                <Form.Group className="mb-2">
                  <Form.Label htmlFor="TextInput">ТӨРӨЛ</Form.Label>
                 
                    <div className="mb-2">
                      <Select options={orderType} />
                    </div>
                  
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
                  <div className="mb-2">
                      <Select options={orderStatus} />
                    </div>
                </Form.Group>
              </Form>
            </div>
          </Col>
        </Row>
        <div
          className="col-md-20 col-sm-20 col-sm-offset-4 col-xs-offset-2"
          align="left"
        >
          <h4 align="left">Захиалга нэмэх</h4>
          <Link to="/newOrderZahialsanTable"><Button variant="outline-secondary" id="button-addon2">
          Захиалга нэмэх
            </Button> </Link>

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
                          <Link to="/equipmentOrder"><Button variant="outline-secondary" id="button-addon2">
          View
            </Button> </Link>
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
                          <Link to="/acceptedOrder"><Button variant="outline-secondary" id="button-addon2">
          View
            </Button> </Link>
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
