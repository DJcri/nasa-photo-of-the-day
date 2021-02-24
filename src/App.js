import React, { useState, useEffect } from "react";
import "./css/App.css";
import { BiChevronRight, BiChevronLeft } from "react-icons/bi";

import axios from "axios";
import { BASE_URL, API_KEY } from "./constants";

import Apod from "./components/Apod";

function App() {
  const [data, setData] = useState(null);
  const [id, setId] = useState(0);

  const queryFormatDate = (date) => {
    return `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(
      2,
      "0"
    )}-${String(date.getDate()).padStart(2, "0")}`;
  };

  function cycleLeft(event) {
    let newId = id - 1;
    if (newId < 0) {
      newId = data.length - 1;
    }
    setId(newId);
  }

  function cycleRight(event) {
    let newId = id + 1;
    if (newId > data.length - 1) {
      newId = 0;
    }
    setId(newId);
  }

  useEffect(() => {
    const daysOfData = 10;
    const date = new Date();
    const endDate = queryFormatDate(date);
    date.setDate(date.getDate() - (daysOfData - 1));
    const startDate = queryFormatDate(date);
    axios
      .get(
        `${BASE_URL}/planetary/apod?api_key=${API_KEY}&end_date=${endDate}&start_date=${startDate}`
      )
      .then((res) => {
        console.log(res.data);
        setData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="App">
      <BiChevronLeft onClick={cycleLeft} className="left arrow" />
      <Apod data={data} id={id} />
      <BiChevronRight onClick={cycleRight} className="right arrow" />
    </div>
  );
}

export default App;
