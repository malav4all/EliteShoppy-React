import React, { useEffect} from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { setProducts } from "../redux/actions/productsActions";
import {ProductComponent} from "./index";

export const ProductListing = () => {
  const products = useSelector((state) => state.allProducts.products);
  const dispatch = useDispatch();
  const fetchProducts = async () => {
    const response = await axios
      .get("https://fakestoreapi.com/products")
      .catch((err) => {
        console.log("Err: ", err);
      });
      // console.log({response})
    dispatch(setProducts(response.data));
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  // console.log("Products :", products);
  return (
    <>
    <span>Shops Your Products</span>
    <div className="d-flex flex-wrap justify-content-between">
      <ProductComponent />
    </div>
    </>
  );
};

