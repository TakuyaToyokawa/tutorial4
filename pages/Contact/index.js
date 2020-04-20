import { useEffect, useState } from "react";
import CustomButton from "../../comps/CustomButton";
import Header from "../../comps/Header";
import { IoMdInformation } from "react-icons/io";
import Form from "../../comps/Form";
import "./contact.css";

var index = 0;

const headers_arr = [
  "Thanks for contacting me!",
  "Goodbye",
  "Let me know if you have other questions",
  // {
  //   text: "DAF",
  //   img: "http://img.jpg",
  // },
];

const Contact = ({}) => {
  const [header_text, setHeader] = useState("Contact me!");
  const [pageLeft, setLeft] = useState("-100%");
  const [img_url, setImg] = useState("");

  useEffect(() => {
    setTimeout(() => {
      setLeft("0");
    }, 100);
  }, [header_text]);

  useEffect(() => {
    setLeft(20);
    setTimeout(() =>{
      setLeft(0);
    }, 500);
  }, [header_text]);

  // useEffect(() => {
  //   alert("Hi! Header text has changed.");
  // }, [header_text]);

  return (
    <div id="contactpage" style={{ left: pageLeft }}>
      <div className="row">
        <IoMdInformation className="icon" />
        <Header fontSize="24" text="Contact Me!" />
      </div>
      {/* <img src={img_url} /> */}
      <Form question={header_text} placeholder="Enter email." />
      <CustomButton
        onClick={() => {
          // setHeader(headers_arr[index].text);
          // setImg(headers_arr[index].img);
          index++;
          setHeader(headers_arr[index]);
          if (index > headers_arr.length) {
            index = 0;
          }
          // setLeft("100%")
        }}
        text="Submit"
      />
    </div>
  );
};

export default Contact;
