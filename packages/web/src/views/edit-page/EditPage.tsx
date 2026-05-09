import React, { useState, useEffect } from "react";
import { util, request, loadingModal, alert, tagsInput, validate, PagesAPI } from "@pagser/common";
import { Loading, Button, Input, Textarea } from "@pagser/reusable";
import RichTextEditor from "../../partials/RichTextEditor";

type TPageType = "public" | "private";

const EditPage = () => {
  const [page, setPage] = useState<PagesAPI.EditPageData | null>(null);
  const [usedUrls, setUsedUrls] = useState<string[]>([]);
  const [loadError, setLoadError] = useState(false);

  // Form fields
  const [title, setTitle] = useState("");
  const [titleError, setTitleError] = useState("");

  const [briefDes, setBriefDes] = useState("");
  const [briefDesError, setBriefDesError] = useState("");

  const [targets, setTargets] = useState("");
  const [targetsError, setTargetsError] = useState("");

  const [body, setBody] = useState("");
  const [bodyError, setBodyError] = useState("");

  const [anonymously, setAnonymously] = useState(false);
  const [commentsDisabled, setCommentsDisabled] = useState(false);
  const [ratingsDisabled, setRatingsDisabled] = useState(false);
  const [linksDisabled, setLinksDisabled] = useState(false);

  const [tags, setTags] = useState("");
  const [tagsError, setTagsError] = useState("");

  const [url, setUrl] = useState("");
  const [urlError, setUrlError] = useState("");

  const [submitLoading, setSubmitLoading] = useState(false);

  const pageType = util.getParameterByName("t", window.location.href) as TPageType | null;
  const pathParts = window.location.pathname.split("/");
  // Private: /:username/:url/edit  → pathParts = ["", username, url, "edit"]
  // Public:  /public-pages/:url/edit → pathParts = ["", "public-pages", url, "edit"]
  const username = pathParts[1];
  const urlSlug = pathParts[2];

  useEffect(() => {
    (async () => {
      try {
        let apiUrl: string;
        if (pageType === "public") {
          apiUrl = `/public-pages/${urlSlug}/edit`;
        } else {
          apiUrl = `/${username}/${urlSlug}/edit`;
        }

        const response = await request.get<PagesAPI.FetchEditPageResponse>(apiUrl, { auth: true });
        const p = response.page;

        setPage(p);
        setTitle(p.title || "");
        setBriefDes(p.brief_description || "");
        setTargets(p.targets || "");
        setBody(p.body || "");
        setUrl(p.url || "");
        setAnonymously(p.anonymously || false);
        setCommentsDisabled(p.comments_disabled || false);
        setRatingsDisabled(p.ratings_disabled || false);
        setLinksDisabled(p.links_disabled || false);

        if (response.usedUrls) {
          setUsedUrls(response.usedUrls);
        }

        // Set tags as comma-separated string for the tags input
        if (p.type === "public" && Array.isArray(p.tags)) {
          setTags(p.tags.join(","));
        }
      } catch (e: any) {
        if (e.status === 401) {
          window.location.href = `/login`;
        } else {
          setLoadError(true);
        }
      }
    })();
  }, []);

  // Initialize tags input after page loads for public pages
  useEffect(() => {
    if (page?.type === "public") {
      if (!document.querySelector("div.tags-input")) {
        tagsInput(document.querySelector('input[type="tags"]'));
      }

      const tagsEl = document.querySelector("#tags") as HTMLInputElement;
      if (tagsEl) {
        tagsEl.addEventListener("change", function () {
          setTags(this.value);
        });
      }
    }
  }, [page]);

  const getBodyText = (html: string) => {
    const div = document.createElement("div");
    div.innerHTML = html;
    return (div.textContent || div.innerText || "").replace(/\s+/g, " ").trim();
  };

  const checkTitleValidation = (value?: string) => {
    if (!page) return false;
    const errMsg = validate.page(page.type).title(value ?? title);
    if (errMsg) { setTitleError(errMsg); return false; }
    setTitleError("");
    return true;
  };

  const checkBriefDesValidation = () => {
    if (!page) return false;
    const errMsg = validate.page(page.type).briefDes(briefDes);
    if (errMsg) { setBriefDesError(errMsg); return false; }
    setBriefDesError("");
    return true;
  };

  const checkTargetsValidation = () => {
    if (!page) return false;
    const errMsg = validate.page(page.type).targets(targets);
    if (errMsg) { setTargetsError(errMsg); return false; }
    setTargetsError("");
    return true;
  };

  const checkBodyValidation = () => {
    if (!page) return false;
    const bodyText = getBodyText(body);
    const minLen = page.type === "public" ? 50 : 1;

    if (bodyText.length < minLen) {
      setBodyError(page.type === "public" ? `Body should be more than ${minLen} characters.` : "Body cannot be blank.");
      return false;
    }
    if (bodyText.length > 200000) {
      setBodyError("Body should be less than 200000 characters.");
      return false;
    }
    setBodyError("");
    return true;
  };

  const checkTagsValidation = () => {
    const errMsg = validate.page("public").tags(tags.split(",").filter(Boolean));
    if (errMsg) { setTagsError(errMsg); return false; }
    setTagsError("");
    return true;
  };

  const checkUrlValidation = () => {
    const errMsg = validate.page("private").url(url, usedUrls);
    if (errMsg) { setUrlError(errMsg); return false; }
    setUrlError("");
    return true;
  };

  const checkIfAllOk = () => {
    if (!page) return false;

    const bodyText = getBodyText(body);
    const minBodyLen = page.type === "public" ? 50 : 1;

    const titleOk = !validate.page(page.type).title(title);
    const briefDesOk = !validate.page(page.type).briefDes(briefDes);
    const targetsOk = !validate.page(page.type).targets(targets);
    const bodyOk = bodyText.length >= minBodyLen && bodyText.length <= 200000;

    if (page.type === "public") {
      const tagsOk = !validate.page("public").tags(tags.split(",").filter(Boolean));
      return titleOk && briefDesOk && targetsOk && bodyOk && tagsOk;
    }

    if (page.type === "private") {
      const urlOk = !validate.page("private").url(url, usedUrls);
      return titleOk && briefDesOk && targetsOk && bodyOk && urlOk;
    }

    return false;
  };

  const onSubmit = async () => {
    if (!page) return;

    if (!checkIfAllOk()) {
      checkTitleValidation();
      checkBriefDesValidation();
      checkTargetsValidation();
      checkBodyValidation();
      if (page.type === "public") checkTagsValidation();
      if (page.type === "private") checkUrlValidation();
      return;
    }

    setSubmitLoading(true);
    loadingModal("Saving...");

    try {
      const response = await request.put<PagesAPI.UpdatePageResponse>(
        `/pages/${page.id}`,
        {
          page: {
            type: page.type,
            title,
            briefDes,
            targets,
            body,
            anonymously,
            comments_disabled: commentsDisabled,
            ratings_disabled: ratingsDisabled,
            links_disabled: linksDisabled,
            url: page.type === "private" ? url : undefined,
            tags: page.type === "public" ? tags.split(",").filter(Boolean) : undefined,
          },
        },
        { auth: true }
      );

      loadingModal();

      if (response.type === "public") {
        window.location.href = `/public-pages/${response.url}`;
      } else {
        window.location.href = `/${response.username}/${response.url}`;
      }
    } catch (e: any) {
      loadingModal();
      alert("An error occurred while saving. Please try again.", "error");
    } finally {
      setSubmitLoading(false);
    }
  };

  const onBackClicked = () => {
    if (!page) return;
    if (page.type === "public") {
      window.location.href = `/public-pages/${page.url}`;
    } else {
      window.location.href = `/${username}/${page.url}`;
    }
  };

  if (loadError) {
    return (
      <div className="page-new">
        <div className="center-content">
          <p>Failed to load page. Please try again.</p>
          <Button onClick={() => window.location.reload()} color="blue">Retry</Button>
        </div>
      </div>
    );
  }

  if (!page) {
    return (
      <div className="page-new">
        <div className="center-content">
          <Loading />
        </div>
      </div>
    );
  }

  const bodyClassName = "form__group" + (bodyError ? " form__group--error" : "");

  return (
    <div className="page-new">
      {/* Back button */}
      <button className="button-text button-text--big a-11" onClick={onBackClicked}>
        <i className="fa fa-arrow-left" aria-hidden="true" /> Back
      </button>

      <div className="center-content">
        <h3 className="heading-tertiary">Update your page</h3>
      </div>

      <div className="page-new__contents">
        {/* Title */}
        <div className="form-group">
          <Input
            label={page.type === "private" ? "Title *" : "Title"}
            id="title"
            value={title}
            onChange={(value) => {
              setTitle(value);
              if (value) checkTitleValidation(value);
            }}
            onBlur={() => checkTitleValidation()}
            placeholder="Choose a title for your page."
            maxLength={50}
            error={titleError}
          />
        </div>

        {/* Brief Description */}
        <div className="form-group">
          <Textarea
            label="Brief Description"
            id="briefDes"
            value={briefDes}
            rows={3}
            onChange={(value) => {
              setBriefDes(value);
              if (value) checkBriefDesValidation();
            }}
            onBlur={() => checkBriefDesValidation()}
            placeholder="Describe briefly what your page is all about."
            maxLength={300}
            error={briefDesError}
          />
        </div>

        {/* Targets */}
        <div className="form-group">
          <Textarea
            label="Targets"
            id="targets"
            value={targets}
            rows={3}
            onChange={(value) => {
              setTargets(value);
              if (value) checkTargetsValidation();
            }}
            onBlur={() => checkTargetsValidation()}
            placeholder="Describe briefly who this page is for."
            maxLength={300}
            error={targetsError}
          />
        </div>

        {/* Page Body */}
        <hr className="hr u-margin-top-5" />
        <div className={bodyClassName} id="body">
          <label htmlFor="bodyInput" className="form__label">
            Page Body{page.type === "private" && " *"}
          </label>
          <RichTextEditor
            content={body}
            pageId={page.id?.toString()}
            onChange={(html) => setBody(html)}
            onBlur={checkBodyValidation}
          />
          {bodyError && (
            <span className="input-error">
              <i className="fa fa-exclamation-circle" /> {bodyError}
            </span>
          )}
        </div>

        {/* Configurations */}
        <div className="page-new__final-step">
          <div className="new-page-final-step__switches">
            <div className="new-page-final-step__switch">
              <label>Disable Comments</label>
              <button className="btn-i btn-i-blue" onClick={() => setCommentsDisabled(!commentsDisabled)}>
                <i className={commentsDisabled ? "fa fa-2x fa-toggle-on" : "fa fa-2x fa-toggle-off"} aria-hidden="true" />
              </button>
            </div>

            <div className="new-page-final-step__switch">
              <label>Disable Rating</label>
              <button className="btn-i btn-i-blue" onClick={() => setRatingsDisabled(!ratingsDisabled)}>
                <i className={ratingsDisabled ? "fa fa-2x fa-toggle-on" : "fa fa-2x fa-toggle-off"} aria-hidden="true" />
              </button>
            </div>

            {page.type === "public" && (
              <div className="new-page-final-step__switch">
                <label>Do Not Display Related Pages and Tags</label>
                <button className="btn-i btn-i-blue" onClick={() => setLinksDisabled(!linksDisabled)}>
                  <i className={linksDisabled ? "fa fa-2x fa-toggle-on" : "fa fa-2x fa-toggle-off"} aria-hidden="true" />
                </button>
              </div>
            )}

            <div className="new-page-final-step__switch">
              <label>Create This Page Anonymously</label>
              <button className="btn-i btn-i-blue" onClick={() => setAnonymously(!anonymously)}>
                <i className={anonymously ? "fa fa-2x fa-toggle-on" : "fa fa-2x fa-toggle-off"} aria-hidden="true" />
              </button>
            </div>
          </div>

          {/* Tags — public pages only */}
          {page.type === "public" && (
            <div className="form__group">
              <label className="form__label" htmlFor="tags">
                Tags <span>(Minimum 5)</span>
              </label>
              <input
                type="tags"
                className="tags-input"
                id="tags"
                defaultValue={tags}
              />
              {tagsError && (
                <span className="input-error">
                  <i className="fa fa-exclamation-circle" /> {tagsError}
                </span>
              )}
            </div>
          )}

          {/* URL — private pages only */}
          {page.type === "private" && (
            <div className="form-group">
              <Input
                id="url"
                label="URL"
                placeholder="Choose a URL for your page."
                type="text"
                error={urlError}
                value={url}
                onBlur={() => checkUrlValidation()}
                onChange={(value) => {
                  setUrl(util.convertToUrl(value));
                }}
              />
              <p className="url__display">
                pagser.com/{username}/{url}
              </p>
            </div>
          )}
        </div>

        <div>
          <p className="small-paragraph">
            See more information on what to provide in each input{" "}
            <a href="#" target="_blank" className="button-text">here.</a>
          </p>
        </div>

        <div className="u-flex-text-center">
          <Button onClick={onSubmit} loading={submitLoading} color="blue">
            Update
          </Button>
        </div>
      </div>
    </div>
  );
};

export default EditPage;
