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
import "../../css/change_password.css";

const ChangePassword = (props) => {
  const { t, i18n } = useTranslation();

  useEffect(() => {
    let language = localStorage.getItem("language");
    if (language && language.length !== 0) {
      i18n.changeLanguage(language);
    }
  }, []);

  const formik = useFormik({
    initialValues: {
      user_id: localStorage.getItem("user_id"),
      npassword: "",
      cpassword: "",
    },
    validationSchema: Yup.object({
        npassword: Yup.string()
        .min(6, "Aleast 6 characters")
        .required("Required"),
        cpassword: Yup.string()
        .oneOf([Yup.ref('npassword'), null], 'Passwords must match')
      .required('Password confirm is required'),
    }),
    onSubmit: (values) => {
      console.log(values);
      axios
      .post(`https://ristsys.store/api/EditUserPassword`, values)
      .then((res) => {
          console.log(res);
          if(res.data.status===1){
            let myColor = { background: "#0E1717", text: "#FFFFFF" };
            notify.show("Succesfully updated!", "success", 6000, myColor);
            props.handleClose218();
          }else{
            let myColor = { background: "red", text: "#FFFFFF" };
            notify.show("Something went wrong!", "error", 6000, myColor);
          }
      })
      .catch(function (error) {
      });
    },
  });

  return (
    <Modal
      className="Change-password"
      show={props.show218}
      onHide={props.handleClose218}
    >
      <Modal.Header style={{ border: "none", outline: "none" }} closeButton>
        <Modal.Title className="mt-3">Change password?</Modal.Title>
      </Modal.Header>
      <p>Please enter your New Password</p>
      <form onSubmit={formik.handleSubmit} method="post">
        <Modal.Body style={{ border: "none" }}>
          <Row>
            <Col xs={2} sm={2} md={2} className="icon">
              <i class="fas fa-key" style={{ fontSize: "19px" }}></i>
            </Col>
            <Col xs={10} sm={10} md={10} className="d-flex flex-column">
              <label htmlFor="npassword">{t("login.Password")}</label>
              <input
                id="npassword"
                name="npassword"
                type="password"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.password}
              />
              {formik.touched.npassword && formik.errors.npassword ? (
                <div className="error_msg">{formik.errors.npassword}</div>
              ) : null}
            </Col>
          </Row>
          <Row className="top-spacing">
            <Col xs={2} sm={2} md={2} className="icon">
              <i class="fas fa-key" style={{ fontSize: "19px" }}></i>
            </Col>
            <Col xs={10} sm={10} md={10} className="d-flex flex-column">
              <label htmlFor="cpassword">Confirm Password</label>
              <input
                id="cpassword"
                name="cpassword"
                type="password"
                onChange={formik.handleChange}
                value={formik.values.password}
              />
              {formik.touched.cpassword && formik.errors.cpassword ? (
                <div className="error_msg">{formik.errors.cpassword}</div>
              ) : null}
            </Col>
          </Row>
        </Modal.Body>
        <Modal.Footer className="mt-4" style={{ border: "none" }}>
          <Button type="submit" className="continue-btn">
            Continue
          </Button>
          {/* <Button onClick={props.handleClose218} className="continue-btn">
            Continue
          </Button> */}
        </Modal.Footer>
      </form>
    </Modal>
  );
};

export default ChangePassword;
