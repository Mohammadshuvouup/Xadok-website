import React, {
    useEffect,
    useImperativeHandle,
    useState,
    forwardRef,
    useCallback,
  } from "react";
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
//   import ProductModalItem from "./ProductModalItem";
  import axios from "axios";
  import Loader from "react-loader-spinner";
  import { ThemeProvider } from "@material-ui/core";
  import Notifications, { notify } from "react-notify-toast";
  import { ContactsOutlined } from "@material-ui/icons";
  
  const API_PREFIX_URL = `https://deliveryxadok.s3.us-east-2.amazonaws.com/`;
  var xadokCartItems = [];
  
  // Modal.setAppElement('#root');
  
  function Offer_Cart(props) {
    console.log("ProductModal");
    console.log(props);
    //   console.log(props.slide_product.gallery);
    var localItems = JSON.parse(localStorage.getItem("products")) || [];
    //   //   let quantity = props.cartData.pro_qua;
    //   const [state, setState] = useState({
    //     selectedProduct: localItems,
    //   });
    const [state, setState] = useState({
      selectedProduct: null,
    });
    //   let state = {
    //     selectedProduct: localItems,
    //   };
    //   const [num, setNum] = useState(1);
    //   const [cart_quantity, setCart_quantity] = useState(0);
    //   const [gallery, setGallery] = useState(props.slide_product.gallery);
    const [addCartUI, setAddCartUI] = useState(props.addCartUI);
    // const [addCartUI, setAddCartUI] = useState(true);
    //   const [cartQuantity, setCartQuantity] = useState(props.cartQuantity);
    const [quantity, setQuantity] = useState(props.cartQuantity);
    const { t, i18n } = useTranslation();
  
    const [isFav, setIsfav] = useState(
      props.cartData != null
        ? props.cartData.is_fav === 1
          ? true
          : false
        : false
    );
    const [cartQuantity, setCartQuantity] = useState(props.cartQuantity);
    const [isNonFav, setIsNonfav] = useState(
      props.cartData != null
        ? props.cartData.is_fav === 0
          ? true
          : false
        : false
    );
    // console.log("quantity", quantity);
    // console.log("propQquantity", props.cartQuantity);
  
      // if (props.show === false) {
      //   setAddCartUI(true);
      // }
  
    useEffect(() => {
      let language = localStorage.getItem("language");
      if (language && language.length !== 0) {
        i18n.changeLanguage(language);
      }
      console.log("loaded");
      // setIsfav(props.cartData.is_fav === 0 ? false : true);
    }, []);
  
    const addToCart = (obj) => {
      let localItem = JSON.parse(localStorage.getItem("products")) || [];
      setState({
        selectedProduct: localItem,
      });
      setState((prevState) => {
        const found = prevState.selectedProduct.some(
          (el) => el.pro_id === obj.pro_id
        );
        const arrayproduct = prevState.selectedProduct;
        if (found === false) {
          arrayproduct.push(obj);
        }
        const selectedProduct = found ? prevState.selectedProduct : arrayproduct;
        localStorage.setItem("cart_count", selectedProduct.length);
        localStorage.setItem("products", JSON.stringify(selectedProduct));
        let myColor = { background: "#0E1717", text: "#FFFFFF" };
        notify.show("Product added in the cart!", "success", 1000, myColor);
        setAddCartUI(false);
        props.handleCustomEvent();
        return {
          selectedProduct,
          isAdded: true,
        };
      });
    };
  
    const handleAddCart = (item) => {
      // console.log(item);
      // return;
      // var newLocalItems = JSON.parse(localStorage.getItem("products")) || [];
      var newLocalItems = !localStorage.getItem("products")
        ? []
        : JSON.parse(localStorage.getItem("products"));
      const isSameShopFound = newLocalItems.some(
        (el) => el.shop_id === item.shop_id
      );
      if (isSameShopFound === false) {
        localStorage.removeItem("products");
        localStorage.setItem("cart_count", 1);
        //   setState({ selectedProduct: [] });
      } else {
        //   setState({ selectedProduct: newLocalItems });
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
      // console.log("quantity", quantity);
      // console.log("type", type);
      // console.log(props);
      if (type == "minus" && parseInt(quantity) - 1 == 0) {
        let updatedItem = localItems.filter(function (el) {
          return el.pro_id !== props.pro_id;
        });
        localStorage.setItem("products", JSON.stringify(updatedItem));
        setAddCartUI(true);
      } else {
        // console.log("--2--");
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
        props.handleCustomEvent();
        if (found) {
          let product = newList.filter((el) => el.pro_id === props.pro_id);
          setCartQuantity(product[0].pro_qua);
        }
      }
    };
  
    const handleAddFavourite = (proId) => {
      let userId = localStorage.getItem("user_id");
      if (userId != "" && userId != null && userId > 0) {
        let param = {
          user_id: userId,
          product_id: proId,
        };
        // console.log(param);
        axios
          .post("https://ristsys.store/api/addFavourite", param)
          .then((response) => {
            // console.log(response);
            setIsfav(true);
          });
      }
    };
  
    const handleRemoveFavourite = (favourite_id) => {
      let param = {
        favourite_id: favourite_id,
      };
      // console.log(param);
      axios
        .post("https://ristsys.store/api/removeFavourite", param)
        .then((response) => {
          // console.log(response);
          setIsfav(false);
        });
    };
  
    return (
      <>
        <Modal show={props.show_cart} onHide={props.handleClose_cart} className="modal-box">
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
                        className="product-img"
                        src={`${API_PREFIX_URL}${props.cartData.pro_img}`}
                      ></Image>
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
                        <div
                          className="d-flex justify-content-center quantity-field"
                          style={{ marginRight: "10px" }}
                        >
                          <Button
                            className="plus-btn"
                            onClick={() =>
                              updateQuanity(props.cartData, cartQuantity, "plus")
                            }
                          >
                            +
                          </Button>
                          <input type="text" value={cartQuantity} readOnly />
                          <Button
                            className="minus-btn"
                            onClick={() =>
                              updateQuanity(props.cartData, cartQuantity, "minus")
                            }
                          >
                            -
                          </Button>
                        </div>
                      )}
                      {isFav === true ? (
                        <i
                          class="fas fa-heart favourite-icon"
                          style={{ fontSize: "25px", color: "#e02b4a" }}
                          onClick={() =>
                            handleRemoveFavourite(props.cartData.fav_id)
                          }
                        ></i>
                      ) : (
                        <i
                          class="fas fa-heart favourite-icon"
                          style={{ fontSize: "25px" }}
                          onClick={() =>
                            handleAddFavourite(props.cartData.pro_id)
                          }
                        ></i>
                      )}
                    </div>
                  </Col>
                </Row>
              </>
            ) : (
              <Loader
                className="text-center"
                type="TailSpin"
                color="#e3424b"
                height={80}
                width={80}
              />
            )}
          </Modal.Header>
         
        </Modal>
      </>
    );
  }
  
  export default Offer_Cart;
  