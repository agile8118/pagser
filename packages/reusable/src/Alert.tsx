export type TType = "success" | "error" | "normal";

interface componentProps {
  message?: string;
  type?: TType;
  onClose?: any;
  additionalClasses?: string;
}

export const Alert = (props: componentProps) => {
  let className = "display-none";
  if (props.message) {
    if (props.type === "success") {
      className = "alert alert--success";
    }

    if (props.type === "error") {
      className = "alert alert--error";
    }

    if (props.type === "normal") {
      className = "alert alert--normal";
    }

    if (props.additionalClasses) {
      className += ` ${props.additionalClasses}`;
    }
  }

  return (
    <div className={className}>
      <span>{props.message}</span>
      <button onClick={props.onClose} type="button" className="alert__dismiss">
        <i className="fa fa-remove" />
      </button>
    </div>
  );
};
