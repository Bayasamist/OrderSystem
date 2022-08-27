import Button from "react-bootstrap/Button";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";
import Form from "react-bootstrap/Form";
import DatePicker from "react-datepicker";
import "bootstrap/dist/css/bootstrap.min.css";
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


const equipmentOrder = () => {
  return (
    
    <div>
      sasasas
        <Container>
        
        <div
          className="col-md-20 col-sm-20 col-sm-offset-4 col-xs-offset-2"
          align="left"
        >
          
                <Table striped bordered hover>
                  <thead>
                    <tr>
                    <th> </th>
                      <th>#</th>
                      <th>Сэлбэгийн дугаар</th>
                      <th>Хэмжих нэгж</th>
                      <th>Тоо</th>
                      <th>Шаардлага</th>
                      <th>Тайлбар</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                    <th>
                  <button type="button">Edit</button> 
                  </th>
                      <th>1</th>
                      <th>Inspiron 1999555</th>
                      <th>Ширхэг</th>
                      <th>10</th>
                      <th>144hz</th>
                      <th>Агуулхад байхгүй</th>
                    </tr>
                    <tr>
                    <th>
                  <button type="button">Edit</button> 
                  </th>
                      <th>2</th>
                      <th>Inspiron 1999555</th>
                      <th>Ширхэг</th>
                      <th>10</th>
                      <th>144hz</th>
                      <th>Агуулхад байхгүй</th>
                    </tr>
                    <tr>
                    <th>
                  <button type="button">Edit</button> 
                  </th>
                      <th>3</th>
                      <th>Inspiron 1999555</th>
                      <th>Ширхэг</th>
                      <th>10</th>
                      <th>144hz</th>
                      <th>Агуулхад байхгүй</th>
                    </tr>
                    <tr>
                    <th>
                  <button type="button">Edit</button> 
                  </th>
                      <th>4</th>
                      <th>Inspiron 1999555</th>
                      <th>Ширхэг</th>
                      <th>10</th>
                      <th>144hz</th>
                      <th>Агуулхад байхгүй</th>
                    </tr>
                    <tr>
                    <th>
                  <button type="button">Edit</button> 
                  </th>
                      <th>5</th>
                      <th>Inspiron 1999555</th>
                      <th>Ширхэг</th>
                      <th>10</th>
                      <th>144hz</th>
                      <th>Агуулхад байхгүй</th>
                    </tr>
                    <tr>
                    <th>
                  <button type="button">Edit</button> 
                  </th>
                      <th>6</th>
                      <th>Inspiron 1999555</th>
                      <th>Ширхэг</th>
                      <th>10</th>
                      <th>144hz</th>
                      <th>Агуулхад байхгүй</th>
                    </tr>
                  </tbody>
                </Table>
             </div>
      
      </Container>
    </div>
     
    
    
  )
}

export default equipmentOrder




