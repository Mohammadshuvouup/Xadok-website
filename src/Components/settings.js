import React, { useState } from "react";
import Footer from "../Components/footer";
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
} from "react-bootstrap";
import "../App.css";
import "./../css/setting_general.css";
import "./../css/setting_paymentmethods.css";
import "./../css/setting_discount.css";
import "./../css/setting_mycards.css";
import "./../css/setting_support.css";
import "./../css/setting_invite_a_friend.css";
import PersonalInfo from "./Modals/settings page/personal_info";
import SavedAddresses from "./Modals/settings page/saved_addresses";
import SideDrawer from "./SideDrawer/SideDrawer";
import TopBar from "../Components/topBar";
import MarketingPreferences from "./Modals/settings page/marketing_preferences";
import PaymentMethods from "./Modals/settings page/payment-methods";
import Support from "./Modals/settings page/support";
import Discounts from "./Modals/settings page/discounts";

export default function Settings() {
  const [num, setNum] = useState(1);
  const plus = () => {
    setNum(num + 1);
  };
  const minus = () => {
    if (num > 0) {
      setNum(num - 1);
    } else {
    }
  };

  const [shows, setShows] = useState(false);
  const [shows1, setShows1] = useState(false);
  const [shows2, setShows2] = useState(false);
  const [shows3, setShows3] = useState(false);
  const [shows4, setShows4] = useState(false);
  const [shows5, setShows5] = useState(false);
  const [shows6, setShows6] = useState(false);
  const [shows7, setShows7] = useState(false);

  const handleCloses = () => setShows(false);
  const handleShows = () => setShows(true);
  const handleCloses1 = () => setShows1(false);
  const handleShows1 = () => setShows1(true);
  const handleCloses2 = () => setShows2(false);
  const handleShows2 = () => setShows2(true);
  const handleCloses3 = () => setShows3(false);
  const handleShows3 = () => setShows3(true);
  const handleShows4 = () => setShows4(true);
  const handleCloses5 = () => setShows5(false);
  const handleShows5 = () => setShows5(true);
  const handleShows6 = () => setShows6(true);
  const handleCloses7 = () => setShows7(false);
  const handleShows7 = () => setShows7(true);

  // --------delete-------------------
  const [show6, setShow6] = useState(true);
  const [show7, setShow7] = useState(true);
  // ----------------------

  return (
    <div>
      {/* --------------------Setting Modals--------------------- */}

      <PersonalInfo shows={shows} handleCloses={handleCloses} />

      <SavedAddresses
        shows1={shows1}
        handleCloses1={handleCloses1}
        issetting="1"
      />
      <MarketingPreferences shows2={shows2} handleCloses2={handleCloses2} />
      <PaymentMethods shows3={shows3} handleCloses3={handleCloses3} />
      {/* <MyCards shows4={shows4} handleCloses4={handleCloses4} /> */}
      <Support shows5={shows5} handleCloses5={handleCloses5} />
      {/* <InviteFriend shows6={shows6} handleCloses6={handleCloses6} /> */}
      <Discounts shows7={shows7} handleCloses7={handleCloses7} />

      <Container fluid>
        <Row>
          <SideDrawer />

          <Col xs={10} sm={10} lg={10} fluid>
            <TopBar />

            <h4
              style={{
                fontWeight: "bold",
                color: "#223142",
                marginTop: "5%",
                marginLeft: "3%",
              }}
            >
              Settings
            </h4>
            <div style={{ marginLeft: "3%" }}>
              <h6
                style={{ color: "lightgray", marginTop: "3%", marginLeft: "%" }}
              >
                General
              </h6>
              <div
                onClick={handleShows}
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  marginTop: "2%",
                }}
              >
                <Button
                  style={{
                    color: "#223142",
                    background: "none",
                    border: "none",
                    marginLeft: "-1%",
                  }}
                >
                  <i class="far fa-user"></i> &nbsp;
                  <b>Personal information</b>
                </Button>
                <Button
                  style={{
                    color: "#223142",
                    background: "none",
                    border: "none",
                  }}
                >
                  <i class="fas fa-chevron-right"></i>
                </Button>
              </div>
              <hr style={{ marginTop: "-1px" }}></hr>
              <div
                onClick={handleShows1}
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  marginTop: "2%",
                }}
              >
                <Button
                  style={{
                    color: "#223142",
                    background: "none",
                    border: "none",
                    marginLeft: "-1%",
                  }}
                >
                  <i class="far fa-bookmark"></i> &nbsp; <b>Saved addressess</b>
                </Button>
                <Button
                  style={{
                    color: "#223142",
                    background: "none",
                    border: "none",
                  }}
                >
                  <i class="fas fa-chevron-right"></i>
                </Button>
              </div>
              <hr style={{ marginTop: "-1px" }}></hr>
              {/* <div
                onClick={handleShows2}
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  marginTop: "2%",
                }}
              >
                <Button
                  style={{
                    color: "#223142",
                    background: "none",
                    border: "none",
                    marginLeft: "-1%",
                  }}
                >
                  <i class="far fa-envelope"></i> &nbsp;{" "}
                  <b>Marketing perferences</b>
                </Button>
                <Button
                  style={{
                    color: "#223142",
                    background: "none",
                    border: "none",
                  }}
                >
                  <i class="fas fa-chevron-right"></i>
                </Button>
              </div>
              <hr style={{ marginTop: "-1px" }}></hr> */}

              {/* <h6
                style={{ color: "lightgray", marginTop: "3%", marginLeft: "%" }}
              >
                Payments
              </h6>
              <div
                onClick={handleShows3}
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  marginTop: "2%",
                }}
              >
                <Button
                  style={{
                    color: "#223142",
                    background: "none",
                    border: "none",
                    marginLeft: "-1%",
                  }}
                >
                  <i class="far fa-address-card"></i>&nbsp;{" "}
                  <b>Payment methods</b>
                </Button>
                <Button
                  style={{
                    color: "#223142",
                    background: "none",
                    border: "none",
                  }}
                >
                  <i class="fas fa-chevron-right"></i>
                </Button>
              </div> */}
              {/* <hr style={{marginTop:"-1px"}}></hr>
    <div onClick={handleShows4} style={{display:"flex",justifyContent:"space-between",marginTop:"2%"}}>
    <Button style={{color:"#223142",background:"none",border:"none",marginLeft:"-1%"}}><i class="fas fa-credit-card"></i> &nbsp; <b>My cards</b></Button>
    <Button  style={{color:"#223142",background:"none",border:"none"}}>
      <i class="fas fa-chevron-right"></i></Button>
    </div> */}
              {/* <hr style={{ marginTop: "-1px" }}></hr>

              <h6
                style={{ color: "lightgray", marginTop: "3%", marginLeft: "%" }}
              >
                Others
              </h6>
              <div
                onClick={handleShows5}
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  marginTop: "2%",
                }}
              >
                <Button
                  style={{
                    color: "#223142",
                    background: "none",
                    border: "none",
                    marginLeft: "-1%",
                  }}
                >
                  <i class="far fa-question-circle"></i> &nbsp; <b>Support</b>
                </Button>
                <Button
                  style={{
                    color: "#223142",
                    background: "none",
                    border: "none",
                  }}
                >
                  <i class="fas fa-chevron-right"></i>
                </Button>
              </div>
             
              <hr style={{ marginTop: "-1px" }}></hr>
              <div
                onClick={handleShows7}
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  marginTop: "2%",
                }}
              >
                <Button
                  style={{
                    color: "#223142",
                    background: "none",
                    border: "none",
                    marginLeft: "-1%",
                  }}
                >
                  <i class="far fa-money-bill-alt"></i> &nbsp; <b>Discounts</b>
                </Button>
                <Button
                  style={{
                    color: "#223142",
                    background: "none",
                    border: "none",
                  }}
                >
                  <i class="fas fa-chevron-right"></i>
                </Button>
              </div>
              <hr style={{ marginTop: "-1px" }}></hr> */}
            </div>
          </Col>
        </Row>
      </Container>
      <div className="mt-4">
        <Footer />
      </div>
    </div>
  );
}
