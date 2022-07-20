interface IValidate {
  isAlpha: (string: string) => boolean;
  isUsername: (string: string) => boolean;
  len: (string: string, min: number, max: number) => boolean;
  isEmpty: (string: string) => boolean;
  isHardPassword: (password: string) => boolean;
  isNormalPassword: (password: string) => boolean;
  isEmail: (email: string) => boolean;
  letterPercentage: (string: string, min: number) => boolean;
}

const validate: any = {};

validate.isAlpha = (string: string) => {
  if (/^[A-Za-z ]+$/.test(string)) {
    return true;
  } else {
    return false;
  }
};

validate.isUsername = (string: string) => {
  if (/^[a-zA-Z0-9_]+$/.test(string)) {
    return true;
  } else {
    return false;
  }
};

validate.len = (string: string, min: number, max: number) => {
  if (string.length >= min && string.length <= max) {
    return true;
  } else {
    return false;
  }
};

validate.isEmpty = (string: string) => {
  if (string.length > 0) {
    return false;
  } else {
    return true;
  }
};

validate.isHardPassword = (password: string) => {
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

validate.isNormalPassword = (password: string) => {
  if (/[0-9]/.test(password) && /[a-z]/.test(password)) {
    return true;
  } else {
    return false;
  }
};

validate.isEmail = (email: string) => {
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
validate.letterPercentage = (string: string, minPercent: number) => {
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

export default validate as IValidate;
