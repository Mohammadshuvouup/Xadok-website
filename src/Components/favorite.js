import React, { useState, useEffect } from "react";
import Footer from "../Components/footer";
import img from "../xadok/pexels-photo-102104.jpeg";
import TopBar from "./topBar";
import axios from "axios";
import SideDrawer from "./SideDrawer/SideDrawer";
import "../css/exploring.css";
import ProductItem from "./product/ProductItem";
import ProductModal from "./product/ProductModal";
import {
  Image,
  Row,
  Col,
  Container,
  Modal,
  Card,
  CardDeck,
  Button,
  Carousel,
} from "react-bootstrap";
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
  const [cartData, setCartData] = useState([]);
  const [alternative_Product, setAlternative_Product] = useState([]);
  const [cartSimilar_Product, setCartSimilar_Product] = useState([]);
  const [slide_product, setSlide_product] = useState([]);
  var list = [];
  const showProductModal = (productInfo) => {
    // console.log("productInfo", productInfo);
    let param = {
      shop_id: productInfo.product_info.shop_id,
      pro_id: productInfo.pro_id,
      user_id: localStorage.getItem("user_id"),
    };

    axios
      .post("https://ristsys.store/api/GetProductInfo", param)
      .then((response) => {
        // console.log("cart data api", response);
        if (response.data.status === 1) {
          setModalShow(true);
          setCartData(response.data.data.product);
          setSlide_product(response.data.data);
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
        }
      });
  };
  /* End  Modal Popup Logic */

  return (
    <React.Fragment>
      {/* Start  Modal Popup */}
      <ProductModal
        show={modalShow}
        onHide={() => setModalShow(false)}
        cartData={cartData}
        alternative_Product={alternative_Product}
        cartSimilar_Product={cartSimilar_Product}
        slide_product={slide_product}
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
              {productList.length > 0 &&
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
                      showProductModal={showProductModal}
                    ></ProductItem>
                  );
                })}
            </Row>
          </Col>
        </Row>
      </Container>

      <Footer className="mt-4" />
    </React.Fragment>
  );
}
