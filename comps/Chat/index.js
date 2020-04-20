import React from "react";
import './chat.css';
import Header from '../Header';

const defaultimg = require('./default.png')

const Chat = ({msg, img, name, backgroundColor}) => (
  <div style={{backgroundColor:backgroundColor}}className="chat_card">
    <div className="chat_user">
      <img src={img} />
      <Header text={name} />
    </div>
    <div className="chat_msg">
        {msg}
    </div>
  </div>
);

Chat.defaultProps = {
    msg:"Please type something",
    img: defaultimg,
    backgroundColor:"#EEE",
    name:"Username"
};
export default Chat;
