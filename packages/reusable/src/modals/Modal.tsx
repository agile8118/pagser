import { createPortal } from "react-dom";

interface componentProps {
  children: React.ReactNode;
  header: string;
  open: boolean;
  type?: "small";
  onClose: any;
}

const Modal = ({ children, header, open, type, onClose }: componentProps) => {
  let className = open ? "mdl" : "mdl display-none";
  if (type === "small") className += " mdl-sm";
  return createPortal(
    <div className={className}>
      <div className="mdl__content">
        <div className="mdl__header">
          <span className="mdl__close" onClick={onClose}>
            &times;
          </span>
          <h3 className="heading-tertiary">{header}</h3>
        </div>

        <div className="mdl__body">{children}</div>
      </div>
    </div>,
    document.querySelector("#modal-root") as HTMLElement
  );
};

export default Modal;
