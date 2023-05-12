import React, { useState } from "react";
// import PropTypes from "prop-types";

export function TextForm(props) {
  const handleUpperCase = (event) => {
  //   if(event<=0){
  //     alert("Enter Text here to convert Uppercase");
  //  }
    
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("converted to upperCase", "success")
   
 
  };

  const handleLowerCase = (event) => {
    // if(event<=0){
    //    alert("Enter Text here to convert Lowercase");
    // }
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("converted to lowerCase", "success")
  };
  const handleClearText = (event) => {
   
    let newText = "";
    setText(newText);
  };
 
  const handleChange = (event) => {
     
    setText(event.target.value);
  };

  const [text, setText] = useState();
  // setText("Enter the text below");
  return (
    <>
      <div className="container"
      style={{color: props.mode==='dark' ? 'white':'black'}}
      >
        <h1>{props.heading}</h1>
        <div className="mb-3"
        >
          <textarea
            className="form-control"
            value={text}
            style={{color: props.mode==='dark' ? 'white':'black',backgroundColor: props.mode==='dark' ? 'black':'white'}}
            onChange={handleChange}
            id="exampleFormControlTextarea1"
            rows="3"
          ></textarea>
        </div>
        <button className="btn btn-primary mx-2 my-2" onClick={handleUpperCase}>
          Convert to Uppercase
        </button>
        <button className="btn btn-primary mx-2 my-2" onClick={handleLowerCase}>
          Convert to LowerCase
        </button>
        <button className="btn btn-primary mx-2 my-2" onClick={handleClearText}>
          Clear All Text
        </button>
      </div>
      <div className="container"
       style={{color: props.mode==='dark' ? 'white':'black'}}
      >
        <h1>your text Summary</h1>
        {/* <p>{text.length}</p> */}
        {/* <p>{0.08 * text.split(" ").length} minutes to read</p> */}
        <h2>Preview</h2>
        {text}
      </div>
    </>
  );
}
