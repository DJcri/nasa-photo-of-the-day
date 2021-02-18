import React, { useState, useEffect } from "react";
import styled from "styled-components";

import axios from "axios";
import { BASE_URL, API_KEY } from "../constants";

import Loading from "./Loading";

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
    return (
      <ApodContainer>
        <Loading />
      </ApodContainer>
    );
  }

  return (
    <ApodContainer className="apod">
      <FlexContainer className="flex-container">
        <ImgContainer className="img-container">
          <h2>Astronomy Picture of the Day</h2>
          <img style={{ width: "100%" }} src={data.hdurl} alt="astronomy_pic" />
          <p className="date">{data.date}</p>
          <p className="author">{`By ${data.copyright}`}</p>
        </ImgContainer>
        <DetailsContainer className="details-container">
          <h3 className="title">{data.title}</h3>
          <Desc className="desc">{data.explanation}</Desc>
        </DetailsContainer>
      </FlexContainer>
    </ApodContainer>
  );
};

export default Apod;

const Desc = styled.p`
  line-height: 32px;
`;

const ApodContainer = styled.div`
  background: ${(props) => props.theme.transparentBG};
  margin: 0 auto;
  padding: 30px;
  width: 70%;
  font-size: 1rem;
  box-shadow: ${(props) => props.theme.boxShadow};
  color: white;
`;

const FlexContainer = styled.div`
  display: flex;
  justify-content: space-around;
`;

const ImgContainer = styled.div`
  width: 50%;
`;
const DetailsContainer = styled.div`
  width: 40%;
`;
