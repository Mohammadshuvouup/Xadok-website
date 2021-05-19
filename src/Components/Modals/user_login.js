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
// import SignUp from './user_register2'SignUpForm

const UserLoginModal = (props) => {
  const { t, i18n } = useTranslation();

  useEffect(() => {
    let language = localStorage.getItem("language");

    // console.log("LANGUAGE SELECTED", language);

    if (language && language.length !== 0) {
      i18n.changeLanguage(language);
    }
  }, []);

  const [show1, setShow1] = useState(false);
  const [show3, setShow3] = useState(false);
  const [show5, setShow5] = useState(false);
  const [show_reg, setShow_reg] = useState(false);

  const [show118, setShow118] = useState(false);

  const handleClose1 = () => props.setShow1(false);

  const handleShow1 = () => setShow1(true);

  const handleShow3 = () => setShow3(true);

  const handleShow5 = () => setShow5(true);
  const handleShow_reg = () => setShow_reg(true);
  const handleClose_reg = () => setShow_reg(false);

  const handleShow118 = () => {
    props.setShow118(true);
    // handleClose1();
  }

  const [code, setCode] = useState("");
  const [mobileNo, setMobileNo] = useState("");
  const [password, setPassword] = useState("");
  const [msgPassword, setMsgPassword] = useState("");
  const [msgMobile, setMsgMobile] = useState("");

  const [info, setInfo] = useState({
    mobile: "",
    password: "",
    code: "",
  });

  const phoneRegExp =
    /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;
  const formik = useFormik({
    initialValues: {
      mobile: "",
      password: "",
    },
    validationSchema: Yup.object({
      mobile: Yup.string()
        .matches(phoneRegExp, "Phone number is not valid")
        .required("Required"),
      password: Yup.string()
        .max(6, "Must be 6 characters or less")
        .required("Required"),
    }),
    onSubmit: (values) => {
      console.log("submitting");
      // console.log(JSON.stringify(values, null, 2));

      setInfo({
        mobile: values.mobile,
        password: values.password,
        code: code,
      });

      axios
        .post(`https://ristsys.store/api/LoginUser`, info)
        .then((res) => {
          console.log(res);
          //   console.log(res.data);
        })
        .catch(function (error) {
          if (error.response) {
            console.log(error.response.data);
            console.log(error.response.status);
            console.log(error.response.headers);
          }
        });

      props.setShow1(false);
    },
  });

  const loggedIn = () => {
    setMsgMobile("")
    setMsgPassword("")
    if(mobileNo==""){
      setMsgMobile("Mobile number is required!")
    }else if(password==""){
      setMsgPassword("Password is required!")
    }else if(password.length<6){
      setMsgPassword("Password should be atleast 6 character!")
    }else{
      setMsgMobile("")
      setMsgPassword("")
      let params = {
        mobile: mobileNo,
        password: password,
        code: localStorage.getItem("country_code"),
      };
      // console.log(params);
      axios
        .post(`https://ristsys.store/api/LoginUser`, params)
        .then((res) => {
          console.log(res);
            // let myColor = { background: "#0E1717", text: "#FFFFFF" };
            // notify.show("Succesfully logged in!", "success", 6000, myColor);
            // handleClose1();
            // window.location.reload()
            if (res.data.status == 0) {
              setMsgPassword(res.data.message);
          } else {
              // console.log(res.data.data.user_name);
              setMsgPassword("");
              localStorage.setItem("user_id",res.data.data.user.user_id)
              localStorage.setItem("user_mobile",res.data.data.user.user_mobile)
              localStorage.setItem("user_name",res.data.data.user.user_name)
              localStorage.setItem("user_email",res.data.data.user.user_email)
              localStorage.setItem("role_id",res.data.data.user.role_id)
              localStorage.setItem("state_id",res.data.data.user.state_id)
              localStorage.setItem("region_id",res.data.data.user.region_id)
              localStorage.setItem("user_street",res.data.data.user.user_street)
              localStorage.setItem("user_lat",res.data.data.user.user_lat)
              localStorage.setItem("user_lng",res.data.data.user.user_lng)
              localStorage.setItem("user_img",res.data.data.user.user_img)
              let myColor = { background: "#0E1717", text: "#FFFFFF" };
              notify.show("Succesfully logged in!", "success", 6000, myColor);
              handleClose1();
              window.location.reload();
          }
        })
        .catch(function (error) {
          if (error.response) {
            console.log(error.response.data);
            console.log(error.response.status);
            console.log(error.response.headers);
          }
        });
    }
  };

  const handelClick = () => {
    handleShow_reg();
    handleClose1();
  };

  const handlerChangeMobile = (e) => {
    setMobileNo(e.target.value)
  }
  const handlerChangePassword = (e) => {
    setPassword(e.target.value)
  }

  let country_code = localStorage.getItem("country_code");
  if (country_code == null) {
    axios.get(`https://ristsys.store/api/GetSettings`).then((res) => {
      // console.log(res.data);
      // console.log("-2-")
      localStorage.setItem("country_code", res.data.data.country_code);
      localStorage.setItem("country_currency", res.data.data.country_currency);
      localStorage.setItem("country_id", res.data.data.default_country.country_id);
      localStorage.setItem("country_name", res.data.data.default_country.country_name);
      localStorage.setItem("country_name_en", res.data.data.default_country.country_name_en);
      localStorage.setItem("facebook", res.data.data.facebook);
      localStorage.setItem("instagram", res.data.data.instagram);
      localStorage.setItem("twitter", res.data.data.twitter);
      // setCode(res.data.data.country_code);
    });
  }

  return (
    <React.Fragment>
      <Notifications />
      <Modal className="welcome" onHide={handleClose1} show={props.show1}>
        <Modal.Header closeButton>
          <Modal.Title className="mt-3">{t("login.Welcome")}</Modal.Title>
        </Modal.Header>
        <p className="pl-4 ml-3" style={{ color: "silver", fontSize: "12px" }}>
          {t("login.Sign")}
        </p>

        <form className="sign_in_form" onSubmit={formik.handleSubmit}>
          <div className="container-padding">
            <Row>
              <Col xs={2} sm={2} md={2} className="icon">
                <i class="fas fa-phone" style={{ fontSize: "19px" }}></i>
              </Col>
              <Col xs={10} sm={10} md={10} className="d-flex flex-column">
                <label htmlFor="mobile">
                  {t("Personal_information.Mobile-Number")}
                </label>

                <input
                  id="mobile"
                  name="mobile"
                  type="tel"
                  onChange={(e) => handlerChangeMobile(e)}
                  maxLength="15"
                  required
                />
                <div className="error_msg">{msgMobile}</div>
              </Col>
            </Row>

            <Row className="top-spacing">
              <Col xs={2} sm={2} md={2} className="icon">
                <i class="fas fa-key" style={{ fontSize: "19px" }}></i>
              </Col>
              <Col xs={10} sm={10} md={10} className="d-flex flex-column">
                <label htmlFor="password">{t("login.Password")}</label>
                <input
                  id="password"
                  name="password"
                  type="password"
                  onChange={(e) => handlerChangePassword(e)}
                  minLength="6"
                  required
                />
                <div className="error_msg">{msgPassword}</div>
              </Col>
            </Row>
            <Button
              className="btn-danger btn-block p-3 top-spacing"
              onClick={loggedIn}
              type="submit"
              value="submit"
            >
              {t("login.Sign-in")}
            </Button>
            <h6 onClick={handleShow118} className="mt-4">
              {t("login.Forgot-password")}?{" "}
            </h6>

            <Button
              className="btn-primary btn-block p-3 mt-4 top-spacing create_account_btn"
              onClick={handelClick}
            >
              {" "}
              {t("login.Create-an-account")}
            </Button>
          </div>
        </form>
      </Modal>

      <SignUpForm
        show_reg={show_reg}
        setShow_reg={setShow_reg}
        handleShow_reg={handleShow_reg}
        handleClose_reg={handleClose_reg}
      />
    </React.Fragment>
  );
};

export default UserLoginModal;
