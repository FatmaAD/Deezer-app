import React from "react";
import CardImage, { Title } from "../themes/card";
import styled from "styled-components";

export const Wrapper = styled.div`
  background-color: grey;
  border-radius: 3px;
  margin: 0 5px 5px 5px;
  :hover {
    cursor: pointer;
  }
`;

const SongCard = props => {
  return (
    <Wrapper
      onClick={props.clicked}
      className="col-md-4 col-lg-2 d-flex flex-wrap justify-content-center"
    >
      <CardImage src={props.src} />
      <Title>{props.name}</Title>
    </Wrapper>
  );
};

export default SongCard;
