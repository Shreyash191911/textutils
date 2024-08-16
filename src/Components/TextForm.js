import React, { useState } from "react";

export default function TextForm(props) {
  const handleUpclick = () => {
    let newtxt = text.toUpperCase();
    settext(newtxt);
    props.showAlert("Converted to Uppercase", "success");
  };

  const handleloclick = () => {
    let newtxt = text.toLowerCase();
    settext(newtxt);
    props.showAlert("Converted to LowerCase", "success");
  };

  const handleitalic = () => {
    setIsItalic(true);
    props.showAlert("Converted to Italics", "success");
  };

  const handleclear = () => {
    settext("");
    setIsItalic(false);
    props.showAlert("Text Cleared", "success");
  };

  const handleOnChange = (event) => {
    settext(event.target.value);
  };
  const [text, settext] = useState("");
  const [isItalic, setIsItalic] = useState(false);
  return (
    <>
      <div
        className="container"
        style={{ color: props.Mode === "dark" ? "white" : "black" }}
      >
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            value={text}
            onChange={handleOnChange}
            id="mtxt"
            rows="8"
            style={{
              fontStyle: isItalic ? "italic" : "normal",
              backgroundColor: props.Mode === "dark" ? "grey" : "white",
              color: props.Mode === "dark" ? "white" : "black",
            }}
          ></textarea>
        </div>
        <button
          className="btn btn-danger"
          onClick={handleUpclick}
          style={{
            transition: "transform 0.2s ease-in-out",
          }}
          onMouseEnter={(e) => (e.target.style.transform = "scale(1.2)")}
          onMouseLeave={(e) => (e.target.style.transform = "scale(1)")}
        >
          Convert To Uppercase
        </button>
        <button
          className="btn btn-primary mx-3"
          onClick={handleloclick}
          style={{
            transition: "transform 0.2s ease-in-out",
          }}
          onMouseEnter={(e) => (e.target.style.transform = "scale(1.2)")}
          onMouseLeave={(e) => (e.target.style.transform = "scale(1)")}
        >
          Convert To Lowercase
        </button>
        <button
          className="btn btn-warning mx-2"
          onClick={handleclear}
          style={{
            transition: "transform 0.2s ease-in-out",
          }}
          onMouseEnter={(e) => (e.target.style.transform = "scale(1.2)")}
          onMouseLeave={(e) => (e.target.style.transform = "scale(1)")}
        >
          Clear Text
        </button>
        <button
          className="btn btn-success mx-2"
          onClick={handleitalic}
          style={{
            transition: "transform 0.2s ease-in-out",
          }}
          onMouseEnter={(e) => (e.target.style.transform = "scale(1.2)")}
          onMouseLeave={(e) => (e.target.style.transform = "scale(1)")}
        >
          Italisize
        </button>
      </div>
      <div
        className="container my-3"
        style={{ color: props.Mode === "dark" ? "white" : "black" }}
      >
        <h2>Your text summary</h2>
        <p>
          <b>
            {text.split(" ").length - 1} words and {text.length} charecters
          </b>
        </p>
        <p>{0.008 * (text.split(" ").length - 1)} Minutes read</p>
        <h2>Preview</h2>
        <p>
          {text.length > 0
            ? text
            : "Enter something in the text box above to preview it here"}
        </p>
      </div>
    </>
  );
}
