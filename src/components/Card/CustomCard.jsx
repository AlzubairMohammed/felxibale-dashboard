import React from "react";
import { Card, Col, Row } from "react-bootstrap";
import "./CustomCard.css";

export default function CustomCard() {
  return (
    <>
      <Card className="p-3">
        <Row className="d-flex justify-content-center">
          <Col className="">
            <Card.Title>1800</Card.Title>
            <Card.Text>Products</Card.Text>
          </Col>
          <Col className="">
            <div className="rounded-circle icon-backround ">
              <i className="fas fa-gift icon"></i>
            </div>
          </Col>
        </Row>
      </Card>
    </>
  );
}
