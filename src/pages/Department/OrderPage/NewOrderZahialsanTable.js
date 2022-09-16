import React, { useState, useEffect } from "react";
import { useNavigate, useLocation, useParams } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import Header from "../../../components/Header";
import "../../AddEdit.css";

    const initialState = {
        oid: "",
        DeviceNumber: "",
        Quantity: "",
        Meashure: "",
        PartNumber: "",
        PartName: "",
        Requirement: "",
        Comment: "",
      };
      
      const NewOrderZahialsanTable = () => {
        const [state, setState] = useState(initialState);
      
        const {
          oid,
          DeviceNumber,
          Quantity,
          Meashure,
          PartNumber,
          PartName,
          Requirement,
          Comment,
        } = initialState;
      
        const history = useNavigate();
      
        const { id } = useParams();
      
        useEffect(() => {
          if (id) {
            getSingleDevice(id);
          }
        }, [id]);
      
        const getSingleDevice = async (id) => {
          const response = await axios.get(
            "http://192.168.11.9:8081/api/device/${id}"
          );
          if (response.status === 200) {
            setState({ ...response.data[0] });
          }
        };
      
        const addDevice = async (data) => {
          const response = await axios.post(
            "http://192.168.11.9:8081/api/device",
            data
          );
          if (response.status === 200) {
            toast.success(response.data);
          }
        };
      
        const updateDevice = async (data, id) => {
          const response = await axios.put(
            "http://192.168.11.9:8081/api/device/${id}",
            data
          );
          if (response.status === 200) {
            toast.success(response.data);
          }
        };
      
        const handleSubmit = (e) => {
          e.preventDefault();
          if (DeviceNumber || Quantity || Meashure || PartNumber || PartName  || Requirement || Comment) {
            toast.error("Please provide value into each input filed");
          } else {
            if (!id) {
              addDevice(state);
            } else {
              updateDevice(state, id);
            }
      
            setTimeout(() => history.push("/"), 500);
          }
        };
      
        const handleInputChange = (e) => {
          let { name, value } = e.target;
          setState({ ...state, [name]: value });
        };
  return (
    <div className="container">
      
    <div style={{ marginTop: "100px" }}>
      <form
        style={{
          margin: "auto",
          padding: "15px",
          maxWidth: "400px",
          alignContent: "center",
        }}
        onSubmit={handleSubmit}
      >
        <label htmlFor="name">DeviceNumber</label>
        <input
          type="text"
          id="DeviceNumber"
          name="DeviceNumber"
          placeholder="Enter DeviceNumber..."
          onChange={handleInputChange}
          value={DeviceNumber}
        />

        <label htmlFor="description">Quantity</label>
        <input
          type="text"
          id="Quantity"
          name="Quantity"
          placeholder="Enter Quantity..."
          onChange={handleInputChange}
          value={Quantity}
        />

        <label htmlFor="department">Meashure</label>
        <input
          type="text"
          id="Meashure"
          name="Meashure"
          placeholder="Enter Meashure..."
          onChange={handleInputChange}
          value={Meashure}
        />
 <label htmlFor="department">PartNumber</label>
        <input
          type="text"
          id="PartNumber"
          name="PartNumber"
          placeholder="Enter PartNumber..."
          onChange={handleInputChange}
          value={PartNumber}
        />
         <label htmlFor="department">PartName</label>
        <input
          type="text"
          id="PartName"
          name="PartName"
          placeholder="Enter PartName..."
          onChange={handleInputChange}
          value={PartName}
        />
         <label htmlFor="department">Requirement</label>
        <input
          type="text"
          id="Requirement"
          name="Requirement"
          placeholder="Enter Requirement..."
          onChange={handleInputChange}
          value={Requirement}
        />
         <label htmlFor="department">Comment</label>
        <input
          type="text"
          id="Comment"
          name="Comment"
          placeholder="Enter Comment..."
          onChange={handleInputChange}
          value={Comment}
        />
        
        <input type="submit" value={id ? "Update" : "Add"} />
      </form>
    </div>
    </div>
  );
};

export default NewOrderZahialsanTable