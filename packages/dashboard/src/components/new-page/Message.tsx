// import React, { Component } from "react";
// import { ROOT_URL } from "../../lib/keys";
// import { getParameterByName } from "../../lib/util";

// class Message extends Component {
//   render() {
//     const status = getParameterByName("status", window.location.href);
//     const type = getParameterByName("type", window.location.href);
//     const url = getParameterByName("url", window.location.href);
//     const id = getParameterByName("id", window.location.href);
//     const username = getParameterByName("username", window.location.href);

//     if (type === "public" && status === "success") {
//       return (
//         <div>
//           <div className="middle-box middle-box--success margin-bottom-1">
//             You have successfully published your public page, you can view that
//             from the link below. Other users can like, dislike or comment on
//             your page if you haven't disabled them and we will send you
//             notifications about them. You can view all the public and private
//             pages you've created in{" "}
//             <strong>
//               <a className="white-link" href="/u/pages">
//                 pages section.
//               </a>
//             </strong>
//           </div>
//           <div className="center-content middle-box--link">
//             <a className="blue-link" href={`/public-pages/${url}`}>
//               View your public page
//             </a>
//           </div>
//         </div>
//       );
//     }

//     if (type === "private" && status === "success") {
//       return (
//         <div>
//           <div className="middle-box middle-box--success margin-bottom-1">
//             You have successfully created your private page, you can view that
//             from the link below. To share this page with the persons you want,
//             you should share the link of your page with them (link below). You
//             can view all the public and private pages you've created in{" "}
//             <strong>
//               <a className="white-link" href="/u/pages">
//                 pages section.
//               </a>
//             </strong>
//           </div>
//           <div className="center-content middle-box--link">
//             <a className="blue-link" href={`/${username}/${url}`}>
//               View your private page
//             </a>
//           </div>
//         </div>
//       );
//     }

//     if (status === "error") {
//       return (
//         <div>
//           <div className="middle-box middle-box--error margin-bottom-1">
//             Sorry something went wrong because of us! We will review what
//             happened as soon as possible and let you know what was the issue. In
//             the meanwhile please create your page again from scratch or view
//             your draft pages via the links below. We apologize for the
//             inconvenience that happened.
//           </div>
//           <div className="center-content middle-box--link">
//             <a className="blue-link" href={`/new-page/initial-step`}>
//               Create a new page
//             </a>
//             <br />

//             <a className="blue-link" href="/u/pages/draft">
//               View your draft pages
//             </a>
//           </div>
//         </div>
//       );
//     }

//     if (status === "error-contents") {
//       return (
//         <div>
//           <div className="middle-box middle-box--error margin-bottom-1">
//             There was something wrong with the contents you've provided, please
//             review your page contents and make sure that everything is OK.
//           </div>
//           <div className="center-content middle-box--link">
//             <a className="blue-link" href={`/new-page/initial-step?id=${id}`}>
//               Review your page
//             </a>
//           </div>
//         </div>
//       );
//     }
//   }
// }

// export default Message;

import React from "react";

const Test = () => {
  return <div></div>;
};

export default Test;
