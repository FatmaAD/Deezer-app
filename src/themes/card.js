import React from "react";
import styled from "styled-components";

const ImgWrapper = styled.div`
  overflow:hidden;
  justify-content: center;
  width: 100%;
  hight: 100%:
`;

const Img = styled.img`
  width: 100%;
  transition: all 300ms;
  overflow: hidden;
  :hover {
    cursor: pointer;
    transform: scale(1.3);
  }
`;

export const Title = styled.p`
  width: 100%;
  color: #fff;
  font-weight: 800;
  text-transform: capitalize;
  font-family: Helvetica Neue, Helvetica, Arial;
  cursor: pointer;
`;
export const Paragraph = styled.p`
  width: 100%;
  color: #fff;
  text-transform: capitalize;
  font-family: Helvetica Neue, Helvetica, Arial;
  :hover {
    cursor: pointer;
  }
`;
const Card = props => {
  return (
    <ImgWrapper className="row p-0 mt-2 mb-2">
      <div className="col-12 w-100 p-0">
        <Img src={props.src} />
      </div>
    </ImgWrapper>
  );
};

export default Card;
