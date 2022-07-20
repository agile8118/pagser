// import React, { useState, useEffect, useRef } from "react";
// import axios from "axios";
// import util from "../../lib/forms";
// import { Alert, Modal } from "@pagser/reusable";
// import { validate } from "@pagser/common";

// const VerifyEmail = () => {

//     const firstDigitRef = useRef<HTMLInputElement>(null);
//     const secondDigitRef = useRef<HTMLInputElement>(null);
//     const thirdDigitRef = useRef<HTMLInputElement>(null);
//     const fourthDigitRef = useRef<HTMLInputElement>(null);
//     const fifthDigitRef = useRef<HTMLInputElement>(null);

//     // this.firstDigit = React.createRef();
//     // this.secondDigit = React.createRef();
//     // this.thirdDigit = React.createRef();
//     // this.fourthDigit = React.createRef();
//     // this.fifthDigit = React.createRef();

//     const [firstDigit, setFirstDigit] = useState("");
//     const [secondDigit, setSecondDigit] = useState("");
//     const [thirdDigit, setThirdDigit] = useState("");
//     const [fourthDigit, setFourthDigit] = useState("");
//     const [fifthDigit, setFifthDigit] = useState("");

//     // this.state = {
//     //   name: "",
//     //   username: "",
//     //   email: "",
//     //   password: "",
//     //   confirmPassword: "",
//     //   usernameIsOK: null,
//     //   status: "showform",
//     //   alertMessage: null,
//     //   alertType: "success",
//     //   digits: {
//     //     first: "",
//     //     second: "",
//     //     third: "",
//     //     fourth: "",
//     //     fifth: "",
//     //   },
//     //   loading: false,
//     //   changeEmailMdl: false,
//     // };

//  // Reset the digits inputs
//  const resetDigits = () => {
//   setFirstDigit("")
//   setSecondDigit("")
//   setThirdDigit("")
//   setFourthDigit("")
//   setFifthDigit("")
//   firstDigitRef.current?.focus();
// }

//   const resendCode = () => {
//     setLoading(true)
//     axios
//       .post(`/api/sendcode`, {
//         name: name,
//         username: username,
//         password: password,
//         email: email,
//       })
//       .then((response) => {
//         setLoading(false)
//         setAlertMessage("New code has been sent to your email.")
//         setAlertType("success")
//         resetDigits();
//       })
//       .catch((error) => {
//         setLoading(false)
//         setAlertMessage("Something went wrong, please try again.")
//         setAlertType("error")
//         resetDigits();
//       });
//   }

//   onVerifyCodeSubmit() {
//     setLoading(true)

//     const code = `${firstDigit}${secondDigit}${thirdDigit}${fourthDigit}${fifthDigit}`;

//     axios
//       .post(`/register/validatecode`, {
//         code: Number(code),
//       })
//       .then((response) => {
//         axios
//           .post(`/register`, {
//             name: name,
//             username: username,
//             password: password,
//             email: email,
//             code: Number(code),
//           })
//           .then((response) => {
//             localStorage.setItem("token", response.data.token);
//             window.location.href = `/home`;
//           })
//           .catch((error) => {
//             setLoading(false)
//             setAlertMessage("Something went wrong, please try again.")
//             setAlertType("error")
//             resetDigits()

//           });
//       })
//       .catch((error) => {
//         setLoading(false)
//         setAlertMessage("The code is invalid, make sure that you put the exact code we've sent to your email. You may want to resend the code.")
//         setAlertType("error")
//         resetDigits()
//       });
//   }

//   onChangeEmailSubmit() {
//     const email = document.querySelector("#change-email-input").value;
//     axios
//       .post(`/api/sendcode`, {
//         name: name,
//         username: username,
//         password: password,
//         email,
//       })
//       .then((response) => {
//         this.setState({
//           email,
//           alertMessage: "New code has been sent to your email.",
//           alertType: "success",
//           changeEmailMdl: false,
//         });
//         this.resetDigits();
//       })
//       .catch((error) => {
//         if (error.response.data.error === "email is in use") {
//           this.setState({
//             alertMessage:
//               "This email is already in use, please login with this email or choose another one.",
//             alertType: "error",
//             changeEmailMdl: false,
//           });
//           this.resetDigits();
//         } else {
//           this.setState({
//             alertMessage: "Something went wrong, please try again.",
//             alertType: "error",
//           });
//           this.resetDigits();
//         }
//       });
//   }

//   // Move to the specified diget
//   moveDigit(number) {}

//   // Check if all digits are entered
//   checkDigits() {
//     const first = digits.first;
//     const second = digits.second;
//     const third = digits.third;
//     const fourth = digits.fourth;
//     const fifth = digits.fifth;
//     if (
//       first.length === 1 &&
//       second.length === 1 &&
//       third.length === 1 &&
//       fourth.length === 1 &&
//       fifth.length === 1
//     ) {
//       this.onVerifyCodeSubmit();
//     }
//   }

//   // When a digit is changed
//   onDigitChanged(event, number) {
//     const valueEntered = event.target.value;
//     if (/^\d+$/.test(valueEntered)) {
//       switch (number) {
//         case "first":
//           this.setState(
//             (prevState) => ({
//               digits: {
//                 ...prevState.digits,
//                 first: valueEntered,
//               },
//             }),
//             () => {
//               this.checkDigits();
//             }
//           );
//           this.secondDigit.current.focus();
//           break;
//         case "second":
//           this.setState(
//             (prevState) => ({
//               digits: {
//                 ...prevState.digits,
//                 second: valueEntered,
//               },
//             }),
//             () => {
//               this.checkDigits();
//             }
//           );
//           this.thirdDigit.current.focus();
//           break;
//         case "third":
//           this.setState(
//             (prevState) => ({
//               digits: {
//                 ...prevState.digits,
//                 third: valueEntered,
//               },
//             }),
//             () => {
//               this.checkDigits();
//             }
//           );
//           this.fourthDigit.current.focus();
//           break;
//         case "fourth":
//           this.setState(
//             (prevState) => ({
//               digits: {
//                 ...prevState.digits,
//                 fourth: valueEntered,
//               },
//             }),
//             () => {
//               this.checkDigits();
//             }
//           );
//           this.fifthDigit.current.focus();
//           break;
//         case "fifth":
//           this.setState(
//             (prevState) => ({
//               digits: {
//                 ...prevState.digits,
//                 fifth: valueEntered,
//               },
//             }),
//             () => {
//               this.checkDigits();
//             }
//           );
//           break;
//       }
//     }
//   }

//   // When user presses a key in a digit
//   onDigitKeyDown(event, number) {
//     // Backspace key pressed
//     if (event.keyCode === 8) {
//       switch (number) {
//         case "first":
//           this.setState((prevState) => ({
//             digits: {
//               ...prevState.digits,
//               first: "",
//             },
//           }));
//           break;
//         case "second":
//           this.setState((prevState) => ({
//             digits: {
//               ...prevState.digits,
//               second: "",
//             },
//           }));
//           this.firstDigit.current.focus();
//           break;
//         case "third":
//           this.setState((prevState) => ({
//             digits: {
//               ...prevState.digits,
//               third: "",
//             },
//           }));
//           this.secondDigit.current.focus();
//           break;
//         case "fourth":
//           this.setState((prevState) => ({
//             digits: {
//               ...prevState.digits,
//               fourth: "",
//             },
//           }));
//           this.thirdDigit.current.focus();
//           break;
//         case "fifth":
//           this.setState((prevState) => ({
//             digits: {
//               ...prevState.digits,
//               fifth: "",
//             },
//           }));
//           this.fourthDigit.current.focus();
//           break;
//       }
//     }

//     // Left arrow key pressed
//     if (event.keyCode === 37) {
//       switch (number) {
//         case "second":
//           this.firstDigit.current.focus();
//           break;
//         case "third":
//           this.secondDigit.current.focus();
//           break;
//         case "fourth":
//           this.thirdDigit.current.focus();
//           break;
//         case "fifth":
//           this.fourthDigit.current.focus();
//           break;
//       }
//     }

//     // Right arrow key pressed
//     if (event.keyCode === 39) {
//       switch (number) {
//         case "first":
//           this.secondDigit.current.focus();
//           break;
//         case "second":
//           this.thirdDigit.current.focus();
//           break;
//         case "third":
//           this.fourthDigit.current.focus();
//           break;
//         case "fourth":
//           this.fifthDigit.current.focus();
//           break;
//       }
//     }
//   }

//   // Render buttons for verify email part
//   renderButtons() {
//     if (loading === false) {
//       return (
//         <div className="margin-top-3">
//           <a
//             href="javascript:void(0)"
//             onClick={() => {
//               this.setState({ changeEmailMdl: true });
//             }}
//             className="btn-text btn-text-underlined"
//           >
//             Change your email
//           </a>
//           <br />
//           <a
//             href="javascript:void(0)"
//             onClick={() => {
//               this.resendCode();
//             }}
//             className="btn-text btn-text-underlined"
//           >
//             Resend code
//           </a>
//         </div>
//       );
//     } else {
//       return (
//         <div className="margin-top-3">
//           <div className="center-content">
//             <div className="lds-css ng-scope">
//               <div className="lds-spinner">
//                 <div />
//                 <div />
//                 <div />
//                 <div />
//                 <div />
//                 <div />
//                 <div />
//                 <div />
//                 <div />
//                 <div />
//                 <div />
//                 <div />
//               </div>
//             </div>
//           </div>
//         </div>
//       );
//     }
//   }

//   return (
//     <div>
//       <Modal
//         header="Change your email"
//         open={changeEmailMdl}
//         onClose={() => {
//           this.setState({ changeEmailMdl: false });
//         }}
//       >
//         <p>
//           Put your email address here and we will send a new code to that.
//         </p>
//         <form
//           onSubmit={(event) => {
//             event.preventDefault();
//             this.onChangeEmailSubmit.apply(this);
//           }}
//         >
//           <div className="form__group">
//             <input
//               type="email"
//               placeholder="Email"
//               className="form__input"
//               id="change-email-input"
//               required
//             />
//           </div>
//           <div className="right-content">
//             <button type="submit" className="btn btn-blue btn-round">
//               Change
//             </button>
//           </div>
//         </form>
//       </Modal>

//       <div className="auth">
//         <h3 className="heading-tertiary">Verify your email address</h3>
//         <p className="small-copy">
//           {email} - The last step is to enter the 5 digits code
//           we have just sent to your email to verify your email address.
//         </p>
//         <Alert
//           message={alertMessage}
//           onClose={() => {
//             this.setState({ alertMessage: null });
//           }}
//           type={alertType}
//         />
//         <form
//           onSubmit={(event) => {
//             event.preventDefault();
//             this.onVerifyCodeSubmit.apply(this);
//           }}
//         >
//           <div className="form__group">
//             <div className="input-digits">
//               <input
//                 type="tel"
//                 autoFocus
//                 value={digits.first}
//                 ref={this.firstDigit}
//                 onKeyDown={(event) => {
//                   this.onDigitKeyDown(event, "first");
//                 }}
//                 onChange={(event) => {
//                   this.onDigitChanged(event, "first");
//                 }}
//                 disabled={loading}
//                 maxLength="1"
//               />
//               <input
//                 type="tel"
//                 value={digits.second}
//                 ref={this.secondDigit}
//                 onKeyDown={(event) => {
//                   this.onDigitKeyDown(event, "second");
//                 }}
//                 onChange={(event) => {
//                   this.onDigitChanged(event, "second");
//                 }}
//                 disabled={loading}
//                 maxLength="1"
//               />
//               <input
//                 type="tel"
//                 value={digits.third}
//                 ref={this.thirdDigit}
//                 onKeyDown={(event) => {
//                   this.onDigitKeyDown(event, "third");
//                 }}
//                 onChange={(event) => {
//                   this.onDigitChanged(event, "third");
//                 }}
//                 disabled={loading}
//                 maxLength="1"
//               />
//               <input
//                 type="tel"
//                 value={digits.fourth}
//                 ref={this.fourthDigit}
//                 onKeyDown={(event) => {
//                   this.onDigitKeyDown(event, "fourth");
//                 }}
//                 onChange={(event) => {
//                   this.onDigitChanged(event, "fourth");
//                 }}
//                 disabled={loading}
//                 maxLength="1"
//               />
//               <input
//                 type="tel"
//                 value={digits.fifth}
//                 ref={this.fifthDigit}
//                 onKeyDown={(event) => {
//                   this.onDigitKeyDown(event, "fifth");
//                 }}
//                 onChange={(event) => {
//                   this.onDigitChanged(event, "fifth");
//                 }}
//                 disabled={loading}
//                 maxLength="1"
//               />
//             </div>
//           </div>
//           {this.renderButtons.apply(this)}
//         </form>
//       </div>
//     </div>
//   );
// }

// export default VerifyEmail;

const test = () => {
  return <div />;
};

export default test;
