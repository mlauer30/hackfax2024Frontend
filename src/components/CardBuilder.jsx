import React from 'react';
import { Card, Container, Row, Col } from 'react-bootstrap';

const CardBuilder = ({ cardData }) => {
  return (
    <Container>
      <Row>
        {cardData.map((card, index) => (
          <Col key={index} md={4}>
            <Card>
              <Card.Body>
                <Card.Title>{card.title}</Card.Title>
                <Card.Text>{card.content}</Card.Text>
                {/* Add any other card properties you want to display */}
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default CardBuilder;

