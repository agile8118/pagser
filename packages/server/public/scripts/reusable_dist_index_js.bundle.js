"use strict";
(self["webpackChunk_pagser_web"] = self["webpackChunk_pagser_web"] || []).push([["reusable_dist_index_js"],{

/***/ "../reusable/dist/Alert.js":
/*!*********************************!*\
  !*** ../reusable/dist/Alert.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.Alert = void 0;

const jsx_runtime_1 = __webpack_require__(/*! react/jsx-runtime */ "../../node_modules/react/jsx-runtime.js");

const Alert = props => {
  let className = "display-none";

  if (props.message) {
    if (props.type === "success") {
      className = "alert alert--success";
    }

    if (props.type === "error") {
      className = "alert alert--error";
    }

    if (props.type === "normall") {
      className = "alert alert--normall";
    }

    if (props.additionalClasses) {
      className += ` ${props.additionalClasses}`;
    }
  }

  return (0, jsx_runtime_1.jsxs)("div", Object.assign({
    className: className
  }, {
    children: [(0, jsx_runtime_1.jsx)("span", {
      children: props.message
    }), (0, jsx_runtime_1.jsx)("button", Object.assign({
      onClick: props.onClose,
      type: "button",
      className: "alert__dismiss"
    }, {
      children: (0, jsx_runtime_1.jsx)("i", {
        className: "fa fa-remove"
      })
    }))]
  }));
};

exports.Alert = Alert;

/***/ }),

/***/ "../reusable/dist/InlineLoading.js":
/*!*****************************************!*\
  !*** ../reusable/dist/InlineLoading.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));

const jsx_runtime_1 = __webpack_require__(/*! react/jsx-runtime */ "../../node_modules/react/jsx-runtime.js");

const InlineLoading = props => {
  let className = "lds-ellipsis ";
  if (props.className) className += props.className;
  const el = (0, jsx_runtime_1.jsxs)("div", Object.assign({
    className: className
  }, {
    children: [(0, jsx_runtime_1.jsx)("div", {
      className: `lds-ellipsis--${props.color}`
    }), (0, jsx_runtime_1.jsx)("div", {
      className: `lds-ellipsis--${props.color}`
    }), (0, jsx_runtime_1.jsx)("div", {
      className: `lds-ellipsis--${props.color}`
    }), (0, jsx_runtime_1.jsx)("div", {
      className: `lds-ellipsis--${props.color}`
    })]
  }));

  if (props.center) {
    return (0, jsx_runtime_1.jsx)("div", Object.assign({
      className: "u-text-center"
    }, {
      children: el
    }));
  } else return el;
};

exports["default"] = InlineLoading;

/***/ }),

/***/ "../reusable/dist/Loading.js":
/*!***********************************!*\
  !*** ../reusable/dist/Loading.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));

const jsx_runtime_1 = __webpack_require__(/*! react/jsx-runtime */ "../../node_modules/react/jsx-runtime.js");

const Loading = ({
  className
}) => {
  return (0, jsx_runtime_1.jsx)("div", Object.assign({
    className: `lds-css ng-scope ${className}`
  }, {
    children: (0, jsx_runtime_1.jsxs)("div", Object.assign({
      className: "lds-spinner"
    }, {
      children: [(0, jsx_runtime_1.jsx)("div", {}), (0, jsx_runtime_1.jsx)("div", {}), (0, jsx_runtime_1.jsx)("div", {}), (0, jsx_runtime_1.jsx)("div", {}), (0, jsx_runtime_1.jsx)("div", {}), (0, jsx_runtime_1.jsx)("div", {}), (0, jsx_runtime_1.jsx)("div", {}), (0, jsx_runtime_1.jsx)("div", {}), (0, jsx_runtime_1.jsx)("div", {}), (0, jsx_runtime_1.jsx)("div", {}), (0, jsx_runtime_1.jsx)("div", {}), (0, jsx_runtime_1.jsx)("div", {})]
    }))
  }));
};

exports["default"] = Loading;

/***/ }),

/***/ "../reusable/dist/forms/Button.js":
/*!****************************************!*\
  !*** ../reusable/dist/forms/Button.js ***!
  \****************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {



var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", ({
  value: true
}));

const jsx_runtime_1 = __webpack_require__(/*! react/jsx-runtime */ "../../node_modules/react/jsx-runtime.js");

const InlineLoading_1 = __importDefault(__webpack_require__(/*! ../InlineLoading */ "../reusable/dist/InlineLoading.js"));

const Button = props => {
  let className = "button";

  switch (props.size) {
    case "big":
      className += " button-big";
      break;

    case "small":
      className += " button-small";
      break;

    case "extraSmall":
      className += " button-extra-small";
      break;
  }

  switch (props.color) {
    case "default":
      if (props.outlined) {
        className += " button-default-outlined";
      } else {
        className += " button-default";
      }

      break;

    case "blue":
      if (props.outlined) {
        className += " button-blue-outlined";
      } else {
        className += " button-blue";
      }

      break;

    case "red":
      if (props.outlined) {
        className += " button-red-outlined";
      } else {
        className += " button-red";
      }

      break;

    case "green":
      if (props.outlined) {
        className += " button-green-outlined";
      } else {
        className += " button-green";
      }

      break;

    case "gray":
      if (props.outlined) {
        className += " button-gray-outlined";
      } else {
        className += " button-gray";
      }

      break;

    default:
      if (props.outlined) {
        className += " button-default-outlined";
      } else {
        className += " button-default";
      }

      break;
  }

  if (props.rounded) {
    className += " button-rounded";
  }

  if (props.block) {
    className += " button-block";
  }

  className += " " + props.className;
  let loadingColor;
  if (props.color === "blue") loadingColor = "blue";
  if (!props.outlined) loadingColor = "light";
  return (0, jsx_runtime_1.jsxs)("button", Object.assign({
    id: props.id,
    style: props.style,
    onClick: props.onClick,
    className: className,
    type: props.type ? props.type : "button",
    disabled: props.loading ? true : props.disabled
  }, {
    children: [props.children, props.loading && (0, jsx_runtime_1.jsx)(InlineLoading_1.default, {
      className: "u-margin-left-03",
      color: loadingColor
    })]
  }));
};

exports["default"] = Button;

/***/ }),

/***/ "../reusable/dist/forms/Dropdown.js":
/*!******************************************!*\
  !*** ../reusable/dist/forms/Dropdown.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));

const jsx_runtime_1 = __webpack_require__(/*! react/jsx-runtime */ "../../node_modules/react/jsx-runtime.js");

const Dropdown = ({
  num,
  children,
  onChange,
  select,
  type,
  className = "btn-text"
}) => {
  // Make the button based on passed children
  let button = (0, jsx_runtime_1.jsxs)("button", Object.assign({
    className: className,
    onClick: () => {},
    "data-role": "dropdown",
    "data-dropdown": num
  }, {
    children: [children[0].props.children, (0, jsx_runtime_1.jsx)("i", {
      className: children[0].props["data-icon-class"],
      "aria-hidden": "true",
      "data-role": "dropdown",
      "data-dropdown": num
    })]
  })); // Make list items based on passed children

  let items = children.map(({
    props
  }) => {
    if (props["data-role-name"] === "item") {
      let className = select === props["data-name"] ? "dropdown__item dropdown__item--active" : "dropdown__item";
      return (0, jsx_runtime_1.jsx)("a", Object.assign({
        className: className,
        "data-role": "dropdown",
        "data-dropdown": num,
        href: "javascript:void(0)",
        onClick: () => onChange(props["data-name"])
      }, {
        children: props.children
      }), props["data-name"]);
    }
  });
  return (0, jsx_runtime_1.jsxs)("div", Object.assign({
    className: `dropdown ${type === "mini" && "dropdown-mini"} dropdown--close`,
    "data-role": "dropdown",
    "data-dropdown": num
  }, {
    children: [button, (0, jsx_runtime_1.jsx)("div", Object.assign({
      className: "dropdown__content",
      "data-role": "dropdown",
      "data-dropdown": num
    }, {
      children: items
    }))]
  }));
};

exports["default"] = Dropdown;

/***/ }),

/***/ "../reusable/dist/forms/Input.js":
/*!***************************************!*\
  !*** ../reusable/dist/forms/Input.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));

const jsx_runtime_1 = __webpack_require__(/*! react/jsx-runtime */ "../../node_modules/react/jsx-runtime.js");

const react_1 = __webpack_require__(/*! react */ "../../node_modules/react/index.js");

const Input = props => {
  var _a;

  const [value, setValue] = (0, react_1.useState)((_a = props.value) === null || _a === void 0 ? void 0 : _a.toString());
  const input = (0, react_1.useRef)(null);
  (0, react_1.useEffect)(() => {
    if (props.value) {
      setValue(props.value.toString());
    } else {
      setValue("");
    }
  }, [props.value]);
  (0, react_1.useEffect)(() => {
    if (props.onChange && typeof value === "string") {
      props.onChange(value);
    }
  }, [value]);
  let className = "form-text";

  switch (props.size) {
    case "big":
      className += " form-text--big";
      break;

    case "small":
      className += " form-text--small";
      break;
  }

  if (props.rounded) className += " form-text--rounded";
  if (props.success && !props.disabled) className += " form-text--success";
  if (props.error && !props.disabled) className += " form-text--error";
  if (props.disabled) className += " form-text--disabled";
  let shouldDivideNumberByThree = true;

  if (typeof props.shouldDivideNumberByThree === "boolean") {
    shouldDivideNumberByThree = props.shouldDivideNumberByThree;
  }

  if (props.requiredWithError && !value) {
    className += " form-text--error";
  }

  if (props.lined) {
    className += " form-text-lined";
  }

  return (0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, {
    children: [(0, jsx_runtime_1.jsxs)("div", Object.assign({
      className: className
    }, {
      children: [props.placeholder && !props.lined && (0, jsx_runtime_1.jsx)("label", Object.assign({
        className: "form__label",
        onClick: () => {
          var _a;

          (_a = input.current) === null || _a === void 0 ? void 0 : _a.focus();
        }
      }, {
        children: props.label
      })), (0, jsx_runtime_1.jsxs)("div", Object.assign({
        className: "form-text__input-container"
      }, {
        children: [props.help && (0, jsx_runtime_1.jsxs)("div", Object.assign({
          className: "tooltip tooltip-top"
        }, {
          children: [(0, jsx_runtime_1.jsx)("a", Object.assign({
            href: "#",
            className: "tooltip__icon"
          }, {
            children: "?"
          })), (0, jsx_runtime_1.jsx)("div", Object.assign({
            className: "tooltip__text"
          }, {
            children: props.help
          }))]
        })), props.innerInputLabel && (0, jsx_runtime_1.jsx)("span", Object.assign({
          className: "form-text__inner-input-label",
          ref: elem => {
            // Add a left padding to the input because of the name label
            if (elem) // @ts-ignore
              elem.nextSibling.style.paddingLeft = `${elem.clientWidth + 10}px`;
          }
        }, {
          children: props.innerInputLabel
        })), (0, jsx_runtime_1.jsx)("input", {
          ref: input,
          className: "form-text__input",
          id: props.id,
          disabled: props.disabled,
          value: props.type === "number" && value ? shouldDivideNumberByThree ? Number(value).toLocaleString() : value : value,
          required: props.required,
          autoFocus: props.autoFocus,
          autoComplete: props.autoComplete || "",
          maxLength: props.maxLength,
          placeholder: props.placeholder,
          onChange: event => {
            let value = event.target.value;

            if (props.type === "number") {
              value = value.replace(/,/g, "");

              if (!!Number(value) || Number(value) === 0) {
                setValue(value);
              }
            } else {
              setValue(value);
            }
          },
          onBlur: event => {
            let value = event.target.value;
            setValue(value);
            if (props.onBlur) props.onBlur(value);
          },
          type: props.type === "password" ? "password" : "text"
        })]
      })), !props.placeholder && (0, jsx_runtime_1.jsx)("label", Object.assign({
        className: `form-text__label ${value ? "form-text__label--top" : ""}`,
        onClick: () => {
          var _a;

          (_a = input.current) === null || _a === void 0 ? void 0 : _a.focus();
        }
      }, {
        children: props.label
      }))]
    })), (0, jsx_runtime_1.jsxs)("div", Object.assign({
      className: "form-text__footer"
    }, {
      children: [props.error && !props.disabled && (0, jsx_runtime_1.jsxs)("span", Object.assign({
        className: "input-error"
      }, {
        children: [(0, jsx_runtime_1.jsx)("i", {
          className: "fa fa-exclamation-circle"
        }), props.error]
      })), props.maxLength && (0, jsx_runtime_1.jsx)("span", Object.assign({
        className: "form-text__length-display"
      }, {
        children: props.maxLength - ((value === null || value === void 0 ? void 0 : value.length) || 0)
      }))]
    }))]
  });
};

exports["default"] = Input;

/***/ }),

/***/ "../reusable/dist/forms/InputFile.js":
/*!*******************************************!*\
  !*** ../reusable/dist/forms/InputFile.js ***!
  \*******************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {



var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", ({
  value: true
}));

const jsx_runtime_1 = __webpack_require__(/*! react/jsx-runtime */ "../../node_modules/react/jsx-runtime.js");

const react_1 = __importDefault(__webpack_require__(/*! react */ "../../node_modules/react/index.js"));

const common_1 = __webpack_require__(/*! @pagser/common */ "../common/dist/index.js");

const InputFile = ({
  addClass,
  hide,
  label,
  id,
  size,
  type,
  minWidth,
  minHeight,
  onChange,
  onClick,
  onError
}) => {
  let className = "file__upload--label";
  if (addClass) className += ` ${addClass}`;
  if (hide) className += " display-none";
  return (0, jsx_runtime_1.jsxs)(react_1.default.Fragment, {
    children: [(0, jsx_runtime_1.jsxs)("label", Object.assign({
      htmlFor: id,
      className: className
    }, {
      children: [(0, jsx_runtime_1.jsx)("i", {
        className: "fa fa-cloud-upload",
        "aria-hidden": "true"
      }), " ", (0, jsx_runtime_1.jsx)("span", {
        children: label
      })]
    })), (0, jsx_runtime_1.jsx)("input", {
      id: id,
      onChange: e => {
        const inputEl = document.querySelector(`#${id}`);
        const inputFiles = inputEl.files;
        let inputFile;
        if (inputFiles) inputFile = inputFiles[0];
        const fileSize = inputFile === null || inputFile === void 0 ? void 0 : inputFile.size;
        const fileName = inputFile === null || inputFile === void 0 ? void 0 : inputFile.name;
        const fileType = inputFile === null || inputFile === void 0 ? void 0 : inputFile.type;

        if (!fileSize || !fileName || !fileType) {
          (0, common_1.alert)("Sorry, something unexpected happened. Please try again or contact our support.", "error");
          return;
        } // Always validate file size


        if (fileSize > size) return onError(`File size must be less than ${size / 1000000}MB.`); // Validate file type if 'type' property has been specified

        switch (type) {
          case "image":
            if (!minHeight || !minWidth) {
              throw new Error("Please specify minHeight and minWidth for the component with the type of 'image'.");
            } // Validate if the file is image


            if (fileType !== "image/jpg" && fileType !== "image/png" && fileType !== "image/jpeg") return onError("Only jpeg/jpg/png images are allowed."); // Validate if the image has the min width and height
            // @ts-ignore

            const imgUrl = URL.createObjectURL(e.target.files[0]);
            let image = new Image();

            image.onload = function () {
              if (this.height < minHeight || this.width < minWidth) {
                onError(`Please upload an image with the minimum dimensions of at least ${minWidth} * ${minHeight} pixels.`);
              } else {
                onChange(e, fileName, imgUrl);
              }
            };

            image.src = imgUrl;
            break;

          default:
            onChange(e, fileName);
        }
      },
      onClick: e => {
        // Reset the input file value before choosing a new file
        // @ts-ignore
        document.querySelector(`#${id}`).value = null;
        onClick(e);
      },
      type: "file",
      name: "file",
      placeholder: label
    })]
  });
};

exports["default"] = InputFile;

/***/ }),

/***/ "../reusable/dist/forms/Textarea.js":
/*!******************************************!*\
  !*** ../reusable/dist/forms/Textarea.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));

const jsx_runtime_1 = __webpack_require__(/*! react/jsx-runtime */ "../../node_modules/react/jsx-runtime.js");

const react_1 = __webpack_require__(/*! react */ "../../node_modules/react/index.js");

const Textarea = props => {
  var _a;

  const [value, setValue] = (0, react_1.useState)((_a = props.value) === null || _a === void 0 ? void 0 : _a.toString());
  const input = (0, react_1.useRef)(null);
  (0, react_1.useEffect)(() => {
    if (props.value) {
      setValue(props.value.toString());
    } else {
      setValue("");
    }
  }, [props.value]);
  (0, react_1.useEffect)(() => {
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
  return (0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, {
    children: [(0, jsx_runtime_1.jsxs)("div", Object.assign({
      className: className
    }, {
      children: [props.placeholder && (0, jsx_runtime_1.jsx)("label", Object.assign({
        className: "form__label",
        onClick: () => {
          var _a;

          (_a = input.current) === null || _a === void 0 ? void 0 : _a.focus();
        }
      }, {
        children: props.label
      })), (0, jsx_runtime_1.jsxs)("div", Object.assign({
        className: "form-text__input-container"
      }, {
        children: [props.help && (0, jsx_runtime_1.jsxs)("div", Object.assign({
          className: "tooltip tooltip-top a-19"
        }, {
          children: [(0, jsx_runtime_1.jsx)("a", Object.assign({
            href: "#",
            className: "tooltip__icon"
          }, {
            children: "?"
          })), (0, jsx_runtime_1.jsx)("div", Object.assign({
            className: "tooltip__text"
          }, {
            children: props.help
          }))]
        })), (0, jsx_runtime_1.jsx)("textarea", {
          rows: props.rows,
          ref: input,
          id: props.id,
          className: "form-text__input",
          placeholder: props.placeholder,
          maxLength: props.maxLength,
          value: value,
          required: props.required,
          onChange: event => {
            let value = event.target.value;
            setValue(value);
          },
          onBlur: event => {
            if (props.onBlur) {
              props.onBlur(event.target.value);
            }
          }
        })]
      })), !props.placeholder && (0, jsx_runtime_1.jsx)("label", Object.assign({
        className: `form-text__label ${value ? "form-text__label--top" : ""}`,
        onClick: () => {
          var _a;

          (_a = input.current) === null || _a === void 0 ? void 0 : _a.focus();
        }
      }, {
        children: props.label
      }))]
    })), (0, jsx_runtime_1.jsxs)("div", Object.assign({
      className: "form-text__footer"
    }, {
      children: [props.error && (0, jsx_runtime_1.jsxs)("span", Object.assign({
        className: "input-error"
      }, {
        children: [(0, jsx_runtime_1.jsx)("i", {
          className: "fa fa-exclamation-circle"
        }), props.error]
      })), props.maxLength && (0, jsx_runtime_1.jsx)("span", Object.assign({
        className: "form-text__length-display"
      }, {
        children: props.maxLength - ((value === null || value === void 0 ? void 0 : value.length) || 0)
      }))]
    }))]
  });
};

exports["default"] = Textarea;

/***/ }),

/***/ "../reusable/dist/index.js":
/*!*********************************!*\
  !*** ../reusable/dist/index.js ***!
  \*********************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {



var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.UploadPhoto = exports.UploadAttachFile = exports.AddToCollection = exports.Dropdown = exports.InputFile = exports.Textarea = exports.Button = exports.Input = exports.Modal = exports.ConfirmModal = exports.Alert = exports.Loading = void 0;

const Loading_1 = __importDefault(__webpack_require__(/*! ./Loading */ "../reusable/dist/Loading.js"));

exports.Loading = Loading_1.default;

const Alert_1 = __webpack_require__(/*! ./Alert */ "../reusable/dist/Alert.js");

Object.defineProperty(exports, "Alert", ({
  enumerable: true,
  get: function () {
    return Alert_1.Alert;
  }
}));

const Modal_1 = __importDefault(__webpack_require__(/*! ./modals/Modal */ "../reusable/dist/modals/Modal.js"));

exports.Modal = Modal_1.default;

const ConfirmModal_1 = __importDefault(__webpack_require__(/*! ./modals/ConfirmModal */ "../reusable/dist/modals/ConfirmModal.js"));

exports.ConfirmModal = ConfirmModal_1.default;

const Input_1 = __importDefault(__webpack_require__(/*! ./forms/Input */ "../reusable/dist/forms/Input.js"));

exports.Input = Input_1.default;

const Button_1 = __importDefault(__webpack_require__(/*! ./forms/Button */ "../reusable/dist/forms/Button.js"));

exports.Button = Button_1.default;

const Textarea_1 = __importDefault(__webpack_require__(/*! ./forms/Textarea */ "../reusable/dist/forms/Textarea.js"));

exports.Textarea = Textarea_1.default;

const InputFile_1 = __importDefault(__webpack_require__(/*! ./forms/InputFile */ "../reusable/dist/forms/InputFile.js"));

exports.InputFile = InputFile_1.default;

const Dropdown_1 = __importDefault(__webpack_require__(/*! ./forms/Dropdown */ "../reusable/dist/forms/Dropdown.js"));

exports.Dropdown = Dropdown_1.default;

const AddToCollection_1 = __importDefault(__webpack_require__(/*! ./modals/AddToCollection */ "../reusable/dist/modals/AddToCollection.js"));

exports.AddToCollection = AddToCollection_1.default;

const UploadAttachFile_1 = __importDefault(__webpack_require__(/*! ./modals/UploadAttachFile */ "../reusable/dist/modals/UploadAttachFile.js"));

exports.UploadAttachFile = UploadAttachFile_1.default;

const UploadPhoto_1 = __importDefault(__webpack_require__(/*! ./modals/UploadPhoto */ "../reusable/dist/modals/UploadPhoto.js"));

exports.UploadPhoto = UploadPhoto_1.default;

/***/ }),

/***/ "../reusable/dist/modals/AddToCollection.js":
/*!**************************************************!*\
  !*** ../reusable/dist/modals/AddToCollection.js ***!
  \**************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {



var __awaiter = this && this.__awaiter || function (thisArg, _arguments, P, generator) {
  function adopt(value) {
    return value instanceof P ? value : new P(function (resolve) {
      resolve(value);
    });
  }

  return new (P || (P = Promise))(function (resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }

    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e) {
        reject(e);
      }
    }

    function step(result) {
      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
    }

    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
};

var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", ({
  value: true
}));

const jsx_runtime_1 = __webpack_require__(/*! react/jsx-runtime */ "../../node_modules/react/jsx-runtime.js");

const react_1 = __webpack_require__(/*! react */ "../../node_modules/react/index.js");

const common_1 = __webpack_require__(/*! @pagser/common */ "../common/dist/index.js");

const Modal_1 = __importDefault(__webpack_require__(/*! ./Modal */ "../reusable/dist/modals/Modal.js"));

const Loading_1 = __importDefault(__webpack_require__(/*! ../Loading */ "../reusable/dist/Loading.js"));

const Input_1 = __importDefault(__webpack_require__(/*! ../forms/Input */ "../reusable/dist/forms/Input.js"));

const Button_1 = __importDefault(__webpack_require__(/*! ../forms/Button */ "../reusable/dist/forms/Button.js"));

const CollectionModal = props => {
  const [name, setName] = (0, react_1.useState)("");
  const [status, setStatus] = (0, react_1.useState)("normal"); // We'll show different elements depending on the value

  const [collections, setCollections] = (0, react_1.useState)([]); // Check to see if the modal is opened or not, if so fetch the collections

  (0, react_1.useEffect)(() => {
    if (props.open) {
      fetchCollections();
    }
  }, [props.open]); // Fetch all the collections user has created

  const fetchCollections = () => __awaiter(void 0, void 0, void 0, function* () {
    setStatus("loading");
    const response = yield common_1.request.get(`/collections/created/${props.pageId}`, {
      auth: true
    });
    setStatus("normal");
    setCollections(response.collections);
  }); // Send a request to user to create a new collection


  const createCollection = () => __awaiter(void 0, void 0, void 0, function* () {
    setStatus("loading");
    const response = yield common_1.request.post(`/collection`, {
      name
    }, {
      auth: true
    }); // Add the page in the newly created collection

    togglePageInCL(response.collection._id);
  }); // Send the request to server to either remove the page from selected collection
  // or add it to that collection


  const togglePageInCL = clId => __awaiter(void 0, void 0, void 0, function* () {
    setStatus("loading");
    const response = yield common_1.request.post(`/collection/add-remove/${clId}/${props.pageId}`, null, {
      auth: true
    }); // Show a right message to user based on server response

    if (response.selected) (0, common_1.alert)(`Page successfully added to ${response.clName} collection.`, "success");else (0, common_1.alert)(`Page successfully removed from ${response.clName} collection.`, "success"); // Fetch collections again

    fetchCollections();
  });

  return (0, jsx_runtime_1.jsxs)(Modal_1.default, Object.assign({
    header: "Page in Collections:",
    type: "small",
    open: props.open,
    onClose: () => {
      props.onClose();
      setName("");
      setStatus("normal");
      setCollections([]);
    }
  }, {
    children: [!collections || status === "loading" && (0, jsx_runtime_1.jsx)("div", Object.assign({
      className: "center-content margin-top-5px"
    }, {
      children: (0, jsx_runtime_1.jsx)(Loading_1.default, {})
    })), collections && status === "normal" && (0, jsx_runtime_1.jsx)("div", Object.assign({
      className: "margin-bottom-08"
    }, {
      children: (0, jsx_runtime_1.jsxs)(Button_1.default, Object.assign({
        color: "blue",
        outlined: true,
        block: true,
        onClick: () => {
          setStatus("creating");
        },
        type: "button"
      }, {
        children: ["Create a new collection", (0, jsx_runtime_1.jsx)("i", {
          className: "fa fa-plus-circle button__icon-right",
          "aria-hidden": "true"
        })]
      }))
    })), status === "creating" && (0, jsx_runtime_1.jsx)("div", Object.assign({
      className: "right-content"
    }, {
      children: (0, jsx_runtime_1.jsxs)("form", Object.assign({
        onSubmit: e => {
          e.preventDefault();
          createCollection();
        }
      }, {
        children: [(0, jsx_runtime_1.jsx)("div", Object.assign({
          className: "margin-bottom-1"
        }, {
          children: (0, jsx_runtime_1.jsx)(Input_1.default, {
            type: "text",
            lined: true,
            autoComplete: "off",
            autoFocus: true,
            placeholder: "Collection name",
            required: true,
            value: name,
            onChange: value => setName(value)
          })
        })), (0, jsx_runtime_1.jsxs)("div", Object.assign({
          className: "a-19"
        }, {
          children: [(0, jsx_runtime_1.jsx)(Button_1.default, Object.assign({
            color: "default",
            size: "small",
            onClick: () => {
              setName("");
              setStatus("normal");
            },
            type: "button"
          }, {
            children: "Cancel"
          })), (0, jsx_runtime_1.jsx)(Button_1.default, Object.assign({
            color: "blue",
            outlined: true,
            size: "small",
            type: "submit"
          }, {
            children: "Create and add"
          }))]
        }))]
      }))
    })), collections && status === "normal" && collections.map(cl => {
      return (0, jsx_runtime_1.jsxs)("a", Object.assign({
        href: "javascript:void(0)",
        className: `selectable-item ${cl.selected ? "selectable-item--selected" : ""}`,
        onClick: () => togglePageInCL(cl.id)
      }, {
        children: [cl.name, " ", (0, jsx_runtime_1.jsx)("span", {})]
      }), cl.id);
    }), !collections.length && status === "normal" && (0, jsx_runtime_1.jsxs)("div", Object.assign({
      className: "u-text-center margin-top-1-5"
    }, {
      children: [(0, jsx_runtime_1.jsx)("em", {
        children: "Currently you don't have any collections."
      }), (0, jsx_runtime_1.jsx)("em", {
        children: "Create one by clicking on the button above."
      })]
    }))]
  }));
};

exports["default"] = CollectionModal;

/***/ }),

/***/ "../reusable/dist/modals/ConfirmModal.js":
/*!***********************************************!*\
  !*** ../reusable/dist/modals/ConfirmModal.js ***!
  \***********************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {



var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", ({
  value: true
}));

const jsx_runtime_1 = __webpack_require__(/*! react/jsx-runtime */ "../../node_modules/react/jsx-runtime.js");

const Button_1 = __importDefault(__webpack_require__(/*! ../forms/Button */ "../reusable/dist/forms/Button.js"));

const ConfirmModal = ({
  header,
  message,
  open,
  onCancel,
  onConfirm,
  btnName,
  children
}) => {
  const className = open ? "mdl mdl-conf" : "mdl mdl-conf display-none";
  return (0, jsx_runtime_1.jsx)("div", Object.assign({
    className: className
  }, {
    children: (0, jsx_runtime_1.jsxs)("div", Object.assign({
      className: "mdl__content"
    }, {
      children: [(0, jsx_runtime_1.jsxs)("div", Object.assign({
        className: "mdl__header"
      }, {
        children: [(0, jsx_runtime_1.jsx)("span", Object.assign({
          className: "mdl__close",
          onClick: onCancel
        }, {
          children: "\u00D7"
        })), (0, jsx_runtime_1.jsx)("h3", Object.assign({
          className: "heading-tertiary"
        }, {
          children: header
        }))]
      })), (0, jsx_runtime_1.jsxs)("div", Object.assign({
        className: "mdl__body"
      }, {
        children: [message || children, (0, jsx_runtime_1.jsx)("form", Object.assign({
          onSubmit: e => {
            e.preventDefault();
            onConfirm();
          }
        }, {
          children: (0, jsx_runtime_1.jsx)("div", Object.assign({
            className: "u-flex-text-right"
          }, {
            children: (0, jsx_runtime_1.jsx)(Button_1.default, Object.assign({
              type: "submit",
              color: "red",
              rounded: true
            }, {
              children: btnName ? btnName : "Remove"
            }))
          }))
        }))]
      }))]
    }))
  }));
};

exports["default"] = ConfirmModal;

/***/ }),

/***/ "../reusable/dist/modals/Modal.js":
/*!****************************************!*\
  !*** ../reusable/dist/modals/Modal.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));

const jsx_runtime_1 = __webpack_require__(/*! react/jsx-runtime */ "../../node_modules/react/jsx-runtime.js");

const react_dom_1 = __webpack_require__(/*! react-dom */ "../../node_modules/react-dom/index.js");

const Modal = ({
  children,
  header,
  open,
  type,
  onClose
}) => {
  let className = open ? "mdl" : "mdl display-none";
  if (type === "small") className += " mdl-sm";
  return (0, react_dom_1.createPortal)((0, jsx_runtime_1.jsx)("div", Object.assign({
    className: className
  }, {
    children: (0, jsx_runtime_1.jsxs)("div", Object.assign({
      className: "mdl__content"
    }, {
      children: [(0, jsx_runtime_1.jsxs)("div", Object.assign({
        className: "mdl__header"
      }, {
        children: [(0, jsx_runtime_1.jsx)("span", Object.assign({
          className: "mdl__close",
          onClick: onClose
        }, {
          children: "\u00D7"
        })), (0, jsx_runtime_1.jsx)("h3", Object.assign({
          className: "heading-tertiary"
        }, {
          children: header
        }))]
      })), (0, jsx_runtime_1.jsx)("div", Object.assign({
        className: "mdl__body"
      }, {
        children: children
      }))]
    }))
  })), document.querySelector("#modal-root"));
};

exports["default"] = Modal;

/***/ }),

/***/ "../reusable/dist/modals/UploadAttachFile.js":
/*!***************************************************!*\
  !*** ../reusable/dist/modals/UploadAttachFile.js ***!
  \***************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {



var __awaiter = this && this.__awaiter || function (thisArg, _arguments, P, generator) {
  function adopt(value) {
    return value instanceof P ? value : new P(function (resolve) {
      resolve(value);
    });
  }

  return new (P || (P = Promise))(function (resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }

    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e) {
        reject(e);
      }
    }

    function step(result) {
      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
    }

    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
};

var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", ({
  value: true
}));

const jsx_runtime_1 = __webpack_require__(/*! react/jsx-runtime */ "../../node_modules/react/jsx-runtime.js");

const react_1 = __webpack_require__(/*! react */ "../../node_modules/react/index.js");

const common_1 = __webpack_require__(/*! @pagser/common */ "../common/dist/index.js");

const Modal_1 = __importDefault(__webpack_require__(/*! ./Modal */ "../reusable/dist/modals/Modal.js"));

const Loading_1 = __importDefault(__webpack_require__(/*! ../Loading */ "../reusable/dist/Loading.js"));

const InputFile_1 = __importDefault(__webpack_require__(/*! ../forms/InputFile */ "../reusable/dist/forms/InputFile.js"));

const Button_1 = __importDefault(__webpack_require__(/*! ../forms/Button */ "../reusable/dist/forms/Button.js"));

const UploadPhoto = props => {
  const [status, setStatus] = (0, react_1.useState)("clean");
  const [error, setError] = (0, react_1.useState)("");
  const [inputLabelName, setInputLabelName] = (0, react_1.useState)("Upload a File"); // When user selects a file

  const onFileInputChange = (e, fileName) => {
    setStatus("onFile");
    setError("");
    setInputLabelName(fileName);
  }; // When user clicks on upload button


  const onUploadClick = () => __awaiter(void 0, void 0, void 0, function* () {
    setStatus("loading"); // Prepare the form data to be sent to server

    let formData = new FormData(); // @ts-ignore

    const file = document.querySelector("#file-input").files[0];
    formData.append("file", file);

    try {
      yield common_1.request.post(props.url, formData, {
        auth: true,
        contentType: "multipart/form-data"
      });
      props.onClose(); // Call the success function so that the parent component will get notified

      props.success();
      reset();
    } catch (e) {
      let msg = "There was an error with uploading your photo.";
      if (e.message) msg = e.message;
      (0, common_1.alert)(msg, "error");
      reset();
      props.onClose();
    }
  }); // Reset the photo choosing


  const reset = () => {
    setStatus("clean");
    setInputLabelName("Upload a File");
  };

  return (0, jsx_runtime_1.jsxs)(Modal_1.default, Object.assign({
    header: props.header,
    open: props.open,
    onClose: () => {
      props.onClose();
      setError("");
    }
  }, {
    children: [(0, jsx_runtime_1.jsx)("p", Object.assign({
      className: ""
    }, {
      children: props.text
    })), (0, jsx_runtime_1.jsx)("p", Object.assign({
      className: "image__upload--error"
    }, {
      children: error
    })), (0, jsx_runtime_1.jsx)(InputFile_1.default, {
      addClass: status === "clean" ? "margin-bottom-2" : "margin-bottom-0",
      label: inputLabelName,
      id: "file-input",
      size: props.size,
      onChange: onFileInputChange,
      onClick: e => {
        setError("");
      },
      onError: error => {
        setError(error);
        setInputLabelName("Upload a File");
        reset();
      }
    }), (0, jsx_runtime_1.jsxs)("div", Object.assign({
      className: `image__upload--options ${status === "onFile" ? "" : "display-none"}`
    }, {
      children: [(0, jsx_runtime_1.jsx)(Button_1.default, Object.assign({
        color: "blue",
        rounded: true,
        outlined: true,
        onClick: () => {
          reset();
          props.onClose();
        }
      }, {
        children: "Cancel"
      })), (0, jsx_runtime_1.jsx)(Button_1.default, Object.assign({
        color: "blue",
        rounded: true,
        onClick: () => {
          onUploadClick();
        }
      }, {
        children: "Upload"
      }))]
    })), status === "loading" && (0, jsx_runtime_1.jsx)("div", Object.assign({
      className: "image__upload--loading margin-top-1"
    }, {
      children: (0, jsx_runtime_1.jsx)("div", Object.assign({
        className: "center-content"
      }, {
        children: (0, jsx_runtime_1.jsx)(Loading_1.default, {})
      }))
    }))]
  }));
};

exports["default"] = UploadPhoto;

/***/ }),

/***/ "../reusable/dist/modals/UploadPhoto.js":
/*!**********************************************!*\
  !*** ../reusable/dist/modals/UploadPhoto.js ***!
  \**********************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {



var __awaiter = this && this.__awaiter || function (thisArg, _arguments, P, generator) {
  function adopt(value) {
    return value instanceof P ? value : new P(function (resolve) {
      resolve(value);
    });
  }

  return new (P || (P = Promise))(function (resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }

    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e) {
        reject(e);
      }
    }

    function step(result) {
      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
    }

    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
};

var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", ({
  value: true
}));

const jsx_runtime_1 = __webpack_require__(/*! react/jsx-runtime */ "../../node_modules/react/jsx-runtime.js");

const react_1 = __webpack_require__(/*! react */ "../../node_modules/react/index.js");

const common_1 = __webpack_require__(/*! @pagser/common */ "../common/dist/index.js");

const Modal_1 = __importDefault(__webpack_require__(/*! ./Modal */ "../reusable/dist/modals/Modal.js"));

const Loading_1 = __importDefault(__webpack_require__(/*! ../Loading */ "../reusable/dist/Loading.js"));

const InputFile_1 = __importDefault(__webpack_require__(/*! ../forms/InputFile */ "../reusable/dist/forms/InputFile.js"));

const Button_1 = __importDefault(__webpack_require__(/*! ../forms/Button */ "../reusable/dist/forms/Button.js"));

const UploadPhoto = props => {
  const [status, setStatus] = (0, react_1.useState)("clean");
  const [error, setError] = (0, react_1.useState)("");
  const [cropData, setCropData] = (0, react_1.useState)({
    x: 0,
    y: 0,
    width: 0,
    height: 0
  });
  (0, react_1.useEffect)(() => {
    // Load Crooper javascript file
    const script = document.createElement("script");
    script.setAttribute("src", "/cropper.min.js");
    document.head.appendChild(script); // Load Crooper css file

    const stylesheet = document.createElement("link");
    stylesheet.href = "/cropper.min.css";
    stylesheet.type = "text/css";
    stylesheet.rel = "stylesheet";
    document.head.appendChild(stylesheet);
  }, []); // When user selects a photo

  const onFileInputChange = (e, fileName, imgUrl) => {
    setError("");
    setStatus("cropping");
    document.querySelector("#img-preview").src = imgUrl || "";
    crop(props.aspectRatio, props.minWidth, props.minHeight);
  }; // When user clicks on upload button


  const onUploadClick = () => __awaiter(void 0, void 0, void 0, function* () {
    setStatus("loading"); // Prepare the form data to be sent to server

    let formData = new FormData(); // @ts-ignore

    formData.append("img", document.querySelector("#image-input").files[0]);
    formData.set("cropData", `{ "x": "${cropData.x}", "y": "${cropData.y}", "width": "${cropData.width}", "height": "${cropData.height}" }`);

    try {
      const response = yield common_1.request.put(props.url, formData, {
        auth: true,
        contentType: "multipart/form-data"
      }); // @ts-ignore

      document.querySelector("#reset-btn").click();
      props.onClose(); // Call the success function so that the parent component will get notified

      props.success(response.image);
      (0, common_1.alert)("Photo was uploaded successfully.", "success");
      setStatus("clean");
    } catch (e) {
      // @ts-ignore
      document.querySelector("#reset-btn").click();
      setStatus("clean");
      (0, common_1.alert)("There was an error with uploading your photo.", "error");
      props.onClose();
    }
  }); // Reset the photo choosing


  const reset = () => {
    setStatus("clean"); // @ts-ignore

    document.querySelector("#img-preview").src = "";
  }; // Start the cropper on the image preview


  const crop = (aspect, minW, minH) => {
    const image = document.getElementById("img-preview"); // @ts-ignore

    const cropper = new Cropper(image, {
      aspectRatio: aspect,
      viewMode: 3,
      background: false,
      modal: false,
      zoomable: false,
      minCropBoxWidth: minW,
      minCropBoxHeight: minH,
      cropend: () => {
        setCropData({
          x: cropper.getData().x,
          y: cropper.getData().y,
          width: cropper.getData().width,
          height: cropper.getData().height
        });
      },
      ready: function () {
        const self = this; // @ts-ignore

        document.querySelector("#reset-btn").addEventListener("click", function () {
          if (self.cropper) {
            self.cropper.destroy();
          }
        });
        setCropData({
          x: cropper.getData().x,
          y: cropper.getData().y,
          width: cropper.getData().width,
          height: cropper.getData().height
        });
      }
    });
  };

  return (0, jsx_runtime_1.jsxs)(Modal_1.default, Object.assign({
    header: props.header,
    open: props.open,
    onClose: () => {
      props.onClose();
      setError("");
    }
  }, {
    children: [(0, jsx_runtime_1.jsx)("p", Object.assign({
      className: "image__upload--text"
    }, {
      children: props.text
    })), (0, jsx_runtime_1.jsx)("p", Object.assign({
      className: "image__upload--error"
    }, {
      children: error
    })), (0, jsx_runtime_1.jsx)("em", Object.assign({
      className: `image__upload--crop-msg ${props.cropMsg && status === "cropping" ? "" : "display-none"}`
    }, {
      children: props.cropMsg
    })), (0, jsx_runtime_1.jsx)(InputFile_1.default, {
      addClass: "margin-bottom-2",
      hide: status !== "clean",
      label: props.inputLabelName,
      id: "image-input",
      size: props.size,
      type: "image",
      minWidth: props.minWidth,
      minHeight: props.minHeight,
      onChange: onFileInputChange,
      onClick: e => {},
      onError: error => {
        setError(error);
        reset();
      }
    }), (0, jsx_runtime_1.jsx)("div", {
      children: (0, jsx_runtime_1.jsx)("img", {
        id: "img-preview"
      })
    }), (0, jsx_runtime_1.jsxs)("div", Object.assign({
      className: `image__upload--options margin-top-2 ${status === "cropping" ? "" : "display-none"}`
    }, {
      children: [(0, jsx_runtime_1.jsx)(Button_1.default, Object.assign({
        id: "reset-btn",
        rounded: true,
        color: "blue",
        outlined: true,
        onClick: () => {
          reset();
        }
      }, {
        children: "Choose another photo"
      })), (0, jsx_runtime_1.jsx)(Button_1.default, Object.assign({
        color: "blue",
        rounded: true,
        onClick: () => {
          onUploadClick();
        }
      }, {
        children: "Upload"
      }))]
    })), status === "loading" && (0, jsx_runtime_1.jsx)("div", Object.assign({
      className: "image__upload--loading margin-top-2"
    }, {
      children: (0, jsx_runtime_1.jsx)("div", Object.assign({
        className: "center-content"
      }, {
        children: (0, jsx_runtime_1.jsx)(Loading_1.default, {})
      }))
    }))]
  }));
};

exports["default"] = UploadPhoto;

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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cnQuanMiLCJ3ZWJwYWNrOi8vQHBhZ3Nlci93ZWIvLi4vcmV1c2FibGUvZGlzdC9JbmxpbmVMb2FkaW5nLmpzIiwid2VicGFjazovL0BwYWdzZXIvd2ViLy4uL3JldXNhYmxlL2Rpc3QvTG9hZGluZy5qcyIsIndlYnBhY2s6Ly9AcGFnc2VyL3dlYi8uLi9yZXVzYWJsZS9kaXN0L2Zvcm1zL0J1dHRvbi5qcyIsIndlYnBhY2s6Ly9AcGFnc2VyL3dlYi8uLi9yZXVzYWJsZS9kaXN0L2Zvcm1zL0Ryb3Bkb3duLmpzIiwid2VicGFjazovL0BwYWdzZXIvd2ViLy4uL3JldXNhYmxlL2Rpc3QvZm9ybXMvSW5wdXQuanMiLCJ3ZWJwYWNrOi8vQHBhZ3Nlci93ZWIvLi4vcmV1c2FibGUvZGlzdC9mb3Jtcy9JbnB1dEZpbGUuanMiLCJ3ZWJwYWNrOi8vQHBhZ3Nlci93ZWIvLi4vcmV1c2FibGUvZGlzdC9mb3Jtcy9UZXh0YXJlYS5qcyIsIndlYnBhY2s6Ly9AcGFnc2VyL3dlYi8uLi9yZXVzYWJsZS9kaXN0L2luZGV4LmpzIiwid2VicGFjazovL0BwYWdzZXIvd2ViLy4uL3JldXNhYmxlL2Rpc3QvbW9kYWxzL0FkZFRvQ29sbGVjdGlvbi5qcyIsIndlYnBhY2s6Ly9AcGFnc2VyL3dlYi8uLi9yZXVzYWJsZS9kaXN0L21vZGFscy9Db25maXJtTW9kYWwuanMiLCJ3ZWJwYWNrOi8vQHBhZ3Nlci93ZWIvLi4vcmV1c2FibGUvZGlzdC9tb2RhbHMvTW9kYWwuanMiLCJ3ZWJwYWNrOi8vQHBhZ3Nlci93ZWIvLi4vcmV1c2FibGUvZGlzdC9tb2RhbHMvVXBsb2FkQXR0YWNoRmlsZS5qcyIsIndlYnBhY2s6Ly9AcGFnc2VyL3dlYi8uLi9yZXVzYWJsZS9kaXN0L21vZGFscy9VcGxvYWRQaG90by5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuQWxlcnQgPSB2b2lkIDA7XG5jb25zdCBqc3hfcnVudGltZV8xID0gcmVxdWlyZShcInJlYWN0L2pzeC1ydW50aW1lXCIpO1xuY29uc3QgQWxlcnQgPSAocHJvcHMpID0+IHtcbiAgICBsZXQgY2xhc3NOYW1lID0gXCJkaXNwbGF5LW5vbmVcIjtcbiAgICBpZiAocHJvcHMubWVzc2FnZSkge1xuICAgICAgICBpZiAocHJvcHMudHlwZSA9PT0gXCJzdWNjZXNzXCIpIHtcbiAgICAgICAgICAgIGNsYXNzTmFtZSA9IFwiYWxlcnQgYWxlcnQtLXN1Y2Nlc3NcIjtcbiAgICAgICAgfVxuICAgICAgICBpZiAocHJvcHMudHlwZSA9PT0gXCJlcnJvclwiKSB7XG4gICAgICAgICAgICBjbGFzc05hbWUgPSBcImFsZXJ0IGFsZXJ0LS1lcnJvclwiO1xuICAgICAgICB9XG4gICAgICAgIGlmIChwcm9wcy50eXBlID09PSBcIm5vcm1hbGxcIikge1xuICAgICAgICAgICAgY2xhc3NOYW1lID0gXCJhbGVydCBhbGVydC0tbm9ybWFsbFwiO1xuICAgICAgICB9XG4gICAgICAgIGlmIChwcm9wcy5hZGRpdGlvbmFsQ2xhc3Nlcykge1xuICAgICAgICAgICAgY2xhc3NOYW1lICs9IGAgJHtwcm9wcy5hZGRpdGlvbmFsQ2xhc3Nlc31gO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiAoKDAsIGpzeF9ydW50aW1lXzEuanN4cykoXCJkaXZcIiwgT2JqZWN0LmFzc2lnbih7IGNsYXNzTmFtZTogY2xhc3NOYW1lIH0sIHsgY2hpbGRyZW46IFsoMCwganN4X3J1bnRpbWVfMS5qc3gpKFwic3BhblwiLCB7IGNoaWxkcmVuOiBwcm9wcy5tZXNzYWdlIH0pLCAoMCwganN4X3J1bnRpbWVfMS5qc3gpKFwiYnV0dG9uXCIsIE9iamVjdC5hc3NpZ24oeyBvbkNsaWNrOiBwcm9wcy5vbkNsb3NlLCB0eXBlOiBcImJ1dHRvblwiLCBjbGFzc05hbWU6IFwiYWxlcnRfX2Rpc21pc3NcIiB9LCB7IGNoaWxkcmVuOiAoMCwganN4X3J1bnRpbWVfMS5qc3gpKFwiaVwiLCB7IGNsYXNzTmFtZTogXCJmYSBmYS1yZW1vdmVcIiB9KSB9KSldIH0pKSk7XG59O1xuZXhwb3J0cy5BbGVydCA9IEFsZXJ0O1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5jb25zdCBqc3hfcnVudGltZV8xID0gcmVxdWlyZShcInJlYWN0L2pzeC1ydW50aW1lXCIpO1xuY29uc3QgSW5saW5lTG9hZGluZyA9IChwcm9wcykgPT4ge1xuICAgIGxldCBjbGFzc05hbWUgPSBcImxkcy1lbGxpcHNpcyBcIjtcbiAgICBpZiAocHJvcHMuY2xhc3NOYW1lKVxuICAgICAgICBjbGFzc05hbWUgKz0gcHJvcHMuY2xhc3NOYW1lO1xuICAgIGNvbnN0IGVsID0gKCgwLCBqc3hfcnVudGltZV8xLmpzeHMpKFwiZGl2XCIsIE9iamVjdC5hc3NpZ24oeyBjbGFzc05hbWU6IGNsYXNzTmFtZSB9LCB7IGNoaWxkcmVuOiBbKDAsIGpzeF9ydW50aW1lXzEuanN4KShcImRpdlwiLCB7IGNsYXNzTmFtZTogYGxkcy1lbGxpcHNpcy0tJHtwcm9wcy5jb2xvcn1gIH0pLCAoMCwganN4X3J1bnRpbWVfMS5qc3gpKFwiZGl2XCIsIHsgY2xhc3NOYW1lOiBgbGRzLWVsbGlwc2lzLS0ke3Byb3BzLmNvbG9yfWAgfSksICgwLCBqc3hfcnVudGltZV8xLmpzeCkoXCJkaXZcIiwgeyBjbGFzc05hbWU6IGBsZHMtZWxsaXBzaXMtLSR7cHJvcHMuY29sb3J9YCB9KSwgKDAsIGpzeF9ydW50aW1lXzEuanN4KShcImRpdlwiLCB7IGNsYXNzTmFtZTogYGxkcy1lbGxpcHNpcy0tJHtwcm9wcy5jb2xvcn1gIH0pXSB9KSkpO1xuICAgIGlmIChwcm9wcy5jZW50ZXIpIHtcbiAgICAgICAgcmV0dXJuICgwLCBqc3hfcnVudGltZV8xLmpzeCkoXCJkaXZcIiwgT2JqZWN0LmFzc2lnbih7IGNsYXNzTmFtZTogXCJ1LXRleHQtY2VudGVyXCIgfSwgeyBjaGlsZHJlbjogZWwgfSkpO1xuICAgIH1cbiAgICBlbHNlXG4gICAgICAgIHJldHVybiBlbDtcbn07XG5leHBvcnRzLmRlZmF1bHQgPSBJbmxpbmVMb2FkaW5nO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5jb25zdCBqc3hfcnVudGltZV8xID0gcmVxdWlyZShcInJlYWN0L2pzeC1ydW50aW1lXCIpO1xuY29uc3QgTG9hZGluZyA9ICh7IGNsYXNzTmFtZSB9KSA9PiB7XG4gICAgcmV0dXJuICgoMCwganN4X3J1bnRpbWVfMS5qc3gpKFwiZGl2XCIsIE9iamVjdC5hc3NpZ24oeyBjbGFzc05hbWU6IGBsZHMtY3NzIG5nLXNjb3BlICR7Y2xhc3NOYW1lfWAgfSwgeyBjaGlsZHJlbjogKDAsIGpzeF9ydW50aW1lXzEuanN4cykoXCJkaXZcIiwgT2JqZWN0LmFzc2lnbih7IGNsYXNzTmFtZTogXCJsZHMtc3Bpbm5lclwiIH0sIHsgY2hpbGRyZW46IFsoMCwganN4X3J1bnRpbWVfMS5qc3gpKFwiZGl2XCIsIHt9KSwgKDAsIGpzeF9ydW50aW1lXzEuanN4KShcImRpdlwiLCB7fSksICgwLCBqc3hfcnVudGltZV8xLmpzeCkoXCJkaXZcIiwge30pLCAoMCwganN4X3J1bnRpbWVfMS5qc3gpKFwiZGl2XCIsIHt9KSwgKDAsIGpzeF9ydW50aW1lXzEuanN4KShcImRpdlwiLCB7fSksICgwLCBqc3hfcnVudGltZV8xLmpzeCkoXCJkaXZcIiwge30pLCAoMCwganN4X3J1bnRpbWVfMS5qc3gpKFwiZGl2XCIsIHt9KSwgKDAsIGpzeF9ydW50aW1lXzEuanN4KShcImRpdlwiLCB7fSksICgwLCBqc3hfcnVudGltZV8xLmpzeCkoXCJkaXZcIiwge30pLCAoMCwganN4X3J1bnRpbWVfMS5qc3gpKFwiZGl2XCIsIHt9KSwgKDAsIGpzeF9ydW50aW1lXzEuanN4KShcImRpdlwiLCB7fSksICgwLCBqc3hfcnVudGltZV8xLmpzeCkoXCJkaXZcIiwge30pXSB9KSkgfSkpKTtcbn07XG5leHBvcnRzLmRlZmF1bHQgPSBMb2FkaW5nO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG52YXIgX19pbXBvcnREZWZhdWx0ID0gKHRoaXMgJiYgdGhpcy5fX2ltcG9ydERlZmF1bHQpIHx8IGZ1bmN0aW9uIChtb2QpIHtcbiAgICByZXR1cm4gKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgPyBtb2QgOiB7IFwiZGVmYXVsdFwiOiBtb2QgfTtcbn07XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5jb25zdCBqc3hfcnVudGltZV8xID0gcmVxdWlyZShcInJlYWN0L2pzeC1ydW50aW1lXCIpO1xuY29uc3QgSW5saW5lTG9hZGluZ18xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCIuLi9JbmxpbmVMb2FkaW5nXCIpKTtcbmNvbnN0IEJ1dHRvbiA9IChwcm9wcykgPT4ge1xuICAgIGxldCBjbGFzc05hbWUgPSBcImJ1dHRvblwiO1xuICAgIHN3aXRjaCAocHJvcHMuc2l6ZSkge1xuICAgICAgICBjYXNlIFwiYmlnXCI6XG4gICAgICAgICAgICBjbGFzc05hbWUgKz0gXCIgYnV0dG9uLWJpZ1wiO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgXCJzbWFsbFwiOlxuICAgICAgICAgICAgY2xhc3NOYW1lICs9IFwiIGJ1dHRvbi1zbWFsbFwiO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgXCJleHRyYVNtYWxsXCI6XG4gICAgICAgICAgICBjbGFzc05hbWUgKz0gXCIgYnV0dG9uLWV4dHJhLXNtYWxsXCI7XG4gICAgICAgICAgICBicmVhaztcbiAgICB9XG4gICAgc3dpdGNoIChwcm9wcy5jb2xvcikge1xuICAgICAgICBjYXNlIFwiZGVmYXVsdFwiOlxuICAgICAgICAgICAgaWYgKHByb3BzLm91dGxpbmVkKSB7XG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lICs9IFwiIGJ1dHRvbi1kZWZhdWx0LW91dGxpbmVkXCI7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBjbGFzc05hbWUgKz0gXCIgYnV0dG9uLWRlZmF1bHRcIjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIFwiYmx1ZVwiOlxuICAgICAgICAgICAgaWYgKHByb3BzLm91dGxpbmVkKSB7XG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lICs9IFwiIGJ1dHRvbi1ibHVlLW91dGxpbmVkXCI7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBjbGFzc05hbWUgKz0gXCIgYnV0dG9uLWJsdWVcIjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIFwicmVkXCI6XG4gICAgICAgICAgICBpZiAocHJvcHMub3V0bGluZWQpIHtcbiAgICAgICAgICAgICAgICBjbGFzc05hbWUgKz0gXCIgYnV0dG9uLXJlZC1vdXRsaW5lZFwiO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lICs9IFwiIGJ1dHRvbi1yZWRcIjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIFwiZ3JlZW5cIjpcbiAgICAgICAgICAgIGlmIChwcm9wcy5vdXRsaW5lZCkge1xuICAgICAgICAgICAgICAgIGNsYXNzTmFtZSArPSBcIiBidXR0b24tZ3JlZW4tb3V0bGluZWRcIjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIGNsYXNzTmFtZSArPSBcIiBidXR0b24tZ3JlZW5cIjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIFwiZ3JheVwiOlxuICAgICAgICAgICAgaWYgKHByb3BzLm91dGxpbmVkKSB7XG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lICs9IFwiIGJ1dHRvbi1ncmF5LW91dGxpbmVkXCI7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBjbGFzc05hbWUgKz0gXCIgYnV0dG9uLWdyYXlcIjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgaWYgKHByb3BzLm91dGxpbmVkKSB7XG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lICs9IFwiIGJ1dHRvbi1kZWZhdWx0LW91dGxpbmVkXCI7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBjbGFzc05hbWUgKz0gXCIgYnV0dG9uLWRlZmF1bHRcIjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGJyZWFrO1xuICAgIH1cbiAgICBpZiAocHJvcHMucm91bmRlZCkge1xuICAgICAgICBjbGFzc05hbWUgKz0gXCIgYnV0dG9uLXJvdW5kZWRcIjtcbiAgICB9XG4gICAgaWYgKHByb3BzLmJsb2NrKSB7XG4gICAgICAgIGNsYXNzTmFtZSArPSBcIiBidXR0b24tYmxvY2tcIjtcbiAgICB9XG4gICAgY2xhc3NOYW1lICs9IFwiIFwiICsgcHJvcHMuY2xhc3NOYW1lO1xuICAgIGxldCBsb2FkaW5nQ29sb3I7XG4gICAgaWYgKHByb3BzLmNvbG9yID09PSBcImJsdWVcIilcbiAgICAgICAgbG9hZGluZ0NvbG9yID0gXCJibHVlXCI7XG4gICAgaWYgKCFwcm9wcy5vdXRsaW5lZClcbiAgICAgICAgbG9hZGluZ0NvbG9yID0gXCJsaWdodFwiO1xuICAgIHJldHVybiAoKDAsIGpzeF9ydW50aW1lXzEuanN4cykoXCJidXR0b25cIiwgT2JqZWN0LmFzc2lnbih7IGlkOiBwcm9wcy5pZCwgc3R5bGU6IHByb3BzLnN0eWxlLCBvbkNsaWNrOiBwcm9wcy5vbkNsaWNrLCBjbGFzc05hbWU6IGNsYXNzTmFtZSwgdHlwZTogcHJvcHMudHlwZSA/IHByb3BzLnR5cGUgOiBcImJ1dHRvblwiLCBkaXNhYmxlZDogcHJvcHMubG9hZGluZyA/IHRydWUgOiBwcm9wcy5kaXNhYmxlZCB9LCB7IGNoaWxkcmVuOiBbcHJvcHMuY2hpbGRyZW4sIHByb3BzLmxvYWRpbmcgJiYgKCgwLCBqc3hfcnVudGltZV8xLmpzeCkoSW5saW5lTG9hZGluZ18xLmRlZmF1bHQsIHsgY2xhc3NOYW1lOiBcInUtbWFyZ2luLWxlZnQtMDNcIiwgY29sb3I6IGxvYWRpbmdDb2xvciB9KSldIH0pKSk7XG59O1xuZXhwb3J0cy5kZWZhdWx0ID0gQnV0dG9uO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5jb25zdCBqc3hfcnVudGltZV8xID0gcmVxdWlyZShcInJlYWN0L2pzeC1ydW50aW1lXCIpO1xuY29uc3QgRHJvcGRvd24gPSAoeyBudW0sIGNoaWxkcmVuLCBvbkNoYW5nZSwgc2VsZWN0LCB0eXBlLCBjbGFzc05hbWUgPSBcImJ0bi10ZXh0XCIsIH0pID0+IHtcbiAgICAvLyBNYWtlIHRoZSBidXR0b24gYmFzZWQgb24gcGFzc2VkIGNoaWxkcmVuXG4gICAgbGV0IGJ1dHRvbiA9ICgoMCwganN4X3J1bnRpbWVfMS5qc3hzKShcImJ1dHRvblwiLCBPYmplY3QuYXNzaWduKHsgY2xhc3NOYW1lOiBjbGFzc05hbWUsIG9uQ2xpY2s6ICgpID0+IHsgfSwgXCJkYXRhLXJvbGVcIjogXCJkcm9wZG93blwiLCBcImRhdGEtZHJvcGRvd25cIjogbnVtIH0sIHsgY2hpbGRyZW46IFtjaGlsZHJlblswXS5wcm9wcy5jaGlsZHJlbiwgKDAsIGpzeF9ydW50aW1lXzEuanN4KShcImlcIiwgeyBjbGFzc05hbWU6IGNoaWxkcmVuWzBdLnByb3BzW1wiZGF0YS1pY29uLWNsYXNzXCJdLCBcImFyaWEtaGlkZGVuXCI6IFwidHJ1ZVwiLCBcImRhdGEtcm9sZVwiOiBcImRyb3Bkb3duXCIsIFwiZGF0YS1kcm9wZG93blwiOiBudW0gfSldIH0pKSk7XG4gICAgLy8gTWFrZSBsaXN0IGl0ZW1zIGJhc2VkIG9uIHBhc3NlZCBjaGlsZHJlblxuICAgIGxldCBpdGVtcyA9IGNoaWxkcmVuLm1hcCgoeyBwcm9wcyB9KSA9PiB7XG4gICAgICAgIGlmIChwcm9wc1tcImRhdGEtcm9sZS1uYW1lXCJdID09PSBcIml0ZW1cIikge1xuICAgICAgICAgICAgbGV0IGNsYXNzTmFtZSA9IHNlbGVjdCA9PT0gcHJvcHNbXCJkYXRhLW5hbWVcIl1cbiAgICAgICAgICAgICAgICA/IFwiZHJvcGRvd25fX2l0ZW0gZHJvcGRvd25fX2l0ZW0tLWFjdGl2ZVwiXG4gICAgICAgICAgICAgICAgOiBcImRyb3Bkb3duX19pdGVtXCI7XG4gICAgICAgICAgICByZXR1cm4gKCgwLCBqc3hfcnVudGltZV8xLmpzeCkoXCJhXCIsIE9iamVjdC5hc3NpZ24oeyBjbGFzc05hbWU6IGNsYXNzTmFtZSwgXCJkYXRhLXJvbGVcIjogXCJkcm9wZG93blwiLCBcImRhdGEtZHJvcGRvd25cIjogbnVtLCBocmVmOiBcImphdmFzY3JpcHQ6dm9pZCgwKVwiLCBvbkNsaWNrOiAoKSA9PiBvbkNoYW5nZShwcm9wc1tcImRhdGEtbmFtZVwiXSkgfSwgeyBjaGlsZHJlbjogcHJvcHMuY2hpbGRyZW4gfSksIHByb3BzW1wiZGF0YS1uYW1lXCJdKSk7XG4gICAgICAgIH1cbiAgICB9KTtcbiAgICByZXR1cm4gKCgwLCBqc3hfcnVudGltZV8xLmpzeHMpKFwiZGl2XCIsIE9iamVjdC5hc3NpZ24oeyBjbGFzc05hbWU6IGBkcm9wZG93biAke3R5cGUgPT09IFwibWluaVwiICYmIFwiZHJvcGRvd24tbWluaVwifSBkcm9wZG93bi0tY2xvc2VgLCBcImRhdGEtcm9sZVwiOiBcImRyb3Bkb3duXCIsIFwiZGF0YS1kcm9wZG93blwiOiBudW0gfSwgeyBjaGlsZHJlbjogW2J1dHRvbiwgKDAsIGpzeF9ydW50aW1lXzEuanN4KShcImRpdlwiLCBPYmplY3QuYXNzaWduKHsgY2xhc3NOYW1lOiBcImRyb3Bkb3duX19jb250ZW50XCIsIFwiZGF0YS1yb2xlXCI6IFwiZHJvcGRvd25cIiwgXCJkYXRhLWRyb3Bkb3duXCI6IG51bSB9LCB7IGNoaWxkcmVuOiBpdGVtcyB9KSldIH0pKSk7XG59O1xuZXhwb3J0cy5kZWZhdWx0ID0gRHJvcGRvd247XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmNvbnN0IGpzeF9ydW50aW1lXzEgPSByZXF1aXJlKFwicmVhY3QvanN4LXJ1bnRpbWVcIik7XG5jb25zdCByZWFjdF8xID0gcmVxdWlyZShcInJlYWN0XCIpO1xuY29uc3QgSW5wdXQgPSAocHJvcHMpID0+IHtcbiAgICB2YXIgX2E7XG4gICAgY29uc3QgW3ZhbHVlLCBzZXRWYWx1ZV0gPSAoMCwgcmVhY3RfMS51c2VTdGF0ZSkoKF9hID0gcHJvcHMudmFsdWUpID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS50b1N0cmluZygpKTtcbiAgICBjb25zdCBpbnB1dCA9ICgwLCByZWFjdF8xLnVzZVJlZikobnVsbCk7XG4gICAgKDAsIHJlYWN0XzEudXNlRWZmZWN0KSgoKSA9PiB7XG4gICAgICAgIGlmIChwcm9wcy52YWx1ZSkge1xuICAgICAgICAgICAgc2V0VmFsdWUocHJvcHMudmFsdWUudG9TdHJpbmcoKSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBzZXRWYWx1ZShcIlwiKTtcbiAgICAgICAgfVxuICAgIH0sIFtwcm9wcy52YWx1ZV0pO1xuICAgICgwLCByZWFjdF8xLnVzZUVmZmVjdCkoKCkgPT4ge1xuICAgICAgICBpZiAocHJvcHMub25DaGFuZ2UgJiYgdHlwZW9mIHZhbHVlID09PSBcInN0cmluZ1wiKSB7XG4gICAgICAgICAgICBwcm9wcy5vbkNoYW5nZSh2YWx1ZSk7XG4gICAgICAgIH1cbiAgICB9LCBbdmFsdWVdKTtcbiAgICBsZXQgY2xhc3NOYW1lID0gXCJmb3JtLXRleHRcIjtcbiAgICBzd2l0Y2ggKHByb3BzLnNpemUpIHtcbiAgICAgICAgY2FzZSBcImJpZ1wiOlxuICAgICAgICAgICAgY2xhc3NOYW1lICs9IFwiIGZvcm0tdGV4dC0tYmlnXCI7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSBcInNtYWxsXCI6XG4gICAgICAgICAgICBjbGFzc05hbWUgKz0gXCIgZm9ybS10ZXh0LS1zbWFsbFwiO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgfVxuICAgIGlmIChwcm9wcy5yb3VuZGVkKVxuICAgICAgICBjbGFzc05hbWUgKz0gXCIgZm9ybS10ZXh0LS1yb3VuZGVkXCI7XG4gICAgaWYgKHByb3BzLnN1Y2Nlc3MgJiYgIXByb3BzLmRpc2FibGVkKVxuICAgICAgICBjbGFzc05hbWUgKz0gXCIgZm9ybS10ZXh0LS1zdWNjZXNzXCI7XG4gICAgaWYgKHByb3BzLmVycm9yICYmICFwcm9wcy5kaXNhYmxlZClcbiAgICAgICAgY2xhc3NOYW1lICs9IFwiIGZvcm0tdGV4dC0tZXJyb3JcIjtcbiAgICBpZiAocHJvcHMuZGlzYWJsZWQpXG4gICAgICAgIGNsYXNzTmFtZSArPSBcIiBmb3JtLXRleHQtLWRpc2FibGVkXCI7XG4gICAgbGV0IHNob3VsZERpdmlkZU51bWJlckJ5VGhyZWUgPSB0cnVlO1xuICAgIGlmICh0eXBlb2YgcHJvcHMuc2hvdWxkRGl2aWRlTnVtYmVyQnlUaHJlZSA9PT0gXCJib29sZWFuXCIpIHtcbiAgICAgICAgc2hvdWxkRGl2aWRlTnVtYmVyQnlUaHJlZSA9IHByb3BzLnNob3VsZERpdmlkZU51bWJlckJ5VGhyZWU7XG4gICAgfVxuICAgIGlmIChwcm9wcy5yZXF1aXJlZFdpdGhFcnJvciAmJiAhdmFsdWUpIHtcbiAgICAgICAgY2xhc3NOYW1lICs9IFwiIGZvcm0tdGV4dC0tZXJyb3JcIjtcbiAgICB9XG4gICAgaWYgKHByb3BzLmxpbmVkKSB7XG4gICAgICAgIGNsYXNzTmFtZSArPSBcIiBmb3JtLXRleHQtbGluZWRcIjtcbiAgICB9XG4gICAgcmV0dXJuICgoMCwganN4X3J1bnRpbWVfMS5qc3hzKShqc3hfcnVudGltZV8xLkZyYWdtZW50LCB7IGNoaWxkcmVuOiBbKDAsIGpzeF9ydW50aW1lXzEuanN4cykoXCJkaXZcIiwgT2JqZWN0LmFzc2lnbih7IGNsYXNzTmFtZTogY2xhc3NOYW1lIH0sIHsgY2hpbGRyZW46IFtwcm9wcy5wbGFjZWhvbGRlciAmJiAhcHJvcHMubGluZWQgJiYgKCgwLCBqc3hfcnVudGltZV8xLmpzeCkoXCJsYWJlbFwiLCBPYmplY3QuYXNzaWduKHsgY2xhc3NOYW1lOiBcImZvcm1fX2xhYmVsXCIsIG9uQ2xpY2s6ICgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgX2E7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKF9hID0gaW5wdXQuY3VycmVudCkgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hLmZvY3VzKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9IH0sIHsgY2hpbGRyZW46IHByb3BzLmxhYmVsIH0pKSksICgwLCBqc3hfcnVudGltZV8xLmpzeHMpKFwiZGl2XCIsIE9iamVjdC5hc3NpZ24oeyBjbGFzc05hbWU6IFwiZm9ybS10ZXh0X19pbnB1dC1jb250YWluZXJcIiB9LCB7IGNoaWxkcmVuOiBbcHJvcHMuaGVscCAmJiAoKDAsIGpzeF9ydW50aW1lXzEuanN4cykoXCJkaXZcIiwgT2JqZWN0LmFzc2lnbih7IGNsYXNzTmFtZTogXCJ0b29sdGlwIHRvb2x0aXAtdG9wXCIgfSwgeyBjaGlsZHJlbjogWygwLCBqc3hfcnVudGltZV8xLmpzeCkoXCJhXCIsIE9iamVjdC5hc3NpZ24oeyBocmVmOiBcIiNcIiwgY2xhc3NOYW1lOiBcInRvb2x0aXBfX2ljb25cIiB9LCB7IGNoaWxkcmVuOiBcIj9cIiB9KSksICgwLCBqc3hfcnVudGltZV8xLmpzeCkoXCJkaXZcIiwgT2JqZWN0LmFzc2lnbih7IGNsYXNzTmFtZTogXCJ0b29sdGlwX190ZXh0XCIgfSwgeyBjaGlsZHJlbjogcHJvcHMuaGVscCB9KSldIH0pKSksIHByb3BzLmlubmVySW5wdXRMYWJlbCAmJiAoKDAsIGpzeF9ydW50aW1lXzEuanN4KShcInNwYW5cIiwgT2JqZWN0LmFzc2lnbih7IGNsYXNzTmFtZTogXCJmb3JtLXRleHRfX2lubmVyLWlucHV0LWxhYmVsXCIsIHJlZjogKGVsZW0pID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIEFkZCBhIGxlZnQgcGFkZGluZyB0byB0aGUgaW5wdXQgYmVjYXVzZSBvZiB0aGUgbmFtZSBsYWJlbFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGVsZW0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gQHRzLWlnbm9yZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsZW0ubmV4dFNpYmxpbmcuc3R5bGUucGFkZGluZ0xlZnQgPSBgJHtlbGVtLmNsaWVudFdpZHRoICsgMTB9cHhgO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IH0sIHsgY2hpbGRyZW46IHByb3BzLmlubmVySW5wdXRMYWJlbCB9KSkpLCAoMCwganN4X3J1bnRpbWVfMS5qc3gpKFwiaW5wdXRcIiwgeyByZWY6IGlucHV0LCBjbGFzc05hbWU6IFwiZm9ybS10ZXh0X19pbnB1dFwiLCBpZDogcHJvcHMuaWQsIGRpc2FibGVkOiBwcm9wcy5kaXNhYmxlZCwgdmFsdWU6IHByb3BzLnR5cGUgPT09IFwibnVtYmVyXCIgJiYgdmFsdWVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gc2hvdWxkRGl2aWRlTnVtYmVyQnlUaHJlZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gTnVtYmVyKHZhbHVlKS50b0xvY2FsZVN0cmluZygpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiB2YWx1ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiB2YWx1ZSwgcmVxdWlyZWQ6IHByb3BzLnJlcXVpcmVkLCBhdXRvRm9jdXM6IHByb3BzLmF1dG9Gb2N1cywgYXV0b0NvbXBsZXRlOiBwcm9wcy5hdXRvQ29tcGxldGUgfHwgXCJcIiwgbWF4TGVuZ3RoOiBwcm9wcy5tYXhMZW5ndGgsIHBsYWNlaG9sZGVyOiBwcm9wcy5wbGFjZWhvbGRlciwgb25DaGFuZ2U6IChldmVudCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHZhbHVlID0gZXZlbnQudGFyZ2V0LnZhbHVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHByb3BzLnR5cGUgPT09IFwibnVtYmVyXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZSA9IHZhbHVlLnJlcGxhY2UoLywvZywgXCJcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCEhTnVtYmVyKHZhbHVlKSB8fCBOdW1iZXIodmFsdWUpID09PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldFZhbHVlKHZhbHVlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRWYWx1ZSh2YWx1ZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sIG9uQmx1cjogKGV2ZW50KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgdmFsdWUgPSBldmVudC50YXJnZXQudmFsdWU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRWYWx1ZSh2YWx1ZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAocHJvcHMub25CbHVyKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb3BzLm9uQmx1cih2YWx1ZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sIHR5cGU6IHByb3BzLnR5cGUgPT09IFwicGFzc3dvcmRcIiA/IFwicGFzc3dvcmRcIiA6IFwidGV4dFwiIH0pXSB9KSksICFwcm9wcy5wbGFjZWhvbGRlciAmJiAoKDAsIGpzeF9ydW50aW1lXzEuanN4KShcImxhYmVsXCIsIE9iamVjdC5hc3NpZ24oeyBjbGFzc05hbWU6IGBmb3JtLXRleHRfX2xhYmVsICR7dmFsdWUgPyBcImZvcm0tdGV4dF9fbGFiZWwtLXRvcFwiIDogXCJcIn1gLCBvbkNsaWNrOiAoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIF9hO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIChfYSA9IGlucHV0LmN1cnJlbnQpID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS5mb2N1cygpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSB9LCB7IGNoaWxkcmVuOiBwcm9wcy5sYWJlbCB9KSkpXSB9KSksICgwLCBqc3hfcnVudGltZV8xLmpzeHMpKFwiZGl2XCIsIE9iamVjdC5hc3NpZ24oeyBjbGFzc05hbWU6IFwiZm9ybS10ZXh0X19mb290ZXJcIiB9LCB7IGNoaWxkcmVuOiBbcHJvcHMuZXJyb3IgJiYgIXByb3BzLmRpc2FibGVkICYmICgoMCwganN4X3J1bnRpbWVfMS5qc3hzKShcInNwYW5cIiwgT2JqZWN0LmFzc2lnbih7IGNsYXNzTmFtZTogXCJpbnB1dC1lcnJvclwiIH0sIHsgY2hpbGRyZW46IFsoMCwganN4X3J1bnRpbWVfMS5qc3gpKFwiaVwiLCB7IGNsYXNzTmFtZTogXCJmYSBmYS1leGNsYW1hdGlvbi1jaXJjbGVcIiB9KSwgcHJvcHMuZXJyb3JdIH0pKSksIHByb3BzLm1heExlbmd0aCAmJiAoKDAsIGpzeF9ydW50aW1lXzEuanN4KShcInNwYW5cIiwgT2JqZWN0LmFzc2lnbih7IGNsYXNzTmFtZTogXCJmb3JtLXRleHRfX2xlbmd0aC1kaXNwbGF5XCIgfSwgeyBjaGlsZHJlbjogcHJvcHMubWF4TGVuZ3RoIC0gKCh2YWx1ZSA9PT0gbnVsbCB8fCB2YWx1ZSA9PT0gdm9pZCAwID8gdm9pZCAwIDogdmFsdWUubGVuZ3RoKSB8fCAwKSB9KSkpXSB9KSldIH0pKTtcbn07XG5leHBvcnRzLmRlZmF1bHQgPSBJbnB1dDtcbiIsIlwidXNlIHN0cmljdFwiO1xudmFyIF9faW1wb3J0RGVmYXVsdCA9ICh0aGlzICYmIHRoaXMuX19pbXBvcnREZWZhdWx0KSB8fCBmdW5jdGlvbiAobW9kKSB7XG4gICAgcmV0dXJuIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpID8gbW9kIDogeyBcImRlZmF1bHRcIjogbW9kIH07XG59O1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuY29uc3QganN4X3J1bnRpbWVfMSA9IHJlcXVpcmUoXCJyZWFjdC9qc3gtcnVudGltZVwiKTtcbmNvbnN0IHJlYWN0XzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcInJlYWN0XCIpKTtcbmNvbnN0IGNvbW1vbl8xID0gcmVxdWlyZShcIkBwYWdzZXIvY29tbW9uXCIpO1xuY29uc3QgSW5wdXRGaWxlID0gKHsgYWRkQ2xhc3MsIGhpZGUsIGxhYmVsLCBpZCwgc2l6ZSwgdHlwZSwgbWluV2lkdGgsIG1pbkhlaWdodCwgb25DaGFuZ2UsIG9uQ2xpY2ssIG9uRXJyb3IsIH0pID0+IHtcbiAgICBsZXQgY2xhc3NOYW1lID0gXCJmaWxlX191cGxvYWQtLWxhYmVsXCI7XG4gICAgaWYgKGFkZENsYXNzKVxuICAgICAgICBjbGFzc05hbWUgKz0gYCAke2FkZENsYXNzfWA7XG4gICAgaWYgKGhpZGUpXG4gICAgICAgIGNsYXNzTmFtZSArPSBcIiBkaXNwbGF5LW5vbmVcIjtcbiAgICByZXR1cm4gKCgwLCBqc3hfcnVudGltZV8xLmpzeHMpKHJlYWN0XzEuZGVmYXVsdC5GcmFnbWVudCwgeyBjaGlsZHJlbjogWygwLCBqc3hfcnVudGltZV8xLmpzeHMpKFwibGFiZWxcIiwgT2JqZWN0LmFzc2lnbih7IGh0bWxGb3I6IGlkLCBjbGFzc05hbWU6IGNsYXNzTmFtZSB9LCB7IGNoaWxkcmVuOiBbKDAsIGpzeF9ydW50aW1lXzEuanN4KShcImlcIiwgeyBjbGFzc05hbWU6IFwiZmEgZmEtY2xvdWQtdXBsb2FkXCIsIFwiYXJpYS1oaWRkZW5cIjogXCJ0cnVlXCIgfSksIFwiIFwiLCAoMCwganN4X3J1bnRpbWVfMS5qc3gpKFwic3BhblwiLCB7IGNoaWxkcmVuOiBsYWJlbCB9KV0gfSkpLCAoMCwganN4X3J1bnRpbWVfMS5qc3gpKFwiaW5wdXRcIiwgeyBpZDogaWQsIG9uQ2hhbmdlOiAoZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBpbnB1dEVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgIyR7aWR9YCk7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGlucHV0RmlsZXMgPSBpbnB1dEVsLmZpbGVzO1xuICAgICAgICAgICAgICAgICAgICBsZXQgaW5wdXRGaWxlO1xuICAgICAgICAgICAgICAgICAgICBpZiAoaW5wdXRGaWxlcylcbiAgICAgICAgICAgICAgICAgICAgICAgIGlucHV0RmlsZSA9IGlucHV0RmlsZXNbMF07XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGZpbGVTaXplID0gaW5wdXRGaWxlID09PSBudWxsIHx8IGlucHV0RmlsZSA9PT0gdm9pZCAwID8gdm9pZCAwIDogaW5wdXRGaWxlLnNpemU7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGZpbGVOYW1lID0gaW5wdXRGaWxlID09PSBudWxsIHx8IGlucHV0RmlsZSA9PT0gdm9pZCAwID8gdm9pZCAwIDogaW5wdXRGaWxlLm5hbWU7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGZpbGVUeXBlID0gaW5wdXRGaWxlID09PSBudWxsIHx8IGlucHV0RmlsZSA9PT0gdm9pZCAwID8gdm9pZCAwIDogaW5wdXRGaWxlLnR5cGU7XG4gICAgICAgICAgICAgICAgICAgIGlmICghZmlsZVNpemUgfHwgIWZpbGVOYW1lIHx8ICFmaWxlVHlwZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgKDAsIGNvbW1vbl8xLmFsZXJ0KShcIlNvcnJ5LCBzb21ldGhpbmcgdW5leHBlY3RlZCBoYXBwZW5lZC4gUGxlYXNlIHRyeSBhZ2FpbiBvciBjb250YWN0IG91ciBzdXBwb3J0LlwiLCBcImVycm9yXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIC8vIEFsd2F5cyB2YWxpZGF0ZSBmaWxlIHNpemVcbiAgICAgICAgICAgICAgICAgICAgaWYgKGZpbGVTaXplID4gc2l6ZSlcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBvbkVycm9yKGBGaWxlIHNpemUgbXVzdCBiZSBsZXNzIHRoYW4gJHtzaXplIC8gMTAwMDAwMH1NQi5gKTtcbiAgICAgICAgICAgICAgICAgICAgLy8gVmFsaWRhdGUgZmlsZSB0eXBlIGlmICd0eXBlJyBwcm9wZXJ0eSBoYXMgYmVlbiBzcGVjaWZpZWRcbiAgICAgICAgICAgICAgICAgICAgc3dpdGNoICh0eXBlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlIFwiaW1hZ2VcIjpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoIW1pbkhlaWdodCB8fCAhbWluV2lkdGgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiUGxlYXNlIHNwZWNpZnkgbWluSGVpZ2h0IGFuZCBtaW5XaWR0aCBmb3IgdGhlIGNvbXBvbmVudCB3aXRoIHRoZSB0eXBlIG9mICdpbWFnZScuXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBWYWxpZGF0ZSBpZiB0aGUgZmlsZSBpcyBpbWFnZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChmaWxlVHlwZSAhPT0gXCJpbWFnZS9qcGdcIiAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWxlVHlwZSAhPT0gXCJpbWFnZS9wbmdcIiAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWxlVHlwZSAhPT0gXCJpbWFnZS9qcGVnXCIpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBvbkVycm9yKFwiT25seSBqcGVnL2pwZy9wbmcgaW1hZ2VzIGFyZSBhbGxvd2VkLlwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBWYWxpZGF0ZSBpZiB0aGUgaW1hZ2UgaGFzIHRoZSBtaW4gd2lkdGggYW5kIGhlaWdodFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBpbWdVcmwgPSBVUkwuY3JlYXRlT2JqZWN0VVJMKGUudGFyZ2V0LmZpbGVzWzBdKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgaW1hZ2UgPSBuZXcgSW1hZ2UoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbWFnZS5vbmxvYWQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLmhlaWdodCA8IG1pbkhlaWdodCB8fFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy53aWR0aCA8IG1pbldpZHRoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkVycm9yKGBQbGVhc2UgdXBsb2FkIGFuIGltYWdlIHdpdGggdGhlIG1pbmltdW0gZGltZW5zaW9ucyBvZiBhdCBsZWFzdCAke21pbldpZHRofSAqICR7bWluSGVpZ2h0fSBwaXhlbHMuYCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZShlLCBmaWxlTmFtZSwgaW1nVXJsKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaW1hZ2Uuc3JjID0gaW1nVXJsO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZShlLCBmaWxlTmFtZSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9LCBvbkNsaWNrOiAoZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAvLyBSZXNldCB0aGUgaW5wdXQgZmlsZSB2YWx1ZSBiZWZvcmUgY2hvb3NpbmcgYSBuZXcgZmlsZVxuICAgICAgICAgICAgICAgICAgICAvLyBAdHMtaWdub3JlXG4gICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCMke2lkfWApLnZhbHVlID0gbnVsbDtcbiAgICAgICAgICAgICAgICAgICAgb25DbGljayhlKTtcbiAgICAgICAgICAgICAgICB9LCB0eXBlOiBcImZpbGVcIiwgbmFtZTogXCJmaWxlXCIsIHBsYWNlaG9sZGVyOiBsYWJlbCB9KV0gfSkpO1xufTtcbmV4cG9ydHMuZGVmYXVsdCA9IElucHV0RmlsZTtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuY29uc3QganN4X3J1bnRpbWVfMSA9IHJlcXVpcmUoXCJyZWFjdC9qc3gtcnVudGltZVwiKTtcbmNvbnN0IHJlYWN0XzEgPSByZXF1aXJlKFwicmVhY3RcIik7XG5jb25zdCBUZXh0YXJlYSA9IChwcm9wcykgPT4ge1xuICAgIHZhciBfYTtcbiAgICBjb25zdCBbdmFsdWUsIHNldFZhbHVlXSA9ICgwLCByZWFjdF8xLnVzZVN0YXRlKSgoX2EgPSBwcm9wcy52YWx1ZSkgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hLnRvU3RyaW5nKCkpO1xuICAgIGNvbnN0IGlucHV0ID0gKDAsIHJlYWN0XzEudXNlUmVmKShudWxsKTtcbiAgICAoMCwgcmVhY3RfMS51c2VFZmZlY3QpKCgpID0+IHtcbiAgICAgICAgaWYgKHByb3BzLnZhbHVlKSB7XG4gICAgICAgICAgICBzZXRWYWx1ZShwcm9wcy52YWx1ZS50b1N0cmluZygpKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHNldFZhbHVlKFwiXCIpO1xuICAgICAgICB9XG4gICAgfSwgW3Byb3BzLnZhbHVlXSk7XG4gICAgKDAsIHJlYWN0XzEudXNlRWZmZWN0KSgoKSA9PiB7XG4gICAgICAgIGlmIChwcm9wcy5vbkNoYW5nZSAmJiB0eXBlb2YgdmFsdWUgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgICAgICAgIHByb3BzLm9uQ2hhbmdlKHZhbHVlKTtcbiAgICAgICAgfVxuICAgIH0sIFt2YWx1ZV0pO1xuICAgIGxldCBjbGFzc05hbWUgPSBcImZvcm0tdGV4dCBmb3JtLXRleHQtLXRleHRhcmVhXCI7XG4gICAgc3dpdGNoIChwcm9wcy5zaXplKSB7XG4gICAgICAgIGNhc2UgXCJiaWdcIjpcbiAgICAgICAgICAgIGNsYXNzTmFtZSArPSBcIiBmb3JtLXRleHQtLWJpZ1wiO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgXCJzbWFsbFwiOlxuICAgICAgICAgICAgY2xhc3NOYW1lICs9IFwiIGZvcm0tdGV4dC0tc21hbGxcIjtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgIH1cbiAgICBpZiAocHJvcHMucm91bmRlZClcbiAgICAgICAgY2xhc3NOYW1lICs9IFwiIGZvcm0tdGV4dC0tcm91bmRlZFwiO1xuICAgIGlmIChwcm9wcy5lcnJvcilcbiAgICAgICAgY2xhc3NOYW1lICs9IFwiIGZvcm0tdGV4dC0tZXJyb3JcIjtcbiAgICByZXR1cm4gKCgwLCBqc3hfcnVudGltZV8xLmpzeHMpKGpzeF9ydW50aW1lXzEuRnJhZ21lbnQsIHsgY2hpbGRyZW46IFsoMCwganN4X3J1bnRpbWVfMS5qc3hzKShcImRpdlwiLCBPYmplY3QuYXNzaWduKHsgY2xhc3NOYW1lOiBjbGFzc05hbWUgfSwgeyBjaGlsZHJlbjogW3Byb3BzLnBsYWNlaG9sZGVyICYmICgoMCwganN4X3J1bnRpbWVfMS5qc3gpKFwibGFiZWxcIiwgT2JqZWN0LmFzc2lnbih7IGNsYXNzTmFtZTogXCJmb3JtX19sYWJlbFwiLCBvbkNsaWNrOiAoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIF9hO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIChfYSA9IGlucHV0LmN1cnJlbnQpID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS5mb2N1cygpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSB9LCB7IGNoaWxkcmVuOiBwcm9wcy5sYWJlbCB9KSkpLCAoMCwganN4X3J1bnRpbWVfMS5qc3hzKShcImRpdlwiLCBPYmplY3QuYXNzaWduKHsgY2xhc3NOYW1lOiBcImZvcm0tdGV4dF9faW5wdXQtY29udGFpbmVyXCIgfSwgeyBjaGlsZHJlbjogW3Byb3BzLmhlbHAgJiYgKCgwLCBqc3hfcnVudGltZV8xLmpzeHMpKFwiZGl2XCIsIE9iamVjdC5hc3NpZ24oeyBjbGFzc05hbWU6IFwidG9vbHRpcCB0b29sdGlwLXRvcCBhLTE5XCIgfSwgeyBjaGlsZHJlbjogWygwLCBqc3hfcnVudGltZV8xLmpzeCkoXCJhXCIsIE9iamVjdC5hc3NpZ24oeyBocmVmOiBcIiNcIiwgY2xhc3NOYW1lOiBcInRvb2x0aXBfX2ljb25cIiB9LCB7IGNoaWxkcmVuOiBcIj9cIiB9KSksICgwLCBqc3hfcnVudGltZV8xLmpzeCkoXCJkaXZcIiwgT2JqZWN0LmFzc2lnbih7IGNsYXNzTmFtZTogXCJ0b29sdGlwX190ZXh0XCIgfSwgeyBjaGlsZHJlbjogcHJvcHMuaGVscCB9KSldIH0pKSksICgwLCBqc3hfcnVudGltZV8xLmpzeCkoXCJ0ZXh0YXJlYVwiLCB7IHJvd3M6IHByb3BzLnJvd3MsIHJlZjogaW5wdXQsIGlkOiBwcm9wcy5pZCwgY2xhc3NOYW1lOiBcImZvcm0tdGV4dF9faW5wdXRcIiwgcGxhY2Vob2xkZXI6IHByb3BzLnBsYWNlaG9sZGVyLCBtYXhMZW5ndGg6IHByb3BzLm1heExlbmd0aCwgdmFsdWU6IHZhbHVlLCByZXF1aXJlZDogcHJvcHMucmVxdWlyZWQsIG9uQ2hhbmdlOiAoZXZlbnQpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCB2YWx1ZSA9IGV2ZW50LnRhcmdldC52YWx1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldFZhbHVlKHZhbHVlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSwgb25CbHVyOiAoZXZlbnQpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChwcm9wcy5vbkJsdXIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9wcy5vbkJsdXIoZXZlbnQudGFyZ2V0LnZhbHVlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSB9KV0gfSkpLCAhcHJvcHMucGxhY2Vob2xkZXIgJiYgKCgwLCBqc3hfcnVudGltZV8xLmpzeCkoXCJsYWJlbFwiLCBPYmplY3QuYXNzaWduKHsgY2xhc3NOYW1lOiBgZm9ybS10ZXh0X19sYWJlbCAke3ZhbHVlID8gXCJmb3JtLXRleHRfX2xhYmVsLS10b3BcIiA6IFwiXCJ9YCwgb25DbGljazogKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBfYTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAoX2EgPSBpbnB1dC5jdXJyZW50KSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2EuZm9jdXMoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gfSwgeyBjaGlsZHJlbjogcHJvcHMubGFiZWwgfSkpKV0gfSkpLCAoMCwganN4X3J1bnRpbWVfMS5qc3hzKShcImRpdlwiLCBPYmplY3QuYXNzaWduKHsgY2xhc3NOYW1lOiBcImZvcm0tdGV4dF9fZm9vdGVyXCIgfSwgeyBjaGlsZHJlbjogW3Byb3BzLmVycm9yICYmICgoMCwganN4X3J1bnRpbWVfMS5qc3hzKShcInNwYW5cIiwgT2JqZWN0LmFzc2lnbih7IGNsYXNzTmFtZTogXCJpbnB1dC1lcnJvclwiIH0sIHsgY2hpbGRyZW46IFsoMCwganN4X3J1bnRpbWVfMS5qc3gpKFwiaVwiLCB7IGNsYXNzTmFtZTogXCJmYSBmYS1leGNsYW1hdGlvbi1jaXJjbGVcIiB9KSwgcHJvcHMuZXJyb3JdIH0pKSksIHByb3BzLm1heExlbmd0aCAmJiAoKDAsIGpzeF9ydW50aW1lXzEuanN4KShcInNwYW5cIiwgT2JqZWN0LmFzc2lnbih7IGNsYXNzTmFtZTogXCJmb3JtLXRleHRfX2xlbmd0aC1kaXNwbGF5XCIgfSwgeyBjaGlsZHJlbjogcHJvcHMubWF4TGVuZ3RoIC0gKCh2YWx1ZSA9PT0gbnVsbCB8fCB2YWx1ZSA9PT0gdm9pZCAwID8gdm9pZCAwIDogdmFsdWUubGVuZ3RoKSB8fCAwKSB9KSkpXSB9KSldIH0pKTtcbn07XG5leHBvcnRzLmRlZmF1bHQgPSBUZXh0YXJlYTtcbiIsIlwidXNlIHN0cmljdFwiO1xudmFyIF9faW1wb3J0RGVmYXVsdCA9ICh0aGlzICYmIHRoaXMuX19pbXBvcnREZWZhdWx0KSB8fCBmdW5jdGlvbiAobW9kKSB7XG4gICAgcmV0dXJuIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpID8gbW9kIDogeyBcImRlZmF1bHRcIjogbW9kIH07XG59O1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5VcGxvYWRQaG90byA9IGV4cG9ydHMuVXBsb2FkQXR0YWNoRmlsZSA9IGV4cG9ydHMuQWRkVG9Db2xsZWN0aW9uID0gZXhwb3J0cy5Ecm9wZG93biA9IGV4cG9ydHMuSW5wdXRGaWxlID0gZXhwb3J0cy5UZXh0YXJlYSA9IGV4cG9ydHMuQnV0dG9uID0gZXhwb3J0cy5JbnB1dCA9IGV4cG9ydHMuTW9kYWwgPSBleHBvcnRzLkNvbmZpcm1Nb2RhbCA9IGV4cG9ydHMuQWxlcnQgPSBleHBvcnRzLkxvYWRpbmcgPSB2b2lkIDA7XG5jb25zdCBMb2FkaW5nXzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcIi4vTG9hZGluZ1wiKSk7XG5leHBvcnRzLkxvYWRpbmcgPSBMb2FkaW5nXzEuZGVmYXVsdDtcbmNvbnN0IEFsZXJ0XzEgPSByZXF1aXJlKFwiLi9BbGVydFwiKTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIkFsZXJ0XCIsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBBbGVydF8xLkFsZXJ0OyB9IH0pO1xuY29uc3QgTW9kYWxfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiLi9tb2RhbHMvTW9kYWxcIikpO1xuZXhwb3J0cy5Nb2RhbCA9IE1vZGFsXzEuZGVmYXVsdDtcbmNvbnN0IENvbmZpcm1Nb2RhbF8xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCIuL21vZGFscy9Db25maXJtTW9kYWxcIikpO1xuZXhwb3J0cy5Db25maXJtTW9kYWwgPSBDb25maXJtTW9kYWxfMS5kZWZhdWx0O1xuY29uc3QgSW5wdXRfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiLi9mb3Jtcy9JbnB1dFwiKSk7XG5leHBvcnRzLklucHV0ID0gSW5wdXRfMS5kZWZhdWx0O1xuY29uc3QgQnV0dG9uXzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcIi4vZm9ybXMvQnV0dG9uXCIpKTtcbmV4cG9ydHMuQnV0dG9uID0gQnV0dG9uXzEuZGVmYXVsdDtcbmNvbnN0IFRleHRhcmVhXzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcIi4vZm9ybXMvVGV4dGFyZWFcIikpO1xuZXhwb3J0cy5UZXh0YXJlYSA9IFRleHRhcmVhXzEuZGVmYXVsdDtcbmNvbnN0IElucHV0RmlsZV8xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCIuL2Zvcm1zL0lucHV0RmlsZVwiKSk7XG5leHBvcnRzLklucHV0RmlsZSA9IElucHV0RmlsZV8xLmRlZmF1bHQ7XG5jb25zdCBEcm9wZG93bl8xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCIuL2Zvcm1zL0Ryb3Bkb3duXCIpKTtcbmV4cG9ydHMuRHJvcGRvd24gPSBEcm9wZG93bl8xLmRlZmF1bHQ7XG5jb25zdCBBZGRUb0NvbGxlY3Rpb25fMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiLi9tb2RhbHMvQWRkVG9Db2xsZWN0aW9uXCIpKTtcbmV4cG9ydHMuQWRkVG9Db2xsZWN0aW9uID0gQWRkVG9Db2xsZWN0aW9uXzEuZGVmYXVsdDtcbmNvbnN0IFVwbG9hZEF0dGFjaEZpbGVfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiLi9tb2RhbHMvVXBsb2FkQXR0YWNoRmlsZVwiKSk7XG5leHBvcnRzLlVwbG9hZEF0dGFjaEZpbGUgPSBVcGxvYWRBdHRhY2hGaWxlXzEuZGVmYXVsdDtcbmNvbnN0IFVwbG9hZFBob3RvXzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcIi4vbW9kYWxzL1VwbG9hZFBob3RvXCIpKTtcbmV4cG9ydHMuVXBsb2FkUGhvdG8gPSBVcGxvYWRQaG90b18xLmRlZmF1bHQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcbnZhciBfX2F3YWl0ZXIgPSAodGhpcyAmJiB0aGlzLl9fYXdhaXRlcikgfHwgZnVuY3Rpb24gKHRoaXNBcmcsIF9hcmd1bWVudHMsIFAsIGdlbmVyYXRvcikge1xuICAgIGZ1bmN0aW9uIGFkb3B0KHZhbHVlKSB7IHJldHVybiB2YWx1ZSBpbnN0YW5jZW9mIFAgPyB2YWx1ZSA6IG5ldyBQKGZ1bmN0aW9uIChyZXNvbHZlKSB7IHJlc29sdmUodmFsdWUpOyB9KTsgfVxuICAgIHJldHVybiBuZXcgKFAgfHwgKFAgPSBQcm9taXNlKSkoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICBmdW5jdGlvbiBmdWxmaWxsZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3IubmV4dCh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XG4gICAgICAgIGZ1bmN0aW9uIHJlamVjdGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yW1widGhyb3dcIl0odmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxuICAgICAgICBmdW5jdGlvbiBzdGVwKHJlc3VsdCkgeyByZXN1bHQuZG9uZSA/IHJlc29sdmUocmVzdWx0LnZhbHVlKSA6IGFkb3B0KHJlc3VsdC52YWx1ZSkudGhlbihmdWxmaWxsZWQsIHJlamVjdGVkKTsgfVxuICAgICAgICBzdGVwKChnZW5lcmF0b3IgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSkpLm5leHQoKSk7XG4gICAgfSk7XG59O1xudmFyIF9faW1wb3J0RGVmYXVsdCA9ICh0aGlzICYmIHRoaXMuX19pbXBvcnREZWZhdWx0KSB8fCBmdW5jdGlvbiAobW9kKSB7XG4gICAgcmV0dXJuIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpID8gbW9kIDogeyBcImRlZmF1bHRcIjogbW9kIH07XG59O1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuY29uc3QganN4X3J1bnRpbWVfMSA9IHJlcXVpcmUoXCJyZWFjdC9qc3gtcnVudGltZVwiKTtcbmNvbnN0IHJlYWN0XzEgPSByZXF1aXJlKFwicmVhY3RcIik7XG5jb25zdCBjb21tb25fMSA9IHJlcXVpcmUoXCJAcGFnc2VyL2NvbW1vblwiKTtcbmNvbnN0IE1vZGFsXzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcIi4vTW9kYWxcIikpO1xuY29uc3QgTG9hZGluZ18xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCIuLi9Mb2FkaW5nXCIpKTtcbmNvbnN0IElucHV0XzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcIi4uL2Zvcm1zL0lucHV0XCIpKTtcbmNvbnN0IEJ1dHRvbl8xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCIuLi9mb3Jtcy9CdXR0b25cIikpO1xuY29uc3QgQ29sbGVjdGlvbk1vZGFsID0gKHByb3BzKSA9PiB7XG4gICAgY29uc3QgW25hbWUsIHNldE5hbWVdID0gKDAsIHJlYWN0XzEudXNlU3RhdGUpKFwiXCIpO1xuICAgIGNvbnN0IFtzdGF0dXMsIHNldFN0YXR1c10gPSAoMCwgcmVhY3RfMS51c2VTdGF0ZSkoXCJub3JtYWxcIik7IC8vIFdlJ2xsIHNob3cgZGlmZmVyZW50IGVsZW1lbnRzIGRlcGVuZGluZyBvbiB0aGUgdmFsdWVcbiAgICBjb25zdCBbY29sbGVjdGlvbnMsIHNldENvbGxlY3Rpb25zXSA9ICgwLCByZWFjdF8xLnVzZVN0YXRlKShbXSk7XG4gICAgLy8gQ2hlY2sgdG8gc2VlIGlmIHRoZSBtb2RhbCBpcyBvcGVuZWQgb3Igbm90LCBpZiBzbyBmZXRjaCB0aGUgY29sbGVjdGlvbnNcbiAgICAoMCwgcmVhY3RfMS51c2VFZmZlY3QpKCgpID0+IHtcbiAgICAgICAgaWYgKHByb3BzLm9wZW4pIHtcbiAgICAgICAgICAgIGZldGNoQ29sbGVjdGlvbnMoKTtcbiAgICAgICAgfVxuICAgIH0sIFtwcm9wcy5vcGVuXSk7XG4gICAgLy8gRmV0Y2ggYWxsIHRoZSBjb2xsZWN0aW9ucyB1c2VyIGhhcyBjcmVhdGVkXG4gICAgY29uc3QgZmV0Y2hDb2xsZWN0aW9ucyA9ICgpID0+IF9fYXdhaXRlcih2b2lkIDAsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xuICAgICAgICBzZXRTdGF0dXMoXCJsb2FkaW5nXCIpO1xuICAgICAgICBjb25zdCByZXNwb25zZSA9ICh5aWVsZCBjb21tb25fMS5yZXF1ZXN0LmdldChgL2NvbGxlY3Rpb25zL2NyZWF0ZWQvJHtwcm9wcy5wYWdlSWR9YCwge1xuICAgICAgICAgICAgYXV0aDogdHJ1ZSxcbiAgICAgICAgfSkpO1xuICAgICAgICBzZXRTdGF0dXMoXCJub3JtYWxcIik7XG4gICAgICAgIHNldENvbGxlY3Rpb25zKHJlc3BvbnNlLmNvbGxlY3Rpb25zKTtcbiAgICB9KTtcbiAgICAvLyBTZW5kIGEgcmVxdWVzdCB0byB1c2VyIHRvIGNyZWF0ZSBhIG5ldyBjb2xsZWN0aW9uXG4gICAgY29uc3QgY3JlYXRlQ29sbGVjdGlvbiA9ICgpID0+IF9fYXdhaXRlcih2b2lkIDAsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xuICAgICAgICBzZXRTdGF0dXMoXCJsb2FkaW5nXCIpO1xuICAgICAgICBjb25zdCByZXNwb25zZSA9ICh5aWVsZCBjb21tb25fMS5yZXF1ZXN0LnBvc3QoYC9jb2xsZWN0aW9uYCwgeyBuYW1lIH0sIHtcbiAgICAgICAgICAgIGF1dGg6IHRydWUsXG4gICAgICAgIH0pKTtcbiAgICAgICAgLy8gQWRkIHRoZSBwYWdlIGluIHRoZSBuZXdseSBjcmVhdGVkIGNvbGxlY3Rpb25cbiAgICAgICAgdG9nZ2xlUGFnZUluQ0wocmVzcG9uc2UuY29sbGVjdGlvbi5faWQpO1xuICAgIH0pO1xuICAgIC8vIFNlbmQgdGhlIHJlcXVlc3QgdG8gc2VydmVyIHRvIGVpdGhlciByZW1vdmUgdGhlIHBhZ2UgZnJvbSBzZWxlY3RlZCBjb2xsZWN0aW9uXG4gICAgLy8gb3IgYWRkIGl0IHRvIHRoYXQgY29sbGVjdGlvblxuICAgIGNvbnN0IHRvZ2dsZVBhZ2VJbkNMID0gKGNsSWQpID0+IF9fYXdhaXRlcih2b2lkIDAsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xuICAgICAgICBzZXRTdGF0dXMoXCJsb2FkaW5nXCIpO1xuICAgICAgICBjb25zdCByZXNwb25zZSA9ICh5aWVsZCBjb21tb25fMS5yZXF1ZXN0LnBvc3QoYC9jb2xsZWN0aW9uL2FkZC1yZW1vdmUvJHtjbElkfS8ke3Byb3BzLnBhZ2VJZH1gLCBudWxsLCB7XG4gICAgICAgICAgICBhdXRoOiB0cnVlLFxuICAgICAgICB9KSk7XG4gICAgICAgIC8vIFNob3cgYSByaWdodCBtZXNzYWdlIHRvIHVzZXIgYmFzZWQgb24gc2VydmVyIHJlc3BvbnNlXG4gICAgICAgIGlmIChyZXNwb25zZS5zZWxlY3RlZClcbiAgICAgICAgICAgICgwLCBjb21tb25fMS5hbGVydCkoYFBhZ2Ugc3VjY2Vzc2Z1bGx5IGFkZGVkIHRvICR7cmVzcG9uc2UuY2xOYW1lfSBjb2xsZWN0aW9uLmAsIFwic3VjY2Vzc1wiKTtcbiAgICAgICAgZWxzZVxuICAgICAgICAgICAgKDAsIGNvbW1vbl8xLmFsZXJ0KShgUGFnZSBzdWNjZXNzZnVsbHkgcmVtb3ZlZCBmcm9tICR7cmVzcG9uc2UuY2xOYW1lfSBjb2xsZWN0aW9uLmAsIFwic3VjY2Vzc1wiKTtcbiAgICAgICAgLy8gRmV0Y2ggY29sbGVjdGlvbnMgYWdhaW5cbiAgICAgICAgZmV0Y2hDb2xsZWN0aW9ucygpO1xuICAgIH0pO1xuICAgIHJldHVybiAoKDAsIGpzeF9ydW50aW1lXzEuanN4cykoTW9kYWxfMS5kZWZhdWx0LCBPYmplY3QuYXNzaWduKHsgaGVhZGVyOiBcIlBhZ2UgaW4gQ29sbGVjdGlvbnM6XCIsIHR5cGU6IFwic21hbGxcIiwgb3BlbjogcHJvcHMub3Blbiwgb25DbG9zZTogKCkgPT4ge1xuICAgICAgICAgICAgcHJvcHMub25DbG9zZSgpO1xuICAgICAgICAgICAgc2V0TmFtZShcIlwiKTtcbiAgICAgICAgICAgIHNldFN0YXR1cyhcIm5vcm1hbFwiKTtcbiAgICAgICAgICAgIHNldENvbGxlY3Rpb25zKFtdKTtcbiAgICAgICAgfSB9LCB7IGNoaWxkcmVuOiBbIWNvbGxlY3Rpb25zIHx8XG4gICAgICAgICAgICAgICAgKHN0YXR1cyA9PT0gXCJsb2FkaW5nXCIgJiYgKCgwLCBqc3hfcnVudGltZV8xLmpzeCkoXCJkaXZcIiwgT2JqZWN0LmFzc2lnbih7IGNsYXNzTmFtZTogXCJjZW50ZXItY29udGVudCBtYXJnaW4tdG9wLTVweFwiIH0sIHsgY2hpbGRyZW46ICgwLCBqc3hfcnVudGltZV8xLmpzeCkoTG9hZGluZ18xLmRlZmF1bHQsIHt9KSB9KSkpKSwgY29sbGVjdGlvbnMgJiYgc3RhdHVzID09PSBcIm5vcm1hbFwiICYmICgoMCwganN4X3J1bnRpbWVfMS5qc3gpKFwiZGl2XCIsIE9iamVjdC5hc3NpZ24oeyBjbGFzc05hbWU6IFwibWFyZ2luLWJvdHRvbS0wOFwiIH0sIHsgY2hpbGRyZW46ICgwLCBqc3hfcnVudGltZV8xLmpzeHMpKEJ1dHRvbl8xLmRlZmF1bHQsIE9iamVjdC5hc3NpZ24oeyBjb2xvcjogXCJibHVlXCIsIG91dGxpbmVkOiB0cnVlLCBibG9jazogdHJ1ZSwgb25DbGljazogKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2V0U3RhdHVzKFwiY3JlYXRpbmdcIik7XG4gICAgICAgICAgICAgICAgICAgIH0sIHR5cGU6IFwiYnV0dG9uXCIgfSwgeyBjaGlsZHJlbjogW1wiQ3JlYXRlIGEgbmV3IGNvbGxlY3Rpb25cIiwgKDAsIGpzeF9ydW50aW1lXzEuanN4KShcImlcIiwgeyBjbGFzc05hbWU6IFwiZmEgZmEtcGx1cy1jaXJjbGUgYnV0dG9uX19pY29uLXJpZ2h0XCIsIFwiYXJpYS1oaWRkZW5cIjogXCJ0cnVlXCIgfSldIH0pKSB9KSkpLCBzdGF0dXMgPT09IFwiY3JlYXRpbmdcIiAmJiAoKDAsIGpzeF9ydW50aW1lXzEuanN4KShcImRpdlwiLCBPYmplY3QuYXNzaWduKHsgY2xhc3NOYW1lOiBcInJpZ2h0LWNvbnRlbnRcIiB9LCB7IGNoaWxkcmVuOiAoMCwganN4X3J1bnRpbWVfMS5qc3hzKShcImZvcm1cIiwgT2JqZWN0LmFzc2lnbih7IG9uU3VibWl0OiAoZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgY3JlYXRlQ29sbGVjdGlvbigpO1xuICAgICAgICAgICAgICAgICAgICB9IH0sIHsgY2hpbGRyZW46IFsoMCwganN4X3J1bnRpbWVfMS5qc3gpKFwiZGl2XCIsIE9iamVjdC5hc3NpZ24oeyBjbGFzc05hbWU6IFwibWFyZ2luLWJvdHRvbS0xXCIgfSwgeyBjaGlsZHJlbjogKDAsIGpzeF9ydW50aW1lXzEuanN4KShJbnB1dF8xLmRlZmF1bHQsIHsgdHlwZTogXCJ0ZXh0XCIsIGxpbmVkOiB0cnVlLCBhdXRvQ29tcGxldGU6IFwib2ZmXCIsIGF1dG9Gb2N1czogdHJ1ZSwgcGxhY2Vob2xkZXI6IFwiQ29sbGVjdGlvbiBuYW1lXCIsIHJlcXVpcmVkOiB0cnVlLCB2YWx1ZTogbmFtZSwgb25DaGFuZ2U6ICh2YWx1ZSkgPT4gc2V0TmFtZSh2YWx1ZSkgfSkgfSkpLCAoMCwganN4X3J1bnRpbWVfMS5qc3hzKShcImRpdlwiLCBPYmplY3QuYXNzaWduKHsgY2xhc3NOYW1lOiBcImEtMTlcIiB9LCB7IGNoaWxkcmVuOiBbKDAsIGpzeF9ydW50aW1lXzEuanN4KShCdXR0b25fMS5kZWZhdWx0LCBPYmplY3QuYXNzaWduKHsgY29sb3I6IFwiZGVmYXVsdFwiLCBzaXplOiBcInNtYWxsXCIsIG9uQ2xpY2s6ICgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXROYW1lKFwiXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldFN0YXR1cyhcIm5vcm1hbFwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sIHR5cGU6IFwiYnV0dG9uXCIgfSwgeyBjaGlsZHJlbjogXCJDYW5jZWxcIiB9KSksICgwLCBqc3hfcnVudGltZV8xLmpzeCkoQnV0dG9uXzEuZGVmYXVsdCwgT2JqZWN0LmFzc2lnbih7IGNvbG9yOiBcImJsdWVcIiwgb3V0bGluZWQ6IHRydWUsIHNpemU6IFwic21hbGxcIiwgdHlwZTogXCJzdWJtaXRcIiB9LCB7IGNoaWxkcmVuOiBcIkNyZWF0ZSBhbmQgYWRkXCIgfSkpXSB9KSldIH0pKSB9KSkpLCBjb2xsZWN0aW9ucyAmJlxuICAgICAgICAgICAgICAgIHN0YXR1cyA9PT0gXCJub3JtYWxcIiAmJlxuICAgICAgICAgICAgICAgIGNvbGxlY3Rpb25zLm1hcCgoY2wpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuICgoMCwganN4X3J1bnRpbWVfMS5qc3hzKShcImFcIiwgT2JqZWN0LmFzc2lnbih7IGhyZWY6IFwiamF2YXNjcmlwdDp2b2lkKDApXCIsIGNsYXNzTmFtZTogYHNlbGVjdGFibGUtaXRlbSAke2NsLnNlbGVjdGVkID8gXCJzZWxlY3RhYmxlLWl0ZW0tLXNlbGVjdGVkXCIgOiBcIlwifWAsIG9uQ2xpY2s6ICgpID0+IHRvZ2dsZVBhZ2VJbkNMKGNsLmlkKSB9LCB7IGNoaWxkcmVuOiBbY2wubmFtZSwgXCIgXCIsICgwLCBqc3hfcnVudGltZV8xLmpzeCkoXCJzcGFuXCIsIHt9KV0gfSksIGNsLmlkKSk7XG4gICAgICAgICAgICAgICAgfSksICFjb2xsZWN0aW9ucy5sZW5ndGggJiYgc3RhdHVzID09PSBcIm5vcm1hbFwiICYmICgoMCwganN4X3J1bnRpbWVfMS5qc3hzKShcImRpdlwiLCBPYmplY3QuYXNzaWduKHsgY2xhc3NOYW1lOiBcInUtdGV4dC1jZW50ZXIgbWFyZ2luLXRvcC0xLTVcIiB9LCB7IGNoaWxkcmVuOiBbKDAsIGpzeF9ydW50aW1lXzEuanN4KShcImVtXCIsIHsgY2hpbGRyZW46IFwiQ3VycmVudGx5IHlvdSBkb24ndCBoYXZlIGFueSBjb2xsZWN0aW9ucy5cIiB9KSwgKDAsIGpzeF9ydW50aW1lXzEuanN4KShcImVtXCIsIHsgY2hpbGRyZW46IFwiQ3JlYXRlIG9uZSBieSBjbGlja2luZyBvbiB0aGUgYnV0dG9uIGFib3ZlLlwiIH0pXSB9KSkpXSB9KSkpO1xufTtcbmV4cG9ydHMuZGVmYXVsdCA9IENvbGxlY3Rpb25Nb2RhbDtcbiIsIlwidXNlIHN0cmljdFwiO1xudmFyIF9faW1wb3J0RGVmYXVsdCA9ICh0aGlzICYmIHRoaXMuX19pbXBvcnREZWZhdWx0KSB8fCBmdW5jdGlvbiAobW9kKSB7XG4gICAgcmV0dXJuIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpID8gbW9kIDogeyBcImRlZmF1bHRcIjogbW9kIH07XG59O1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuY29uc3QganN4X3J1bnRpbWVfMSA9IHJlcXVpcmUoXCJyZWFjdC9qc3gtcnVudGltZVwiKTtcbmNvbnN0IEJ1dHRvbl8xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCIuLi9mb3Jtcy9CdXR0b25cIikpO1xuY29uc3QgQ29uZmlybU1vZGFsID0gKHsgaGVhZGVyLCBtZXNzYWdlLCBvcGVuLCBvbkNhbmNlbCwgb25Db25maXJtLCBidG5OYW1lLCBjaGlsZHJlbiwgfSkgPT4ge1xuICAgIGNvbnN0IGNsYXNzTmFtZSA9IG9wZW4gPyBcIm1kbCBtZGwtY29uZlwiIDogXCJtZGwgbWRsLWNvbmYgZGlzcGxheS1ub25lXCI7XG4gICAgcmV0dXJuICgoMCwganN4X3J1bnRpbWVfMS5qc3gpKFwiZGl2XCIsIE9iamVjdC5hc3NpZ24oeyBjbGFzc05hbWU6IGNsYXNzTmFtZSB9LCB7IGNoaWxkcmVuOiAoMCwganN4X3J1bnRpbWVfMS5qc3hzKShcImRpdlwiLCBPYmplY3QuYXNzaWduKHsgY2xhc3NOYW1lOiBcIm1kbF9fY29udGVudFwiIH0sIHsgY2hpbGRyZW46IFsoMCwganN4X3J1bnRpbWVfMS5qc3hzKShcImRpdlwiLCBPYmplY3QuYXNzaWduKHsgY2xhc3NOYW1lOiBcIm1kbF9faGVhZGVyXCIgfSwgeyBjaGlsZHJlbjogWygwLCBqc3hfcnVudGltZV8xLmpzeCkoXCJzcGFuXCIsIE9iamVjdC5hc3NpZ24oeyBjbGFzc05hbWU6IFwibWRsX19jbG9zZVwiLCBvbkNsaWNrOiBvbkNhbmNlbCB9LCB7IGNoaWxkcmVuOiBcIlxcdTAwRDdcIiB9KSksICgwLCBqc3hfcnVudGltZV8xLmpzeCkoXCJoM1wiLCBPYmplY3QuYXNzaWduKHsgY2xhc3NOYW1lOiBcImhlYWRpbmctdGVydGlhcnlcIiB9LCB7IGNoaWxkcmVuOiBoZWFkZXIgfSkpXSB9KSksICgwLCBqc3hfcnVudGltZV8xLmpzeHMpKFwiZGl2XCIsIE9iamVjdC5hc3NpZ24oeyBjbGFzc05hbWU6IFwibWRsX19ib2R5XCIgfSwgeyBjaGlsZHJlbjogW21lc3NhZ2UgfHwgY2hpbGRyZW4sICgwLCBqc3hfcnVudGltZV8xLmpzeCkoXCJmb3JtXCIsIE9iamVjdC5hc3NpZ24oeyBvblN1Ym1pdDogKGUpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNvbmZpcm0oKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IH0sIHsgY2hpbGRyZW46ICgwLCBqc3hfcnVudGltZV8xLmpzeCkoXCJkaXZcIiwgT2JqZWN0LmFzc2lnbih7IGNsYXNzTmFtZTogXCJ1LWZsZXgtdGV4dC1yaWdodFwiIH0sIHsgY2hpbGRyZW46ICgwLCBqc3hfcnVudGltZV8xLmpzeCkoQnV0dG9uXzEuZGVmYXVsdCwgT2JqZWN0LmFzc2lnbih7IHR5cGU6IFwic3VibWl0XCIsIGNvbG9yOiBcInJlZFwiLCByb3VuZGVkOiB0cnVlIH0sIHsgY2hpbGRyZW46IGJ0bk5hbWUgPyBidG5OYW1lIDogXCJSZW1vdmVcIiB9KSkgfSkpIH0pKV0gfSkpXSB9KSkgfSkpKTtcbn07XG5leHBvcnRzLmRlZmF1bHQgPSBDb25maXJtTW9kYWw7XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmNvbnN0IGpzeF9ydW50aW1lXzEgPSByZXF1aXJlKFwicmVhY3QvanN4LXJ1bnRpbWVcIik7XG5jb25zdCByZWFjdF9kb21fMSA9IHJlcXVpcmUoXCJyZWFjdC1kb21cIik7XG5jb25zdCBNb2RhbCA9ICh7IGNoaWxkcmVuLCBoZWFkZXIsIG9wZW4sIHR5cGUsIG9uQ2xvc2UgfSkgPT4ge1xuICAgIGxldCBjbGFzc05hbWUgPSBvcGVuID8gXCJtZGxcIiA6IFwibWRsIGRpc3BsYXktbm9uZVwiO1xuICAgIGlmICh0eXBlID09PSBcInNtYWxsXCIpXG4gICAgICAgIGNsYXNzTmFtZSArPSBcIiBtZGwtc21cIjtcbiAgICByZXR1cm4gKDAsIHJlYWN0X2RvbV8xLmNyZWF0ZVBvcnRhbCkoKDAsIGpzeF9ydW50aW1lXzEuanN4KShcImRpdlwiLCBPYmplY3QuYXNzaWduKHsgY2xhc3NOYW1lOiBjbGFzc05hbWUgfSwgeyBjaGlsZHJlbjogKDAsIGpzeF9ydW50aW1lXzEuanN4cykoXCJkaXZcIiwgT2JqZWN0LmFzc2lnbih7IGNsYXNzTmFtZTogXCJtZGxfX2NvbnRlbnRcIiB9LCB7IGNoaWxkcmVuOiBbKDAsIGpzeF9ydW50aW1lXzEuanN4cykoXCJkaXZcIiwgT2JqZWN0LmFzc2lnbih7IGNsYXNzTmFtZTogXCJtZGxfX2hlYWRlclwiIH0sIHsgY2hpbGRyZW46IFsoMCwganN4X3J1bnRpbWVfMS5qc3gpKFwic3BhblwiLCBPYmplY3QuYXNzaWduKHsgY2xhc3NOYW1lOiBcIm1kbF9fY2xvc2VcIiwgb25DbGljazogb25DbG9zZSB9LCB7IGNoaWxkcmVuOiBcIlxcdTAwRDdcIiB9KSksICgwLCBqc3hfcnVudGltZV8xLmpzeCkoXCJoM1wiLCBPYmplY3QuYXNzaWduKHsgY2xhc3NOYW1lOiBcImhlYWRpbmctdGVydGlhcnlcIiB9LCB7IGNoaWxkcmVuOiBoZWFkZXIgfSkpXSB9KSksICgwLCBqc3hfcnVudGltZV8xLmpzeCkoXCJkaXZcIiwgT2JqZWN0LmFzc2lnbih7IGNsYXNzTmFtZTogXCJtZGxfX2JvZHlcIiB9LCB7IGNoaWxkcmVuOiBjaGlsZHJlbiB9KSldIH0pKSB9KSksIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjbW9kYWwtcm9vdFwiKSk7XG59O1xuZXhwb3J0cy5kZWZhdWx0ID0gTW9kYWw7XG4iLCJcInVzZSBzdHJpY3RcIjtcbnZhciBfX2F3YWl0ZXIgPSAodGhpcyAmJiB0aGlzLl9fYXdhaXRlcikgfHwgZnVuY3Rpb24gKHRoaXNBcmcsIF9hcmd1bWVudHMsIFAsIGdlbmVyYXRvcikge1xuICAgIGZ1bmN0aW9uIGFkb3B0KHZhbHVlKSB7IHJldHVybiB2YWx1ZSBpbnN0YW5jZW9mIFAgPyB2YWx1ZSA6IG5ldyBQKGZ1bmN0aW9uIChyZXNvbHZlKSB7IHJlc29sdmUodmFsdWUpOyB9KTsgfVxuICAgIHJldHVybiBuZXcgKFAgfHwgKFAgPSBQcm9taXNlKSkoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICBmdW5jdGlvbiBmdWxmaWxsZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3IubmV4dCh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XG4gICAgICAgIGZ1bmN0aW9uIHJlamVjdGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yW1widGhyb3dcIl0odmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxuICAgICAgICBmdW5jdGlvbiBzdGVwKHJlc3VsdCkgeyByZXN1bHQuZG9uZSA/IHJlc29sdmUocmVzdWx0LnZhbHVlKSA6IGFkb3B0KHJlc3VsdC52YWx1ZSkudGhlbihmdWxmaWxsZWQsIHJlamVjdGVkKTsgfVxuICAgICAgICBzdGVwKChnZW5lcmF0b3IgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSkpLm5leHQoKSk7XG4gICAgfSk7XG59O1xudmFyIF9faW1wb3J0RGVmYXVsdCA9ICh0aGlzICYmIHRoaXMuX19pbXBvcnREZWZhdWx0KSB8fCBmdW5jdGlvbiAobW9kKSB7XG4gICAgcmV0dXJuIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpID8gbW9kIDogeyBcImRlZmF1bHRcIjogbW9kIH07XG59O1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuY29uc3QganN4X3J1bnRpbWVfMSA9IHJlcXVpcmUoXCJyZWFjdC9qc3gtcnVudGltZVwiKTtcbmNvbnN0IHJlYWN0XzEgPSByZXF1aXJlKFwicmVhY3RcIik7XG5jb25zdCBjb21tb25fMSA9IHJlcXVpcmUoXCJAcGFnc2VyL2NvbW1vblwiKTtcbmNvbnN0IE1vZGFsXzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcIi4vTW9kYWxcIikpO1xuY29uc3QgTG9hZGluZ18xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCIuLi9Mb2FkaW5nXCIpKTtcbmNvbnN0IElucHV0RmlsZV8xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCIuLi9mb3Jtcy9JbnB1dEZpbGVcIikpO1xuY29uc3QgQnV0dG9uXzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcIi4uL2Zvcm1zL0J1dHRvblwiKSk7XG5jb25zdCBVcGxvYWRQaG90byA9IChwcm9wcykgPT4ge1xuICAgIGNvbnN0IFtzdGF0dXMsIHNldFN0YXR1c10gPSAoMCwgcmVhY3RfMS51c2VTdGF0ZSkoXCJjbGVhblwiKTtcbiAgICBjb25zdCBbZXJyb3IsIHNldEVycm9yXSA9ICgwLCByZWFjdF8xLnVzZVN0YXRlKShcIlwiKTtcbiAgICBjb25zdCBbaW5wdXRMYWJlbE5hbWUsIHNldElucHV0TGFiZWxOYW1lXSA9ICgwLCByZWFjdF8xLnVzZVN0YXRlKShcIlVwbG9hZCBhIEZpbGVcIik7XG4gICAgLy8gV2hlbiB1c2VyIHNlbGVjdHMgYSBmaWxlXG4gICAgY29uc3Qgb25GaWxlSW5wdXRDaGFuZ2UgPSAoZSwgZmlsZU5hbWUpID0+IHtcbiAgICAgICAgc2V0U3RhdHVzKFwib25GaWxlXCIpO1xuICAgICAgICBzZXRFcnJvcihcIlwiKTtcbiAgICAgICAgc2V0SW5wdXRMYWJlbE5hbWUoZmlsZU5hbWUpO1xuICAgIH07XG4gICAgLy8gV2hlbiB1c2VyIGNsaWNrcyBvbiB1cGxvYWQgYnV0dG9uXG4gICAgY29uc3Qgb25VcGxvYWRDbGljayA9ICgpID0+IF9fYXdhaXRlcih2b2lkIDAsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xuICAgICAgICBzZXRTdGF0dXMoXCJsb2FkaW5nXCIpO1xuICAgICAgICAvLyBQcmVwYXJlIHRoZSBmb3JtIGRhdGEgdG8gYmUgc2VudCB0byBzZXJ2ZXJcbiAgICAgICAgbGV0IGZvcm1EYXRhID0gbmV3IEZvcm1EYXRhKCk7XG4gICAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgICAgY29uc3QgZmlsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZmlsZS1pbnB1dFwiKS5maWxlc1swXTtcbiAgICAgICAgZm9ybURhdGEuYXBwZW5kKFwiZmlsZVwiLCBmaWxlKTtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIHlpZWxkIGNvbW1vbl8xLnJlcXVlc3QucG9zdChwcm9wcy51cmwsIGZvcm1EYXRhLCB7XG4gICAgICAgICAgICAgICAgYXV0aDogdHJ1ZSxcbiAgICAgICAgICAgICAgICBjb250ZW50VHlwZTogXCJtdWx0aXBhcnQvZm9ybS1kYXRhXCIsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHByb3BzLm9uQ2xvc2UoKTtcbiAgICAgICAgICAgIC8vIENhbGwgdGhlIHN1Y2Nlc3MgZnVuY3Rpb24gc28gdGhhdCB0aGUgcGFyZW50IGNvbXBvbmVudCB3aWxsIGdldCBub3RpZmllZFxuICAgICAgICAgICAgcHJvcHMuc3VjY2VzcygpO1xuICAgICAgICAgICAgcmVzZXQoKTtcbiAgICAgICAgfVxuICAgICAgICBjYXRjaCAoZSkge1xuICAgICAgICAgICAgbGV0IG1zZyA9IFwiVGhlcmUgd2FzIGFuIGVycm9yIHdpdGggdXBsb2FkaW5nIHlvdXIgcGhvdG8uXCI7XG4gICAgICAgICAgICBpZiAoZS5tZXNzYWdlKVxuICAgICAgICAgICAgICAgIG1zZyA9IGUubWVzc2FnZTtcbiAgICAgICAgICAgICgwLCBjb21tb25fMS5hbGVydCkobXNnLCBcImVycm9yXCIpO1xuICAgICAgICAgICAgcmVzZXQoKTtcbiAgICAgICAgICAgIHByb3BzLm9uQ2xvc2UoKTtcbiAgICAgICAgfVxuICAgIH0pO1xuICAgIC8vIFJlc2V0IHRoZSBwaG90byBjaG9vc2luZ1xuICAgIGNvbnN0IHJlc2V0ID0gKCkgPT4ge1xuICAgICAgICBzZXRTdGF0dXMoXCJjbGVhblwiKTtcbiAgICAgICAgc2V0SW5wdXRMYWJlbE5hbWUoXCJVcGxvYWQgYSBGaWxlXCIpO1xuICAgIH07XG4gICAgcmV0dXJuICgoMCwganN4X3J1bnRpbWVfMS5qc3hzKShNb2RhbF8xLmRlZmF1bHQsIE9iamVjdC5hc3NpZ24oeyBoZWFkZXI6IHByb3BzLmhlYWRlciwgb3BlbjogcHJvcHMub3Blbiwgb25DbG9zZTogKCkgPT4ge1xuICAgICAgICAgICAgcHJvcHMub25DbG9zZSgpO1xuICAgICAgICAgICAgc2V0RXJyb3IoXCJcIik7XG4gICAgICAgIH0gfSwgeyBjaGlsZHJlbjogWygwLCBqc3hfcnVudGltZV8xLmpzeCkoXCJwXCIsIE9iamVjdC5hc3NpZ24oeyBjbGFzc05hbWU6IFwiXCIgfSwgeyBjaGlsZHJlbjogcHJvcHMudGV4dCB9KSksICgwLCBqc3hfcnVudGltZV8xLmpzeCkoXCJwXCIsIE9iamVjdC5hc3NpZ24oeyBjbGFzc05hbWU6IFwiaW1hZ2VfX3VwbG9hZC0tZXJyb3JcIiB9LCB7IGNoaWxkcmVuOiBlcnJvciB9KSksICgwLCBqc3hfcnVudGltZV8xLmpzeCkoSW5wdXRGaWxlXzEuZGVmYXVsdCwgeyBhZGRDbGFzczogc3RhdHVzID09PSBcImNsZWFuXCIgPyBcIm1hcmdpbi1ib3R0b20tMlwiIDogXCJtYXJnaW4tYm90dG9tLTBcIiwgbGFiZWw6IGlucHV0TGFiZWxOYW1lLCBpZDogXCJmaWxlLWlucHV0XCIsIHNpemU6IHByb3BzLnNpemUsIG9uQ2hhbmdlOiBvbkZpbGVJbnB1dENoYW5nZSwgb25DbGljazogKGUpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgc2V0RXJyb3IoXCJcIik7XG4gICAgICAgICAgICAgICAgfSwgb25FcnJvcjogKGVycm9yKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHNldEVycm9yKGVycm9yKTtcbiAgICAgICAgICAgICAgICAgICAgc2V0SW5wdXRMYWJlbE5hbWUoXCJVcGxvYWQgYSBGaWxlXCIpO1xuICAgICAgICAgICAgICAgICAgICByZXNldCgpO1xuICAgICAgICAgICAgICAgIH0gfSksICgwLCBqc3hfcnVudGltZV8xLmpzeHMpKFwiZGl2XCIsIE9iamVjdC5hc3NpZ24oeyBjbGFzc05hbWU6IGBpbWFnZV9fdXBsb2FkLS1vcHRpb25zICR7c3RhdHVzID09PSBcIm9uRmlsZVwiID8gXCJcIiA6IFwiZGlzcGxheS1ub25lXCJ9YCB9LCB7IGNoaWxkcmVuOiBbKDAsIGpzeF9ydW50aW1lXzEuanN4KShCdXR0b25fMS5kZWZhdWx0LCBPYmplY3QuYXNzaWduKHsgY29sb3I6IFwiYmx1ZVwiLCByb3VuZGVkOiB0cnVlLCBvdXRsaW5lZDogdHJ1ZSwgb25DbGljazogKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlc2V0KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvcHMub25DbG9zZSgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSB9LCB7IGNoaWxkcmVuOiBcIkNhbmNlbFwiIH0pKSwgKDAsIGpzeF9ydW50aW1lXzEuanN4KShCdXR0b25fMS5kZWZhdWx0LCBPYmplY3QuYXNzaWduKHsgY29sb3I6IFwiYmx1ZVwiLCByb3VuZGVkOiB0cnVlLCBvbkNsaWNrOiAoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25VcGxvYWRDbGljaygpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSB9LCB7IGNoaWxkcmVuOiBcIlVwbG9hZFwiIH0pKV0gfSkpLCBzdGF0dXMgPT09IFwibG9hZGluZ1wiICYmICgoMCwganN4X3J1bnRpbWVfMS5qc3gpKFwiZGl2XCIsIE9iamVjdC5hc3NpZ24oeyBjbGFzc05hbWU6IFwiaW1hZ2VfX3VwbG9hZC0tbG9hZGluZyBtYXJnaW4tdG9wLTFcIiB9LCB7IGNoaWxkcmVuOiAoMCwganN4X3J1bnRpbWVfMS5qc3gpKFwiZGl2XCIsIE9iamVjdC5hc3NpZ24oeyBjbGFzc05hbWU6IFwiY2VudGVyLWNvbnRlbnRcIiB9LCB7IGNoaWxkcmVuOiAoMCwganN4X3J1bnRpbWVfMS5qc3gpKExvYWRpbmdfMS5kZWZhdWx0LCB7fSkgfSkpIH0pKSldIH0pKSk7XG59O1xuZXhwb3J0cy5kZWZhdWx0ID0gVXBsb2FkUGhvdG87XG4iLCJcInVzZSBzdHJpY3RcIjtcbnZhciBfX2F3YWl0ZXIgPSAodGhpcyAmJiB0aGlzLl9fYXdhaXRlcikgfHwgZnVuY3Rpb24gKHRoaXNBcmcsIF9hcmd1bWVudHMsIFAsIGdlbmVyYXRvcikge1xuICAgIGZ1bmN0aW9uIGFkb3B0KHZhbHVlKSB7IHJldHVybiB2YWx1ZSBpbnN0YW5jZW9mIFAgPyB2YWx1ZSA6IG5ldyBQKGZ1bmN0aW9uIChyZXNvbHZlKSB7IHJlc29sdmUodmFsdWUpOyB9KTsgfVxuICAgIHJldHVybiBuZXcgKFAgfHwgKFAgPSBQcm9taXNlKSkoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICBmdW5jdGlvbiBmdWxmaWxsZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3IubmV4dCh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XG4gICAgICAgIGZ1bmN0aW9uIHJlamVjdGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yW1widGhyb3dcIl0odmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxuICAgICAgICBmdW5jdGlvbiBzdGVwKHJlc3VsdCkgeyByZXN1bHQuZG9uZSA/IHJlc29sdmUocmVzdWx0LnZhbHVlKSA6IGFkb3B0KHJlc3VsdC52YWx1ZSkudGhlbihmdWxmaWxsZWQsIHJlamVjdGVkKTsgfVxuICAgICAgICBzdGVwKChnZW5lcmF0b3IgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSkpLm5leHQoKSk7XG4gICAgfSk7XG59O1xudmFyIF9faW1wb3J0RGVmYXVsdCA9ICh0aGlzICYmIHRoaXMuX19pbXBvcnREZWZhdWx0KSB8fCBmdW5jdGlvbiAobW9kKSB7XG4gICAgcmV0dXJuIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpID8gbW9kIDogeyBcImRlZmF1bHRcIjogbW9kIH07XG59O1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuY29uc3QganN4X3J1bnRpbWVfMSA9IHJlcXVpcmUoXCJyZWFjdC9qc3gtcnVudGltZVwiKTtcbmNvbnN0IHJlYWN0XzEgPSByZXF1aXJlKFwicmVhY3RcIik7XG5jb25zdCBjb21tb25fMSA9IHJlcXVpcmUoXCJAcGFnc2VyL2NvbW1vblwiKTtcbmNvbnN0IE1vZGFsXzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcIi4vTW9kYWxcIikpO1xuY29uc3QgTG9hZGluZ18xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCIuLi9Mb2FkaW5nXCIpKTtcbmNvbnN0IElucHV0RmlsZV8xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCIuLi9mb3Jtcy9JbnB1dEZpbGVcIikpO1xuY29uc3QgQnV0dG9uXzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcIi4uL2Zvcm1zL0J1dHRvblwiKSk7XG5jb25zdCBVcGxvYWRQaG90byA9IChwcm9wcykgPT4ge1xuICAgIGNvbnN0IFtzdGF0dXMsIHNldFN0YXR1c10gPSAoMCwgcmVhY3RfMS51c2VTdGF0ZSkoXCJjbGVhblwiKTtcbiAgICBjb25zdCBbZXJyb3IsIHNldEVycm9yXSA9ICgwLCByZWFjdF8xLnVzZVN0YXRlKShcIlwiKTtcbiAgICBjb25zdCBbY3JvcERhdGEsIHNldENyb3BEYXRhXSA9ICgwLCByZWFjdF8xLnVzZVN0YXRlKSh7IHg6IDAsIHk6IDAsIHdpZHRoOiAwLCBoZWlnaHQ6IDAgfSk7XG4gICAgKDAsIHJlYWN0XzEudXNlRWZmZWN0KSgoKSA9PiB7XG4gICAgICAgIC8vIExvYWQgQ3Jvb3BlciBqYXZhc2NyaXB0IGZpbGVcbiAgICAgICAgY29uc3Qgc2NyaXB0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNjcmlwdFwiKTtcbiAgICAgICAgc2NyaXB0LnNldEF0dHJpYnV0ZShcInNyY1wiLCBcIi9jcm9wcGVyLm1pbi5qc1wiKTtcbiAgICAgICAgZG9jdW1lbnQuaGVhZC5hcHBlbmRDaGlsZChzY3JpcHQpO1xuICAgICAgICAvLyBMb2FkIENyb29wZXIgY3NzIGZpbGVcbiAgICAgICAgY29uc3Qgc3R5bGVzaGVldCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaW5rXCIpO1xuICAgICAgICBzdHlsZXNoZWV0LmhyZWYgPSBcIi9jcm9wcGVyLm1pbi5jc3NcIjtcbiAgICAgICAgc3R5bGVzaGVldC50eXBlID0gXCJ0ZXh0L2Nzc1wiO1xuICAgICAgICBzdHlsZXNoZWV0LnJlbCA9IFwic3R5bGVzaGVldFwiO1xuICAgICAgICBkb2N1bWVudC5oZWFkLmFwcGVuZENoaWxkKHN0eWxlc2hlZXQpO1xuICAgIH0sIFtdKTtcbiAgICAvLyBXaGVuIHVzZXIgc2VsZWN0cyBhIHBob3RvXG4gICAgY29uc3Qgb25GaWxlSW5wdXRDaGFuZ2UgPSAoZSwgZmlsZU5hbWUsIGltZ1VybCkgPT4ge1xuICAgICAgICBzZXRFcnJvcihcIlwiKTtcbiAgICAgICAgc2V0U3RhdHVzKFwiY3JvcHBpbmdcIik7XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjaW1nLXByZXZpZXdcIikuc3JjID1cbiAgICAgICAgICAgIGltZ1VybCB8fCBcIlwiO1xuICAgICAgICBjcm9wKHByb3BzLmFzcGVjdFJhdGlvLCBwcm9wcy5taW5XaWR0aCwgcHJvcHMubWluSGVpZ2h0KTtcbiAgICB9O1xuICAgIC8vIFdoZW4gdXNlciBjbGlja3Mgb24gdXBsb2FkIGJ1dHRvblxuICAgIGNvbnN0IG9uVXBsb2FkQ2xpY2sgPSAoKSA9PiBfX2F3YWl0ZXIodm9pZCAwLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcbiAgICAgICAgc2V0U3RhdHVzKFwibG9hZGluZ1wiKTtcbiAgICAgICAgLy8gUHJlcGFyZSB0aGUgZm9ybSBkYXRhIHRvIGJlIHNlbnQgdG8gc2VydmVyXG4gICAgICAgIGxldCBmb3JtRGF0YSA9IG5ldyBGb3JtRGF0YSgpO1xuICAgICAgICAvLyBAdHMtaWdub3JlXG4gICAgICAgIGZvcm1EYXRhLmFwcGVuZChcImltZ1wiLCBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2ltYWdlLWlucHV0XCIpLmZpbGVzWzBdKTtcbiAgICAgICAgZm9ybURhdGEuc2V0KFwiY3JvcERhdGFcIiwgYHsgXCJ4XCI6IFwiJHtjcm9wRGF0YS54fVwiLCBcInlcIjogXCIke2Nyb3BEYXRhLnl9XCIsIFwid2lkdGhcIjogXCIke2Nyb3BEYXRhLndpZHRofVwiLCBcImhlaWdodFwiOiBcIiR7Y3JvcERhdGEuaGVpZ2h0fVwiIH1gKTtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGNvbnN0IHJlc3BvbnNlID0gKHlpZWxkIGNvbW1vbl8xLnJlcXVlc3QucHV0KHByb3BzLnVybCwgZm9ybURhdGEsIHtcbiAgICAgICAgICAgICAgICBhdXRoOiB0cnVlLFxuICAgICAgICAgICAgICAgIGNvbnRlbnRUeXBlOiBcIm11bHRpcGFydC9mb3JtLWRhdGFcIixcbiAgICAgICAgICAgIH0pKTtcbiAgICAgICAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjcmVzZXQtYnRuXCIpLmNsaWNrKCk7XG4gICAgICAgICAgICBwcm9wcy5vbkNsb3NlKCk7XG4gICAgICAgICAgICAvLyBDYWxsIHRoZSBzdWNjZXNzIGZ1bmN0aW9uIHNvIHRoYXQgdGhlIHBhcmVudCBjb21wb25lbnQgd2lsbCBnZXQgbm90aWZpZWRcbiAgICAgICAgICAgIHByb3BzLnN1Y2Nlc3MocmVzcG9uc2UuaW1hZ2UpO1xuICAgICAgICAgICAgKDAsIGNvbW1vbl8xLmFsZXJ0KShcIlBob3RvIHdhcyB1cGxvYWRlZCBzdWNjZXNzZnVsbHkuXCIsIFwic3VjY2Vzc1wiKTtcbiAgICAgICAgICAgIHNldFN0YXR1cyhcImNsZWFuXCIpO1xuICAgICAgICB9XG4gICAgICAgIGNhdGNoIChlKSB7XG4gICAgICAgICAgICAvLyBAdHMtaWdub3JlXG4gICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3Jlc2V0LWJ0blwiKS5jbGljaygpO1xuICAgICAgICAgICAgc2V0U3RhdHVzKFwiY2xlYW5cIik7XG4gICAgICAgICAgICAoMCwgY29tbW9uXzEuYWxlcnQpKFwiVGhlcmUgd2FzIGFuIGVycm9yIHdpdGggdXBsb2FkaW5nIHlvdXIgcGhvdG8uXCIsIFwiZXJyb3JcIik7XG4gICAgICAgICAgICBwcm9wcy5vbkNsb3NlKCk7XG4gICAgICAgIH1cbiAgICB9KTtcbiAgICAvLyBSZXNldCB0aGUgcGhvdG8gY2hvb3NpbmdcbiAgICBjb25zdCByZXNldCA9ICgpID0+IHtcbiAgICAgICAgc2V0U3RhdHVzKFwiY2xlYW5cIik7XG4gICAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNpbWctcHJldmlld1wiKS5zcmMgPSBcIlwiO1xuICAgIH07XG4gICAgLy8gU3RhcnQgdGhlIGNyb3BwZXIgb24gdGhlIGltYWdlIHByZXZpZXdcbiAgICBjb25zdCBjcm9wID0gKGFzcGVjdCwgbWluVywgbWluSCkgPT4ge1xuICAgICAgICBjb25zdCBpbWFnZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiaW1nLXByZXZpZXdcIik7XG4gICAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgICAgY29uc3QgY3JvcHBlciA9IG5ldyBDcm9wcGVyKGltYWdlLCB7XG4gICAgICAgICAgICBhc3BlY3RSYXRpbzogYXNwZWN0LFxuICAgICAgICAgICAgdmlld01vZGU6IDMsXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiBmYWxzZSxcbiAgICAgICAgICAgIG1vZGFsOiBmYWxzZSxcbiAgICAgICAgICAgIHpvb21hYmxlOiBmYWxzZSxcbiAgICAgICAgICAgIG1pbkNyb3BCb3hXaWR0aDogbWluVyxcbiAgICAgICAgICAgIG1pbkNyb3BCb3hIZWlnaHQ6IG1pbkgsXG4gICAgICAgICAgICBjcm9wZW5kOiAoKSA9PiB7XG4gICAgICAgICAgICAgICAgc2V0Q3JvcERhdGEoe1xuICAgICAgICAgICAgICAgICAgICB4OiBjcm9wcGVyLmdldERhdGEoKS54LFxuICAgICAgICAgICAgICAgICAgICB5OiBjcm9wcGVyLmdldERhdGEoKS55LFxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogY3JvcHBlci5nZXREYXRhKCkud2lkdGgsXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogY3JvcHBlci5nZXREYXRhKCkuaGVpZ2h0LFxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHJlYWR5OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgY29uc3Qgc2VsZiA9IHRoaXM7XG4gICAgICAgICAgICAgICAgLy8gQHRzLWlnbm9yZVxuICAgICAgICAgICAgICAgIGRvY3VtZW50XG4gICAgICAgICAgICAgICAgICAgIC5xdWVyeVNlbGVjdG9yKFwiI3Jlc2V0LWJ0blwiKVxuICAgICAgICAgICAgICAgICAgICAuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHNlbGYuY3JvcHBlcikge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZi5jcm9wcGVyLmRlc3Ryb3koKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIHNldENyb3BEYXRhKHtcbiAgICAgICAgICAgICAgICAgICAgeDogY3JvcHBlci5nZXREYXRhKCkueCxcbiAgICAgICAgICAgICAgICAgICAgeTogY3JvcHBlci5nZXREYXRhKCkueSxcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IGNyb3BwZXIuZ2V0RGF0YSgpLndpZHRoLFxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IGNyb3BwZXIuZ2V0RGF0YSgpLmhlaWdodCxcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgcmV0dXJuICgoMCwganN4X3J1bnRpbWVfMS5qc3hzKShNb2RhbF8xLmRlZmF1bHQsIE9iamVjdC5hc3NpZ24oeyBoZWFkZXI6IHByb3BzLmhlYWRlciwgb3BlbjogcHJvcHMub3Blbiwgb25DbG9zZTogKCkgPT4ge1xuICAgICAgICAgICAgcHJvcHMub25DbG9zZSgpO1xuICAgICAgICAgICAgc2V0RXJyb3IoXCJcIik7XG4gICAgICAgIH0gfSwgeyBjaGlsZHJlbjogWygwLCBqc3hfcnVudGltZV8xLmpzeCkoXCJwXCIsIE9iamVjdC5hc3NpZ24oeyBjbGFzc05hbWU6IFwiaW1hZ2VfX3VwbG9hZC0tdGV4dFwiIH0sIHsgY2hpbGRyZW46IHByb3BzLnRleHQgfSkpLCAoMCwganN4X3J1bnRpbWVfMS5qc3gpKFwicFwiLCBPYmplY3QuYXNzaWduKHsgY2xhc3NOYW1lOiBcImltYWdlX191cGxvYWQtLWVycm9yXCIgfSwgeyBjaGlsZHJlbjogZXJyb3IgfSkpLCAoMCwganN4X3J1bnRpbWVfMS5qc3gpKFwiZW1cIiwgT2JqZWN0LmFzc2lnbih7IGNsYXNzTmFtZTogYGltYWdlX191cGxvYWQtLWNyb3AtbXNnICR7cHJvcHMuY3JvcE1zZyAmJiBzdGF0dXMgPT09IFwiY3JvcHBpbmdcIiA/IFwiXCIgOiBcImRpc3BsYXktbm9uZVwifWAgfSwgeyBjaGlsZHJlbjogcHJvcHMuY3JvcE1zZyB9KSksICgwLCBqc3hfcnVudGltZV8xLmpzeCkoSW5wdXRGaWxlXzEuZGVmYXVsdCwgeyBhZGRDbGFzczogXCJtYXJnaW4tYm90dG9tLTJcIiwgaGlkZTogc3RhdHVzICE9PSBcImNsZWFuXCIsIGxhYmVsOiBwcm9wcy5pbnB1dExhYmVsTmFtZSwgaWQ6IFwiaW1hZ2UtaW5wdXRcIiwgc2l6ZTogcHJvcHMuc2l6ZSwgdHlwZTogXCJpbWFnZVwiLCBtaW5XaWR0aDogcHJvcHMubWluV2lkdGgsIG1pbkhlaWdodDogcHJvcHMubWluSGVpZ2h0LCBvbkNoYW5nZTogb25GaWxlSW5wdXRDaGFuZ2UsIG9uQ2xpY2s6IChlKSA9PiB7IH0sIG9uRXJyb3I6IChlcnJvcikgPT4ge1xuICAgICAgICAgICAgICAgICAgICBzZXRFcnJvcihlcnJvcik7XG4gICAgICAgICAgICAgICAgICAgIHJlc2V0KCk7XG4gICAgICAgICAgICAgICAgfSB9KSwgKDAsIGpzeF9ydW50aW1lXzEuanN4KShcImRpdlwiLCB7IGNoaWxkcmVuOiAoMCwganN4X3J1bnRpbWVfMS5qc3gpKFwiaW1nXCIsIHsgaWQ6IFwiaW1nLXByZXZpZXdcIiB9KSB9KSwgKDAsIGpzeF9ydW50aW1lXzEuanN4cykoXCJkaXZcIiwgT2JqZWN0LmFzc2lnbih7IGNsYXNzTmFtZTogYGltYWdlX191cGxvYWQtLW9wdGlvbnMgbWFyZ2luLXRvcC0yICR7c3RhdHVzID09PSBcImNyb3BwaW5nXCIgPyBcIlwiIDogXCJkaXNwbGF5LW5vbmVcIn1gIH0sIHsgY2hpbGRyZW46IFsoMCwganN4X3J1bnRpbWVfMS5qc3gpKEJ1dHRvbl8xLmRlZmF1bHQsIE9iamVjdC5hc3NpZ24oeyBpZDogXCJyZXNldC1idG5cIiwgcm91bmRlZDogdHJ1ZSwgY29sb3I6IFwiYmx1ZVwiLCBvdXRsaW5lZDogdHJ1ZSwgb25DbGljazogKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlc2V0KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9IH0sIHsgY2hpbGRyZW46IFwiQ2hvb3NlIGFub3RoZXIgcGhvdG9cIiB9KSksICgwLCBqc3hfcnVudGltZV8xLmpzeCkoQnV0dG9uXzEuZGVmYXVsdCwgT2JqZWN0LmFzc2lnbih7IGNvbG9yOiBcImJsdWVcIiwgcm91bmRlZDogdHJ1ZSwgb25DbGljazogKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uVXBsb2FkQ2xpY2soKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gfSwgeyBjaGlsZHJlbjogXCJVcGxvYWRcIiB9KSldIH0pKSwgc3RhdHVzID09PSBcImxvYWRpbmdcIiAmJiAoKDAsIGpzeF9ydW50aW1lXzEuanN4KShcImRpdlwiLCBPYmplY3QuYXNzaWduKHsgY2xhc3NOYW1lOiBcImltYWdlX191cGxvYWQtLWxvYWRpbmcgbWFyZ2luLXRvcC0yXCIgfSwgeyBjaGlsZHJlbjogKDAsIGpzeF9ydW50aW1lXzEuanN4KShcImRpdlwiLCBPYmplY3QuYXNzaWduKHsgY2xhc3NOYW1lOiBcImNlbnRlci1jb250ZW50XCIgfSwgeyBjaGlsZHJlbjogKDAsIGpzeF9ydW50aW1lXzEuanN4KShMb2FkaW5nXzEuZGVmYXVsdCwge30pIH0pKSB9KSkpXSB9KSkpO1xufTtcbmV4cG9ydHMuZGVmYXVsdCA9IFVwbG9hZFBob3RvO1xuIl0sIm5hbWVzIjpbIk9iamVjdCIsImRlZmluZVByb3BlcnR5IiwiZXhwb3J0cyIsInZhbHVlIiwiQWxlcnQiLCJqc3hfcnVudGltZV8xIiwicmVxdWlyZSIsInByb3BzIiwiY2xhc3NOYW1lIiwibWVzc2FnZSIsInR5cGUiLCJhZGRpdGlvbmFsQ2xhc3NlcyIsImpzeHMiLCJhc3NpZ24iLCJjaGlsZHJlbiIsImpzeCIsIm9uQ2xpY2siLCJvbkNsb3NlIiwiSW5saW5lTG9hZGluZyIsImVsIiwiY29sb3IiLCJjZW50ZXIiLCJkZWZhdWx0IiwiTG9hZGluZyIsIl9faW1wb3J0RGVmYXVsdCIsIm1vZCIsIl9fZXNNb2R1bGUiLCJJbmxpbmVMb2FkaW5nXzEiLCJCdXR0b24iLCJzaXplIiwib3V0bGluZWQiLCJyb3VuZGVkIiwiYmxvY2siLCJsb2FkaW5nQ29sb3IiLCJpZCIsInN0eWxlIiwiZGlzYWJsZWQiLCJsb2FkaW5nIiwiRHJvcGRvd24iLCJudW0iLCJvbkNoYW5nZSIsInNlbGVjdCIsImJ1dHRvbiIsIml0ZW1zIiwibWFwIiwiaHJlZiIsInJlYWN0XzEiLCJJbnB1dCIsIl9hIiwic2V0VmFsdWUiLCJ1c2VTdGF0ZSIsInRvU3RyaW5nIiwiaW5wdXQiLCJ1c2VSZWYiLCJ1c2VFZmZlY3QiLCJzdWNjZXNzIiwiZXJyb3IiLCJzaG91bGREaXZpZGVOdW1iZXJCeVRocmVlIiwicmVxdWlyZWRXaXRoRXJyb3IiLCJsaW5lZCIsIkZyYWdtZW50IiwicGxhY2Vob2xkZXIiLCJjdXJyZW50IiwiZm9jdXMiLCJsYWJlbCIsImhlbHAiLCJpbm5lcklucHV0TGFiZWwiLCJyZWYiLCJlbGVtIiwibmV4dFNpYmxpbmciLCJwYWRkaW5nTGVmdCIsImNsaWVudFdpZHRoIiwiTnVtYmVyIiwidG9Mb2NhbGVTdHJpbmciLCJyZXF1aXJlZCIsImF1dG9Gb2N1cyIsImF1dG9Db21wbGV0ZSIsIm1heExlbmd0aCIsImV2ZW50IiwidGFyZ2V0IiwicmVwbGFjZSIsIm9uQmx1ciIsImxlbmd0aCIsImNvbW1vbl8xIiwiSW5wdXRGaWxlIiwiYWRkQ2xhc3MiLCJoaWRlIiwibWluV2lkdGgiLCJtaW5IZWlnaHQiLCJvbkVycm9yIiwiaHRtbEZvciIsImUiLCJpbnB1dEVsIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwiaW5wdXRGaWxlcyIsImZpbGVzIiwiaW5wdXRGaWxlIiwiZmlsZVNpemUiLCJmaWxlTmFtZSIsIm5hbWUiLCJmaWxlVHlwZSIsImFsZXJ0IiwiRXJyb3IiLCJpbWdVcmwiLCJVUkwiLCJjcmVhdGVPYmplY3RVUkwiLCJpbWFnZSIsIkltYWdlIiwib25sb2FkIiwiaGVpZ2h0Iiwid2lkdGgiLCJzcmMiLCJUZXh0YXJlYSIsInJvd3MiLCJVcGxvYWRQaG90byIsIlVwbG9hZEF0dGFjaEZpbGUiLCJBZGRUb0NvbGxlY3Rpb24iLCJNb2RhbCIsIkNvbmZpcm1Nb2RhbCIsIkxvYWRpbmdfMSIsIkFsZXJ0XzEiLCJlbnVtZXJhYmxlIiwiZ2V0IiwiTW9kYWxfMSIsIkNvbmZpcm1Nb2RhbF8xIiwiSW5wdXRfMSIsIkJ1dHRvbl8xIiwiVGV4dGFyZWFfMSIsIklucHV0RmlsZV8xIiwiRHJvcGRvd25fMSIsIkFkZFRvQ29sbGVjdGlvbl8xIiwiVXBsb2FkQXR0YWNoRmlsZV8xIiwiVXBsb2FkUGhvdG9fMSIsIl9fYXdhaXRlciIsInRoaXNBcmciLCJfYXJndW1lbnRzIiwiUCIsImdlbmVyYXRvciIsImFkb3B0IiwicmVzb2x2ZSIsIlByb21pc2UiLCJyZWplY3QiLCJmdWxmaWxsZWQiLCJzdGVwIiwibmV4dCIsInJlamVjdGVkIiwicmVzdWx0IiwiZG9uZSIsInRoZW4iLCJhcHBseSIsIkNvbGxlY3Rpb25Nb2RhbCIsInNldE5hbWUiLCJzdGF0dXMiLCJzZXRTdGF0dXMiLCJjb2xsZWN0aW9ucyIsInNldENvbGxlY3Rpb25zIiwib3BlbiIsImZldGNoQ29sbGVjdGlvbnMiLCJyZXNwb25zZSIsInJlcXVlc3QiLCJwYWdlSWQiLCJhdXRoIiwiY3JlYXRlQ29sbGVjdGlvbiIsInBvc3QiLCJ0b2dnbGVQYWdlSW5DTCIsImNvbGxlY3Rpb24iLCJfaWQiLCJjbElkIiwic2VsZWN0ZWQiLCJjbE5hbWUiLCJoZWFkZXIiLCJvblN1Ym1pdCIsInByZXZlbnREZWZhdWx0IiwiY2wiLCJvbkNhbmNlbCIsIm9uQ29uZmlybSIsImJ0bk5hbWUiLCJyZWFjdF9kb21fMSIsImNyZWF0ZVBvcnRhbCIsInNldEVycm9yIiwiaW5wdXRMYWJlbE5hbWUiLCJzZXRJbnB1dExhYmVsTmFtZSIsIm9uRmlsZUlucHV0Q2hhbmdlIiwib25VcGxvYWRDbGljayIsImZvcm1EYXRhIiwiRm9ybURhdGEiLCJmaWxlIiwiYXBwZW5kIiwidXJsIiwiY29udGVudFR5cGUiLCJyZXNldCIsIm1zZyIsInRleHQiLCJjcm9wRGF0YSIsInNldENyb3BEYXRhIiwieCIsInkiLCJzY3JpcHQiLCJjcmVhdGVFbGVtZW50Iiwic2V0QXR0cmlidXRlIiwiaGVhZCIsImFwcGVuZENoaWxkIiwic3R5bGVzaGVldCIsInJlbCIsImNyb3AiLCJhc3BlY3RSYXRpbyIsInNldCIsInB1dCIsImNsaWNrIiwiYXNwZWN0IiwibWluVyIsIm1pbkgiLCJnZXRFbGVtZW50QnlJZCIsImNyb3BwZXIiLCJDcm9wcGVyIiwidmlld01vZGUiLCJiYWNrZ3JvdW5kIiwibW9kYWwiLCJ6b29tYWJsZSIsIm1pbkNyb3BCb3hXaWR0aCIsIm1pbkNyb3BCb3hIZWlnaHQiLCJjcm9wZW5kIiwiZ2V0RGF0YSIsInJlYWR5Iiwic2VsZiIsImFkZEV2ZW50TGlzdGVuZXIiLCJkZXN0cm95IiwiY3JvcE1zZyJdLCJzb3VyY2VSb290IjoiIn0=