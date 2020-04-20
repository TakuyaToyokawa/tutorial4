import { useEffect } from "react";
import CustomButton from "../../comps/CustomButton";
import Header from "../../comps/Header";
import { IoMdInformation } from "react-icons/io";
import Form from "../../comps/Form";
import "./contact.css";

const Contact = ({}) => {
  useEffect(() =>{
    setTimeout(() =>{ 
      document.querySelector("#contactpage").style.left = 0;
   }, 100)
  }, [])
  return (
  <div id="contactpage">
    <div className="row">
    <IoMdInformation className="icon"/>
      <Header fontSize="24" text="Contact Me!" />
     
    </div>
    <Form question="Contact Us" placeholder="Enter email."/>
    <CustomButton text="Submit" />
  </div>
  )
};

export default Contact;
