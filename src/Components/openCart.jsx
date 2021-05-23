import React, { useState, useEffect } from "react";
import { Button, Modal, Row, Col } from "react-bootstrap";
import { Trans, useTranslation } from "react-i18next";
// import './../css/opencart.css'
import "../css/open_cart.css";
import SavedAddresses from "./Modals/settings page/saved_addresses.jsx";

const API_PREFIX_URL = `https://deliveryxadok.s3.us-east-2.amazonaws.com/`;

const OpenCart = (props) => {
  var localItems = JSON.parse(localStorage.getItem("products")) || [];
  const [state, setState] = useState({
    selectedProduct: localItems,
  });
  const [cart_items, setCartItems] = useState(
    JSON.parse(localStorage.getItem("products"))
  );
  const [totalCost, setTotalCost] = useState(
    cart_items && cart_items.length > 0
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
    // console.log("LANGUAGE SELECTED", language);
    if (language && language.length !== 0) {
      i18n.changeLanguage(language);
    }
  }, []);
  const [shows1, setShows1] = useState(false);
  const handleShows1 = () => setShows1(true);
  const handleCloses1 = (selectedAddress) => {
    // console.log("selectedAddress",selectedAddress);
    setShows1(false);
    if (selectedAddress != null) {
    }
  };
  const cart_qty = localStorage.getItem("cart_count");

  const updateQuanity = (props, type) => {
    if (type == "minus" && parseInt(props.pro_qua) - 1 == 0) {
      let updatedItem = cart_items.filter(function (el) {
        return el.pro_id !== props.pro_id;
      });
      setCartItems(updatedItem);
      localStorage.setItem("products", JSON.stringify(updatedItem));
    } else {
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
    }
    setTotalCost(
      cart_items
        .reduce((a, value) => (a = a + value.product_price * value.pro_qua), 0)
        .toFixed(3)
    );
  };

  return (
    <div className="open-cart-modal">
      <SavedAddresses
        shows1={shows1}
        handleCloses1={handleCloses1}
        issetting="0"
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
          <Row>
            <Col md={12} className="deliver-to">
              <h6 className="deliver-text1">{t("openCart.DELIVER-TO")} </h6>
              <h6 className="deliver-text2" onClick={handleShows1}>
                300 Post Street San Francisco, CA
                {/* <span><i class="text-right fas fa-chevron-right"></i></span> */}
              </h6>
              <h3 className="deliver-text3">{t("openCart.Items")}</h3>
            </Col>
          </Row>
          {cart_items &&
            cart_items.length > 0 &&
            cart_items.map((value, index) => {
              return (
                <>
                  <Row className="api-box">
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
                </>
              );
            })}
          {/* <h6 className="item-add">{t("openCart.Add-more-items")}</h6> */}
          <Row className="shipping">
            <Col className="motor" md={2}>
              <div>
                <i class="fas fa-motorcycle"></i>
              </div>
            </Col>

            <Col md={8} className="more-item-text">
              <h6>{t("openCart.Delivery")}</h6>
              <p>
                <span>0</span> {localStorage.getItem("country_currency")}
              </p>
            </Col>
            <Col md={2}></Col>
          </Row>
          {/* <Row className="shipping">
            

              <Col className="card" md={2}>
                <div>
                  <i class="far fa-credit-card"></i>
                </div>
              </Col>
                  
                  <Col md={8} className="more-item-text">
                     <h6>
                        {t("openCart.Promo-Code")}
                     </h6>
                     <h6>
                        HXFWO
                     </h6>
              </Col>
              <Col md={2}>
                <div className="item-plus" onClick={props.handleShow114}>
                  <i class="fas fa-plus"></i>
                </div></Col>
                 
               </Row> */}
        </Modal.Body>
        <Modal.Footer>
          <Button
            className="cheackout"
            onClick={props.handleShow4}
            size="lg"
            block
          >
            <p>
              {t("openCart.Checkout")}
              <span>
                &nbsp; ({totalCost} {localStorage.getItem("country_currency")})
              </span>
            </p>
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default OpenCart;
