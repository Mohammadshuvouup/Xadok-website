import React, { useState, useEffect } from "react";
import { Button, Modal, Row, Col } from "react-bootstrap";
import { Trans, useTranslation } from "react-i18next";
import "../../css/delivery-time.css";
// import './../css/opencart.css'

const API_PREFIX_URL = `https://deliveryxadok.s3.us-east-2.amazonaws.com/`;

const DeliveryTime = (props) => {
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

  const [show4, setShow4] = useState(false);
  const handleShow4 = () => setShow4(true);
  const handleClose4 = () => setShow4(false);

  const [show02, setShow02] = useState(false);
  const handleShow02 = () => setShow02(true);
  const handleClose02 = () => setShow02(false);

  return (
    <Modal
      className=" delivery-time-popup"
      show={props.show02}
      onHide={props.handleClose02}
    >
      <Modal.Header closeButton>
        <Modal.Title>Delivery Time</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>
          Available delivery times depend on the number of times in the order
          And the number of shoppers and conductors available all the time{" "}
        </p>

        <div className="days-list d-flex">
          <div className="schedule-day active">
            <p className="day">Tuesday</p>
            <p className="date"> 2021-05-25</p>
          </div>
          <div className="schedule-day">
            <p className="day">Tuesday</p>
            <p className="date"> 2021-05-25</p>
          </div>
          <div className="schedule-day">
            <p className="day">Tuesday</p>
            <p className="date"> 2021-05-25</p>
          </div>
          <div className="schedule-day">
            <p className="day">Tuesday</p>
            <p className="date"> 2021-05-25</p>
          </div>
          <div className="schedule-day">
            <p className="day">Tuesday</p>
            <p className="date"> 2021-05-25</p>
          </div>
          <div className="schedule-day">
            <p className="day">Tuesday</p>
            <p className="date"> 2021-05-25</p>
          </div>
          <div className="schedule-day">
            <p className="day">Tuesday</p>
            <p className="date"> 2021-05-25</p>
          </div>
          <div className="schedule-day">
            <p className="day">Tuesday</p>
            <p className="date"> 2021-05-25</p>
          </div>
        </div>

        <h4 className="mt-4">Quick Delivery</h4>
        <ul>
          <li>
            Fast Delivery<span>1.000 BDH</span>
          </li>
        </ul>

        <h4>Schedule delivery</h4>
        <ul>
          <li>
            09:00 AM - 11:00 AM<span>1.000 BDH</span>
          </li>
          <li>
            09:00 AM - 11:00 AM<span>1.000 BDH</span>
          </li>
          <li>
            09:00 AM - 11:00 AM<span>1.000 BDH</span>
          </li>
          <li>
            09:00 AM - 11:00 AM<span>1.000 BDH</span>
          </li>
          <li>
            09:00 AM - 11:00 AM<span>1.000 BDH</span>
          </li>
          <li>
            09:00 AM - 11:00 AM<span>1.000 BDH</span>
          </li>
        </ul>
      </Modal.Body>
      <Modal.Footer>
        <Button className="confirm-btn" onClick={props.handleClose02}>
          CONFIRM
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default DeliveryTime;
