import React, { useState, useEffect } from "react";
import { Modal, Button, Form, Row, Col } from "react-bootstrap";
import { Trans, useTranslation } from "react-i18next";
import "../../../css/setting_paymentmethods.css";

const PaymentMethods = (props) => {
  const { t, i18n } = useTranslation();

  useEffect(() => {
    let language = localStorage.getItem("language");

    // console.log("LANGUAGE SELECTED", language);

    if (language && language.length !== 0) {
      i18n.changeLanguage(language);
    }
  }, []);
  const [show3, setShow3] = useState(false);

  return (
    <Modal
      show={props.shows3}
      className="main-box"
      onHide={props.handleCloses3}
      animation={false}
    >
      <Modal.Header closeButton>
        <Modal.Title>{t("Payment_methods.Payment-methods")}</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <Button className="option" size="lg" block>
          <i class="far fa-credit-card"></i>
        </Button>

        <Row className="currency-options justify-content-between">
          <div className="btn-bg">
            <i class="fas fa-dollar-sign"></i>
          </div>
          <div className="btn-bg">
            <i class="fab fa-paypal"></i>
          </div>
        </Row>
      </Modal.Body>

      <Modal.Footer>
        <Button className="footer" size="lg" block>
          {t("Marketing_preferences.Update-perferences")}
        </Button>
      </Modal.Footer>
    </Modal>
  );
};
export default PaymentMethods;
