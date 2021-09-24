import React, {useState} from 'react';

import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Form from 'react-bootstrap/Form'
import ListGroup from 'react-bootstrap/ListGroup'

const Registro = () => {
    const valorHora = 100
    const [value, setValue] = useState("");
    const [placas, setPlaca] = useState([])

    const handleChange = (event) => {
        setValue(event.target.value.toUpperCase());
    }

    const handleClick = () => {
        
        if(value.length !== 7){
            alert("NO ES UNA PLACA DE CARRO")
        }else{
          const fecha = new Date(); 
          const existe = placas.find((placa)=> placa.placa === value);

          if(!existe){
            setPlaca([...placas,{placa:value,horaEntrada:fecha}])
          }
          else{
            existe.horaSalida = fecha
            existe.precio = (parseInt((fecha - existe.horaEntrada)/60000)+1) * valorHora
            setPlaca([...placas])
          }
            
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
          <Row className="d-flex justify-content-center align-items-center mt-3 mb-3">
            <Col xs={6}>
          <ListGroup>
              {placas.map((placa) => {
                if(placa.horaSalida){
                  return (
                    <ListGroup.Item >
                      {placa.placa} - {placa.horaEntrada.toLocaleString()} - {placa.horaSalida.toLocaleString()} - ${placa.precio}
                    </ListGroup.Item>
                    )
                  }
                  else{
                    return (
                      <ListGroup.Item >
                        {placa.placa} - {placa.horaEntrada.toLocaleString()}
                      </ListGroup.Item>
                      )
                    }
              })}
            </ListGroup>
            </Col>
          </Row>
        </Container>
        
        );

}

export default Registro