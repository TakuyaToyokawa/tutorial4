import React from 'react';
import './form.css';


const Form = ({question, questionType,placeholder}) => (
  <div>
    <p>{question}</p>
    <input className={questionType} type="text" placeholder={placeholder}></input>

  </div>
);

Form.defaultProps ={
    question: "Default Question",
    questionType: "nothing",
    placeholder: "Default"
}

export default Form;