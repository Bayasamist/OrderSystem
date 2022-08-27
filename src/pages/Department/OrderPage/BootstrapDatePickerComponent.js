import React from 'react'
import { Form } from 'react-bootstrap';
import "bootstrap/dist/css/bootstrap.min.css";


class BootstrapDatePickerComponent extends React.Component{
 
    render(){
 
        return(
            <div>
                <div className="row">
                    
                        <Form.Group className="mb-2">
                            <Form.Label>Огноо</Form.Label>
                            <Form.Control type="date" name="mb-2" placeholder="Date" />
                        </Form.Group>
                   
                </div>
            </div>
        )
    }
     
}
 
export default BootstrapDatePickerComponent;
