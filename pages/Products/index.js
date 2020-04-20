import { useEffect } from "react";
import CustomButton from "../../comps/CustomButton";
import Header from "../../comps/Header";
import Form from "../../comps/Form";
import "./product.css";
import { FaShoppingCart } from "react-icons/fa";

const Product = ({}) => {
  useEffect(() =>{
    setTimeout(() =>{ 
      document.querySelector("#productpage").style.top = 0;
   }, 100)
  }, [])
  return (
  <div id="productpage">
    <Header fontSize="24" text="Check out our products!" />
    <FaShoppingCart className="icon"/>
    <Form question="Request order"placeholder="Type here"/>
    <div>
    <CustomButton text="Pharmacy" color="#AAE" />
    <CustomButton text="Gardening" color="#AEA" />
    <CustomButton text="Groceries" color="#EEA"/>
    </div>
  </div>
  )
};

export default Product;
