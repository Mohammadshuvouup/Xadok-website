import React, { useState, useEffect } from "react";
import {
  Col,
  Image,
  Modal,
  Row,
  Carousel,
  Card,
  CardDeck,
  Button
} from "react-bootstrap";
import { useTranslation } from "react-i18next";
import ProductItem from "./ProductItem";
import axios from "axios";

const API_PREFIX_URL = `https://deliveryxadok.s3.us-east-2.amazonaws.com/`;
var xadokCartItems = [];

function ProductModal(props) {
  const [num, setNum] = useState(1);
  const [cart_quantity, setCart_quantity] = useState(0);

  const plus = () => {
    setNum(num + 1);
  };
  const minus = () => {
    setNum(num - 1);
  };
  const { t, i18n } = useTranslation();

  useEffect(() => {
    let language = localStorage.getItem("language");
    if (language && language.length !== 0) {
      i18n.changeLanguage(language);
    }
  }, []);

  const addXadokCart = () => {
    if (xadokCartItems.some((item) => item.pro_id == props.cartData.pro_id)) {
      xadokCartItems.map((value, index) => {
        if (value.pro_id == props.cartData.pro_id) {
          value.pro_qua = value.pro_qua + 1;
          // value.pro_qua=num+1;
          // setNum(value.pro_qua);
        }
      });
    } else {
      xadokCartItems.push({
        pro_id: props.cartData.pro_id,
        pro_name: props.cartData.pro_name_en,
        pro_qua: num,
        pro_model: 0,
        product_price:
          props.cartData.pro_special_price == 0 ||
          props.cartData.pro_special_price == ""
            ? props.cartData.pro_price
            : props.cartData.pro_special_price,
        img: API_PREFIX_URL + props.cartData.pro_img,
        offer_price: props.cartData.pro_special_price,
        offer_percent: 0,
        offer_info: props.cartData.pro_desc_en,
      });
      let qty = cart_quantity + 1;
      setCart_quantity(qty);
      setNum(1);
      // setNum(props.cartData.pro_qua);
    }

    localStorage.setItem("xadokCartItems", JSON.stringify(xadokCartItems));
    localStorage.setItem("cart_quantity", JSON.stringify(cart_quantity));

    localStorage.setItem("modal_cart_quantity", JSON.stringify(num));
  };

  //   const getProductInfo = () => {

  // let params = {
  //     pro_id: props.cart_data.pro_id,
  // };
  // axios
  //   .post("https://ristsys.store/api/GetProductInfo", params)
  //   .then((response) => {
  //     console.log(response);
  //     if (response.data.status === 1) {
  //     }
  //   });
  //   };

  return (
    <>
      <Modal show={props.show} onHide={props.onHide} className="modal-box">
        <Modal.Header closeButton>
          {props.cartData != null ? (
            <Row>
              <Col md={6}>
                <Image
                  src={`${API_PREFIX_URL}${props.cartData.pro_img}`}
                ></Image>
              </Col>
              <Col md={6}>
                <Modal.Title>{props.cartData.product}</Modal.Title>
                <h6 className="mt-5">
                  {t("subCategory.categories")}{" "}
                  <span>{props.cartData.category}</span>
                </h6>
                <h6 className="mt-2">
                  {t("subCategory.description")}{" "}
                  <span>{props.cartData.pro_desc_en}</span>
                </h6>
                <del className="text-muted mt-3">
                  {props.cartData.pro_price}
                </del>
                <div className="d-flex align-items-center price-box mt-1">
                  <span className="current-price mr-1">
                    {props.cartData.pro_price}
                  </span>
                  <span className="currency">BHD</span>
                  <div className="discount">25%</div>
                </div>
                <p className="note mt-2">{t("subCategory.add-to-cart_note")}</p>

                <div className="cart-options d-flex align-items-center justify-content-end">
                  <div className="d-flex justify-content-center quantity-field">
                    <Button className="plus-btn">+</Button>
                    <input type="text" value="1" />
                    <Button className="minus-btn">-</Button>
                  </div>
                  {/* <div className="input-group plus-minus-input">
                    <div className="input-group-button">6px
                      <button type="button" className="sign-btn minus" data-quantity="minus" data-field="quantity" onClick={minus}>
                        <i className="fa fa-minus" aria-hidden="true"></i>
                      </button>
                    </div>
                    <input className="input-group-field" type="number" name="quantity" value={num} />
                    <div className="input-group-button">
                      <button type="button" className="sign-btn hollow plus" data-quantity="plus" data-field="quantity" onClick={plus}>
                        <i className="fa fa-plus" aria-hidden="true"></i>
                      </button>
                    </div>
                  </div> */}

                  <button className="modal_addcart_btn" onClick={addXadokCart}>
                    <i
                      className="fas fa-shopping-cart mr-2"
                      style={{ fontSize: "28px" }}
                    ></i>{" "}
                    {t("explore.add-to-cart")}{" "}
                  </button>
                  <i
                    class="fas fa-heart favourite-icon"
                    style={{ fontSize: "25px" }}
                  ></i>
                </div>
              </Col>
            </Row>
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
                                //     pro_img={value.pro_img}
                                //     pro_price={value.pro_price}
                                //     pro_name={value.pro_name}
                                //     pro_name_en={value.pro_name_en}
                                //     pro_special_price={value.pro_special_price}
                                //     pro_stock={value.pro_stock}
                                //     pro_id={value.pro_id}
                                //     procat_sub={value.procat_sub}>
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
                                            <p className="pt-1 pl-3 ptag">
                                              25%
                                            </p>
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
                                    <button className="addcartBtn">
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
                                      <p className="pl-2 old_price">
                                        <del>{val.pro_price}</del>
                                      </p>
                                      <div className="priceBox">
                                        <h4 className="pl-2 item_price">
                                          {val.pro_special_price}
                                          <span className="currency-symbol">
                                            BDH
                                          </span>
                                        </h4>
                                        <div className="discount">
                                          <p className="pt-1 pl-3 ptag">25%</p>
                                        </div>
                                      </div>
                                      <p className="item_description">
                                        {val.pro_name}
                                      </p>
                                    </Card.Text>
                                    <button className="addcartBtn">
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
