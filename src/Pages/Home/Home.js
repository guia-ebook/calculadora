import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { calculadora } from '../../Utils/Utils';

const Home = () => {
  const [totalValue, setTotalValue] = useState('');
  const [old1, setOld1] = useState('');
  const [old2, setOld2] = useState('');
  const [result, setResult] = useState('');

  const handleCalculate = () => {

    const resultado = calculadora(totalValue, old1, old2)
    setResult(`Aposta 1: ${resultado.aposta1.toFixed(2)} - Aposta 2: ${resultado.aposta2.toFixed(2)} - Lucro Garantido: ${resultado.lucroGarantido.toFixed(2)}`);
  };

  return (
    <Container>
      <Row className="justify-content-center">
        <Col>
          <p className="bold-heading">Calculadora de Aposta</p>
        </Col>
      </Row>
      <Row>
        <Col>
          <Form>
            <Form.Group className="mb-3" controlId="formTotalValue">
              <Form.Label>Valor Total</Form.Label>
              <Form.Control
                placeholder="Valor que deseja apostar"
                type="number"
                value={totalValue}
                onChange={(e) => setTotalValue(e.target.value)}
              />
            </Form.Group>
          </Form>
        </Col>
      </Row>
      <Row>
        <Col>
          <Form>
            <Form.Group className="mb-3" controlId="formOld1">
              <Form.Label>Old 1</Form.Label>
              <Form.Control
                placeholder="Valor Old 1"
                type="number"
                value={old1}
                onChange={(e) => setOld1(e.target.value)}
              />
            </Form.Group>
          </Form>
        </Col>
        <Col>
          <Form>
            <Form.Group className="mb-3" controlId="formOld2">
              <Form.Label>Old 2</Form.Label>
              <Form.Control
                placeholder="Valor Old 2"
                type="number"
                value={old2}
                onChange={(e) => setOld2(e.target.value)}
              />
            </Form.Group>
          </Form>
        </Col>
      </Row>
      <Row style={{ paddingTop: '2rem' }} className="justify-content-center">
        <Button onClick={handleCalculate} variant="primary">
          Calcular
        </Button>
      </Row>
      {result && (
        <Row style={{ paddingTop: '1rem' }} className="justify-content-center">
          <Col>
            <p>{result}</p>
          </Col>
        </Row>
      )}
    </Container>
  );
};

export default Home;
