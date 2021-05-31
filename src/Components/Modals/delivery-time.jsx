import React, { useState, useEffect } from "react";
import { Button, Modal, Row, Col } from "react-bootstrap";
import { Trans, useTranslation } from "react-i18next";
import "../../css/delivery-time.css";
import axios from "axios";
import Moment from "moment";
// import './../css/opencart.css'

const API_PREFIX_URL = `https://deliveryxadok.s3.us-east-2.amazonaws.com/`;

const DeliveryTime = (props) => {
//   console.log("DeliveryTime");
//   console.log(props);
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
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedDateId, setSelectedDateId] = useState(null);
  const [selectedTime, setSelectedTime] = useState(null);
  const [selectedTimeId, setSelectedTimeId] = useState(null);
  const [normalTimes, setNormalTimes] = useState(null);

  useEffect(() => {
    // console.log("loaded");
    // getDates();
  }, []);

  const handleDate = (dateId) => {
    // console.log(dateId);
    setSelectedDateId(dateId);
    let time = props.dates.filter(function (el) {
      return el.delivery_date_id === dateId;
    });
    if (time !== null && time.length > 0) {
    //   console.log(time);
      if (time.normal_timings !== null && time[0].normal_timings.length > 0) {
        setNormalTimes(time[0].normal_timings);
      }
      setSelectedDate(time[0].delivery_date);
    }
    // console.log(time);
  };

  const handleTime = (time) => {
    // console.log(time);
    if (time != null) {
      setSelectedTimeId(time.timing_id);
      setSelectedTime(time);
    }
  };

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

        <div className="days-list d-flex" style={{display: "block !important"}}>
          {props.dates != null && props.dates.length > 0
            ? props.dates.map((date, i) => {
                return selectedDateId === date.delivery_date_id ? (
                  <div
                    key={i}
                    className="schedule-day active"
                    onClick={() => handleDate(date.delivery_date_id)}
                  >
                    <p className="day">
                      {Moment(date.delivery_date).format("dddd")}
                    </p>
                    <p className="date">{date.delivery_date}</p>
                  </div>
                ) : (
                  <div
                    key={i}
                    className="schedule-day"
                    onClick={() => handleDate(date.delivery_date_id)}
                  >
                    <p className="day">
                      {Moment(date.delivery_date).format("dddd")}
                    </p>
                    <p className="date">{date.delivery_date}</p>
                  </div>
                );
              })
            : ""}
        </div>

        {/* <h4 className="mt-4">Quick Delivery</h4>
        <ul>
          <li>
            Fast Delivery<span>1.000 BDH</span>
          </li>
        </ul> */}

        <h4 style={{ marginTop: "13px" }}>Schedule delivery</h4>
        <ul>
          {normalTimes != null && normalTimes.length > 0
            ? normalTimes.map((time, index) => {
                // console.log(time);
                return selectedTimeId === time.timing_id ? (
                  <li className="active" key={index} onClick={() => handleTime(time)}>
                    {Moment("2021-05-21 " + time.start_time).format("hh:mm a")}{" "}
                    -{" "}
                    {Moment("2021-05-21 " + time.end_time).format("hh:mm a")}
                    <span>
                      {time.delivery_cost}{" "}
                      {localStorage.getItem("country_currency")}
                    </span>
                  </li>
                ) : (
                  <li key={index} onClick={() => handleTime(time)}>
                    {Moment("2021-05-21 " + time.start_time).format("hh:mm a")}{" "}
                    -{" "}
                    {Moment("2021-05-21 " + time.end_time).format("hh:mm a")}
                    <span>
                      {time.delivery_cost}{" "}
                      {localStorage.getItem("country_currency")}
                    </span>
                  </li>
                );
              })
            : ""}
        </ul>
      </Modal.Body>
      <Modal.Footer>
        <Button
          className="confirm-btn"
          onClick={() =>
            props.handleClose02(selectedDate, selectedDateId, selectedTime)
          }
        >
          CONFIRM
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default DeliveryTime;
