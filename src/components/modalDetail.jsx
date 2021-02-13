import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import ClosingX from "./closingX";
import { Link } from "react-router-dom";

function ModalDetail({ userDetails, onShow }) {
  // click outside
  const OutsideClickDetector = (ref) => {
    useEffect(() => {
      //function
      const handleClickOutside = (e) => {
        if (ref.current && !ref.current.contains(e.target)) {
          onShow();
        }
      };
      // binding of function
      document.addEventListener("mousedown", handleClickOutside);
      return () => {
        // cleaning of function
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }, [ref]);
  };

  const wrapperRef = useRef(null);
  OutsideClickDetector(wrapperRef);

  // detect escape key
  const handleEscapeKeyDown = (e) => {
    if (e.key === "Escape") {
      onShow();
    }
  };

  return (
    <Wrapper>
      <Container
        ref={wrapperRef}
        onKeyDown={handleEscapeKeyDown}
        tabIndex="0" // important, without this detect escape down will not working
      >
        <ClosingX onclick={onShow} />
        <Title>Credentials</Title>
        <div>
          <Box>
            <Subtitle>Username:</Subtitle>
            <Text>{userDetails.username} </Text>
          </Box>
          <Box>
            <Subtitle>User email:</Subtitle>
            <Text>{userDetails.email}</Text>
          </Box>
        </div>

        <Link to={`/${userDetails.username}`}>Full Detail</Link>
      </Container>
    </Wrapper>
  );
}

export default ModalDetail;

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  background-color: rgba(218, 223, 225, 0.6);
  background-size: cover;
  display: flex;
  position: absolute;
`;

const Container = styled.div`
  width: 300px;
  height: 200px;
  background-color: lightgrey;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  margin: auto;
  border: 2px solid black;
  position: relative;
`;

const Text = styled.span`
  margin: 10px;
`;

const Box = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Subtitle = styled.span`
  margin: 10px 0;
`;

const Title = styled.h3``;
