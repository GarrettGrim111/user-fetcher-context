import React from "react";

const FormInput = ({
  name,
  type,
  placeholder,
  onChange,
  className,
  value,
  label,
}) => {
  return (
    <>
      <label htmlFor={name}>{label}</label>
      <input
        id={name}
        name={name}
        type={type}
        placeholder={placeholder}
        onChange={onChange}
        value={value}
        className={className}
      />
    </>
  );
};

FormInput.defaultProps = {
  type: "text",
  className: "",
};

export default FormInput;
