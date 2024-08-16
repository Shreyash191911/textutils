// eslint-disable-next-line no-unused-vars
import logo from "./logo.svg";
import "./App.css";
import Navbar from "./Components/Navbar";
// import About from "./Components/About";
import { useState } from "react";
import TextForm from "./Components/TextForm";
import Alert from "./Components/Alert";
// import { BrowserRouter as Router, Switch, Routes, Route, Link } from "react-router-dom";

function App() {
  const [Mode, setMode] = useState(`light`);
  const [appearance, setAppearance] = useState(null);
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 300);
  };

  const ToggleMode = () => {
    if (Mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "black";
      showAlert("Dark mode has been Enabled", "success");
      document.title = "Textutils - Dark Mode";
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode has been Enabled", "success");
      document.title = "Textutils - Light Mode";
    }
  };

  const ToggleAppearance = () => {
    let newAppearance;
    switch (appearance) {
      case "blue":
        newAppearance = "yellow";
        document.body.style.backgroundColor = "#ffc107";
        break;
      case "yellow":
        newAppearance = "red";
        document.body.style.backgroundColor = "#dc3545";
        break;
      case "red":
        newAppearance = "green";
        document.body.style.backgroundColor = "#198754";
        break;
      default:
        newAppearance = "blue";
        document.body.style.backgroundColor = "#0d6efd";
        break;
    }
    setAppearance(newAppearance);
  };

  return (
    <>
      {/* <Router> */}
      <Navbar
        title="Textutilsss"
        abouttxt="About Textutilsss"
        Mode={Mode}
        ToggleMode={ToggleMode}
        appearance={appearance}
        ToggleAppearance={ToggleAppearance}
      />
      <Alert alert={alert} />
      <div className="container my-3">
        <TextForm
          showAlert={showAlert}
          heading="Enter the text to analyze Below"
          Mode={Mode}
        />
      </div>    
    </>
  );
}

export default App;
