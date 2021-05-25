import React from "react";
import { Trans, useTranslation } from "react-i18next";
import { Row, Col, Modal, Button, Image } from "react-bootstrap";
import "../../../css/order.css";
const Prev_Order_Details = (props) => {
  return (
    <Modal
      className="orderpre"
      style={{
        border: "none",
        marginLeft: "63.9%",
        width: "510px",
        marginTop: "-2.5%",
        height: "120vh",
      }}
      show={props.show120}
      onHide={props.handleClose120}
    >
      <Modal.Header style={{ border: "none" }} closeButton>
        <Modal.Title
          style={{
            border: "none",
            fontWeight: "bold",
            fontSize: "14px",
            paddingLeft: "22px",
            paddingTop: "15px",
          }}
        >
          300 Post Street San Francisco,CA
        </Modal.Title>
      </Modal.Header>
      <Modal.Body style={{ border: "none" }}>
        <h3
          style={{ fontWeight: "bold", paddingLeft: "22px", paddingTop: "5px" }}
        >
          Ramez Shopping
        </h3>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            marginLeft: "5%",
            marginTop: "9%",
          }}
        >
          <Button
            style={{
              border: "none",
              background: "#F6F6F6",
              fontSize: "13px",
              fontWeight: "bold",
              color: "grey",
            }}
          >
            1
          </Button>
          <h6 style={{ fontSize: "14px", marginLeft: "4%" }}>
            ALMARAI DBLE CHOCOLATE MILK SH
          </h6>
          <p
            style={{
              color: "silver",
              paddingTop: "4%",
              paddingLeft: "50px",
              fontSize: "21px",
            }}
          >
            1.500 <span style={{ fontSize: "13px" }}>BHD</span>
          </p>
        </div>
        <div
          style={{ display: "flex", alignItems: "center", marginLeft: "5%" }}
        >
          <Button
            style={{
              border: "none",
              background: "#F6F6F6",
              fontSize: "13px",
              fontWeight: "bold",
              color: "grey",
            }}
          >
            1
          </Button>
          <h6 style={{ fontSize: "14px", marginLeft: "4%" }}>
            NIDO MILK POWDER POUCH 2.25KG
          </h6>
          <p
            style={{
              color: "silver",
              marginTop: "-2%",
              paddingLeft: "57px",
              fontSize: "21px",
            }}
          >
            2.000 <span style={{ fontSize: "13px" }}>BHD</span>
          </p>
        </div>
        <div
          style={{
            width: "90%",
            marginTop: "7%",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            marginLeft: "5%",
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
            width: "90%",
            marginTop: "1%",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            marginLeft: "5%",
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
            width: "90%",
            marginTop: "1%",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            marginLeft: "5%",
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
          style={{
            width: "90%",
            marginTop: "1%",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            marginLeft: "5%",
          }}
        >
          <h4 style={{ fontWeight: "bold" }}>Credit card</h4>
          <div style={{ display: "flex", marginTop: "2%" }}>
            <div
              style={{
                width: "15px",
                height: "15px",
                borderRadius: "100%",
                background: "silver",
              }}
            ></div>
            <div
              style={{
                width: "15px",
                height: "15px",
                marginLeft: "2px",
                borderRadius: "100%",
                background: "silver",
              }}
            ></div>
            <div
              style={{
                width: "15px",
                height: "15px",
                marginLeft: "2px",
                borderRadius: "100%",
                background: "silver",
              }}
            ></div>
            <div
              style={{
                width: "15px",
                height: "15px",
                marginLeft: "2px",
                borderRadius: "100%",
                background: "silver",
              }}
            ></div>
            <p style={{ color: "silver", fontSize: "16px", marginTop: "-5px" }}>
              1211
            </p>
          </div>
        </div>
        <Button
          style={{
            marginTop: "8%",
            width: "80px",
            marginLeft: "5%",
            height: "8vh",
            fontSize: "20px",
            border: "none",
            borderRadius: "7px",
            background: "#F6D56E",
            color: "black",
          }}
        >
          <i class="far fa-comment-alt"></i>
        </Button>
        <Button
          className="orderlast"
          style={{
            marginTop: "8%",
            width: "310px",
            height: "8vh",
            marginLeft: "5%",
            border: "none",
            background: "#223142",
            borderRadius: "8px",
          }}
        >
          Place new order
        </Button>
      </Modal.Body>
      <Modal.Footer style={{ border: "none" }}></Modal.Footer>
    </Modal>
  );
};

export default Prev_Order_Details;
