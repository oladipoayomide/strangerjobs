import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Card from 'react-bootstrap/Card';
import { Button } from 'react-bootstrap';

function CardPage({id, logo, body}) {
  return (
    <Card key={id} style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title><FontAwesomeIcon icon={logo} /></Card.Title>
        <Card.Text>
          {body}
        </Card.Text>
        <Button>Hire a Talent</Button>
      </Card.Body>
    </Card>
  );
}

export default CardPage;