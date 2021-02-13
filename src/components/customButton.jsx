import React from "react";
import styled from "styled-components";

function CustomButton({ type, onclick, children }) {
  return (
    <Button type={type} onClick={onclick}>
      {children}
    </Button>
  );
}

CustomButton.defaultProps = { children: "Confirm" };

export default CustomButton;

const Button = styled.button`
  height: 30px;
  width: 100px;
  padding: 10px;
  margin: 15px 0;
  background-color: #3d67d2;
  outline: none;
  cursor: pointer;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  :hover {
    background-color: #6687db;
  }
`;
