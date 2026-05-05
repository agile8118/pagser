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
    setStatus("loading"); // @ts-ignore

    const file = document.querySelector("#file-input").files[0];
    const qs = `?filename=${encodeURIComponent(file.name)}`;

    try {
      yield common_1.request.post(props.url + qs, file, {
        auth: true,
        contentType: "application/octet-stream"
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
    setStatus("loading"); // @ts-ignore

    const file = document.querySelector("#image-input").files[0];
    const qs = `?x=${Math.round(cropData.x)}&y=${Math.round(cropData.y)}&width=${Math.round(cropData.width)}&height=${Math.round(cropData.height)}`;

    try {
      const response = yield common_1.request.put(props.url + qs, file, {
        auth: true,
        contentType: "application/octet-stream"
      }); // @ts-ignore

      document.querySelector("#reset-btn").click();
      props.onClose();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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ZS9kaXN0L0FsZXJ0LmpzIiwid2VicGFjazovL0BwYWdzZXIvd2ViLy4uL3JldXNhYmxlL2Rpc3QvSW5saW5lTG9hZGluZy5qcyIsIndlYnBhY2s6Ly9AcGFnc2VyL3dlYi8uLi9yZXVzYWJsZS9kaXN0L0xvYWRpbmcuanMiLCJ3ZWJwYWNrOi8vQHBhZ3Nlci93ZWIvLi4vcmV1c2FibGUvZGlzdC9mb3Jtcy9CdXR0b24uanMiLCJ3ZWJwYWNrOi8vQHBhZ3Nlci93ZWIvLi4vcmV1c2FibGUvZGlzdC9mb3Jtcy9Ecm9wZG93bi5qcyIsIndlYnBhY2s6Ly9AcGFnc2VyL3dlYi8uLi9yZXVzYWJsZS9kaXN0L2Zvcm1zL0lucHV0LmpzIiwid2VicGFjazovL0BwYWdzZXIvd2ViLy4uL3JldXNhYmxlL2Rpc3QvZm9ybXMvSW5wdXRGaWxlLmpzIiwid2VicGFjazovL0BwYWdzZXIvd2ViLy4uL3JldXNhYmxlL2Rpc3QvZm9ybXMvVGV4dGFyZWEuanMiLCJ3ZWJwYWNrOi8vQHBhZ3Nlci93ZWIvLi4vcmV1c2FibGUvZGlzdC9pbmRleC5qcyIsIndlYnBhY2s6Ly9AcGFnc2VyL3dlYi8uLi9yZXVzYWJsZS9kaXN0L21vZGFscy9BZGRUb0NvbGxlY3Rpb24uanMiLCJ3ZWJwYWNrOi8vQHBhZ3Nlci93ZWIvLi4vcmV1c2FibGUvZGlzdC9tb2RhbHMvQ29uZmlybU1vZGFsLmpzIiwid2VicGFjazovL0BwYWdzZXIvd2ViLy4uL3JldXNhYmxlL2Rpc3QvbW9kYWxzL01vZGFsLmpzIiwid2VicGFjazovL0BwYWdzZXIvd2ViLy4uL3JldXNhYmxlL2Rpc3QvbW9kYWxzL1VwbG9hZEF0dGFjaEZpbGUuanMiLCJ3ZWJwYWNrOi8vQHBhZ3Nlci93ZWIvLi4vcmV1c2FibGUvZGlzdC9tb2RhbHMvVXBsb2FkUGhvdG8uanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLkFsZXJ0ID0gdm9pZCAwO1xuY29uc3QganN4X3J1bnRpbWVfMSA9IHJlcXVpcmUoXCJyZWFjdC9qc3gtcnVudGltZVwiKTtcbmNvbnN0IEFsZXJ0ID0gKHByb3BzKSA9PiB7XG4gICAgbGV0IGNsYXNzTmFtZSA9IFwiZGlzcGxheS1ub25lXCI7XG4gICAgaWYgKHByb3BzLm1lc3NhZ2UpIHtcbiAgICAgICAgaWYgKHByb3BzLnR5cGUgPT09IFwic3VjY2Vzc1wiKSB7XG4gICAgICAgICAgICBjbGFzc05hbWUgPSBcImFsZXJ0IGFsZXJ0LS1zdWNjZXNzXCI7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHByb3BzLnR5cGUgPT09IFwiZXJyb3JcIikge1xuICAgICAgICAgICAgY2xhc3NOYW1lID0gXCJhbGVydCBhbGVydC0tZXJyb3JcIjtcbiAgICAgICAgfVxuICAgICAgICBpZiAocHJvcHMudHlwZSA9PT0gXCJub3JtYWxsXCIpIHtcbiAgICAgICAgICAgIGNsYXNzTmFtZSA9IFwiYWxlcnQgYWxlcnQtLW5vcm1hbGxcIjtcbiAgICAgICAgfVxuICAgICAgICBpZiAocHJvcHMuYWRkaXRpb25hbENsYXNzZXMpIHtcbiAgICAgICAgICAgIGNsYXNzTmFtZSArPSBgICR7cHJvcHMuYWRkaXRpb25hbENsYXNzZXN9YDtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gKCgwLCBqc3hfcnVudGltZV8xLmpzeHMpKFwiZGl2XCIsIE9iamVjdC5hc3NpZ24oeyBjbGFzc05hbWU6IGNsYXNzTmFtZSB9LCB7IGNoaWxkcmVuOiBbKDAsIGpzeF9ydW50aW1lXzEuanN4KShcInNwYW5cIiwgeyBjaGlsZHJlbjogcHJvcHMubWVzc2FnZSB9KSwgKDAsIGpzeF9ydW50aW1lXzEuanN4KShcImJ1dHRvblwiLCBPYmplY3QuYXNzaWduKHsgb25DbGljazogcHJvcHMub25DbG9zZSwgdHlwZTogXCJidXR0b25cIiwgY2xhc3NOYW1lOiBcImFsZXJ0X19kaXNtaXNzXCIgfSwgeyBjaGlsZHJlbjogKDAsIGpzeF9ydW50aW1lXzEuanN4KShcImlcIiwgeyBjbGFzc05hbWU6IFwiZmEgZmEtcmVtb3ZlXCIgfSkgfSkpXSB9KSkpO1xufTtcbmV4cG9ydHMuQWxlcnQgPSBBbGVydDtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuY29uc3QganN4X3J1bnRpbWVfMSA9IHJlcXVpcmUoXCJyZWFjdC9qc3gtcnVudGltZVwiKTtcbmNvbnN0IElubGluZUxvYWRpbmcgPSAocHJvcHMpID0+IHtcbiAgICBsZXQgY2xhc3NOYW1lID0gXCJsZHMtZWxsaXBzaXMgXCI7XG4gICAgaWYgKHByb3BzLmNsYXNzTmFtZSlcbiAgICAgICAgY2xhc3NOYW1lICs9IHByb3BzLmNsYXNzTmFtZTtcbiAgICBjb25zdCBlbCA9ICgoMCwganN4X3J1bnRpbWVfMS5qc3hzKShcImRpdlwiLCBPYmplY3QuYXNzaWduKHsgY2xhc3NOYW1lOiBjbGFzc05hbWUgfSwgeyBjaGlsZHJlbjogWygwLCBqc3hfcnVudGltZV8xLmpzeCkoXCJkaXZcIiwgeyBjbGFzc05hbWU6IGBsZHMtZWxsaXBzaXMtLSR7cHJvcHMuY29sb3J9YCB9KSwgKDAsIGpzeF9ydW50aW1lXzEuanN4KShcImRpdlwiLCB7IGNsYXNzTmFtZTogYGxkcy1lbGxpcHNpcy0tJHtwcm9wcy5jb2xvcn1gIH0pLCAoMCwganN4X3J1bnRpbWVfMS5qc3gpKFwiZGl2XCIsIHsgY2xhc3NOYW1lOiBgbGRzLWVsbGlwc2lzLS0ke3Byb3BzLmNvbG9yfWAgfSksICgwLCBqc3hfcnVudGltZV8xLmpzeCkoXCJkaXZcIiwgeyBjbGFzc05hbWU6IGBsZHMtZWxsaXBzaXMtLSR7cHJvcHMuY29sb3J9YCB9KV0gfSkpKTtcbiAgICBpZiAocHJvcHMuY2VudGVyKSB7XG4gICAgICAgIHJldHVybiAoMCwganN4X3J1bnRpbWVfMS5qc3gpKFwiZGl2XCIsIE9iamVjdC5hc3NpZ24oeyBjbGFzc05hbWU6IFwidS10ZXh0LWNlbnRlclwiIH0sIHsgY2hpbGRyZW46IGVsIH0pKTtcbiAgICB9XG4gICAgZWxzZVxuICAgICAgICByZXR1cm4gZWw7XG59O1xuZXhwb3J0cy5kZWZhdWx0ID0gSW5saW5lTG9hZGluZztcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuY29uc3QganN4X3J1bnRpbWVfMSA9IHJlcXVpcmUoXCJyZWFjdC9qc3gtcnVudGltZVwiKTtcbmNvbnN0IExvYWRpbmcgPSAoeyBjbGFzc05hbWUgfSkgPT4ge1xuICAgIHJldHVybiAoKDAsIGpzeF9ydW50aW1lXzEuanN4KShcImRpdlwiLCBPYmplY3QuYXNzaWduKHsgY2xhc3NOYW1lOiBgbGRzLWNzcyBuZy1zY29wZSAke2NsYXNzTmFtZX1gIH0sIHsgY2hpbGRyZW46ICgwLCBqc3hfcnVudGltZV8xLmpzeHMpKFwiZGl2XCIsIE9iamVjdC5hc3NpZ24oeyBjbGFzc05hbWU6IFwibGRzLXNwaW5uZXJcIiB9LCB7IGNoaWxkcmVuOiBbKDAsIGpzeF9ydW50aW1lXzEuanN4KShcImRpdlwiLCB7fSksICgwLCBqc3hfcnVudGltZV8xLmpzeCkoXCJkaXZcIiwge30pLCAoMCwganN4X3J1bnRpbWVfMS5qc3gpKFwiZGl2XCIsIHt9KSwgKDAsIGpzeF9ydW50aW1lXzEuanN4KShcImRpdlwiLCB7fSksICgwLCBqc3hfcnVudGltZV8xLmpzeCkoXCJkaXZcIiwge30pLCAoMCwganN4X3J1bnRpbWVfMS5qc3gpKFwiZGl2XCIsIHt9KSwgKDAsIGpzeF9ydW50aW1lXzEuanN4KShcImRpdlwiLCB7fSksICgwLCBqc3hfcnVudGltZV8xLmpzeCkoXCJkaXZcIiwge30pLCAoMCwganN4X3J1bnRpbWVfMS5qc3gpKFwiZGl2XCIsIHt9KSwgKDAsIGpzeF9ydW50aW1lXzEuanN4KShcImRpdlwiLCB7fSksICgwLCBqc3hfcnVudGltZV8xLmpzeCkoXCJkaXZcIiwge30pLCAoMCwganN4X3J1bnRpbWVfMS5qc3gpKFwiZGl2XCIsIHt9KV0gfSkpIH0pKSk7XG59O1xuZXhwb3J0cy5kZWZhdWx0ID0gTG9hZGluZztcbiIsIlwidXNlIHN0cmljdFwiO1xudmFyIF9faW1wb3J0RGVmYXVsdCA9ICh0aGlzICYmIHRoaXMuX19pbXBvcnREZWZhdWx0KSB8fCBmdW5jdGlvbiAobW9kKSB7XG4gICAgcmV0dXJuIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpID8gbW9kIDogeyBcImRlZmF1bHRcIjogbW9kIH07XG59O1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuY29uc3QganN4X3J1bnRpbWVfMSA9IHJlcXVpcmUoXCJyZWFjdC9qc3gtcnVudGltZVwiKTtcbmNvbnN0IElubGluZUxvYWRpbmdfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiLi4vSW5saW5lTG9hZGluZ1wiKSk7XG5jb25zdCBCdXR0b24gPSAocHJvcHMpID0+IHtcbiAgICBsZXQgY2xhc3NOYW1lID0gXCJidXR0b25cIjtcbiAgICBzd2l0Y2ggKHByb3BzLnNpemUpIHtcbiAgICAgICAgY2FzZSBcImJpZ1wiOlxuICAgICAgICAgICAgY2xhc3NOYW1lICs9IFwiIGJ1dHRvbi1iaWdcIjtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIFwic21hbGxcIjpcbiAgICAgICAgICAgIGNsYXNzTmFtZSArPSBcIiBidXR0b24tc21hbGxcIjtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIFwiZXh0cmFTbWFsbFwiOlxuICAgICAgICAgICAgY2xhc3NOYW1lICs9IFwiIGJ1dHRvbi1leHRyYS1zbWFsbFwiO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgfVxuICAgIHN3aXRjaCAocHJvcHMuY29sb3IpIHtcbiAgICAgICAgY2FzZSBcImRlZmF1bHRcIjpcbiAgICAgICAgICAgIGlmIChwcm9wcy5vdXRsaW5lZCkge1xuICAgICAgICAgICAgICAgIGNsYXNzTmFtZSArPSBcIiBidXR0b24tZGVmYXVsdC1vdXRsaW5lZFwiO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lICs9IFwiIGJ1dHRvbi1kZWZhdWx0XCI7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSBcImJsdWVcIjpcbiAgICAgICAgICAgIGlmIChwcm9wcy5vdXRsaW5lZCkge1xuICAgICAgICAgICAgICAgIGNsYXNzTmFtZSArPSBcIiBidXR0b24tYmx1ZS1vdXRsaW5lZFwiO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lICs9IFwiIGJ1dHRvbi1ibHVlXCI7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSBcInJlZFwiOlxuICAgICAgICAgICAgaWYgKHByb3BzLm91dGxpbmVkKSB7XG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lICs9IFwiIGJ1dHRvbi1yZWQtb3V0bGluZWRcIjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIGNsYXNzTmFtZSArPSBcIiBidXR0b24tcmVkXCI7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSBcImdyZWVuXCI6XG4gICAgICAgICAgICBpZiAocHJvcHMub3V0bGluZWQpIHtcbiAgICAgICAgICAgICAgICBjbGFzc05hbWUgKz0gXCIgYnV0dG9uLWdyZWVuLW91dGxpbmVkXCI7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBjbGFzc05hbWUgKz0gXCIgYnV0dG9uLWdyZWVuXCI7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSBcImdyYXlcIjpcbiAgICAgICAgICAgIGlmIChwcm9wcy5vdXRsaW5lZCkge1xuICAgICAgICAgICAgICAgIGNsYXNzTmFtZSArPSBcIiBidXR0b24tZ3JheS1vdXRsaW5lZFwiO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lICs9IFwiIGJ1dHRvbi1ncmF5XCI7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgIGlmIChwcm9wcy5vdXRsaW5lZCkge1xuICAgICAgICAgICAgICAgIGNsYXNzTmFtZSArPSBcIiBidXR0b24tZGVmYXVsdC1vdXRsaW5lZFwiO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lICs9IFwiIGJ1dHRvbi1kZWZhdWx0XCI7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBicmVhaztcbiAgICB9XG4gICAgaWYgKHByb3BzLnJvdW5kZWQpIHtcbiAgICAgICAgY2xhc3NOYW1lICs9IFwiIGJ1dHRvbi1yb3VuZGVkXCI7XG4gICAgfVxuICAgIGlmIChwcm9wcy5ibG9jaykge1xuICAgICAgICBjbGFzc05hbWUgKz0gXCIgYnV0dG9uLWJsb2NrXCI7XG4gICAgfVxuICAgIGNsYXNzTmFtZSArPSBcIiBcIiArIHByb3BzLmNsYXNzTmFtZTtcbiAgICBsZXQgbG9hZGluZ0NvbG9yO1xuICAgIGlmIChwcm9wcy5jb2xvciA9PT0gXCJibHVlXCIpXG4gICAgICAgIGxvYWRpbmdDb2xvciA9IFwiYmx1ZVwiO1xuICAgIGlmICghcHJvcHMub3V0bGluZWQpXG4gICAgICAgIGxvYWRpbmdDb2xvciA9IFwibGlnaHRcIjtcbiAgICByZXR1cm4gKCgwLCBqc3hfcnVudGltZV8xLmpzeHMpKFwiYnV0dG9uXCIsIE9iamVjdC5hc3NpZ24oeyBpZDogcHJvcHMuaWQsIHN0eWxlOiBwcm9wcy5zdHlsZSwgb25DbGljazogcHJvcHMub25DbGljaywgY2xhc3NOYW1lOiBjbGFzc05hbWUsIHR5cGU6IHByb3BzLnR5cGUgPyBwcm9wcy50eXBlIDogXCJidXR0b25cIiwgZGlzYWJsZWQ6IHByb3BzLmxvYWRpbmcgPyB0cnVlIDogcHJvcHMuZGlzYWJsZWQgfSwgeyBjaGlsZHJlbjogW3Byb3BzLmNoaWxkcmVuLCBwcm9wcy5sb2FkaW5nICYmICgoMCwganN4X3J1bnRpbWVfMS5qc3gpKElubGluZUxvYWRpbmdfMS5kZWZhdWx0LCB7IGNsYXNzTmFtZTogXCJ1LW1hcmdpbi1sZWZ0LTAzXCIsIGNvbG9yOiBsb2FkaW5nQ29sb3IgfSkpXSB9KSkpO1xufTtcbmV4cG9ydHMuZGVmYXVsdCA9IEJ1dHRvbjtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuY29uc3QganN4X3J1bnRpbWVfMSA9IHJlcXVpcmUoXCJyZWFjdC9qc3gtcnVudGltZVwiKTtcbmNvbnN0IERyb3Bkb3duID0gKHsgbnVtLCBjaGlsZHJlbiwgb25DaGFuZ2UsIHNlbGVjdCwgdHlwZSwgY2xhc3NOYW1lID0gXCJidG4tdGV4dFwiLCB9KSA9PiB7XG4gICAgLy8gTWFrZSB0aGUgYnV0dG9uIGJhc2VkIG9uIHBhc3NlZCBjaGlsZHJlblxuICAgIGxldCBidXR0b24gPSAoKDAsIGpzeF9ydW50aW1lXzEuanN4cykoXCJidXR0b25cIiwgT2JqZWN0LmFzc2lnbih7IGNsYXNzTmFtZTogY2xhc3NOYW1lLCBvbkNsaWNrOiAoKSA9PiB7IH0sIFwiZGF0YS1yb2xlXCI6IFwiZHJvcGRvd25cIiwgXCJkYXRhLWRyb3Bkb3duXCI6IG51bSB9LCB7IGNoaWxkcmVuOiBbY2hpbGRyZW5bMF0ucHJvcHMuY2hpbGRyZW4sICgwLCBqc3hfcnVudGltZV8xLmpzeCkoXCJpXCIsIHsgY2xhc3NOYW1lOiBjaGlsZHJlblswXS5wcm9wc1tcImRhdGEtaWNvbi1jbGFzc1wiXSwgXCJhcmlhLWhpZGRlblwiOiBcInRydWVcIiwgXCJkYXRhLXJvbGVcIjogXCJkcm9wZG93blwiLCBcImRhdGEtZHJvcGRvd25cIjogbnVtIH0pXSB9KSkpO1xuICAgIC8vIE1ha2UgbGlzdCBpdGVtcyBiYXNlZCBvbiBwYXNzZWQgY2hpbGRyZW5cbiAgICBsZXQgaXRlbXMgPSBjaGlsZHJlbi5tYXAoKHsgcHJvcHMgfSkgPT4ge1xuICAgICAgICBpZiAocHJvcHNbXCJkYXRhLXJvbGUtbmFtZVwiXSA9PT0gXCJpdGVtXCIpIHtcbiAgICAgICAgICAgIGxldCBjbGFzc05hbWUgPSBzZWxlY3QgPT09IHByb3BzW1wiZGF0YS1uYW1lXCJdXG4gICAgICAgICAgICAgICAgPyBcImRyb3Bkb3duX19pdGVtIGRyb3Bkb3duX19pdGVtLS1hY3RpdmVcIlxuICAgICAgICAgICAgICAgIDogXCJkcm9wZG93bl9faXRlbVwiO1xuICAgICAgICAgICAgcmV0dXJuICgoMCwganN4X3J1bnRpbWVfMS5qc3gpKFwiYVwiLCBPYmplY3QuYXNzaWduKHsgY2xhc3NOYW1lOiBjbGFzc05hbWUsIFwiZGF0YS1yb2xlXCI6IFwiZHJvcGRvd25cIiwgXCJkYXRhLWRyb3Bkb3duXCI6IG51bSwgaHJlZjogXCJqYXZhc2NyaXB0OnZvaWQoMClcIiwgb25DbGljazogKCkgPT4gb25DaGFuZ2UocHJvcHNbXCJkYXRhLW5hbWVcIl0pIH0sIHsgY2hpbGRyZW46IHByb3BzLmNoaWxkcmVuIH0pLCBwcm9wc1tcImRhdGEtbmFtZVwiXSkpO1xuICAgICAgICB9XG4gICAgfSk7XG4gICAgcmV0dXJuICgoMCwganN4X3J1bnRpbWVfMS5qc3hzKShcImRpdlwiLCBPYmplY3QuYXNzaWduKHsgY2xhc3NOYW1lOiBgZHJvcGRvd24gJHt0eXBlID09PSBcIm1pbmlcIiAmJiBcImRyb3Bkb3duLW1pbmlcIn0gZHJvcGRvd24tLWNsb3NlYCwgXCJkYXRhLXJvbGVcIjogXCJkcm9wZG93blwiLCBcImRhdGEtZHJvcGRvd25cIjogbnVtIH0sIHsgY2hpbGRyZW46IFtidXR0b24sICgwLCBqc3hfcnVudGltZV8xLmpzeCkoXCJkaXZcIiwgT2JqZWN0LmFzc2lnbih7IGNsYXNzTmFtZTogXCJkcm9wZG93bl9fY29udGVudFwiLCBcImRhdGEtcm9sZVwiOiBcImRyb3Bkb3duXCIsIFwiZGF0YS1kcm9wZG93blwiOiBudW0gfSwgeyBjaGlsZHJlbjogaXRlbXMgfSkpXSB9KSkpO1xufTtcbmV4cG9ydHMuZGVmYXVsdCA9IERyb3Bkb3duO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5jb25zdCBqc3hfcnVudGltZV8xID0gcmVxdWlyZShcInJlYWN0L2pzeC1ydW50aW1lXCIpO1xuY29uc3QgcmVhY3RfMSA9IHJlcXVpcmUoXCJyZWFjdFwiKTtcbmNvbnN0IElucHV0ID0gKHByb3BzKSA9PiB7XG4gICAgdmFyIF9hO1xuICAgIGNvbnN0IFt2YWx1ZSwgc2V0VmFsdWVdID0gKDAsIHJlYWN0XzEudXNlU3RhdGUpKChfYSA9IHByb3BzLnZhbHVlKSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2EudG9TdHJpbmcoKSk7XG4gICAgY29uc3QgaW5wdXQgPSAoMCwgcmVhY3RfMS51c2VSZWYpKG51bGwpO1xuICAgICgwLCByZWFjdF8xLnVzZUVmZmVjdCkoKCkgPT4ge1xuICAgICAgICBpZiAocHJvcHMudmFsdWUpIHtcbiAgICAgICAgICAgIHNldFZhbHVlKHByb3BzLnZhbHVlLnRvU3RyaW5nKCkpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgc2V0VmFsdWUoXCJcIik7XG4gICAgICAgIH1cbiAgICB9LCBbcHJvcHMudmFsdWVdKTtcbiAgICAoMCwgcmVhY3RfMS51c2VFZmZlY3QpKCgpID0+IHtcbiAgICAgICAgaWYgKHByb3BzLm9uQ2hhbmdlICYmIHR5cGVvZiB2YWx1ZSA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgICAgICAgcHJvcHMub25DaGFuZ2UodmFsdWUpO1xuICAgICAgICB9XG4gICAgfSwgW3ZhbHVlXSk7XG4gICAgbGV0IGNsYXNzTmFtZSA9IFwiZm9ybS10ZXh0XCI7XG4gICAgc3dpdGNoIChwcm9wcy5zaXplKSB7XG4gICAgICAgIGNhc2UgXCJiaWdcIjpcbiAgICAgICAgICAgIGNsYXNzTmFtZSArPSBcIiBmb3JtLXRleHQtLWJpZ1wiO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgXCJzbWFsbFwiOlxuICAgICAgICAgICAgY2xhc3NOYW1lICs9IFwiIGZvcm0tdGV4dC0tc21hbGxcIjtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgIH1cbiAgICBpZiAocHJvcHMucm91bmRlZClcbiAgICAgICAgY2xhc3NOYW1lICs9IFwiIGZvcm0tdGV4dC0tcm91bmRlZFwiO1xuICAgIGlmIChwcm9wcy5zdWNjZXNzICYmICFwcm9wcy5kaXNhYmxlZClcbiAgICAgICAgY2xhc3NOYW1lICs9IFwiIGZvcm0tdGV4dC0tc3VjY2Vzc1wiO1xuICAgIGlmIChwcm9wcy5lcnJvciAmJiAhcHJvcHMuZGlzYWJsZWQpXG4gICAgICAgIGNsYXNzTmFtZSArPSBcIiBmb3JtLXRleHQtLWVycm9yXCI7XG4gICAgaWYgKHByb3BzLmRpc2FibGVkKVxuICAgICAgICBjbGFzc05hbWUgKz0gXCIgZm9ybS10ZXh0LS1kaXNhYmxlZFwiO1xuICAgIGxldCBzaG91bGREaXZpZGVOdW1iZXJCeVRocmVlID0gdHJ1ZTtcbiAgICBpZiAodHlwZW9mIHByb3BzLnNob3VsZERpdmlkZU51bWJlckJ5VGhyZWUgPT09IFwiYm9vbGVhblwiKSB7XG4gICAgICAgIHNob3VsZERpdmlkZU51bWJlckJ5VGhyZWUgPSBwcm9wcy5zaG91bGREaXZpZGVOdW1iZXJCeVRocmVlO1xuICAgIH1cbiAgICBpZiAocHJvcHMucmVxdWlyZWRXaXRoRXJyb3IgJiYgIXZhbHVlKSB7XG4gICAgICAgIGNsYXNzTmFtZSArPSBcIiBmb3JtLXRleHQtLWVycm9yXCI7XG4gICAgfVxuICAgIGlmIChwcm9wcy5saW5lZCkge1xuICAgICAgICBjbGFzc05hbWUgKz0gXCIgZm9ybS10ZXh0LWxpbmVkXCI7XG4gICAgfVxuICAgIHJldHVybiAoKDAsIGpzeF9ydW50aW1lXzEuanN4cykoanN4X3J1bnRpbWVfMS5GcmFnbWVudCwgeyBjaGlsZHJlbjogWygwLCBqc3hfcnVudGltZV8xLmpzeHMpKFwiZGl2XCIsIE9iamVjdC5hc3NpZ24oeyBjbGFzc05hbWU6IGNsYXNzTmFtZSB9LCB7IGNoaWxkcmVuOiBbcHJvcHMucGxhY2Vob2xkZXIgJiYgIXByb3BzLmxpbmVkICYmICgoMCwganN4X3J1bnRpbWVfMS5qc3gpKFwibGFiZWxcIiwgT2JqZWN0LmFzc2lnbih7IGNsYXNzTmFtZTogXCJmb3JtX19sYWJlbFwiLCBvbkNsaWNrOiAoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIF9hO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIChfYSA9IGlucHV0LmN1cnJlbnQpID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS5mb2N1cygpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSB9LCB7IGNoaWxkcmVuOiBwcm9wcy5sYWJlbCB9KSkpLCAoMCwganN4X3J1bnRpbWVfMS5qc3hzKShcImRpdlwiLCBPYmplY3QuYXNzaWduKHsgY2xhc3NOYW1lOiBcImZvcm0tdGV4dF9faW5wdXQtY29udGFpbmVyXCIgfSwgeyBjaGlsZHJlbjogW3Byb3BzLmhlbHAgJiYgKCgwLCBqc3hfcnVudGltZV8xLmpzeHMpKFwiZGl2XCIsIE9iamVjdC5hc3NpZ24oeyBjbGFzc05hbWU6IFwidG9vbHRpcCB0b29sdGlwLXRvcFwiIH0sIHsgY2hpbGRyZW46IFsoMCwganN4X3J1bnRpbWVfMS5qc3gpKFwiYVwiLCBPYmplY3QuYXNzaWduKHsgaHJlZjogXCIjXCIsIGNsYXNzTmFtZTogXCJ0b29sdGlwX19pY29uXCIgfSwgeyBjaGlsZHJlbjogXCI/XCIgfSkpLCAoMCwganN4X3J1bnRpbWVfMS5qc3gpKFwiZGl2XCIsIE9iamVjdC5hc3NpZ24oeyBjbGFzc05hbWU6IFwidG9vbHRpcF9fdGV4dFwiIH0sIHsgY2hpbGRyZW46IHByb3BzLmhlbHAgfSkpXSB9KSkpLCBwcm9wcy5pbm5lcklucHV0TGFiZWwgJiYgKCgwLCBqc3hfcnVudGltZV8xLmpzeCkoXCJzcGFuXCIsIE9iamVjdC5hc3NpZ24oeyBjbGFzc05hbWU6IFwiZm9ybS10ZXh0X19pbm5lci1pbnB1dC1sYWJlbFwiLCByZWY6IChlbGVtKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBBZGQgYSBsZWZ0IHBhZGRpbmcgdG8gdGhlIGlucHV0IGJlY2F1c2Ugb2YgdGhlIG5hbWUgbGFiZWxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChlbGVtKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbGVtLm5leHRTaWJsaW5nLnN0eWxlLnBhZGRpbmdMZWZ0ID0gYCR7ZWxlbS5jbGllbnRXaWR0aCArIDEwfXB4YDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSB9LCB7IGNoaWxkcmVuOiBwcm9wcy5pbm5lcklucHV0TGFiZWwgfSkpKSwgKDAsIGpzeF9ydW50aW1lXzEuanN4KShcImlucHV0XCIsIHsgcmVmOiBpbnB1dCwgY2xhc3NOYW1lOiBcImZvcm0tdGV4dF9faW5wdXRcIiwgaWQ6IHByb3BzLmlkLCBkaXNhYmxlZDogcHJvcHMuZGlzYWJsZWQsIHZhbHVlOiBwcm9wcy50eXBlID09PSBcIm51bWJlclwiICYmIHZhbHVlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IHNob3VsZERpdmlkZU51bWJlckJ5VGhyZWVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IE51bWJlcih2YWx1ZSkudG9Mb2NhbGVTdHJpbmcoKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogdmFsdWVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogdmFsdWUsIHJlcXVpcmVkOiBwcm9wcy5yZXF1aXJlZCwgYXV0b0ZvY3VzOiBwcm9wcy5hdXRvRm9jdXMsIGF1dG9Db21wbGV0ZTogcHJvcHMuYXV0b0NvbXBsZXRlIHx8IFwiXCIsIG1heExlbmd0aDogcHJvcHMubWF4TGVuZ3RoLCBwbGFjZWhvbGRlcjogcHJvcHMucGxhY2Vob2xkZXIsIG9uQ2hhbmdlOiAoZXZlbnQpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCB2YWx1ZSA9IGV2ZW50LnRhcmdldC52YWx1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChwcm9wcy50eXBlID09PSBcIm51bWJlclwiKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWUgPSB2YWx1ZS5yZXBsYWNlKC8sL2csIFwiXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICghIU51bWJlcih2YWx1ZSkgfHwgTnVtYmVyKHZhbHVlKSA9PT0gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRWYWx1ZSh2YWx1ZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0VmFsdWUodmFsdWUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LCBvbkJsdXI6IChldmVudCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHZhbHVlID0gZXZlbnQudGFyZ2V0LnZhbHVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0VmFsdWUodmFsdWUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHByb3BzLm9uQmx1cilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9wcy5vbkJsdXIodmFsdWUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LCB0eXBlOiBwcm9wcy50eXBlID09PSBcInBhc3N3b3JkXCIgPyBcInBhc3N3b3JkXCIgOiBcInRleHRcIiB9KV0gfSkpLCAhcHJvcHMucGxhY2Vob2xkZXIgJiYgKCgwLCBqc3hfcnVudGltZV8xLmpzeCkoXCJsYWJlbFwiLCBPYmplY3QuYXNzaWduKHsgY2xhc3NOYW1lOiBgZm9ybS10ZXh0X19sYWJlbCAke3ZhbHVlID8gXCJmb3JtLXRleHRfX2xhYmVsLS10b3BcIiA6IFwiXCJ9YCwgb25DbGljazogKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBfYTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAoX2EgPSBpbnB1dC5jdXJyZW50KSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2EuZm9jdXMoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gfSwgeyBjaGlsZHJlbjogcHJvcHMubGFiZWwgfSkpKV0gfSkpLCAoMCwganN4X3J1bnRpbWVfMS5qc3hzKShcImRpdlwiLCBPYmplY3QuYXNzaWduKHsgY2xhc3NOYW1lOiBcImZvcm0tdGV4dF9fZm9vdGVyXCIgfSwgeyBjaGlsZHJlbjogW3Byb3BzLmVycm9yICYmICFwcm9wcy5kaXNhYmxlZCAmJiAoKDAsIGpzeF9ydW50aW1lXzEuanN4cykoXCJzcGFuXCIsIE9iamVjdC5hc3NpZ24oeyBjbGFzc05hbWU6IFwiaW5wdXQtZXJyb3JcIiB9LCB7IGNoaWxkcmVuOiBbKDAsIGpzeF9ydW50aW1lXzEuanN4KShcImlcIiwgeyBjbGFzc05hbWU6IFwiZmEgZmEtZXhjbGFtYXRpb24tY2lyY2xlXCIgfSksIHByb3BzLmVycm9yXSB9KSkpLCBwcm9wcy5tYXhMZW5ndGggJiYgKCgwLCBqc3hfcnVudGltZV8xLmpzeCkoXCJzcGFuXCIsIE9iamVjdC5hc3NpZ24oeyBjbGFzc05hbWU6IFwiZm9ybS10ZXh0X19sZW5ndGgtZGlzcGxheVwiIH0sIHsgY2hpbGRyZW46IHByb3BzLm1heExlbmd0aCAtICgodmFsdWUgPT09IG51bGwgfHwgdmFsdWUgPT09IHZvaWQgMCA/IHZvaWQgMCA6IHZhbHVlLmxlbmd0aCkgfHwgMCkgfSkpKV0gfSkpXSB9KSk7XG59O1xuZXhwb3J0cy5kZWZhdWx0ID0gSW5wdXQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcbnZhciBfX2ltcG9ydERlZmF1bHQgPSAodGhpcyAmJiB0aGlzLl9faW1wb3J0RGVmYXVsdCkgfHwgZnVuY3Rpb24gKG1vZCkge1xuICAgIHJldHVybiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSA/IG1vZCA6IHsgXCJkZWZhdWx0XCI6IG1vZCB9O1xufTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmNvbnN0IGpzeF9ydW50aW1lXzEgPSByZXF1aXJlKFwicmVhY3QvanN4LXJ1bnRpbWVcIik7XG5jb25zdCByZWFjdF8xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCJyZWFjdFwiKSk7XG5jb25zdCBjb21tb25fMSA9IHJlcXVpcmUoXCJAcGFnc2VyL2NvbW1vblwiKTtcbmNvbnN0IElucHV0RmlsZSA9ICh7IGFkZENsYXNzLCBoaWRlLCBsYWJlbCwgaWQsIHNpemUsIHR5cGUsIG1pbldpZHRoLCBtaW5IZWlnaHQsIG9uQ2hhbmdlLCBvbkNsaWNrLCBvbkVycm9yLCB9KSA9PiB7XG4gICAgbGV0IGNsYXNzTmFtZSA9IFwiZmlsZV9fdXBsb2FkLS1sYWJlbFwiO1xuICAgIGlmIChhZGRDbGFzcylcbiAgICAgICAgY2xhc3NOYW1lICs9IGAgJHthZGRDbGFzc31gO1xuICAgIGlmIChoaWRlKVxuICAgICAgICBjbGFzc05hbWUgKz0gXCIgZGlzcGxheS1ub25lXCI7XG4gICAgcmV0dXJuICgoMCwganN4X3J1bnRpbWVfMS5qc3hzKShyZWFjdF8xLmRlZmF1bHQuRnJhZ21lbnQsIHsgY2hpbGRyZW46IFsoMCwganN4X3J1bnRpbWVfMS5qc3hzKShcImxhYmVsXCIsIE9iamVjdC5hc3NpZ24oeyBodG1sRm9yOiBpZCwgY2xhc3NOYW1lOiBjbGFzc05hbWUgfSwgeyBjaGlsZHJlbjogWygwLCBqc3hfcnVudGltZV8xLmpzeCkoXCJpXCIsIHsgY2xhc3NOYW1lOiBcImZhIGZhLWNsb3VkLXVwbG9hZFwiLCBcImFyaWEtaGlkZGVuXCI6IFwidHJ1ZVwiIH0pLCBcIiBcIiwgKDAsIGpzeF9ydW50aW1lXzEuanN4KShcInNwYW5cIiwgeyBjaGlsZHJlbjogbGFiZWwgfSldIH0pKSwgKDAsIGpzeF9ydW50aW1lXzEuanN4KShcImlucHV0XCIsIHsgaWQ6IGlkLCBvbkNoYW5nZTogKGUpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgaW5wdXRFbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCMke2lkfWApO1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBpbnB1dEZpbGVzID0gaW5wdXRFbC5maWxlcztcbiAgICAgICAgICAgICAgICAgICAgbGV0IGlucHV0RmlsZTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGlucHV0RmlsZXMpXG4gICAgICAgICAgICAgICAgICAgICAgICBpbnB1dEZpbGUgPSBpbnB1dEZpbGVzWzBdO1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBmaWxlU2l6ZSA9IGlucHV0RmlsZSA9PT0gbnVsbCB8fCBpbnB1dEZpbGUgPT09IHZvaWQgMCA/IHZvaWQgMCA6IGlucHV0RmlsZS5zaXplO1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBmaWxlTmFtZSA9IGlucHV0RmlsZSA9PT0gbnVsbCB8fCBpbnB1dEZpbGUgPT09IHZvaWQgMCA/IHZvaWQgMCA6IGlucHV0RmlsZS5uYW1lO1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBmaWxlVHlwZSA9IGlucHV0RmlsZSA9PT0gbnVsbCB8fCBpbnB1dEZpbGUgPT09IHZvaWQgMCA/IHZvaWQgMCA6IGlucHV0RmlsZS50eXBlO1xuICAgICAgICAgICAgICAgICAgICBpZiAoIWZpbGVTaXplIHx8ICFmaWxlTmFtZSB8fCAhZmlsZVR5cGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICgwLCBjb21tb25fMS5hbGVydCkoXCJTb3JyeSwgc29tZXRoaW5nIHVuZXhwZWN0ZWQgaGFwcGVuZWQuIFBsZWFzZSB0cnkgYWdhaW4gb3IgY29udGFjdCBvdXIgc3VwcG9ydC5cIiwgXCJlcnJvclwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAvLyBBbHdheXMgdmFsaWRhdGUgZmlsZSBzaXplXG4gICAgICAgICAgICAgICAgICAgIGlmIChmaWxlU2l6ZSA+IHNpemUpXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gb25FcnJvcihgRmlsZSBzaXplIG11c3QgYmUgbGVzcyB0aGFuICR7c2l6ZSAvIDEwMDAwMDB9TUIuYCk7XG4gICAgICAgICAgICAgICAgICAgIC8vIFZhbGlkYXRlIGZpbGUgdHlwZSBpZiAndHlwZScgcHJvcGVydHkgaGFzIGJlZW4gc3BlY2lmaWVkXG4gICAgICAgICAgICAgICAgICAgIHN3aXRjaCAodHlwZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSBcImltYWdlXCI6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFtaW5IZWlnaHQgfHwgIW1pbldpZHRoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIlBsZWFzZSBzcGVjaWZ5IG1pbkhlaWdodCBhbmQgbWluV2lkdGggZm9yIHRoZSBjb21wb25lbnQgd2l0aCB0aGUgdHlwZSBvZiAnaW1hZ2UnLlwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gVmFsaWRhdGUgaWYgdGhlIGZpbGUgaXMgaW1hZ2VcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoZmlsZVR5cGUgIT09IFwiaW1hZ2UvanBnXCIgJiZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmlsZVR5cGUgIT09IFwiaW1hZ2UvcG5nXCIgJiZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmlsZVR5cGUgIT09IFwiaW1hZ2UvanBlZ1wiKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gb25FcnJvcihcIk9ubHkganBlZy9qcGcvcG5nIGltYWdlcyBhcmUgYWxsb3dlZC5cIik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gVmFsaWRhdGUgaWYgdGhlIGltYWdlIGhhcyB0aGUgbWluIHdpZHRoIGFuZCBoZWlnaHRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBAdHMtaWdub3JlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgaW1nVXJsID0gVVJMLmNyZWF0ZU9iamVjdFVSTChlLnRhcmdldC5maWxlc1swXSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGltYWdlID0gbmV3IEltYWdlKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaW1hZ2Uub25sb2FkID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5oZWlnaHQgPCBtaW5IZWlnaHQgfHxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMud2lkdGggPCBtaW5XaWR0aCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25FcnJvcihgUGxlYXNlIHVwbG9hZCBhbiBpbWFnZSB3aXRoIHRoZSBtaW5pbXVtIGRpbWVuc2lvbnMgb2YgYXQgbGVhc3QgJHttaW5XaWR0aH0gKiAke21pbkhlaWdodH0gcGl4ZWxzLmApO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2UoZSwgZmlsZU5hbWUsIGltZ1VybCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGltYWdlLnNyYyA9IGltZ1VybDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2UoZSwgZmlsZU5hbWUpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSwgb25DbGljazogKGUpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgLy8gUmVzZXQgdGhlIGlucHV0IGZpbGUgdmFsdWUgYmVmb3JlIGNob29zaW5nIGEgbmV3IGZpbGVcbiAgICAgICAgICAgICAgICAgICAgLy8gQHRzLWlnbm9yZVxuICAgICAgICAgICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAjJHtpZH1gKS52YWx1ZSA9IG51bGw7XG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2soZSk7XG4gICAgICAgICAgICAgICAgfSwgdHlwZTogXCJmaWxlXCIsIG5hbWU6IFwiZmlsZVwiLCBwbGFjZWhvbGRlcjogbGFiZWwgfSldIH0pKTtcbn07XG5leHBvcnRzLmRlZmF1bHQgPSBJbnB1dEZpbGU7XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmNvbnN0IGpzeF9ydW50aW1lXzEgPSByZXF1aXJlKFwicmVhY3QvanN4LXJ1bnRpbWVcIik7XG5jb25zdCByZWFjdF8xID0gcmVxdWlyZShcInJlYWN0XCIpO1xuY29uc3QgVGV4dGFyZWEgPSAocHJvcHMpID0+IHtcbiAgICB2YXIgX2E7XG4gICAgY29uc3QgW3ZhbHVlLCBzZXRWYWx1ZV0gPSAoMCwgcmVhY3RfMS51c2VTdGF0ZSkoKF9hID0gcHJvcHMudmFsdWUpID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS50b1N0cmluZygpKTtcbiAgICBjb25zdCBpbnB1dCA9ICgwLCByZWFjdF8xLnVzZVJlZikobnVsbCk7XG4gICAgKDAsIHJlYWN0XzEudXNlRWZmZWN0KSgoKSA9PiB7XG4gICAgICAgIGlmIChwcm9wcy52YWx1ZSkge1xuICAgICAgICAgICAgc2V0VmFsdWUocHJvcHMudmFsdWUudG9TdHJpbmcoKSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBzZXRWYWx1ZShcIlwiKTtcbiAgICAgICAgfVxuICAgIH0sIFtwcm9wcy52YWx1ZV0pO1xuICAgICgwLCByZWFjdF8xLnVzZUVmZmVjdCkoKCkgPT4ge1xuICAgICAgICBpZiAocHJvcHMub25DaGFuZ2UgJiYgdHlwZW9mIHZhbHVlID09PSBcInN0cmluZ1wiKSB7XG4gICAgICAgICAgICBwcm9wcy5vbkNoYW5nZSh2YWx1ZSk7XG4gICAgICAgIH1cbiAgICB9LCBbdmFsdWVdKTtcbiAgICBsZXQgY2xhc3NOYW1lID0gXCJmb3JtLXRleHQgZm9ybS10ZXh0LS10ZXh0YXJlYVwiO1xuICAgIHN3aXRjaCAocHJvcHMuc2l6ZSkge1xuICAgICAgICBjYXNlIFwiYmlnXCI6XG4gICAgICAgICAgICBjbGFzc05hbWUgKz0gXCIgZm9ybS10ZXh0LS1iaWdcIjtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIFwic21hbGxcIjpcbiAgICAgICAgICAgIGNsYXNzTmFtZSArPSBcIiBmb3JtLXRleHQtLXNtYWxsXCI7XG4gICAgICAgICAgICBicmVhaztcbiAgICB9XG4gICAgaWYgKHByb3BzLnJvdW5kZWQpXG4gICAgICAgIGNsYXNzTmFtZSArPSBcIiBmb3JtLXRleHQtLXJvdW5kZWRcIjtcbiAgICBpZiAocHJvcHMuZXJyb3IpXG4gICAgICAgIGNsYXNzTmFtZSArPSBcIiBmb3JtLXRleHQtLWVycm9yXCI7XG4gICAgcmV0dXJuICgoMCwganN4X3J1bnRpbWVfMS5qc3hzKShqc3hfcnVudGltZV8xLkZyYWdtZW50LCB7IGNoaWxkcmVuOiBbKDAsIGpzeF9ydW50aW1lXzEuanN4cykoXCJkaXZcIiwgT2JqZWN0LmFzc2lnbih7IGNsYXNzTmFtZTogY2xhc3NOYW1lIH0sIHsgY2hpbGRyZW46IFtwcm9wcy5wbGFjZWhvbGRlciAmJiAoKDAsIGpzeF9ydW50aW1lXzEuanN4KShcImxhYmVsXCIsIE9iamVjdC5hc3NpZ24oeyBjbGFzc05hbWU6IFwiZm9ybV9fbGFiZWxcIiwgb25DbGljazogKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBfYTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAoX2EgPSBpbnB1dC5jdXJyZW50KSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2EuZm9jdXMoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gfSwgeyBjaGlsZHJlbjogcHJvcHMubGFiZWwgfSkpKSwgKDAsIGpzeF9ydW50aW1lXzEuanN4cykoXCJkaXZcIiwgT2JqZWN0LmFzc2lnbih7IGNsYXNzTmFtZTogXCJmb3JtLXRleHRfX2lucHV0LWNvbnRhaW5lclwiIH0sIHsgY2hpbGRyZW46IFtwcm9wcy5oZWxwICYmICgoMCwganN4X3J1bnRpbWVfMS5qc3hzKShcImRpdlwiLCBPYmplY3QuYXNzaWduKHsgY2xhc3NOYW1lOiBcInRvb2x0aXAgdG9vbHRpcC10b3AgYS0xOVwiIH0sIHsgY2hpbGRyZW46IFsoMCwganN4X3J1bnRpbWVfMS5qc3gpKFwiYVwiLCBPYmplY3QuYXNzaWduKHsgaHJlZjogXCIjXCIsIGNsYXNzTmFtZTogXCJ0b29sdGlwX19pY29uXCIgfSwgeyBjaGlsZHJlbjogXCI/XCIgfSkpLCAoMCwganN4X3J1bnRpbWVfMS5qc3gpKFwiZGl2XCIsIE9iamVjdC5hc3NpZ24oeyBjbGFzc05hbWU6IFwidG9vbHRpcF9fdGV4dFwiIH0sIHsgY2hpbGRyZW46IHByb3BzLmhlbHAgfSkpXSB9KSkpLCAoMCwganN4X3J1bnRpbWVfMS5qc3gpKFwidGV4dGFyZWFcIiwgeyByb3dzOiBwcm9wcy5yb3dzLCByZWY6IGlucHV0LCBpZDogcHJvcHMuaWQsIGNsYXNzTmFtZTogXCJmb3JtLXRleHRfX2lucHV0XCIsIHBsYWNlaG9sZGVyOiBwcm9wcy5wbGFjZWhvbGRlciwgbWF4TGVuZ3RoOiBwcm9wcy5tYXhMZW5ndGgsIHZhbHVlOiB2YWx1ZSwgcmVxdWlyZWQ6IHByb3BzLnJlcXVpcmVkLCBvbkNoYW5nZTogKGV2ZW50KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgdmFsdWUgPSBldmVudC50YXJnZXQudmFsdWU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRWYWx1ZSh2YWx1ZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sIG9uQmx1cjogKGV2ZW50KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAocHJvcHMub25CbHVyKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvcHMub25CbHVyKGV2ZW50LnRhcmdldC52YWx1ZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gfSldIH0pKSwgIXByb3BzLnBsYWNlaG9sZGVyICYmICgoMCwganN4X3J1bnRpbWVfMS5qc3gpKFwibGFiZWxcIiwgT2JqZWN0LmFzc2lnbih7IGNsYXNzTmFtZTogYGZvcm0tdGV4dF9fbGFiZWwgJHt2YWx1ZSA/IFwiZm9ybS10ZXh0X19sYWJlbC0tdG9wXCIgOiBcIlwifWAsIG9uQ2xpY2s6ICgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgX2E7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKF9hID0gaW5wdXQuY3VycmVudCkgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hLmZvY3VzKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9IH0sIHsgY2hpbGRyZW46IHByb3BzLmxhYmVsIH0pKSldIH0pKSwgKDAsIGpzeF9ydW50aW1lXzEuanN4cykoXCJkaXZcIiwgT2JqZWN0LmFzc2lnbih7IGNsYXNzTmFtZTogXCJmb3JtLXRleHRfX2Zvb3RlclwiIH0sIHsgY2hpbGRyZW46IFtwcm9wcy5lcnJvciAmJiAoKDAsIGpzeF9ydW50aW1lXzEuanN4cykoXCJzcGFuXCIsIE9iamVjdC5hc3NpZ24oeyBjbGFzc05hbWU6IFwiaW5wdXQtZXJyb3JcIiB9LCB7IGNoaWxkcmVuOiBbKDAsIGpzeF9ydW50aW1lXzEuanN4KShcImlcIiwgeyBjbGFzc05hbWU6IFwiZmEgZmEtZXhjbGFtYXRpb24tY2lyY2xlXCIgfSksIHByb3BzLmVycm9yXSB9KSkpLCBwcm9wcy5tYXhMZW5ndGggJiYgKCgwLCBqc3hfcnVudGltZV8xLmpzeCkoXCJzcGFuXCIsIE9iamVjdC5hc3NpZ24oeyBjbGFzc05hbWU6IFwiZm9ybS10ZXh0X19sZW5ndGgtZGlzcGxheVwiIH0sIHsgY2hpbGRyZW46IHByb3BzLm1heExlbmd0aCAtICgodmFsdWUgPT09IG51bGwgfHwgdmFsdWUgPT09IHZvaWQgMCA/IHZvaWQgMCA6IHZhbHVlLmxlbmd0aCkgfHwgMCkgfSkpKV0gfSkpXSB9KSk7XG59O1xuZXhwb3J0cy5kZWZhdWx0ID0gVGV4dGFyZWE7XG4iLCJcInVzZSBzdHJpY3RcIjtcbnZhciBfX2ltcG9ydERlZmF1bHQgPSAodGhpcyAmJiB0aGlzLl9faW1wb3J0RGVmYXVsdCkgfHwgZnVuY3Rpb24gKG1vZCkge1xuICAgIHJldHVybiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSA/IG1vZCA6IHsgXCJkZWZhdWx0XCI6IG1vZCB9O1xufTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuVXBsb2FkUGhvdG8gPSBleHBvcnRzLlVwbG9hZEF0dGFjaEZpbGUgPSBleHBvcnRzLkFkZFRvQ29sbGVjdGlvbiA9IGV4cG9ydHMuRHJvcGRvd24gPSBleHBvcnRzLklucHV0RmlsZSA9IGV4cG9ydHMuVGV4dGFyZWEgPSBleHBvcnRzLkJ1dHRvbiA9IGV4cG9ydHMuSW5wdXQgPSBleHBvcnRzLk1vZGFsID0gZXhwb3J0cy5Db25maXJtTW9kYWwgPSBleHBvcnRzLkFsZXJ0ID0gZXhwb3J0cy5Mb2FkaW5nID0gdm9pZCAwO1xuY29uc3QgTG9hZGluZ18xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCIuL0xvYWRpbmdcIikpO1xuZXhwb3J0cy5Mb2FkaW5nID0gTG9hZGluZ18xLmRlZmF1bHQ7XG5jb25zdCBBbGVydF8xID0gcmVxdWlyZShcIi4vQWxlcnRcIik7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJBbGVydFwiLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gQWxlcnRfMS5BbGVydDsgfSB9KTtcbmNvbnN0IE1vZGFsXzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcIi4vbW9kYWxzL01vZGFsXCIpKTtcbmV4cG9ydHMuTW9kYWwgPSBNb2RhbF8xLmRlZmF1bHQ7XG5jb25zdCBDb25maXJtTW9kYWxfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiLi9tb2RhbHMvQ29uZmlybU1vZGFsXCIpKTtcbmV4cG9ydHMuQ29uZmlybU1vZGFsID0gQ29uZmlybU1vZGFsXzEuZGVmYXVsdDtcbmNvbnN0IElucHV0XzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcIi4vZm9ybXMvSW5wdXRcIikpO1xuZXhwb3J0cy5JbnB1dCA9IElucHV0XzEuZGVmYXVsdDtcbmNvbnN0IEJ1dHRvbl8xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCIuL2Zvcm1zL0J1dHRvblwiKSk7XG5leHBvcnRzLkJ1dHRvbiA9IEJ1dHRvbl8xLmRlZmF1bHQ7XG5jb25zdCBUZXh0YXJlYV8xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCIuL2Zvcm1zL1RleHRhcmVhXCIpKTtcbmV4cG9ydHMuVGV4dGFyZWEgPSBUZXh0YXJlYV8xLmRlZmF1bHQ7XG5jb25zdCBJbnB1dEZpbGVfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiLi9mb3Jtcy9JbnB1dEZpbGVcIikpO1xuZXhwb3J0cy5JbnB1dEZpbGUgPSBJbnB1dEZpbGVfMS5kZWZhdWx0O1xuY29uc3QgRHJvcGRvd25fMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiLi9mb3Jtcy9Ecm9wZG93blwiKSk7XG5leHBvcnRzLkRyb3Bkb3duID0gRHJvcGRvd25fMS5kZWZhdWx0O1xuY29uc3QgQWRkVG9Db2xsZWN0aW9uXzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcIi4vbW9kYWxzL0FkZFRvQ29sbGVjdGlvblwiKSk7XG5leHBvcnRzLkFkZFRvQ29sbGVjdGlvbiA9IEFkZFRvQ29sbGVjdGlvbl8xLmRlZmF1bHQ7XG5jb25zdCBVcGxvYWRBdHRhY2hGaWxlXzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcIi4vbW9kYWxzL1VwbG9hZEF0dGFjaEZpbGVcIikpO1xuZXhwb3J0cy5VcGxvYWRBdHRhY2hGaWxlID0gVXBsb2FkQXR0YWNoRmlsZV8xLmRlZmF1bHQ7XG5jb25zdCBVcGxvYWRQaG90b18xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCIuL21vZGFscy9VcGxvYWRQaG90b1wiKSk7XG5leHBvcnRzLlVwbG9hZFBob3RvID0gVXBsb2FkUGhvdG9fMS5kZWZhdWx0O1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG52YXIgX19hd2FpdGVyID0gKHRoaXMgJiYgdGhpcy5fX2F3YWl0ZXIpIHx8IGZ1bmN0aW9uICh0aGlzQXJnLCBfYXJndW1lbnRzLCBQLCBnZW5lcmF0b3IpIHtcbiAgICBmdW5jdGlvbiBhZG9wdCh2YWx1ZSkgeyByZXR1cm4gdmFsdWUgaW5zdGFuY2VvZiBQID8gdmFsdWUgOiBuZXcgUChmdW5jdGlvbiAocmVzb2x2ZSkgeyByZXNvbHZlKHZhbHVlKTsgfSk7IH1cbiAgICByZXR1cm4gbmV3IChQIHx8IChQID0gUHJvbWlzZSkpKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgZnVuY3Rpb24gZnVsZmlsbGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yLm5leHQodmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxuICAgICAgICBmdW5jdGlvbiByZWplY3RlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvcltcInRocm93XCJdKHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cbiAgICAgICAgZnVuY3Rpb24gc3RlcChyZXN1bHQpIHsgcmVzdWx0LmRvbmUgPyByZXNvbHZlKHJlc3VsdC52YWx1ZSkgOiBhZG9wdChyZXN1bHQudmFsdWUpLnRoZW4oZnVsZmlsbGVkLCByZWplY3RlZCk7IH1cbiAgICAgICAgc3RlcCgoZ2VuZXJhdG9yID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pKS5uZXh0KCkpO1xuICAgIH0pO1xufTtcbnZhciBfX2ltcG9ydERlZmF1bHQgPSAodGhpcyAmJiB0aGlzLl9faW1wb3J0RGVmYXVsdCkgfHwgZnVuY3Rpb24gKG1vZCkge1xuICAgIHJldHVybiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSA/IG1vZCA6IHsgXCJkZWZhdWx0XCI6IG1vZCB9O1xufTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmNvbnN0IGpzeF9ydW50aW1lXzEgPSByZXF1aXJlKFwicmVhY3QvanN4LXJ1bnRpbWVcIik7XG5jb25zdCByZWFjdF8xID0gcmVxdWlyZShcInJlYWN0XCIpO1xuY29uc3QgY29tbW9uXzEgPSByZXF1aXJlKFwiQHBhZ3Nlci9jb21tb25cIik7XG5jb25zdCBNb2RhbF8xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCIuL01vZGFsXCIpKTtcbmNvbnN0IExvYWRpbmdfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiLi4vTG9hZGluZ1wiKSk7XG5jb25zdCBJbnB1dF8xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCIuLi9mb3Jtcy9JbnB1dFwiKSk7XG5jb25zdCBCdXR0b25fMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiLi4vZm9ybXMvQnV0dG9uXCIpKTtcbmNvbnN0IENvbGxlY3Rpb25Nb2RhbCA9IChwcm9wcykgPT4ge1xuICAgIGNvbnN0IFtuYW1lLCBzZXROYW1lXSA9ICgwLCByZWFjdF8xLnVzZVN0YXRlKShcIlwiKTtcbiAgICBjb25zdCBbc3RhdHVzLCBzZXRTdGF0dXNdID0gKDAsIHJlYWN0XzEudXNlU3RhdGUpKFwibm9ybWFsXCIpOyAvLyBXZSdsbCBzaG93IGRpZmZlcmVudCBlbGVtZW50cyBkZXBlbmRpbmcgb24gdGhlIHZhbHVlXG4gICAgY29uc3QgW2NvbGxlY3Rpb25zLCBzZXRDb2xsZWN0aW9uc10gPSAoMCwgcmVhY3RfMS51c2VTdGF0ZSkoW10pO1xuICAgIC8vIENoZWNrIHRvIHNlZSBpZiB0aGUgbW9kYWwgaXMgb3BlbmVkIG9yIG5vdCwgaWYgc28gZmV0Y2ggdGhlIGNvbGxlY3Rpb25zXG4gICAgKDAsIHJlYWN0XzEudXNlRWZmZWN0KSgoKSA9PiB7XG4gICAgICAgIGlmIChwcm9wcy5vcGVuKSB7XG4gICAgICAgICAgICBmZXRjaENvbGxlY3Rpb25zKCk7XG4gICAgICAgIH1cbiAgICB9LCBbcHJvcHMub3Blbl0pO1xuICAgIC8vIEZldGNoIGFsbCB0aGUgY29sbGVjdGlvbnMgdXNlciBoYXMgY3JlYXRlZFxuICAgIGNvbnN0IGZldGNoQ29sbGVjdGlvbnMgPSAoKSA9PiBfX2F3YWl0ZXIodm9pZCAwLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcbiAgICAgICAgc2V0U3RhdHVzKFwibG9hZGluZ1wiKTtcbiAgICAgICAgY29uc3QgcmVzcG9uc2UgPSAoeWllbGQgY29tbW9uXzEucmVxdWVzdC5nZXQoYC9jb2xsZWN0aW9ucy9jcmVhdGVkLyR7cHJvcHMucGFnZUlkfWAsIHtcbiAgICAgICAgICAgIGF1dGg6IHRydWUsXG4gICAgICAgIH0pKTtcbiAgICAgICAgc2V0U3RhdHVzKFwibm9ybWFsXCIpO1xuICAgICAgICBzZXRDb2xsZWN0aW9ucyhyZXNwb25zZS5jb2xsZWN0aW9ucyk7XG4gICAgfSk7XG4gICAgLy8gU2VuZCBhIHJlcXVlc3QgdG8gdXNlciB0byBjcmVhdGUgYSBuZXcgY29sbGVjdGlvblxuICAgIGNvbnN0IGNyZWF0ZUNvbGxlY3Rpb24gPSAoKSA9PiBfX2F3YWl0ZXIodm9pZCAwLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcbiAgICAgICAgc2V0U3RhdHVzKFwibG9hZGluZ1wiKTtcbiAgICAgICAgY29uc3QgcmVzcG9uc2UgPSAoeWllbGQgY29tbW9uXzEucmVxdWVzdC5wb3N0KGAvY29sbGVjdGlvbmAsIHsgbmFtZSB9LCB7XG4gICAgICAgICAgICBhdXRoOiB0cnVlLFxuICAgICAgICB9KSk7XG4gICAgICAgIC8vIEFkZCB0aGUgcGFnZSBpbiB0aGUgbmV3bHkgY3JlYXRlZCBjb2xsZWN0aW9uXG4gICAgICAgIHRvZ2dsZVBhZ2VJbkNMKHJlc3BvbnNlLmNvbGxlY3Rpb24uaWQpO1xuICAgIH0pO1xuICAgIC8vIFNlbmQgdGhlIHJlcXVlc3QgdG8gc2VydmVyIHRvIGVpdGhlciByZW1vdmUgdGhlIHBhZ2UgZnJvbSBzZWxlY3RlZCBjb2xsZWN0aW9uXG4gICAgLy8gb3IgYWRkIGl0IHRvIHRoYXQgY29sbGVjdGlvblxuICAgIGNvbnN0IHRvZ2dsZVBhZ2VJbkNMID0gKGNsSWQpID0+IF9fYXdhaXRlcih2b2lkIDAsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xuICAgICAgICBzZXRTdGF0dXMoXCJsb2FkaW5nXCIpO1xuICAgICAgICBjb25zdCByZXNwb25zZSA9ICh5aWVsZCBjb21tb25fMS5yZXF1ZXN0LnBvc3QoYC9jb2xsZWN0aW9uL2FkZC1yZW1vdmUvJHtjbElkfS8ke3Byb3BzLnBhZ2VJZH1gLCBudWxsLCB7XG4gICAgICAgICAgICBhdXRoOiB0cnVlLFxuICAgICAgICB9KSk7XG4gICAgICAgIC8vIFNob3cgYSByaWdodCBtZXNzYWdlIHRvIHVzZXIgYmFzZWQgb24gc2VydmVyIHJlc3BvbnNlXG4gICAgICAgIGlmIChyZXNwb25zZS5zZWxlY3RlZClcbiAgICAgICAgICAgICgwLCBjb21tb25fMS5hbGVydCkoYFBhZ2Ugc3VjY2Vzc2Z1bGx5IGFkZGVkIHRvICR7cmVzcG9uc2UuY2xOYW1lfSBjb2xsZWN0aW9uLmAsIFwic3VjY2Vzc1wiKTtcbiAgICAgICAgZWxzZVxuICAgICAgICAgICAgKDAsIGNvbW1vbl8xLmFsZXJ0KShgUGFnZSBzdWNjZXNzZnVsbHkgcmVtb3ZlZCBmcm9tICR7cmVzcG9uc2UuY2xOYW1lfSBjb2xsZWN0aW9uLmAsIFwic3VjY2Vzc1wiKTtcbiAgICAgICAgLy8gRmV0Y2ggY29sbGVjdGlvbnMgYWdhaW5cbiAgICAgICAgZmV0Y2hDb2xsZWN0aW9ucygpO1xuICAgIH0pO1xuICAgIHJldHVybiAoKDAsIGpzeF9ydW50aW1lXzEuanN4cykoTW9kYWxfMS5kZWZhdWx0LCBPYmplY3QuYXNzaWduKHsgaGVhZGVyOiBcIlBhZ2UgaW4gQ29sbGVjdGlvbnM6XCIsIHR5cGU6IFwic21hbGxcIiwgb3BlbjogcHJvcHMub3Blbiwgb25DbG9zZTogKCkgPT4ge1xuICAgICAgICAgICAgcHJvcHMub25DbG9zZSgpO1xuICAgICAgICAgICAgc2V0TmFtZShcIlwiKTtcbiAgICAgICAgICAgIHNldFN0YXR1cyhcIm5vcm1hbFwiKTtcbiAgICAgICAgICAgIHNldENvbGxlY3Rpb25zKFtdKTtcbiAgICAgICAgfSB9LCB7IGNoaWxkcmVuOiBbIWNvbGxlY3Rpb25zIHx8XG4gICAgICAgICAgICAgICAgKHN0YXR1cyA9PT0gXCJsb2FkaW5nXCIgJiYgKCgwLCBqc3hfcnVudGltZV8xLmpzeCkoXCJkaXZcIiwgT2JqZWN0LmFzc2lnbih7IGNsYXNzTmFtZTogXCJjZW50ZXItY29udGVudCBtYXJnaW4tdG9wLTVweFwiIH0sIHsgY2hpbGRyZW46ICgwLCBqc3hfcnVudGltZV8xLmpzeCkoTG9hZGluZ18xLmRlZmF1bHQsIHt9KSB9KSkpKSwgY29sbGVjdGlvbnMgJiYgc3RhdHVzID09PSBcIm5vcm1hbFwiICYmICgoMCwganN4X3J1bnRpbWVfMS5qc3gpKFwiZGl2XCIsIE9iamVjdC5hc3NpZ24oeyBjbGFzc05hbWU6IFwibWFyZ2luLWJvdHRvbS0wOFwiIH0sIHsgY2hpbGRyZW46ICgwLCBqc3hfcnVudGltZV8xLmpzeHMpKEJ1dHRvbl8xLmRlZmF1bHQsIE9iamVjdC5hc3NpZ24oeyBjb2xvcjogXCJibHVlXCIsIG91dGxpbmVkOiB0cnVlLCBibG9jazogdHJ1ZSwgb25DbGljazogKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2V0U3RhdHVzKFwiY3JlYXRpbmdcIik7XG4gICAgICAgICAgICAgICAgICAgIH0sIHR5cGU6IFwiYnV0dG9uXCIgfSwgeyBjaGlsZHJlbjogW1wiQ3JlYXRlIGEgbmV3IGNvbGxlY3Rpb25cIiwgKDAsIGpzeF9ydW50aW1lXzEuanN4KShcImlcIiwgeyBjbGFzc05hbWU6IFwiZmEgZmEtcGx1cy1jaXJjbGUgYnV0dG9uX19pY29uLXJpZ2h0XCIsIFwiYXJpYS1oaWRkZW5cIjogXCJ0cnVlXCIgfSldIH0pKSB9KSkpLCBzdGF0dXMgPT09IFwiY3JlYXRpbmdcIiAmJiAoKDAsIGpzeF9ydW50aW1lXzEuanN4KShcImRpdlwiLCBPYmplY3QuYXNzaWduKHsgY2xhc3NOYW1lOiBcInJpZ2h0LWNvbnRlbnRcIiB9LCB7IGNoaWxkcmVuOiAoMCwganN4X3J1bnRpbWVfMS5qc3hzKShcImZvcm1cIiwgT2JqZWN0LmFzc2lnbih7IG9uU3VibWl0OiAoZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgY3JlYXRlQ29sbGVjdGlvbigpO1xuICAgICAgICAgICAgICAgICAgICB9IH0sIHsgY2hpbGRyZW46IFsoMCwganN4X3J1bnRpbWVfMS5qc3gpKFwiZGl2XCIsIE9iamVjdC5hc3NpZ24oeyBjbGFzc05hbWU6IFwibWFyZ2luLWJvdHRvbS0xXCIgfSwgeyBjaGlsZHJlbjogKDAsIGpzeF9ydW50aW1lXzEuanN4KShJbnB1dF8xLmRlZmF1bHQsIHsgdHlwZTogXCJ0ZXh0XCIsIGxpbmVkOiB0cnVlLCBhdXRvQ29tcGxldGU6IFwib2ZmXCIsIGF1dG9Gb2N1czogdHJ1ZSwgcGxhY2Vob2xkZXI6IFwiQ29sbGVjdGlvbiBuYW1lXCIsIHJlcXVpcmVkOiB0cnVlLCB2YWx1ZTogbmFtZSwgb25DaGFuZ2U6ICh2YWx1ZSkgPT4gc2V0TmFtZSh2YWx1ZSkgfSkgfSkpLCAoMCwganN4X3J1bnRpbWVfMS5qc3hzKShcImRpdlwiLCBPYmplY3QuYXNzaWduKHsgY2xhc3NOYW1lOiBcImEtMTlcIiB9LCB7IGNoaWxkcmVuOiBbKDAsIGpzeF9ydW50aW1lXzEuanN4KShCdXR0b25fMS5kZWZhdWx0LCBPYmplY3QuYXNzaWduKHsgY29sb3I6IFwiZGVmYXVsdFwiLCBzaXplOiBcInNtYWxsXCIsIG9uQ2xpY2s6ICgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXROYW1lKFwiXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldFN0YXR1cyhcIm5vcm1hbFwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sIHR5cGU6IFwiYnV0dG9uXCIgfSwgeyBjaGlsZHJlbjogXCJDYW5jZWxcIiB9KSksICgwLCBqc3hfcnVudGltZV8xLmpzeCkoQnV0dG9uXzEuZGVmYXVsdCwgT2JqZWN0LmFzc2lnbih7IGNvbG9yOiBcImJsdWVcIiwgb3V0bGluZWQ6IHRydWUsIHNpemU6IFwic21hbGxcIiwgdHlwZTogXCJzdWJtaXRcIiB9LCB7IGNoaWxkcmVuOiBcIkNyZWF0ZSBhbmQgYWRkXCIgfSkpXSB9KSldIH0pKSB9KSkpLCBjb2xsZWN0aW9ucyAmJlxuICAgICAgICAgICAgICAgIHN0YXR1cyA9PT0gXCJub3JtYWxcIiAmJlxuICAgICAgICAgICAgICAgIGNvbGxlY3Rpb25zLm1hcCgoY2wpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuICgoMCwganN4X3J1bnRpbWVfMS5qc3hzKShcImFcIiwgT2JqZWN0LmFzc2lnbih7IGhyZWY6IFwiamF2YXNjcmlwdDp2b2lkKDApXCIsIGNsYXNzTmFtZTogYHNlbGVjdGFibGUtaXRlbSAke2NsLnNlbGVjdGVkID8gXCJzZWxlY3RhYmxlLWl0ZW0tLXNlbGVjdGVkXCIgOiBcIlwifWAsIG9uQ2xpY2s6ICgpID0+IHRvZ2dsZVBhZ2VJbkNMKGNsLmlkKSB9LCB7IGNoaWxkcmVuOiBbY2wubmFtZSwgXCIgXCIsICgwLCBqc3hfcnVudGltZV8xLmpzeCkoXCJzcGFuXCIsIHt9KV0gfSksIGNsLmlkKSk7XG4gICAgICAgICAgICAgICAgfSksICFjb2xsZWN0aW9ucy5sZW5ndGggJiYgc3RhdHVzID09PSBcIm5vcm1hbFwiICYmICgoMCwganN4X3J1bnRpbWVfMS5qc3hzKShcImRpdlwiLCBPYmplY3QuYXNzaWduKHsgY2xhc3NOYW1lOiBcInUtdGV4dC1jZW50ZXIgbWFyZ2luLXRvcC0xLTVcIiB9LCB7IGNoaWxkcmVuOiBbKDAsIGpzeF9ydW50aW1lXzEuanN4KShcImVtXCIsIHsgY2hpbGRyZW46IFwiQ3VycmVudGx5IHlvdSBkb24ndCBoYXZlIGFueSBjb2xsZWN0aW9ucy5cIiB9KSwgKDAsIGpzeF9ydW50aW1lXzEuanN4KShcImVtXCIsIHsgY2hpbGRyZW46IFwiQ3JlYXRlIG9uZSBieSBjbGlja2luZyBvbiB0aGUgYnV0dG9uIGFib3ZlLlwiIH0pXSB9KSkpXSB9KSkpO1xufTtcbmV4cG9ydHMuZGVmYXVsdCA9IENvbGxlY3Rpb25Nb2RhbDtcbiIsIlwidXNlIHN0cmljdFwiO1xudmFyIF9faW1wb3J0RGVmYXVsdCA9ICh0aGlzICYmIHRoaXMuX19pbXBvcnREZWZhdWx0KSB8fCBmdW5jdGlvbiAobW9kKSB7XG4gICAgcmV0dXJuIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpID8gbW9kIDogeyBcImRlZmF1bHRcIjogbW9kIH07XG59O1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuY29uc3QganN4X3J1bnRpbWVfMSA9IHJlcXVpcmUoXCJyZWFjdC9qc3gtcnVudGltZVwiKTtcbmNvbnN0IEJ1dHRvbl8xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCIuLi9mb3Jtcy9CdXR0b25cIikpO1xuY29uc3QgQ29uZmlybU1vZGFsID0gKHsgaGVhZGVyLCBtZXNzYWdlLCBvcGVuLCBvbkNhbmNlbCwgb25Db25maXJtLCBidG5OYW1lLCBjaGlsZHJlbiwgfSkgPT4ge1xuICAgIGNvbnN0IGNsYXNzTmFtZSA9IG9wZW4gPyBcIm1kbCBtZGwtY29uZlwiIDogXCJtZGwgbWRsLWNvbmYgZGlzcGxheS1ub25lXCI7XG4gICAgcmV0dXJuICgoMCwganN4X3J1bnRpbWVfMS5qc3gpKFwiZGl2XCIsIE9iamVjdC5hc3NpZ24oeyBjbGFzc05hbWU6IGNsYXNzTmFtZSB9LCB7IGNoaWxkcmVuOiAoMCwganN4X3J1bnRpbWVfMS5qc3hzKShcImRpdlwiLCBPYmplY3QuYXNzaWduKHsgY2xhc3NOYW1lOiBcIm1kbF9fY29udGVudFwiIH0sIHsgY2hpbGRyZW46IFsoMCwganN4X3J1bnRpbWVfMS5qc3hzKShcImRpdlwiLCBPYmplY3QuYXNzaWduKHsgY2xhc3NOYW1lOiBcIm1kbF9faGVhZGVyXCIgfSwgeyBjaGlsZHJlbjogWygwLCBqc3hfcnVudGltZV8xLmpzeCkoXCJzcGFuXCIsIE9iamVjdC5hc3NpZ24oeyBjbGFzc05hbWU6IFwibWRsX19jbG9zZVwiLCBvbkNsaWNrOiBvbkNhbmNlbCB9LCB7IGNoaWxkcmVuOiBcIlxcdTAwRDdcIiB9KSksICgwLCBqc3hfcnVudGltZV8xLmpzeCkoXCJoM1wiLCBPYmplY3QuYXNzaWduKHsgY2xhc3NOYW1lOiBcImhlYWRpbmctdGVydGlhcnlcIiB9LCB7IGNoaWxkcmVuOiBoZWFkZXIgfSkpXSB9KSksICgwLCBqc3hfcnVudGltZV8xLmpzeHMpKFwiZGl2XCIsIE9iamVjdC5hc3NpZ24oeyBjbGFzc05hbWU6IFwibWRsX19ib2R5XCIgfSwgeyBjaGlsZHJlbjogW21lc3NhZ2UgfHwgY2hpbGRyZW4sICgwLCBqc3hfcnVudGltZV8xLmpzeCkoXCJmb3JtXCIsIE9iamVjdC5hc3NpZ24oeyBvblN1Ym1pdDogKGUpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNvbmZpcm0oKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IH0sIHsgY2hpbGRyZW46ICgwLCBqc3hfcnVudGltZV8xLmpzeCkoXCJkaXZcIiwgT2JqZWN0LmFzc2lnbih7IGNsYXNzTmFtZTogXCJ1LWZsZXgtdGV4dC1yaWdodFwiIH0sIHsgY2hpbGRyZW46ICgwLCBqc3hfcnVudGltZV8xLmpzeCkoQnV0dG9uXzEuZGVmYXVsdCwgT2JqZWN0LmFzc2lnbih7IHR5cGU6IFwic3VibWl0XCIsIGNvbG9yOiBcInJlZFwiLCByb3VuZGVkOiB0cnVlIH0sIHsgY2hpbGRyZW46IGJ0bk5hbWUgPyBidG5OYW1lIDogXCJSZW1vdmVcIiB9KSkgfSkpIH0pKV0gfSkpXSB9KSkgfSkpKTtcbn07XG5leHBvcnRzLmRlZmF1bHQgPSBDb25maXJtTW9kYWw7XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmNvbnN0IGpzeF9ydW50aW1lXzEgPSByZXF1aXJlKFwicmVhY3QvanN4LXJ1bnRpbWVcIik7XG5jb25zdCByZWFjdF9kb21fMSA9IHJlcXVpcmUoXCJyZWFjdC1kb21cIik7XG5jb25zdCBNb2RhbCA9ICh7IGNoaWxkcmVuLCBoZWFkZXIsIG9wZW4sIHR5cGUsIG9uQ2xvc2UgfSkgPT4ge1xuICAgIGxldCBjbGFzc05hbWUgPSBvcGVuID8gXCJtZGxcIiA6IFwibWRsIGRpc3BsYXktbm9uZVwiO1xuICAgIGlmICh0eXBlID09PSBcInNtYWxsXCIpXG4gICAgICAgIGNsYXNzTmFtZSArPSBcIiBtZGwtc21cIjtcbiAgICByZXR1cm4gKDAsIHJlYWN0X2RvbV8xLmNyZWF0ZVBvcnRhbCkoKDAsIGpzeF9ydW50aW1lXzEuanN4KShcImRpdlwiLCBPYmplY3QuYXNzaWduKHsgY2xhc3NOYW1lOiBjbGFzc05hbWUgfSwgeyBjaGlsZHJlbjogKDAsIGpzeF9ydW50aW1lXzEuanN4cykoXCJkaXZcIiwgT2JqZWN0LmFzc2lnbih7IGNsYXNzTmFtZTogXCJtZGxfX2NvbnRlbnRcIiB9LCB7IGNoaWxkcmVuOiBbKDAsIGpzeF9ydW50aW1lXzEuanN4cykoXCJkaXZcIiwgT2JqZWN0LmFzc2lnbih7IGNsYXNzTmFtZTogXCJtZGxfX2hlYWRlclwiIH0sIHsgY2hpbGRyZW46IFsoMCwganN4X3J1bnRpbWVfMS5qc3gpKFwic3BhblwiLCBPYmplY3QuYXNzaWduKHsgY2xhc3NOYW1lOiBcIm1kbF9fY2xvc2VcIiwgb25DbGljazogb25DbG9zZSB9LCB7IGNoaWxkcmVuOiBcIlxcdTAwRDdcIiB9KSksICgwLCBqc3hfcnVudGltZV8xLmpzeCkoXCJoM1wiLCBPYmplY3QuYXNzaWduKHsgY2xhc3NOYW1lOiBcImhlYWRpbmctdGVydGlhcnlcIiB9LCB7IGNoaWxkcmVuOiBoZWFkZXIgfSkpXSB9KSksICgwLCBqc3hfcnVudGltZV8xLmpzeCkoXCJkaXZcIiwgT2JqZWN0LmFzc2lnbih7IGNsYXNzTmFtZTogXCJtZGxfX2JvZHlcIiB9LCB7IGNoaWxkcmVuOiBjaGlsZHJlbiB9KSldIH0pKSB9KSksIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjbW9kYWwtcm9vdFwiKSk7XG59O1xuZXhwb3J0cy5kZWZhdWx0ID0gTW9kYWw7XG4iLCJcInVzZSBzdHJpY3RcIjtcbnZhciBfX2F3YWl0ZXIgPSAodGhpcyAmJiB0aGlzLl9fYXdhaXRlcikgfHwgZnVuY3Rpb24gKHRoaXNBcmcsIF9hcmd1bWVudHMsIFAsIGdlbmVyYXRvcikge1xuICAgIGZ1bmN0aW9uIGFkb3B0KHZhbHVlKSB7IHJldHVybiB2YWx1ZSBpbnN0YW5jZW9mIFAgPyB2YWx1ZSA6IG5ldyBQKGZ1bmN0aW9uIChyZXNvbHZlKSB7IHJlc29sdmUodmFsdWUpOyB9KTsgfVxuICAgIHJldHVybiBuZXcgKFAgfHwgKFAgPSBQcm9taXNlKSkoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICBmdW5jdGlvbiBmdWxmaWxsZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3IubmV4dCh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XG4gICAgICAgIGZ1bmN0aW9uIHJlamVjdGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yW1widGhyb3dcIl0odmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxuICAgICAgICBmdW5jdGlvbiBzdGVwKHJlc3VsdCkgeyByZXN1bHQuZG9uZSA/IHJlc29sdmUocmVzdWx0LnZhbHVlKSA6IGFkb3B0KHJlc3VsdC52YWx1ZSkudGhlbihmdWxmaWxsZWQsIHJlamVjdGVkKTsgfVxuICAgICAgICBzdGVwKChnZW5lcmF0b3IgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSkpLm5leHQoKSk7XG4gICAgfSk7XG59O1xudmFyIF9faW1wb3J0RGVmYXVsdCA9ICh0aGlzICYmIHRoaXMuX19pbXBvcnREZWZhdWx0KSB8fCBmdW5jdGlvbiAobW9kKSB7XG4gICAgcmV0dXJuIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpID8gbW9kIDogeyBcImRlZmF1bHRcIjogbW9kIH07XG59O1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuY29uc3QganN4X3J1bnRpbWVfMSA9IHJlcXVpcmUoXCJyZWFjdC9qc3gtcnVudGltZVwiKTtcbmNvbnN0IHJlYWN0XzEgPSByZXF1aXJlKFwicmVhY3RcIik7XG5jb25zdCBjb21tb25fMSA9IHJlcXVpcmUoXCJAcGFnc2VyL2NvbW1vblwiKTtcbmNvbnN0IE1vZGFsXzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcIi4vTW9kYWxcIikpO1xuY29uc3QgTG9hZGluZ18xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCIuLi9Mb2FkaW5nXCIpKTtcbmNvbnN0IElucHV0RmlsZV8xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCIuLi9mb3Jtcy9JbnB1dEZpbGVcIikpO1xuY29uc3QgQnV0dG9uXzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcIi4uL2Zvcm1zL0J1dHRvblwiKSk7XG5jb25zdCBVcGxvYWRQaG90byA9IChwcm9wcykgPT4ge1xuICAgIGNvbnN0IFtzdGF0dXMsIHNldFN0YXR1c10gPSAoMCwgcmVhY3RfMS51c2VTdGF0ZSkoXCJjbGVhblwiKTtcbiAgICBjb25zdCBbZXJyb3IsIHNldEVycm9yXSA9ICgwLCByZWFjdF8xLnVzZVN0YXRlKShcIlwiKTtcbiAgICBjb25zdCBbaW5wdXRMYWJlbE5hbWUsIHNldElucHV0TGFiZWxOYW1lXSA9ICgwLCByZWFjdF8xLnVzZVN0YXRlKShcIlVwbG9hZCBhIEZpbGVcIik7XG4gICAgLy8gV2hlbiB1c2VyIHNlbGVjdHMgYSBmaWxlXG4gICAgY29uc3Qgb25GaWxlSW5wdXRDaGFuZ2UgPSAoZSwgZmlsZU5hbWUpID0+IHtcbiAgICAgICAgc2V0U3RhdHVzKFwib25GaWxlXCIpO1xuICAgICAgICBzZXRFcnJvcihcIlwiKTtcbiAgICAgICAgc2V0SW5wdXRMYWJlbE5hbWUoZmlsZU5hbWUpO1xuICAgIH07XG4gICAgLy8gV2hlbiB1c2VyIGNsaWNrcyBvbiB1cGxvYWQgYnV0dG9uXG4gICAgY29uc3Qgb25VcGxvYWRDbGljayA9ICgpID0+IF9fYXdhaXRlcih2b2lkIDAsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xuICAgICAgICBzZXRTdGF0dXMoXCJsb2FkaW5nXCIpO1xuICAgICAgICAvLyBAdHMtaWdub3JlXG4gICAgICAgIGNvbnN0IGZpbGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2ZpbGUtaW5wdXRcIikuZmlsZXNbMF07XG4gICAgICAgIGNvbnN0IHFzID0gYD9maWxlbmFtZT0ke2VuY29kZVVSSUNvbXBvbmVudChmaWxlLm5hbWUpfWA7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICB5aWVsZCBjb21tb25fMS5yZXF1ZXN0LnBvc3QocHJvcHMudXJsICsgcXMsIGZpbGUsIHtcbiAgICAgICAgICAgICAgICBhdXRoOiB0cnVlLFxuICAgICAgICAgICAgICAgIGNvbnRlbnRUeXBlOiBcImFwcGxpY2F0aW9uL29jdGV0LXN0cmVhbVwiLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBwcm9wcy5vbkNsb3NlKCk7XG4gICAgICAgICAgICAvLyBDYWxsIHRoZSBzdWNjZXNzIGZ1bmN0aW9uIHNvIHRoYXQgdGhlIHBhcmVudCBjb21wb25lbnQgd2lsbCBnZXQgbm90aWZpZWRcbiAgICAgICAgICAgIHByb3BzLnN1Y2Nlc3MoKTtcbiAgICAgICAgICAgIHJlc2V0KCk7XG4gICAgICAgIH1cbiAgICAgICAgY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgIGxldCBtc2cgPSBcIlRoZXJlIHdhcyBhbiBlcnJvciB3aXRoIHVwbG9hZGluZyB5b3VyIHBob3RvLlwiO1xuICAgICAgICAgICAgaWYgKGUubWVzc2FnZSlcbiAgICAgICAgICAgICAgICBtc2cgPSBlLm1lc3NhZ2U7XG4gICAgICAgICAgICAoMCwgY29tbW9uXzEuYWxlcnQpKG1zZywgXCJlcnJvclwiKTtcbiAgICAgICAgICAgIHJlc2V0KCk7XG4gICAgICAgICAgICBwcm9wcy5vbkNsb3NlKCk7XG4gICAgICAgIH1cbiAgICB9KTtcbiAgICAvLyBSZXNldCB0aGUgcGhvdG8gY2hvb3NpbmdcbiAgICBjb25zdCByZXNldCA9ICgpID0+IHtcbiAgICAgICAgc2V0U3RhdHVzKFwiY2xlYW5cIik7XG4gICAgICAgIHNldElucHV0TGFiZWxOYW1lKFwiVXBsb2FkIGEgRmlsZVwiKTtcbiAgICB9O1xuICAgIHJldHVybiAoKDAsIGpzeF9ydW50aW1lXzEuanN4cykoTW9kYWxfMS5kZWZhdWx0LCBPYmplY3QuYXNzaWduKHsgaGVhZGVyOiBwcm9wcy5oZWFkZXIsIG9wZW46IHByb3BzLm9wZW4sIG9uQ2xvc2U6ICgpID0+IHtcbiAgICAgICAgICAgIHByb3BzLm9uQ2xvc2UoKTtcbiAgICAgICAgICAgIHNldEVycm9yKFwiXCIpO1xuICAgICAgICB9IH0sIHsgY2hpbGRyZW46IFsoMCwganN4X3J1bnRpbWVfMS5qc3gpKFwicFwiLCBPYmplY3QuYXNzaWduKHsgY2xhc3NOYW1lOiBcIlwiIH0sIHsgY2hpbGRyZW46IHByb3BzLnRleHQgfSkpLCAoMCwganN4X3J1bnRpbWVfMS5qc3gpKFwicFwiLCBPYmplY3QuYXNzaWduKHsgY2xhc3NOYW1lOiBcImltYWdlX191cGxvYWQtLWVycm9yXCIgfSwgeyBjaGlsZHJlbjogZXJyb3IgfSkpLCAoMCwganN4X3J1bnRpbWVfMS5qc3gpKElucHV0RmlsZV8xLmRlZmF1bHQsIHsgYWRkQ2xhc3M6IHN0YXR1cyA9PT0gXCJjbGVhblwiID8gXCJtYXJnaW4tYm90dG9tLTJcIiA6IFwibWFyZ2luLWJvdHRvbS0wXCIsIGxhYmVsOiBpbnB1dExhYmVsTmFtZSwgaWQ6IFwiZmlsZS1pbnB1dFwiLCBzaXplOiBwcm9wcy5zaXplLCBvbkNoYW5nZTogb25GaWxlSW5wdXRDaGFuZ2UsIG9uQ2xpY2s6IChlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHNldEVycm9yKFwiXCIpO1xuICAgICAgICAgICAgICAgIH0sIG9uRXJyb3I6IChlcnJvcikgPT4ge1xuICAgICAgICAgICAgICAgICAgICBzZXRFcnJvcihlcnJvcik7XG4gICAgICAgICAgICAgICAgICAgIHNldElucHV0TGFiZWxOYW1lKFwiVXBsb2FkIGEgRmlsZVwiKTtcbiAgICAgICAgICAgICAgICAgICAgcmVzZXQoKTtcbiAgICAgICAgICAgICAgICB9IH0pLCAoMCwganN4X3J1bnRpbWVfMS5qc3hzKShcImRpdlwiLCBPYmplY3QuYXNzaWduKHsgY2xhc3NOYW1lOiBgaW1hZ2VfX3VwbG9hZC0tb3B0aW9ucyAke3N0YXR1cyA9PT0gXCJvbkZpbGVcIiA/IFwiXCIgOiBcImRpc3BsYXktbm9uZVwifWAgfSwgeyBjaGlsZHJlbjogWygwLCBqc3hfcnVudGltZV8xLmpzeCkoQnV0dG9uXzEuZGVmYXVsdCwgT2JqZWN0LmFzc2lnbih7IGNvbG9yOiBcImJsdWVcIiwgcm91bmRlZDogdHJ1ZSwgb3V0bGluZWQ6IHRydWUsIG9uQ2xpY2s6ICgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXNldCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb3BzLm9uQ2xvc2UoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gfSwgeyBjaGlsZHJlbjogXCJDYW5jZWxcIiB9KSksICgwLCBqc3hfcnVudGltZV8xLmpzeCkoQnV0dG9uXzEuZGVmYXVsdCwgT2JqZWN0LmFzc2lnbih7IGNvbG9yOiBcImJsdWVcIiwgcm91bmRlZDogdHJ1ZSwgb25DbGljazogKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uVXBsb2FkQ2xpY2soKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gfSwgeyBjaGlsZHJlbjogXCJVcGxvYWRcIiB9KSldIH0pKSwgc3RhdHVzID09PSBcImxvYWRpbmdcIiAmJiAoKDAsIGpzeF9ydW50aW1lXzEuanN4KShcImRpdlwiLCBPYmplY3QuYXNzaWduKHsgY2xhc3NOYW1lOiBcImltYWdlX191cGxvYWQtLWxvYWRpbmcgbWFyZ2luLXRvcC0xXCIgfSwgeyBjaGlsZHJlbjogKDAsIGpzeF9ydW50aW1lXzEuanN4KShcImRpdlwiLCBPYmplY3QuYXNzaWduKHsgY2xhc3NOYW1lOiBcImNlbnRlci1jb250ZW50XCIgfSwgeyBjaGlsZHJlbjogKDAsIGpzeF9ydW50aW1lXzEuanN4KShMb2FkaW5nXzEuZGVmYXVsdCwge30pIH0pKSB9KSkpXSB9KSkpO1xufTtcbmV4cG9ydHMuZGVmYXVsdCA9IFVwbG9hZFBob3RvO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG52YXIgX19hd2FpdGVyID0gKHRoaXMgJiYgdGhpcy5fX2F3YWl0ZXIpIHx8IGZ1bmN0aW9uICh0aGlzQXJnLCBfYXJndW1lbnRzLCBQLCBnZW5lcmF0b3IpIHtcbiAgICBmdW5jdGlvbiBhZG9wdCh2YWx1ZSkgeyByZXR1cm4gdmFsdWUgaW5zdGFuY2VvZiBQID8gdmFsdWUgOiBuZXcgUChmdW5jdGlvbiAocmVzb2x2ZSkgeyByZXNvbHZlKHZhbHVlKTsgfSk7IH1cbiAgICByZXR1cm4gbmV3IChQIHx8IChQID0gUHJvbWlzZSkpKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgZnVuY3Rpb24gZnVsZmlsbGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yLm5leHQodmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxuICAgICAgICBmdW5jdGlvbiByZWplY3RlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvcltcInRocm93XCJdKHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cbiAgICAgICAgZnVuY3Rpb24gc3RlcChyZXN1bHQpIHsgcmVzdWx0LmRvbmUgPyByZXNvbHZlKHJlc3VsdC52YWx1ZSkgOiBhZG9wdChyZXN1bHQudmFsdWUpLnRoZW4oZnVsZmlsbGVkLCByZWplY3RlZCk7IH1cbiAgICAgICAgc3RlcCgoZ2VuZXJhdG9yID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pKS5uZXh0KCkpO1xuICAgIH0pO1xufTtcbnZhciBfX2ltcG9ydERlZmF1bHQgPSAodGhpcyAmJiB0aGlzLl9faW1wb3J0RGVmYXVsdCkgfHwgZnVuY3Rpb24gKG1vZCkge1xuICAgIHJldHVybiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSA/IG1vZCA6IHsgXCJkZWZhdWx0XCI6IG1vZCB9O1xufTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmNvbnN0IGpzeF9ydW50aW1lXzEgPSByZXF1aXJlKFwicmVhY3QvanN4LXJ1bnRpbWVcIik7XG5jb25zdCByZWFjdF8xID0gcmVxdWlyZShcInJlYWN0XCIpO1xuY29uc3QgY29tbW9uXzEgPSByZXF1aXJlKFwiQHBhZ3Nlci9jb21tb25cIik7XG5jb25zdCBNb2RhbF8xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCIuL01vZGFsXCIpKTtcbmNvbnN0IExvYWRpbmdfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiLi4vTG9hZGluZ1wiKSk7XG5jb25zdCBJbnB1dEZpbGVfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiLi4vZm9ybXMvSW5wdXRGaWxlXCIpKTtcbmNvbnN0IEJ1dHRvbl8xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCIuLi9mb3Jtcy9CdXR0b25cIikpO1xuY29uc3QgVXBsb2FkUGhvdG8gPSAocHJvcHMpID0+IHtcbiAgICBjb25zdCBbc3RhdHVzLCBzZXRTdGF0dXNdID0gKDAsIHJlYWN0XzEudXNlU3RhdGUpKFwiY2xlYW5cIik7XG4gICAgY29uc3QgW2Vycm9yLCBzZXRFcnJvcl0gPSAoMCwgcmVhY3RfMS51c2VTdGF0ZSkoXCJcIik7XG4gICAgY29uc3QgW2Nyb3BEYXRhLCBzZXRDcm9wRGF0YV0gPSAoMCwgcmVhY3RfMS51c2VTdGF0ZSkoeyB4OiAwLCB5OiAwLCB3aWR0aDogMCwgaGVpZ2h0OiAwIH0pO1xuICAgICgwLCByZWFjdF8xLnVzZUVmZmVjdCkoKCkgPT4ge1xuICAgICAgICAvLyBMb2FkIENyb29wZXIgamF2YXNjcmlwdCBmaWxlXG4gICAgICAgIGNvbnN0IHNjcmlwdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzY3JpcHRcIik7XG4gICAgICAgIHNjcmlwdC5zZXRBdHRyaWJ1dGUoXCJzcmNcIiwgXCIvY3JvcHBlci5taW4uanNcIik7XG4gICAgICAgIGRvY3VtZW50LmhlYWQuYXBwZW5kQ2hpbGQoc2NyaXB0KTtcbiAgICAgICAgLy8gTG9hZCBDcm9vcGVyIGNzcyBmaWxlXG4gICAgICAgIGNvbnN0IHN0eWxlc2hlZXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlua1wiKTtcbiAgICAgICAgc3R5bGVzaGVldC5ocmVmID0gXCIvY3JvcHBlci5taW4uY3NzXCI7XG4gICAgICAgIHN0eWxlc2hlZXQudHlwZSA9IFwidGV4dC9jc3NcIjtcbiAgICAgICAgc3R5bGVzaGVldC5yZWwgPSBcInN0eWxlc2hlZXRcIjtcbiAgICAgICAgZG9jdW1lbnQuaGVhZC5hcHBlbmRDaGlsZChzdHlsZXNoZWV0KTtcbiAgICB9LCBbXSk7XG4gICAgLy8gV2hlbiB1c2VyIHNlbGVjdHMgYSBwaG90b1xuICAgIGNvbnN0IG9uRmlsZUlucHV0Q2hhbmdlID0gKGUsIGZpbGVOYW1lLCBpbWdVcmwpID0+IHtcbiAgICAgICAgc2V0RXJyb3IoXCJcIik7XG4gICAgICAgIHNldFN0YXR1cyhcImNyb3BwaW5nXCIpO1xuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2ltZy1wcmV2aWV3XCIpLnNyYyA9XG4gICAgICAgICAgICBpbWdVcmwgfHwgXCJcIjtcbiAgICAgICAgY3JvcChwcm9wcy5hc3BlY3RSYXRpbywgcHJvcHMubWluV2lkdGgsIHByb3BzLm1pbkhlaWdodCk7XG4gICAgfTtcbiAgICAvLyBXaGVuIHVzZXIgY2xpY2tzIG9uIHVwbG9hZCBidXR0b25cbiAgICBjb25zdCBvblVwbG9hZENsaWNrID0gKCkgPT4gX19hd2FpdGVyKHZvaWQgMCwgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XG4gICAgICAgIHNldFN0YXR1cyhcImxvYWRpbmdcIik7XG4gICAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgICAgY29uc3QgZmlsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjaW1hZ2UtaW5wdXRcIikuZmlsZXNbMF07XG4gICAgICAgIGNvbnN0IHFzID0gYD94PSR7TWF0aC5yb3VuZChjcm9wRGF0YS54KX0meT0ke01hdGgucm91bmQoY3JvcERhdGEueSl9JndpZHRoPSR7TWF0aC5yb3VuZChjcm9wRGF0YS53aWR0aCl9JmhlaWdodD0ke01hdGgucm91bmQoY3JvcERhdGEuaGVpZ2h0KX1gO1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgY29uc3QgcmVzcG9uc2UgPSAoeWllbGQgY29tbW9uXzEucmVxdWVzdC5wdXQocHJvcHMudXJsICsgcXMsIGZpbGUsIHtcbiAgICAgICAgICAgICAgICBhdXRoOiB0cnVlLFxuICAgICAgICAgICAgICAgIGNvbnRlbnRUeXBlOiBcImFwcGxpY2F0aW9uL29jdGV0LXN0cmVhbVwiLFxuICAgICAgICAgICAgfSkpO1xuICAgICAgICAgICAgLy8gQHRzLWlnbm9yZVxuICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNyZXNldC1idG5cIikuY2xpY2soKTtcbiAgICAgICAgICAgIHByb3BzLm9uQ2xvc2UoKTtcbiAgICAgICAgICAgIHByb3BzLnN1Y2Nlc3MocmVzcG9uc2UuaW1hZ2UpO1xuICAgICAgICAgICAgKDAsIGNvbW1vbl8xLmFsZXJ0KShcIlBob3RvIHdhcyB1cGxvYWRlZCBzdWNjZXNzZnVsbHkuXCIsIFwic3VjY2Vzc1wiKTtcbiAgICAgICAgICAgIHNldFN0YXR1cyhcImNsZWFuXCIpO1xuICAgICAgICB9XG4gICAgICAgIGNhdGNoIChlKSB7XG4gICAgICAgICAgICAvLyBAdHMtaWdub3JlXG4gICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3Jlc2V0LWJ0blwiKS5jbGljaygpO1xuICAgICAgICAgICAgc2V0U3RhdHVzKFwiY2xlYW5cIik7XG4gICAgICAgICAgICAoMCwgY29tbW9uXzEuYWxlcnQpKFwiVGhlcmUgd2FzIGFuIGVycm9yIHdpdGggdXBsb2FkaW5nIHlvdXIgcGhvdG8uXCIsIFwiZXJyb3JcIik7XG4gICAgICAgICAgICBwcm9wcy5vbkNsb3NlKCk7XG4gICAgICAgIH1cbiAgICB9KTtcbiAgICAvLyBSZXNldCB0aGUgcGhvdG8gY2hvb3NpbmdcbiAgICBjb25zdCByZXNldCA9ICgpID0+IHtcbiAgICAgICAgc2V0U3RhdHVzKFwiY2xlYW5cIik7XG4gICAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNpbWctcHJldmlld1wiKS5zcmMgPSBcIlwiO1xuICAgIH07XG4gICAgLy8gU3RhcnQgdGhlIGNyb3BwZXIgb24gdGhlIGltYWdlIHByZXZpZXdcbiAgICBjb25zdCBjcm9wID0gKGFzcGVjdCwgbWluVywgbWluSCkgPT4ge1xuICAgICAgICBjb25zdCBpbWFnZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiaW1nLXByZXZpZXdcIik7XG4gICAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgICAgY29uc3QgY3JvcHBlciA9IG5ldyBDcm9wcGVyKGltYWdlLCB7XG4gICAgICAgICAgICBhc3BlY3RSYXRpbzogYXNwZWN0LFxuICAgICAgICAgICAgdmlld01vZGU6IDMsXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiBmYWxzZSxcbiAgICAgICAgICAgIG1vZGFsOiBmYWxzZSxcbiAgICAgICAgICAgIHpvb21hYmxlOiBmYWxzZSxcbiAgICAgICAgICAgIG1pbkNyb3BCb3hXaWR0aDogbWluVyxcbiAgICAgICAgICAgIG1pbkNyb3BCb3hIZWlnaHQ6IG1pbkgsXG4gICAgICAgICAgICBjcm9wZW5kOiAoKSA9PiB7XG4gICAgICAgICAgICAgICAgc2V0Q3JvcERhdGEoe1xuICAgICAgICAgICAgICAgICAgICB4OiBjcm9wcGVyLmdldERhdGEoKS54LFxuICAgICAgICAgICAgICAgICAgICB5OiBjcm9wcGVyLmdldERhdGEoKS55LFxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogY3JvcHBlci5nZXREYXRhKCkud2lkdGgsXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogY3JvcHBlci5nZXREYXRhKCkuaGVpZ2h0LFxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHJlYWR5OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgY29uc3Qgc2VsZiA9IHRoaXM7XG4gICAgICAgICAgICAgICAgLy8gQHRzLWlnbm9yZVxuICAgICAgICAgICAgICAgIGRvY3VtZW50XG4gICAgICAgICAgICAgICAgICAgIC5xdWVyeVNlbGVjdG9yKFwiI3Jlc2V0LWJ0blwiKVxuICAgICAgICAgICAgICAgICAgICAuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHNlbGYuY3JvcHBlcikge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZi5jcm9wcGVyLmRlc3Ryb3koKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIHNldENyb3BEYXRhKHtcbiAgICAgICAgICAgICAgICAgICAgeDogY3JvcHBlci5nZXREYXRhKCkueCxcbiAgICAgICAgICAgICAgICAgICAgeTogY3JvcHBlci5nZXREYXRhKCkueSxcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IGNyb3BwZXIuZ2V0RGF0YSgpLndpZHRoLFxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IGNyb3BwZXIuZ2V0RGF0YSgpLmhlaWdodCxcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgcmV0dXJuICgoMCwganN4X3J1bnRpbWVfMS5qc3hzKShNb2RhbF8xLmRlZmF1bHQsIE9iamVjdC5hc3NpZ24oeyBoZWFkZXI6IHByb3BzLmhlYWRlciwgb3BlbjogcHJvcHMub3Blbiwgb25DbG9zZTogKCkgPT4ge1xuICAgICAgICAgICAgcHJvcHMub25DbG9zZSgpO1xuICAgICAgICAgICAgc2V0RXJyb3IoXCJcIik7XG4gICAgICAgIH0gfSwgeyBjaGlsZHJlbjogWygwLCBqc3hfcnVudGltZV8xLmpzeCkoXCJwXCIsIE9iamVjdC5hc3NpZ24oeyBjbGFzc05hbWU6IFwiaW1hZ2VfX3VwbG9hZC0tdGV4dFwiIH0sIHsgY2hpbGRyZW46IHByb3BzLnRleHQgfSkpLCAoMCwganN4X3J1bnRpbWVfMS5qc3gpKFwicFwiLCBPYmplY3QuYXNzaWduKHsgY2xhc3NOYW1lOiBcImltYWdlX191cGxvYWQtLWVycm9yXCIgfSwgeyBjaGlsZHJlbjogZXJyb3IgfSkpLCAoMCwganN4X3J1bnRpbWVfMS5qc3gpKFwiZW1cIiwgT2JqZWN0LmFzc2lnbih7IGNsYXNzTmFtZTogYGltYWdlX191cGxvYWQtLWNyb3AtbXNnICR7cHJvcHMuY3JvcE1zZyAmJiBzdGF0dXMgPT09IFwiY3JvcHBpbmdcIiA/IFwiXCIgOiBcImRpc3BsYXktbm9uZVwifWAgfSwgeyBjaGlsZHJlbjogcHJvcHMuY3JvcE1zZyB9KSksICgwLCBqc3hfcnVudGltZV8xLmpzeCkoSW5wdXRGaWxlXzEuZGVmYXVsdCwgeyBhZGRDbGFzczogXCJtYXJnaW4tYm90dG9tLTJcIiwgaGlkZTogc3RhdHVzICE9PSBcImNsZWFuXCIsIGxhYmVsOiBwcm9wcy5pbnB1dExhYmVsTmFtZSwgaWQ6IFwiaW1hZ2UtaW5wdXRcIiwgc2l6ZTogcHJvcHMuc2l6ZSwgdHlwZTogXCJpbWFnZVwiLCBtaW5XaWR0aDogcHJvcHMubWluV2lkdGgsIG1pbkhlaWdodDogcHJvcHMubWluSGVpZ2h0LCBvbkNoYW5nZTogb25GaWxlSW5wdXRDaGFuZ2UsIG9uQ2xpY2s6IChlKSA9PiB7IH0sIG9uRXJyb3I6IChlcnJvcikgPT4ge1xuICAgICAgICAgICAgICAgICAgICBzZXRFcnJvcihlcnJvcik7XG4gICAgICAgICAgICAgICAgICAgIHJlc2V0KCk7XG4gICAgICAgICAgICAgICAgfSB9KSwgKDAsIGpzeF9ydW50aW1lXzEuanN4KShcImRpdlwiLCB7IGNoaWxkcmVuOiAoMCwganN4X3J1bnRpbWVfMS5qc3gpKFwiaW1nXCIsIHsgaWQ6IFwiaW1nLXByZXZpZXdcIiB9KSB9KSwgKDAsIGpzeF9ydW50aW1lXzEuanN4cykoXCJkaXZcIiwgT2JqZWN0LmFzc2lnbih7IGNsYXNzTmFtZTogYGltYWdlX191cGxvYWQtLW9wdGlvbnMgbWFyZ2luLXRvcC0yICR7c3RhdHVzID09PSBcImNyb3BwaW5nXCIgPyBcIlwiIDogXCJkaXNwbGF5LW5vbmVcIn1gIH0sIHsgY2hpbGRyZW46IFsoMCwganN4X3J1bnRpbWVfMS5qc3gpKEJ1dHRvbl8xLmRlZmF1bHQsIE9iamVjdC5hc3NpZ24oeyBpZDogXCJyZXNldC1idG5cIiwgcm91bmRlZDogdHJ1ZSwgY29sb3I6IFwiYmx1ZVwiLCBvdXRsaW5lZDogdHJ1ZSwgb25DbGljazogKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlc2V0KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9IH0sIHsgY2hpbGRyZW46IFwiQ2hvb3NlIGFub3RoZXIgcGhvdG9cIiB9KSksICgwLCBqc3hfcnVudGltZV8xLmpzeCkoQnV0dG9uXzEuZGVmYXVsdCwgT2JqZWN0LmFzc2lnbih7IGNvbG9yOiBcImJsdWVcIiwgcm91bmRlZDogdHJ1ZSwgb25DbGljazogKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uVXBsb2FkQ2xpY2soKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gfSwgeyBjaGlsZHJlbjogXCJVcGxvYWRcIiB9KSldIH0pKSwgc3RhdHVzID09PSBcImxvYWRpbmdcIiAmJiAoKDAsIGpzeF9ydW50aW1lXzEuanN4KShcImRpdlwiLCBPYmplY3QuYXNzaWduKHsgY2xhc3NOYW1lOiBcImltYWdlX191cGxvYWQtLWxvYWRpbmcgbWFyZ2luLXRvcC0yXCIgfSwgeyBjaGlsZHJlbjogKDAsIGpzeF9ydW50aW1lXzEuanN4KShcImRpdlwiLCBPYmplY3QuYXNzaWduKHsgY2xhc3NOYW1lOiBcImNlbnRlci1jb250ZW50XCIgfSwgeyBjaGlsZHJlbjogKDAsIGpzeF9ydW50aW1lXzEuanN4KShMb2FkaW5nXzEuZGVmYXVsdCwge30pIH0pKSB9KSkpXSB9KSkpO1xufTtcbmV4cG9ydHMuZGVmYXVsdCA9IFVwbG9hZFBob3RvO1xuIl0sIm5hbWVzIjpbIk9iamVjdCIsImRlZmluZVByb3BlcnR5IiwiZXhwb3J0cyIsInZhbHVlIiwiQWxlcnQiLCJqc3hfcnVudGltZV8xIiwicmVxdWlyZSIsInByb3BzIiwiY2xhc3NOYW1lIiwibWVzc2FnZSIsInR5cGUiLCJhZGRpdGlvbmFsQ2xhc3NlcyIsImpzeHMiLCJhc3NpZ24iLCJjaGlsZHJlbiIsImpzeCIsIm9uQ2xpY2siLCJvbkNsb3NlIiwiSW5saW5lTG9hZGluZyIsImVsIiwiY29sb3IiLCJjZW50ZXIiLCJkZWZhdWx0IiwiTG9hZGluZyIsIl9faW1wb3J0RGVmYXVsdCIsIm1vZCIsIl9fZXNNb2R1bGUiLCJJbmxpbmVMb2FkaW5nXzEiLCJCdXR0b24iLCJzaXplIiwib3V0bGluZWQiLCJyb3VuZGVkIiwiYmxvY2siLCJsb2FkaW5nQ29sb3IiLCJpZCIsInN0eWxlIiwiZGlzYWJsZWQiLCJsb2FkaW5nIiwiRHJvcGRvd24iLCJudW0iLCJvbkNoYW5nZSIsInNlbGVjdCIsImJ1dHRvbiIsIml0ZW1zIiwibWFwIiwiaHJlZiIsInJlYWN0XzEiLCJJbnB1dCIsIl9hIiwic2V0VmFsdWUiLCJ1c2VTdGF0ZSIsInRvU3RyaW5nIiwiaW5wdXQiLCJ1c2VSZWYiLCJ1c2VFZmZlY3QiLCJzdWNjZXNzIiwiZXJyb3IiLCJzaG91bGREaXZpZGVOdW1iZXJCeVRocmVlIiwicmVxdWlyZWRXaXRoRXJyb3IiLCJsaW5lZCIsIkZyYWdtZW50IiwicGxhY2Vob2xkZXIiLCJjdXJyZW50IiwiZm9jdXMiLCJsYWJlbCIsImhlbHAiLCJpbm5lcklucHV0TGFiZWwiLCJyZWYiLCJlbGVtIiwibmV4dFNpYmxpbmciLCJwYWRkaW5nTGVmdCIsImNsaWVudFdpZHRoIiwiTnVtYmVyIiwidG9Mb2NhbGVTdHJpbmciLCJyZXF1aXJlZCIsImF1dG9Gb2N1cyIsImF1dG9Db21wbGV0ZSIsIm1heExlbmd0aCIsImV2ZW50IiwidGFyZ2V0IiwicmVwbGFjZSIsIm9uQmx1ciIsImxlbmd0aCIsImNvbW1vbl8xIiwiSW5wdXRGaWxlIiwiYWRkQ2xhc3MiLCJoaWRlIiwibWluV2lkdGgiLCJtaW5IZWlnaHQiLCJvbkVycm9yIiwiaHRtbEZvciIsImUiLCJpbnB1dEVsIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwiaW5wdXRGaWxlcyIsImZpbGVzIiwiaW5wdXRGaWxlIiwiZmlsZVNpemUiLCJmaWxlTmFtZSIsIm5hbWUiLCJmaWxlVHlwZSIsImFsZXJ0IiwiRXJyb3IiLCJpbWdVcmwiLCJVUkwiLCJjcmVhdGVPYmplY3RVUkwiLCJpbWFnZSIsIkltYWdlIiwib25sb2FkIiwiaGVpZ2h0Iiwid2lkdGgiLCJzcmMiLCJUZXh0YXJlYSIsInJvd3MiLCJVcGxvYWRQaG90byIsIlVwbG9hZEF0dGFjaEZpbGUiLCJBZGRUb0NvbGxlY3Rpb24iLCJNb2RhbCIsIkNvbmZpcm1Nb2RhbCIsIkxvYWRpbmdfMSIsIkFsZXJ0XzEiLCJlbnVtZXJhYmxlIiwiZ2V0IiwiTW9kYWxfMSIsIkNvbmZpcm1Nb2RhbF8xIiwiSW5wdXRfMSIsIkJ1dHRvbl8xIiwiVGV4dGFyZWFfMSIsIklucHV0RmlsZV8xIiwiRHJvcGRvd25fMSIsIkFkZFRvQ29sbGVjdGlvbl8xIiwiVXBsb2FkQXR0YWNoRmlsZV8xIiwiVXBsb2FkUGhvdG9fMSIsIl9fYXdhaXRlciIsInRoaXNBcmciLCJfYXJndW1lbnRzIiwiUCIsImdlbmVyYXRvciIsImFkb3B0IiwicmVzb2x2ZSIsIlByb21pc2UiLCJyZWplY3QiLCJmdWxmaWxsZWQiLCJzdGVwIiwibmV4dCIsInJlamVjdGVkIiwicmVzdWx0IiwiZG9uZSIsInRoZW4iLCJhcHBseSIsIkNvbGxlY3Rpb25Nb2RhbCIsInNldE5hbWUiLCJzdGF0dXMiLCJzZXRTdGF0dXMiLCJjb2xsZWN0aW9ucyIsInNldENvbGxlY3Rpb25zIiwib3BlbiIsImZldGNoQ29sbGVjdGlvbnMiLCJyZXNwb25zZSIsInJlcXVlc3QiLCJwYWdlSWQiLCJhdXRoIiwiY3JlYXRlQ29sbGVjdGlvbiIsInBvc3QiLCJ0b2dnbGVQYWdlSW5DTCIsImNvbGxlY3Rpb24iLCJjbElkIiwic2VsZWN0ZWQiLCJjbE5hbWUiLCJoZWFkZXIiLCJvblN1Ym1pdCIsInByZXZlbnREZWZhdWx0IiwiY2wiLCJvbkNhbmNlbCIsIm9uQ29uZmlybSIsImJ0bk5hbWUiLCJyZWFjdF9kb21fMSIsImNyZWF0ZVBvcnRhbCIsInNldEVycm9yIiwiaW5wdXRMYWJlbE5hbWUiLCJzZXRJbnB1dExhYmVsTmFtZSIsIm9uRmlsZUlucHV0Q2hhbmdlIiwib25VcGxvYWRDbGljayIsImZpbGUiLCJxcyIsImVuY29kZVVSSUNvbXBvbmVudCIsInVybCIsImNvbnRlbnRUeXBlIiwicmVzZXQiLCJtc2ciLCJ0ZXh0IiwiY3JvcERhdGEiLCJzZXRDcm9wRGF0YSIsIngiLCJ5Iiwic2NyaXB0IiwiY3JlYXRlRWxlbWVudCIsInNldEF0dHJpYnV0ZSIsImhlYWQiLCJhcHBlbmRDaGlsZCIsInN0eWxlc2hlZXQiLCJyZWwiLCJjcm9wIiwiYXNwZWN0UmF0aW8iLCJNYXRoIiwicm91bmQiLCJwdXQiLCJjbGljayIsImFzcGVjdCIsIm1pblciLCJtaW5IIiwiZ2V0RWxlbWVudEJ5SWQiLCJjcm9wcGVyIiwiQ3JvcHBlciIsInZpZXdNb2RlIiwiYmFja2dyb3VuZCIsIm1vZGFsIiwiem9vbWFibGUiLCJtaW5Dcm9wQm94V2lkdGgiLCJtaW5Dcm9wQm94SGVpZ2h0IiwiY3JvcGVuZCIsImdldERhdGEiLCJyZWFkeSIsInNlbGYiLCJhZGRFdmVudExpc3RlbmVyIiwiZGVzdHJveSIsImNyb3BNc2ciXSwic291cmNlUm9vdCI6IiJ9