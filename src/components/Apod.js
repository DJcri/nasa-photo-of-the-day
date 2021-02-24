import React from "react";
import Loading from "../components/Loading";

import styled from "styled-components";
import "../css/anim.css";

const Apod = (props) => {
  let { data, id } = props;

  if (!data) {
    return (
      <ApodContainer>
        <Loading />
      </ApodContainer>
    );
  }

  data = data[id];

  const copyright = () => {
    return data.copyright ? (
      <p className="author">{`By ${data.copyright}`}</p>
    ) : null;
  };

  return (
    <ApodContainer className="apod card">
      <h2>{data.date}</h2>
      <FlexContainer className="flex-container">
        <ContentContainer className="content-container">
          {data.media_type === "image" && (
            <img style={{ width: "100%" }} src={data.url} alt="astronomy_pic" />
          )}
          {data.media_type === "video" && (
            <Video title={data.title} src={data.url} />
          )}
        </ContentContainer>
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

//Styled Components
const Desc = styled.p`
  line-height: 32px;
`;

const ApodContainer = styled.div`
  display: inline-block;
  background: ${(props) => props.theme.transparentBG};
  box-shadow: ${(props) => props.theme.boxShadow};
  margin: 0 auto;
  margin-top: 80px;
  padding: 40px;
  width: 75%;
  font-size: 1rem;
  color: white;
`;

const FlexContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media screen and (max-width: ${(props) => props.theme.breakpoint1}) {
    display: block;
    font-size: 0.8rem;
  }
`;

const ContentContainer = styled.div`
  margin-top: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 45%;
  max-height: 500px;
  min-width: 512px;
  overflow: hidden;
  @media screen and (max-width: ${(props) => props.theme.breakpoint1}) {
    min-width: 0;
    width: 100%;
  }
`;

const Video = styled.iframe`
  box-sizing: border-box;
  width: 512px;
  height: 288px;
  @media screen and (max-width: 1000px) {
    width: 256px;
    height: 144px;
  }
`;

const DetailsContainer = styled.div`
  width: 45%;
  @media screen and (max-width: ${(props) => props.theme.breakpoint1}) {
    width: 100%;
  }
`;
