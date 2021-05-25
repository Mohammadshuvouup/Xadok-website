import React, { useState, useEffect } from "react";
import {
  Col,
  Image,
  Modal,
  Row,
  Carousel,
  Card,
  CardDeck,
  Button,
} from "react-bootstrap";
import { useTranslation } from "react-i18next";
import ProductItem from "./ProductItem";
import axios from "axios";
import { ThemeProvider } from "@material-ui/core";
import Notifications, { notify } from "react-notify-toast";
import { ContactsOutlined } from "@material-ui/icons";

const API_PREFIX_URL = `https://deliveryxadok.s3.us-east-2.amazonaws.com/`;
var xadokCartItems = [];

// Modal.setAppElement('#root');

function ProductModal(props) {
  console.log("ProductModal");
  console.log(props);
  //   console.log(props.slide_product.gallery);
  var localItems = JSON.parse(localStorage.getItem("products")) || [];
  const [state, setState] = useState({
    selectedProduct: localItems,
  });
  const [num, setNum] = useState(1);
  const [cart_quantity, setCart_quantity] = useState(0);
  const [gallery, setGallery] = useState(props.slide_product.gallery);
  const [addCartUI, setAddCartUI] = useState(props.addCartUI);
  //   const [cartQuantity, setCartQuantity] = useState(props.cartQuantity);
  const [quantity, setQuantity] = useState(props.cartQuantity);
  const { t, i18n } = useTranslation();

  useEffect(() => {
    let language = localStorage.getItem("language");
    if (language && language.length !== 0) {
      i18n.changeLanguage(language);
    }
    console.log("loaded");
  }, []);

  const addToCart = (obj) => {
    setState((prevState) => {
      const found = prevState.selectedProduct.some(
        (el) => el.pro_id === obj.pro_id
      );
      const arrayproduct = prevState.selectedProduct;
      const selectedProduct = found
        ? prevState.selectedProduct
        : arrayproduct.push(obj);
      localStorage.setItem("cart_count", selectedProduct.length);
      localStorage.setItem("products", JSON.stringify(selectedProduct));

      let myColor = { background: "#0E1717", text: "#FFFFFF" };
      notify.show("Product added in the cart!", "success", 1000, myColor);
      //   setAddCartUI(true);
      return {
        selectedProduct,
        isAdded: true,
      };
    });
  };

  const handleAddCartModal = (item) => {
    var newLocalItems = JSON.parse(localStorage.getItem("products")) || [];
    const isSameShopFound = newLocalItems.some(
      (el) => el.shop_id === item.shop_id
    );
    if (isSameShopFound === false) {
      localStorage.removeItem("products");
      localStorage.setItem("cart_count", 1);
      setState({ selectedProduct: [] });
    } else {
      setState({ selectedProduct: newLocalItems });
    }
    const obj = {
      pro_id: item.pro_id,
      pro_name: item.pro_name_en,
      shop_id: item.shop_id,
      pro_stock: item.pro_stock,
      pro_qua: 1,
      pro_model: 0,
      product_price:
        item.pro_special_price != null &&
        item.pro_special_price != 0 &&
        item.pro_special_price != "" &&
        item.pro_special_price != 0.0 &&
        item.pro_special_price != 0.0
          ? item.pro_special_price
          : item.pro_price,
      img: item.pro_img,
      offer_price: item.pro_special_price,
      offer_percent: 0,
      offer_info: "",
    };
    setState((prevState) => {
        const found = prevState.selectedProduct.some(
          (el) => el.pro_id === obj.pro_id
        );
        const arrayproduct = prevState.selectedProduct;
        const selectedProduct = found
          ? prevState.selectedProduct
          : arrayproduct.push(obj);
        localStorage.setItem("cart_count", selectedProduct.length);
        localStorage.setItem("products", JSON.stringify(selectedProduct));
        let myColor = { background: "#0E1717", text: "#FFFFFF" };
        notify.show("Product added in the cart!", "success", 1000, myColor);
      });
  }

  const handleAddCart = (item) => {
    // console.log(item);
    // return;
    var newLocalItems = JSON.parse(localStorage.getItem("products")) || [];
    const isSameShopFound = newLocalItems.some(
      (el) => el.shop_id === item.shop_id
    );
    if (isSameShopFound === false) {
      localStorage.removeItem("products");
      localStorage.setItem("cart_count", 1);
      setState({ selectedProduct: [] });
    } else {
      setState({ selectedProduct: newLocalItems });
    }
    const obj = {
      pro_id: item.cartData.pro_id,
      pro_name: item.cartData.pro_name_en,
      shop_id: item.cartData.shop_id,
      pro_stock: item.cartData.pro_stock,
      pro_qua: 1,
      pro_model: 0,
      product_price:
        item.cartData.pro_special_price != null &&
        item.cartData.pro_special_price != 0 &&
        item.cartData.pro_special_price != "" &&
        item.cartData.pro_special_price != 0.0 &&
        item.cartData.pro_special_price != 0.0
          ? item.cartData.pro_special_price
          : item.cartData.pro_price,
      img: item.cartData.pro_img,
      offer_price: item.cartData.pro_special_price,
      offer_percent: 0,
      offer_info: "",
    };
    addToCart(obj);
  };

  const updateQuanity = (props, quantity, type) => {
    // console.log("--1--");
    // console.log(props);
    if (type == "minus" && parseInt(quantity) - 1 == 0) {
      let updatedItem = localItems.filter(function (el) {
        return el.pro_id !== props.pro_id;
      });
      localStorage.setItem("products", JSON.stringify(updatedItem));
      //   setAddCartUI(true);
    } else {
      if (type == "plus" && quantity >= props.pro_stock) {
        return;
      }
      const newList = localItems.map((item) => {
        if (item.pro_id === props.pro_id) {
          const updatedItem = {
            ...item,
            pro_qua:
              type == "plus" ? parseInt(quantity) + 1 : parseInt(quantity) - 1,
          };
          return updatedItem;
        }
        return item;
      });
      localStorage.setItem("products", JSON.stringify(newList));
      const found = newList.some((el) => el.pro_id === props.pro_id);
      if (found) {
        let product = newList.filter((el) => el.pro_id === props.pro_id);
        setQuantity(product[0].pro_qua);
      }
    }
  };

  return (
    <>
      <Modal show={props.show} onHide={props.onHide} className="modal-box">
        <Modal.Header closeButton>
          {props.cartData != null ? (
            <>
              <Row style={{ width: "100%" }}>
                {/* <Col md={6}>
                <Image
                  src={`${API_PREFIX_URL}${props.cartData.pro_img}`}
                ></Image>
              </Col> */}
                <Col md={5}>
                  <div className="product-img-box">
                    <Image
                      data-harry={addCartUI}
                      className="product-img"
                      src={`${API_PREFIX_URL}${props.cartData.pro_img}`}
                    ></Image>
                    <div className="d-flex">
                      {props.slide_product.gallery &&
                      props.slide_product.gallery.length > 0
                        ? props.slide_product.gallery.map(function (item) {
                            return (
                              <Image
                                className="preview_img"
                                src={`${API_PREFIX_URL}${item}`}
                              ></Image>
                            );
                          })
                        : ""}
                      {/* <Image
                      className="preview_img"
                      src={`${API_PREFIX_URL}${props.cartData.pro_img}`}
                    ></Image>
                    <Image
                      className="preview_img"
                      src={`${API_PREFIX_URL}${props.cartData.pro_img}`}
                    ></Image>
                    <Image
                      className="preview_img"
                      src={`${API_PREFIX_URL}${props.cartData.pro_img}`}
                    ></Image>
                    <Image
                      className="preview_img"
                      src={`${API_PREFIX_URL}${props.cartData.pro_img}`}
                    ></Image> */}
                    </div>
                  </div>
                </Col>

                <Col md={7} className="mt-5">
                  <Modal.Title>{props.cartData.product}</Modal.Title>
                  <h6 className="mt-5">
                    {t("subCategory.categories")}{" "}
                    <span>{props.cartData.category}</span>
                  </h6>
                  <h6 className="mt-2">
                    {t("subCategory.description")}{" "}
                    <span>{props.cartData.pro_desc}</span>
                  </h6>
                  {props.cartData.pro_special_price != null &&
                  props.cartData.pro_special_price != 0 &&
                  props.cartData.pro_special_price != "" &&
                  props.cartData.pro_special_price != 0.0 &&
                  props.cartData.pro_special_price != 0.0 ? (
                    <>
                      <del className="text-muted mt-3">
                        {props.cartData.pro_special_price}
                      </del>
                      <div className="d-flex align-items-center price-box mt-1">
                        <span className="current-price mr-1">
                          {props.cartData.pro_price}{" "}
                          <span className="currency">
                            {localStorage.getItem("country_currency")}
                          </span>
                        </span>
                      </div>
                    </>
                  ) : (
                    <div className="d-flex align-items-center price-box mt-1">
                      <span className="current-price mr-1">
                        {props.cartData.pro_price}{" "}
                        <span className="currency">
                          {localStorage.getItem("country_currency")}
                        </span>
                      </span>
                    </div>
                  )}

                  {/* <p className="note mt-2">
                    {t("subCategory.add-to-cart_note")}
                  </p> */}

                  <div className="cart-options d-flex align-items-center justify-content-end mt-5">
                    {addCartUI === true ? (
                      <button
                        className="modal_addcart_btn"
                        onClick={() => handleAddCart(props)}
                      >
                        <i
                          className="fas fa-shopping-cart mr-2"
                          style={{ fontSize: "28px" }}
                        ></i>{" "}
                        {t("explore.add-to-cart")}{" "}
                      </button>
                    ) : (
                      <div className="d-flex justify-content-center quantity-field">
                        <Button
                          className="plus-btn"
                          onClick={() =>
                            updateQuanity(props.cartData, quantity, "plus")
                          }
                        >
                          +
                        </Button>
                        <input type="text" value={quantity} />
                        <Button
                          className="minus-btn"
                          onClick={() =>
                            updateQuanity(props.cartData, quantity, "minus")
                          }
                        >
                          -
                        </Button>
                      </div>
                    )}
                    <i
                      class="fas fa-heart favourite-icon"
                      style={{ fontSize: "25px" }}
                    ></i>
                  </div>
                </Col>
              </Row>
            </>
          ) : (
            ""
          )}
        </Modal.Header>
        <Modal.Body>
          {props.cartData != null ? (
            <>
              {/* =============== Alternnative Products ========== */}
              <h2>{t("subCategory.Alternative-Products")}</h2>
              <Row className="modal-carousel-row">
                <Carousel classname="alternative-items-carousel">
                  {!props.slide_product
                    ? null
                    : props.alternative_Product.map((product, index) => (
                        <Carousel.Item>
                          <CardDeck>
                            {product.map((val, index) =>
                              !val ? null : (
                                // <ProductItem
                                //     className="alternative-item"
                                //     index={index}
                                //     pro_img={val.pro_img}
                                //     pro_price={val.pro_price}
                                //     pro_name={val.pro_name}
                                //     pro_name_en={val.pro_name_en}
                                //     pro_special_price={val.pro_special_price}
                                //     pro_stock={val.pro_stock}
                                //     pro_id={val.pro_id}
                                //     procat_sub={val.procat_sub}>
                                //     </ProductItem>
                                <Card className="alternative-item">
                                  <Card.Img
                                    src={`${API_PREFIX_URL}${val.pro_img}`}
                                  />
                                  <Card.Body>
                                    <Card.Text>
                                      {val.pro_special_price != null &&
                                      val.pro_special_price != 0 &&
                                      val.pro_special_price != "" &&
                                      val.pro_special_price != 0.0 &&
                                      val.pro_special_price != 0.0 ? (
                                        <p className="pl-2 old-price">
                                          <del>{val.pro_price}</del>
                                        </p>
                                      ) : (
                                        <p
                                          className="pl-2 old-price"
                                          style={{ color: "white" }}
                                        >
                                          <del>&nbsp;</del>
                                        </p>
                                      )}
                                      {val.pro_special_price != null &&
                                      val.pro_special_price != 0 &&
                                      val.pro_special_price != "" &&
                                      val.pro_special_price != 0.0 &&
                                      val.pro_special_price != 0.0 ? (
                                        <div className="price-box">
                                          <h4 className="pl-2 item-price">
                                            {val.pro_special_price}
                                            <span className="currency-symbol">
                                              {localStorage.getItem(
                                                "country_currency"
                                              )}
                                            </span>
                                          </h4>
                                          <div className="discount">
                                            {/* <p className="pt-1 pl-3 ptag">
                                              25%
                                            </p> */}
                                          </div>
                                        </div>
                                      ) : (
                                        <div className="price-box">
                                          <h4 className="pl-2 item-price">
                                            {val.pro_price}
                                            <span className="currency-symbol">
                                              {localStorage.getItem(
                                                "country_currency"
                                              )}
                                            </span>
                                          </h4>
                                        </div>
                                      )}
                                      <p className="item_description">
                                        {val.pro_name}
                                      </p>
                                    </Card.Text>
                                    <button className="addcartBtn"
                                      onClick={() => handleAddCartModal(val)}>
                                      <i className="fas fa-shopping-cart mr-2"></i>{" "}
                                      {t("explore.add-to-cart")}{" "}
                                    </button>
                                  </Card.Body>
                                </Card>
                              )
                            )}
                          </CardDeck>
                        </Carousel.Item>
                      ))}
                </Carousel>
              </Row>
              {/* =============== Similar Products ========== */}
              <h2 className="mt-3">{t("explore.similar-products")}</h2>
              <Row className="modal-carousel-row">
                <Carousel classname="alternative-items-carousel">
                  {props.cartSimilar_Product &&
                    props.cartSimilar_Product.length > 0 &&
                    props.cartSimilar_Product.map((value, index) => {
                      return (
                        <Carousel.Item key={index}>
                          <CardDeck>
                            {value.map((val, index) =>
                              !val ? null : (
                                <Card className="alternative-item">
                                  <Card.Img
                                    src={`${API_PREFIX_URL}${val.pro_img}`}
                                  />
                                  <Card.Body>
                                    <Card.Text>
                                      {val.pro_special_price != null &&
                                      val.pro_special_price != 0 &&
                                      val.pro_special_price != "" &&
                                      val.pro_special_price != 0.0 &&
                                      val.pro_special_price != 0.0 ? (
                                        <p className="pl-2 old-price">
                                          <del>{val.pro_price}</del>
                                        </p>
                                      ) : (
                                        <p
                                          className="pl-2 old-price"
                                          style={{ color: "white" }}
                                        >
                                          <del>&nbsp;</del>
                                        </p>
                                      )}
                                      {val.pro_special_price != null &&
                                      val.pro_special_price != 0 &&
                                      val.pro_special_price != "" &&
                                      val.pro_special_price != 0.0 &&
                                      val.pro_special_price != 0.0 ? (
                                        <div className="price-box">
                                          <h4 className="pl-2 item-price">
                                            {val.pro_special_price}
                                            <span className="currency-symbol">
                                              {localStorage.getItem(
                                                "country_currency"
                                              )}
                                            </span>
                                          </h4>
                                          <div className="discount">
                                            {/* <p className="pt-1 pl-3 ptag">
                                              25%
                                            </p> */}
                                          </div>
                                        </div>
                                      ) : (
                                        <div className="price-box">
                                          <h4 className="pl-2 item-price">
                                            {val.pro_price}
                                            <span className="currency-symbol">
                                              {localStorage.getItem(
                                                "country_currency"
                                              )}
                                            </span>
                                          </h4>
                                        </div>
                                      )}
                                      <p className="item_description">
                                        {val.pro_name}
                                      </p>
                                    </Card.Text>
                                    <button
                                      className="addcartBtn"
                                      onClick={() => handleAddCartModal(val)}
                                    >
                                      <i className="fas fa-shopping-cart mr-2"></i>{" "}
                                      {t("explore.add-to-cart")}{" "}
                                    </button>
                                  </Card.Body>
                                </Card>
                              )
                            )}
                          </CardDeck>
                        </Carousel.Item>
                      );
                    })}
                </Carousel>
              </Row>
            </>
          ) : (
            ""
          )}
        </Modal.Body>
      </Modal>
    </>
  );
}

export default ProductModal;
