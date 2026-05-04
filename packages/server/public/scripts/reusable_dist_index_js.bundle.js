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

    togglePageInCL(response.collection.id);
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

    let formData = new FormData();
    formData.set("cropData", `{ "x": "${cropData.x}", "y": "${cropData.y}", "width": "${cropData.width}", "height": "${cropData.height}" }`); // @ts-ignore

    formData.append("img", document.querySelector("#image-input").files[0]);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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bGVydC5qcyIsIndlYnBhY2s6Ly9AcGFnc2VyL3dlYi8uLi9yZXVzYWJsZS9kaXN0L0lubGluZUxvYWRpbmcuanMiLCJ3ZWJwYWNrOi8vQHBhZ3Nlci93ZWIvLi4vcmV1c2FibGUvZGlzdC9Mb2FkaW5nLmpzIiwid2VicGFjazovL0BwYWdzZXIvd2ViLy4uL3JldXNhYmxlL2Rpc3QvZm9ybXMvQnV0dG9uLmpzIiwid2VicGFjazovL0BwYWdzZXIvd2ViLy4uL3JldXNhYmxlL2Rpc3QvZm9ybXMvRHJvcGRvd24uanMiLCJ3ZWJwYWNrOi8vQHBhZ3Nlci93ZWIvLi4vcmV1c2FibGUvZGlzdC9mb3Jtcy9JbnB1dC5qcyIsIndlYnBhY2s6Ly9AcGFnc2VyL3dlYi8uLi9yZXVzYWJsZS9kaXN0L2Zvcm1zL0lucHV0RmlsZS5qcyIsIndlYnBhY2s6Ly9AcGFnc2VyL3dlYi8uLi9yZXVzYWJsZS9kaXN0L2Zvcm1zL1RleHRhcmVhLmpzIiwid2VicGFjazovL0BwYWdzZXIvd2ViLy4uL3JldXNhYmxlL2Rpc3QvaW5kZXguanMiLCJ3ZWJwYWNrOi8vQHBhZ3Nlci93ZWIvLi4vcmV1c2FibGUvZGlzdC9tb2RhbHMvQWRkVG9Db2xsZWN0aW9uLmpzIiwid2VicGFjazovL0BwYWdzZXIvd2ViLy4uL3JldXNhYmxlL2Rpc3QvbW9kYWxzL0NvbmZpcm1Nb2RhbC5qcyIsIndlYnBhY2s6Ly9AcGFnc2VyL3dlYi8uLi9yZXVzYWJsZS9kaXN0L21vZGFscy9Nb2RhbC5qcyIsIndlYnBhY2s6Ly9AcGFnc2VyL3dlYi8uLi9yZXVzYWJsZS9kaXN0L21vZGFscy9VcGxvYWRBdHRhY2hGaWxlLmpzIiwid2VicGFjazovL0BwYWdzZXIvd2ViLy4uL3JldXNhYmxlL2Rpc3QvbW9kYWxzL1VwbG9hZFBob3RvLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5BbGVydCA9IHZvaWQgMDtcbmNvbnN0IGpzeF9ydW50aW1lXzEgPSByZXF1aXJlKFwicmVhY3QvanN4LXJ1bnRpbWVcIik7XG5jb25zdCBBbGVydCA9IChwcm9wcykgPT4ge1xuICAgIGxldCBjbGFzc05hbWUgPSBcImRpc3BsYXktbm9uZVwiO1xuICAgIGlmIChwcm9wcy5tZXNzYWdlKSB7XG4gICAgICAgIGlmIChwcm9wcy50eXBlID09PSBcInN1Y2Nlc3NcIikge1xuICAgICAgICAgICAgY2xhc3NOYW1lID0gXCJhbGVydCBhbGVydC0tc3VjY2Vzc1wiO1xuICAgICAgICB9XG4gICAgICAgIGlmIChwcm9wcy50eXBlID09PSBcImVycm9yXCIpIHtcbiAgICAgICAgICAgIGNsYXNzTmFtZSA9IFwiYWxlcnQgYWxlcnQtLWVycm9yXCI7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHByb3BzLnR5cGUgPT09IFwibm9ybWFsbFwiKSB7XG4gICAgICAgICAgICBjbGFzc05hbWUgPSBcImFsZXJ0IGFsZXJ0LS1ub3JtYWxsXCI7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHByb3BzLmFkZGl0aW9uYWxDbGFzc2VzKSB7XG4gICAgICAgICAgICBjbGFzc05hbWUgKz0gYCAke3Byb3BzLmFkZGl0aW9uYWxDbGFzc2VzfWA7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuICgoMCwganN4X3J1bnRpbWVfMS5qc3hzKShcImRpdlwiLCBPYmplY3QuYXNzaWduKHsgY2xhc3NOYW1lOiBjbGFzc05hbWUgfSwgeyBjaGlsZHJlbjogWygwLCBqc3hfcnVudGltZV8xLmpzeCkoXCJzcGFuXCIsIHsgY2hpbGRyZW46IHByb3BzLm1lc3NhZ2UgfSksICgwLCBqc3hfcnVudGltZV8xLmpzeCkoXCJidXR0b25cIiwgT2JqZWN0LmFzc2lnbih7IG9uQ2xpY2s6IHByb3BzLm9uQ2xvc2UsIHR5cGU6IFwiYnV0dG9uXCIsIGNsYXNzTmFtZTogXCJhbGVydF9fZGlzbWlzc1wiIH0sIHsgY2hpbGRyZW46ICgwLCBqc3hfcnVudGltZV8xLmpzeCkoXCJpXCIsIHsgY2xhc3NOYW1lOiBcImZhIGZhLXJlbW92ZVwiIH0pIH0pKV0gfSkpKTtcbn07XG5leHBvcnRzLkFsZXJ0ID0gQWxlcnQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmNvbnN0IGpzeF9ydW50aW1lXzEgPSByZXF1aXJlKFwicmVhY3QvanN4LXJ1bnRpbWVcIik7XG5jb25zdCBJbmxpbmVMb2FkaW5nID0gKHByb3BzKSA9PiB7XG4gICAgbGV0IGNsYXNzTmFtZSA9IFwibGRzLWVsbGlwc2lzIFwiO1xuICAgIGlmIChwcm9wcy5jbGFzc05hbWUpXG4gICAgICAgIGNsYXNzTmFtZSArPSBwcm9wcy5jbGFzc05hbWU7XG4gICAgY29uc3QgZWwgPSAoKDAsIGpzeF9ydW50aW1lXzEuanN4cykoXCJkaXZcIiwgT2JqZWN0LmFzc2lnbih7IGNsYXNzTmFtZTogY2xhc3NOYW1lIH0sIHsgY2hpbGRyZW46IFsoMCwganN4X3J1bnRpbWVfMS5qc3gpKFwiZGl2XCIsIHsgY2xhc3NOYW1lOiBgbGRzLWVsbGlwc2lzLS0ke3Byb3BzLmNvbG9yfWAgfSksICgwLCBqc3hfcnVudGltZV8xLmpzeCkoXCJkaXZcIiwgeyBjbGFzc05hbWU6IGBsZHMtZWxsaXBzaXMtLSR7cHJvcHMuY29sb3J9YCB9KSwgKDAsIGpzeF9ydW50aW1lXzEuanN4KShcImRpdlwiLCB7IGNsYXNzTmFtZTogYGxkcy1lbGxpcHNpcy0tJHtwcm9wcy5jb2xvcn1gIH0pLCAoMCwganN4X3J1bnRpbWVfMS5qc3gpKFwiZGl2XCIsIHsgY2xhc3NOYW1lOiBgbGRzLWVsbGlwc2lzLS0ke3Byb3BzLmNvbG9yfWAgfSldIH0pKSk7XG4gICAgaWYgKHByb3BzLmNlbnRlcikge1xuICAgICAgICByZXR1cm4gKDAsIGpzeF9ydW50aW1lXzEuanN4KShcImRpdlwiLCBPYmplY3QuYXNzaWduKHsgY2xhc3NOYW1lOiBcInUtdGV4dC1jZW50ZXJcIiB9LCB7IGNoaWxkcmVuOiBlbCB9KSk7XG4gICAgfVxuICAgIGVsc2VcbiAgICAgICAgcmV0dXJuIGVsO1xufTtcbmV4cG9ydHMuZGVmYXVsdCA9IElubGluZUxvYWRpbmc7XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmNvbnN0IGpzeF9ydW50aW1lXzEgPSByZXF1aXJlKFwicmVhY3QvanN4LXJ1bnRpbWVcIik7XG5jb25zdCBMb2FkaW5nID0gKHsgY2xhc3NOYW1lIH0pID0+IHtcbiAgICByZXR1cm4gKCgwLCBqc3hfcnVudGltZV8xLmpzeCkoXCJkaXZcIiwgT2JqZWN0LmFzc2lnbih7IGNsYXNzTmFtZTogYGxkcy1jc3Mgbmctc2NvcGUgJHtjbGFzc05hbWV9YCB9LCB7IGNoaWxkcmVuOiAoMCwganN4X3J1bnRpbWVfMS5qc3hzKShcImRpdlwiLCBPYmplY3QuYXNzaWduKHsgY2xhc3NOYW1lOiBcImxkcy1zcGlubmVyXCIgfSwgeyBjaGlsZHJlbjogWygwLCBqc3hfcnVudGltZV8xLmpzeCkoXCJkaXZcIiwge30pLCAoMCwganN4X3J1bnRpbWVfMS5qc3gpKFwiZGl2XCIsIHt9KSwgKDAsIGpzeF9ydW50aW1lXzEuanN4KShcImRpdlwiLCB7fSksICgwLCBqc3hfcnVudGltZV8xLmpzeCkoXCJkaXZcIiwge30pLCAoMCwganN4X3J1bnRpbWVfMS5qc3gpKFwiZGl2XCIsIHt9KSwgKDAsIGpzeF9ydW50aW1lXzEuanN4KShcImRpdlwiLCB7fSksICgwLCBqc3hfcnVudGltZV8xLmpzeCkoXCJkaXZcIiwge30pLCAoMCwganN4X3J1bnRpbWVfMS5qc3gpKFwiZGl2XCIsIHt9KSwgKDAsIGpzeF9ydW50aW1lXzEuanN4KShcImRpdlwiLCB7fSksICgwLCBqc3hfcnVudGltZV8xLmpzeCkoXCJkaXZcIiwge30pLCAoMCwganN4X3J1bnRpbWVfMS5qc3gpKFwiZGl2XCIsIHt9KSwgKDAsIGpzeF9ydW50aW1lXzEuanN4KShcImRpdlwiLCB7fSldIH0pKSB9KSkpO1xufTtcbmV4cG9ydHMuZGVmYXVsdCA9IExvYWRpbmc7XG4iLCJcInVzZSBzdHJpY3RcIjtcbnZhciBfX2ltcG9ydERlZmF1bHQgPSAodGhpcyAmJiB0aGlzLl9faW1wb3J0RGVmYXVsdCkgfHwgZnVuY3Rpb24gKG1vZCkge1xuICAgIHJldHVybiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSA/IG1vZCA6IHsgXCJkZWZhdWx0XCI6IG1vZCB9O1xufTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmNvbnN0IGpzeF9ydW50aW1lXzEgPSByZXF1aXJlKFwicmVhY3QvanN4LXJ1bnRpbWVcIik7XG5jb25zdCBJbmxpbmVMb2FkaW5nXzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcIi4uL0lubGluZUxvYWRpbmdcIikpO1xuY29uc3QgQnV0dG9uID0gKHByb3BzKSA9PiB7XG4gICAgbGV0IGNsYXNzTmFtZSA9IFwiYnV0dG9uXCI7XG4gICAgc3dpdGNoIChwcm9wcy5zaXplKSB7XG4gICAgICAgIGNhc2UgXCJiaWdcIjpcbiAgICAgICAgICAgIGNsYXNzTmFtZSArPSBcIiBidXR0b24tYmlnXCI7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSBcInNtYWxsXCI6XG4gICAgICAgICAgICBjbGFzc05hbWUgKz0gXCIgYnV0dG9uLXNtYWxsXCI7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSBcImV4dHJhU21hbGxcIjpcbiAgICAgICAgICAgIGNsYXNzTmFtZSArPSBcIiBidXR0b24tZXh0cmEtc21hbGxcIjtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgIH1cbiAgICBzd2l0Y2ggKHByb3BzLmNvbG9yKSB7XG4gICAgICAgIGNhc2UgXCJkZWZhdWx0XCI6XG4gICAgICAgICAgICBpZiAocHJvcHMub3V0bGluZWQpIHtcbiAgICAgICAgICAgICAgICBjbGFzc05hbWUgKz0gXCIgYnV0dG9uLWRlZmF1bHQtb3V0bGluZWRcIjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIGNsYXNzTmFtZSArPSBcIiBidXR0b24tZGVmYXVsdFwiO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgXCJibHVlXCI6XG4gICAgICAgICAgICBpZiAocHJvcHMub3V0bGluZWQpIHtcbiAgICAgICAgICAgICAgICBjbGFzc05hbWUgKz0gXCIgYnV0dG9uLWJsdWUtb3V0bGluZWRcIjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIGNsYXNzTmFtZSArPSBcIiBidXR0b24tYmx1ZVwiO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgXCJyZWRcIjpcbiAgICAgICAgICAgIGlmIChwcm9wcy5vdXRsaW5lZCkge1xuICAgICAgICAgICAgICAgIGNsYXNzTmFtZSArPSBcIiBidXR0b24tcmVkLW91dGxpbmVkXCI7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBjbGFzc05hbWUgKz0gXCIgYnV0dG9uLXJlZFwiO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgXCJncmVlblwiOlxuICAgICAgICAgICAgaWYgKHByb3BzLm91dGxpbmVkKSB7XG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lICs9IFwiIGJ1dHRvbi1ncmVlbi1vdXRsaW5lZFwiO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lICs9IFwiIGJ1dHRvbi1ncmVlblwiO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgXCJncmF5XCI6XG4gICAgICAgICAgICBpZiAocHJvcHMub3V0bGluZWQpIHtcbiAgICAgICAgICAgICAgICBjbGFzc05hbWUgKz0gXCIgYnV0dG9uLWdyYXktb3V0bGluZWRcIjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIGNsYXNzTmFtZSArPSBcIiBidXR0b24tZ3JheVwiO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICBpZiAocHJvcHMub3V0bGluZWQpIHtcbiAgICAgICAgICAgICAgICBjbGFzc05hbWUgKz0gXCIgYnV0dG9uLWRlZmF1bHQtb3V0bGluZWRcIjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIGNsYXNzTmFtZSArPSBcIiBidXR0b24tZGVmYXVsdFwiO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgYnJlYWs7XG4gICAgfVxuICAgIGlmIChwcm9wcy5yb3VuZGVkKSB7XG4gICAgICAgIGNsYXNzTmFtZSArPSBcIiBidXR0b24tcm91bmRlZFwiO1xuICAgIH1cbiAgICBpZiAocHJvcHMuYmxvY2spIHtcbiAgICAgICAgY2xhc3NOYW1lICs9IFwiIGJ1dHRvbi1ibG9ja1wiO1xuICAgIH1cbiAgICBjbGFzc05hbWUgKz0gXCIgXCIgKyBwcm9wcy5jbGFzc05hbWU7XG4gICAgbGV0IGxvYWRpbmdDb2xvcjtcbiAgICBpZiAocHJvcHMuY29sb3IgPT09IFwiYmx1ZVwiKVxuICAgICAgICBsb2FkaW5nQ29sb3IgPSBcImJsdWVcIjtcbiAgICBpZiAoIXByb3BzLm91dGxpbmVkKVxuICAgICAgICBsb2FkaW5nQ29sb3IgPSBcImxpZ2h0XCI7XG4gICAgcmV0dXJuICgoMCwganN4X3J1bnRpbWVfMS5qc3hzKShcImJ1dHRvblwiLCBPYmplY3QuYXNzaWduKHsgaWQ6IHByb3BzLmlkLCBzdHlsZTogcHJvcHMuc3R5bGUsIG9uQ2xpY2s6IHByb3BzLm9uQ2xpY2ssIGNsYXNzTmFtZTogY2xhc3NOYW1lLCB0eXBlOiBwcm9wcy50eXBlID8gcHJvcHMudHlwZSA6IFwiYnV0dG9uXCIsIGRpc2FibGVkOiBwcm9wcy5sb2FkaW5nID8gdHJ1ZSA6IHByb3BzLmRpc2FibGVkIH0sIHsgY2hpbGRyZW46IFtwcm9wcy5jaGlsZHJlbiwgcHJvcHMubG9hZGluZyAmJiAoKDAsIGpzeF9ydW50aW1lXzEuanN4KShJbmxpbmVMb2FkaW5nXzEuZGVmYXVsdCwgeyBjbGFzc05hbWU6IFwidS1tYXJnaW4tbGVmdC0wM1wiLCBjb2xvcjogbG9hZGluZ0NvbG9yIH0pKV0gfSkpKTtcbn07XG5leHBvcnRzLmRlZmF1bHQgPSBCdXR0b247XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmNvbnN0IGpzeF9ydW50aW1lXzEgPSByZXF1aXJlKFwicmVhY3QvanN4LXJ1bnRpbWVcIik7XG5jb25zdCBEcm9wZG93biA9ICh7IG51bSwgY2hpbGRyZW4sIG9uQ2hhbmdlLCBzZWxlY3QsIHR5cGUsIGNsYXNzTmFtZSA9IFwiYnRuLXRleHRcIiwgfSkgPT4ge1xuICAgIC8vIE1ha2UgdGhlIGJ1dHRvbiBiYXNlZCBvbiBwYXNzZWQgY2hpbGRyZW5cbiAgICBsZXQgYnV0dG9uID0gKCgwLCBqc3hfcnVudGltZV8xLmpzeHMpKFwiYnV0dG9uXCIsIE9iamVjdC5hc3NpZ24oeyBjbGFzc05hbWU6IGNsYXNzTmFtZSwgb25DbGljazogKCkgPT4geyB9LCBcImRhdGEtcm9sZVwiOiBcImRyb3Bkb3duXCIsIFwiZGF0YS1kcm9wZG93blwiOiBudW0gfSwgeyBjaGlsZHJlbjogW2NoaWxkcmVuWzBdLnByb3BzLmNoaWxkcmVuLCAoMCwganN4X3J1bnRpbWVfMS5qc3gpKFwiaVwiLCB7IGNsYXNzTmFtZTogY2hpbGRyZW5bMF0ucHJvcHNbXCJkYXRhLWljb24tY2xhc3NcIl0sIFwiYXJpYS1oaWRkZW5cIjogXCJ0cnVlXCIsIFwiZGF0YS1yb2xlXCI6IFwiZHJvcGRvd25cIiwgXCJkYXRhLWRyb3Bkb3duXCI6IG51bSB9KV0gfSkpKTtcbiAgICAvLyBNYWtlIGxpc3QgaXRlbXMgYmFzZWQgb24gcGFzc2VkIGNoaWxkcmVuXG4gICAgbGV0IGl0ZW1zID0gY2hpbGRyZW4ubWFwKCh7IHByb3BzIH0pID0+IHtcbiAgICAgICAgaWYgKHByb3BzW1wiZGF0YS1yb2xlLW5hbWVcIl0gPT09IFwiaXRlbVwiKSB7XG4gICAgICAgICAgICBsZXQgY2xhc3NOYW1lID0gc2VsZWN0ID09PSBwcm9wc1tcImRhdGEtbmFtZVwiXVxuICAgICAgICAgICAgICAgID8gXCJkcm9wZG93bl9faXRlbSBkcm9wZG93bl9faXRlbS0tYWN0aXZlXCJcbiAgICAgICAgICAgICAgICA6IFwiZHJvcGRvd25fX2l0ZW1cIjtcbiAgICAgICAgICAgIHJldHVybiAoKDAsIGpzeF9ydW50aW1lXzEuanN4KShcImFcIiwgT2JqZWN0LmFzc2lnbih7IGNsYXNzTmFtZTogY2xhc3NOYW1lLCBcImRhdGEtcm9sZVwiOiBcImRyb3Bkb3duXCIsIFwiZGF0YS1kcm9wZG93blwiOiBudW0sIGhyZWY6IFwiamF2YXNjcmlwdDp2b2lkKDApXCIsIG9uQ2xpY2s6ICgpID0+IG9uQ2hhbmdlKHByb3BzW1wiZGF0YS1uYW1lXCJdKSB9LCB7IGNoaWxkcmVuOiBwcm9wcy5jaGlsZHJlbiB9KSwgcHJvcHNbXCJkYXRhLW5hbWVcIl0pKTtcbiAgICAgICAgfVxuICAgIH0pO1xuICAgIHJldHVybiAoKDAsIGpzeF9ydW50aW1lXzEuanN4cykoXCJkaXZcIiwgT2JqZWN0LmFzc2lnbih7IGNsYXNzTmFtZTogYGRyb3Bkb3duICR7dHlwZSA9PT0gXCJtaW5pXCIgJiYgXCJkcm9wZG93bi1taW5pXCJ9IGRyb3Bkb3duLS1jbG9zZWAsIFwiZGF0YS1yb2xlXCI6IFwiZHJvcGRvd25cIiwgXCJkYXRhLWRyb3Bkb3duXCI6IG51bSB9LCB7IGNoaWxkcmVuOiBbYnV0dG9uLCAoMCwganN4X3J1bnRpbWVfMS5qc3gpKFwiZGl2XCIsIE9iamVjdC5hc3NpZ24oeyBjbGFzc05hbWU6IFwiZHJvcGRvd25fX2NvbnRlbnRcIiwgXCJkYXRhLXJvbGVcIjogXCJkcm9wZG93blwiLCBcImRhdGEtZHJvcGRvd25cIjogbnVtIH0sIHsgY2hpbGRyZW46IGl0ZW1zIH0pKV0gfSkpKTtcbn07XG5leHBvcnRzLmRlZmF1bHQgPSBEcm9wZG93bjtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuY29uc3QganN4X3J1bnRpbWVfMSA9IHJlcXVpcmUoXCJyZWFjdC9qc3gtcnVudGltZVwiKTtcbmNvbnN0IHJlYWN0XzEgPSByZXF1aXJlKFwicmVhY3RcIik7XG5jb25zdCBJbnB1dCA9IChwcm9wcykgPT4ge1xuICAgIHZhciBfYTtcbiAgICBjb25zdCBbdmFsdWUsIHNldFZhbHVlXSA9ICgwLCByZWFjdF8xLnVzZVN0YXRlKSgoX2EgPSBwcm9wcy52YWx1ZSkgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hLnRvU3RyaW5nKCkpO1xuICAgIGNvbnN0IGlucHV0ID0gKDAsIHJlYWN0XzEudXNlUmVmKShudWxsKTtcbiAgICAoMCwgcmVhY3RfMS51c2VFZmZlY3QpKCgpID0+IHtcbiAgICAgICAgaWYgKHByb3BzLnZhbHVlKSB7XG4gICAgICAgICAgICBzZXRWYWx1ZShwcm9wcy52YWx1ZS50b1N0cmluZygpKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHNldFZhbHVlKFwiXCIpO1xuICAgICAgICB9XG4gICAgfSwgW3Byb3BzLnZhbHVlXSk7XG4gICAgKDAsIHJlYWN0XzEudXNlRWZmZWN0KSgoKSA9PiB7XG4gICAgICAgIGlmIChwcm9wcy5vbkNoYW5nZSAmJiB0eXBlb2YgdmFsdWUgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgICAgICAgIHByb3BzLm9uQ2hhbmdlKHZhbHVlKTtcbiAgICAgICAgfVxuICAgIH0sIFt2YWx1ZV0pO1xuICAgIGxldCBjbGFzc05hbWUgPSBcImZvcm0tdGV4dFwiO1xuICAgIHN3aXRjaCAocHJvcHMuc2l6ZSkge1xuICAgICAgICBjYXNlIFwiYmlnXCI6XG4gICAgICAgICAgICBjbGFzc05hbWUgKz0gXCIgZm9ybS10ZXh0LS1iaWdcIjtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIFwic21hbGxcIjpcbiAgICAgICAgICAgIGNsYXNzTmFtZSArPSBcIiBmb3JtLXRleHQtLXNtYWxsXCI7XG4gICAgICAgICAgICBicmVhaztcbiAgICB9XG4gICAgaWYgKHByb3BzLnJvdW5kZWQpXG4gICAgICAgIGNsYXNzTmFtZSArPSBcIiBmb3JtLXRleHQtLXJvdW5kZWRcIjtcbiAgICBpZiAocHJvcHMuc3VjY2VzcyAmJiAhcHJvcHMuZGlzYWJsZWQpXG4gICAgICAgIGNsYXNzTmFtZSArPSBcIiBmb3JtLXRleHQtLXN1Y2Nlc3NcIjtcbiAgICBpZiAocHJvcHMuZXJyb3IgJiYgIXByb3BzLmRpc2FibGVkKVxuICAgICAgICBjbGFzc05hbWUgKz0gXCIgZm9ybS10ZXh0LS1lcnJvclwiO1xuICAgIGlmIChwcm9wcy5kaXNhYmxlZClcbiAgICAgICAgY2xhc3NOYW1lICs9IFwiIGZvcm0tdGV4dC0tZGlzYWJsZWRcIjtcbiAgICBsZXQgc2hvdWxkRGl2aWRlTnVtYmVyQnlUaHJlZSA9IHRydWU7XG4gICAgaWYgKHR5cGVvZiBwcm9wcy5zaG91bGREaXZpZGVOdW1iZXJCeVRocmVlID09PSBcImJvb2xlYW5cIikge1xuICAgICAgICBzaG91bGREaXZpZGVOdW1iZXJCeVRocmVlID0gcHJvcHMuc2hvdWxkRGl2aWRlTnVtYmVyQnlUaHJlZTtcbiAgICB9XG4gICAgaWYgKHByb3BzLnJlcXVpcmVkV2l0aEVycm9yICYmICF2YWx1ZSkge1xuICAgICAgICBjbGFzc05hbWUgKz0gXCIgZm9ybS10ZXh0LS1lcnJvclwiO1xuICAgIH1cbiAgICBpZiAocHJvcHMubGluZWQpIHtcbiAgICAgICAgY2xhc3NOYW1lICs9IFwiIGZvcm0tdGV4dC1saW5lZFwiO1xuICAgIH1cbiAgICByZXR1cm4gKCgwLCBqc3hfcnVudGltZV8xLmpzeHMpKGpzeF9ydW50aW1lXzEuRnJhZ21lbnQsIHsgY2hpbGRyZW46IFsoMCwganN4X3J1bnRpbWVfMS5qc3hzKShcImRpdlwiLCBPYmplY3QuYXNzaWduKHsgY2xhc3NOYW1lOiBjbGFzc05hbWUgfSwgeyBjaGlsZHJlbjogW3Byb3BzLnBsYWNlaG9sZGVyICYmICFwcm9wcy5saW5lZCAmJiAoKDAsIGpzeF9ydW50aW1lXzEuanN4KShcImxhYmVsXCIsIE9iamVjdC5hc3NpZ24oeyBjbGFzc05hbWU6IFwiZm9ybV9fbGFiZWxcIiwgb25DbGljazogKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBfYTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAoX2EgPSBpbnB1dC5jdXJyZW50KSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2EuZm9jdXMoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gfSwgeyBjaGlsZHJlbjogcHJvcHMubGFiZWwgfSkpKSwgKDAsIGpzeF9ydW50aW1lXzEuanN4cykoXCJkaXZcIiwgT2JqZWN0LmFzc2lnbih7IGNsYXNzTmFtZTogXCJmb3JtLXRleHRfX2lucHV0LWNvbnRhaW5lclwiIH0sIHsgY2hpbGRyZW46IFtwcm9wcy5oZWxwICYmICgoMCwganN4X3J1bnRpbWVfMS5qc3hzKShcImRpdlwiLCBPYmplY3QuYXNzaWduKHsgY2xhc3NOYW1lOiBcInRvb2x0aXAgdG9vbHRpcC10b3BcIiB9LCB7IGNoaWxkcmVuOiBbKDAsIGpzeF9ydW50aW1lXzEuanN4KShcImFcIiwgT2JqZWN0LmFzc2lnbih7IGhyZWY6IFwiI1wiLCBjbGFzc05hbWU6IFwidG9vbHRpcF9faWNvblwiIH0sIHsgY2hpbGRyZW46IFwiP1wiIH0pKSwgKDAsIGpzeF9ydW50aW1lXzEuanN4KShcImRpdlwiLCBPYmplY3QuYXNzaWduKHsgY2xhc3NOYW1lOiBcInRvb2x0aXBfX3RleHRcIiB9LCB7IGNoaWxkcmVuOiBwcm9wcy5oZWxwIH0pKV0gfSkpKSwgcHJvcHMuaW5uZXJJbnB1dExhYmVsICYmICgoMCwganN4X3J1bnRpbWVfMS5qc3gpKFwic3BhblwiLCBPYmplY3QuYXNzaWduKHsgY2xhc3NOYW1lOiBcImZvcm0tdGV4dF9faW5uZXItaW5wdXQtbGFiZWxcIiwgcmVmOiAoZWxlbSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gQWRkIGEgbGVmdCBwYWRkaW5nIHRvIHRoZSBpbnB1dCBiZWNhdXNlIG9mIHRoZSBuYW1lIGxhYmVsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoZWxlbSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBAdHMtaWdub3JlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxlbS5uZXh0U2libGluZy5zdHlsZS5wYWRkaW5nTGVmdCA9IGAke2VsZW0uY2xpZW50V2lkdGggKyAxMH1weGA7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gfSwgeyBjaGlsZHJlbjogcHJvcHMuaW5uZXJJbnB1dExhYmVsIH0pKSksICgwLCBqc3hfcnVudGltZV8xLmpzeCkoXCJpbnB1dFwiLCB7IHJlZjogaW5wdXQsIGNsYXNzTmFtZTogXCJmb3JtLXRleHRfX2lucHV0XCIsIGlkOiBwcm9wcy5pZCwgZGlzYWJsZWQ6IHByb3BzLmRpc2FibGVkLCB2YWx1ZTogcHJvcHMudHlwZSA9PT0gXCJudW1iZXJcIiAmJiB2YWx1ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBzaG91bGREaXZpZGVOdW1iZXJCeVRocmVlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBOdW1iZXIodmFsdWUpLnRvTG9jYWxlU3RyaW5nKClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IHZhbHVlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IHZhbHVlLCByZXF1aXJlZDogcHJvcHMucmVxdWlyZWQsIGF1dG9Gb2N1czogcHJvcHMuYXV0b0ZvY3VzLCBhdXRvQ29tcGxldGU6IHByb3BzLmF1dG9Db21wbGV0ZSB8fCBcIlwiLCBtYXhMZW5ndGg6IHByb3BzLm1heExlbmd0aCwgcGxhY2Vob2xkZXI6IHByb3BzLnBsYWNlaG9sZGVyLCBvbkNoYW5nZTogKGV2ZW50KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgdmFsdWUgPSBldmVudC50YXJnZXQudmFsdWU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAocHJvcHMudHlwZSA9PT0gXCJudW1iZXJcIikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlID0gdmFsdWUucmVwbGFjZSgvLC9nLCBcIlwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoISFOdW1iZXIodmFsdWUpIHx8IE51bWJlcih2YWx1ZSkgPT09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0VmFsdWUodmFsdWUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldFZhbHVlKHZhbHVlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSwgb25CbHVyOiAoZXZlbnQpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCB2YWx1ZSA9IGV2ZW50LnRhcmdldC52YWx1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldFZhbHVlKHZhbHVlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChwcm9wcy5vbkJsdXIpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvcHMub25CbHVyKHZhbHVlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSwgdHlwZTogcHJvcHMudHlwZSA9PT0gXCJwYXNzd29yZFwiID8gXCJwYXNzd29yZFwiIDogXCJ0ZXh0XCIgfSldIH0pKSwgIXByb3BzLnBsYWNlaG9sZGVyICYmICgoMCwganN4X3J1bnRpbWVfMS5qc3gpKFwibGFiZWxcIiwgT2JqZWN0LmFzc2lnbih7IGNsYXNzTmFtZTogYGZvcm0tdGV4dF9fbGFiZWwgJHt2YWx1ZSA/IFwiZm9ybS10ZXh0X19sYWJlbC0tdG9wXCIgOiBcIlwifWAsIG9uQ2xpY2s6ICgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgX2E7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKF9hID0gaW5wdXQuY3VycmVudCkgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hLmZvY3VzKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9IH0sIHsgY2hpbGRyZW46IHByb3BzLmxhYmVsIH0pKSldIH0pKSwgKDAsIGpzeF9ydW50aW1lXzEuanN4cykoXCJkaXZcIiwgT2JqZWN0LmFzc2lnbih7IGNsYXNzTmFtZTogXCJmb3JtLXRleHRfX2Zvb3RlclwiIH0sIHsgY2hpbGRyZW46IFtwcm9wcy5lcnJvciAmJiAhcHJvcHMuZGlzYWJsZWQgJiYgKCgwLCBqc3hfcnVudGltZV8xLmpzeHMpKFwic3BhblwiLCBPYmplY3QuYXNzaWduKHsgY2xhc3NOYW1lOiBcImlucHV0LWVycm9yXCIgfSwgeyBjaGlsZHJlbjogWygwLCBqc3hfcnVudGltZV8xLmpzeCkoXCJpXCIsIHsgY2xhc3NOYW1lOiBcImZhIGZhLWV4Y2xhbWF0aW9uLWNpcmNsZVwiIH0pLCBwcm9wcy5lcnJvcl0gfSkpKSwgcHJvcHMubWF4TGVuZ3RoICYmICgoMCwganN4X3J1bnRpbWVfMS5qc3gpKFwic3BhblwiLCBPYmplY3QuYXNzaWduKHsgY2xhc3NOYW1lOiBcImZvcm0tdGV4dF9fbGVuZ3RoLWRpc3BsYXlcIiB9LCB7IGNoaWxkcmVuOiBwcm9wcy5tYXhMZW5ndGggLSAoKHZhbHVlID09PSBudWxsIHx8IHZhbHVlID09PSB2b2lkIDAgPyB2b2lkIDAgOiB2YWx1ZS5sZW5ndGgpIHx8IDApIH0pKSldIH0pKV0gfSkpO1xufTtcbmV4cG9ydHMuZGVmYXVsdCA9IElucHV0O1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG52YXIgX19pbXBvcnREZWZhdWx0ID0gKHRoaXMgJiYgdGhpcy5fX2ltcG9ydERlZmF1bHQpIHx8IGZ1bmN0aW9uIChtb2QpIHtcbiAgICByZXR1cm4gKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgPyBtb2QgOiB7IFwiZGVmYXVsdFwiOiBtb2QgfTtcbn07XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5jb25zdCBqc3hfcnVudGltZV8xID0gcmVxdWlyZShcInJlYWN0L2pzeC1ydW50aW1lXCIpO1xuY29uc3QgcmVhY3RfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwicmVhY3RcIikpO1xuY29uc3QgY29tbW9uXzEgPSByZXF1aXJlKFwiQHBhZ3Nlci9jb21tb25cIik7XG5jb25zdCBJbnB1dEZpbGUgPSAoeyBhZGRDbGFzcywgaGlkZSwgbGFiZWwsIGlkLCBzaXplLCB0eXBlLCBtaW5XaWR0aCwgbWluSGVpZ2h0LCBvbkNoYW5nZSwgb25DbGljaywgb25FcnJvciwgfSkgPT4ge1xuICAgIGxldCBjbGFzc05hbWUgPSBcImZpbGVfX3VwbG9hZC0tbGFiZWxcIjtcbiAgICBpZiAoYWRkQ2xhc3MpXG4gICAgICAgIGNsYXNzTmFtZSArPSBgICR7YWRkQ2xhc3N9YDtcbiAgICBpZiAoaGlkZSlcbiAgICAgICAgY2xhc3NOYW1lICs9IFwiIGRpc3BsYXktbm9uZVwiO1xuICAgIHJldHVybiAoKDAsIGpzeF9ydW50aW1lXzEuanN4cykocmVhY3RfMS5kZWZhdWx0LkZyYWdtZW50LCB7IGNoaWxkcmVuOiBbKDAsIGpzeF9ydW50aW1lXzEuanN4cykoXCJsYWJlbFwiLCBPYmplY3QuYXNzaWduKHsgaHRtbEZvcjogaWQsIGNsYXNzTmFtZTogY2xhc3NOYW1lIH0sIHsgY2hpbGRyZW46IFsoMCwganN4X3J1bnRpbWVfMS5qc3gpKFwiaVwiLCB7IGNsYXNzTmFtZTogXCJmYSBmYS1jbG91ZC11cGxvYWRcIiwgXCJhcmlhLWhpZGRlblwiOiBcInRydWVcIiB9KSwgXCIgXCIsICgwLCBqc3hfcnVudGltZV8xLmpzeCkoXCJzcGFuXCIsIHsgY2hpbGRyZW46IGxhYmVsIH0pXSB9KSksICgwLCBqc3hfcnVudGltZV8xLmpzeCkoXCJpbnB1dFwiLCB7IGlkOiBpZCwgb25DaGFuZ2U6IChlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGlucHV0RWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAjJHtpZH1gKTtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgaW5wdXRGaWxlcyA9IGlucHV0RWwuZmlsZXM7XG4gICAgICAgICAgICAgICAgICAgIGxldCBpbnB1dEZpbGU7XG4gICAgICAgICAgICAgICAgICAgIGlmIChpbnB1dEZpbGVzKVxuICAgICAgICAgICAgICAgICAgICAgICAgaW5wdXRGaWxlID0gaW5wdXRGaWxlc1swXTtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgZmlsZVNpemUgPSBpbnB1dEZpbGUgPT09IG51bGwgfHwgaW5wdXRGaWxlID09PSB2b2lkIDAgPyB2b2lkIDAgOiBpbnB1dEZpbGUuc2l6ZTtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgZmlsZU5hbWUgPSBpbnB1dEZpbGUgPT09IG51bGwgfHwgaW5wdXRGaWxlID09PSB2b2lkIDAgPyB2b2lkIDAgOiBpbnB1dEZpbGUubmFtZTtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgZmlsZVR5cGUgPSBpbnB1dEZpbGUgPT09IG51bGwgfHwgaW5wdXRGaWxlID09PSB2b2lkIDAgPyB2b2lkIDAgOiBpbnB1dEZpbGUudHlwZTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFmaWxlU2l6ZSB8fCAhZmlsZU5hbWUgfHwgIWZpbGVUeXBlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAoMCwgY29tbW9uXzEuYWxlcnQpKFwiU29ycnksIHNvbWV0aGluZyB1bmV4cGVjdGVkIGhhcHBlbmVkLiBQbGVhc2UgdHJ5IGFnYWluIG9yIGNvbnRhY3Qgb3VyIHN1cHBvcnQuXCIsIFwiZXJyb3JcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgLy8gQWx3YXlzIHZhbGlkYXRlIGZpbGUgc2l6ZVxuICAgICAgICAgICAgICAgICAgICBpZiAoZmlsZVNpemUgPiBzaXplKVxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG9uRXJyb3IoYEZpbGUgc2l6ZSBtdXN0IGJlIGxlc3MgdGhhbiAke3NpemUgLyAxMDAwMDAwfU1CLmApO1xuICAgICAgICAgICAgICAgICAgICAvLyBWYWxpZGF0ZSBmaWxlIHR5cGUgaWYgJ3R5cGUnIHByb3BlcnR5IGhhcyBiZWVuIHNwZWNpZmllZFxuICAgICAgICAgICAgICAgICAgICBzd2l0Y2ggKHR5cGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgXCJpbWFnZVwiOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICghbWluSGVpZ2h0IHx8ICFtaW5XaWR0aCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJQbGVhc2Ugc3BlY2lmeSBtaW5IZWlnaHQgYW5kIG1pbldpZHRoIGZvciB0aGUgY29tcG9uZW50IHdpdGggdGhlIHR5cGUgb2YgJ2ltYWdlJy5cIik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIFZhbGlkYXRlIGlmIHRoZSBmaWxlIGlzIGltYWdlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGZpbGVUeXBlICE9PSBcImltYWdlL2pwZ1wiICYmXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpbGVUeXBlICE9PSBcImltYWdlL3BuZ1wiICYmXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpbGVUeXBlICE9PSBcImltYWdlL2pwZWdcIilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG9uRXJyb3IoXCJPbmx5IGpwZWcvanBnL3BuZyBpbWFnZXMgYXJlIGFsbG93ZWQuXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIFZhbGlkYXRlIGlmIHRoZSBpbWFnZSBoYXMgdGhlIG1pbiB3aWR0aCBhbmQgaGVpZ2h0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gQHRzLWlnbm9yZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGltZ1VybCA9IFVSTC5jcmVhdGVPYmplY3RVUkwoZS50YXJnZXQuZmlsZXNbMF0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBpbWFnZSA9IG5ldyBJbWFnZSgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGltYWdlLm9ubG9hZCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuaGVpZ2h0IDwgbWluSGVpZ2h0IHx8XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLndpZHRoIDwgbWluV2lkdGgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uRXJyb3IoYFBsZWFzZSB1cGxvYWQgYW4gaW1hZ2Ugd2l0aCB0aGUgbWluaW11bSBkaW1lbnNpb25zIG9mIGF0IGxlYXN0ICR7bWluV2lkdGh9ICogJHttaW5IZWlnaHR9IHBpeGVscy5gKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlKGUsIGZpbGVOYW1lLCBpbWdVcmwpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbWFnZS5zcmMgPSBpbWdVcmw7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlKGUsIGZpbGVOYW1lKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0sIG9uQ2xpY2s6IChlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIC8vIFJlc2V0IHRoZSBpbnB1dCBmaWxlIHZhbHVlIGJlZm9yZSBjaG9vc2luZyBhIG5ldyBmaWxlXG4gICAgICAgICAgICAgICAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgIyR7aWR9YCkudmFsdWUgPSBudWxsO1xuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrKGUpO1xuICAgICAgICAgICAgICAgIH0sIHR5cGU6IFwiZmlsZVwiLCBuYW1lOiBcImZpbGVcIiwgcGxhY2Vob2xkZXI6IGxhYmVsIH0pXSB9KSk7XG59O1xuZXhwb3J0cy5kZWZhdWx0ID0gSW5wdXRGaWxlO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5jb25zdCBqc3hfcnVudGltZV8xID0gcmVxdWlyZShcInJlYWN0L2pzeC1ydW50aW1lXCIpO1xuY29uc3QgcmVhY3RfMSA9IHJlcXVpcmUoXCJyZWFjdFwiKTtcbmNvbnN0IFRleHRhcmVhID0gKHByb3BzKSA9PiB7XG4gICAgdmFyIF9hO1xuICAgIGNvbnN0IFt2YWx1ZSwgc2V0VmFsdWVdID0gKDAsIHJlYWN0XzEudXNlU3RhdGUpKChfYSA9IHByb3BzLnZhbHVlKSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2EudG9TdHJpbmcoKSk7XG4gICAgY29uc3QgaW5wdXQgPSAoMCwgcmVhY3RfMS51c2VSZWYpKG51bGwpO1xuICAgICgwLCByZWFjdF8xLnVzZUVmZmVjdCkoKCkgPT4ge1xuICAgICAgICBpZiAocHJvcHMudmFsdWUpIHtcbiAgICAgICAgICAgIHNldFZhbHVlKHByb3BzLnZhbHVlLnRvU3RyaW5nKCkpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgc2V0VmFsdWUoXCJcIik7XG4gICAgICAgIH1cbiAgICB9LCBbcHJvcHMudmFsdWVdKTtcbiAgICAoMCwgcmVhY3RfMS51c2VFZmZlY3QpKCgpID0+IHtcbiAgICAgICAgaWYgKHByb3BzLm9uQ2hhbmdlICYmIHR5cGVvZiB2YWx1ZSA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgICAgICAgcHJvcHMub25DaGFuZ2UodmFsdWUpO1xuICAgICAgICB9XG4gICAgfSwgW3ZhbHVlXSk7XG4gICAgbGV0IGNsYXNzTmFtZSA9IFwiZm9ybS10ZXh0IGZvcm0tdGV4dC0tdGV4dGFyZWFcIjtcbiAgICBzd2l0Y2ggKHByb3BzLnNpemUpIHtcbiAgICAgICAgY2FzZSBcImJpZ1wiOlxuICAgICAgICAgICAgY2xhc3NOYW1lICs9IFwiIGZvcm0tdGV4dC0tYmlnXCI7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSBcInNtYWxsXCI6XG4gICAgICAgICAgICBjbGFzc05hbWUgKz0gXCIgZm9ybS10ZXh0LS1zbWFsbFwiO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgfVxuICAgIGlmIChwcm9wcy5yb3VuZGVkKVxuICAgICAgICBjbGFzc05hbWUgKz0gXCIgZm9ybS10ZXh0LS1yb3VuZGVkXCI7XG4gICAgaWYgKHByb3BzLmVycm9yKVxuICAgICAgICBjbGFzc05hbWUgKz0gXCIgZm9ybS10ZXh0LS1lcnJvclwiO1xuICAgIHJldHVybiAoKDAsIGpzeF9ydW50aW1lXzEuanN4cykoanN4X3J1bnRpbWVfMS5GcmFnbWVudCwgeyBjaGlsZHJlbjogWygwLCBqc3hfcnVudGltZV8xLmpzeHMpKFwiZGl2XCIsIE9iamVjdC5hc3NpZ24oeyBjbGFzc05hbWU6IGNsYXNzTmFtZSB9LCB7IGNoaWxkcmVuOiBbcHJvcHMucGxhY2Vob2xkZXIgJiYgKCgwLCBqc3hfcnVudGltZV8xLmpzeCkoXCJsYWJlbFwiLCBPYmplY3QuYXNzaWduKHsgY2xhc3NOYW1lOiBcImZvcm1fX2xhYmVsXCIsIG9uQ2xpY2s6ICgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgX2E7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKF9hID0gaW5wdXQuY3VycmVudCkgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hLmZvY3VzKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9IH0sIHsgY2hpbGRyZW46IHByb3BzLmxhYmVsIH0pKSksICgwLCBqc3hfcnVudGltZV8xLmpzeHMpKFwiZGl2XCIsIE9iamVjdC5hc3NpZ24oeyBjbGFzc05hbWU6IFwiZm9ybS10ZXh0X19pbnB1dC1jb250YWluZXJcIiB9LCB7IGNoaWxkcmVuOiBbcHJvcHMuaGVscCAmJiAoKDAsIGpzeF9ydW50aW1lXzEuanN4cykoXCJkaXZcIiwgT2JqZWN0LmFzc2lnbih7IGNsYXNzTmFtZTogXCJ0b29sdGlwIHRvb2x0aXAtdG9wIGEtMTlcIiB9LCB7IGNoaWxkcmVuOiBbKDAsIGpzeF9ydW50aW1lXzEuanN4KShcImFcIiwgT2JqZWN0LmFzc2lnbih7IGhyZWY6IFwiI1wiLCBjbGFzc05hbWU6IFwidG9vbHRpcF9faWNvblwiIH0sIHsgY2hpbGRyZW46IFwiP1wiIH0pKSwgKDAsIGpzeF9ydW50aW1lXzEuanN4KShcImRpdlwiLCBPYmplY3QuYXNzaWduKHsgY2xhc3NOYW1lOiBcInRvb2x0aXBfX3RleHRcIiB9LCB7IGNoaWxkcmVuOiBwcm9wcy5oZWxwIH0pKV0gfSkpKSwgKDAsIGpzeF9ydW50aW1lXzEuanN4KShcInRleHRhcmVhXCIsIHsgcm93czogcHJvcHMucm93cywgcmVmOiBpbnB1dCwgaWQ6IHByb3BzLmlkLCBjbGFzc05hbWU6IFwiZm9ybS10ZXh0X19pbnB1dFwiLCBwbGFjZWhvbGRlcjogcHJvcHMucGxhY2Vob2xkZXIsIG1heExlbmd0aDogcHJvcHMubWF4TGVuZ3RoLCB2YWx1ZTogdmFsdWUsIHJlcXVpcmVkOiBwcm9wcy5yZXF1aXJlZCwgb25DaGFuZ2U6IChldmVudCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHZhbHVlID0gZXZlbnQudGFyZ2V0LnZhbHVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0VmFsdWUodmFsdWUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LCBvbkJsdXI6IChldmVudCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHByb3BzLm9uQmx1cikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb3BzLm9uQmx1cihldmVudC50YXJnZXQudmFsdWUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IH0pXSB9KSksICFwcm9wcy5wbGFjZWhvbGRlciAmJiAoKDAsIGpzeF9ydW50aW1lXzEuanN4KShcImxhYmVsXCIsIE9iamVjdC5hc3NpZ24oeyBjbGFzc05hbWU6IGBmb3JtLXRleHRfX2xhYmVsICR7dmFsdWUgPyBcImZvcm0tdGV4dF9fbGFiZWwtLXRvcFwiIDogXCJcIn1gLCBvbkNsaWNrOiAoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIF9hO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIChfYSA9IGlucHV0LmN1cnJlbnQpID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS5mb2N1cygpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSB9LCB7IGNoaWxkcmVuOiBwcm9wcy5sYWJlbCB9KSkpXSB9KSksICgwLCBqc3hfcnVudGltZV8xLmpzeHMpKFwiZGl2XCIsIE9iamVjdC5hc3NpZ24oeyBjbGFzc05hbWU6IFwiZm9ybS10ZXh0X19mb290ZXJcIiB9LCB7IGNoaWxkcmVuOiBbcHJvcHMuZXJyb3IgJiYgKCgwLCBqc3hfcnVudGltZV8xLmpzeHMpKFwic3BhblwiLCBPYmplY3QuYXNzaWduKHsgY2xhc3NOYW1lOiBcImlucHV0LWVycm9yXCIgfSwgeyBjaGlsZHJlbjogWygwLCBqc3hfcnVudGltZV8xLmpzeCkoXCJpXCIsIHsgY2xhc3NOYW1lOiBcImZhIGZhLWV4Y2xhbWF0aW9uLWNpcmNsZVwiIH0pLCBwcm9wcy5lcnJvcl0gfSkpKSwgcHJvcHMubWF4TGVuZ3RoICYmICgoMCwganN4X3J1bnRpbWVfMS5qc3gpKFwic3BhblwiLCBPYmplY3QuYXNzaWduKHsgY2xhc3NOYW1lOiBcImZvcm0tdGV4dF9fbGVuZ3RoLWRpc3BsYXlcIiB9LCB7IGNoaWxkcmVuOiBwcm9wcy5tYXhMZW5ndGggLSAoKHZhbHVlID09PSBudWxsIHx8IHZhbHVlID09PSB2b2lkIDAgPyB2b2lkIDAgOiB2YWx1ZS5sZW5ndGgpIHx8IDApIH0pKSldIH0pKV0gfSkpO1xufTtcbmV4cG9ydHMuZGVmYXVsdCA9IFRleHRhcmVhO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG52YXIgX19pbXBvcnREZWZhdWx0ID0gKHRoaXMgJiYgdGhpcy5fX2ltcG9ydERlZmF1bHQpIHx8IGZ1bmN0aW9uIChtb2QpIHtcbiAgICByZXR1cm4gKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgPyBtb2QgOiB7IFwiZGVmYXVsdFwiOiBtb2QgfTtcbn07XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLlVwbG9hZFBob3RvID0gZXhwb3J0cy5VcGxvYWRBdHRhY2hGaWxlID0gZXhwb3J0cy5BZGRUb0NvbGxlY3Rpb24gPSBleHBvcnRzLkRyb3Bkb3duID0gZXhwb3J0cy5JbnB1dEZpbGUgPSBleHBvcnRzLlRleHRhcmVhID0gZXhwb3J0cy5CdXR0b24gPSBleHBvcnRzLklucHV0ID0gZXhwb3J0cy5Nb2RhbCA9IGV4cG9ydHMuQ29uZmlybU1vZGFsID0gZXhwb3J0cy5BbGVydCA9IGV4cG9ydHMuTG9hZGluZyA9IHZvaWQgMDtcbmNvbnN0IExvYWRpbmdfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiLi9Mb2FkaW5nXCIpKTtcbmV4cG9ydHMuTG9hZGluZyA9IExvYWRpbmdfMS5kZWZhdWx0O1xuY29uc3QgQWxlcnRfMSA9IHJlcXVpcmUoXCIuL0FsZXJ0XCIpO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiQWxlcnRcIiwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIEFsZXJ0XzEuQWxlcnQ7IH0gfSk7XG5jb25zdCBNb2RhbF8xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCIuL21vZGFscy9Nb2RhbFwiKSk7XG5leHBvcnRzLk1vZGFsID0gTW9kYWxfMS5kZWZhdWx0O1xuY29uc3QgQ29uZmlybU1vZGFsXzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcIi4vbW9kYWxzL0NvbmZpcm1Nb2RhbFwiKSk7XG5leHBvcnRzLkNvbmZpcm1Nb2RhbCA9IENvbmZpcm1Nb2RhbF8xLmRlZmF1bHQ7XG5jb25zdCBJbnB1dF8xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCIuL2Zvcm1zL0lucHV0XCIpKTtcbmV4cG9ydHMuSW5wdXQgPSBJbnB1dF8xLmRlZmF1bHQ7XG5jb25zdCBCdXR0b25fMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiLi9mb3Jtcy9CdXR0b25cIikpO1xuZXhwb3J0cy5CdXR0b24gPSBCdXR0b25fMS5kZWZhdWx0O1xuY29uc3QgVGV4dGFyZWFfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiLi9mb3Jtcy9UZXh0YXJlYVwiKSk7XG5leHBvcnRzLlRleHRhcmVhID0gVGV4dGFyZWFfMS5kZWZhdWx0O1xuY29uc3QgSW5wdXRGaWxlXzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcIi4vZm9ybXMvSW5wdXRGaWxlXCIpKTtcbmV4cG9ydHMuSW5wdXRGaWxlID0gSW5wdXRGaWxlXzEuZGVmYXVsdDtcbmNvbnN0IERyb3Bkb3duXzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcIi4vZm9ybXMvRHJvcGRvd25cIikpO1xuZXhwb3J0cy5Ecm9wZG93biA9IERyb3Bkb3duXzEuZGVmYXVsdDtcbmNvbnN0IEFkZFRvQ29sbGVjdGlvbl8xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCIuL21vZGFscy9BZGRUb0NvbGxlY3Rpb25cIikpO1xuZXhwb3J0cy5BZGRUb0NvbGxlY3Rpb24gPSBBZGRUb0NvbGxlY3Rpb25fMS5kZWZhdWx0O1xuY29uc3QgVXBsb2FkQXR0YWNoRmlsZV8xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCIuL21vZGFscy9VcGxvYWRBdHRhY2hGaWxlXCIpKTtcbmV4cG9ydHMuVXBsb2FkQXR0YWNoRmlsZSA9IFVwbG9hZEF0dGFjaEZpbGVfMS5kZWZhdWx0O1xuY29uc3QgVXBsb2FkUGhvdG9fMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiLi9tb2RhbHMvVXBsb2FkUGhvdG9cIikpO1xuZXhwb3J0cy5VcGxvYWRQaG90byA9IFVwbG9hZFBob3RvXzEuZGVmYXVsdDtcbiIsIlwidXNlIHN0cmljdFwiO1xudmFyIF9fYXdhaXRlciA9ICh0aGlzICYmIHRoaXMuX19hd2FpdGVyKSB8fCBmdW5jdGlvbiAodGhpc0FyZywgX2FyZ3VtZW50cywgUCwgZ2VuZXJhdG9yKSB7XG4gICAgZnVuY3Rpb24gYWRvcHQodmFsdWUpIHsgcmV0dXJuIHZhbHVlIGluc3RhbmNlb2YgUCA/IHZhbHVlIDogbmV3IFAoZnVuY3Rpb24gKHJlc29sdmUpIHsgcmVzb2x2ZSh2YWx1ZSk7IH0pOyB9XG4gICAgcmV0dXJuIG5ldyAoUCB8fCAoUCA9IFByb21pc2UpKShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgIGZ1bmN0aW9uIGZ1bGZpbGxlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvci5uZXh0KHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cbiAgICAgICAgZnVuY3Rpb24gcmVqZWN0ZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3JbXCJ0aHJvd1wiXSh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XG4gICAgICAgIGZ1bmN0aW9uIHN0ZXAocmVzdWx0KSB7IHJlc3VsdC5kb25lID8gcmVzb2x2ZShyZXN1bHQudmFsdWUpIDogYWRvcHQocmVzdWx0LnZhbHVlKS50aGVuKGZ1bGZpbGxlZCwgcmVqZWN0ZWQpOyB9XG4gICAgICAgIHN0ZXAoKGdlbmVyYXRvciA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSkubmV4dCgpKTtcbiAgICB9KTtcbn07XG52YXIgX19pbXBvcnREZWZhdWx0ID0gKHRoaXMgJiYgdGhpcy5fX2ltcG9ydERlZmF1bHQpIHx8IGZ1bmN0aW9uIChtb2QpIHtcbiAgICByZXR1cm4gKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgPyBtb2QgOiB7IFwiZGVmYXVsdFwiOiBtb2QgfTtcbn07XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5jb25zdCBqc3hfcnVudGltZV8xID0gcmVxdWlyZShcInJlYWN0L2pzeC1ydW50aW1lXCIpO1xuY29uc3QgcmVhY3RfMSA9IHJlcXVpcmUoXCJyZWFjdFwiKTtcbmNvbnN0IGNvbW1vbl8xID0gcmVxdWlyZShcIkBwYWdzZXIvY29tbW9uXCIpO1xuY29uc3QgTW9kYWxfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiLi9Nb2RhbFwiKSk7XG5jb25zdCBMb2FkaW5nXzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcIi4uL0xvYWRpbmdcIikpO1xuY29uc3QgSW5wdXRfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiLi4vZm9ybXMvSW5wdXRcIikpO1xuY29uc3QgQnV0dG9uXzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcIi4uL2Zvcm1zL0J1dHRvblwiKSk7XG5jb25zdCBDb2xsZWN0aW9uTW9kYWwgPSAocHJvcHMpID0+IHtcbiAgICBjb25zdCBbbmFtZSwgc2V0TmFtZV0gPSAoMCwgcmVhY3RfMS51c2VTdGF0ZSkoXCJcIik7XG4gICAgY29uc3QgW3N0YXR1cywgc2V0U3RhdHVzXSA9ICgwLCByZWFjdF8xLnVzZVN0YXRlKShcIm5vcm1hbFwiKTsgLy8gV2UnbGwgc2hvdyBkaWZmZXJlbnQgZWxlbWVudHMgZGVwZW5kaW5nIG9uIHRoZSB2YWx1ZVxuICAgIGNvbnN0IFtjb2xsZWN0aW9ucywgc2V0Q29sbGVjdGlvbnNdID0gKDAsIHJlYWN0XzEudXNlU3RhdGUpKFtdKTtcbiAgICAvLyBDaGVjayB0byBzZWUgaWYgdGhlIG1vZGFsIGlzIG9wZW5lZCBvciBub3QsIGlmIHNvIGZldGNoIHRoZSBjb2xsZWN0aW9uc1xuICAgICgwLCByZWFjdF8xLnVzZUVmZmVjdCkoKCkgPT4ge1xuICAgICAgICBpZiAocHJvcHMub3Blbikge1xuICAgICAgICAgICAgZmV0Y2hDb2xsZWN0aW9ucygpO1xuICAgICAgICB9XG4gICAgfSwgW3Byb3BzLm9wZW5dKTtcbiAgICAvLyBGZXRjaCBhbGwgdGhlIGNvbGxlY3Rpb25zIHVzZXIgaGFzIGNyZWF0ZWRcbiAgICBjb25zdCBmZXRjaENvbGxlY3Rpb25zID0gKCkgPT4gX19hd2FpdGVyKHZvaWQgMCwgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XG4gICAgICAgIHNldFN0YXR1cyhcImxvYWRpbmdcIik7XG4gICAgICAgIGNvbnN0IHJlc3BvbnNlID0gKHlpZWxkIGNvbW1vbl8xLnJlcXVlc3QuZ2V0KGAvY29sbGVjdGlvbnMvY3JlYXRlZC8ke3Byb3BzLnBhZ2VJZH1gLCB7XG4gICAgICAgICAgICBhdXRoOiB0cnVlLFxuICAgICAgICB9KSk7XG4gICAgICAgIHNldFN0YXR1cyhcIm5vcm1hbFwiKTtcbiAgICAgICAgc2V0Q29sbGVjdGlvbnMocmVzcG9uc2UuY29sbGVjdGlvbnMpO1xuICAgIH0pO1xuICAgIC8vIFNlbmQgYSByZXF1ZXN0IHRvIHVzZXIgdG8gY3JlYXRlIGEgbmV3IGNvbGxlY3Rpb25cbiAgICBjb25zdCBjcmVhdGVDb2xsZWN0aW9uID0gKCkgPT4gX19hd2FpdGVyKHZvaWQgMCwgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XG4gICAgICAgIHNldFN0YXR1cyhcImxvYWRpbmdcIik7XG4gICAgICAgIGNvbnN0IHJlc3BvbnNlID0gKHlpZWxkIGNvbW1vbl8xLnJlcXVlc3QucG9zdChgL2NvbGxlY3Rpb25gLCB7IG5hbWUgfSwge1xuICAgICAgICAgICAgYXV0aDogdHJ1ZSxcbiAgICAgICAgfSkpO1xuICAgICAgICAvLyBBZGQgdGhlIHBhZ2UgaW4gdGhlIG5ld2x5IGNyZWF0ZWQgY29sbGVjdGlvblxuICAgICAgICB0b2dnbGVQYWdlSW5DTChyZXNwb25zZS5jb2xsZWN0aW9uLmlkKTtcbiAgICB9KTtcbiAgICAvLyBTZW5kIHRoZSByZXF1ZXN0IHRvIHNlcnZlciB0byBlaXRoZXIgcmVtb3ZlIHRoZSBwYWdlIGZyb20gc2VsZWN0ZWQgY29sbGVjdGlvblxuICAgIC8vIG9yIGFkZCBpdCB0byB0aGF0IGNvbGxlY3Rpb25cbiAgICBjb25zdCB0b2dnbGVQYWdlSW5DTCA9IChjbElkKSA9PiBfX2F3YWl0ZXIodm9pZCAwLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcbiAgICAgICAgc2V0U3RhdHVzKFwibG9hZGluZ1wiKTtcbiAgICAgICAgY29uc3QgcmVzcG9uc2UgPSAoeWllbGQgY29tbW9uXzEucmVxdWVzdC5wb3N0KGAvY29sbGVjdGlvbi9hZGQtcmVtb3ZlLyR7Y2xJZH0vJHtwcm9wcy5wYWdlSWR9YCwgbnVsbCwge1xuICAgICAgICAgICAgYXV0aDogdHJ1ZSxcbiAgICAgICAgfSkpO1xuICAgICAgICAvLyBTaG93IGEgcmlnaHQgbWVzc2FnZSB0byB1c2VyIGJhc2VkIG9uIHNlcnZlciByZXNwb25zZVxuICAgICAgICBpZiAocmVzcG9uc2Uuc2VsZWN0ZWQpXG4gICAgICAgICAgICAoMCwgY29tbW9uXzEuYWxlcnQpKGBQYWdlIHN1Y2Nlc3NmdWxseSBhZGRlZCB0byAke3Jlc3BvbnNlLmNsTmFtZX0gY29sbGVjdGlvbi5gLCBcInN1Y2Nlc3NcIik7XG4gICAgICAgIGVsc2VcbiAgICAgICAgICAgICgwLCBjb21tb25fMS5hbGVydCkoYFBhZ2Ugc3VjY2Vzc2Z1bGx5IHJlbW92ZWQgZnJvbSAke3Jlc3BvbnNlLmNsTmFtZX0gY29sbGVjdGlvbi5gLCBcInN1Y2Nlc3NcIik7XG4gICAgICAgIC8vIEZldGNoIGNvbGxlY3Rpb25zIGFnYWluXG4gICAgICAgIGZldGNoQ29sbGVjdGlvbnMoKTtcbiAgICB9KTtcbiAgICByZXR1cm4gKCgwLCBqc3hfcnVudGltZV8xLmpzeHMpKE1vZGFsXzEuZGVmYXVsdCwgT2JqZWN0LmFzc2lnbih7IGhlYWRlcjogXCJQYWdlIGluIENvbGxlY3Rpb25zOlwiLCB0eXBlOiBcInNtYWxsXCIsIG9wZW46IHByb3BzLm9wZW4sIG9uQ2xvc2U6ICgpID0+IHtcbiAgICAgICAgICAgIHByb3BzLm9uQ2xvc2UoKTtcbiAgICAgICAgICAgIHNldE5hbWUoXCJcIik7XG4gICAgICAgICAgICBzZXRTdGF0dXMoXCJub3JtYWxcIik7XG4gICAgICAgICAgICBzZXRDb2xsZWN0aW9ucyhbXSk7XG4gICAgICAgIH0gfSwgeyBjaGlsZHJlbjogWyFjb2xsZWN0aW9ucyB8fFxuICAgICAgICAgICAgICAgIChzdGF0dXMgPT09IFwibG9hZGluZ1wiICYmICgoMCwganN4X3J1bnRpbWVfMS5qc3gpKFwiZGl2XCIsIE9iamVjdC5hc3NpZ24oeyBjbGFzc05hbWU6IFwiY2VudGVyLWNvbnRlbnQgbWFyZ2luLXRvcC01cHhcIiB9LCB7IGNoaWxkcmVuOiAoMCwganN4X3J1bnRpbWVfMS5qc3gpKExvYWRpbmdfMS5kZWZhdWx0LCB7fSkgfSkpKSksIGNvbGxlY3Rpb25zICYmIHN0YXR1cyA9PT0gXCJub3JtYWxcIiAmJiAoKDAsIGpzeF9ydW50aW1lXzEuanN4KShcImRpdlwiLCBPYmplY3QuYXNzaWduKHsgY2xhc3NOYW1lOiBcIm1hcmdpbi1ib3R0b20tMDhcIiB9LCB7IGNoaWxkcmVuOiAoMCwganN4X3J1bnRpbWVfMS5qc3hzKShCdXR0b25fMS5kZWZhdWx0LCBPYmplY3QuYXNzaWduKHsgY29sb3I6IFwiYmx1ZVwiLCBvdXRsaW5lZDogdHJ1ZSwgYmxvY2s6IHRydWUsIG9uQ2xpY2s6ICgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldFN0YXR1cyhcImNyZWF0aW5nXCIpO1xuICAgICAgICAgICAgICAgICAgICB9LCB0eXBlOiBcImJ1dHRvblwiIH0sIHsgY2hpbGRyZW46IFtcIkNyZWF0ZSBhIG5ldyBjb2xsZWN0aW9uXCIsICgwLCBqc3hfcnVudGltZV8xLmpzeCkoXCJpXCIsIHsgY2xhc3NOYW1lOiBcImZhIGZhLXBsdXMtY2lyY2xlIGJ1dHRvbl9faWNvbi1yaWdodFwiLCBcImFyaWEtaGlkZGVuXCI6IFwidHJ1ZVwiIH0pXSB9KSkgfSkpKSwgc3RhdHVzID09PSBcImNyZWF0aW5nXCIgJiYgKCgwLCBqc3hfcnVudGltZV8xLmpzeCkoXCJkaXZcIiwgT2JqZWN0LmFzc2lnbih7IGNsYXNzTmFtZTogXCJyaWdodC1jb250ZW50XCIgfSwgeyBjaGlsZHJlbjogKDAsIGpzeF9ydW50aW1lXzEuanN4cykoXCJmb3JtXCIsIE9iamVjdC5hc3NpZ24oeyBvblN1Ym1pdDogKGUpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNyZWF0ZUNvbGxlY3Rpb24oKTtcbiAgICAgICAgICAgICAgICAgICAgfSB9LCB7IGNoaWxkcmVuOiBbKDAsIGpzeF9ydW50aW1lXzEuanN4KShcImRpdlwiLCBPYmplY3QuYXNzaWduKHsgY2xhc3NOYW1lOiBcIm1hcmdpbi1ib3R0b20tMVwiIH0sIHsgY2hpbGRyZW46ICgwLCBqc3hfcnVudGltZV8xLmpzeCkoSW5wdXRfMS5kZWZhdWx0LCB7IHR5cGU6IFwidGV4dFwiLCBsaW5lZDogdHJ1ZSwgYXV0b0NvbXBsZXRlOiBcIm9mZlwiLCBhdXRvRm9jdXM6IHRydWUsIHBsYWNlaG9sZGVyOiBcIkNvbGxlY3Rpb24gbmFtZVwiLCByZXF1aXJlZDogdHJ1ZSwgdmFsdWU6IG5hbWUsIG9uQ2hhbmdlOiAodmFsdWUpID0+IHNldE5hbWUodmFsdWUpIH0pIH0pKSwgKDAsIGpzeF9ydW50aW1lXzEuanN4cykoXCJkaXZcIiwgT2JqZWN0LmFzc2lnbih7IGNsYXNzTmFtZTogXCJhLTE5XCIgfSwgeyBjaGlsZHJlbjogWygwLCBqc3hfcnVudGltZV8xLmpzeCkoQnV0dG9uXzEuZGVmYXVsdCwgT2JqZWN0LmFzc2lnbih7IGNvbG9yOiBcImRlZmF1bHRcIiwgc2l6ZTogXCJzbWFsbFwiLCBvbkNsaWNrOiAoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0TmFtZShcIlwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRTdGF0dXMoXCJub3JtYWxcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LCB0eXBlOiBcImJ1dHRvblwiIH0sIHsgY2hpbGRyZW46IFwiQ2FuY2VsXCIgfSkpLCAoMCwganN4X3J1bnRpbWVfMS5qc3gpKEJ1dHRvbl8xLmRlZmF1bHQsIE9iamVjdC5hc3NpZ24oeyBjb2xvcjogXCJibHVlXCIsIG91dGxpbmVkOiB0cnVlLCBzaXplOiBcInNtYWxsXCIsIHR5cGU6IFwic3VibWl0XCIgfSwgeyBjaGlsZHJlbjogXCJDcmVhdGUgYW5kIGFkZFwiIH0pKV0gfSkpXSB9KSkgfSkpKSwgY29sbGVjdGlvbnMgJiZcbiAgICAgICAgICAgICAgICBzdGF0dXMgPT09IFwibm9ybWFsXCIgJiZcbiAgICAgICAgICAgICAgICBjb2xsZWN0aW9ucy5tYXAoKGNsKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAoKDAsIGpzeF9ydW50aW1lXzEuanN4cykoXCJhXCIsIE9iamVjdC5hc3NpZ24oeyBocmVmOiBcImphdmFzY3JpcHQ6dm9pZCgwKVwiLCBjbGFzc05hbWU6IGBzZWxlY3RhYmxlLWl0ZW0gJHtjbC5zZWxlY3RlZCA/IFwic2VsZWN0YWJsZS1pdGVtLS1zZWxlY3RlZFwiIDogXCJcIn1gLCBvbkNsaWNrOiAoKSA9PiB0b2dnbGVQYWdlSW5DTChjbC5pZCkgfSwgeyBjaGlsZHJlbjogW2NsLm5hbWUsIFwiIFwiLCAoMCwganN4X3J1bnRpbWVfMS5qc3gpKFwic3BhblwiLCB7fSldIH0pLCBjbC5pZCkpO1xuICAgICAgICAgICAgICAgIH0pLCAhY29sbGVjdGlvbnMubGVuZ3RoICYmIHN0YXR1cyA9PT0gXCJub3JtYWxcIiAmJiAoKDAsIGpzeF9ydW50aW1lXzEuanN4cykoXCJkaXZcIiwgT2JqZWN0LmFzc2lnbih7IGNsYXNzTmFtZTogXCJ1LXRleHQtY2VudGVyIG1hcmdpbi10b3AtMS01XCIgfSwgeyBjaGlsZHJlbjogWygwLCBqc3hfcnVudGltZV8xLmpzeCkoXCJlbVwiLCB7IGNoaWxkcmVuOiBcIkN1cnJlbnRseSB5b3UgZG9uJ3QgaGF2ZSBhbnkgY29sbGVjdGlvbnMuXCIgfSksICgwLCBqc3hfcnVudGltZV8xLmpzeCkoXCJlbVwiLCB7IGNoaWxkcmVuOiBcIkNyZWF0ZSBvbmUgYnkgY2xpY2tpbmcgb24gdGhlIGJ1dHRvbiBhYm92ZS5cIiB9KV0gfSkpKV0gfSkpKTtcbn07XG5leHBvcnRzLmRlZmF1bHQgPSBDb2xsZWN0aW9uTW9kYWw7XG4iLCJcInVzZSBzdHJpY3RcIjtcbnZhciBfX2ltcG9ydERlZmF1bHQgPSAodGhpcyAmJiB0aGlzLl9faW1wb3J0RGVmYXVsdCkgfHwgZnVuY3Rpb24gKG1vZCkge1xuICAgIHJldHVybiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSA/IG1vZCA6IHsgXCJkZWZhdWx0XCI6IG1vZCB9O1xufTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmNvbnN0IGpzeF9ydW50aW1lXzEgPSByZXF1aXJlKFwicmVhY3QvanN4LXJ1bnRpbWVcIik7XG5jb25zdCBCdXR0b25fMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiLi4vZm9ybXMvQnV0dG9uXCIpKTtcbmNvbnN0IENvbmZpcm1Nb2RhbCA9ICh7IGhlYWRlciwgbWVzc2FnZSwgb3Blbiwgb25DYW5jZWwsIG9uQ29uZmlybSwgYnRuTmFtZSwgY2hpbGRyZW4sIH0pID0+IHtcbiAgICBjb25zdCBjbGFzc05hbWUgPSBvcGVuID8gXCJtZGwgbWRsLWNvbmZcIiA6IFwibWRsIG1kbC1jb25mIGRpc3BsYXktbm9uZVwiO1xuICAgIHJldHVybiAoKDAsIGpzeF9ydW50aW1lXzEuanN4KShcImRpdlwiLCBPYmplY3QuYXNzaWduKHsgY2xhc3NOYW1lOiBjbGFzc05hbWUgfSwgeyBjaGlsZHJlbjogKDAsIGpzeF9ydW50aW1lXzEuanN4cykoXCJkaXZcIiwgT2JqZWN0LmFzc2lnbih7IGNsYXNzTmFtZTogXCJtZGxfX2NvbnRlbnRcIiB9LCB7IGNoaWxkcmVuOiBbKDAsIGpzeF9ydW50aW1lXzEuanN4cykoXCJkaXZcIiwgT2JqZWN0LmFzc2lnbih7IGNsYXNzTmFtZTogXCJtZGxfX2hlYWRlclwiIH0sIHsgY2hpbGRyZW46IFsoMCwganN4X3J1bnRpbWVfMS5qc3gpKFwic3BhblwiLCBPYmplY3QuYXNzaWduKHsgY2xhc3NOYW1lOiBcIm1kbF9fY2xvc2VcIiwgb25DbGljazogb25DYW5jZWwgfSwgeyBjaGlsZHJlbjogXCJcXHUwMEQ3XCIgfSkpLCAoMCwganN4X3J1bnRpbWVfMS5qc3gpKFwiaDNcIiwgT2JqZWN0LmFzc2lnbih7IGNsYXNzTmFtZTogXCJoZWFkaW5nLXRlcnRpYXJ5XCIgfSwgeyBjaGlsZHJlbjogaGVhZGVyIH0pKV0gfSkpLCAoMCwganN4X3J1bnRpbWVfMS5qc3hzKShcImRpdlwiLCBPYmplY3QuYXNzaWduKHsgY2xhc3NOYW1lOiBcIm1kbF9fYm9keVwiIH0sIHsgY2hpbGRyZW46IFttZXNzYWdlIHx8IGNoaWxkcmVuLCAoMCwganN4X3J1bnRpbWVfMS5qc3gpKFwiZm9ybVwiLCBPYmplY3QuYXNzaWduKHsgb25TdWJtaXQ6IChlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25Db25maXJtKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSB9LCB7IGNoaWxkcmVuOiAoMCwganN4X3J1bnRpbWVfMS5qc3gpKFwiZGl2XCIsIE9iamVjdC5hc3NpZ24oeyBjbGFzc05hbWU6IFwidS1mbGV4LXRleHQtcmlnaHRcIiB9LCB7IGNoaWxkcmVuOiAoMCwganN4X3J1bnRpbWVfMS5qc3gpKEJ1dHRvbl8xLmRlZmF1bHQsIE9iamVjdC5hc3NpZ24oeyB0eXBlOiBcInN1Ym1pdFwiLCBjb2xvcjogXCJyZWRcIiwgcm91bmRlZDogdHJ1ZSB9LCB7IGNoaWxkcmVuOiBidG5OYW1lID8gYnRuTmFtZSA6IFwiUmVtb3ZlXCIgfSkpIH0pKSB9KSldIH0pKV0gfSkpIH0pKSk7XG59O1xuZXhwb3J0cy5kZWZhdWx0ID0gQ29uZmlybU1vZGFsO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5jb25zdCBqc3hfcnVudGltZV8xID0gcmVxdWlyZShcInJlYWN0L2pzeC1ydW50aW1lXCIpO1xuY29uc3QgcmVhY3RfZG9tXzEgPSByZXF1aXJlKFwicmVhY3QtZG9tXCIpO1xuY29uc3QgTW9kYWwgPSAoeyBjaGlsZHJlbiwgaGVhZGVyLCBvcGVuLCB0eXBlLCBvbkNsb3NlIH0pID0+IHtcbiAgICBsZXQgY2xhc3NOYW1lID0gb3BlbiA/IFwibWRsXCIgOiBcIm1kbCBkaXNwbGF5LW5vbmVcIjtcbiAgICBpZiAodHlwZSA9PT0gXCJzbWFsbFwiKVxuICAgICAgICBjbGFzc05hbWUgKz0gXCIgbWRsLXNtXCI7XG4gICAgcmV0dXJuICgwLCByZWFjdF9kb21fMS5jcmVhdGVQb3J0YWwpKCgwLCBqc3hfcnVudGltZV8xLmpzeCkoXCJkaXZcIiwgT2JqZWN0LmFzc2lnbih7IGNsYXNzTmFtZTogY2xhc3NOYW1lIH0sIHsgY2hpbGRyZW46ICgwLCBqc3hfcnVudGltZV8xLmpzeHMpKFwiZGl2XCIsIE9iamVjdC5hc3NpZ24oeyBjbGFzc05hbWU6IFwibWRsX19jb250ZW50XCIgfSwgeyBjaGlsZHJlbjogWygwLCBqc3hfcnVudGltZV8xLmpzeHMpKFwiZGl2XCIsIE9iamVjdC5hc3NpZ24oeyBjbGFzc05hbWU6IFwibWRsX19oZWFkZXJcIiB9LCB7IGNoaWxkcmVuOiBbKDAsIGpzeF9ydW50aW1lXzEuanN4KShcInNwYW5cIiwgT2JqZWN0LmFzc2lnbih7IGNsYXNzTmFtZTogXCJtZGxfX2Nsb3NlXCIsIG9uQ2xpY2s6IG9uQ2xvc2UgfSwgeyBjaGlsZHJlbjogXCJcXHUwMEQ3XCIgfSkpLCAoMCwganN4X3J1bnRpbWVfMS5qc3gpKFwiaDNcIiwgT2JqZWN0LmFzc2lnbih7IGNsYXNzTmFtZTogXCJoZWFkaW5nLXRlcnRpYXJ5XCIgfSwgeyBjaGlsZHJlbjogaGVhZGVyIH0pKV0gfSkpLCAoMCwganN4X3J1bnRpbWVfMS5qc3gpKFwiZGl2XCIsIE9iamVjdC5hc3NpZ24oeyBjbGFzc05hbWU6IFwibWRsX19ib2R5XCIgfSwgeyBjaGlsZHJlbjogY2hpbGRyZW4gfSkpXSB9KSkgfSkpLCBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI21vZGFsLXJvb3RcIikpO1xufTtcbmV4cG9ydHMuZGVmYXVsdCA9IE1vZGFsO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG52YXIgX19hd2FpdGVyID0gKHRoaXMgJiYgdGhpcy5fX2F3YWl0ZXIpIHx8IGZ1bmN0aW9uICh0aGlzQXJnLCBfYXJndW1lbnRzLCBQLCBnZW5lcmF0b3IpIHtcbiAgICBmdW5jdGlvbiBhZG9wdCh2YWx1ZSkgeyByZXR1cm4gdmFsdWUgaW5zdGFuY2VvZiBQID8gdmFsdWUgOiBuZXcgUChmdW5jdGlvbiAocmVzb2x2ZSkgeyByZXNvbHZlKHZhbHVlKTsgfSk7IH1cbiAgICByZXR1cm4gbmV3IChQIHx8IChQID0gUHJvbWlzZSkpKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgZnVuY3Rpb24gZnVsZmlsbGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yLm5leHQodmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxuICAgICAgICBmdW5jdGlvbiByZWplY3RlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvcltcInRocm93XCJdKHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cbiAgICAgICAgZnVuY3Rpb24gc3RlcChyZXN1bHQpIHsgcmVzdWx0LmRvbmUgPyByZXNvbHZlKHJlc3VsdC52YWx1ZSkgOiBhZG9wdChyZXN1bHQudmFsdWUpLnRoZW4oZnVsZmlsbGVkLCByZWplY3RlZCk7IH1cbiAgICAgICAgc3RlcCgoZ2VuZXJhdG9yID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pKS5uZXh0KCkpO1xuICAgIH0pO1xufTtcbnZhciBfX2ltcG9ydERlZmF1bHQgPSAodGhpcyAmJiB0aGlzLl9faW1wb3J0RGVmYXVsdCkgfHwgZnVuY3Rpb24gKG1vZCkge1xuICAgIHJldHVybiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSA/IG1vZCA6IHsgXCJkZWZhdWx0XCI6IG1vZCB9O1xufTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmNvbnN0IGpzeF9ydW50aW1lXzEgPSByZXF1aXJlKFwicmVhY3QvanN4LXJ1bnRpbWVcIik7XG5jb25zdCByZWFjdF8xID0gcmVxdWlyZShcInJlYWN0XCIpO1xuY29uc3QgY29tbW9uXzEgPSByZXF1aXJlKFwiQHBhZ3Nlci9jb21tb25cIik7XG5jb25zdCBNb2RhbF8xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCIuL01vZGFsXCIpKTtcbmNvbnN0IExvYWRpbmdfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiLi4vTG9hZGluZ1wiKSk7XG5jb25zdCBJbnB1dEZpbGVfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiLi4vZm9ybXMvSW5wdXRGaWxlXCIpKTtcbmNvbnN0IEJ1dHRvbl8xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCIuLi9mb3Jtcy9CdXR0b25cIikpO1xuY29uc3QgVXBsb2FkUGhvdG8gPSAocHJvcHMpID0+IHtcbiAgICBjb25zdCBbc3RhdHVzLCBzZXRTdGF0dXNdID0gKDAsIHJlYWN0XzEudXNlU3RhdGUpKFwiY2xlYW5cIik7XG4gICAgY29uc3QgW2Vycm9yLCBzZXRFcnJvcl0gPSAoMCwgcmVhY3RfMS51c2VTdGF0ZSkoXCJcIik7XG4gICAgY29uc3QgW2lucHV0TGFiZWxOYW1lLCBzZXRJbnB1dExhYmVsTmFtZV0gPSAoMCwgcmVhY3RfMS51c2VTdGF0ZSkoXCJVcGxvYWQgYSBGaWxlXCIpO1xuICAgIC8vIFdoZW4gdXNlciBzZWxlY3RzIGEgZmlsZVxuICAgIGNvbnN0IG9uRmlsZUlucHV0Q2hhbmdlID0gKGUsIGZpbGVOYW1lKSA9PiB7XG4gICAgICAgIHNldFN0YXR1cyhcIm9uRmlsZVwiKTtcbiAgICAgICAgc2V0RXJyb3IoXCJcIik7XG4gICAgICAgIHNldElucHV0TGFiZWxOYW1lKGZpbGVOYW1lKTtcbiAgICB9O1xuICAgIC8vIFdoZW4gdXNlciBjbGlja3Mgb24gdXBsb2FkIGJ1dHRvblxuICAgIGNvbnN0IG9uVXBsb2FkQ2xpY2sgPSAoKSA9PiBfX2F3YWl0ZXIodm9pZCAwLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcbiAgICAgICAgc2V0U3RhdHVzKFwibG9hZGluZ1wiKTtcbiAgICAgICAgLy8gUHJlcGFyZSB0aGUgZm9ybSBkYXRhIHRvIGJlIHNlbnQgdG8gc2VydmVyXG4gICAgICAgIGxldCBmb3JtRGF0YSA9IG5ldyBGb3JtRGF0YSgpO1xuICAgICAgICAvLyBAdHMtaWdub3JlXG4gICAgICAgIGNvbnN0IGZpbGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2ZpbGUtaW5wdXRcIikuZmlsZXNbMF07XG4gICAgICAgIGZvcm1EYXRhLmFwcGVuZChcImZpbGVcIiwgZmlsZSk7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICB5aWVsZCBjb21tb25fMS5yZXF1ZXN0LnBvc3QocHJvcHMudXJsLCBmb3JtRGF0YSwge1xuICAgICAgICAgICAgICAgIGF1dGg6IHRydWUsXG4gICAgICAgICAgICAgICAgY29udGVudFR5cGU6IFwibXVsdGlwYXJ0L2Zvcm0tZGF0YVwiLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBwcm9wcy5vbkNsb3NlKCk7XG4gICAgICAgICAgICAvLyBDYWxsIHRoZSBzdWNjZXNzIGZ1bmN0aW9uIHNvIHRoYXQgdGhlIHBhcmVudCBjb21wb25lbnQgd2lsbCBnZXQgbm90aWZpZWRcbiAgICAgICAgICAgIHByb3BzLnN1Y2Nlc3MoKTtcbiAgICAgICAgICAgIHJlc2V0KCk7XG4gICAgICAgIH1cbiAgICAgICAgY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgIGxldCBtc2cgPSBcIlRoZXJlIHdhcyBhbiBlcnJvciB3aXRoIHVwbG9hZGluZyB5b3VyIHBob3RvLlwiO1xuICAgICAgICAgICAgaWYgKGUubWVzc2FnZSlcbiAgICAgICAgICAgICAgICBtc2cgPSBlLm1lc3NhZ2U7XG4gICAgICAgICAgICAoMCwgY29tbW9uXzEuYWxlcnQpKG1zZywgXCJlcnJvclwiKTtcbiAgICAgICAgICAgIHJlc2V0KCk7XG4gICAgICAgICAgICBwcm9wcy5vbkNsb3NlKCk7XG4gICAgICAgIH1cbiAgICB9KTtcbiAgICAvLyBSZXNldCB0aGUgcGhvdG8gY2hvb3NpbmdcbiAgICBjb25zdCByZXNldCA9ICgpID0+IHtcbiAgICAgICAgc2V0U3RhdHVzKFwiY2xlYW5cIik7XG4gICAgICAgIHNldElucHV0TGFiZWxOYW1lKFwiVXBsb2FkIGEgRmlsZVwiKTtcbiAgICB9O1xuICAgIHJldHVybiAoKDAsIGpzeF9ydW50aW1lXzEuanN4cykoTW9kYWxfMS5kZWZhdWx0LCBPYmplY3QuYXNzaWduKHsgaGVhZGVyOiBwcm9wcy5oZWFkZXIsIG9wZW46IHByb3BzLm9wZW4sIG9uQ2xvc2U6ICgpID0+IHtcbiAgICAgICAgICAgIHByb3BzLm9uQ2xvc2UoKTtcbiAgICAgICAgICAgIHNldEVycm9yKFwiXCIpO1xuICAgICAgICB9IH0sIHsgY2hpbGRyZW46IFsoMCwganN4X3J1bnRpbWVfMS5qc3gpKFwicFwiLCBPYmplY3QuYXNzaWduKHsgY2xhc3NOYW1lOiBcIlwiIH0sIHsgY2hpbGRyZW46IHByb3BzLnRleHQgfSkpLCAoMCwganN4X3J1bnRpbWVfMS5qc3gpKFwicFwiLCBPYmplY3QuYXNzaWduKHsgY2xhc3NOYW1lOiBcImltYWdlX191cGxvYWQtLWVycm9yXCIgfSwgeyBjaGlsZHJlbjogZXJyb3IgfSkpLCAoMCwganN4X3J1bnRpbWVfMS5qc3gpKElucHV0RmlsZV8xLmRlZmF1bHQsIHsgYWRkQ2xhc3M6IHN0YXR1cyA9PT0gXCJjbGVhblwiID8gXCJtYXJnaW4tYm90dG9tLTJcIiA6IFwibWFyZ2luLWJvdHRvbS0wXCIsIGxhYmVsOiBpbnB1dExhYmVsTmFtZSwgaWQ6IFwiZmlsZS1pbnB1dFwiLCBzaXplOiBwcm9wcy5zaXplLCBvbkNoYW5nZTogb25GaWxlSW5wdXRDaGFuZ2UsIG9uQ2xpY2s6IChlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHNldEVycm9yKFwiXCIpO1xuICAgICAgICAgICAgICAgIH0sIG9uRXJyb3I6IChlcnJvcikgPT4ge1xuICAgICAgICAgICAgICAgICAgICBzZXRFcnJvcihlcnJvcik7XG4gICAgICAgICAgICAgICAgICAgIHNldElucHV0TGFiZWxOYW1lKFwiVXBsb2FkIGEgRmlsZVwiKTtcbiAgICAgICAgICAgICAgICAgICAgcmVzZXQoKTtcbiAgICAgICAgICAgICAgICB9IH0pLCAoMCwganN4X3J1bnRpbWVfMS5qc3hzKShcImRpdlwiLCBPYmplY3QuYXNzaWduKHsgY2xhc3NOYW1lOiBgaW1hZ2VfX3VwbG9hZC0tb3B0aW9ucyAke3N0YXR1cyA9PT0gXCJvbkZpbGVcIiA/IFwiXCIgOiBcImRpc3BsYXktbm9uZVwifWAgfSwgeyBjaGlsZHJlbjogWygwLCBqc3hfcnVudGltZV8xLmpzeCkoQnV0dG9uXzEuZGVmYXVsdCwgT2JqZWN0LmFzc2lnbih7IGNvbG9yOiBcImJsdWVcIiwgcm91bmRlZDogdHJ1ZSwgb3V0bGluZWQ6IHRydWUsIG9uQ2xpY2s6ICgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXNldCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb3BzLm9uQ2xvc2UoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gfSwgeyBjaGlsZHJlbjogXCJDYW5jZWxcIiB9KSksICgwLCBqc3hfcnVudGltZV8xLmpzeCkoQnV0dG9uXzEuZGVmYXVsdCwgT2JqZWN0LmFzc2lnbih7IGNvbG9yOiBcImJsdWVcIiwgcm91bmRlZDogdHJ1ZSwgb25DbGljazogKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uVXBsb2FkQ2xpY2soKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gfSwgeyBjaGlsZHJlbjogXCJVcGxvYWRcIiB9KSldIH0pKSwgc3RhdHVzID09PSBcImxvYWRpbmdcIiAmJiAoKDAsIGpzeF9ydW50aW1lXzEuanN4KShcImRpdlwiLCBPYmplY3QuYXNzaWduKHsgY2xhc3NOYW1lOiBcImltYWdlX191cGxvYWQtLWxvYWRpbmcgbWFyZ2luLXRvcC0xXCIgfSwgeyBjaGlsZHJlbjogKDAsIGpzeF9ydW50aW1lXzEuanN4KShcImRpdlwiLCBPYmplY3QuYXNzaWduKHsgY2xhc3NOYW1lOiBcImNlbnRlci1jb250ZW50XCIgfSwgeyBjaGlsZHJlbjogKDAsIGpzeF9ydW50aW1lXzEuanN4KShMb2FkaW5nXzEuZGVmYXVsdCwge30pIH0pKSB9KSkpXSB9KSkpO1xufTtcbmV4cG9ydHMuZGVmYXVsdCA9IFVwbG9hZFBob3RvO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG52YXIgX19hd2FpdGVyID0gKHRoaXMgJiYgdGhpcy5fX2F3YWl0ZXIpIHx8IGZ1bmN0aW9uICh0aGlzQXJnLCBfYXJndW1lbnRzLCBQLCBnZW5lcmF0b3IpIHtcbiAgICBmdW5jdGlvbiBhZG9wdCh2YWx1ZSkgeyByZXR1cm4gdmFsdWUgaW5zdGFuY2VvZiBQID8gdmFsdWUgOiBuZXcgUChmdW5jdGlvbiAocmVzb2x2ZSkgeyByZXNvbHZlKHZhbHVlKTsgfSk7IH1cbiAgICByZXR1cm4gbmV3IChQIHx8IChQID0gUHJvbWlzZSkpKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgZnVuY3Rpb24gZnVsZmlsbGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yLm5leHQodmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxuICAgICAgICBmdW5jdGlvbiByZWplY3RlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvcltcInRocm93XCJdKHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cbiAgICAgICAgZnVuY3Rpb24gc3RlcChyZXN1bHQpIHsgcmVzdWx0LmRvbmUgPyByZXNvbHZlKHJlc3VsdC52YWx1ZSkgOiBhZG9wdChyZXN1bHQudmFsdWUpLnRoZW4oZnVsZmlsbGVkLCByZWplY3RlZCk7IH1cbiAgICAgICAgc3RlcCgoZ2VuZXJhdG9yID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pKS5uZXh0KCkpO1xuICAgIH0pO1xufTtcbnZhciBfX2ltcG9ydERlZmF1bHQgPSAodGhpcyAmJiB0aGlzLl9faW1wb3J0RGVmYXVsdCkgfHwgZnVuY3Rpb24gKG1vZCkge1xuICAgIHJldHVybiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSA/IG1vZCA6IHsgXCJkZWZhdWx0XCI6IG1vZCB9O1xufTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmNvbnN0IGpzeF9ydW50aW1lXzEgPSByZXF1aXJlKFwicmVhY3QvanN4LXJ1bnRpbWVcIik7XG5jb25zdCByZWFjdF8xID0gcmVxdWlyZShcInJlYWN0XCIpO1xuY29uc3QgY29tbW9uXzEgPSByZXF1aXJlKFwiQHBhZ3Nlci9jb21tb25cIik7XG5jb25zdCBNb2RhbF8xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCIuL01vZGFsXCIpKTtcbmNvbnN0IExvYWRpbmdfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiLi4vTG9hZGluZ1wiKSk7XG5jb25zdCBJbnB1dEZpbGVfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiLi4vZm9ybXMvSW5wdXRGaWxlXCIpKTtcbmNvbnN0IEJ1dHRvbl8xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCIuLi9mb3Jtcy9CdXR0b25cIikpO1xuY29uc3QgVXBsb2FkUGhvdG8gPSAocHJvcHMpID0+IHtcbiAgICBjb25zdCBbc3RhdHVzLCBzZXRTdGF0dXNdID0gKDAsIHJlYWN0XzEudXNlU3RhdGUpKFwiY2xlYW5cIik7XG4gICAgY29uc3QgW2Vycm9yLCBzZXRFcnJvcl0gPSAoMCwgcmVhY3RfMS51c2VTdGF0ZSkoXCJcIik7XG4gICAgY29uc3QgW2Nyb3BEYXRhLCBzZXRDcm9wRGF0YV0gPSAoMCwgcmVhY3RfMS51c2VTdGF0ZSkoeyB4OiAwLCB5OiAwLCB3aWR0aDogMCwgaGVpZ2h0OiAwIH0pO1xuICAgICgwLCByZWFjdF8xLnVzZUVmZmVjdCkoKCkgPT4ge1xuICAgICAgICAvLyBMb2FkIENyb29wZXIgamF2YXNjcmlwdCBmaWxlXG4gICAgICAgIGNvbnN0IHNjcmlwdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzY3JpcHRcIik7XG4gICAgICAgIHNjcmlwdC5zZXRBdHRyaWJ1dGUoXCJzcmNcIiwgXCIvY3JvcHBlci5taW4uanNcIik7XG4gICAgICAgIGRvY3VtZW50LmhlYWQuYXBwZW5kQ2hpbGQoc2NyaXB0KTtcbiAgICAgICAgLy8gTG9hZCBDcm9vcGVyIGNzcyBmaWxlXG4gICAgICAgIGNvbnN0IHN0eWxlc2hlZXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlua1wiKTtcbiAgICAgICAgc3R5bGVzaGVldC5ocmVmID0gXCIvY3JvcHBlci5taW4uY3NzXCI7XG4gICAgICAgIHN0eWxlc2hlZXQudHlwZSA9IFwidGV4dC9jc3NcIjtcbiAgICAgICAgc3R5bGVzaGVldC5yZWwgPSBcInN0eWxlc2hlZXRcIjtcbiAgICAgICAgZG9jdW1lbnQuaGVhZC5hcHBlbmRDaGlsZChzdHlsZXNoZWV0KTtcbiAgICB9LCBbXSk7XG4gICAgLy8gV2hlbiB1c2VyIHNlbGVjdHMgYSBwaG90b1xuICAgIGNvbnN0IG9uRmlsZUlucHV0Q2hhbmdlID0gKGUsIGZpbGVOYW1lLCBpbWdVcmwpID0+IHtcbiAgICAgICAgc2V0RXJyb3IoXCJcIik7XG4gICAgICAgIHNldFN0YXR1cyhcImNyb3BwaW5nXCIpO1xuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2ltZy1wcmV2aWV3XCIpLnNyYyA9XG4gICAgICAgICAgICBpbWdVcmwgfHwgXCJcIjtcbiAgICAgICAgY3JvcChwcm9wcy5hc3BlY3RSYXRpbywgcHJvcHMubWluV2lkdGgsIHByb3BzLm1pbkhlaWdodCk7XG4gICAgfTtcbiAgICAvLyBXaGVuIHVzZXIgY2xpY2tzIG9uIHVwbG9hZCBidXR0b25cbiAgICBjb25zdCBvblVwbG9hZENsaWNrID0gKCkgPT4gX19hd2FpdGVyKHZvaWQgMCwgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XG4gICAgICAgIHNldFN0YXR1cyhcImxvYWRpbmdcIik7XG4gICAgICAgIC8vIFByZXBhcmUgdGhlIGZvcm0gZGF0YSB0byBiZSBzZW50IHRvIHNlcnZlclxuICAgICAgICBsZXQgZm9ybURhdGEgPSBuZXcgRm9ybURhdGEoKTtcbiAgICAgICAgZm9ybURhdGEuc2V0KFwiY3JvcERhdGFcIiwgYHsgXCJ4XCI6IFwiJHtjcm9wRGF0YS54fVwiLCBcInlcIjogXCIke2Nyb3BEYXRhLnl9XCIsIFwid2lkdGhcIjogXCIke2Nyb3BEYXRhLndpZHRofVwiLCBcImhlaWdodFwiOiBcIiR7Y3JvcERhdGEuaGVpZ2h0fVwiIH1gKTtcbiAgICAgICAgLy8gQHRzLWlnbm9yZVxuICAgICAgICBmb3JtRGF0YS5hcHBlbmQoXCJpbWdcIiwgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNpbWFnZS1pbnB1dFwiKS5maWxlc1swXSk7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBjb25zdCByZXNwb25zZSA9ICh5aWVsZCBjb21tb25fMS5yZXF1ZXN0LnB1dChwcm9wcy51cmwsIGZvcm1EYXRhLCB7XG4gICAgICAgICAgICAgICAgYXV0aDogdHJ1ZSxcbiAgICAgICAgICAgICAgICBjb250ZW50VHlwZTogXCJtdWx0aXBhcnQvZm9ybS1kYXRhXCIsXG4gICAgICAgICAgICB9KSk7XG4gICAgICAgICAgICAvLyBAdHMtaWdub3JlXG4gICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3Jlc2V0LWJ0blwiKS5jbGljaygpO1xuICAgICAgICAgICAgcHJvcHMub25DbG9zZSgpO1xuICAgICAgICAgICAgLy8gQ2FsbCB0aGUgc3VjY2VzcyBmdW5jdGlvbiBzbyB0aGF0IHRoZSBwYXJlbnQgY29tcG9uZW50IHdpbGwgZ2V0IG5vdGlmaWVkXG4gICAgICAgICAgICBwcm9wcy5zdWNjZXNzKHJlc3BvbnNlLmltYWdlKTtcbiAgICAgICAgICAgICgwLCBjb21tb25fMS5hbGVydCkoXCJQaG90byB3YXMgdXBsb2FkZWQgc3VjY2Vzc2Z1bGx5LlwiLCBcInN1Y2Nlc3NcIik7XG4gICAgICAgICAgICBzZXRTdGF0dXMoXCJjbGVhblwiKTtcbiAgICAgICAgfVxuICAgICAgICBjYXRjaCAoZSkge1xuICAgICAgICAgICAgLy8gQHRzLWlnbm9yZVxuICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNyZXNldC1idG5cIikuY2xpY2soKTtcbiAgICAgICAgICAgIHNldFN0YXR1cyhcImNsZWFuXCIpO1xuICAgICAgICAgICAgKDAsIGNvbW1vbl8xLmFsZXJ0KShcIlRoZXJlIHdhcyBhbiBlcnJvciB3aXRoIHVwbG9hZGluZyB5b3VyIHBob3RvLlwiLCBcImVycm9yXCIpO1xuICAgICAgICAgICAgcHJvcHMub25DbG9zZSgpO1xuICAgICAgICB9XG4gICAgfSk7XG4gICAgLy8gUmVzZXQgdGhlIHBob3RvIGNob29zaW5nXG4gICAgY29uc3QgcmVzZXQgPSAoKSA9PiB7XG4gICAgICAgIHNldFN0YXR1cyhcImNsZWFuXCIpO1xuICAgICAgICAvLyBAdHMtaWdub3JlXG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjaW1nLXByZXZpZXdcIikuc3JjID0gXCJcIjtcbiAgICB9O1xuICAgIC8vIFN0YXJ0IHRoZSBjcm9wcGVyIG9uIHRoZSBpbWFnZSBwcmV2aWV3XG4gICAgY29uc3QgY3JvcCA9IChhc3BlY3QsIG1pblcsIG1pbkgpID0+IHtcbiAgICAgICAgY29uc3QgaW1hZ2UgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImltZy1wcmV2aWV3XCIpO1xuICAgICAgICAvLyBAdHMtaWdub3JlXG4gICAgICAgIGNvbnN0IGNyb3BwZXIgPSBuZXcgQ3JvcHBlcihpbWFnZSwge1xuICAgICAgICAgICAgYXNwZWN0UmF0aW86IGFzcGVjdCxcbiAgICAgICAgICAgIHZpZXdNb2RlOiAzLFxuICAgICAgICAgICAgYmFja2dyb3VuZDogZmFsc2UsXG4gICAgICAgICAgICBtb2RhbDogZmFsc2UsXG4gICAgICAgICAgICB6b29tYWJsZTogZmFsc2UsXG4gICAgICAgICAgICBtaW5Dcm9wQm94V2lkdGg6IG1pblcsXG4gICAgICAgICAgICBtaW5Dcm9wQm94SGVpZ2h0OiBtaW5ILFxuICAgICAgICAgICAgY3JvcGVuZDogKCkgPT4ge1xuICAgICAgICAgICAgICAgIHNldENyb3BEYXRhKHtcbiAgICAgICAgICAgICAgICAgICAgeDogY3JvcHBlci5nZXREYXRhKCkueCxcbiAgICAgICAgICAgICAgICAgICAgeTogY3JvcHBlci5nZXREYXRhKCkueSxcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IGNyb3BwZXIuZ2V0RGF0YSgpLndpZHRoLFxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IGNyb3BwZXIuZ2V0RGF0YSgpLmhlaWdodCxcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICByZWFkeTogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIGNvbnN0IHNlbGYgPSB0aGlzO1xuICAgICAgICAgICAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgICAgICAgICAgICBkb2N1bWVudFxuICAgICAgICAgICAgICAgICAgICAucXVlcnlTZWxlY3RvcihcIiNyZXNldC1idG5cIilcbiAgICAgICAgICAgICAgICAgICAgLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChzZWxmLmNyb3BwZXIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYuY3JvcHBlci5kZXN0cm95KCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICBzZXRDcm9wRGF0YSh7XG4gICAgICAgICAgICAgICAgICAgIHg6IGNyb3BwZXIuZ2V0RGF0YSgpLngsXG4gICAgICAgICAgICAgICAgICAgIHk6IGNyb3BwZXIuZ2V0RGF0YSgpLnksXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiBjcm9wcGVyLmdldERhdGEoKS53aWR0aCxcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiBjcm9wcGVyLmdldERhdGEoKS5oZWlnaHQsXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9LFxuICAgICAgICB9KTtcbiAgICB9O1xuICAgIHJldHVybiAoKDAsIGpzeF9ydW50aW1lXzEuanN4cykoTW9kYWxfMS5kZWZhdWx0LCBPYmplY3QuYXNzaWduKHsgaGVhZGVyOiBwcm9wcy5oZWFkZXIsIG9wZW46IHByb3BzLm9wZW4sIG9uQ2xvc2U6ICgpID0+IHtcbiAgICAgICAgICAgIHByb3BzLm9uQ2xvc2UoKTtcbiAgICAgICAgICAgIHNldEVycm9yKFwiXCIpO1xuICAgICAgICB9IH0sIHsgY2hpbGRyZW46IFsoMCwganN4X3J1bnRpbWVfMS5qc3gpKFwicFwiLCBPYmplY3QuYXNzaWduKHsgY2xhc3NOYW1lOiBcImltYWdlX191cGxvYWQtLXRleHRcIiB9LCB7IGNoaWxkcmVuOiBwcm9wcy50ZXh0IH0pKSwgKDAsIGpzeF9ydW50aW1lXzEuanN4KShcInBcIiwgT2JqZWN0LmFzc2lnbih7IGNsYXNzTmFtZTogXCJpbWFnZV9fdXBsb2FkLS1lcnJvclwiIH0sIHsgY2hpbGRyZW46IGVycm9yIH0pKSwgKDAsIGpzeF9ydW50aW1lXzEuanN4KShcImVtXCIsIE9iamVjdC5hc3NpZ24oeyBjbGFzc05hbWU6IGBpbWFnZV9fdXBsb2FkLS1jcm9wLW1zZyAke3Byb3BzLmNyb3BNc2cgJiYgc3RhdHVzID09PSBcImNyb3BwaW5nXCIgPyBcIlwiIDogXCJkaXNwbGF5LW5vbmVcIn1gIH0sIHsgY2hpbGRyZW46IHByb3BzLmNyb3BNc2cgfSkpLCAoMCwganN4X3J1bnRpbWVfMS5qc3gpKElucHV0RmlsZV8xLmRlZmF1bHQsIHsgYWRkQ2xhc3M6IFwibWFyZ2luLWJvdHRvbS0yXCIsIGhpZGU6IHN0YXR1cyAhPT0gXCJjbGVhblwiLCBsYWJlbDogcHJvcHMuaW5wdXRMYWJlbE5hbWUsIGlkOiBcImltYWdlLWlucHV0XCIsIHNpemU6IHByb3BzLnNpemUsIHR5cGU6IFwiaW1hZ2VcIiwgbWluV2lkdGg6IHByb3BzLm1pbldpZHRoLCBtaW5IZWlnaHQ6IHByb3BzLm1pbkhlaWdodCwgb25DaGFuZ2U6IG9uRmlsZUlucHV0Q2hhbmdlLCBvbkNsaWNrOiAoZSkgPT4geyB9LCBvbkVycm9yOiAoZXJyb3IpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgc2V0RXJyb3IoZXJyb3IpO1xuICAgICAgICAgICAgICAgICAgICByZXNldCgpO1xuICAgICAgICAgICAgICAgIH0gfSksICgwLCBqc3hfcnVudGltZV8xLmpzeCkoXCJkaXZcIiwgeyBjaGlsZHJlbjogKDAsIGpzeF9ydW50aW1lXzEuanN4KShcImltZ1wiLCB7IGlkOiBcImltZy1wcmV2aWV3XCIgfSkgfSksICgwLCBqc3hfcnVudGltZV8xLmpzeHMpKFwiZGl2XCIsIE9iamVjdC5hc3NpZ24oeyBjbGFzc05hbWU6IGBpbWFnZV9fdXBsb2FkLS1vcHRpb25zIG1hcmdpbi10b3AtMiAke3N0YXR1cyA9PT0gXCJjcm9wcGluZ1wiID8gXCJcIiA6IFwiZGlzcGxheS1ub25lXCJ9YCB9LCB7IGNoaWxkcmVuOiBbKDAsIGpzeF9ydW50aW1lXzEuanN4KShCdXR0b25fMS5kZWZhdWx0LCBPYmplY3QuYXNzaWduKHsgaWQ6IFwicmVzZXQtYnRuXCIsIHJvdW5kZWQ6IHRydWUsIGNvbG9yOiBcImJsdWVcIiwgb3V0bGluZWQ6IHRydWUsIG9uQ2xpY2s6ICgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXNldCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSB9LCB7IGNoaWxkcmVuOiBcIkNob29zZSBhbm90aGVyIHBob3RvXCIgfSkpLCAoMCwganN4X3J1bnRpbWVfMS5qc3gpKEJ1dHRvbl8xLmRlZmF1bHQsIE9iamVjdC5hc3NpZ24oeyBjb2xvcjogXCJibHVlXCIsIHJvdW5kZWQ6IHRydWUsIG9uQ2xpY2s6ICgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvblVwbG9hZENsaWNrKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9IH0sIHsgY2hpbGRyZW46IFwiVXBsb2FkXCIgfSkpXSB9KSksIHN0YXR1cyA9PT0gXCJsb2FkaW5nXCIgJiYgKCgwLCBqc3hfcnVudGltZV8xLmpzeCkoXCJkaXZcIiwgT2JqZWN0LmFzc2lnbih7IGNsYXNzTmFtZTogXCJpbWFnZV9fdXBsb2FkLS1sb2FkaW5nIG1hcmdpbi10b3AtMlwiIH0sIHsgY2hpbGRyZW46ICgwLCBqc3hfcnVudGltZV8xLmpzeCkoXCJkaXZcIiwgT2JqZWN0LmFzc2lnbih7IGNsYXNzTmFtZTogXCJjZW50ZXItY29udGVudFwiIH0sIHsgY2hpbGRyZW46ICgwLCBqc3hfcnVudGltZV8xLmpzeCkoTG9hZGluZ18xLmRlZmF1bHQsIHt9KSB9KSkgfSkpKV0gfSkpKTtcbn07XG5leHBvcnRzLmRlZmF1bHQgPSBVcGxvYWRQaG90bztcbiJdLCJuYW1lcyI6WyJPYmplY3QiLCJkZWZpbmVQcm9wZXJ0eSIsImV4cG9ydHMiLCJ2YWx1ZSIsIkFsZXJ0IiwianN4X3J1bnRpbWVfMSIsInJlcXVpcmUiLCJwcm9wcyIsImNsYXNzTmFtZSIsIm1lc3NhZ2UiLCJ0eXBlIiwiYWRkaXRpb25hbENsYXNzZXMiLCJqc3hzIiwiYXNzaWduIiwiY2hpbGRyZW4iLCJqc3giLCJvbkNsaWNrIiwib25DbG9zZSIsIklubGluZUxvYWRpbmciLCJlbCIsImNvbG9yIiwiY2VudGVyIiwiZGVmYXVsdCIsIkxvYWRpbmciLCJfX2ltcG9ydERlZmF1bHQiLCJtb2QiLCJfX2VzTW9kdWxlIiwiSW5saW5lTG9hZGluZ18xIiwiQnV0dG9uIiwic2l6ZSIsIm91dGxpbmVkIiwicm91bmRlZCIsImJsb2NrIiwibG9hZGluZ0NvbG9yIiwiaWQiLCJzdHlsZSIsImRpc2FibGVkIiwibG9hZGluZyIsIkRyb3Bkb3duIiwibnVtIiwib25DaGFuZ2UiLCJzZWxlY3QiLCJidXR0b24iLCJpdGVtcyIsIm1hcCIsImhyZWYiLCJyZWFjdF8xIiwiSW5wdXQiLCJfYSIsInNldFZhbHVlIiwidXNlU3RhdGUiLCJ0b1N0cmluZyIsImlucHV0IiwidXNlUmVmIiwidXNlRWZmZWN0Iiwic3VjY2VzcyIsImVycm9yIiwic2hvdWxkRGl2aWRlTnVtYmVyQnlUaHJlZSIsInJlcXVpcmVkV2l0aEVycm9yIiwibGluZWQiLCJGcmFnbWVudCIsInBsYWNlaG9sZGVyIiwiY3VycmVudCIsImZvY3VzIiwibGFiZWwiLCJoZWxwIiwiaW5uZXJJbnB1dExhYmVsIiwicmVmIiwiZWxlbSIsIm5leHRTaWJsaW5nIiwicGFkZGluZ0xlZnQiLCJjbGllbnRXaWR0aCIsIk51bWJlciIsInRvTG9jYWxlU3RyaW5nIiwicmVxdWlyZWQiLCJhdXRvRm9jdXMiLCJhdXRvQ29tcGxldGUiLCJtYXhMZW5ndGgiLCJldmVudCIsInRhcmdldCIsInJlcGxhY2UiLCJvbkJsdXIiLCJsZW5ndGgiLCJjb21tb25fMSIsIklucHV0RmlsZSIsImFkZENsYXNzIiwiaGlkZSIsIm1pbldpZHRoIiwibWluSGVpZ2h0Iiwib25FcnJvciIsImh0bWxGb3IiLCJlIiwiaW5wdXRFbCIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsImlucHV0RmlsZXMiLCJmaWxlcyIsImlucHV0RmlsZSIsImZpbGVTaXplIiwiZmlsZU5hbWUiLCJuYW1lIiwiZmlsZVR5cGUiLCJhbGVydCIsIkVycm9yIiwiaW1nVXJsIiwiVVJMIiwiY3JlYXRlT2JqZWN0VVJMIiwiaW1hZ2UiLCJJbWFnZSIsIm9ubG9hZCIsImhlaWdodCIsIndpZHRoIiwic3JjIiwiVGV4dGFyZWEiLCJyb3dzIiwiVXBsb2FkUGhvdG8iLCJVcGxvYWRBdHRhY2hGaWxlIiwiQWRkVG9Db2xsZWN0aW9uIiwiTW9kYWwiLCJDb25maXJtTW9kYWwiLCJMb2FkaW5nXzEiLCJBbGVydF8xIiwiZW51bWVyYWJsZSIsImdldCIsIk1vZGFsXzEiLCJDb25maXJtTW9kYWxfMSIsIklucHV0XzEiLCJCdXR0b25fMSIsIlRleHRhcmVhXzEiLCJJbnB1dEZpbGVfMSIsIkRyb3Bkb3duXzEiLCJBZGRUb0NvbGxlY3Rpb25fMSIsIlVwbG9hZEF0dGFjaEZpbGVfMSIsIlVwbG9hZFBob3RvXzEiLCJfX2F3YWl0ZXIiLCJ0aGlzQXJnIiwiX2FyZ3VtZW50cyIsIlAiLCJnZW5lcmF0b3IiLCJhZG9wdCIsInJlc29sdmUiLCJQcm9taXNlIiwicmVqZWN0IiwiZnVsZmlsbGVkIiwic3RlcCIsIm5leHQiLCJyZWplY3RlZCIsInJlc3VsdCIsImRvbmUiLCJ0aGVuIiwiYXBwbHkiLCJDb2xsZWN0aW9uTW9kYWwiLCJzZXROYW1lIiwic3RhdHVzIiwic2V0U3RhdHVzIiwiY29sbGVjdGlvbnMiLCJzZXRDb2xsZWN0aW9ucyIsIm9wZW4iLCJmZXRjaENvbGxlY3Rpb25zIiwicmVzcG9uc2UiLCJyZXF1ZXN0IiwicGFnZUlkIiwiYXV0aCIsImNyZWF0ZUNvbGxlY3Rpb24iLCJwb3N0IiwidG9nZ2xlUGFnZUluQ0wiLCJjb2xsZWN0aW9uIiwiY2xJZCIsInNlbGVjdGVkIiwiY2xOYW1lIiwiaGVhZGVyIiwib25TdWJtaXQiLCJwcmV2ZW50RGVmYXVsdCIsImNsIiwib25DYW5jZWwiLCJvbkNvbmZpcm0iLCJidG5OYW1lIiwicmVhY3RfZG9tXzEiLCJjcmVhdGVQb3J0YWwiLCJzZXRFcnJvciIsImlucHV0TGFiZWxOYW1lIiwic2V0SW5wdXRMYWJlbE5hbWUiLCJvbkZpbGVJbnB1dENoYW5nZSIsIm9uVXBsb2FkQ2xpY2siLCJmb3JtRGF0YSIsIkZvcm1EYXRhIiwiZmlsZSIsImFwcGVuZCIsInVybCIsImNvbnRlbnRUeXBlIiwicmVzZXQiLCJtc2ciLCJ0ZXh0IiwiY3JvcERhdGEiLCJzZXRDcm9wRGF0YSIsIngiLCJ5Iiwic2NyaXB0IiwiY3JlYXRlRWxlbWVudCIsInNldEF0dHJpYnV0ZSIsImhlYWQiLCJhcHBlbmRDaGlsZCIsInN0eWxlc2hlZXQiLCJyZWwiLCJjcm9wIiwiYXNwZWN0UmF0aW8iLCJzZXQiLCJwdXQiLCJjbGljayIsImFzcGVjdCIsIm1pblciLCJtaW5IIiwiZ2V0RWxlbWVudEJ5SWQiLCJjcm9wcGVyIiwiQ3JvcHBlciIsInZpZXdNb2RlIiwiYmFja2dyb3VuZCIsIm1vZGFsIiwiem9vbWFibGUiLCJtaW5Dcm9wQm94V2lkdGgiLCJtaW5Dcm9wQm94SGVpZ2h0IiwiY3JvcGVuZCIsImdldERhdGEiLCJyZWFkeSIsInNlbGYiLCJhZGRFdmVudExpc3RlbmVyIiwiZGVzdHJveSIsImNyb3BNc2ciXSwic291cmNlUm9vdCI6IiJ9