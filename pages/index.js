import Link from "next/link";
import Router from "next/router";
import { FaSearchengin } from "react-icons/fa";
import { IoIosContact } from "react-icons/io";
import { IoMdInformation } from "react-icons/io";
import { FaShoppingBag } from "react-icons/fa";
import { FaUserFriends } from "react-icons/fa";
import "./index.css";

function ClickIndex() {
  document.querySelector("#mainapp").style.right = "-100%";
  setTimeout(function () {
    Router.push("/ChatPage");
  }, 1000);
}

const Index = () => (
  <div id="mainapp">
    <div onClick={ClickIndex}>Index</div>
    <FaSearchengin />
    <Link href="/ChatPage">
      <button href="/ChatPage">
        {" "}
        <IoIosContact />
        Chats!
      </button>
    </Link>
    <Link href="/Contact">
      <button>
        <IoMdInformation />
        Contact!
      </button>
    </Link>
    <Link href="/About">
      <button>
        <FaUserFriends/>
        About
      </button>
    </Link>
    <Link href="/Products">
      
      <button><FaShoppingBag />roducts</button>
    </Link>
  </div>
);

export default Index;
