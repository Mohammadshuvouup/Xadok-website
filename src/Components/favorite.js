import React, { useState, useEffect } from "react";
import Footer from "../Components/footer";
import TopBar from "./topBar";
import axios from "axios";
import SideDrawer from "./SideDrawer/SideDrawer";
import "../css/exploring.css";
import ProductItem from "./product/ProductItem";
import ProductModal from "./product/ProductModal";
import Loader from "react-loader-spinner";
import { Row, Col, Container } from "react-bootstrap";
import { Trans, useTranslation } from "react-i18next";
import "../App.css";

export default function Favourite() {
  const { t, i18n } = useTranslation();
  const [productList, setProductList] = useState([]);
  const [modalShow, setModalShow] = useState(false);
  const [productInfo, setProductInfo] = useState();
  const [similarProd, setSimilarProd] = useState([]);
  const [category, setCategory] = useState([]);
  const [product_subcategory, setProduct_subcategory] = useState([]);

  useEffect(() => {
    let language = localStorage.getItem("language");
    if (language && language.length !== 0) {
      i18n.changeLanguage(language);
    }
    getFavProducts();
  }, []);

  const getFavProducts = () => {
    let params = {
      user_id: localStorage.getItem("user_id"),
    };
    axios
      .post("https://ristsys.store/api/getFavourite", params)
      .then((response) => {
        // console.log(response);
        if (response.data.status === 1) {
          // console.log(response.data.data);
          setProductList(response.data.data);
        }
      });
  };

  /* Start  Modal Popup Logic */
  const [cartData, setCartData] = useState(null);
  const [alternative_Product, setAlternative_Product] = useState([]);
  const [cartSimilar_Product, setCartSimilar_Product] = useState([]);
  const [slide_product, setSlide_product] = useState([]);
  const [addCartUI, setAddCartUI] = useState(true);
  const [cartQuantity, setCartQuantity] = useState(1);
  var list = [];
  const showProductModal = (productInfo) => {
    // console.log("productInfo", productInfo);
    let modal_Param = {
      shop_id: productInfo.product_info.shop_id,
      pro_id: productInfo.pro_id,
      user_id: localStorage.getItem("user_id"),
    };
    setModalShow(true);
    setAddCartUI(true);
    axios
      .post("https://ristsys.store/api/GetProductInfo", modal_Param)
      .then((response) => {
        console.log("cart data api", response);
        let CartQuantity = 0;
        let AddCartUI = true;
        let cartData = response.data.data.product;
        let Slide_product = response.data.data;
        let Alternative_Product = null;
        let CartSimilar_Product = null;
        setCartData(response.data.data.product);
        setSlide_product(response.data.data);
        var localItems = JSON.parse(localStorage.getItem("products")) || [];
        if (localItems != null && localItems.length > 0) {
          const found = localItems.some(
            (el) => el.pro_id === response.data.data.product.pro_id
          );
          if (found) {
            let product = localItems.filter(
              (el) => el.pro_id === response.data.data.product.pro_id
            );
            AddCartUI = false;
            CartQuantity = product[0].pro_qua;
            setAddCartUI(false);
            setCartQuantity(product[0].pro_qua);
          }
        }

        list = [];
        var j = 0;
        for (
          let index = 0;
          index < Math.round(response.data.data.alternatives.length / 5);
          index++
        ) {
          var k = [];
          for (let i = 0; i < 5; i++) {
            if (typeof response.data.data.alternatives[j] === undefined) {
            } else {
              k.push(response.data.data.alternatives[j]);
              j++;
            }
          }
          list[index] = k;
        }
        setAlternative_Product(list);
        // Alternative_Product = list;

        list = [];
        var m = 0;
        for (
          let index = 0;
          index < Math.round(response.data.data.related.length / 5);
          index++
        ) {
          var n = [];
          for (let i = 0; i < 5; i++) {
            if (typeof response.data.data.related[m] === undefined) {
            } else {
              n.push(response.data.data.related[m]);
              m++;
            }
          }
          list[index] = n;
        }
        setCartSimilar_Product(list);
        // setData({
        //   CartQuantity: CartQuantity,
        //   cartData: cartData,
        //   Slide_product: Slide_product,
        //   Alternative_Product: Alternative_Product,
        //   CartSimilar_Product: CartSimilar_Product,
        // });
        // setModalShow(true);
        console.log("setModalShow");
      })
      .catch((error) => console.log(error));
  };
  /* End  Modal Popup Logic */

  const closeModal = () => {
    setModalShow(false);
    setCartData(null);
    setAlternative_Product([]);
    setCartSimilar_Product([]);
  }

  return (
    <React.Fragment>
      {/* Start  Modal Popup */}
      <ProductModal
        show={modalShow}
        onHide={closeModal}
        cartData={cartData}
        alternative_Product={alternative_Product}
        cartSimilar_Product={cartSimilar_Product}
        slide_product={slide_product}
        addCartUI={addCartUI}
        cartQuantity={cartQuantity}
        // xadokCartItems={xadokCartItems}
      />
      {/* End  Modal Popup */}

      <Container className="product-page-container" fluid>
        <Row>
          <SideDrawer />

          <Col xs={10} sm={10} lg={10}>
            <TopBar />
            <Row className="mt-4 grey-bg ">
              <h3> My Favourites </h3>
            </Row>

            <Row className="item-list grey-bg justify-content-lg-between">
              {productList != null && productList.length > 0 ? (
                productList.map((value, index) => {
                  return (
                    <ProductItem
                      index={index}
                      product_info={value}
                      pro_img={value.pro_img}
                      pro_price={value.pro_price}
                      pro_name={value.pro_name}
                      pro_name_en={value.pro_name_en}
                      pro_special_price={value.pro_special_price}
                      pro_stock={value.pro_stock}
                      pro_id={value.pro_id}
                      procat_sub={value.procat_sub}
                      shop_id={value.shop_id}
                      showProductModal={showProductModal}
                    ></ProductItem>
                  );
                })
              ) : (
                <Loader
                  className="text-center"
                  type="TailSpin"
                  color="#e3424b"
                  height={80}
                  width={80}
                />
              )}
            </Row>
          </Col>
        </Row>
      </Container>

      <Footer className="mt-4" />
    </React.Fragment>
  );
}
