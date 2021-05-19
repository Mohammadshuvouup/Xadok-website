import React, { useState, useEffect } from "react";
// import Notifications, {notify} from 'react-notify-toast';
import { Button, Modal, Container } from "react-bootstrap";
import { Trans, useTranslation } from "react-i18next";
import "../../css/after_login.css";

const AfterLoginPopUp = (props) => {
  const { t, i18n } = useTranslation();

  useEffect(() => {
    let language = localStorage.getItem("language");

    if (language && language.length !== 0) {
      i18n.changeLanguage(language);
    }
  }, []);

  return (
    <Modal className="profile" show={props.show5} onHide={props.handleClose5}>
      <Modal.Header style={{ border: "none", outline: "none" }} closeButton>
        <Modal.Title className="mt-3 ml-3">Hi Talal...</Modal.Title>
      </Modal.Header>
      <p className="pl-4 ml-2">Save your time and let's shop for you </p>
      <Modal.Body style={{ border: "none" }}>
        <h4>Profile</h4>
        <h4>My Addresses</h4>
        <h4>Favourites</h4>
        <h4>My Orders</h4>
        <h4>Change Password</h4>
        <h4>Setting</h4>
      </Modal.Body>
      <Modal.Footer style={{ border: "none" }}>
        <Button onClick={props.handleClose5} className="p-3 logout-btn">
          Logout
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default AfterLoginPopUp;
