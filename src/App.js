import React, { useState, useEffect } from "react";
import "./css/App.css";

import axios from "axios";
import { BASE_URL, API_KEY } from "./constants";

import Apod from "./components/Apod";
import Loading from "./components/Loading";

function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    axios
      .get(`${BASE_URL}/planetary/apod?api_key=${API_KEY}`)
      .then((res) => {
        console.log(res.data);
        setData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  if (!data) {
    return <Loading />;
  }

  return (
    <div className="App">
      <Apod data={data} />
    </div>
  );
}

export default App;
