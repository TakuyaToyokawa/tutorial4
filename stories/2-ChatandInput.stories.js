import React from 'react';
import Chat from '../comps/Chat';
import Input from '../comps/Input';
import Header from '../comps/Header';
import CustomButton from '../comps/CustomButton';
import CustomButtonStories from './CustomButton.stories';
import ChatPage from '../pages/ChatPage';

export default {
    title: "My Comps",
    component: CustomButtonStories
}

export const MyCustomButton = () => <CustomButton/>;
export const MyHeader = () => <Header/>;
export const MyInput = () => <Input />;
export const MyInputWithPlaceholder = () => <Input placeholder="custom placeholder"/>
export const MyChat = () => <Chat/>;
export const MyChatPage = () => <ChatPage/>