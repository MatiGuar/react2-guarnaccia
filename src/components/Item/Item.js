import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Contador from '../../components/Contador/Contador'

const Item = ({producto}) => {
  return (
   
      <Card style={{ width: '18rem' }} className="d-flex">
        <Card.Img variant="top" alt={producto.title} src={producto.image} height="300px" />
        <Card.Body key={producto.id}>
          <Card.Title>{producto.title}</Card.Title>
          <Button variant="primary">Añadir al carrito</Button>
          <Contador />
        </Card.Body>
      </Card>
  
    )
}

export default Item