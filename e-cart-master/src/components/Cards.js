import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import Records from './data.json';
import './cards.css'
import Button from 'react-bootstrap/Button';
import {useCart} from 'react-use-cart';



function Cards() {
  
  const {addItem} = useCart();
  return (
    <Container>
      <div className='d-flex flex-row m-3 overflow-auto'>
        {Records && Records.map(record => {
          return (
            <Card className="text-center" style={{ width: '18rem', margin: '5px' }}>
            
                <Card.Img style={{ height: '280px', padding: '20px' }} variant="top" src={record.image} />

              <Card.Body>
                <Card.Title>{record.brandname}</Card.Title>
                <Card.Text className='textname'>
                  {record.name}
                </Card.Text>
                <Card.Text className='textprice'>
                  ${record.price}
                </Card.Text>
            <Button className='btn btn-success' onClick={() => addItem(record)}>Add to cart</Button>
              </Card.Body>
            </Card>
          );
        })}
      </div>
      
      
    </Container>
  );
}
export default Cards;