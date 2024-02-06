import {InputGroup, Form} from "react-bootstrap";
import Button from 'react-bootstrap/Button';


export const Contacto = () => {
  return (
    <main className="d-flex flex-column align-items-center container">
      <article className="d-flex flex-column justify-content-center gap-2 text-center">
        <header className="p-5">
          <h5>
            Cuentanos, ¿En qué te podemos ayudar?
          </h5>
        </header>
        <main className="text-center">
          <div className="w-100">
            <InputGroup className="mb-3">
              <InputGroup.Text id="basic-addon1">Correo</InputGroup.Text>
              <Form.Control
                placeholder="name@example.com"
              />
            </InputGroup>
            <InputGroup>
              <Form.Control as="textarea" placeholder="Dejanos Tu comentario o Sugerencia!"/>
            </InputGroup>
            <Button variant="danger" className="mt-2">Enviar</Button>
          </div>
        </main>
      </article>
    </main>
);
};