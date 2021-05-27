import React, { useState, useEffect } from "react";
import axios from "axios";
import { Trans, useTranslation } from "react-i18next";
import { Row, Col, Modal, Button, Image } from "react-bootstrap";
// import cardlogo from '../../../xadok/logo.svg'

import "../../../css/order.css";
const Prev_Order_Details = (props) => {
  const { t, i18n } = useTranslation();

  useEffect(() => {
    let language = localStorage.getItem("language");
    if (language && language.length !== 0) {
      i18n.changeLanguage(language);
    }
  }, []);

  const [shows1, setShows1] = useState(false);
  const handleShows1 = () => setShows1(true);
  const handleCloses1 = () => setShows1(false);
  const API_PREFIX_URL = `https://deliveryxadok.s3.us-east-2.amazonaws.com/`;

  if (props.show120) {
    // console.log("-order detail popup-");
    // console.log(props);
  }

  if (props.info != null) {
    return (
      <Modal
        className="previous-order-details"
        show={props.show120}
        onHide={props.handleClose120}
      >
        <Modal.Header closeButton>
          <Modal.Title className="order-details">Order details #{props.data.inv_id}</Modal.Title>
        </Modal.Header>
        <Modal.Body style={{ border: "none" }}>
          <Row>
            <Col md={12} className="details-to">
              <h6 className="details-text1">{t("openCart.DELIVER-TO")} </h6>
              <h6 className="details-text2">
                {props.info.invoice.inv_address_en}
              </h6>
            </Col>
          </Row>

          <header>
            <div className="d-flex justify-content-between align-items-center">
              <h6>{props.data.shop_name}</h6>
            </div>
          </header>

          <ul>
            {props.info.products != null && props.info.products.length > 0
              ? props.info.products.map((item) => {
                  return (
                    <li key={item.pro_id} className="list">
                      {/* <span className="quantity"><img src={`${API_PREFIX_URL}${item.pro_img}`} /></span> */}
                      <span className="quantity">{item.pro_qua}</span>
                      {item.pro_name_en} <span className="taka">{item.pro_price} {localStorage.getItem("country_currency")}</span>{" "}
                    </li>
                  );
                })
              : ""}
          </ul>

          <div
            style={{
              marginTop: "7%",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <h4 style={{ fontWeight: "bold" }}>Subtotal </h4>
            <p style={{ color: "silver", fontSize: "21px" }}>
            {(props.info.invoice.inv_total - props.info.invoice.delivery_cost).toFixed(3)} 
              <span style={{ fontSize: "13px" }}> {localStorage.getItem("country_currency")}</span>
            </p>
          </div>

          <div
            style={{
              marginTop: "5%",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <h4 style={{ fontWeight: "bold" }}>Delivery fee</h4>
            <p style={{ color: "silver", fontSize: "21px" }}>
            {props.info.invoice.delivery_cost} 
              <span style={{ fontSize: "13px" }}> {localStorage.getItem("country_currency")}</span>
            </p>
          </div>

          <div
            style={{
              marginTop: "5%",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <h4 style={{ fontWeight: "bold" }}>Total </h4>
            <p
              style={{ color: "#E3424B", fontSize: "22px", fontWeight: "bold" }}
            >
              {props.info.invoice.inv_total}
              <span
                style={{
                  fontSize: "13px",
                  color: "black",
                  fontWeight: "lighter",
                }}
              > {localStorage.getItem("country_currency")}
              </span>
            </p>
          </div>

          <div
            className="credit"
            style={{
              marginTop: "5%",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            {/* <h4 style={{ fontWeight: "bold" }}>Credit card</h4>
            <div style={{ display: "flex", marginTop: "2%" }}>
              <p
                style={{ color: "silver", fontSize: "16px", marginTop: "-5px" }}
              >
                1211
              </p>
            </div> */}
          </div>

          <div className="d-flex justify-content-between">
            <i class="fas fa-user-plus profile-icon" style={{visibility: "hidden"}}></i>
            <Button className="new-order-btn"> Reorder Cart</Button>
          </div>
        </Modal.Body>
        <Modal.Footer style={{ border: "none" }}></Modal.Footer>
      </Modal>
    );
  } else {
    return "";
  }
};

export default Prev_Order_Details;
