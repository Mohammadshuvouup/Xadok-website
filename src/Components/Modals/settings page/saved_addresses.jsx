import React, { useState, useEffect } from "react";
import { Trans, useTranslation } from "react-i18next";
import { Row, Col, Modal, Button } from "react-bootstrap";
import "../../../css/setting_general.css";
import axios from "axios";
import NewAddress from "./add_address";

const SavedAddresses = (props) => {
  //   console.log("saved_addresses", props);
  const { t, i18n } = useTranslation();
  const [addressList, setAddressList] = useState([]);
  const [fromSetting, setFromSetting] = useState(props.issetting);
  const [addressId, setAddressId] = useState(0);
  const [areas, setAreas] = useState([]);

  useEffect(() => {
    let language = localStorage.getItem("language");
    if (language && language.length !== 0) {
      i18n.changeLanguage(language);
    }
    refreshAddressList();
    getAreas();
  }, []);

  const [show2, setShow2] = useState(false);
  const handleShow2 = () => setShow2(true);
  const handleClose2 = () => setShow2(false);

  const refreshAddressList = () => {
    // props.shows1();
    let params = {
      user_id: localStorage.getItem("user_id"),
    };
    axios.post(`https://ristsys.store/api/getAddresses`, params).then((res) => {
      //   console.log(res);
      if (res.data.status === 1) {
        setAddressList(res.data.data);
      }
    });
  };

  function getAreas() {
    axios.get("https://ristsys.store/api/getareas").then((response) => {
      // console.log(response);
      if (response.data.status === 1) {
        setAreas(response.data.data);
      }
    });
  }

  const handleAddNewAddress = () => {
    handleShow2();
    // props.handleCloses1();
  };

  const handleEditAddress = (id) => {
    //   console.log("id",id);
    setAddressId(id);
    handleShow2();
  };

  const handleRemoveAddress = (id) => {
    //   console.log("id",id);
    let params = {
      address_id: id,
    };
    axios
      .post(`https://ristsys.store/api/removeAddress`, params)
      .then((res) => {
        // console.log(res);
        if (res.data.status === 1) {
          refreshAddressList();
        }
      });
  };

  const selectionAddress = (address) => {
    // console.log(address);
    localStorage.setItem("default_address", address.add_area);
    localStorage.setItem("default_address_type", address.add_type);
    localStorage.setItem("default_address_id", address.add_id);
    props.handleCloses1(address);
  };

  return (
    <React.Fragment>
      <Modal
        show={props.shows1}
        className="save-address-modal"
        style={{ border: "none" }}
        onHide={props.handleCloses1}
        animation={false}
      >
        <Modal.Header style={{ border: "none" }} closeButton>
          <Modal.Title style={{ border: "none" }}>
            {t("Saved_addresses.Saved-addresses")}
          </Modal.Title>
        </Modal.Header>

        <Modal.Body style={{ border: "none" }}>
          {/* <Container> */}

          {addressList &&
            addressList.length > 0 &&
            addressList.map((value, index) => {
              return (
                <Row key={index} className="mb-4">
                  <Col
                    md={12}
                    className="address"
                    onClick={
                      fromSetting == 0 ? () => selectionAddress(value) : ""
                    }
                  >
                    <i
                      class="fas fa-edit edit-icon"
                      id={value.add_id}
                      onClick={() => handleEditAddress(value.add_id)}
                      style={{ display: "none" }}
                    ></i>
                    <h5>{value.add_mark}</h5>
                    <p>{value.add_address}</p>
                    <p>{value.add_area}</p>

                    <i
                      class="fas fa-trash remove-icon"
                      style={{ bottom: "30px" }}
                      onClick={() => handleRemoveAddress(value.add_id)}
                    ></i>
                  </Col>
                </Row>
              );
            })}

          {/* <p className="add-new-address" onClick={handleAddNewAddress}>
            {t("Saved_addresses.Add-new-addresses")}
          </p> */}
          {localStorage.getItem("user_id") ? (
            <Button className="confirm-btn p-3" onClick={handleAddNewAddress}>
              {t("Saved_addresses.Add-new-addresses")}
            </Button>
          ) : (
            <p>Please login</p>
          )}
          <Button
            className="confirm-btn p-3"
            type="submit"
            value="submit"
            style={{ display: "none" }}
          >
            {t("Saved_addresses.Update Profile")}
          </Button>

          {/* </Container> */}
        </Modal.Body>
      </Modal>

      <NewAddress
        show2={show2}
        setShow2={setShow2}
        handleShow2={handleShow2}
        handleClose2={handleClose2}
        onReloadAddress={refreshAddressList}
        addId={addressId}
        area={areas}
      />
    </React.Fragment>
  );
};

export default SavedAddresses;
