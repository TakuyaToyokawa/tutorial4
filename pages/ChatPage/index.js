import React, { useState, useEffect } from "react";
import "./chatpage.css";
import Chat from "../../comps/Chat";
import CustomButton from "../../comps/CustomButton";
import Header from "../../comps/Header";
import Input from "../../comps/Input";


const ChatPage = ({}) => {
  const [welcome, setWelcome] = useState("Welcome to my app!");
  const [msg, setMsg] = useState("Type something.");
  const [resp, setResp] = useState("Let me respond.");
  const [color, setColor] = useState("#FAA");
  const [text, setText] = useState("Hello");
  useEffect(() =>{
    setTimeout(() =>{ 
      document.querySelector("#chatpage").style.left = 0;
   }, 100)
  }, [])

  return (
    <div id="chatpage">
      <div id="welcome">
        <Header fontSize={32} text={welcome} />
      </div>
      <div
        id="chats"
        onClick={() => {
          setWelcome("Start with sending a message.");
        }}
      >
        <Chat msg={msg} name="user1" />
        <br />
        <Chat
          msg={resp}
          name="chatbot"
          img="https://i.pinimg.com/736x/fd/a1/3b/fda13b9d6d88f25a9d968901d319216a.jpg"
          backgroundColor="#AAE"
        />
      </div>
      <div id="controls">
        <Input
          onClick={(val) => {
            setMsg(val);
            var new_resp = CheckResponse(val);
            setResp(new_resp);
          }}
        />
      </div>
      <CustomButton
        onClick={() => {
          setColor("#AAF");
          setText("Goodbye")
        }}
        color={color}
        text={text}
      />
    </div>
  );
};

function CheckResponse(inp) {
  switch (inp.toLowerCase()) {
    case "hi":
      return "Please leave me alone";
    case "awesome":
      return "mhm";
    default:
      "Cannot comprehend, only english.";
  }
}
export default ChatPage;
