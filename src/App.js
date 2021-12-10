import React from "react";
import { useState } from "react";
import { STAFFS } from "./Component/staffs";
import StaffsList from "./Component/StaffsList";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import "./App.css";
import dateFormat from "dateformat";

function App() {
  const onSetInfo = (item) => {
    if (item != null && item.name != undefined) {
      setFlag(true);
      setStaffInfo(item);
    } else {
      setFlag(false);
    }
  };
  const [staffInfo, setStaffInfo] = useState([]);
  const [flag, setFlag] = useState(false);
  return (
    <div className="App">
      <Container fluid>
        <Row className="blue text-center">
          <Col xs={12} sm={12}>
            <h1>Ứng dụng quản lý nhân viên</h1>
          </Col>
        </Row>
      </Container>
      <Container>
        <Row>
          <StaffsList handleClickApp={onSetInfo} staffListData={STAFFS} />
        </Row>
      </Container>
      <Container>
        <Row>
          {flag ? (
            <Col className="border mg-t">
              <h2>Họ và tên:{staffInfo.name}</h2>
              <p>Ngày sinh: {dateFormat(staffInfo.doB, "dd/mm/yyyy")}</p>
              <p>
                Ngày vào công ty:{" "}
                {dateFormat(staffInfo.startDate, "dd/mm/yyyy")}
              </p>
              <p>Phòng ban: {staffInfo.department.name}</p>
              <p>Số ngày nghỉ còn lại: {staffInfo.annualLeave}</p>
              <p>Số ngày đã làm thêm: {staffInfo.overTime}</p>
            </Col>
          ) : (
            <p className="mg-t click">Hãy click vào xem thông tin nhân viên </p>
          )}
        </Row>
      </Container>
    </div>
  );
}

export default App;
