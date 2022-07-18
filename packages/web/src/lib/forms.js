var func = {};

func.isAlpha = string => {
	if (/^[A-Za-z ]+$/.test(string)) {
		return true;
	} else {
		return false;
	}
};

func.isUsername = string => {
	if (/^[a-zA-Z0-9_]+$/.test(string)) {
		return true;
	} else {
		return false;
	}
};

func.len = (string, min, max) => {
	if (string.length >= min && string.length <= max) {
		return true;
	} else {
		return false;
	}
};

func.isEmpty = string => {
	if (string.length > 0) {
		return false;
	} else {
		return true;
	}
};

func.isHardPassword = password => {
	if (
		/[0-9]/.test(password) &&
		/[a-z]/.test(password) &&
		/[A-Z]/.test(password)
	) {
		return true;
	} else {
		return false;
	}
};

func.isNormalPassword = password => {
	if (/[0-9]/.test(password) && /[a-z]/.test(password)) {
		return true;
	} else {
		return false;
	}
};

func.isEmail = email => {
	if (
		/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
			email
		)
	) {
		return true;
	} else {
		return false;
	}
};

// return how much of a string is letter
func.letterPercentage = (string, minPercent) => {
	if (string.length > 0) {
		const cleanString = string.replace(/ /g, "");
		const letters = cleanString.replace(/[^A-Z]/gi, "");
		const percent = Math.round((letters.length / cleanString.length) * 100);

		if (percent >= minPercent) {
			return true;
		} else {
			return false;
		}
	} else {
		return true;
	}
};

// repreent an input group as a success
func.inputOK = (fieldGroupId, spanNumber = 1) => {
	const fieldGroup = document.querySelector(`#${fieldGroupId}`);
	fieldGroup.classList.remove("form__group--error");
	fieldGroup.classList.add("form__group--success");
	fieldGroup.children[spanNumber].children[0].innerHTML = "";
};

// repreent a input group as an error
func.inputError = (fieldGroupId, errMsg, spanNumber = 1) => {
	const fieldGroup = document.querySelector(`#${fieldGroupId}`);
	fieldGroup.classList.remove("form__group--success");
	fieldGroup.classList.add("form__group--error");
	fieldGroup.children[spanNumber].children[0].innerHTML = errMsg;
};

// repreent a input group as normal
func.inputNone = (fieldGroupId, spanNumber = 1) => {
	const fieldGroup = document.querySelector(`#${fieldGroupId}`);
	fieldGroup.classList.remove("form__group--success");
	fieldGroup.classList.remove("form__group--error");
	fieldGroup.children[spanNumber].children[0].innerHTML = "";
};

func.enableButton = buttonId => {
	const button = document.querySelector(`#${buttonId}`);
	button.classList.remove("btn-disabled");
	button.removeAttribute("disabled");
};

func.disableButton = buttonId => {
	const button = document.querySelector(`#${buttonId}`);
	button.classList.add("btn-disabled");
	button.setAttribute("disabled", true);
};

// reset confirm password input to the initial rendered
func.confirmPasswordReset = function() {
	const fieldGroup = document.querySelector(`#confirm-password`);
	this.setState({ confirmPassword: "" });
	fieldGroup.classList.remove("form__group--error");
	fieldGroup.classList.remove("form__group--success");
	fieldGroup.children[0].disabled = true;
	fieldGroup.children[1].children[0].innerHTML = "";
};

export default func;
