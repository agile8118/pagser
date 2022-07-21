// import React, { Component } from "react";
// import { getParameterByName, showSnackBar, loadingModal } from "../../lib/util";
// import { connect } from "react-redux";
// import axios from "axios";
// import ProgressBar from "../partials/ProgressBar";
// import { ConfirmModal } from "../partials/Modals";
// import Loading from "../partials/Loading";
// import UploadAttachFile from "../modals/UploadAttachFile";

// import {
//   openUploadAttachFile,
//   openConfDeleteAttachFile,
//   closeModal,
// } from "actions";

// class AttachFiles extends Component {
//   state = { files: [], loaded: false, error: "" };

//   componentDidMount() {
//     this.fetchFiles();
//   }

//   fetchFiles = async (msg) => {
//     try {
//       const { data } = await axios.get(
//         `/api/pages/${getParameterByName(
//           "id",
//           window.location.href
//         )}/attach-files?type=draft`,
//         {
//           headers: {
//             authorization: localStorage.getItem("token"),
//           },
//         }
//       );

//       this.setState({ files: data.attachFiles, loaded: true });

//       if (msg) showSnackBar(msg, "success");
//     } catch (error) {
//       if (error.response.status === 401) {
//         window.location.href = "/login?redirected=new-page";
//       } else {
//         this.props.history.push(`/new-page/initial-step`);
//       }
//     }
//   };

//   renderFiles = () => {
//     return this.state.files.map((file) => {
//       return (
//         <a
//           className="file-link"
//           key={file.name}
//           href={`/api/pages/${getParameterByName(
//             "id",
//             window.location.href
//           )}/attach-files/${file.name}`}
//         >
//           <i className="fa fa-download" />
//           {" " + file.name}
//           <button
//             className="btn-i"
//             onClick={(e) => {
//               // This will prevent the file from starting to get downloaded
//               e.preventDefault();
//               this.props.openConfDeleteAttachFile(file._id, file.name);
//             }}
//           >
//             <i className="fa fa-times" aria-hidden="true" />
//           </button>
//         </a>
//       );
//     });
//   };

//   onBackButtonClicked = () => {
//     this.props.history.push(
//       `/new-page/page-thumbnail?id=${getParameterByName(
//         "id",
//         window.location.href
//       )}`
//     );
//   };

//   onNextButtonClicked = () => {
//     this.props.history.push(
//       `/new-page/final-step?id=${getParameterByName(
//         "id",
//         window.location.href
//       )}`
//     );
//   };

//   renderContents() {
//     if (!this.state.loaded)
//       return (
//         <div className="center-content">
//           <Loading />
//         </div>
//       );

//     return (
//       <React.Fragment>
//         {/* Back button */}
//         <button
//           className="btn-text btn-text-big a-11"
//           onClick={this.onBackButtonClicked}
//         >
//           <i className="fa fa-arrow-left" aria-hidden="true" /> Back
//         </button>

//         {/* Stage title */}
//         <div className="center-content">
//           <h3 className="heading-tertiary">Add attach files</h3>
//         </div>

//         <p className="a-18">
//           Add attach files for your page in pretty much any format if you want:
//         </p>

//         <button
//           className="btn btn-blue btn-sm btn-round margin-bottom-2"
//           onClick={() => this.props.openUploadAttachFile()}
//         >
//           <i className="fa fa-upload" /> Add an Attach File
//         </button>

//         <br />

//         <ConfirmModal
//           header="Remove the attach file"
//           open={this.props.confMdl.open}
//           message="Are you sure that you want to remove this attach file?"
//           onConfirm={async () => {
//             this.props.closeModal();

//             loadingModal("Deleting the attach file...");
//             await axios.delete(
//               `/api/pages/${getParameterByName(
//                 "id",
//                 window.location.href
//               )}/attach-files/${this.props.confMdl.id}?type=draft`,
//               {
//                 headers: {
//                   authorization: localStorage.getItem("token"),
//                 },
//               }
//             );
//             loadingModal();
//             this.fetchFiles("File deleted successfully.");
//           }}
//           onCancel={() => this.props.closeModal()}
//         />

//         <UploadAttachFile
//           header="Add an attach file"
//           text="You can upload maximum of 5 files 10MB each for every page."
//           size={10000000}
//           url={`/api/pages/${getParameterByName(
//             "id",
//             window.location.href
//           )}/attach-files?type=draft`}
//           success={() => {
//             this.fetchFiles("File uploaded successfully.");
//           }}
//         />

//         {this.renderFiles()}

//         <p className="a-18 italic">
//           {this.state.files.length
//             ? "You can always add/remove attach files after you published your page."
//             : "You can always add/remove attach files after you published your page, you can also skip this for now and do it after you published your page."}
//         </p>

//         {/* Next button */}
//         <div className="center-content margin-top-2">
//           <button
//             className={
//               this.state.files.length ? "btn btn-blue" : "btn btn-default"
//             }
//             onClick={() => {
//               this.onNextButtonClicked();
//             }}
//           >
//             {this.state.files.length ? "Next" : "Skip"}
//           </button>
//         </div>
//       </React.Fragment>
//     );
//   }

//   render() {
//     return (
//       <React.Fragment>
//         <ProgressBar width={80} />
//         <div className="page-new">{this.renderContents()}</div>
//       </React.Fragment>
//     );
//   }
// }

// const mapStateToProps = (state) => {
//   return {
//     confMdl: state.modals.confDeleteAttachFile || {},
//   };
// };

// export default connect(mapStateToProps, {
//   openUploadAttachFile,
//   openConfDeleteAttachFile,
//   closeModal,
// })(AttachFiles);

import React from "react";

const Test = () => {
  return <div></div>;
};

export default Test;
