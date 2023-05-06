interface IValidate {
  isAlpha: (string: string) => boolean;
  isUsername: (string: string) => boolean;
  len: (string: string, min: number, max: number) => boolean;
  isEmpty: (string: string) => boolean;
  isHardPassword: (password: string) => boolean;
  isNormalPassword: (password: string) => boolean;
  isEmail: (email: string) => boolean;
  letterPercentage: (string: string, min: number) => boolean;
  page: (type: "public" | "private") => IInPageValidation;
}

interface IInPageValidation {
  title: (title: string) => string | null;
  briefDes: (briefDes: string) => string | null;
  targets: (targets: string) => string | null;
  tags: (tags: string[]) => string | null;
  url: (url: string, usedUrls: string[]) => string | null;
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

/**
 * Validations for the whole page, will be used both in front and back.
 * If any of the functions return a string that means there's an error.
 *
 * @return null => input is ok
 * @return string => error message
 *
 * EX: validate.page("public").title("This is some title");
 */
validate.page = (type: "public" | "private") => {
  if (type === "public") {
    return {
      // Validate tags, only for public pages
      tags: (tags: string[]) => {
        // number of tags
        if (tags.length < 5) {
          return "Please choose at least 5 tags.";
        }

        // Total length of tags
        let totalLength = 0;
        tags.forEach((tag: string) => {
          totalLength += tag.length;
        });
        if (totalLength >= 200) {
          return "Total length of tags must be less than 200 characters.";
        }

        return null;
      },
      // Validate the page title, only the length
      title: (title: string) => {
        const minLen = 15;

        if (title.length < minLen) {
          return `Title should be more than ${minLen} characters.`;
        }

        if (title.length > 50) {
          return "Title should be less than 50 characters.";
        }

        return null;
      },
      // Validate the page brief description, only the length
      briefDes: (briefDes: string) => {
        const minLen = 30;

        if (briefDes.length < minLen) {
          return `Brief description should be more than ${minLen} characters.`;
        }

        if (briefDes.length > 300) {
          return "Brief description should be less than 300 characters.";
        }

        return null;
      },
      // Validate the page targets description, only the length
      targets: (targets: string) => {
        const minLen = 20;

        if (targets.length < minLen) {
          return `Targets description should be more than ${minLen} characters.`;
        }

        if (targets.length > 300) {
          return "Targets description should be less than 300 characters.";
        }

        return null;
      },
    };
  }

  if (type === "private") {
    return {
      // Validate the chosen url by user, only for private pages
      url: (url: string, usedUrls: string[]) => {
        if (
          url &&
          url.length > 0 &&
          url.length < 200 &&
          usedUrls.indexOf(url) === -1
        ) {
          return null;
        } else if (usedUrls.indexOf(url) !== -1) {
          return `You have already used "${url}" url, choose something else.`;
        } else if (url.length === 0) {
          return "Please choose a URL for your page.";
        } else {
          return "URL should be less than 200 characters.";
        }
      },
      // Validate the page title, only the length
      title: (title: string) => {
        const minLen = 1;

        if (title.length < minLen) {
          return "Title cannot be be blank.";
        }

        if (title.length > 50) {
          return "Title should be less than 50 characters.";
        }

        return null;
      },
      // Validate the page brief description, only the length
      briefDes: (briefDes: string) => {
        if (briefDes.length > 300) {
          return "Brief description should be less than 300 characters.";
        }

        return null;
      },
      // Validate the page title, only the length
      targets: (targets: string) => {
        if (targets.length > 300) {
          return "Targets description should be less than 300 characters.";
        }

        return null;
      },
    };
  }
};

export default validate as IValidate;
