import React, { useState, useEffect } from "react";
import axios from "axios";
import "./ProductPage.css";
import { FaCartPlus } from "react-icons/fa";
import { Select } from "@chakra-ui/react";
import FilterOptions from "../Components/FilterOptions";
import {
    Slider,
    SliderTrack,
    SliderFilledTrack,
    SliderThumb,
    SliderMark,
  } from '@chakra-ui/react'
const ProductPage = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const apiUrl = "http://localhost:8080/ProductList";

    // Fetch products when the component mounts
    axios
      .get(apiUrl)
      .then((response) => setProducts(response.data))
      .catch((error) => console.error("Error fetching products:", error));
  }, []);
//   console.log(products);
  return (
    <div className="Products">
        <div className="filter-container">
        <div className="filter-div">
        <h3>FILTER BY PRICE : </h3>
        <br />
        <Slider  defaultValue={30}>
  <SliderTrack>
    <SliderFilledTrack />
  </SliderTrack >
  <SliderThumb />
</Slider>
      </div>
      <div className="filter-div">
      <FilterOptions/>
      </div>
     
        </div>

      <div>
        <div className="sorting-div">
           Sort By:
         
          <Select placeholder="Default Sorting" w={'200px'}>
            <option value="option1">Low to High</option>
            <option value="option2">High to Low</option>
          </Select>
        </div>
        <div className="products-grid">
          {products.map((product) => (
            <div key={product.id} className="product-item">
              <div className="imgdiv">
                <img
                  src={`${product.image}`}
                  alt={product.title}
                  //   style={{ width: "100px", height: "100px" }}
                />
              </div>
              <div className="category">{product.category}</div>
              <div className="ellips">{product.title}</div>
              <div>
                <span className="strike-price">
                  {"₹" + product.strikedPrice + ".00"}
                </span>{" "}
                <span className="normal-price">
                  {"₹" + product.price + ".00"}
                </span>
              </div>
              <div className="cart-btn">
                <button>-</button>
                <FaCartPlus />
                <button>+</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
