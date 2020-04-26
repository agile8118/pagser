import React from "react";

const Dropdown = ({ num, children, onChange, select }) => {
  // Make the button based on passed children
  let button = (
    <button
      className="btn-text"
      onClick={() => {}}
      data-role="dropdown"
      data-dropdown={num}
    >
      {children[0].props.children}
      <i
        className={children[0].props["data-icon-class"]}
        aria-hidden="true"
        data-role="dropdown"
        data-dropdown={num}
      />
    </button>
  );

  // Make list items based on passed children
  let items = children.map(({ props }) => {
    if (props["data-role-name"] === "item") {
      let className =
        select === props["data-name"]
          ? "dropdown__item dropdown__item--active"
          : "dropdown__item";

      return (
        <a
          className={className}
          data-role="dropdown"
          data-dropdown={num}
          href="#"
          key={props["data-name"]}
          onClick={() => onChange(props["data-name"])}
        >
          {props.children}
        </a>
      );
    }
  });

  return (
    <div
      className="dropdown dropdown--close"
      data-role="dropdown"
      data-dropdown={num}
    >
      {button}
      <div
        className="dropdown__content"
        data-role="dropdown"
        data-dropdown={num}
      >
        {items}
      </div>
    </div>
  );
};

export default Dropdown;
