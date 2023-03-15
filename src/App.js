import { React, useEffect, useState } from "react";

import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Example from "./Components/nav";
import axios from "axios";
import Data from "./Components/data";
import Toast from "./Components/Toast";

const apiURL = "https://dogapi.dog/api/facts";
function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get(apiURL)
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className="App">
      <Example />
      <div className="App-header">
        {/* The code below is commented out so you can see Toast very well, You can un-comment and see the Data Component */}
        {/* <Data data={data} />   */}
        <Toast data={data} />
      </div>
    </div>
  );
}

export default App;
