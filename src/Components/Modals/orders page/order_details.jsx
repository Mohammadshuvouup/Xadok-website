import React from "react";
import { Trans, useTranslation } from "react-i18next";
import { Row, Col, Modal, Button, Image, ProgressBar } from "react-bootstrap";
import "../../../css/order.css";
const Order_Details = (props) => {
  return (
    <Modal
      show={props.show119}
      className="order-details"
      onHide={props.handleClose119}
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
        <div className="delivary-start d-flex">
          {/* <div className="pick-up">  */}
          <div className="d-flex estimatedarrival">
            <i
              className="far fa-clock"
              style={{
                color: "yellow",
                fontSize: "28px",
                marginBottom: "10px",
              }}
            ></i>
            <div className="arrival-time d-flex flex-column">
              <p>Estimated Arrival</p>
              <h3>
                <b>35 min</b>
              </h3>
            </div>
          </div>

          <div className="d-flex distance">
            <i
              className="far fa-map"
              style={{
                color: "yellow",
                fontSize: "28px",
                marginBottom: "10px",
              }}
            ></i>
            <div className="arrival-time d-flex flex-column">
              <p>Distance</p>
              <h3>
                <b>3.6 km</b>
              </h3>
            </div>
          </div>
          {/* </div> */}
        </div>
      </Modal.Header>
      <div className="d-flex justify-content-around mt-4 progressbar">
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
          style={{ width: "60%", height: "6px", background: "#BDBDBD" }}
        />
      </div>

      <Modal.Body style={{ border: "none" }}>
        <ul>
          <li>
            {" "}
            <i className="far fa-clock delivary-clock"></i>
            <span className="delivary"> Delivery</span>
          </li>
        </ul>

        <ul>
          <li>
            {" "}
            <i className="fas fa-check check"></i>On the way
            <span className="am">12:48 am</span>
          </li>
        </ul>

        <ul>
          <li>
            {" "}
            <i className="fas fa-check check"></i>Order is ready
            <span className="am">12:48 am</span>
          </li>
        </ul>

        <div className="mt-3  d-flex justify-content-between see-more">
          <p>See more</p>
          <i className="fas fa-chevron-down down-arrow"></i>
        </div>

        <div className="d-flex justify-content-between">
          <i class="far fa-comment-alt chat-icon"></i>
          <Button className="call-btn"> Call to</Button>
        </div>
      </Modal.Body>

      <Modal.Footer
        style={{ border: "none", marginLeft: "-4%", width: "100%" }}
      ></Modal.Footer>
    </Modal>
  );
};

export default Order_Details;
