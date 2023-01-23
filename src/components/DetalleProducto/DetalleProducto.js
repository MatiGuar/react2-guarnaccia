import { Button } from "react-bootstrap";
import { Card } from "react-bootstrap";
import Contador from '../../components/Contador/Contador'


const DetalleProducto = ({producto}) => {
  return (
   
    <Card style={{ width: '18rem' }} className="d-flex align-item-center">
        <Card.Img variant="top" alt={producto.title} src={producto.image} height="300px" />
        <Card.Body key={producto.id}>
          <Card.Title>{producto.title}</Card.Title>
          <Card.Text>{producto.category}</Card.Text>
          <Card.Text> {producto.description}</Card.Text>
          <Button variant="primary">Añadir al carrito</Button>
          <Contador />
        </Card.Body>
      </Card>

  )
}

export default DetalleProducto