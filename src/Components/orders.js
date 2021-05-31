import React, { useState, useEffect, useRef } from "react";
import Footer from "../Components/footer";
import {
  Row,
  Col,
  Container,
  ProgressBar,
  Button,
  Modal,
} from "react-bootstrap";
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
  const [showProgress, setShowProgress] = useState(false);

  var localItems = JSON.parse(localStorage.getItem("products")) || [];
  const [state, setState] = useState({
    selectedProduct: localItems,
  });
  const [shop_id, setShopId] = useState(null);

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
    setShowProgress(true);
    axios
      .post("https://ristsys.store/api/GetMyInvoiceInfo", param)
      .then((response) => {
        if (response.data.status === 1) {
          setShowProgress(false);
          setInfo(response.data.data);
          setShow120(true);
        }
      });
  }

  useEffect(() => {
    getUpcomingOrders();
    getPreviousOrders();
  }, []);

  const handleRepeatOrder = (item) => {
    console.log("repeat order");
    let param = {
      user_id: localStorage.getItem("user_id"),
      inv_id: item.inv_id,
    };
    console.log(param);
    setShowProgress(true);
    axios
      .post("https://ristsys.store/api/GetMyInvoiceInfo", param)
      .then((response) => {
        if (response.data.status === 1) {
          setShowProgress(false);
          let products = response.data.data.products;
          products.map((product) => {
            repeatOrder(product);
          });
          setShopId(item.shop_id);
          childRef.current.reloadCartItem();
        }
      });
  };

  function repeatOrder(item) {
    var newLocalItems = !localStorage.getItem("products")
      ? []
      : JSON.parse(localStorage.getItem("products"));
    const isSameShopFound =
      newLocalItems.length > 0
        ? newLocalItems.some((el) => el.shop_id === item.shop_id)
        : false;
    if (isSameShopFound === false) {
      localStorage.removeItem("products");
      localStorage.setItem("cart_count", 1);
      setState({ selectedProduct: [] });
    } else {
      setState({ selectedProduct: newLocalItems });
    }
    const obj = {
      pro_id: item.pro_id,
      pro_name: item.pro_name_en,
      shop_id: item.shop_id,
      pro_stock: item.pro_stock,
      pro_qua: 1,
      pro_model: 0,
      product_price:
        item.pro_special_price != null &&
        item.pro_special_price != 0 &&
        item.pro_special_price != "" &&
        item.pro_special_price != 0.0 &&
        item.pro_special_price != 0.0
          ? item.pro_special_price
          : item.pro_price,
      img: item.pro_img,
      offer_price: item.pro_special_price,
      offer_percent: 0,
      offer_info: "",
    };
    addToCart(obj);
  }

  const addToCart = (obj) => {
    setState((prevState) => {
      const found = prevState.selectedProduct.some(
        (el) => el.pro_id === obj.pro_id
      );
      const arrayproduct = prevState.selectedProduct;
      if (found === false) {
        arrayproduct.push(obj);
      }
      const selectedProduct = found ? prevState.selectedProduct : arrayproduct;
      localStorage.setItem("cart_count", selectedProduct.length);
      localStorage.setItem("products", JSON.stringify(selectedProduct));
    });
  };

  const childRef = useRef();
  const handleCustomEvent = () => {
    // console.log("hi");
    childRef.current.reloadCartItem();
  };

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
            <TopBar ref={childRef} shop_id={shop_id} />

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
                      <Col
                        md={4}
                        key={item.inv_id}
                        className="previous-order-card"
                      >
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
                            onClick={() => handleRepeatOrder(item)}
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

      {/* ---------------------Progress Modal------------------ */}
      <Modal
        backdrop="static"
        className="your"
        show={showProgress}
        style={{
          borderRadius: "30px ",
          top: "25%",
          width: "410px",
          marginLeft: "40%",
          background: "transparent",
          border: "none",
        }}
        animation={false}
      >
        <Modal.Header
          style={{
            borderRadius: "1rem ",
            background: "transparent",
            border: "none",
            textAlign: "center",
          }}
        >
          <div className="col-md-12">
            <Loader
              className="text-center"
              type="TailSpin"
              color="#e3424b"
              height={80}
              width={80}
              style={{ textAlign: "center" }}
            />
          </div>
        </Modal.Header>
        <Modal.Body style={{ border: "none" }}>
          <p
            style={{
              textAlign: "center",
              fontSize: "20px",
              marginTop: "-20px",
              fontSize: "18px",
              padding: "10px",
            }}
          >
            Please wait...<br></br>
          </p>
        </Modal.Body>

        <Modal.Footer
          style={{ border: "none", marginLeft: "-4%", width: "100%" }}
        ></Modal.Footer>
      </Modal>
    </>
  );
}
