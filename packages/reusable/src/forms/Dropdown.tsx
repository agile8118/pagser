import React, { useState, useRef, useEffect } from "react";

interface IProps {
  children: any;
  onChange: (value: string) => void;
  select?: string;
  type?: "" | "mini";
  className?: string;
}

const Dropdown = ({ children, onChange, select, type, className = "btn-text" }: IProps) => {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  const button = (
    <button className={className} onClick={() => setOpen((o) => !o)}>
      {children[0].props.children}
      <i className={children[0].props["data-icon-class"]} aria-hidden="true" />
    </button>
  );

  const items = children.map(({ props }) => {
    if (props["data-role-name"] === "item") {
      return (
        <a
          className={
            select === props["data-name"]
              ? "dropdown__item dropdown__item--active"
              : "dropdown__item"
          }
          href="javascript:void(0)"
          key={props["data-name"]}
          onClick={() => { onChange(props["data-name"]); setOpen(false); }}
        >
          {props.children}
        </a>
      );
    }
  });

  return (
    <div
      ref={ref}
      className={`dropdown${type === "mini" ? " dropdown-mini" : ""} ${open ? "dropdown--open" : "dropdown--close"}`}
    >
      {button}
      <div className="dropdown__content">{items}</div>
    </div>
  );
};

export default Dropdown;
