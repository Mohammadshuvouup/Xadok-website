import React, { useState } from "react";
import { Col, Image } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import Notifications, { notify } from "react-notify-toast";
import "../../css/subCategory.css";
import "../../App.css";

function ProductItem(props) {
  const { t } = useTranslation();
  const API_PREFIX_URL = `https://deliveryxadok.s3.us-east-2.amazonaws.com/`;
  var localItems = JSON.parse(localStorage.getItem("products")) || [];
  const [state, setState] = useState({
    selectedProduct: localItems,
  });

  const showModal = () => {
    props.showProductModal(props);
  };

  const handleAddCart = (item) => {
    //   console.log("handleAddCart")
    var newLocalItems = JSON.parse(localStorage.getItem("products")) || [];
    setState({ selectedProduct: newLocalItems });
    // console.log("state value",state)
    const obj = {
      pro_id: item.pro_id,
      pro_name: item.pro_name_en,
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
    let response = addToCart(obj);
  };

  const addToCart = (obj) => {
    setState((prevState) => {
      // console.log("prevState");
      // console.log(prevState);
      // console.log(prevState.selectedProduct);
      const found = prevState.selectedProduct.some(
        (el) => el.pro_id === obj.pro_id
      );
      const arrayproduct = prevState.selectedProduct;
      //   console.log("arrayproduct",arrayproduct)
      //   console.log("found",found)
      //   console.log("pro_id",obj.pro_id)
      const selectedProduct = found
        ? prevState.selectedProduct
        : arrayproduct.push(obj);
      //   console.log("selectedProduct",selectedProduct);
      localStorage.setItem("cart_count", selectedProduct.length);
      localStorage.setItem("products", JSON.stringify(selectedProduct));

      let myColor = { background: "#0E1717", text: "#FFFFFF" };
      notify.show("Product added in the cart!", "success", 1000, myColor);
      const cart_qty = localStorage.getItem("cart_count");
      return {
        selectedProduct,
        isAdded: true,
      };
    });
  };

  function removeProduct(productId) {
    let storageProducts = JSON.parse(localStorage.getItem("products"));
    let products = storageProducts.filter(
      (product) => product.pro_id !== productId
    );
    localStorage.setItem("products", JSON.stringify(products));
  }

  return (
    <Col
      key={props.index}
      sm={5}
      md={4}
      lg={2}
      xl={2}
      className="item similar-item"
    >
      <div className="item-image" props={props} onClick={showModal}>
        <Image src={`${API_PREFIX_URL}${props.pro_img}`} />
      </div>

      {props.pro_special_price != null &&
      props.pro_special_price != 0 &&
      props.pro_special_price != "" &&
      props.pro_special_price != 0.0 &&
      props.pro_special_price != 0.0 ? (
        <p className="pl-2 old-price">
          <del>{props.pro_price}</del>
        </p>
      ) : (
        <p className="pl-2 old-price" style={{ color: "white" }}>
          <del>&nbsp;</del>
        </p>
      )}
      {props.pro_special_price != null &&
      props.pro_special_price != 0 &&
      props.pro_special_price != "" &&
      props.pro_special_price != 0.0 &&
      props.pro_special_price != 0.0 ? (
        <div className="price-box">
          <h4 className="pl-2 item-price">
            {props.pro_special_price}
            <span className="currency-symbol">
              {localStorage.getItem("country_currency")}
            </span>
          </h4>
          <div className="discount">
            <p className="pt-1 pl-3 ptag">25%</p>
          </div>
        </div>
      ) : (
        <div className="price-box">
          <h4 className="pl-2 item-price">
            {props.pro_price}
            <span className="currency-symbol">
              {localStorage.getItem("country_currency")}
            </span>
          </h4>
        </div>
      )}
      <p className="item-description">{props.pro_name_en}</p>
      <button className="addcart_btn" onClick={() => handleAddCart(props)}>
        <i className="fas fa-shopping-cart mr-2"></i> {t("explore.add-to-cart")}{" "}
      </button>
    </Col>
  );
}

export default ProductItem;
