import React from "react";
import Form from "react-bootstrap/Form";
import FormLabel from "react-bootstrap/FormLabel";
import FormGroup from "react-bootstrap/FormGroup";
import FormControl from "react-bootstrap/FormControl";

class EmailRegistration extends React.Component{
    render(){
        return(
            <Form>
                <FormGroup>
                    <FormLabel>Enter your email id</FormLabel>
                    <FormControl type="text" name="email" placeholder="example@abc.com"/>
                </FormGroup>
            </Form>
        );
    }
}

export default EmailRegistration;