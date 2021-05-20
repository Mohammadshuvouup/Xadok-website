import React, { useState, useRef, useEffect } from "react";
import "../../../css/setting_general.css";
import axios from "axios";
import { Trans, useTranslation } from "react-i18next";
import {
  Navbar,
  Row,
  Col,
  Nav,
  Container,
  Modal,
  Badge,
  Toast,
  Button,
  Form,
  Card,
  Carousel,
  Accordion,
  Image,
} from "react-bootstrap";
import Notifications, { notify } from "react-notify-toast";
import profile from "../../../xadok/download.png";
import { useFormik } from "formik";
import * as Yup from "yup";

const PersonalInfo = (props) => {
  const { t, i18n } = useTranslation();
  const [name, setName] = useState(localStorage.getItem("user_name"));
  const [email, setEmail] = useState(localStorage.getItem("user_email"));
  const [mobile, setMobile] = useState(localStorage.getItem("user_mobile"));
  const [picture, setPicture] = useState(
    "https://ristsys.store/public/upload/users/" +
      localStorage.getItem("user_img")
  );

  const initialValues = {
    user_id: localStorage.getItem("user_id"),
    name: localStorage.getItem("user_name"),
    email: localStorage.getItem("user_email"),
    mobile: localStorage.getItem("user_mobile"),
  };
  const [fileValue, setFileValue] = useState(null);

  useEffect(() => {
    let language = localStorage.getItem("language");

    // console.log("LANGUAGE SELECTED", language);

    if (language && language.length !== 0) {
      i18n.changeLanguage(language);
    }
  }, []);

  const phoneRegExp =
    /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;
//   const { handleSubmit, handleChange, formErrors } = useFormik({
//     validationSchema: Yup.object({
//       name: Yup.string()
//         .min(2, "Too Short!")
//         .max(50, "Too Long!")
//         .required("Required"),
//       email: Yup.string().email("Invalid email").required("Required"),
//       mobile: Yup.string()
//         .matches(phoneRegExp, "Phone number is not valid")
//         .required("Required"),
//     }),
//     onSubmit: (values) => {
//       console.log("onSubmit");
//       console.log(values);
//     },
//   });

const getBase64 = (file, cb) => {
    let reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = function () {
        cb(reader.result)
    };
    reader.onerror = function (error) {
        console.log('Error: ', error);
    };
}

  const formik = useFormik({
    initialValues: initialValues,
    validationSchema: Yup.object({
      name: Yup.string()
        .min(2, "Too Short!")
        .max(50, "Too Long!")
        .required("Required"),
      email: Yup.string().email("Invalid email").required("Required"),
      mobile: Yup.string()
        .required("Required"),
    }),
    onSubmit: (values) => {
        // setFormValues({ ...formValues, [name]: value });
      console.log("submitting");
      console.log(fileValue);
        getBase64(fileValue, (result) => {
            console.log("result");
            console.log(result);
            if(result!=""){
            values.user_img = result;
            }
        });
    //   values.user_img = fileValue;
      console.log(values);
      axios
      .post(`https://ristsys.store/api/editUser`, values)
      .then((res) => {
        console.log(res);
        if (res.data.status == 0) {
            console.log("-0-");
          //   setMsgPassword(res.data.message);
        } else {
            console.log("-1-");
            // console.log(res.data.data.user_name);
            localStorage.setItem("user_name",res.data.data.user_name)
            localStorage.setItem("user_email",res.data.data.user_email)
            localStorage.setItem("user_img",res.data.data.user_img)
            let myColor = { background: "#0E1717", text: "#FFFFFF" };
            notify.show("Succesfully updated!", "success", 6000, myColor);
          //   handleClose1();
            // window.location.reload();
        }
      })
      .catch(function (error) {
        if (error.response) {
        }
      });
    },
  });

  const inputFile = useRef(null);
  const [image, setImage] = useState("");

  // var data = '';
  // var binaryData = [];
  // binaryData.push(image);
  // window.URL.createObjectURL(new Blob(binaryData, {type: "image/png, image/jpeg"}))

  const upload_file = (e) => {
    inputFile.current.click();
    console.log(e.target.files);
    // setImage([...image, window.URL.createObjectURL(e.target.files)]);
    // binaryData.push(e.target.files);
    // setImage(binaryData);
  };

  // function deleteFile(e) {
  //     const s = file.filter((item, index) => index !== e);
  //     setFile(s);
  //     console.log(s);
  //   }


  //   const handleChange = (e) => {
  //     const { name, value } = e.target;
  //     setFormValues({ ...formValues, [name]: value });
  //   };

    //   const handleChange = (e) => {
  //     const { name, value } = e.target;
  //     setFormValues({ ...formValues, [name]: value });
  //   };


  return (
    <Modal
      className="personal-info"
      show={props.shows}
      onHide={props.handleCloses}
    >
      <Modal.Header style={{ border: "none" }} closeButton>
        <Modal.Title
          style={{ border: "none", marginTop: "4%", fontWeight: "bold" }}
        >
          {t("Personal_information.Personal-information")}
        </Modal.Title>
      </Modal.Header>
      <p className="pl-4 mt-2" style={{ color: "silver", fontSize: "14px" }}>
        {t("Personal_information.Profile-Image")}
      </p>

      <Modal.Body>
        {/* <Container> */}

        <form
          className="sign_up_form profile-details-form"
          onSubmit={formik.handleSubmit}
          noValidate
          enctype="multipart/form-data"
          method="post"
        >
        <Row className="upload-img-box">
          <Col className="img-icon" md={3}>
            <Image src={picture ? picture : profile} alt="" />
          </Col>

          <Col claasName="box justify-content-between" md={8}>
            <input
              type="file"
              id="file"
              ref={inputFile}
            //   onChange={(e) => upload_file(e)}
              onChange={(event) => {
                //   console.log(event.currentTarget.files[0]); 
                  setFileValue(event.currentTarget.files[0]);
                //   setFieldValue("photo1", event.target.files[0]);
              }}
              style={{ display: "none" }}
              accept="image/*"
            />
            <Button className="up" onClick={upload_file}>
              {t("Personal_information.Upload")}
            </Button>
            <Button className="delete">
              {t("Personal_information.Delete")}
            </Button>
          </Col>
        </Row>

        <Row className="profile-details">
          <Col md={12}>
            <p>{t("Personal_information.Profile-details")}</p>
          </Col>
        </Row>

          {/* <Container> */}
          <Row className="mt-4">
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
                onChange={formik.handleChange}
                value={formik.values.name}
              />
              {formik.touched.name && formik.errors.name ? (
                  <div className="error_msg">{formik.errors.name}</div>
              ) : null}
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
                value={formik.values.email}
                onChange={formik.handleChange}
              />
              {formik.touched.email && formik.errors.email ? (
                  <div className="error_msg">{formik.errors.email}</div>
              ) : null}
            </Col>
          </Row>

          <Row className="top-spacing">
            <Col xs={2} sm={2} md={2} className="icon">
              <i class="fas fa-phone" style={{ fontSize: "19px" }}></i>
            </Col>
            <Col xs={10} sm={10} md={10} className="d-flex flex-column">
              <label htmlFor="email">
                {t("Personal_information.Mobile-Number")}
              </label>

              <input
                id="mobile"
                name="mobile"
                type="tel"
                value={formik.values.mobile}
                readOnly
                disabled
              />
              {formik.touched.mobile && formik.errors.mobile ? (
                <div className="error_msg">{formik.errors.mobile}</div>
              ) : null}
            </Col>
          </Row>
          <Button
            className="update-profile p-3 top-spacing"
            type="submit"
            value="submit"
          >
            {t("Personal_information.Update-Profile")}
          </Button>

          {/* </Container> */}
        </form>

        {/* </Container> */}
      </Modal.Body>
    </Modal>
  );
};

export default PersonalInfo;
