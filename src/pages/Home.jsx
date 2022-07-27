import React, { useState } from "react";

export default function Home(props) {
  let [text, setText] = useState("");

  const OnChange = (e) => {
    setText(e.target.value);
  };

  const ToUpper = () => {
    let newtext = text.toUpperCase();
    setText(newtext);
    props.ShowAlert("converted to Uppercase", "success");
  };
  const ToLower = () => {
    let newtext = text.toLowerCase();
    setText(newtext);
    props.ShowAlert("converted to Lowercase", "success");
  };
  const ToClear = () => {
    setText("");
    props.ShowAlert("Your Text is cleared", "success");
  };
  const Reverse = () => {
    let newtext = text.split(" ").reverse().join(" ");
    setText(newtext);
    props.ShowAlert("Your Text is reversed", "success");
  };

  const RemoveExtraSpaces = () => {
    let newtext = text.split(/[ ]+/);
    setText(newtext.join(" "));
    props.ShowAlert("extra spaces is removed", "success");
  };

  const CopyText = () => {
    // var text = document.getElementById("mybox");
    // text.select();
    navigator.clipboard.writeText(text);
    //document.getSelection().removeAllRanges();
    props.ShowAlert("copied to clipboard", "success");
  };

  return (
    <div className="container mt-5">
      <h2>Enter your text here ..... </h2>
      <div className="">
        <textarea
          id="mybox"
          className="form-control "
          name="text"
          value={text}
          onChange={OnChange}
          cols=""
          rows="10"
        ></textarea>
      </div>

      <button
        disabled={text.length === 0}
        className="btn btn-primary mt-3 mx-2"
        onClick={ToUpper}
      >
        UPPERCASE
      </button>
      <button disabled={text.length===0} className="btn btn-primary mt-3 mx-2" onClick={ToLower}>
        lowercase
      </button>
      <button disabled={text.length===0} className="btn btn-primary mt-3 mx-2" onClick={RemoveExtraSpaces}>
        Remove Extra spaces
      </button>
      <button disabled={text.length===0} className="btn btn-primary mt-3 mx-2" onClick={Reverse}>
        Text Reverse
      </button>
      <button disabled={text.length===0} className="btn btn-primary mt-3 mx-2" onClick={CopyText}>
        Copy Text
      </button>
      <button disabled={text.length===0} className="btn btn-primary mt-3 mx-2" onClick={ToClear}>
        Clear
      </button>
      <div className="container mt-3">
        <h2>SUMMARY</h2>
        <h3>Total number of characters : {text.length}</h3>
        <h3>
          Total number of words :{" "}
          {
            text.split(/\s+/).filter((element) => {
              return element.length !== 0;
            }).length
          }
        </h3>
      </div>
    </div>
  );
}
