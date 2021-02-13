import React from "react";
import styled from "styled-components";

function ClosingX({ onclick }) {
  return <Holder onClick={onclick}>X</Holder>;
}

export default ClosingX;

const Holder = styled.div`
  width: 25px;
  height: 25px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  background-color: darkgray;
  position: absolute;
  top: 0;
  right: 0;
  border: 1px solid black;
`;
