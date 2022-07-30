import React from "react";

interface IProps {
  width: number;
}

const ProgressBar = (props: IProps) => {
  const style = {
    width: props.width + "%",
  };

  return (
    <div id="myProgress">
      <div id="myBar" style={style} />
    </div>
  );
};

export default ProgressBar;
