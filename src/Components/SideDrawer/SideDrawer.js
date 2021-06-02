import React, { useState, useEffect } from "react";
import { Image, Navbar, Row, Col, Nav } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";
import logo from "../logo/logo.svg";
import explore from "../logo/explore.svg";
import setting from "../logo/setting.svg";
import message from "../logo/messages.svg";
import order from "../logo/orders.svg";
import fav from "../logo/favourites.svg";
import "../../css/sideDrawer.css";
import { Trans, useTranslation } from "react-i18next";

const SideDrawer = (props) => {
  const { t, i18n } = useTranslation();

  useEffect(() => {
    let language = localStorage.getItem("language");

    // console.log("LANGUAGE SELECTED", language);

    if (language && language.length !== 0) {
      i18n.changeLanguage(language);
    }
  }, []);

  const [isOpen, setOpen] = useState(false);
  const [isClose, setClose] = useState(false);
  const [is_AdClose, setAdClose] = useState(false);

  // const expandMenu=()=>{
  //   if(isOpen===false){
  //     setOpen(true);
  //     setClose(false);
  //   }
  // }

  // const closeMenu=()=>{
  //   if(isClose===false){
  //     setOpen(false);
  //     setClose(true)
  //   }
  // }

  const closeAd = () => {
    // alert("working");
    if (is_AdClose === false) {
      setAdClose(true);
    }
  };

  return (
    <React.Fragment>
      {/* <Col className="menu-icon" sm={1} xs={1}>
     <i className="fas fa-bars" onClick={expandMenu}></i>
  </Col> */}
      <Col xs={2} sm={2} lg={2} className="sideNav">
        <Navbar.Brand className="pt-2 logo" style={{ width: "100%" }}>
          <NavLink to="/">
            <Image src={logo} className="logo-img" style={{ height: "10vh" }} />
          </NavLink>
        </Navbar.Brand>
        <Nav defaultActiveKey="" className="flex-column pt-4">
          <NavLink exact to="/" className="nav-link">
            <i class="fas fa-home house-s"></i>
            <span className="menu-item">{t("sideDrawer.Home")}</span>
          </NavLink>
          {/* <NavLink exact to="/exploring" className="nav-link">    
            <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M0 0H10.6667V13.3333H0V0ZM24 0H13.3333V8H24V0ZM8 10.6667V2.66667H2.66667V10.6667H8ZM21.3333 5.33333V2.66667H16V5.33333H21.3333ZM21.3333 13.3333V21.3333H16V13.3333H21.3333ZM8 21.3333V18.6667H2.66667V21.3333H8ZM24 10.6667H13.3333V24H24V10.6667ZM0 16H10.6667V24H0V16Z"/>
            </svg>
          <span className="menu-item">{t("sideDrawer.Explore")}</span>
        </NavLink> */}
          <NavLink exact to="/favorite" className="nav-link">
            <svg
              width="18"
              height="24"
              viewBox="0 0 18 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M2.57143 0H15.4286C16.8429 0 18 1.18667 18 2.66667V24L9 20L0 24V2.66667C0 1.19391 1.15127 0 2.57143 0ZM9 17.0933L15.4286 20V2.66667H2.57143V20L9 17.0933Z"
              />
            </svg>
            <span className="menu-item">{t("sideDrawer.Favourite")}</span>
          </NavLink>
          <NavLink exact to="/orders" className="nav-link">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M2.66667 0C1.18667 0 0 1.18667 0 2.66667V21.3333C0 22.8133 1.18667 24 2.66667 24H21.3333C22.8133 24 24 22.8133 24 21.3333V2.66667C24 1.18667 22.8133 0 21.3333 0H2.66667ZM2.66667 2.66667H21.3333V21.3333H2.66667V2.66667ZM5.33333 8V5.33333H18.6667V8H5.33333ZM5.33333 10.6667V13.3333H18.6667V10.6667H5.33333ZM5.33333 18.6667V16H14.6667V18.6667H5.33333Z"
              />
            </svg>
            <span className="menu-item">{t("sideDrawer.Orders")}</span>
          </NavLink>
          {/* <NavLink exact to="/messages" className="nav-link">
          <svg width="24" height="19" viewBox="0 0 24 19" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M2.4 0H21.6C22.9255 0 24 1.06332 24 2.375V16.625C24 17.9367 22.9255 19 21.6 19H2.4C1.068 19 0 17.9312 0 16.625V2.375C0 1.05687 1.068 0 2.4 0ZM12 8.3125L21.6 2.375H2.4L12 8.3125ZM21.6 5.18937V16.625H2.4V5.18937L12 11.115L21.6 5.18937Z"/>
          </svg>
          <span className="menu-item">{t("sideDrawer.Messages")}</span><span className="number">2</span>
        </NavLink> */}
          {!localStorage.getItem("user_id") ? (
            ""
          ) : (
            <NavLink exact to="/settings" className="nav-link">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M9.53323 24C9.22489 24 8.96588 23.784 8.91654 23.496L8.46019 20.316C7.68316 20.016 7.01713 19.608 6.37577 19.128L3.30464 20.34C3.0333 20.436 2.70029 20.34 2.55228 20.076L0.0855125 15.924C-0.0748274 15.66 -0.000824392 15.336 0.233519 15.156L2.83596 13.164L2.74962 12L2.83596 10.8L0.233519 8.844C-0.000824392 8.664 -0.0748274 8.34 0.0855125 8.076L2.55228 3.924C2.70029 3.66 3.0333 3.552 3.30464 3.66L6.37577 4.86C7.01713 4.392 7.68316 3.984 8.46019 3.684L8.91654 0.504C8.96588 0.216 9.22489 0 9.53323 0H14.4668C14.7751 0 15.0341 0.216 15.0835 0.504L15.5398 3.684C16.3168 3.984 16.9829 4.392 17.6242 4.86L20.6954 3.66C20.9667 3.552 21.2997 3.66 21.4477 3.924L23.9145 8.076C24.0748 8.34 24.0008 8.664 23.7665 8.844L21.164 10.8L21.2504 12L21.164 13.2L23.7665 15.156C24.0008 15.336 24.0748 15.66 23.9145 15.924L21.4477 20.076C21.2997 20.34 20.9667 20.448 20.6954 20.34L17.6242 19.14C16.9829 19.608 16.3168 20.016 15.5398 20.316L15.0835 23.496C15.0341 23.784 14.7751 24 14.4668 24H9.53323ZM16.9335 12C16.9335 9.34903 14.7247 7.2 12 7.2C9.27528 7.2 7.06646 9.34903 7.06646 12C7.06646 14.651 9.27528 16.8 12 16.8C14.7247 16.8 16.9335 14.651 16.9335 12ZM9.53323 12C9.53323 10.6745 10.6376 9.6 12 9.6C13.3624 9.6 14.4668 10.6745 14.4668 12C14.4668 13.3255 13.3624 14.4 12 14.4C10.6376 14.4 9.53323 13.3255 9.53323 12ZM10.6186 5.532L11.075 2.4H12.925L13.3814 5.544C14.8615 5.832 16.1688 6.6 17.1185 7.668L20.091 6.42L21.016 7.98L18.4136 9.84C18.9069 11.244 18.9069 12.768 18.4136 14.172L21.0284 16.032L20.1033 17.592L17.1062 16.344C16.1565 17.4 14.8615 18.168 13.3937 18.468L12.9374 21.6H11.0626L10.6063 18.456C9.13855 18.168 7.8435 17.4 6.89379 16.344L3.89667 17.592L2.97163 16.032L5.5864 14.16C5.09305 12.768 5.09305 11.244 5.5864 9.84L2.98396 7.98L3.909 6.42L6.88146 7.668C7.83116 6.6 9.13855 5.832 10.6186 5.532Z"
                />
              </svg>
              <span className="menu-item">{t("sideDrawer.Settings")}</span>
            </NavLink>
          )}
        </Nav>
        <div className={`free-delivery ${is_AdClose ? "hideAd" : ""}`}>
          <i className="fas fa-times" onClick={closeAd}></i>
          <i className="fas fa-fire fire"></i>
          <h5>
            {t("sideDrawer.delivery")} <span>$25</span>
          </h5>
          <p>{t("sideDrawer.offer")}</p>
          <a href="#" className="order-now-btn">
            {t("sideDrawer.Order")} <i class="fas fa-long-arrow-alt-right"></i>
          </a>
          {/* <i class="fas fa-times" onClick={closeMenu}></i> */}
        </div>
      </Col>

      {/* ========= expand menu bar ========= */}

      {/* ${isOpen ? "slide-menu" : "hide-menu"} */}

      {/* <div className={`expanded-menu `}>
        <i class="fas fa-times" onClick={closeMenu}></i>
          <Navbar.Brand href="/" className="pt-2 logo" style={{ width: "100%" }}>
          <Image src={logo} className="logo-img" style={{ height: "10vh" }} />
          </Navbar.Brand>
          
          <Nav defaultActiveKey="/" className="flex-column pt-4">
            <Nav.Link href="/"><i class="fas fa-home house-s"></i>{t("sideDrawer.Home")}</Nav.Link>
            <Nav.Link href="/exploring" eventKey="/exploring"><Image src={explore} />{t("sideDrawer.Explore")}</Nav.Link>
            <Nav.Link href="/favorite" eventKey="/favourite"><Image style={{ width:"16px"}} src={fav} />{t("sideDrawer.Favourite")}</Nav.Link>
            <Nav.Link href="/orders" eventKey="/orders"><Image src={order} />{t("sideDrawer.Orders")}</Nav.Link>
            <Nav.Link href="/messages" eventKey="/messages"><Image src={message} />{t("sideDrawer.Messages")}<span className="number">2</span></Nav.Link>
        <Nav.Link href="/settings" eventKey="/settings"><Image src={setting} />{t("sideDrawer.Settings")}</Nav.Link>
          </Nav>
  </div> */}
    </React.Fragment>
  );
};

export default SideDrawer;
