import React, { useState, useEffect } from "react";
import Notifications, { notify } from "react-notify-toast";
import { Row, Col, Button, Modal, Container } from "react-bootstrap";
import "../../css/userLogin.css";
import { useFormik } from "formik";
import * as Yup from "yup";
import Service from "../../services/service";
import axios from "axios";
import { Link } from "react-router-dom";
import SignUpForm from "./user_register2";
import { Trans, useTranslation } from "react-i18next";
import "../../css/forgot_password.css";

const ForgotPassword = (props) => {
  console.log(props);
  const { t, i18n } = useTranslation();
  const [msgEmail, setMsgEmail] = useState("");
  const [email, setEmail] = useState("");
  const [showModal, setShowModal] = useState(props.show118);

  useEffect(() => {
    let language = localStorage.getItem("language");

    // console.log("LANGUAGE SELECTED", language);

    if (language && language.length !== 0) {
      i18n.changeLanguage(language);
    }
  }, []);

  const [info, setInfo] = useState({
    mobile: "",
    password: "",
    code: "",
  });

  const phoneRegExp =
    /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;
  const formik = useFormik({
    initialValues: {
      email: "",
    },
    validationSchema: Yup.object({
      email: Yup.string().email("Invalid email").required("Required"),
    }),
    onSubmit: (values) => {
      setInfo({
        email: values.email,
      });
    },
  });

  const handleChangeEmail = (e) => {
    setEmail(e.target.value);
  }

  const [isModalOpen, setIsModalOpen] = useState(true);
  const handleToggle = () => {
    setIsModalOpen(false)
  }

  const forgotPasswordService = () => {
      setMsgEmail("")
      if(email==""){
        setMsgEmail("Email address is required!")
      }else{
        let params = {
          recover: email,
        };
        axios
        .post(`https://ristsys.store/api/ForgetPassword`, params)
        .then((res) => {
            if (res.status == 0) {
              setMsgEmail(res.message);
          } else {
              setMsgEmail("");
              let myColor = { background: "#0E1717", text: "#FFFFFF" };
              notify.show("Recovery link successfully sent on your registered email address!", "success", 6000, myColor);
              setShowModal(false);
          }
        })
        .catch(function (error) {
          if (error.response) {
          }
        });
      }
  }

  return (
    <Modal
      className="forgot-password"
      show={props.show118}
      onHide={props.handleClose118}
      onRequestHide={handleToggle}
    >
      <Modal.Header style={{ border: "none", outline: "none" }} closeButton>
        <Modal.Title className="mt-3">Forgot password?</Modal.Title>
      </Modal.Header>
      <p>Please enter your email address to continue</p>

      <Modal.Body style={{ border: "none" }}>
        <Row>
          <Col xs={2} sm={2} md={2} className="icon">
            <i class="far fa-envelope" style={{ fontSize: "19px" }}></i>
          </Col>
          <Col xs={10} sm={10} md={10} className="d-flex flex-column">
            <label htmlFor="email">
              {t("Personal_information.Email-Address")}
            </label>
            <input
              id="email"
              name="email"
              type="email"
              onChange={(e) => handleChangeEmail(e)}
            />
            <div className="error_msg">{msgEmail}</div>
          </Col>
        </Row>
      </Modal.Body>
      <Modal.Footer className="mt-4" style={{ border: "none" }}>
        <Button onClick={forgotPasswordService} className="continue-btn">
          Continue
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ForgotPassword;
