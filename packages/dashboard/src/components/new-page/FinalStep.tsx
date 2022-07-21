// import React, { Component } from "react";
// import axios from "axios";
// import { util } from "@pagser/common";
// import { Loading } from "@pagser/reusable";
// import ProgressBar from "./ProgressBar";

// import FinalStepPublic from "./FinalStepPublic";
// import FinalStepPrivate from "./FinalStepPrivate";

// class FinalStep extends Component {
//   state = {
//     type: null,
//     comments: null,
//     rating: null,
//     anonymously: null,
//     links: null,
//     tags: "",
//     username: "",
//     url: null,
//     usedUrls: [],
//   };

//   async componentDidMount() {
//     try {
//       const { data } = await axios.get(
//         `/api/new-page/final-step/${util.getParameterByName(
//           "id",
//           window.location.href
//         )}`,
//         {
//           headers: {
//             authorization: localStorage.getItem("token"),
//           },
//         }
//       );

//       this.setState({
//         type: data.page.type,
//         comments: data.page.configurations.comments,
//         rating: data.page.configurations.rating,
//         anonymously: data.page.configurations.anonymously,
//         links: data.page.configurations.links,
//         tags: data.page.tags ? data.page.tags[0] : "",
//         username: data.page.author.username,
//         url: data.page.url || null,
//         usedUrls: data.urls,
//         loaded: true,
//       });
//     } catch (error) {
//       if (error.response.status === 401) {
//         window.location.href = "/login?redirected=new-page";
//       } else {
//         this.props.history.push(`/new-page/initial-step`);
//       }
//     }
//   }

//   render() {
//     let content;
//     if (!this.state.type) {
//       content = (
//         <div className="center-content">
//           <Loading />
//         </div>
//       );
//     } else if (this.state.type === "public") {
//       content = (
//         <FinalStepPublic
//           history={this.props.history}
//           comments={this.state.comments}
//           rating={this.state.rating}
//           links={this.state.links}
//           anonymously={this.state.anonymously}
//           tags={this.state.tags}
//         />
//       );
//     } else if (this.state.type === "private") {
//       content = (
//         <FinalStepPrivate
//           history={this.props.history}
//           username={this.state.username}
//           comments={this.state.comments}
//           rating={this.state.rating}
//           anonymously={this.state.anonymously}
//           url={this.state.url}
//           usedUrls={this.state.usedUrls}
//         />
//       );
//     }

//     return (
//       <div id="new-page-container">
//         <ProgressBar width={100} />
//         <div className="page-new">{content}</div>
//       </div>
//     );
//   }
// }

// export default FinalStep;

import React from "react";

const Test = () => {
  return <div></div>;
};

export default Test;
