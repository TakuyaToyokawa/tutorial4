import React from 'react';
import CustomButton from '../comps/CustomButton';
import Header from '../comps/Header'
import Form from '../comps/Form'

export default {
    title: "Custom Button",
    component: CustomButton
};
export const MyCustomButton = () => <CustomButton />

export const PageWithCustomButtons = () => (
         <div>
           <Header />
           <Header
             fontSize="1.1em"
             color="#A00"
             text="Header One"
             onMouseOver={HeaderOne}
           />
           <Header
             fontSize="1.3em"
             color="#0A0"
             text="Header Two"
             onMouseOver={HeaderTwo}
           />
           <Header
             fontSize="1.5em"
             color="#00A"
             text="Header Three"
             onMouseOver={HeaderThree}
           />
           <Form/>
           <Form
             question="Address"
             questionType="addressInput"
             validation={FormAddressCheck}
             placeholder="Address"
           />
           <Form
             question="Phone"
             questionType="phoneInput"
             validation={FormPhoneCheck}
             placeholder="Phone"
           />
           <Form
             question="Country"
             questionType="countryInput"
             validation={FormCountryCheck}
             placeholder="Country"
           />
           <p id="error"></p>
           <CustomButton text="OK" color="#3F5" onClick={OkClick} />
           <CustomButton text="Cancel" color="#999" onClick={CancelClick} />
           <CustomButton text="Submit" color="#F3F" />
           <CustomButton text="Menu" />
         </div>
       );

       function HeaderOne(){
           alert("HeaderOne");
       }
       function HeaderTwo(){
           alert("HeaderTwo");
       }
       function HeaderThree(){
           alert("HeaderThree");
       }
       function CancelClick(){
           alert("Cancel");
       }
       function OkClick(){
           alert("Ok");
       }

       var form_data = {
         address: false,
         phone: false,
         country: false
       };

       function FormAddressCheck() {
         //check if the address is bigger than 5, if not then give them an error!
         //otherwise store form_data's address
         let addressLength = document.querySelector(".addressInput").value
           .length;
         console.log(addressLength);
         if (addressLength >= 5) {
           document.querySelector("#error").innerText = "Address is valid.";
           document.querySelector(".addressInput").style.backgroundColor =
             "#DDDDEE";
           form_data.address = true;
         } else {
           document.querySelector("#error").innerText = "Address is invalid.";
           document.querySelector(".addressInput").style.backgroundColor =
             "#FFFFFF";
           form_data.address = false;
         }
       }

       function FormPhoneCheck() {
         //check if the phone is a number. check if the phone is 10 digits long, if not give them an error!
         //otherwise store form_data's phone
         let phoneLength = document.querySelector(".phoneInput").value.length;
         let phoneDigit = document.querySelector(".phoneInput").value;
         if (isNaN(phoneDigit) == false && phoneLength == 10) {
           document.querySelector("#error").innerText =
             "Phone Number is valid.";
           document.querySelector(".phoneInput").style.backgroundColor =
             "#DDDDEE";
           form_data.phone = true;
         } else {
           document.querySelector("#error").innerText =
             "Phone Number is invalid.";
           document.querySelector(".phoneInput").style.backgroundColor =
             "#FFFFFF";
           form_data.address = false;
         }
       }

       function FormCountryCheck() {
         //check if the country is canada or usa, if not give them an error!
         //otherwise store form_data's country
         let country = document.querySelector(".countryInput").value;
         let countryCheck = country.toLowerCase();
         if (countryCheck == "canada" || countryCheck == "united states") {
           document.querySelector("#error").innerText = "Country is valid.";
           document.querySelector(".countryInput").style.backgroundColor =
             "#DDDDEE";
           form_data.country = true;
         } else {
           document.querySelector("#error").innerText = "Country is invalid.";
           document.querySelector(".countryInput").style.backgroundColor =
             "#FFFFFF";
           form_data.country = false;
         }
       }

       function FormSubmit() {
         //check if form_data has information inside, if all 3 of address, phone, and country have stored values, then show the confirm message.
         //otherwise give them an error!
         console.log(form_data.country, form_data.phone, form_data.address);
         if (
           form_data.country == true &&
           form_data.phone == true &&
           form_data.address == true
         ) {
           document.querySelector(".confirm").style.display = "block";
           document.querySelector(
             ".address"
           ).innerText = document.querySelector(".addressInput").value;
           document.querySelector(
             ".phoneNumber"
           ).innerText = document.querySelector(".phoneInput").value;
           document.querySelector(
             ".country"
           ).innerText = document.querySelector(".countryInput").value;
         } else {
           document.querySelector(".confirm").style.display = "none";
           document.querySelector("#error").innerText =
             "Invalid entry, please try again.";
         }
       }

       function ConfirmCancel() {
         //hide the confirm message
         document.querySelector(".confirm").style.display = "none";
       }