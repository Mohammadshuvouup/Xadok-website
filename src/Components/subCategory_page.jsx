import React, { useState, useEffect, useRef } from "react";
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
import { Link, useParams } from "react-router-dom";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from "react-loader-spinner";
import NoProduct from "./no_product_page";
import { Trans, useTranslation } from "react-i18next";
import '../css/subCategory.css';
import '../App.css';

const API_PREFIX_URL = `https://deliveryxadok.s3.us-east-2.amazonaws.com/`;
const page_size = 28;

export default function Explore(props) {
  const [modalShow, setModalShow] = useState(false);
  const [num1, setNum1] = useState(1);
  const plus1 = () => {
    setNum1(num1 + 1);
  };
  const minus1 = () => {
    if (num1 > 0) {
      setNum1(num1 - 1);
    } else {
    }
  };
  const [isOpen, setOpen] = useState(false);
  const [isClose, setClose] = useState(false);
  const [is_AdClose, setAdClose] = useState(false);

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

  const closeAd = () => {
    alert("working");
    if (is_AdClose === false) {
      setAdClose(true);
    }
  };

  let Params = useParams();

  const shopID = Params.shop_id;
  const [page, setPage] = useState(1);

  // console.log("Params", Params);

  const similarProduct_Param = {
    shop_id: shopID,
    user_id: "",
  };

  let modal_Param = {
    shop_id: shopID,
    pro_id: "",
    user_id: "",
  };

  const product_Category_Param = {
    shop_id: Params.shop_id,
    procat_id: Params.cat_id,
    page_no: page,
    page_size: page_size,
  };

  const sub_category_Params = {
    shop_id: Params.shop_id,
    procat_sub: Params.subcat_id,
    page_size: page_size,
    page_no: page,
  };

  const [category, setCategory] = useState([]);
  const [product_subcategory, setProduct_subcategory] = useState([]);
  const [cartData, setCartData] = useState([]);
  const [alternative_Product, setAlternative_Product] = useState([]);
  const [cartSimilar_Product, setCartSimilar_Product] = useState([]);
  const [shops, setShops] = useState([]);
  var similar_list = [];
  var alternate_list = [];
  const [slide_product, setSlide_product] = useState([]);
  // const updateLocation={
  //   lat:26.1109803,
  //   lng:50.5156726
  // }

  // const [sidebar_sub_cat,setSidebar_sub_cat]=useState([]);
  const [subcat_list, setsubcat_list] = useState([]);
  const [subcat_filterbtn, setsubcat_filterbtn] = useState([]);
  const [allsubcat_data, setAllsubcat_data] = useState([]);
  const [subtitle, setSubtitle] = useState("");

  const [filter_subcatID, setFilter_subcatID] = useState(0);
  // let xadokCartItems = [];
  // let count = 0;

  // const addXadokCart=()=>{
  //   xadokCartItems.push({pro_id: data.pro_id, pro_name: data.pro_name_en, pro_qua: count, pro_model: 0, product_price: ((data.pro_special_price != 0 || data.pro_special_price !='') ? data.pro_special_price : data.pro_price), img: API_PREFIX_URL+data.pro_img, offer_price: data.pro_special_price, offer_percent: 0, offer_info: data.pro_desc_en});
  // }

  /*    ======================== DISPLAY SIDEBAR SUB CATEGORIES ======================== */

  const displaySubCategory = (prod_cat) => {
    setPage(1);
    setAppState({ loading: true });
  };

  const shop_Params = {
    shop_id: Params.shop_id,
    user_id: "",
  };

  const [appState, setAppState] = useState({ loading: false, res: null });
  const { t, i18n } = useTranslation();

  useEffect(() => {
    let language = localStorage.getItem("language");
    
    if (language && language.length !== 0) {
      i18n.changeLanguage(language);
    }
    setAppState({ loading: true });
    axios
      .post("https://ristsys.store/api/shopPage", shop_Params)
      .then((response) => {
        if (response.status === 0) {
          setLoadMore(false);
        }
        setAppState({ loading: false, res: response });
        setShops(response.data.data.shop);
        setCategory(response.data.data.category);
      })

      .catch((error) => {
        console.log(error);
      });

    if (Params.subcat_id == 0) {
      setAppState({ loading: true });
      axios
        .post(
          "https://ristsys.store/api/GetShopProducts",
          product_Category_Param
        )
        .then((response) => {
          setAppState({ loading: false, res: response });
          if (response.status === 0) {
            setLoadMore(false);
          }
          // console.log("sidebar cat subcat products api", response.data.data);
          setLoadMore(true);
          setProduct_subcategory(response.data.subs);
          setsubcat_filterbtn(response.data.subs);
          setsubcat_list(response.data.data);
          setAllsubcat_data(response.data.data);
        })

        .catch((error) => {
          console.log(error);
        });
    } else {
      if (Params.subcat_id !== 0) {
        setAppState({loading: true});
        axios
            .post(
                "https://ristsys.store/api/GetShopSubCategoryProducts",
                sub_category_Params
            )
            .then((response) => {
              if (response.status === 0) {
                setLoadMore(false);
              }

              setsubcat_list(response.data.data);
              setSubtitle("");
            })

            .catch((error) => {
              console.log(error);
            });
      }
    }

  }, [setAppState, Params]);

  const filter_btns = localStorage.getItem("filter_buttons") === "true";

  const FilterButtons = () => {
    return (
      <>
        { (subcat_filterbtn!=null && subcat_filterbtn.length>0) ?
          subcat_filterbtn.map((value, index) => {
            return (
              <Link
                to={
                  "/" +
                  Params.shop_name +
                  "/" +
                  Params.shop_id +
                  "/" +
                  value.procat_id +
                  "/" +
                  value.procat_name_en +
                  "/" +
                  value.procat_id
                }
                style={{ textDecoration: "none" }}
              >
                <Button
                  aria-pressed="true"
                  className="filter_btn mb-4"
                  key={index}
                  onClick={() => subCategoryItems(value.procat_id)}
                >
                  {value.procat_name_en}
                </Button>
              </Link>
            );
          })
          :""
          }
      </>
    );
  };

  const subCategoryItems = (passedID) => {
    setLoadMore(true);
    setPage(1);

    if (passedID !== "All") {
      // const  filter_btn_Param={
      //     shop_id:  Params.shop_id,
      //     procat_sub : passedID,
      //     page_no : page,
      //     page_size: page_size
      //   }
      // axios.post('https://ristsys.store/api/GetShopSubCategoryProducts', filter_btn_Param)
      // .then(response=>{
      //   if(response.status===0){
      //     setLoadMore(false);
      //   }
      //   if(response.status===0 && response.data==null){
      //     ProductsNotAvailable();
      //   }
      //   // console.log("filtered subcategory api",response.data.data);
      //   if(response.data.data != null){
      //   setsubcat_list(response.data.data);
      //   }
      // })
      // .catch(error=>{
      //   console.log(error)
      // })
    } else {
      setsubcat_list(allsubcat_data);
      setSubtitle("All");
    }
  };

  const [loadMore, setLoadMore] = useState(true);

  const ProductsNotAvailable = () => {
    return <NoProduct />;
  };


  /*    ======================== PRODUCTS TO DISPLAY FOR SUBCATEGORY PAGE ======================== */
  let recentPrice = 0.0;
  let prevPrice = 0.0;
  const SubcategoryProducts = () => {
    return (
      <InfiniteScroll
        pageStart={1}
        // loadMore={loadItems}
        hasMore={true || false}
        // loader={
        //   <div className="loader" key={0}>
        //     <Loader
        //       className="text-center"
        //       type="TailSpin"
        //       color="#e3424b"
        //       height={80}
        //       width={80}
        //     />
        //   </div>
        // }
        className="row justify-content-lg-between pl-5"
      >
        {subcat_list !== null &&
          subcat_list.length > 0 &&
          subcat_list.map((value, index) => {
            if (value !== null) {
              return (
                <ProductItem
                  index={index}
                  pro_img={value.pro_img}
                  pro_price={value.pro_price}
                  pro_name={value.pro_name}
                  pro_name_en={value.pro_name_en}
                  pro_special_price={value.pro_special_price}
                  pro_stock={value.pro_stock}
                  pro_id={value.pro_id}
                  procat_sub={value.procat_sub}
                ></ProductItem>
              );
            }
          })}
      </InfiniteScroll>
    );
  };

  return (
    <React.Fragment>
      <Container className="container-box" fluid>
        <ProductModal
          show={modalShow}
          onHide={() => setModalShow(false)}
          cartData={cartData}
          alternative_Product={alternative_Product}
          cartSimilar_Product={cartSimilar_Product}
          slide_product={slide_product}
          // xadokCartItems={xadokCartItems}
        />
        <Row>
          <Col className="menu-icon" sm={1} xs={1}>
            <i className="fas fa-bars" onClick={expandMenu}></i>
          </Col>
          <Col sm={2} lg={2} className="sideNav subcategory-nav">
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
                    <Nav.Link className="side-bar-item">
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
                                " 0"
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
                                    <ul className="side-nav-catgory-list">
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
          </div>

          <Col xs={10} sm={10} lg={10} fluid>
            <TopBar />

            <Row>
              <Col
                xs={12}
                sm={12}
                lg={12}
                className="explore-banner"
                style={{
                  background: `url( ${
                    shops.gallery != null && shops.gallery.length > 0
                      ? API_PREFIX_URL + shops.gallery[0].shop_gall
                      : ""
                  })`,
                }}
              >
                {appState.loading ? (
                  <Loader
                    className="text-center"
                    type="TailSpin"
                    color="#e3424b"
                    height={80}
                    width={80}
                  />
                ) : (
                  <Image src={`${API_PREFIX_URL}${shops.shop_img}`}></Image>
                )}
              </Col>
            </Row>

            <Row className="bg-gray">
              <h2 className="explore-sub-title mb-4 pl-4">
                {subtitle == "" ? Params.subcat_name : "All"}
              </h2>
              <Col xs={12} sm={12} lg={12} style={{display: "none"}}>
                <div className={`btn-container d-flex flex-wrap pl-4`}>
                  <Button
                    className="filter_btn mb-4"
                    onClick={() => subCategoryItems("All")}
                  >
                    All
                  </Button>

                  <FilterButtons />
                </div>
              </Col>
            </Row>

            <Row className="bg-gray">
              <SubcategoryProducts />
            </Row>
          </Col>
        </Row>
      </Container>

      <Footer className="mt-4" />
    </React.Fragment>
  );
}
