import React,{useEffect,useState} from "react";
import AddProduct from"./AddProduct"
import Product from "./Product";
import { Flex,Grid } from "@chakra-ui/react";
import axios from "axios";

const Products = () => {
  // TODO: Remove below const and instead import them from chakra
  const Products=()=>{
    const[newProducts,setNewProducts]=useState([]);

    const getData=async()=>{
      axios.get("http://localhost:8080/products").then((res)=>{
        setNewProducts(res.data);
      })
    }


  }
  const Flex = () => <div />;
  const Grid = () => <div />;

  return (
    <Flex>
      {/*  AddProduct */}
      <AddProduct/>
      <Grid>{/* List of Products */}</Grid>
      {newProducts.map((item)=>{
        return<Product key={item.id} item={item}/>;
      })}
      {/* Pagination */}
    </Flex>
  );
};

export default Products;
