import React, { useState, useEffect } from "react";
import Notifications, { notify } from "react-notify-toast";
import { Row, Col, Button, Modal, Container } from "react-bootstrap";
import { useFormik } from "formik";
import * as Yup from "yup";
import "../../css/signup.css";
import { Trans, useTranslation } from "react-i18next";
import UserLoginModal from "../Modals/user_login";
import axios from "axios";

const SignUpForm = (props) => {
  const { t, i18n } = useTranslation();

  useEffect(() => {
    let language = localStorage.getItem("language");

    // console.log("LANGUAGE SELECTED", language);

    if (language && language.length !== 0) {
      i18n.changeLanguage(language);
    }
  }, []);

  const [show_login, setShow_login] = useState(false);
  const handleShow_login = () => setShow_login(true);
  const handleClose_login = () => setShow_login(false);
  const [mobile_no, setmobile_no] = useState("");
  const [message, setMessage] = useState("");
  const country_code = localStorage.getItem("country_code");
  const [showForm1, setShowForm1] = useState(true);
  const [showForm2, setShowForm2] = useState(false);
  const [showMob, setShowMob] = useState(true);
  const [showOtp, setShowOtp] = useState(false);
  const [showBtn, setShowBtn] = useState(false);
  const [showOtpBtn, setShowOtpBtn] = useState(true);
  // const handleShow_reg2 = () => setShow_reg2(true);
  const [otpCode, setOtpCode] = useState(null);
  const [txtOtp, setTxtOtp] = useState(null);
  const [msgOtp, setMsgOtp] = useState("");
  const [msgMobile, setMsgMobile] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [msgName, setMsgName] = useState("");
  const [msgEmail, setMsgEmail] = useState("");
  const [msgPassword, setMsgPassword] = useState("");

  let reg1_Params = {
    mobile: "",
    code: country_code,
  };

  const handleMobile = (e) => {
      setmobile_no(e.target.value);
  };

  const handlerChangeOtp = (e) => {
    setTxtOtp(e.target.value);
  };

  const serviceGetOtp = () => {
      
    setMsgMobile("");
      if(mobile_no == ""){
        setMsgMobile("Please enter mobile number!");
      }else{
            reg1_Params = {
                mobile: mobile_no ? mobile_no : "",
                code: localStorage.getItem("country_code"),
            };
            axios
            .post(`https://ristsys.store/api/registerStepOne`, reg1_Params)
            .then((res) => {
                console.log("reg data", res.data);
                if (res.data.status == 0) {
                    setMsgMobile(res.data.message);
                    // setMessage(res.data.message);
                } else {
                setOtpCode(res.data.data);
                setShowOtp(true);
                setShowBtn(true);
                setShowMob(false);
                setShowOtpBtn(false);
                setMessage("");
                }
            })
            .catch((error) => {
                console.log(error);
            });
    }
    // props.handleClose_reg();
    // handleShow_reg2();
  };

  const serviceVerifyOTP = () => {
    console.log(otpCode);
    console.log(txtOtp);
    if (txtOtp != otpCode) {
      setMsgOtp("Please enter valid OTP.");
    } else {
      setMsgOtp("");
      setShowForm2(true);
      setShowForm1(false);
    }
  };

  const [info, setInfo] = useState({
    mobile: "",
    password: "",
    code: "",
  });

  const phoneRegExp =
    /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      name: Yup.string()
        .min(2, "Too Short!")
        .max(50, "Too Long!")
        .required("Required"),
      mobile: Yup.string()
        .matches(phoneRegExp, "Phone number is not valid")
        .required("Required"),
      password: Yup.string()
        .max(6, "Must be 6 characters or less")
        .required("Required"),
      email: Yup.string().email("Invalid email").required("Required"),
    }),
    onSubmit: (values) => {
      console.log("submitting");

      setInfo({
        name: values.name,
        email: values.email,
        password: values.password,
      });
    },
  });

  const handleSignIn = () => {
    props.handleClose_reg2();
    handleShow_login();
  };

  const handleModalClose = () => {
    props.handleClose_reg();
    setShowForm1(true);
    setShowForm2(false);
    setShowBtn(false);
    setShowOtpBtn(true);
    setShowOtp(false);
    setShowMob(true);
  };

  const handlerChangeName = (e) => {
    setName(e.target.value);
    // console.log(e.target.value)
  };
  const handlerChangeEmail = (e) => {
    setEmail(e.target.value);
    // console.log(e.target.value)
  };
  const handlerChangePassword = (e) => {
    setPassword(e.target.value);
    // console.log(e.target.value)
  };
  const registeredAccount = () => {
      setMsgName("")
      setMsgEmail("")
      setMsgPassword("")
      if(name==""){
          setMsgName("Name is required!")
      }else if(email==""){
        setMsgEmail("Email is required!")
      }else if(password==""){
        setMsgPassword("Password is required!")
      }else if(password.length<6){
        setMsgPassword("Password should be atleast 6 character!")
      }else{
        setMsgName("")
        setMsgEmail("")
        setMsgPassword("")
        let params = {
            mobile: mobile_no,
            name: name,
            email: email,
            password: password,
            code: localStorage.getItem("country_code"),
        };
        // console.log(params);
        axios
        .post(`https://ristsys.store/api/registerStepTwo`, params)
        .then((res) => {
            // console.log(res);
            // console.log("reg data", res.data);
            if (res.data.status == 0) {
                setMsgPassword(res.data.message);
            } else {
                localStorage.setItem("user_id",res.data.data.user_id)
                localStorage.setItem("user_mobile",res.data.data.user_mobile)
                localStorage.setItem("user_name",res.data.data.user_name)
                localStorage.setItem("user_email",res.data.data.user_email)
                localStorage.setItem("role_id",res.data.data.role_id)
                localStorage.setItem("state_id",res.data.data.state_id)
                localStorage.setItem("region_id",res.data.data.region_id)
                localStorage.setItem("user_street",res.data.data.user_street)
                localStorage.setItem("user_lat",res.data.data.user_lat)
                localStorage.setItem("user_lng",res.data.data.user_lng)
                localStorage.setItem("user_img",res.data.data.user_img)
                setMsgPassword("");
                setShowForm2(false);
                setShowForm1(false);
                let myColor = { background: "#0E1717", text: "#FFFFFF" };
                notify.show("Account created succesfully!", "success", 6000, myColor);
                props.handleClose_reg();
                window.location.reload();
            }
        })
        .catch((error) => {
            console.log(error);
        });
      }
    // handleModalClose();
  };

  return (
    <React.Fragment>
      <Notifications />
      <Modal
        className="signup_modal"
        show={props.show_reg}
        onHide={handleModalClose}
      >
        <Modal.Header closeButton>
          <Modal.Title className="reg_model">
            {t("login.Create-an-account")}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className="reg_body">
          {showForm1 && (
            <div className="reg1-contents">
              {showMob && (
                <>
                  <p>
                    {" "}
                    {t("reg.Please-enter-your-mobile-number-create-an-account")}
                  </p>
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
                        onChange={(e) => handleMobile(e)}
                        maxLength="15"
                        required
                      />
                      <div className="error_msg">{msgMobile}</div>
                    </Col>
                  </Row>
                </>
              )}

              {showOtp && (
                <>
                  <p> {t("reg.Please-enter-your-OTP-to-verify")}</p>
                  <Row className="justify-content-center">
                    <Col xs={2} sm={2} md={2} className="icon">
                      <i
                        class="fas fa-user-check"
                        style={{ fontSize: "19px" }}
                      ></i>
                    </Col>

                    <Col xs={10} sm={10} md={10} className="d-flex flex-column">
                      <label htmlFor="">{t("reg.OTP")}</label>

                      <input
                        id="otp"
                        name="otp"
                        type="text"
                        maxLength="8"
                        value={formik.values.otp}
                        onChange={(e) => handlerChangeOtp(e)}
                        required
                      />
                    </Col>
                    <h5 className="text-center mt-4 invalid-feedback">
                      {msgOtp}
                    </h5>
                  </Row>
                </>
              )}

              <Row>
                {showOtpBtn && (
                  <button className="reg-form-btn mt-5" onClick={serviceGetOtp}>
                    {t("reg.GET-OTP")}
                  </button>
                )}

                {showBtn && (
                  <button
                    className="reg-form-btn mt-4"
                    onClick={serviceVerifyOTP}
                  >
                    {t("reg.Continue")}
                  </button>
                )}
              </Row>
            </div>
          )}

          {showForm2 && (
            <div className="reg2-contents">
              <p>
                {" "}
                {t(
                  "reg.Please-create-an-account-to-continue-using-our-service"
                )}
              </p>
              <form className="sign_up_form" onSubmit={formik.handleSubmit}>
                <Row>
                  <Col xs={2} sm={2} md={2} className="icon">
                    <i class="far fa-user" style={{ fontSize: "19px" }}></i>
                  </Col>
                  <Col xs={10} sm={10} md={10} className="d-flex flex-column">
                    <label htmlFor="email">
                      {t("Personal_information.Full-Name")}
                    </label>

                    <input
                      id="name"
                      name="name"
                      type="text"
                      onChange={(e) => handlerChangeName(e)}
                      required
                    />
                    <div className="error_msg">{msgName}</div>
                  </Col>
                </Row>

                <Row className="top-spacing">
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
                      onChange={(e) => handlerChangeEmail(e)}
                      required
                    />
                    <div className="error_msg">{msgEmail}</div>
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
                      minLength="6"
                      onChange={(e) => handlerChangePassword(e)}
                      required
                    />
                    <div className="error_msg">{msgPassword}</div>
                  </Col>
                </Row>

                <Button
                  className="btn-danger btn-block p-3 top-spacing"
                  onClick={registeredAccount}
                  type="submit"
                  value="submit"
                >
                  {t("reg.Create-account")}
                </Button>
                <h6 className="mt-4">
                  {t("reg.Already-have-an-account")}{" "}
                  <span className="sign_in" onClick={handleSignIn}>
                    {t("login.Sign-in")}
                  </span>
                </h6>
              </form>
            </div>
          )}
        </Modal.Body>
      </Modal>
      {/* <UserLoginModal show1={handleShow_login} handleClose1={handleClose_login}/> */}
    </React.Fragment>
  );
};

export default SignUpForm;
