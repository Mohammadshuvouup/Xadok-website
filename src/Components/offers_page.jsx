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
} from "react-bootstrap";
import logo from "../logo/logo.svg";
import Footer from "./footer";
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
import "../App.css";
const API_PREFIX_URL = `https://deliveryxadok.s3.us-east-2.amazonaws.com/`;
const page_size = 30;




const OfferPage = () => {

    let Params = useParams();

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
        // console.log("hi");
        childRef.current.reloadCartItem();
    };

    const handleSearch = (result) => {
        if (result.data.status === 1) {
          setsubcat_list(result.data.data.products);
        }
    };

    
      const [isOpen, setOpen] = useState(false);
    const [isClose, setClose] = useState(false);
    const [is_AdClose, setAdClose] = useState(false);
    const [category, setCategory] = useState([]);
    const [page, setPage] = useState(1);
    const [appState, setAppState] = useState({ loading: false, res: null });
    const [product_subcategory, setProduct_subcategory] = useState([]);
    const [subcat_list, setsubcat_list] = useState([]);

      /*    ======================== DISPLAY SIDEBAR SUB CATEGORIES ======================== */

    const displaySubCategory = (prod_cat) => {
        setPage(1);
        setAppState({ loading: true });
    };

    return (
        
        <React.Fragment>
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
            <TopBar
              ref={childRef}
              search={handleSearch}
              shop_id={Params.shop_id}
            />
           

          



            
          </Col>
        </Row>
           
          
            </Container>
        </React.Fragment>


    );
  
}

export default  OfferPage;
