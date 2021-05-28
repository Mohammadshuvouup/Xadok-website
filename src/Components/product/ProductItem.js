import React, { useState, useEffect } from "react";
import { Col, Image, Button } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import Notifications, { notify } from "react-notify-toast";
import "../../css/subCategory.css";
import "../../App.css";

function ProductItem(props) {
  const { t } = useTranslation();
  const API_PREFIX_URL = `https://deliveryxadok.s3.us-east-2.amazonaws.com/`;
  //   var localItems = JSON.parse(localStorage.getItem("products")) || [];
  var localItems = JSON.parse(localStorage.getItem("products")) || [];
  const [state, setState] = useState({
    selectedProduct: localItems,
  });
  const [addCartUI, setAddCartUI] = useState(true);
  const [quantity, setQuantity] = useState(1);

  const showModal = () => {
    props.showProductModal(props);
  };

  const handleAddCart = (item) => {
    // console.log("item", item);
    var newLocalItems = JSON.parse(localStorage.getItem("products")) || [];
    const isSameShopFound = newLocalItems.some(
      (el) => el.shop_id === item.shop_id
    );
    // console.log(isSameShopFound);
    if (isSameShopFound === false) {
      //   console.log("false");
      localStorage.removeItem("products");
      localStorage.setItem("cart_count", 1);
      //   console.log("-11-");
      setState({ selectedProduct: [] });
    } else {
      setState({ selectedProduct: newLocalItems });
    }

    // setState({ selectedProduct: newLocalItems });
    // console.log("state value",state)
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
    addToCart(obj);
  };

  const addToCart = (obj) => {
    setState((prevState) => {
      //   console.log("prevState");
      // console.log(prevState);
      //   console.log(prevState.selectedProduct);
      //   console.log(obj);
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
      setAddCartUI(true);
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

  const updateQuanity = (props, quantity, type) => {
    // console.log("--1--");
    // console.log(props);
    if (type == "minus" && parseInt(quantity) - 1 == 0) {
      let updatedItem = localItems.filter(function (el) {
        return el.pro_id !== props.pro_id;
      });
      localStorage.setItem("products", JSON.stringify(updatedItem));
      setAddCartUI(true);
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

  useEffect(() => {
    // console.log("ProductItem");
    // console.log(localItems);
    setAddCartUI(true);
    // console.log("localItems", localItems);
    if (localItems != null && localItems.length > 0) {
      const found = localItems.some((el) => el.pro_id === props.pro_id);
      if (found) {
        let product = localItems.filter((el) => el.pro_id === props.pro_id);
        // console.log(found);
        // console.log(product[0]);
        setAddCartUI(false);
        setQuantity(product[0].pro_qua);
      }
    }
  });

  return (
    <Col
      key={props.index}
      sm={5}
      md={4}
      lg={2}
      xl={2}
      className="item similar-item"
    >
      {props.pro_stock === 0 ? (
        <div className="item-image" props={props}>
          <Image src={`${API_PREFIX_URL}${props.pro_img}`} />
        </div>
      ) : (
        <div className="item-image" props={props} onClick={showModal}>
          <Image src={`${API_PREFIX_URL}${props.pro_img}`} />
        </div>
      )}

      {props.pro_special_price != null &&
      props.pro_special_price != 0 &&
      props.pro_special_price != "" &&
      props.pro_special_price != 0.0 &&
      props.pro_special_price != 0.0 ? (
        <p className="pl-2 old-price">
          <del>{props.pro_price}</del>
        </p>
      ) : (
        <p className="pl-2 old-price">
          <del style={{ color: "white" }}>&nbsp;</del>
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
      {addCartUI === true ? (
        props.pro_stock != 0 ? (
          <button className="addcart_btn" onClick={() => handleAddCart(props)}>
            <i className="fas fa-shopping-cart mr-2"></i>{" "}
            {t("explore.add-to-cart")}{" "}
          </button>
        ) : (
          <button className="addcart_btn">
            <i className="fas fa-ban mr-2"></i> {t("explore.out-of-stock")}{" "}
          </button>
        )
      ) : (
        <div className="d-flex justify-content-center quantity-field">
          <Button
            className="plus-btn"
            onClick={() => updateQuanity(props, quantity, "plus")}
          >
            +
          </Button>
          <input type="text" value={quantity} readOnly />
          <Button
            className="minus-btn"
            onClick={() => updateQuanity(props, quantity, "minus")}
          >
            -
          </Button>
        </div>
      )}
    </Col>
  );
}

export default ProductItem;
