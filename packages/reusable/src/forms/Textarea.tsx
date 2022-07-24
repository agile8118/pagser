import React, { useState, useEffect, useRef } from "react";

interface Props {
  value?: string;
  size?: "big" | "small";
  id?: string;
  rounded?: boolean;
  required?: boolean;
  rows?: number;
  error?: string;
  onChange?: (s: string) => void;
  onBlur?: (s: string) => void;
  label?: string;
  placeholder?: string;
  maxLength?: number;
  help?: string;
}

const Textarea = (props: Props) => {
  const [value, setValue] = useState(props.value?.toString());

  const input = useRef<HTMLTextAreaElement>(null);

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

  let className = "form-text form-text--textarea";

  switch (props.size) {
    case "big":
      className += " form-text--big";
      break;
    case "small":
      className += " form-text--small";
      break;
  }

  if (props.rounded) className += " form-text--rounded";
  if (props.error) className += " form-text--error";

  return (
    <>
      <div className={className}>
        {props.placeholder && (
          <label
            className="form__label"
            onClick={() => {
              input.current?.focus();
            }}
          >
            {props.label}
          </label>
        )}

        <div className="form-text__input-container">
          {props.help && (
            <div className="tooltip tooltip-top a-19">
              <a href="#" className="tooltip__icon">
                ?
              </a>

              <div className="tooltip__text">{props.help}</div>
            </div>
          )}

          <textarea
            rows={props.rows}
            ref={input}
            id={props.id}
            className="form-text__input"
            placeholder={props.placeholder}
            maxLength={props.maxLength}
            value={value}
            required={props.required}
            onChange={(event: any) => {
              let value = event.target.value;
              setValue(value);
            }}
            onBlur={(event: any) => {
              if (props.onBlur) {
                props.onBlur(event.target.value);
              }
            }}
          ></textarea>
        </div>

        {!props.placeholder && (
          <label
            className={`form-text__label ${
              value ? "form-text__label--top" : ""
            }`}
            onClick={() => {
              input.current?.focus();
            }}
          >
            {props.label}
          </label>
        )}
      </div>

      <div className="form-text__footer">
        {props.error && (
          <span className="input-error">
            <i className="fa fa-exclamation-circle"></i>
            {props.error}
          </span>
        )}

        {props.maxLength && (
          <span className="form-text__length-display">
            {props.maxLength - (value?.length || 0)}
          </span>
        )}
      </div>
    </>
  );
};

export default Textarea;
