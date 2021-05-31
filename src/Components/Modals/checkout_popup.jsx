import React, { useState, useRef, useEffect } from "react";
import { Button, Modal } from "react-bootstrap";
import master from "../../xadok/master.png";
import OpenCart from "../openCart";
import DeliveryTime from "../Modals/delivery-time";
import "../../css/cheackout-popup.css";
import { Trans, useTranslation } from "react-i18next";

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
  const handleClose02 = () => setShow02(false);

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
  const { t, i18n } = useTranslation();
  useEffect(() => {
    let language = localStorage.getItem("language");
    if (language && language.length !== 0) {
      i18n.changeLanguage(language);
    }
  }, []);
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
          <div
            onClick={handleShow115}
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
              15
            </h5>
            <h5 style={{ marginLeft: "8%" }}>December</h5>
            <h5 style={{ paddingLeft: "5%" }}>2020</h5>
          </div>
          <div
            onClick={handleShow02}
            style={{
              width: "90%",
              height: "8vh",
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
              Schedule Delivery{" "}
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
          className="cheack-out-btn"
          onClick={handleShow116}
          size="lg"
          block
        >
          {t("openCart.Checkout")}
          <span>
            &nbsp; ({totalCost} {localStorage.getItem("country_currency")})
          </span>
        </Button>
        <Modal.Footer style={{ color: "white", border: "none" }}></Modal.Footer>
      </Modal>
      <DeliveryTime show02={show02} handleClose02={handleClose02} />
    </>
  );
};

export default CheckOutPopUp;
