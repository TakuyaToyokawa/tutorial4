import React from 'react';
import './form.css';


const Form = ({validation, question, questionType,placeholder}) => (
  <div>
    <p>{question}</p>
    <input className={questionType} type="text" placeholder={placeholder} onKeyPress={validation} onInput={validation}></input>

  </div>
);

function Validation(){
    alert("No Validation");
}

Form.defaultProps ={
    question: "Default Question",
    validation: Validation(),
    questionType: "nothing",
    placeholder: "Default"
}

export default Form;