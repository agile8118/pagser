import React, { useState, useEffect, ReactElement, useReducer } from "react";
import TinyMCE from "react-tinymce";
import { useNavigate } from "react-router-dom";
import { validate, util, request, loadingModal, alert } from "@pagser/common";
import { Loading, Button, Input, Textarea } from "@pagser/reusable";
import ProgressBar from "./ProgressBar";
import { TType } from "./InitialStep";

const PageContents = () => {
  const [type, setType] = useState<TType | null>(null);

  const [title, setTitle] = useState("");
  const [titleError, setTitleError] = useState("");

  const [briefDes, setBriefDes] = useState("");
  const [briefDesError, setBriefDesError] = useState("");

  const [targets, setTargets] = useState("");
  const [targetsError, setTargetsError] = useState("");

  const [body, setBody] = useState("");
  const [bodyError, setBodyError] = useState("");

  const [saved, setSaved] = useState<boolean | null>(null);
  const [nextButtonLoading, setNextButtonLoading] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    (async () => {
      const pageId = util.getParameterByName("id", window.location.href);
      try {
        // Get the current page data from server and set those data in inputs
        const response = (await request.get(
          `/new-page/page-contents/${pageId}`,
          { auth: true }
        )) as any;
        setBody(response.page.body || "");
        setType(response.page.type as TType);
        setTitle(response.page.title || "");
        setTargets(response.page.targets || "");
        setBriefDes(response.page.brief_description || "");
      } catch (e: any) {
        if (e.status === 401) {
          window.location.href = "/login?redirected=new-page";
        } else {
          navigate(`/new-page/initial-step`);
        }
      }
    })();
  }, []);

  useEffect(() => {
    // Send a request to server automatically to save the changes, we won't send a request
    // if the changes are already saved
    const interval = setInterval(() => {
      if (!saved) updatePage();
    }, 5000);

    return () => clearInterval(interval);
  }, [title, body, briefDes, targets]);

  useEffect(() => {
    checkPageBodyValidation();
  }, [body]);

  useEffect(() => {
    checkTargetsValidation();
  }, [targets]);

  const handlerBeforeunload = (e) => {
    e.preventDefault();
    e.returnValue = "Unsaved changes, are you sure you want to close?";
    return;
  };

  useEffect(() => {
    if (saved === false) {
      // window.addEventListener("beforeunload", handlerBeforeunload, true);
    }
  }, [saved]);

  // This will send the current page data to server for saving.
  // This will run when user wants to change the current stage
  // either by going to the next or previous stage
  const updatePage = async (to?: string, successMessage?: string) => {
    if (to && !to?.includes("page-thumbnail")) loadingModal("Loading...");

    if (to && to.includes("page-thumbnail")) {
      setNextButtonLoading(true);
    }

    try {
      await request.patch(
        `/new-page/page-contents/${util.getParameterByName(
          "id",
          window.location.href
        )}`,
        {
          page: {
            contents: {
              title,
              briefDes,
              body,
              targets,
            },
          },
        },
        { auth: true }
      );

      setSaved(true);

      // @Todo: doesn't work!
      window.removeEventListener("beforeunload", handlerBeforeunload, true);
      if (successMessage) alert(successMessage, "success");

      if (to) {
        loadingModal();
        setNextButtonLoading(false);
        navigate(to);
      }
    } catch (e) {
      if (to) {
        loadingModal();
        setNextButtonLoading(false);
        navigate(`/new-page/initial-step`);
      }
    }
  };

  const onBackButtonClicked = () => {
    updatePage(
      `/new-page/initial-step?id=${util.getParameterByName(
        "id",
        window.location.href
      )}`
    );
  };

  const onNextButtonClicked = () => {
    if (checkIfAllOk()) {
      updatePage(
        `/new-page/page-thumbnail?id=${util.getParameterByName(
          "id",
          window.location.href
        )}`
      );
    } else {
      if (!checkTitleValidation()) {
        const titleEl = document.querySelector("#title") as HTMLInputElement;
        titleEl.focus();
        return;
      }

      if (!checkBriefDesValidation()) {
        const briefDesEl = document.querySelector(
          "#briefDes"
        ) as HTMLInputElement;
        briefDesEl.focus();
        return;
      }

      if (!checkTargetsValidation()) {
        const targetsEl = document.querySelector(
          "#targets"
        ) as HTMLInputElement;
        targetsEl.focus();
        return;
      }

      if (!checkPageBodyValidation()) {
        document.getElementById("targetsInput")?.scrollIntoView();
        document.querySelector("iframe")?.contentWindow?.document.body.focus();
      }
    }
  };

  // Check if the title provided by user is valid or not.
  // This will run by onblur and onchange event on title input
  const checkTitleValidation = (text?: string) => {
    const errMsg = validate.page(type as TType).title(text ? text : title);

    if (errMsg) {
      setTitleError(errMsg);
      return false;
    }

    setTitleError("");
    return true;
  };

  // Check if the brief description provided by user is valid or not.
  // This will run by onblur and onchange event on briefDes input
  const checkBriefDesValidation = () => {
    const errMsg = validate.page(type as TType).briefDes(briefDes);

    if (errMsg) {
      setBriefDesError(errMsg);
      return false;
    }

    setBriefDesError("");
    return true;
  };

  // Check if the targets provided by user is valid or not.
  // This will run by onblur and onchange event on targets input
  const checkTargetsValidation = () => {
    if (!type) return;
    const errMsg = validate.page(type as TType).targets(targets);

    if (errMsg) {
      setTargetsError(errMsg);
      return false;
    }

    setTargetsError("");
    return true;
  };

  // Check if the Page Body provided by user is valid or not.
  // This will run by onchange event on TinyMCE input
  const checkPageBodyValidation = () => {
    // Remove all html and extra spaces and then check
    const html = body;
    let div = document.createElement("div");
    div.innerHTML = html;
    let bodyText = div.textContent || div.innerText || "";
    bodyText = bodyText.replace(/\s+/g, " ").trim();

    const minLen = type === "public" ? 50 : 1;
    const tinymceEL = document.querySelector(".mce-tinymce") as HTMLElement;

    if (bodyText.length < minLen && tinymceEL) {
      tinymceEL.style.border = "1px solid #e74c3c";

      setBodyError(
        type === "public"
          ? `Body should be more than ${minLen} characters.`
          : "Body cannot be blank."
      );

      return false;
    }

    if (bodyText.length > 20000 && tinymceEL) {
      tinymceEL.style.border = "1px solid #e74c3c";
      setBodyError("Body should be less than 20000 characters.");
      return false;
    }

    if (tinymceEL) {
      tinymceEL.style.border = "1px solid #CACACA";
      setBodyError("");
      return true;
    }

    return false;
  };

  // Return true or false to indicate if all the inputs are valid or not
  const checkIfAllOk = () => {
    // For page body, remove all html and extra spaces and then check
    const html = body;
    let div = document.createElement("div");
    div.innerHTML = html;
    let bodyText = div.textContent || div.innerText || "";
    bodyText = bodyText.replace(/\s+/g, " ").trim();

    if (
      !validate.page(type as TType).title(title) &&
      !validate.page(type as TType).briefDes(briefDes) &&
      !validate.page(type as TType).targets(targets) &&
      validate.len(bodyText, type === "public" ? 50 : 1, 20000)
    ) {
      return true;
    } else {
      return false;
    }
  };

  const renderContents = () => {
    let requiredLabel: ReactElement | string | undefined;
    if (type === "private") {
      requiredLabel = " *";
    }

    let bodyClassName = "form__group";
    bodyClassName += bodyError && " form__group--error";

    if (type) {
      return (
        <div>
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
            <h3 className="heading-tertiary">Fill Out Your Page Content</h3>
          </div>

          <div className="page-new__contents">
            {/* Title input */}
            <div className="form-group">
              <Input
                label={type === "private" ? "Title *" : "Title"}
                id="title"
                value={title}
                onChange={(value) => {
                  if (value) checkTitleValidation(value);
                  setTitle(value);
                  setSaved(false);
                }}
                placeholder="Choose a title for your page."
                maxLength={50}
                help="this is some text to help you understand the input better."
                error={titleError}
                onBlur={(value) => {
                  checkTitleValidation(value);
                }}
              />
            </div>

            {/* Brief Description input */}
            <div className="form-group">
              <Textarea
                label="Brief Description"
                id="briefDes"
                value={briefDes}
                rows={3}
                onChange={(value) => {
                  if (value) checkBriefDesValidation();
                  setBriefDes(value);
                  setSaved(false);
                }}
                placeholder="Describe briefly what your page is all about."
                help="this is some text to help you understand the input better."
                maxLength={300}
                error={briefDesError}
                onBlur={() => {
                  checkBriefDesValidation();
                }}
              />
            </div>

            {/* Targets input */}
            <div className="form-group">
              <Textarea
                label="Targets"
                value={targets}
                id="targets"
                rows={3}
                onChange={(value) => {
                  if (value) checkTargetsValidation();
                  setTargets(value);
                  setSaved(false);
                }}
                placeholder="Describe briefly who this page is for."
                help="this is some text to help you understand the input better."
                maxLength={300}
                error={targetsError}
                onBlur={() => {
                  checkTargetsValidation();
                }}
              />
            </div>

            {/* Page Body input */}
            <hr className="hr u-margin-top-5" />

            <div className={bodyClassName} id="body">
              <label htmlFor="bodyInput" className="form__label">
                Page Body{requiredLabel}
              </label>
              <TinyMCE
                key={type}
                content={body}
                config={{
                  skin_url: "/tinymce-skin",
                  plugins:
                    "preview link lists advlist codesample image imagetools",
                  toolbar:
                    "formatselect | bold italic underline | link codesample image | alignleft aligncenter alignright | bullist numlist | outdent indent",
                  block_formats: "Paragraph=p; Header=h2;",
                  menubar: false,
                  statusbar: false,
                  image_dimensions: false,
                  imagetools_toolbar:
                    "rotateleft rotateright | flipv fliph | imageoptions",
                  height: 350,
                }}
                onInit={() => {
                  if (localStorage.getItem("theme") === "dark") {
                    // @ts-ignore
                    document.querySelector(
                      "iframe"
                      // @ts-ignore
                    ).contentDocument.children[0].children[1].style.background =
                      "#555";
                    // @ts-ignore
                    document.querySelector(
                      "iframe"
                      // @ts-ignore
                    ).contentDocument.children[0].children[1].style.color =
                      "#fff";
                  }
                }}
                onChange={(e) => {
                  setBody(e.target.getContent());
                  setSaved(false);
                }}
                onBlur={(e) => {}}
              />

              <span className="input-error">
                {bodyError && <i className="fa fa-exclamation-circle"></i>}
                {bodyError}
              </span>
            </div>

            {/* @TODO: fix class names */}
            <div>
              {saved === false && (
                <p className="text-orange">Saving changes...</p>
              )}

              {saved === true && (
                <p className="text-green">Changes saved to the cloud!</p>
              )}
            </div>

            {/* Read more link */}
            <div>
              <p className="small-paragraph">
                See more information on what to provide in each input{" "}
                <a href="#" target="_blank" className="button-text">
                  here.
                </a>
              </p>
            </div>

            {/* Next button */}
            <div className="u-flex-text-center">
              <Button
                onClick={() => {
                  onNextButtonClicked();
                }}
                loading={nextButtonLoading}
                color="blue"
                disabled={!type}
              >
                Next
                <i className="fa fa-arrow-circle-right button__icon-right"></i>
              </Button>
            </div>
          </div>
        </div>
      );
    } else {
      return (
        <div className="center-content">
          <Loading />
        </div>
      );
    }
  };

  return (
    <React.Fragment>
      <ProgressBar width={40} />
      <div className="page-new__note-box">
        <h3>A note about saving:</h3>
        <p>
          We <strong>automatically save</strong> what you write and all the
          other changes you do, your page is saved as a draft until you decide
          to publish it, which you can do in the last step.
        </p>
        <p>
          You can view all of your draft pages{" "}
          <a href="/u/pages/draft" target="_blank" className="button-text">
            here
          </a>
          .
        </p>
      </div>

      <div className="page-new">{renderContents()}</div>
    </React.Fragment>
  );
};

export default PageContents;
