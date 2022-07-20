import React, { useState, useEffect, useRef } from "react";

interface Props {
  value?: string;
  size?: "big" | "small";
  rounded?: boolean;
  id?: string;
  required?: boolean;
  error?: string;
  shouldDivideNumberByThree?: boolean;
  onChange?: (s: string) => void;
  onBlur?: (s: string) => void;
  requiredWithError?: boolean;
  label?: string;
  type?: string;
  success?: boolean;
  disabled?: boolean;
}

const Input = (props: Props) => {
  const [value, setValue] = useState(props.value?.toString());

  const input = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (props.value) {
      setValue(props.value.toString());
    } else {
      setValue("");
    }
  }, [props.value]);

  useEffect(() => {
    if (props.onChange && typeof value === "string") {
      props.onChange(value);
    }
  }, [value]);

  let className = "form-text";

  switch (props.size) {
    case "big":
      className += " form-text--big";
      break;
    case "small":
      className += " form-text--small";
      break;
  }

  if (props.rounded) className += " form-text--rounded";
  if (props.success && !props.disabled) className += " form-text--success";
  if (props.error && !props.disabled) className += " form-text--error";
  if (props.disabled) className += " form-text--disabled";

  let shouldDivideNumberByThree = true;
  if (typeof props.shouldDivideNumberByThree === "boolean") {
    shouldDivideNumberByThree = props.shouldDivideNumberByThree;
  }

  if (props.requiredWithError && !value) {
    className += " form-text--error";
  }

  return (
    <>
      <div className={className}>
        <input
          ref={input}
          className="form-text__input"
          id={props.id}
          disabled={props.disabled}
          value={
            props.type === "number" && value
              ? shouldDivideNumberByThree
                ? Number(value).toLocaleString()
                : value
              : value
          }
          required={props.required}
          onChange={(event: any) => {
            let value = event.target.value;

            if (props.type === "number") {
              value = value.replace(/,/g, "");

              if (!!Number(value) || Number(value) === 0) {
                setValue(value);
              }
            } else {
              setValue(value);
            }
          }}
          onBlur={(event: any) => {
            let value = event.target.value;
            setValue(value);
            if (props.onBlur) props.onBlur(value);
          }}
          type={props.type === "password" ? "password" : "text"}
        />
        <label
          className={`form-text__label ${value ? "form-text__label--top" : ""}`}
          onClick={() => {
            input.current?.focus();
          }}
        >
          {props.label}
        </label>
      </div>

      {props.error && !props.disabled && (
        <span className="input-error">
          <i className="fa fa-exclamation-circle"></i>
          {props.error}
        </span>
      )}
    </>
  );
};

export default Input;
