import React from "react";
import App from "../App";
import "../App.css";
import { STAFFS } from "./staffs";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

const staffs = STAFFS;
function StaffsList(props) {
  const handleClick = (item) => {
    props.handleClickApp(item);
  };
  return (
    <div>
      <Container>
        <Row>
          {staffs.map((item, index) => {
            return (
              <Col xs={12} md={6} lg={4} key={index}>
                <button
                  onClick={() => handleClick(item)}
                  className="mg-t w-100 "
                >
                  {item.name}
                </button>
              </Col>
            );
          })}
        </Row>
      </Container>
    </div>
  );
}
export default StaffsList;
