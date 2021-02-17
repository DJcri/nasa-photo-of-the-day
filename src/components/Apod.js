import React, { useState, useEffect } from "react";

import axios from "axios";
import { BASE_URL, API_KEY } from "../constants";

const Apod = () => {
  const [data, setData] = useState(null);
  const [showDetails, setShowDetails] = useState(false);

  const toggleDetails = () => {
    setShowDetails(!showDetails ? true : false);
  };

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
    return <div>Loading...</div>;
  }

  return (
    <div className="apod">
      <h2>Astronomy Picture of the Day</h2>
      <div className="img-container">
        <img src={data.url} alt="astronomy_pic" />
      </div>
      <button onClick={toggleDetails}>
        {showDetails ? "Hide Details" : "Show More"}
      </button>
      <div id="apod" className={`details ${!showDetails ? "hidden" : ""}`}>
        <h3 className="title">{data.title}</h3>
        <p className="date">{data.date}</p>
        <p className="author">{`By ${data.copyright}`}</p>
        <p className="desc">{data.explanation}</p>
      </div>
    </div>
  );
};

export default Apod;
