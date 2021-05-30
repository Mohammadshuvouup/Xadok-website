import React, { useState, useEffect } from "react";
import { Button, Modal, Row, Col } from "react-bootstrap";
import { Trans, useTranslation } from "react-i18next";
// import './../css/opencart.css'
import "../css/open_cart.css";
import SavedAddresses from "./Modals/settings page/saved_addresses.jsx";
import master from "../xadok/master.png";
import CheckOutPopUp from "./Modals/checkout_popup.jsx";

const API_PREFIX_URL = `https://deliveryxadok.s3.us-east-2.amazonaws.com/`;

const OpenCart = (props) => {
  const [show4, setShow4] = useState(false);
  const handleClose4 = () => setShow4(false);
  const handleShow = () => setShow(true);
  const handleShow115 = () => setShow115(true);
  const handleShow117 = () => setShow117(true);
  const [show, setShow] = useState(false);
  const [show115, setShow115] = useState(false);
  const [show117, setShow117] = useState(false);
  const handleShow116 = () => setShow116(true);
  const [show116, setShow116] = useState(false);
  const handleClose115 = () => setShow115(false);
  const handleClose117 = () => setShow117(false);
  var localItems = JSON.parse(localStorage.getItem("products")) || [];
  const [delivery, setDelivery] = useState(
    localStorage.getItem("minimum_amount_for_free_shipping") || 0
  );
  const [state, setState] = useState({
    selectedProduct: localItems,
  });
  const [cart_items, setCartItems] = useState(
    JSON.parse(localStorage.getItem("products"))
  );
  const [defaultAddress, setDefaultAddress] = useState(
    localStorage.getItem("default_address") || ""
  );
  const [defaultAddressType, setDefaultAddressType] = useState(
    localStorage.getItem("default_address_type") || ""
  );
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
  // const [show4, setShow4] = useState(false);
  const handleShow4 = () => setShow4(true);

  if (props.show2) {
    console.log("loaded");
    // setCartItems(JSON.parse(localStorage.getItem("products")));
  }

  const [noItems, setNoItems] = useState(
    localStorage.getItem("cart_count") === null ||
      parseInt(localStorage.getItem("cart_count")) === 0
      ? true
      : false
  );

  const { t, i18n } = useTranslation();
  useEffect(() => {
    let language = localStorage.getItem("language");
    // console.log("LANGUAGE SELECTED", language);
    if (language && language.length !== 0) {
      i18n.changeLanguage(language);
    }
    // console.log("loadInitialCartItems");
    // setCartItems(localStorage.getItem("products"));
    // console.log(cart_items);
  }, []);
  const [shows1, setShows1] = useState(false);
  const handleShows1 = () => setShows1(true);
  const handleCloses1 = (selectedAddress) => {
    // console.log("selectedAddress", selectedAddress);
    setShows1(false);
    if (selectedAddress != null) {
      setDefaultAddress(selectedAddress.add_area);
      setDefaultAddressType(selectedAddress.add_type);
    }
  };
  const cart_qty = localStorage.getItem("cart_count");

  const updateQuanity = (props, type) => {
    // console.log(props);
    if (type == "minus" && parseInt(props.pro_qua) - 1 == 0) {
      const newList = cart_items.map((item) => {
        if (item.pro_id === props.pro_id) {
          const updatedItem = {
            ...item,
            pro_qua:
              type == "plus"
                ? parseInt(props.pro_qua) + 1
                : parseInt(props.pro_qua) - 1,
          };
          return updatedItem;
        }
        return item;
      });
      setCartItems(newList);
      localStorage.setItem("products", JSON.stringify(newList));
      setTotalCost(
        newList
          .reduce(
            (a, value) => (a = a + value.product_price * value.pro_qua),
            0
          )
          .toFixed(3)
      );

      let updatedItem = cart_items.filter(function (el) {
        return el.pro_id !== props.pro_id;
      });
      setCartItems(updatedItem);
      let cartQty = localStorage.getItem("cart_count");
      // console.log(updatedItem);
      // console.log(cartQty-1);
      // console.log(parseInt(cartQty)-1);
      localStorage.setItem("products", JSON.stringify(updatedItem));
      localStorage.setItem("cart_count", parseInt(cartQty) - 1);
      // console.log("-yes-");
      // console.log(parseInt(cartQty));
      if (parseInt(cartQty) === 1) {
        // setTotalCost(0);
        setNoItems(true);
      }
    } else {
      // console.log(props.pro_qua + "<=" + props.pro_stock);
      if (type == "plus" && props.pro_qua >= props.pro_stock) {
        return;
      }
      const newList = cart_items.map((item) => {
        if (item.pro_id === props.pro_id) {
          const updatedItem = {
            ...item,
            pro_qua:
              type == "plus"
                ? parseInt(props.pro_qua) + 1
                : parseInt(props.pro_qua) - 1,
          };
          return updatedItem;
        }
        return item;
      });
      setCartItems(newList);
      localStorage.setItem("products", JSON.stringify(newList));
      setTotalCost(
        newList
          .reduce(
            (a, value) => (a = a + value.product_price * value.pro_qua),
            0
          )
          .toFixed(3)
      );
    }
  };

  const handleCheckout = () => {
    console.log("handleCheckout");
    let shop_id = cart_items[0].shop_id;
    let param = {
      user_id: localStorage.getItem("user_id"),
      address_id: localStorage.getItem("default_address_id"),
      shop_id: shop_id,
      payment_type: localStorage.getItem("payment_type"),
      inv_type: "delivery",
      inv_form: "invoice",
      credit: 0,
      pros: localStorage.getItem("products"),
      note: localStorage.getItem("note"),
      extras: [],
      type: [],
      inv_lat: localStorage.getItem("current_location_lat"),
      inv_lng: localStorage.getItem("current_location_lng"),
      is_express: localStorage.getItem("is_express"),
      timing_id: localStorage.getItem("timing_id"),
      delivery_cost: totalCost > delivery ? 0 : delivery,
      coupon: "",
    };
    // console.log(param);
  };

  const handleContinue = () => {
    props.handleClose2();
    setShow4(true);
  };

  return (
    <>
      <div className="open-cart-modal">
        <SavedAddresses
          shows1={shows1}
          handleCloses1={handleCloses1}
          issetting="0"
        />
        <CheckOutPopUp
          show4={show4}
          handleClose4={handleClose4}
          handleShow4={handleShow4}
        />
        <Modal
          className="cart art"
          show={props.show2}
          onHide={props.handleClose2}
        >
          <Modal.Header closeButton>
            <Modal.Title className="mycart">
              {t("openCart.My-cart")}
              <span>&nbsp;{`(${cart_qty} items)`}</span>
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Row style={{ display: noItems === true ? "none" : "block" }}>
              <Col md={12} className="deliver-to">
                <h6 className="deliver-text1">{t("openCart.DELIVER-TO")} </h6>
                <h6 className="deliver-text2" onClick={handleShows1}>
                  {defaultAddressType === "" ? "" : defaultAddressType + ": "}{" "}
                  {defaultAddress === "" ? "Select address" : defaultAddress}
                  {/* <span><i class="text-right fas fa-chevron-right"></i></span> */}
                </h6>
                <h3 className="deliver-text3">{t("openCart.Items")}</h3>
              </Col>
            </Row>
            {cart_items &&
              cart_items.length > 0 &&
              cart_items.map((value, index) => {
                // console.log("delivery");
                // console.log(totalCost + ">" + delivery);
                // console.log(totalCost);
                // console.log(delivery);
                // console.log(value);
                return (
                  <Row className="api-box" key={value.pro_id}>
                    <Col md={3}>
                      <img
                        className="item-img"
                        src={`${API_PREFIX_URL}${value.img}`}
                      />
                    </Col>
                    <Col md={7}>
                      <h5 className="item-name">{value.pro_name}</h5>
                      <h4 className="item-price">
                        {(value.product_price * value.pro_qua).toFixed(3)}
                        <span>
                          &nbsp;{localStorage.getItem("country_currency")}
                        </span>
                      </h4>
                    </Col>
                    <Col md={2} className="d-flex flex-column">
                      <Button
                        className="plus"
                        onClick={() => updateQuanity(value, "plus")}
                      >
                        +
                      </Button>
                      <span className="text-center item-amount">
                        {value.pro_qua}
                      </span>
                      {/* background:"white"}}>{modal_cart_qty>1 ? modal_cart_qty : value.pro_qua}</Button> */}
                      <Button
                        className="minus"
                        onClick={() => updateQuanity(value, "minus")}
                      >
                        {value.pro_qua == 1 ? (
                          <i
                            class="fas fa-trash bg-gray"
                            aria-hidden="true"
                          ></i>
                        ) : (
                          "-"
                        )}
                      </Button>
                    </Col>
                  </Row>
                );
              })}
            {/* <h6 className="item-add">{t("openCart.Add-more-items")}</h6> */}

            <Row style={{ display: noItems === false ? "none" : "block" }}>
              <Col className="motor" md={12}>
                <div className="text-center">
                  <p>No items in the cart</p>
                </div>
              </Col>
            </Row>

            <Row
              className="shipping"
              style={{ display: noItems === true ? "none" : "" }}
            >
              <Col className="motor" md={3}>
                <div className="text-center">
                  <i
                    class="fas fa-motorcycle"
                    style={{ marginTop: "17px" }}
                  ></i>
                </div>
              </Col>

              <Col md={7} className="more-item-text">
                <h6 style={{ marginBottom: "0px" }}>
                  {t("openCart.Delivery")}
                </h6>
                <p>
                  <span>
                    {parseFloat(totalCost) > parseFloat(delivery)
                      ? 0
                      : delivery}
                  </span>{" "}
                  {localStorage.getItem("country_currency")}
                </p>
              </Col>
              <Col md={2}></Col>
            </Row>
          </Modal.Body>
          <Modal.Footer>
            <Button
              style={{ display: noItems === true ? "none" : "block" }}
              className="cheackout"
              onClick={handleContinue}
              size="lg"
              block
            >
              <p>
                {t("openCart.Checkout")}
                <span>
                  &nbsp; ({totalCost} {localStorage.getItem("country_currency")}
                  )
                </span>
              </p>
            </Button>
          </Modal.Footer>
        </Modal>
      </div>

      {/* -----------------------SELECT DATE------------------------ */}

      <Modal
        show={show115}
        className="c selectdate"
        style={{
          borderRadius: "30px ",
          marginTop: "5.2%",
          width: "370px",
          marginLeft: "33.7%",
          background: "transparent",
          border: "none",
        }}
        onHide={handleClose115}
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
          <Modal.Title
            style={{
              border: "none",
              padding: "10px",
              fontWeight: "bold",
              paddingLeft: "13px",
            }}
          >
            Select Date
          </Modal.Title>
        </Modal.Header>
        <Modal.Body
          style={{ border: "none", marginTop: "-30px", padding: "5px" }}
        >
          <div class="grid-container">
            <div class="grid-item">13</div>
            <div class="grid-item size">June</div>
            <div class="grid-item bgd">2020</div>
            <div class="grid-item">14</div>
            <div class="grid-item size">July</div>
            <div class="grid-item">2021</div>
            <div class="grid-item sized">15</div>
            <div class="grid-item size">August</div>
            <div class="grid-item">2022</div>
            <div class="grid-item">16</div>
            <div class="grid-item size">September</div>
            <div class="grid-item">2023</div>
            <div class="grid-item">17</div>
            <div class="grid-item size">October</div>
            <div class="grid-item">2024</div>
            <div class="grid-item">18</div>
            <div class="grid-item size">November</div>
            <div class="grid-item">2025</div>
            <div class="grid-item">18</div>
            <div class="grid-item size bgd">December</div>
            <div class="grid-item">2026</div>
          </div>
        </Modal.Body>
      </Modal>

      <Modal
        show={show117}
        className="c selectdate"
        style={{
          borderRadius: "30px ",
          marginTop: "5.5%",
          width: "370px",
          marginLeft: "33.7%",
          background: "transparent",
          border: "none",
        }}
        onHide={handleClose117}
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
          <Modal.Title
            style={{
              border: "none",
              padding: "10px",
              fontWeight: "bold",
              paddingLeft: "13px",
            }}
          >
            Select Date
          </Modal.Title>
        </Modal.Header>
        <Modal.Body style={{ border: "none", marginTop: "-30px" }}>
          <div class="grid-container2">
            <div class="grid-items">Fast Delivery</div>
            <div class="grid-items ">1.000 BHD</div>
            <div class="grid-items ">12:00 PM-02:00 PM</div>
            <div class="grid-items">0.600 BHD</div>
            <div class="grid-items ">02:00 PM-04:00 PM</div>
            <div class="grid-items">0.600 BHD</div>
            <div class="grid-items">04:00 PM-06:00 PM</div>
            <div class="grid-items">0.600 BHD</div>
            <div class="grid-items">06:00 PM-8:00 PM</div>
            <div class="grid-items">0.600 BHD</div>
            <div class="grid-items ">08:00 PM-10:00 PM</div>
            <div class="grid-items">0.600 BHD</div>
            <div class="grid-items">10:00 PM -12:00 PM</div>
            <div class="grid-items">0.600 BHD</div>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default OpenCart;
