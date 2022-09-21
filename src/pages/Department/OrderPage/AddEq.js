import React, { useState, useEffect } from "react";
import { useNavigate, useLocation, useParams } from "react-router-dom";
import axios from "axios";
import "./AddEq.css";
import { toast } from "react-toastify";

const initialState = {
  
  name: "",
  serialNumber: "",
  manufacture: "",
  department: "",

};

const AddEq = () => {
  const [state, setState] = useState(initialState);

  const {
    
    name,
    serialNumber,
    department,
  
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
    if (name || serialNumber || department) {
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
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          name="name"
          placeholder="Enter Name..."
          onChange={handleInputChange}
          value={name}
        />

        <label htmlFor="description">serialNumber</label>
        <input
          type="text"
          id="serialNumber"
          name="serialNumber"
          placeholder="Enter serialNumber..."
          onChange={handleInputChange}
          value={serialNumber}
        />

        <label htmlFor="department">department</label>
        <input
          type="text"
          id="department"
          name="department"
          placeholder="Enter department..."
          onChange={handleInputChange}
          value={department}
        />
        <input type="submit" value={id ? "Update" : "Add"} />
      </form>
    </div>
    </div>

  );
};
export default AddEq