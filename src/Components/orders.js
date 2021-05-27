import React, { useState, useEffect } from "react";
import Footer from "../Components/footer";
import { Row, Col, Container, ProgressBar, Button } from "react-bootstrap";
import "../App.css";
import SideDrawer from "./SideDrawer/SideDrawer";
import TopBar from "./topBar";
import axios from "axios";
import "../css/order.css";
import Prev_Order_Details from "../Components/Modals/orders page/previous-order-details";
import Order_Details from "../Components/Modals/orders page/order_details";

export default function Orders() {
  const [show2, setShow2] = useState(false);
  // ---------------ORDER DETAIL---------------
  const [show119, setShow119] = useState(false);
  const [show120, setShow120] = useState(false);
  // --------delete-------------------
  const handleShow2 = () => setShow2(true);
  // ----------orderDetails-----------------
  const handleClose119 = () => setShow119(false);
  const handleShow119 = () => setShow119(true);
  const handleClose120 = () => setShow120(false);
  const handleShow120 = () => setShow120(true);
  const [upcomingOrders, setUpcomingOrders] = useState([]);
  const [previousOrders, setPreviousOrders] = useState([]);

  function getUpcomingOrders() {
    let param = { user_id: localStorage.getItem("user_id") };
    axios
      .post("https://ristsys.store/api/GetMyInvoicesCurrent", param)
      .then((response) => {
        console.log(response.data.data);
        if (response.data.status === 1) {
          setUpcomingOrders(response.data.data);
        }
      });
  }

  useEffect(() => {
    getUpcomingOrders();
  }, []);

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
                {upcomingOrders != null && upcomingOrders.length > 0
                  ? upcomingOrders.map((item) => {
                      return (
                        <Col className="upcoming-order-card" md={4}>
                          <header>
                            <h6>{item.shop_name}</h6>
                            <p>#{item.inv_id}</p>
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
                              <p>Delivery Time</p>
                              <h3>
                                <b>
                                  {
                                  item.deliverytime.date_choosed +
                                    " " +
                                    item.deliverytime.start_time +
                                    " - " +
                                    item.deliverytime.end_time}
                                </b>
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
                      );
                    })
                  : ""}
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
