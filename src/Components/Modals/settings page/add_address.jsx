import React, { useEffect, useState } from "react";
import "../../../css/setting_general.css";
import Geocode from "react-geocode";
import axios from "axios";
import { useFormik } from "formik";
import * as Yup from "yup";
import Notifications, { notify } from "react-notify-toast";
import { Map, InfoWindow, Marker, GoogleApiWrapper } from "google-maps-react";
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

const NewAddress = (props) => {
  // console.log("NewAddress", props);
  const { t, i18n } = useTranslation();
  const [addAddress, setAddAddress] = useState("");
  const [addMark, setAddMark] = useState("");
  const [addArea, setAddArea] = useState("");
  const [addBlockNumber, setAddBlockNumber] = useState("");
  const [addRoadNumber, setAddRoadNumber] = useState("");
  const [addBuildingNumber, setAddBuildingNumber] = useState("");
  const [addFlatNumber, setAddFlatNumber] = useState("");
  const [addNote, setAddNote] = useState("");
  const [addType, setAddType] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const [addressId, setAddressId] = useState(props.addId);
  const [addLat, setAddLat] = useState(
    localStorage.getItem("current_location_lat")
  );
  const [addLng, setAddLng] = useState(
    localStorage.getItem("current_location_lng")
  );
  const initialValues = {
    user_id: localStorage.getItem("user_id"),
    addMark: "",
    addAddress: "",
    addNote: "",
    addType: "",
    add_lat: localStorage.getItem("current_location_lat"),
    add_lng: localStorage.getItem("current_location_lng"),
  };

  let current_lat = localStorage.getItem("current_location_lat");
  let current_lng = localStorage.getItem("current_location_lng");

  const addAddressService = () => {
    //   console.log(addType);
    setErrorMsg("");
    if (addType == "") {
      setErrorMsg("Type is required!");
    } else if (addAddress == "") {
      setErrorMsg("Full address is required!");
    } else if (addArea == "") {
      setErrorMsg("Area is required!");
    } else if (addBlockNumber == "") {
      setErrorMsg("Block number is required!");
    } else if (addRoadNumber == "") {
      setErrorMsg("Road number is required!");
    } else if (addBuildingNumber == "") {
      setErrorMsg("Building number is required!");
    } else if (addFlatNumber == "") {
      setErrorMsg("Flat number is required!");
    } else if (addMark == "") {
      setErrorMsg("Mark is required!");
    } else {
      let params = {
        user_id: localStorage.getItem("user_id"),
        add_mark: addMark,
        add_area: addAddress,
        area_id: addArea,
        block_numer: addBlockNumber,
        road_number: addRoadNumber,
        flat_numer: addFlatNumber,
        building_number: addBuildingNumber,
        add_type: addType,
        add_lat: localStorage.getItem("current_location_lat"),
        add_lng: localStorage.getItem("current_location_lng"),
      };
      // console.log(params);
      axios
        .post(`https://ristsys.store/api/addAddress`, params)
        .then((res) => {
          // console.log(res);
          if (res.data.status === 1) {
            props.onReloadAddress();
            props.handleClose2();
            // window.location.reload()
          } else {
            setErrorMsg(res.data.message);
          }
        })
        .catch(function (error) {
          if (error.response) {
          }
        });
    }
  };

  const getAddressList = () => {
    let params = {};
    axios
      .post(`https://ristsys.store/api/editAddress`, params)
      .then((res) => {
        // console.log(res);
        if (res.data.status === 1) {
          props.onReloadAddress();
          props.handleClose2();
          // window.location.reload()
        } else {
          setErrorMsg(res.data.message);
        }
      })
      .catch(function (error) {
        if (error.response) {
        }
      });
  };

  useEffect(() => {
    // console.log(addressId);
    let language = localStorage.getItem("language");
    if (language && language.length !== 0) {
      i18n.changeLanguage(language);
    }
    // set Google Maps Geocoding API for purposes of quota management. Its optional but recommended.
    Geocode.setApiKey("AIzaSyAFwqvMR0dxBPTW_hPDHBVQacRaLs8kb0I");

    // set response language. Defaults to english.
    Geocode.setLanguage("en");

    // set response region. Its optional.
    // A Geocoding request with region=es (Spain) will return the Spanish city.
    Geocode.setRegion("es");

    // set location_type filter . Its optional.
    // google geocoder returns more that one address for given lat/lng.
    // In some case we need one address as response for which google itself provides a location_type filter.
    // So we can easily parse the result for fetching address components
    // ROOFTOP, RANGE_INTERPOLATED, GEOMETRIC_CENTER, APPROXIMATE are the accepted values.
    // And according to the below google docs in description, ROOFTOP param returns the most accurate result.
    Geocode.setLocationType("GEOMETRIC_CENTER");

    // Enable or disable logs. Its optional.
    Geocode.enableDebug();

    // Get address from latitude & longitude.
    Geocode.fromLatLng(current_lat, current_lng).then(
      (response) => {
        const address = response.results[0].formatted_address;
        setAddAddress(address);
        //   console.log(address);
      },
      (error) => {}
    );
  }, []);

  const style = {
    width: "100%",
    height: "30%",
  };

  const formik = useFormik({});
  //   const formik = useFormik({
  //     initialValues: initialValues,
  //     validationSchema: Yup.object({
  //         addAddress: Yup.string().required("Required"),
  //         addNote: Yup.string().required("Required"),
  //         addMark: Yup.string().required("Required"),
  //         addType: Yup.string().required("Required"),
  //     }),
  //     onSubmit: (values) => {
  //       console.log("submitting");
  //       console.log(values);
  //       axios
  //         .post(`https://ristsys.store/api/addAddress`, values)
  //         .then((res) => {
  //           console.log(res);
  //         })
  //         .catch(function (error) {
  //           if (error.response) {
  //           }
  //         });
  //     },
  //   });

  const handleChangeAddress = (e) => {
    setAddAddress(e.target.value);
  };
  const handleChangeType = (e) => {
    setAddType(e.target.value);
  };
  const handleChangeNote = (e) => {
    setAddNote(e.target.value);
  };
  const handleChangeMark = (e) => {
    setAddMark(e.target.value);
  };
  const handleChangeArea = (e) => {
    setAddArea(e.target.value);
  };
  const handleChangeBlock = (e) => {
    setAddBlockNumber(e.target.value);
  };
  const handleChangeRoad = (e) => {
    setAddRoadNumber(e.target.value);
  };
  const handleChangeBuilding = (e) => {
    setAddBuildingNumber(e.target.value);
  };
  const handleChangeFlat = (e) => {
    setAddFlatNumber(e.target.value);
  };
  return (
    <Modal
      show={props.show2}
      className="new-address-modal"
      style={{ border: "none" }}
      onHide={props.handleClose2}
      animation={false}
    >
      <Modal.Header style={{ border: "none" }} closeButton>
        <Modal.Title style={{ border: "none" }}>
          {addressId > 0
            ? t("add_address.Edit-addresses")
            : t("add_address.New-addresses")}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className="new-addresses" style={{ border: "none" }}>
        {/* <Container className="new-addresses"> */}
        <p>{t("add_address.Edit-location-on-the-map")}</p>
        <Map
          initialCenter={{ lat: current_lat, lng: current_lng }}
          google={props.google}
          zoom={15}
          style={style}
        >
          <Marker lat={current_lat} lng={current_lng} />
        </Map>
        <div></div>

        <form method="post" noValidate>
          <label>
            {t("add_address.TYPE")}
            <select
              className="type"
              name="add_type"
              onChange={handleChangeType}
            >
              <option value="">{t("add_address.Select-address-type")}</option>
              <option value="flat">{t("add_address.flat")}</option>
              <option value="villa">{t("add_address.Villa")}</option>
              <option value="showroom">{t("add_address.Showroom")}</option>
              <option value="office"> {t("add_address.Office")}</option>
              <option value="compounds">{t("add_address.Compounds")}</option>
            </select>
            {formik.touched.add_type && formik.errors.add_type ? (
              <div className="error_msg">{formik.errors.add_type}</div>
            ) : null}
          </label>

          <label>
            Area
            <select className="type" name="area_id" onChange={handleChangeArea}>
              <option value="">{t("add_address.Select-area")}</option>
              {props.area != null && props.area.length > 0
                ? props.area.map((item) => (
                    <option key={item.area_id} value={item.area_id}>{item.area_en}</option>
                  ))
                : ""}
            </select>
            {formik.touched.area_id && formik.errors.area_id ? (
              <div className="error_msg">{formik.errors.area_id}</div>
            ) : null}
          </label>

          <label>
            {t("add_address.FULL-ADDRESS")}
            <input
              type="text"
              name="add_address"
              value={addAddress}
              onChange={handleChangeAddress}
            />
            {formik.touched.add_address && formik.errors.add_address ? (
              <div className="error_msg">{formik.errors.add_address}</div>
            ) : null}
          </label>

          <label>
            {t("add_address.block_numer")}
            <input
              type="number"
              name="block_numer"
              value={addBlockNumber}
              onChange={handleChangeBlock}
            />
            {formik.touched.block_numer && formik.errors.block_numer ? (
              <div className="error_msg">{formik.errors.block_numer}</div>
            ) : null}
          </label>

          <label>
            {t("add_address.road_number")}
            <input
              type="number"
              name="road_number"
              value={addRoadNumber}
              onChange={handleChangeRoad}
            />
            {formik.touched.road_number && formik.errors.road_number ? (
              <div className="error_msg">{formik.errors.road_number}</div>
            ) : null}
          </label>

          <label>
            {t("add_address.building_number")}
            <input
              type="number"
              name="building_number"
              value={addBuildingNumber}
              onChange={handleChangeBuilding}
            />
            {formik.touched.building_number && formik.errors.building_number ? (
              <div className="error_msg">{formik.errors.building_number}</div>
            ) : null}
          </label>

          <label>
            {t("add_address.flat_numer")}
            <input
              type="number"
              name="flat_numer"
              value={addFlatNumber}
              onChange={handleChangeFlat}
            />
            {formik.touched.flat_numer && formik.errors.flat_numer ? (
              <div className="error_msg">{formik.errors.flat_numer}</div>
            ) : null}
          </label>

          {/* <label>
            {t("add_address.ADDRESS-NOTE")}
            <input
              type="text"
              name="add_note"
              value={addNote}
              onChange={handleChangeNote}
            />
            {formik.touched.add_note && formik.errors.add_note ? (
              <div className="error_msg">{formik.errors.add_note}</div>
            ) : null}
          </label> */}

          <label>
            {t("add_address.ADDRESS-MARK")}
            <input
              type="text"
              name="add_mark"
              value={addMark}
              onChange={handleChangeMark}
            />
            {formik.touched.add_mark && formik.errors.add_mark ? (
              <div className="error_msg">{formik.errors.add_mark}</div>
            ) : null}
          </label>
          <div className="error_msg">{errorMsg}</div>
          <Button
            className="save-btn p-3"
            type="button"
            value="Submit"
            onClick={addAddressService}
            // onClick={props.handleClose2}
          >
            {" "}
            {t("add_address.Save")}
          </Button>
        </form>

        {/* </Container> */}
      </Modal.Body>
    </Modal>
    // <h1>hi</h1>
  );
};

// export default NewAddress;

export default GoogleApiWrapper((props) => ({
  apiKey: "AIzaSyAFwqvMR0dxBPTW_hPDHBVQacRaLs8kb0I",
}))(NewAddress);
