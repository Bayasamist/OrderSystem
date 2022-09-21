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
import OrderPage from "./Order";
import { useNavigate, useLocation, useParams } from "react-router-dom";
const pageSize = 10;

const initialState = {
  OID: null,
  OrderName: "",
  Department: "",
  Employee: "",
  OrderDate: "",
  Device: "",
  OrderType: "",
  OrderNumber: "",
  OrderStatus: "",
};

function OrderEdit() {
  const [state, setState] = useState(initialState);

  const {
    OrderName,
    Department,
    Employee,
    OrderDate,
    Device,
    OrderType,
    OrderNumber,
    OrderStatus,
  } = initialState;
  const history = useNavigate();

  const { OID } = useParams();

  useEffect(() => {
    if (OID) {
      getSingleDevice(OID);
    }
  }, [OID]);

  const getSingleDevice = async (OID) => {

    const response = await axios.get(
      'http://192.168.11.8:22222/api/OrderRequestDevices/${OID}'
    );
    if (response.status === 200) {
      setState({ ...response.data[0] });
    }
  };

  const addDevice = async (data) => {
    const response = await axios.post(
      'http://192.168.11.8:22222/api/OrderRequestDevices',
      data
    );
    if (response.status === 200) {
      toast.success(response.data);
    }
  };
  const updateDevice = async (data, OID) => { 
    const response = await axios.put(
      'http://192.168.11.8:22222/api/OrderRequestDevices/${OID}',
      data
    );
    if (response.status === 200) {
      toast.success(response.data);
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      OrderName ||
      Department ||
      Employee ||
      OrderDate ||
      Device ||
      OrderType ||
      OrderNumber ||
      OrderStatus
    ) {
      toast.error("Please provide value into each input filed");
    } else {
      if (!OID) { addDevice (state)
      } else {
        updateDevice(state, OID);
      }

      setTimeout(() => history.push("/orderhome"), 500);
    }
  };

  const handleInputChange = (e) => {
    let { OrderName, value } = e.target;
    setState({ ...state, [OrderName]: value });
  }; 

  return (
    <div className="container" align="center" >
      <h2>Бараа материалын захиалга</h2>
      <h4 align="left">Ерөнхий мэдээлэл</h4>
      
      <Container>
        <Row>
          <Col xs={6}>
            <div
              className="col-md-12 col-sm-12 col-sm-offset-4 col-xs-offset-2"
              onSubmit={handleSubmit}
            >
              <Form>
                <fieldset disabled>
               
                  <Form.Label htmlFor="OID">OID</Form.Label>
                    <input
                      type="text"
                      id="OID"
                      name="OID"
                      placeholder="Enter OID..."
                      onChange={handleInputChange}
                      value={OID}
                    />



                  <Form.Group className="mb-2"> 
                  <Form.Label htmlFor="OrderName">Name</Form.Label>
                    <input
                      type="text"
                      id="OrderName"
                      name="OrderName"
                      placeholder="Enter Name..."
                      onChange={handleInputChange}
                      value={OrderName}
                    />
                    <Form.Label htmlFor="Department">ҮНДСЭН ХЭСЭГ </Form.Label>
                    <input
                      type="text"
                      id="Department"
                      name="Department"
                      placeholder="Enter Department..."
                      onChange={handleInputChange}
                      value={Department}
                    />

                    <Form.Label htmlFor="Employee">ЗАХИАЛГАГЧ</Form.Label>
                    <input
                      type="text"
                      id="Employee"
                      name="Employee"
                      placeholder="Enter Employee..."
                      onChange={handleInputChange}
                      value={Employee}
                    />
                    <Form.Label htmlFor="OrderDate">Огноо</Form.Label>
                    <input
                      type="date"
                      id="OrderDate"
                      name="OrderDate"
                      placeholder="Enter OrderDate..."
                      onChange={handleInputChange}
                      value={OrderDate}
                    />
                
                  </Form.Group>
                </fieldset>
              </Form>
            </div>
          </Col>
          <Col xs={6}>
            <div className="col-md-15 col-sm-15 col-sm-offset-4 col-xs-offset-2">
              <Form>
              <fieldset disabled>
                <Form.Group className="mb-2">
                  <Form.Label htmlFor="Device">ТӨХӨӨРӨМЖ</Form.Label>
                  <input
                    type="text"
                    id="Device"
                    name="Device"
                    placeholder="Enter Device..."
                    onChange={handleInputChange}
                    value={Device}
                  />

                  <Form.Label htmlFor="OrderType">ТӨРӨЛ</Form.Label>

                  <input
                    type="text"
                    id="OrderType"
                    name="OrderType"
                    placeholder="Enter OrderType..."
                    onChange={handleInputChange}
                    value={OrderType}
                  />

                  <Form.Label htmlFor="OrderNumber">ЗАХИАЛГА ДУГААР</Form.Label>
                  <input
                    type="text"
                    id="OrderNumber"
                    name="OrderNumber"
                    placeholder="Enter OrderNumber..."
                    onChange={handleInputChange}
                    value={OrderNumber}
                  />

                  <Form.Label htmlFor="OrderStatus">ТӨЛӨВ</Form.Label>
                  <input
                    type="text"
                    id="OrderStatus"
                    name="OrderStatus"
                    placeholder="Enter OrderStatus..."
                    onChange={handleInputChange}
                    value={OrderStatus}
                  />
                </Form.Group>
                </fieldset>
              </Form>
            </div>
          </Col>
        </Row>
      </Container>
      <input
                   type="submit" value={OID ? "Update" : "Add"} 
                  />
    </div>
  );
}

export default OrderEdit;
