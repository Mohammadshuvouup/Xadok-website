import React, { useState, useEffect } from "react";
// import Notifications, {notify} from 'react-notify-toast';
import { Button, Modal, Container } from "react-bootstrap";
import { Trans, useTranslation } from "react-i18next";
import "../../css/after_login.css";
import PersonalInfo from "../Modals/settings page/personal_info";
import SavedAddresses from "../Modals/settings page/saved_addresses";
import ChangePassword from "../Modals/change_password";
import { Link } from "react-router-dom";


const AfterLoginPopUp = (props) => {
  const [shows, setShows] = useState(false);
  const [shows1, setShows1] = useState(false);
  const [show218, setShow218] = useState(false);
  
  const handleCloses = () => setShows(false);
  const handleShows = () => setShows(true);
  const handleCloses1 = () => setShows1(false);
  const handleShows1 = () => setShows1(true);
  const handleClose218 = () => setShow218(false);
  const handleShow218 = () => setShow218(true);
  
  const { t, i18n } = useTranslation();

  useEffect(() => {
    let language = localStorage.getItem("language");

    if (language && language.length !== 0) {
      i18n.changeLanguage(language);
    }
  }, []);

  const logout = () => {
    localStorage.removeItem("user_id");
    localStorage.removeItem("user_mobile");
    localStorage.removeItem("user_name");
    localStorage.removeItem("user_email");
    localStorage.removeItem("role_id");
    localStorage.removeItem("state_id");
    localStorage.removeItem("region_id");
    localStorage.removeItem("user_street");
    localStorage.removeItem("user_lat");
    localStorage.removeItem("user_lng");
    localStorage.removeItem("user_img");
    window.location.reload();
  };

  return (
    <React.Fragment>
      <PersonalInfo shows={shows} handleCloses={handleCloses} />
      <SavedAddresses shows1={shows1} handleCloses1={handleCloses1} />
      <ChangePassword show218={show218} handleClose218={handleClose218} />
      <Modal className="profile" show={props.show5} onHide={props.handleClose5}>
        <Modal.Header style={{ border: "none", outline: "none" }} closeButton>
          <Modal.Title className="mt-3 ml-3">
            Hi {localStorage.getItem("user_name")}...
          </Modal.Title>
        </Modal.Header>
        <p className="pl-4 ml-2">Save your time and let's shop for you </p>
        <Modal.Body style={{ border: "none" }}>
          <h4 onClick={handleShows}>Profile</h4>
          <h4 onClick={handleShows1}>My Addresses</h4>
          <Link
            to="/favorite"
            style={{ textDecoration: "none", color: "rgb(33, 37, 41)" }}
          >
            <h4>Favourites</h4>
          </Link>
          <Link
            to="/orders"
            style={{ textDecoration: "none", color: "rgb(33, 37, 41)" }}
          >
            <h4>My Orders</h4>
          </Link>
          <h4 onClick={handleShow218}>Change Password</h4>
          <Link
            to="/settings"
            style={{ textDecoration: "none", color: "rgb(33, 37, 41)" }}
          >
            <h4>Setting</h4>
          </Link>
        </Modal.Body>
        <Modal.Footer style={{ border: "none" }}>
          <Button onClick={logout} className="p-3 logout-btn">
            Logout
          </Button>
        </Modal.Footer>
      </Modal>
    </React.Fragment>
  );
};

export default AfterLoginPopUp;
