import React, { useState, useEffect } from "react";
import { Trans, useTranslation } from "react-i18next";
import { Row, Col, Modal, Button, Image } from "react-bootstrap";
// import cardlogo from '../../../xadok/logo.svg'

import "../../../css/order.css";
const Prev_Order_Details = (props) => {
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
  const handleCloses1 = () => setShows1(false);

  return (
    <Modal
      className="previous-order-details"
      show={props.show120}
      onHide={props.handleClose120}
    >
      <Modal.Header closeButton>
        <Modal.Title className="order-details">Order details</Modal.Title>
      </Modal.Header>
      <Modal.Body style={{ border: "none" }}>
        <Row>
          <Col md={12} className="details-to">
            <h6 className="details-text1">{t("openCart.DELIVER-TO")} </h6>
            <h6 className="details-text2" onClick={handleShows1}>
              300 Post Street San Francisco, CA
            </h6>
          </Col>
        </Row>

        <header>
          <div className="d-flex justify-content-between align-items-center">
            <h6>Ramez Shopping</h6>
          </div>
        </header>

        <ul>
          <li className="list">
            <span className="quantity">1</span>ALMARAI DBLE CHOCOLATE MILK SH{" "}
            <span className="taka">1.500</span>{" "}
          </li>
          <li>
            <span className="quantity">1</span>NIDO MILK POWDER POUCH 2.25KG
            <span className="taka">2.000</span>{" "}
          </li>
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
            3.500
            <span style={{ fontSize: "13px" }}>BHD</span>
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
            0.600
            <span style={{ fontSize: "13px" }}>BHD</span>
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
          <p style={{ color: "#E3424B", fontSize: "22px", fontWeight: "bold" }}>
            4.100
            <span
              style={{
                fontSize: "13px",
                color: "black",
                fontWeight: "lighter",
              }}
            >
              BHD
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
          <h4 style={{ fontWeight: "bold" }}>Credit card</h4>
          <div style={{ display: "flex", marginTop: "2%" }}>
            {/* <Image src={cardlogo} ></Image> */}
            {/* <div style={{width:"15px",height:"15px",borderRadius:"100%",background:"silver"}}></div>
          <div style={{width:"15px",height:"15px",marginLeft:"2px",borderRadius:"100%",background:"silver"}}></div>
          <div style={{width:"15px",height:"15px",marginLeft:"2px",borderRadius:"100%",background:"silver"}}></div>
          <div style={{width:"15px",height:"15px",marginLeft:"2px",borderRadius:"100%",background:"silver"}}></div> */}
            <p style={{ color: "silver", fontSize: "16px", marginTop: "-5px" }}>
              1211
            </p>
          </div>
        </div>

        <div className="d-flex justify-content-between">
          <i class="fas fa-user-plus profile-icon"></i>
          <Button className="new-order-btn"> Place new order</Button>
        </div>
      </Modal.Body>
      <Modal.Footer style={{ border: "none" }}></Modal.Footer>
    </Modal>
  );
};

export default Prev_Order_Details;
