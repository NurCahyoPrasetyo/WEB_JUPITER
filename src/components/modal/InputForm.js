import React, {useState} from "react";
import { Button, Form } from "react-bootstrap";

const InputForm = ({status, message, onValidated}) => {
    const [email, setEmail] = useState('dummy@gmail.com')
    const [name, setName] = useState('dummy')
    const [country, setCountry] = useState('SEA')

    const handleFormSubmit = () => {
        const isFormValidated = onValidated({NAME:name, EMIAL: email, COUNTRY: country});
    
        // On success return true
        console.log('->', isFormValidated)
      }

      console.log(message, status)

  return (
    <Form>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Name</Form.Label>
        <Form.Control type="text" placeholder="Password" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
        {/* <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                  </Form.Text> */}
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Country</Form.Label>
        <select className="form-control" aria-label="Default select example">
          <option value="1">USE</option>
          <option value="2">SEA</option>
          <option value="3">MENA</option>
        </select>
      </Form.Group>

      <Button variant="primary" type="submit" block onClick={handleFormSubmit}>
        Submit
      </Button>
    </Form>
  );
};

export default InputForm;
