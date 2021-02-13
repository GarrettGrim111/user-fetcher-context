import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import ClosingX from "./closingX";

import CustomButton from "./customButton";
import FormInput from "./input";

function Modal({ onShow, inputData, onChange, onSubmit, onReset }) {
  // click outside
  const OutsideClickDetector = (ref) => {
    useEffect(() => {
      //function
      const handleClickOutside = (e) => {
        if (ref.current && !ref.current.contains(e.target)) {
          onReset();
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
      onReset();
      onShow();
    }
  };

  return (
    <Wrapper>
      <Form
        onSubmit={onSubmit}
        ref={wrapperRef}
        onKeyDown={handleEscapeKeyDown}
        tabIndex="0" // important, without this detect escape down will not working
      >
        <ClosingX onclick={onShow} />

        <FormInput
          value={inputData.name}
          onChange={onChange}
          name="name"
          label="Name"
          required
          type="text"
        />
        <FormInput
          value={inputData.username}
          onChange={onChange}
          name="username"
          label="Username"
          required
          type="text"
        />
        <FormInput
          value={inputData.email}
          onChange={onChange}
          name="email"
          label="Email"
          required
          type="email"
        />
        <FormInput
          value={inputData.street}
          onChange={onChange}
          name="street"
          label="Street"
          required
          type="text"
        />
        <FormInput
          value={inputData.city}
          onChange={onChange}
          name="city"
          label="City"
          required
          type="text"
        />
        <FormInput
          value={inputData.zipcode}
          onChange={onChange}
          name="zipcode"
          label="Zipcode"
          required
          type="text"
        />

        <CustomButton type="submit">Submit</CustomButton>
      </Form>
    </Wrapper>
  );
}

export default Modal;

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  background-color: rgba(218, 223, 225, 0.6);
  background-size: cover;
  display: flex;
  position: absolute;
`;

const Form = styled.form`
  width: 300px;
  height: 450px;
  background-color: lightgrey;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  margin: auto;
  border: 2px solid black;
  position: relative;
  padding: 15px;
`;
