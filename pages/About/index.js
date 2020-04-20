import { useEffect } from "react";
import CustomButton from "../../comps/CustomButton";
import Header from "../../comps/Header";
import Form from "../../comps/Form"
import "./about.css";
import { FaUserFriends } from "react-icons/fa";

const About = ({}) => {
  useEffect(() =>{
    setTimeout(() =>{ 
      document.querySelector("#aboutpage").style.opacity = 1;
   }, 50)
  }, [])
  return (
  <div id="aboutpage">
    <div className="row">
      <FaUserFriends className="icon"/>
    <Header fontSize="24" text="About us!" />
    </div>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean tincidunt mi eget suscipit rutrum. Ut faucibus vehicula mi quis accumsan. Morbi sollicitudin nunc sit amet velit blandit condimentum. Sed in velit vitae ex vehicula consequat. Fusce quis massa consequat, pellentesque quam sed, ullamcorper tellus. Vestibulum commodo volutpat augue in fringilla. Nulla cursus enim enim, sed maximus risus rhoncus vulputate. Fusce vel dui vel erat mattis pretium. Nam pretium lacus non quam molestie mollis. Maecenas eget dolor nunc. Morbi non pretium magna. Praesent massa nisl, vehicula porttitor dolor porttitor, sodales consequat augue.</p>
    <Form placeholder="Enter your question here." question="Type your question here."/>
    <CustomButton text="Submit" />
  </div>
  )
};

export default About;
