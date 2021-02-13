import React from "react";
import styled from "styled-components";

function UserControl({ onclick, label }) {
  return <Holder onClick={onclick}>{label}</Holder>;
}

export default UserControl;

const Holder = styled.div`
  width: 45px;
  height: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 5px;
  padding: 5px;
  background-color: lightgrey;
  cursor: pointer;
  border: 1px solid black;

  &:hover {
    background-color: darkgrey;
  }
`;
