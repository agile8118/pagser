import React, { Component } from "react";

function ProgressBar(props) {
	var style = {
		width: props.width + "%"
	};
	return (
		<div id="myProgress">
			<div id="myBar" style={style} />
		</div>
	);
}

export default ProgressBar;
