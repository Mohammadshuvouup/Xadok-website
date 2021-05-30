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
import Moment from "moment";
import Loader from "react-loader-spinner";

export default function Orders() {
  const [show2, setShow2] = useState(false);
  // ---------------ORDER DETAIL---------------
  const [show119, setShow119] = useState(false);
  const [show120, setShow120] = useState(false);
  // --------delete-------------------
  const handleShow2 = () => setShow2(true);
  // ----------orderDetails-----------------
  const handleClose119 = () => setShow119(false);
  const handleClose120 = () => setShow120(false);
  // const handleShow120 = () => setShow120(true);
  const [upcomingOrders, setUpcomingOrders] = useState([]);
  const [previousOrders, setPreviousOrders] = useState([]);
  const [currentOrder, setCurrentOrder] = useState(null);
  const [pastOrder, setPastOrder] = useState(null);
  const [info, setInfo] = useState(null);

  const handleShow120 = (order) => {
    setPastOrder(order);
    getInvoiceInfo(order.inv_id);
    // setShow120(true);
  };
  const handleShow119 = (order) => {
    setPastOrder(order);
    getInvoiceInfo(order.inv_id);
    // setShow120(true);
  };

  function getPreviousOrders() {
    let param = { user_id: localStorage.getItem("user_id") };
    axios
      .post("https://ristsys.store/api/GetMyInvoicesFinished", param)
      .then((response) => {
        // console.log(response.data.data);
        if (response.data.status === 1) {
          setPreviousOrders(response.data.data);
        }
      });
  }

  function getUpcomingOrders() {
    let param = { user_id: localStorage.getItem("user_id") };
    axios
      .post("https://ristsys.store/api/GetMyInvoicesCurrent", param)
      .then((response) => {
        // console.log(response.data.data);
        if (response.data.status === 1) {
          setUpcomingOrders(response.data.data);
        }
      });
  }

  function getInvoiceInfo(invId) {
    let param = {
      user_id: localStorage.getItem("user_id"),
      inv_id: invId,
    };
    console.log(param);
    axios
      .post("https://ristsys.store/api/GetMyInvoiceInfo", param)
      .then((response) => {
        console.log(response);
        if (response.data.status === 1) {
          setInfo(response.data.data);
          setShow120(true);
        }
      });
  }

  useEffect(() => {
    getUpcomingOrders();
    getPreviousOrders();
  }, []);

  return (
    <>
      {/* -------------------------Order Details------------------------------- */}
      <Order_Details
        show119={show119}
        data={currentOrder}
        info={info}
        handleClose119={handleClose119}
      />

      {/* ---------------------------------------PREVIOUS ORDER DETAILS----------------------------- */}

      <Prev_Order_Details
        show120={show120}
        data={pastOrder}
        info={info}
        handleClose120={handleClose120}
      />

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
                {upcomingOrders != null && upcomingOrders.length > 0 ? (
                  upcomingOrders.map((item) => {
                    return (
                      <Col
                        key={item.inv_id}
                        className="upcoming-order-card"
                        md={4}
                      >
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
                                {Moment(item.deliverytime.date_choosed).format(
                                  "dddd"
                                ) +
                                  " " +
                                  Moment(
                                    "2021-05-21 " + item.deliverytime.start_time
                                  ).format("hh:mm a") +
                                  " - " +
                                  Moment(
                                    "2021-05-21 " + item.deliverytime.end_time
                                  ).format("hh:mm a")}
                              </b>
                            </h3>
                          </div>
                        </span>

                        <div className="d-flex justify-content-around">
                          {item.order_steps != null &&
                          item.order_steps.length > 0
                            ? item.order_steps.map((steps, index) => {
                                return (
                                  <ProgressBar
                                    key={index}
                                    variant="danger"
                                    now={steps.history != null ? 100 : 0}
                                    style={{ width: "24%", height: "6px" }}
                                  />
                                );
                              })
                            : ""}
                        </div>

                        <footer className="d-flex justify-content-between">
                          <Button
                            className="details"
                            props={item}
                            onClick={() => handleShow119(item)}
                          >
                            Details
                          </Button>
                          {/* <Button className="cancel">Cancel</Button> */}
                        </footer>
                      </Col>
                    );
                  })
                ) : !localStorage.getItem("user_id") ? (
                  <p>No items found</p>
                ) : (
                  <Loader
                    className="text-center"
                    type="TailSpin"
                    color="#e3424b"
                    height={80}
                    width={80}
                  />
                )}
              </Row>
            </section>

            {/* ====================== previous order ========================== */}

            <section className="Previous-orders">
              <h2>Previous orders</h2>
              <Row>
                {previousOrders != null && previousOrders.length > 0 ? (
                  previousOrders.map((item) => {
                    return (
                      <Col md={4} className="previous-order-card">
                        <header>
                          <div className="d-flex justify-content-between align-items-center">
                            <h6>{item.shop_name}</h6>
                            <p className="completed">#{item.inv_id}</p>
                          </div>
                          <div className="d-flex title-details">
                            <span className="mr-4">
                              <i
                                class="far fa-calendar"
                                style={{ fontSize: "14px", color: "#B2B2B2" }}
                              ></i>{" "}
                              {Moment(item.deliverytime.date_choosed).format(
                                "MMM d, Y"
                              )}
                            </span>
                            <span>
                              <i
                                className="far fa-clock mr-2"
                                style={{ fontSize: "16px", color: "#B2B2B2" }}
                              ></i>
                              {Moment(
                                "2021-05-21 " + item.deliverytime.start_time
                              ).format("hh:mm a")}
                            </span>
                          </div>
                        </header>

                        {/* <ul>
                            <li>
                              <span className="quantity">1</span>ALMARAI DBLE
                              CHOCOLATE MILK SH
                            </li>
                            <li>
                              <span className="quantity">1</span>NIDO MILK
                              POWDER POUCH 2.25KG
                            </li>
                          </ul> */}

                        <footer className="d-flex justify-content-between">
                          <Button
                            onClick={() => handleShow120(item)}
                            className="details"
                          >
                            Details
                          </Button>
                          <Button
                            onClick={handleShow2}
                            className="repeat-order"
                          >
                            Repeat Order
                          </Button>
                        </footer>
                      </Col>
                    );
                  })
                ) : !localStorage.getItem("user_id") ? (
                  <p>No items found</p>
                ) : (
                  <Loader
                    className="text-center"
                    type="TailSpin"
                    color="#e3424b"
                    height={80}
                    width={80}
                  />
                )}
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
