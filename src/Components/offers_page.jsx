import React, { useState ,useRef, useEffect} from 'react'
import {
    Navbar,
    Row,
    Col,
    Nav,
    Container,
    Image,
    Card,
    Button,
  Accordion,
  Carousel
} from "react-bootstrap";
import logo from "../logo/logo.svg";
import Footer from "../Components/footer";
import offerpageimg from "../xadok/offerspages.png";

import TopBar from "./topBar";
import ProductModal from "./product/ProductModal";
import ProductItem from "./product/ProductItem";
import "../css/explore.css";
import axios from "axios";
import InfiniteScroll from "react-infinite-scroller";
import { Link, NavLink, useParams } from "react-router-dom";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from "react-loader-spinner";
import NoProduct from "./no_product_page";
import { Trans, useTranslation } from "react-i18next";
import "../css/subCategory.css";
import "../css/offers_page.css";
import "../App.css";
import Offer_Cart from './Modals/offer_cart_popup'
const API_PREFIX_URL = `https://deliveryxadok.s3.us-east-2.amazonaws.com/`;
const page_size = 30;




const OfferPage = () => {
  const [shops, setShops] = useState([]);
  const [loadMore, setLoadMore] = useState(true);
  const [isOpen, setOpen] = useState(false);
  const [isClose, setClose] = useState(false);
  const [is_AdClose, setAdClose] = useState(false);
  const [category, setCategory] = useState([]);
  const [page, setPage] = useState(1);
  const [appState, setAppState] = useState({ loading: false, res: null });
  const [product_subcategory, setProduct_subcategory] = useState([]);
  const [subcat_list, setsubcat_list] = useState([]);

  const [show_cart, setShow_cart] = useState(false);

  const handleClose_cart = () => setShow_cart(false);
  const handleShow_cart = () => setShow_cart(true);

  let Params = useParams();

  const shop_Params = {
    shop_id: "Params.shop_id",
    user_id: "",
  };


  useEffect(() => {
    axios
      .post("https://ristsys.store/api/shopPage", shop_Params)
      .then((response) => {
        if (response.status === 0) {
          setLoadMore(false);
        }
        localStorage.setItem(
          "minimum_amount_for_free_shipping",
          response.data.data.shop.minimum_amount_for_free_shipping
        );
        setAppState({ loading: false, res: response });
        setShops(response.data.data.shop);
        setCategory(response.data.data.category);
      })

      .catch((error) => {
        console.log(error);
      })
    
  }
  )


    const expandMenu = () => {
        if (isOpen === false) {
          setOpen(true);
          setClose(false);
        }
      };
    
      const closeMenu = () => {
        if (isClose === false) {
          setOpen(false);
          setClose(true);
        }
      };
    
      const childRef = useRef();
    const handleCustomEvent = () => {
        childRef.current.reloadCartItem();
    };

    const handleSearch = (result) => {
        if (result.data.status === 1) {
          setsubcat_list(result.data.data.products);
        }
    };

    
    

      /*    ======================== DISPLAY SIDEBAR SUB CATEGORIES ======================== */

    const displaySubCategory = (prod_cat) => {
        setPage(1);
        setAppState({ loading: true });
    };

    return (
        
      <React.Fragment>
        <Offer_Cart show_cart={show_cart} setShow_cart={setShow_cart} handleClose_cart={handleClose_cart} handleShow_cart={ handleClose_cart}/>
            <Container className="container-box" fluid>
            <Row>
          <Col className="menu-icon" sm={1} xs={1}>
            <i className="fas fa-bars" onClick={expandMenu}></i>
          </Col>
          <Col xs={2} sm={2} lg={2} className="sideNav subcategory-nav">
            <Navbar.Brand className="pt-2 logo" style={{ width: "100%" }}>
              <NavLink to="/">
                <Image
                  src={logo}
                  className="logo-img"
                  style={{ height: "10vh" }}
                />
              </NavLink>
            </Navbar.Brand>
            <Nav defaultActiveKey="" className="flex-column pt-4">
              {category &&
                category.length > 0 &&
                category.map((value, index) => {
                  return (
                    <Nav.Link className="side-bar-item" key={value.procat_id}>
                      <Accordion
                        defaultActiveKey="0"
                        onClick={() => displaySubCategory(value.procat_id)}
                      >
                        <Card>
                          <Card.Header>
                            <Link
                              to={
                                "/" +
                                Params.shop_name +
                                "/" +
                                Params.shop_id +
                                "/" +
                                value.procat_id +
                                "/" +
                                value.name +
                                "/" +
                                "0"
                              }
                              style={{ textDecoration: "none" }}
                            >
                              <Accordion.Toggle
                                as={Button}
                                variant="link"
                                eventKey="1"
                              >
                                <Image
                                  src={`${API_PREFIX_URL}${value.procat_img}`}
                                />
                                {value.name}
                              </Accordion.Toggle>
                            </Link>
                          </Card.Header>

                          <Accordion.Collapse eventKey="1" key={index}>
                            <Card.Body>
                              {product_subcategory &&
                                product_subcategory.length > 0 &&
                                product_subcategory.map((sub_cat, index) =>
                                  sub_cat.length == 0 ? (
                                    <Loader
                                      className="text-center"
                                      type="TailSpin"
                                      color="#e3424b"
                                      height={80}
                                      width={80}
                                    />
                                  ) : (
                                    <ul
                                      className="side-nav-catgory-list"
                                      key={sub_cat.procat_id}
                                    >
                                      {/* <Image src={`${API_PREFIX_URL}${sub_cat.procat_img}`} /> */}
                                      <Link
                                        to={
                                          "/" +
                                          Params.shop_name +
                                          "/" +
                                          Params.shop_id +
                                          "/" +
                                          value.procat_id +
                                          "/" +
                                          sub_cat.procat_name_en +
                                          "/" +
                                          sub_cat.procat_id
                                        }
                                        style={{ textDecoration: "none" }}
                                      >
                                        <li> {sub_cat.procat_name_en}</li>
                                      </Link>
                                    </ul>
                                  )
                                )}
                            </Card.Body>
                          </Accordion.Collapse>
                        </Card>
                      </Accordion>
                    </Nav.Link>
                  );
                })}
            </Nav>
          </Col>

          {/* ========= expand menu bar ========= */}

          <div
            className={`expanded-menu ${isOpen ? "slide-menu" : "hide-menu"}`}
          >
            <i class="fas fa-times" onClick={closeMenu}></i>
            <Navbar.Brand
              href="/"
              className="pt-2 logo"
              style={{ width: "100%" }}
            >
              <Image
                src={logo}
                className="logo-img"
                style={{ height: "10vh" }}
              />
            </Navbar.Brand>

            <Nav defaultActiveKey="" className="flex-column pt-4">
              {category &&
                category.length > 0 &&
                category.map((value, index) => {
                  return (
                    <Nav.Link className="side-bar-item" key={value.procat_id}>
                      <Accordion
                        defaultActiveKey="0"
                        onClick={() => displaySubCategory(value.procat_id)}
                      >
                        <Card>
                          <Card.Header>
                            <Link
                              to={
                                "/" +
                                Params.shop_name +
                                "/" +
                                Params.shop_id +
                                "/" +
                                value.procat_id +
                                "/" +
                                value.name +
                                "/" +
                                "0"
                              }
                              style={{ textDecoration: "none" }}
                            >
                              <Accordion.Toggle
                                as={Button}
                                variant="link"
                                eventKey="1"
                              >
                                <Image
                                  src={`${API_PREFIX_URL}${value.procat_img}`}
                                />
                                {value.name}
                              </Accordion.Toggle>
                            </Link>
                          </Card.Header>

                          <Accordion.Collapse eventKey="1" key={index}>
                            <Card.Body>
                              {product_subcategory &&
                                product_subcategory.length > 0 &&
                                product_subcategory.map((sub_cat, index) =>
                                  sub_cat.length == 0 ? (
                                    <Loader
                                      className="text-center"
                                      type="TailSpin"
                                      color="#e3424b"
                                      height={80}
                                      width={80}
                                    />
                                  ) : (
                                    <ul
                                      className="side-nav-catgory-list"
                                      key={sub_cat.procat_id}
                                    >
                                      {/* <Image src={`${API_PREFIX_URL}${sub_cat.procat_img}`} /> */}
                                      <Link
                                        to={
                                          "/" +
                                          Params.shop_name +
                                          "/" +
                                          Params.shop_id +
                                          "/" +
                                          value.procat_id +
                                          "/" +
                                          sub_cat.procat_name_en +
                                          "/" +
                                          sub_cat.procat_id
                                        }
                                        style={{ textDecoration: "none" }}
                                      >
                                        <li> {sub_cat.procat_name_en}</li>
                                      </Link>
                                    </ul>
                                  )
                                )}
                            </Card.Body>
                          </Accordion.Collapse>
                        </Card>
                      </Accordion>
                    </Nav.Link>
                  );
                })}
            </Nav>
            
          </div>

          <Col xs={10} sm={10} lg={10} fluid>
              <TopBar ref={childRef} search={handleSearch} shop_id={Params.shop_id} />
              <Row>
              <Col
                xs={12}
                sm={12}
                lg={12}
                className="explore-banner"
                style={{
                  background: `url( ${
                    shops.gallery != null && shops.gallery.length > 0
                      ? API_PREFIX_URL + shops.gallery[0].gallery_image
                      : ""
                  })`,
                }}
              >
                {shops.shop_img != null ? (
                  <Image src={`${API_PREFIX_URL}${shops.shop_img}`}></Image>
                ) : (
                  <Loader
                    className="text-center"
                    type="TailSpin"
                    color="#e3424b"
                    height={80}
                    width={80}
                  />
                )}
              </Col>
              </Row>
              <Row className="pl-4">
              <h2 className="explore-sub-title mb-4">
                Weekend Offers
              </h2>
              
            </Row>
            <Carousel className="offers-products">
                <Carousel.Item interval={1000}>
                  <img
                    className="d-block w-100"
                    src={offerpageimg}
                    alt="First slide"
                  />
                  <i className="fas fa-shopping-cart shoppingcart-icon" onClick={handleShow_cart}></i>
 
                </Carousel.Item>
                {/* <Carousel.Item interval={500}>
                  <img
                    className="d-block w-100"
                    src={offerpageimg}
                    alt="Second slide"
                  />
         
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src={offerpageimg}
                    alt="Third slide"
                  />
                </Carousel.Item> */}
              </Carousel>      



            
          </Col>
        </Row>
           
          
        </Container>
        <Footer/>
        
        </React.Fragment>


    );
  
}

export default  OfferPage;
