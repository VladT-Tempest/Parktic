import React, {useState} from 'react';

import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Form from 'react-bootstrap/Form'
import ListGroup from 'react-bootstrap/ListGroup'

const Registro = () => {
    const [value, setValue] = useState("");
    const [placas, setPlaca] = useState([])

    const handleChange = (event) =>{
        setValue(event.target.value.toUpperCase());
    }

    const handleClick = () => {
        if(value.length !== 7){
            alert("NO ES UNA PLACA DE CARRO")
        }else{
            setPlaca([...placas,value])
        }
        console.log(placas)
    }

    return(
        <Container>
          <Row className="d-flex justify-content-center align-items-center">
            <Col xs={6}>
            <Form>
                <div className="text-center">
              <h1 className="text-center">ParkTic</h1>
              <h5 className="text-center">{value}</h5>
              </div>
              <Form.Group className="mb-3">
                <Form.Label >Digita la placa:</Form.Label>
                <Form.Control
                  type="text"
                  onChange={handleChange}
                />
              </Form.Group>
              <Button type="button" variant="outline-secondary">
                Cancelar
              </Button>
              <Button onClick={handleClick} type="button" variant="primary" className="float-end">
                Guardar
              </Button>
            </Form>
            </Col>
          </Row>
          <Row>
          <ListGroup>
              {placas.map((placa) => {
                  return (<ListGroup.Item>{placa}</ListGroup.Item>)
              })}
            </ListGroup>
          </Row>
        </Container>
        
        );

}

export default Registro