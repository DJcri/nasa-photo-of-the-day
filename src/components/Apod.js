import React, { useState, useEffect } from "react";

import axios from "axios";
import { BASE_URL, API_KEY } from "../constants";

const Apod = () => {
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
    return <div>Loading...</div>;
  }

  return (
    <div className="apod">
      <div className="flex-container">
        <div className="img-container">
          <h2>Astronomy Picture of the Day</h2>
          <img src={data.hdurl} alt="astronomy_pic" />
          <p className="date">{data.date}</p>
          <p className="author">{`By ${data.copyright}`}</p>
        </div>
        <div className="details-container">
          <h3 className="title">{data.title}</h3>
          <p className="desc">{data.explanation}</p>
        </div>
      </div>
    </div>
  );
};

export default Apod;
