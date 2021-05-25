import React, { useState } from "react";
// import logo from "../logo/logo.svg";
// import explore from "../logo/explore.svg"
// import order from "../sidebarw/orders.svg";
// import fav from "../logo/favourites.svg";
// import setting from "../logo/setting.svg";
// import message from "../logo/messages.svg";
import Footer from "../Components/footer";
// import delivery from "../topbar/delivery address.svg";
// import deal from "../topbar/best deals.svg";
// import master from "../xadok/master.png";
// import img from "../xadok/pexels-photo-102104.jpeg"
// import {Link} from 'react-router-dom';
import {
  Navbar,
  Row,
  Col,
  Nav,
  Container,
  ProgressBar,
  Card,
  CardDeck,
  Modal,
  Badge,
  Toast,
  Button,
  Form,
  FormControl,
  Carousel,
  Accordion,
} from "react-bootstrap";
import "../App.css";
import SideDrawer from "./SideDrawer/SideDrawer";
import TopBar from "./topBar";
import "../css/order.css";
import Prev_Order_Details from "../Components/Modals/orders page/previous-order-details";
import Order_Details from "../Components/Modals/orders page/order_details";

export default function Orders() {
  const [num, setNum] = useState(1);
  const plus = () => {
    setNum(num + 1);
  };
  const minus = () => {
    if (num > 0) {
      setNum(num - 1);
    } else {
    }
  };
  // const [show, setShow]  = useState(false);
  // const [show1,setShow1] = useState(false);
  const [show2, setShow2] = useState(false);
  // const [show3,setShow3] = useState(false);
  // const [show4,setShow4] = useState(false);
  // const [show5,setShow5] = useState(false);
  // const [show8,setShow8] = useState(false);
  // const [show9,setShow9] = useState(false);
  // const [show10,setShow10] = useState(false);
  // const [show111,setShow111] = useState(false);
  // const [show112,setShow112] = useState(false);
  // const [show113,setShow113] = useState(false);
  // const [show114,setShow114] = useState(false);
  // const [show115,setShow115] = useState(false);
  // const [show116,setShow116] = useState(false);
  // const [show117,setShow117] = useState(false);
  // const [show118,setShow118] = useState(false);

  // ---------------ORDER DETAIL---------------
  const [show119, setShow119] = useState(false);
  const [show120, setShow120] = useState(false);

  // --------delete-------------------
  const [show6, setShow6] = useState(true);
  const [show7, setShow7] = useState(true);
  // ----------------------

  // const handleClose1 = () => setShow1(false);
  // const handleShow1 = () => setShow1(true);

  // const handleClose2 = () => setShow2(false);
  const handleShow2 = () => setShow2(true);

  // const handleClose3 = () => setShow3(false);
  // const handleShow3 = () => setShow3(true);

  // const handleClose4 = () => setShow4(false);
  // const handleShow4 = () => setShow4(true);

  // const handleClose5 = () => setShow5(false);
  // const handleShow5 = () => setShow5(true);

  // const handleClose8 = () => setShow8(false);
  // const handleShow8 = () => setShow8(true);

  // const handleClose9 = () => setShow9(false);
  // const handleShow9 = () => setShow9(true);

  // const handleClose10 = () => setShow10(false);
  // const handleShow10 = () => setShow10(true);

  // const handleClose111 = () => setShow111(false);
  // const handleShow111 = () => setShow111(true);

  // const handleClose112 = () => setShow112(false);
  // const handleShow112 = () => setShow112(true);

  // const handleClose113 = () => setShow113(false);
  // const handleShow113 = () => setShow113(true);

  // const handleClose114 = () => setShow114(false);
  // const handleShow114 = () => setShow114(true);

  // const handleClose115 = () => setShow115(false);
  // const handleShow115 = () => setShow115(true);

  // const handleClose116 = () => setShow116(false);
  // const handleShow116 = () => setShow116(true);

  // const handleClose117 = () => setShow117(false);
  // const handleShow117 = () => setShow117(true);

  // const handleClose118 = () => setShow118(false);
  // const handleShow118 = () => setShow118(true);

  // const handleClose = () => setShow(false);
  // const handleShow = () => setShow(true);

  // ----------orderDetails-----------------
  const handleClose119 = () => setShow119(false);
  const handleShow119 = () => setShow119(true);
  const handleClose120 = () => setShow120(false);
  const handleShow120 = () => setShow120(true);
  return (
    <>
      {/* -------------------------Order Details------------------------------- */}
      <Order_Details show119={show119} handleClose119={handleClose119} />

      {/* ---------------------------------------PREVIOUS ORDER DETAILS----------------------------- */}

      <Prev_Order_Details show120={show120} handleClose120={handleClose120} />

      {/* ========================================================== */}

      <Container fluid>
        <Row>
          <SideDrawer />

          <Col xs={10} sm={10} lg={10} fluid>
            <TopBar />

            {/* =========== upcoming orders =========== */}

            <section className="upcoming-orders mt-4">
              <h2>Upcoming Orders</h2>
              <Row>
                <Col className="upcoming-order-card" md={4}>
                  <header>
                    <h6>Ramez Shopping</h6>
                    <p>#1DF90E</p>
                  </header>

                  <span className="d-flex align-items-center">
                    <i
                      class="far fa-clock"
                      style={{
                        color: "yellow",
                        fontSize: "28px",
                        marginBottom: "10px",
                      }}
                    ></i>
                    <div className="arrival-time d-flex flex-column">
                      <p>Estimated Arrival</p>
                      <h3>
                        <b>35 min</b>
                      </h3>
                    </div>
                  </span>

                  <div className="d-flex justify-content-around">
                    <ProgressBar
                      variant="danger"
                      now={100}
                      style={{ width: "12%", height: "6px" }}
                    />
                    <ProgressBar
                      variant="danger"
                      now={100}
                      style={{ width: "18%", height: "6px" }}
                    />
                    <ProgressBar
                      variant="danger"
                      now={60}
                      style={{ width: "60%", height: "6px" }}
                    />
                  </div>

                  <footer className="d-flex justify-content-between">
                    <Button className="details" onClick={handleShow119}>
                      Details
                    </Button>
                    <Button className="cancel">Cancel</Button>
                  </footer>
                </Col>

                <Col className="upcoming-order-card" md={4}>
                  <header>
                    <h6>Ramez Shopping</h6>
                    <p>#1DF90E</p>
                  </header>

                  <span className="d-flex align-items-center">
                    <i
                      class="far fa-clock"
                      style={{
                        color: "yellow",
                        fontSize: "28px",
                        marginBottom: "10px",
                      }}
                    ></i>
                    <div className="arrival-time d-flex flex-column">
                      <p>Estimated Arrival</p>
                      <h3>
                        <b>35 min</b>
                      </h3>
                    </div>
                  </span>

                  <div className="d-flex justify-content-around">
                    <ProgressBar
                      variant="danger"
                      now={100}
                      style={{ width: "12%", height: "6px" }}
                    />
                    <ProgressBar
                      variant="danger"
                      now={100}
                      style={{ width: "18%", height: "6px" }}
                    />
                    <ProgressBar
                      variant="danger"
                      now={60}
                      style={{ width: "60%", height: "6px" }}
                    />
                  </div>

                  <footer className="d-flex justify-content-between">
                    <Button className="details" onClick={handleShow119}>
                      Details
                    </Button>
                    <Button className="cancel">Cancel</Button>
                  </footer>
                </Col>
              </Row>
            </section>

            {/* ====================== previous order ========================== */}

            <section className="Previous-orders">
              <h2>Previous orders</h2>
              <Row>
                <Col md={4} className="previous-order-card">
                  <header>
                    <div className="d-flex justify-content-between align-items-center">
                      <h6>Ramez Shopping</h6>
                      <p className="completed">Completed</p>
                    </div>
                    <div className="d-flex title-details">
                      <span className="mr-4">
                        <i
                          class="far fa-calendar"
                          style={{ fontSize: "14px", color: "#B2B2B2" }}
                        ></i>{" "}
                        September 16, 2020
                      </span>
                      <span>
                        <i
                          className="far fa-clock mr-2"
                          style={{ fontSize: "16px", color: "#B2B2B2" }}
                        ></i>
                        11:54 PM
                      </span>
                    </div>
                  </header>

                  <ul>
                    <li>
                      <span className="quantity">1</span>ALMARAI DBLE CHOCOLATE
                      MILK SH
                    </li>
                    <li>
                      <span className="quantity">1</span>NIDO MILK POWDER POUCH
                      2.25KG
                    </li>
                  </ul>

                  <footer className="d-flex justify-content-between">
                    <Button onClick={handleShow120} className="details">
                      Details
                    </Button>
                    <Button onClick={handleShow2} className="repeat-order">
                      Repeat Order
                    </Button>
                  </footer>
                </Col>

                <Col md={4} className="previous-order-card">
                  <header>
                    <div className="d-flex justify-content-between align-items-center">
                      <h6>Ramez Shopping</h6>
                      <p className="cancelled">Cancelled</p>
                    </div>
                    <div className="d-flex title-details">
                      <span className="mr-4">
                        <i
                          class="far fa-calendar"
                          style={{ fontSize: "14px", color: "#B2B2B2" }}
                        ></i>{" "}
                        September 16, 2020
                      </span>
                      <span>
                        <i
                          className="far fa-clock mr-2"
                          style={{ fontSize: "16px", color: "#B2B2B2" }}
                        ></i>
                        11:54 PM
                      </span>
                    </div>
                  </header>

                  <ul>
                    <li>
                      <span className="quantity">1</span>ALMARAI DBLE CHOCOLATE
                      MILK SH
                    </li>
                    <li>
                      <span className="quantity">1</span>NIDO MILK POWDER POUCH
                      2.25KG
                    </li>
                  </ul>

                  <footer className="d-flex justify-content-between">
                    <Button onClick={handleShow120} className="details">
                      Details
                    </Button>
                    <Button onClick={handleShow2} className="repeat-order">
                      Repeat Order
                    </Button>
                  </footer>
                </Col>
              </Row>
            </section>
          </Col>
        </Row>
      </Container>
      <div className="mt-4">
        <Footer />
      </div>
    </>
  );
}
