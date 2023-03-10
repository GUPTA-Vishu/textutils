import { useState } from "react";
import "./App.css";
import About from "./components/About";
import Navbar from "./components/Navbar";
import Textform from "./components/Textform";
import Alert from "./components/Alert";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState("null");
  /* alert is a object  */
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#030648";
      showAlert("Dark mode has been enabled", "success");
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("light mode has been enabled", "success");
      document.title = "Textutils-LightMode";
    }
  };

  return (
    <>
    <Router>
      <Navbar
        title="TextUtils"
        mode={mode}
        toggleMode={toggleMode}
        About="About"
      />
      <Alert alert={alert} />

      <div className="container my-3">
        <Switch>
          <Route path="/about">
            <About />
          </Route>

          <Route path="/">
            <Textform
              showAlert={showAlert}
              heading="Enter to Analyze Below"
              mode={mode}
            />
          </Route>
        </Switch>

        
      </div>
      </Router>
      
    </>
  );
}

export default App;
