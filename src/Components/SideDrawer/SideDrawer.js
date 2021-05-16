import React , {useState,useEffect} from "react";
import {Image,Navbar,Row,Col,Nav} from 'react-bootstrap'
import {Link} from 'react-router-dom';
import logo from "../logo/logo.svg";
import explore from "../logo/explore.svg"
import setting from "../logo/setting.svg";
import message from "../logo/messages.svg";
import order from "../logo/orders.svg";
import fav from "../logo/favourites.svg";
import '../../css/sideDrawer.css';
import { Trans, useTranslation } from 'react-i18next';

const SideDrawer = props => {
  const { t, i18n } = useTranslation();
   

    useEffect(() => {
      
      let language = localStorage.getItem("language");
  
      // console.log("LANGUAGE SELECTED", language);
    
      if (language && language.length !== 0) {
        i18n.changeLanguage(language)
      }
  
    },[]);

  const [isOpen,setOpen]= useState(false);
  const [isClose,setClose]=useState(false); 
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

  const closeAd=()=>{
    alert("working");
    if(is_AdClose===false){
      setAdClose(true);
    }
    
  
  }


return(
<React.Fragment>

  {/* <Col className="menu-icon" sm={1} xs={1}>
     <i className="fas fa-bars" onClick={expandMenu}></i>
  </Col> */}
  <Col xs={2} sm={2} lg={2} className="sideNav">
      
      <Navbar.Brand href="/" className="pt-2 logo" style={{ width: "100%" }}>
          <Image src={logo} className="logo-img" style={{ height: "10vh" }} />
      </Navbar.Brand>
      <Nav defaultActiveKey="" className="flex-column pt-4">
        <Nav.Link href="/"><i class="fas fa-home house-s"></i><span className="menu-item">{t("sideDrawer.Home")}</span></Nav.Link>

        <Link to="/exploring" style={{textDecoration:"none"}}>
          <Nav.Link href="/exploring" eventKey="/exploring"><Image src={explore} /><span className="menu-item">{t("sideDrawer.Explore")}</span></Nav.Link>
        </Link>
        <Link to="/favorite" style={{textDecoration:"none"}}>
          <Nav.Link href="/favorite" eventKey="/favourite"><Image style={{ width: "16px" }} src={fav} /><span className="menu-item">{t("sideDrawer.Favourite")}</span></Nav.Link>
        </Link>
        <Link to="/orders" style={{textDecoration:"none"}}>
          <Nav.Link href="/orders" eventKey="/orders"><Image src={order} /><span className="menu-item">{t("sideDrawer.Orders")}</span></Nav.Link>
        </Link>
        <Link to="/messages" style={{textDecoration:"none"}}>
          <Nav.Link href="/messages" eventKey="/messages"><Image src={message} /><span className="menu-item">{t("sideDrawer.Messages")}</span><span className="number">2</span></Nav.Link>
        </Link>
        <Link to="/settings" style={{textDecoration:"none"}}>
        <Nav.Link href="/settings" eventKey="/settings"><Image src={setting} /><span className="menu-item">{t("sideDrawer.Settings")}</span></Nav.Link>
        </Link>
      </Nav>

      <div className={`free-delivery ${is_AdClose ? "hideAd" : ""}`}>
        <i className="fas fa-times" onClick={closeAd}></i>
        <i className="fas fa-fire fire"></i>
        <h5>{t("sideDrawer.delivery")} <span>$25</span></h5>
        <p>{t("sideDrawer.offer")}</p>
        <a href="#" className="order-now-btn">{t("sideDrawer.Order")} <i class="fas fa-long-arrow-alt-right"></i></a>
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
}


export default SideDrawer;