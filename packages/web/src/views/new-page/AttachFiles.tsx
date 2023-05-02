import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  Loading,
  Button,
  ConfirmModal,
  UploadAttachFile,
} from "@pagser/reusable";
import { util, request, loadingModal, alert } from "@pagser/common";
import ProgressBar from "./ProgressBar";

interface IFile {
  name: string;
  id: string;
}

const AttachFiles = () => {
  const [files, setFiles] = useState<IFile[]>([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const [confirmationMdl, setConfirmationMdl] = useState(false);
  const [confirmationMdlDataId, setConfirmationMdlDataId] = useState("");
  const [uploadAttachFileMdl, setUploadAttachFileMdl] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    fetchFiles();
  }, []);

  const fetchFiles = async (msg?: string) => {
    try {
      setLoading(true);
      const response = (await request.get(
        `/pages/${util.getParameterByName(
          "id",
          window.location.href
        )}/attach-files?type=draft`,
        {
          auth: true,
        }
      )) as any;

      setFiles(response.attachFiles);
      setLoading(false);
      if (msg) alert(msg, "success");
    } catch (error: any) {
      if (error.status === 401) {
        window.location.href = "/login?redirected=new-page";
      } else {
        navigate(`/new-page/initial-step`);
      }
    }
  };

  const renderFiles = () => {
    return files.map((file) => {
      return (
        <a
          className="file-link"
          key={file.name}
          href={`/api/pages/${util.getParameterByName(
            "id",
            window.location.href
          )}/attach-files/${file.name}`}
        >
          <i className="fa fa-download" />
          {" " + file.name}
          <button
            className="btn-i"
            onClick={(e) => {
              // This will prevent the file from starting to get downloaded
              e.preventDefault();
              setConfirmationMdl(true);
              setConfirmationMdlDataId(file.id);
            }}
          >
            <i className="fa fa-times" aria-hidden="true" />
          </button>
        </a>
      );
    });
  };

  const onBackButtonClicked = () => {
    navigate(
      `/new-page/page-thumbnail?id=${util.getParameterByName(
        "id",
        window.location.href
      )}`
    );
  };

  const onNextButtonClicked = () => {
    navigate(
      `/new-page/final-step?id=${util.getParameterByName(
        "id",
        window.location.href
      )}`
    );
  };

  const renderContents = () => {
    if (loading)
      return (
        <div className="center-content">
          <Loading />
        </div>
      );

    return (
      <React.Fragment>
        {/* Back button */}
        <button
          className="button-text button-text--big a-11"
          onClick={() => {
            onBackButtonClicked();
          }}
        >
          <i className="fa fa-arrow-left" aria-hidden="true" /> Back
        </button>

        {/* Stage title */}
        <div className="center-content">
          <h3 className="heading-tertiary">Add Attach Files</h3>
        </div>

        <p className="a-18">
          Add attach files for your page in pretty much any format that you
          want:
        </p>

        <Button
          color="blue"
          size="small"
          rounded={true}
          onClick={() => {
            setUploadAttachFileMdl(true);
          }}
        >
          <i className="fa fa-upload button__icon-left" /> Add an Attach File
        </Button>

        <ConfirmModal
          header="Remove the attach file"
          open={confirmationMdl}
          message="Are you sure that you want to remove this attach file?"
          onConfirm={async () => {
            setConfirmationMdl(false);
            loadingModal("Deleting the attach file...");

            await request.delete(
              `/pages/${util.getParameterByName(
                "id",
                window.location.href
              )}/attach-files/${confirmationMdlDataId}?type=draft`,
              {
                auth: true,
              }
            );
            loadingModal();
            fetchFiles("File deleted successfully.");
          }}
          onCancel={() => setConfirmationMdl(false)}
        />

        <UploadAttachFile
          open={uploadAttachFileMdl}
          header="Add an Attach File"
          text="You can upload maximum of 5 files 10MB each for every page."
          size={10000000}
          url={`/pages/${util.getParameterByName(
            "id",
            window.location.href
          )}/attach-files?type=draft`}
          success={() => {
            fetchFiles("File uploaded successfully.");
          }}
          onClose={() => {
            setUploadAttachFileMdl(false);
          }}
        />

        <div className="new-page-attach-files__files">{renderFiles()}</div>

        <p className="a-18 italic">
          {files.length
            ? "You can always add/remove attach files after you published your page."
            : "You can always add/remove attach files after you published your page, you can also skip this for now and do it after you published your page."}
        </p>

        {/* Next button */}
        <div className="u-flex-text-center">
          <Button
            onClick={() => {
              onNextButtonClicked();
            }}
            color={files.length ? "blue" : "default"}
          >
            {files.length ? "Next" : "Skip"}

            <i className="fa fa-arrow-circle-right button__icon-right"></i>
          </Button>
        </div>
      </React.Fragment>
    );
  };

  return (
    <React.Fragment>
      <ProgressBar width={80} />
      <div className="page-new">{renderContents()}</div>
    </React.Fragment>
  );
};

export default AttachFiles;
