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
        <textarea
          rows={props.rows}
          ref={input}
          id={props.id}
          className="form-text__input"
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

        <label
          className={`form-text__label ${value ? "form-text__label--top" : ""}`}
          onClick={() => {
            input.current?.focus();
          }}
        >
          {props.label}
        </label>
      </div>

      {props.error && (
        <span className="input-error">
          <i className="fa fa-exclamation-circle"></i>
          {props.error}
        </span>
      )}
    </>
  );
};

export default Textarea;
