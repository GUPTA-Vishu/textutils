import React, { StrictMode, useState } from "react";

export default function TextForm(props) {
  const handleUpClick = () => {
    console.log("Upper case was clicked");
    let newtext = text.toUpperCase();
    setText(newtext);
    props.showAlert("converted into Uppercase!", "success"); 
  };
  const handle = () => {
    let newtext = "";
    setText(newtext);
    props.showAlert("messasge is cleared!","success");
    
  };
  const handleloClick = () => {
    let newtext = text.toLowerCase();
    setText(newtext);
     props.showAlert("converted into  lowerCase",'success'); 

  };
  const handleOnChange = (event) => {
    //
    setText(event.target.value);
  };
  const[text,setText] = useState("Enter The Text");

  return (
    <>
      <div
        className="container"
        style={{ color: props.mode === "dark" ? "white" : "#030648" }}
      >
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            value={text}
            onChange={handleOnChange}
            style={{
              backgroundColor: props.mode === "dark" ? "grey" : "white",
              color: props.mode === "dark" ? "white" : "#030648",
            }}
            id="myBox"
            rows="8"
          ></textarea>
        </div>

        <button className="btn btn-primary mx-2" onClick={handleUpClick}>
          convert To Uppercase
        </button>
        <button className="btn btn-primary mx-2" onClick={handleloClick}>
          convert to LowerCase
        </button>
        <button className="btn btn-primary mx-2" onClick={handle}>
          clear text{" "}
        </button>
      </div>
      <div className="container"></div>
      <div
        className="container my-3"
        style={{ color: props.mode === "dark" ? "white" : "#030648" }}
      >
        <h1>Your Summary</h1>
        <p>
          {text.split(" ").length} words and {text.length} characters{" "}
        </p>
        <p>{0.008 * text.split(" ").length}</p>
        <h2>preview</h2>
        <p>{text.length > 0 ? text : "enter something to preview it"}</p>
      </div>
    </>
  );
}
