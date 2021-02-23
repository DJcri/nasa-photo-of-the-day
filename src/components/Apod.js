import React from "react";
import styled from "styled-components";

import "../css/anim.css";

const Apod = (props) => {
  const { data } = props;

  const copyright = () => {
    return data.copyright ? (
      <p className="author">{`By ${data.copyright}`}</p>
    ) : null;
  };

  return (
    <ApodContainer className="apod card">
      <FlexContainer className="flex-container">
        <ImgContainer className="img-container">
          <h2>Astronomy Picture of the Day</h2>
          <p className="date">{data.date}</p>
          <img style={{ width: "100%" }} src={data.hdurl} alt="astronomy_pic" />
        </ImgContainer>
        <DetailsContainer className="details-container">
          <h3 className="title">{data.title}</h3>
          {copyright()}
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
  box-shadow: ${(props) => props.theme.boxShadow};
  margin: 0 auto;
  padding: 40px;
  width: 60%;
  font-size: 1rem;
  color: white;
`;

const FlexContainer = styled.div`
  display: flex;
  justify-content: space-between;
  @media screen and (max-width: ${(props) => props.theme.breakpoint1}) {
    display: block;
    font-size: 0.8rem;
  }
`;

const ImgContainer = styled.div`
  width: 45%;
  @media screen and (max-width: ${(props) => props.theme.breakpoint1}) {
    width: 100%;
  }
`;

const DetailsContainer = styled.div`
  width: 45%;
  @media screen and (max-width: ${(props) => props.theme.breakpoint1}) {
    width: 100%;
  }
`;
