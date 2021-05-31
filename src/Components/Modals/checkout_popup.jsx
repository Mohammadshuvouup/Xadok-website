import React, { useState, useRef, useEffect } from "react";
import { Button, Modal } from "react-bootstrap";
import master from "../../xadok/master.png";
import OpenCart from "../openCart";
import DeliveryTime from "../Modals/delivery-time";
import "../../css/cheackout-popup.css";
import { Trans, useTranslation } from "react-i18next";
import Moment from "moment";
import triangle from "../../triangle.svg";
import logo from "../logo/logo.svg";
import axios from "axios";
import Loader from "react-loader-spinner";

const CheckOutPopUp = (props) => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [show115, setShow115] = useState(false);
  const handleClose115 = () => setShow115(false);
  const handleShow115 = () => setShow115(true);

  const [show116, setShow116] = useState(false);
  const handleClose116 = () => setShow116(false);
  const handleShow116 = () => setShow116(true);
  const [show117, setShow117] = useState(false);
  const handleClose117 = () => setShow117(false);
  const handleShow117 = () => setShow117(true);
  const [show02, setShow02] = useState(false);
  const handleShow02 = () => setShow02(true);
  const [showDeliveryTime, setShowDeliveryTime] = useState(false);
  const [deliveryTime, setDeliveryTime] = useState(null);
  const [showAlert, setShowAlert] = useState(false);
  const [alertMessage, setAlertMessage] = useState("");
  const [delivery, setDelivery] = useState(
    parseInt(localStorage.getItem("minimum_amount_for_free_shipping")) || 0
  );
  const [showSuccess, setShowSuccess] = useState(false);
  const handleCloseSuccess = () => {
    setShowSuccess(false);
    window.location.reload();
  };
  const [showProgress, setShowProgress] = useState(false);

  var cart_items = JSON.parse(localStorage.getItem("products")) || [];
  const [totalCost, setTotalCost] = useState(
    cart_items != null && cart_items.length > 0
      ? cart_items
          .reduce(
            (a, value) => (a = a + value.product_price * value.pro_qua),
            0
          )
          .toFixed(3)
      : 0
  );
  const [totalCostWithDelivery, setTotalCostWithDelivery] = useState(
    cart_items != null && cart_items.length > 0
      ? cart_items
          .reduce(
            (a, value) => (a = a + value.product_price * value.pro_qua),
            0
          )
          .toFixed(3)
      : 0
  );
  const { t, i18n } = useTranslation();
  useEffect(() => {
    let language = localStorage.getItem("language");
    if (language && language.length !== 0) {
      i18n.changeLanguage(language);
    }
  }, []);
  const [date, setDate] = useState(null);
  const [dateId, setDateId] = useState(null);
  const [time, setTime] = useState(null);
  const [deliveryCost, setDeliveryCost] = useState(0);
  const [timeText, setTimeText] = useState("Schedule Delivery");

  const handleClose02 = (date, dateId, time) => {
    // console.log("-ok-");
    setShow02(false);
    // console.log(date);
    // console.log(time);
    setDateId(dateId);
    setDate(date);
    setTime(time);
    setShowDeliveryTime(true);
    if (time !== undefined && time !== null) {
      setDeliveryCost(parseFloat(time.delivery_cost));
      if (parseFloat(totalCost) > parseFloat(delivery)) {
        setTotalCostWithDelivery(totalCost);
      } else {
        let b = parseFloat(time.delivery_cost);
        setTotalCostWithDelivery((parseFloat(totalCost) + b).toFixed(3));
      }
      setTimeText(
        Moment("2021-05-21 " + time.start_time).format("hh:mm a") +
          " - " +
          Moment("2021-05-21 " + time.end_time).format("hh:mm a")
      );
    }
  };

  const handleCloseAlert = () => {
    setShowAlert(false);
    setAlertMessage("");
  };
  const [notes, setNotes] = useState(null);
  const handleChangeNote = (e) => {
    setNotes(e.target.value);
  };
  const paymentMethods = [
    "Cash On Delivery",
    "Benefit Pay",
    "Card On Delivery",
  ];
  const [defaultPayment, setDefaultPayment] = useState("Cash On Delivery");
  const handlePaymentMethod = (item) => {
    setDefaultPayment(item);
  };

  const handleCheckout = () => {
    console.log("handleCheckout");
    if (time === null) {
      setAlertMessage("Please choose delivery time");
      setShowAlert(true);
    } else {
      let paymentType = "COD";
      if (defaultPayment === "Benefit Pay") {
        paymentType = "BENEFIT";
      } else if (defaultPayment === "Card On Delivery") {
        paymentType = "cash";
      }
      let param = {
        user_id: localStorage.getItem("user_id"),
        address_id: localStorage.getItem("default_address_id"),
        shop_id: localStorage.getItem("shop_id"),
        payment_type: paymentType,
        inv_type: "delivery",
        inv_form: "invoice",
        credit: 0,
        note: notes,
        extras: [],
        type: [],
        inv_lat: localStorage.getItem("current_location_lat"),
        inv_lng: localStorage.getItem("current_location_lng"),
        is_express: "false",
        timing_id: time.timing_id,
        delivery_cost:
          parseFloat(totalCost) > parseFloat(delivery) ? 0 : deliveryCost,
        coupon: "",
        pros: localStorage.getItem("products"),
      };
      // console.log(param);
      setShowProgress(true);
      axios
        .post("https://ristsys.store/api/AddInvoice", param)
        .then((response) => {
          console.log(response);
          setShowProgress(false);
          if (response.data.status === 1) {
            setDate(null);
            setDateId(null);
            setTime(null);
            setDeliveryCost(0);
            setTimeText("Schedule Delivery");
            setShowDeliveryTime(false);
            setDeliveryTime(null);
            setShowSuccess(true);
            localStorage.removeItem("products");
            localStorage.removeItem("cart_count");
            props.handleClose4();
          }
        })
        .catch((error) => {
          setShowProgress(false);
        });
    }
  };

  return (
    <>
      <Modal
        className="cheackout-popup"
        style={{ border: "none" }}
        show={props.show4}
        onHide={props.handleClose4}
      >
        <Modal.Header style={{ border: "none" }} closeButton>
          <Modal.Title
            style={{
              border: "none",
              paddingLeft: "22px",
              fontWeight: "bold",
              marginbottom: "56px",
            }}
          >
            Checkout
          </Modal.Title>
        </Modal.Header>
        <Modal.Body style={{ border: "none" }}>
          {/* <h4
          style={{
            paddingLeft: "22px",
            paddingTop: "14px",
            fontWeight: "bold",
          }}
        >
          Delivery Address
        </h4>
        <h6
          style={{
            color: "red",
            fontSize: "12px",
            paddingLeft: "22px",
            paddingTop: "12px",
          }}
        >
          DELIVER TO{" "}
        </h6>
        <h6
          className="post"
          onClick={handleShow}
          style={{
            position: "relative",
            paddingLeft: "22px",
            cursor: "pointer",
            marginbottom: "71px",
          }}
        >
          300 Post Street San Francisco, CA
          <span
            style={{
              color: "silver",
              position: "absolute",
              right: "5%",
              marginTop: "-2%",
            }}
          >
            <i class="fas fa-chevron-right"></i>
          </span>
        </h6> */}
          <h4
            className="checkoutde"
            style={{ paddingLeft: "22px", fontWeight: "", paddingTop: "45px" }}
          >
            Delivery Time
          </h4>
          {showDeliveryTime ? (
            <div
              onClick={handleShow02}
              style={{
                marginTop: "7%",
                marginLeft: "4%",
                width: "90%",
                cursor: "pointer",
                height: "9vh",
                alignItems: "center",
                justifyContent: "space-evenly",
                borderRadius: "8px",
                background: "#F6F6F6",
                display: "flex",
              }}
            >
              <h5 className="fifteen" style={{ marginLeft: "-10%" }}>
                {Moment(date).format("DD")}
              </h5>
              <h5 style={{ marginLeft: "8%" }}>{Moment(date).format("MMM")}</h5>
              <h5 style={{ paddingLeft: "5%" }}>
                {Moment(date).format("YYYY")}
              </h5>
            </div>
          ) : (
            ""
          )}

          <div
            onClick={handleShow02}
            style={{
              width: "90%",
              height: "6vh",
              background: "#F6F6F6",
              marginTop: "3%",
              marginLeft: "4%",
              border: "none",
              display: "flex",
              justifyContent: "space-between",
              borderRadius: "8px",
            }}
          >
            <h6
              className="schedule"
              style={{ paddingTop: "4%", paddingLeft: "8%", cursor: "pointer" }}
            >
              {timeText}
            </h6>
            <i
              class="fas fa-chevron-down schedulei"
              style={{ color: "silver", marginRight: "4%", marginTop: "4%" }}
            ></i>
          </div>

          <h4
            className="payment"
            style={{
              paddingLeft: "22px",
              paddingTop: "74px",
              paddingBottom: "20px",
            }}
          >
            Payment methods{" "}
          </h4>

          {paymentMethods.map((item) => (
            <>
              {item === defaultPayment ? (
                <Button
                  className="p-3 text-start ml-3 selected-payment"
                  onClick={() => handlePaymentMethod(item)}
                >
                  {" "}
                  &nbsp; &nbsp;&nbsp;&nbsp;
                  <i
                    style={{ fontSize: "27px" }}
                    class="fas fa-money-bill-alt"
                  ></i>{" "}
                  &nbsp; &nbsp;&nbsp; {item}
                </Button>
              ) : (
                <Button
                  className="p-3 text-start ml-3 default-payment"
                  onClick={() => handlePaymentMethod(item)}
                >
                  {" "}
                  &nbsp; &nbsp;&nbsp;&nbsp;
                  <i
                    style={{ fontSize: "27px" }}
                    class="fas fa-money-bill-alt"
                  ></i>{" "}
                  &nbsp; &nbsp;&nbsp; {item}
                </Button>
              )}
            </>
          ))}

          {/* <Button
          className="p-3 text-start ml-3"
          style={{
            marginTop: "2.5%",
            display: "flex",
            width: "90%",
            background: "#e6e3e3",
            border: "none",
            borderRadius: "10px",
            alignItems: "center",
            color: "black",
            fontWeight: "normal",
          }}
        >
          &nbsp; &nbsp;&nbsp;&nbsp;
          <i style={{ fontSize: "27px" }} class="fas fa-id-card"></i>&nbsp;
          &nbsp; &nbsp;Benefit pay
        </Button>

        <Button
          className="p-3 text-start ml-3"
          style={{
            marginTop: "2.5%",
            display: "flex",
            width: "90%",
            background: "#e6e3e3",
            border: "none",
            borderRadius: "10px",
            alignItems: "center",
            color: "black",
            fontWeight: "normal",
          }}
        >
          {" "}
          &nbsp; &nbsp;&nbsp;&nbsp;
          <i style={{ fontSize: "27px" }} class="fas fa-id-card"></i> &nbsp;
          &nbsp;&nbsp; Card on delivery
        </Button> */}
          {/* <h3 style={{ marginTop: "13%", fontWeight: "bold", marginLeft: "5%" }}>
          {" "}
          My Cart
          <span style={{ fontSize: "14px" }}> &nbsp; (2)</span>
        </h3>
        <div
          style={{
            marginTop: "7%",
            display: "flex",
            justifyContent: "space-evenly",
            width: "90%",
            marginLeft: "3.8%",
          }}
        >
          <Button
            style={{
              border: "none",
              color: "black",
              borderRadius: "12px",
              fontSize: "30px",
              width: "60px",
              marginTop: "12%",
              height: "10vh",
              background: "#e6e3e3",
              marginbottom: "61px",
            }}
          >
            <i class="fas fa-plus"></i>
          </Button>
          <img
            className="mastercard"
            src={master}
            style={{ width: "155px", height: "200px", borderRadius: "12px" }}
          />
          <img
            className="mastercard"
            src={master}
            style={{
              width: "155px",
              height: "200px",
              borderRadius: "12px",
              filter: "opacity(0.5)",
            }}
          />
        </div> */}

          <h4
            style={{
              fontWeight: "bold",
              marginLeft: "5%",
              marginTop: "9%",
              border: "none",
            }}
          >
            Notes
          </h4>
          <textarea
            // placeholder="Examples don't ring the best"
            className="not-input"
            onChange={handleChangeNote}
            style={{
              outline: "none",
              border: "none",
              marginLeft: "5%",
              width: "90%",
              marginTop: "4%",
              height: "8vh",
              background: "#F6F6F6",
              borderRadius: "10px",
              marginbottom: "68px",
              padding: "10px",
            }}
          />
        </Modal.Body>

        <Button
          onClick={handleCheckout}
          className="cheack-out-btn"
          // onClick={handleShow116}
          size="lg"
          block
        >
          {t("openCart.Checkout")}
          <span>
            &nbsp; ({totalCostWithDelivery}{" "}
            {localStorage.getItem("country_currency")})
          </span>
        </Button>
        <Modal.Footer style={{ color: "white", border: "none" }}></Modal.Footer>
      </Modal>
      <DeliveryTime
        show02={show02}
        handleClose02={handleClose02}
        dates={props.dates}
      />

      {/* ---------------------Order Success------------------ */}
      <Modal
        className="your"
        show={showSuccess}
        style={{
          borderRadius: "30px ",
          top: "25%",
          width: "450px",
          marginLeft: "40%",
          background: "transparent",
          border: "none",
        }}
        onHide={handleCloseSuccess}
        animation={false}
      >
        <Modal.Header
          style={{
            borderRadius: "1rem ",
            background: "transparent",
            border: "none",
          }}
          closeButton
        >
          <img
            src={logo}
            style={{
              width: "90px",
              height: "60px",
              marginLeft: "37%",
              marginTop: "20px",
              padding: "5px",
            }}
          />
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
            Your order has been confirmed,<br></br>Thank you for choosing us.
          </p>
        </Modal.Body>

        <Modal.Footer
          style={{ border: "none", marginLeft: "-4%", width: "100%" }}
        ></Modal.Footer>
      </Modal>

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

      {/* ---------------------Alert Modal------------------ */}
      <Modal
        className="your"
        show={showAlert}
        style={{
          borderRadius: "30px ",
          top: "25%",
          width: "410px",
          marginLeft: "40%",
          background: "transparent",
          border: "none",
        }}
        onHide={handleCloseAlert}
        animation={false}
      >
        <Modal.Header
          style={{
            borderRadius: "1rem ",
            background: "transparent",
            border: "none",
            textAlign: "center",
          }}
          closeButton
        ></Modal.Header>
        <Modal.Body style={{ border: "none" }}>
          <div className="col-md-12" style={{ textAlign: "center" }}>
            <img src={triangle} height={80} width={80} />
          </div>
          <p
            style={{
              textAlign: "center",
              fontSize: "20px",
              marginTop: "20px",
              fontSize: "18px",
              padding: "10px",
            }}
          >
            {alertMessage}
          </p>
        </Modal.Body>

        <Modal.Footer
          style={{ border: "none", marginLeft: "-4%", width: "100%" }}
        ></Modal.Footer>
      </Modal>
    </>
  );
};

export default CheckOutPopUp;
