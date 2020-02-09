import styled from "styled-components";

export const ModalWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 10;
  display: flex;
  align-items: baseline;
  justify-content: center;
  align-items: center;
`;
export const ModalBoxSetup = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  overflow: hidden;
  padding: 16px;
  margin: 50px auto;
  z-index: 1;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.04);
`;
export const ModalBg = styled.div`
  position: relative;
  width: 87vw;
  height: 90vh;
  z-index: 0;
  background: #343434;
  box-shadow: 1px 1px 3px 3px;
  overflow-y: scroll;
`;
