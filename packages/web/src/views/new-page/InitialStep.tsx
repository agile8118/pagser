import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { util, request, PagesAPI } from "@pagser/common";
import { Loading, Button } from "@pagser/reusable";
import ProgressBar from "./ProgressBar";

export type TType = "public" | "private";

const InitialStep = () => {
  const [type, setType] = useState<TType | undefined>(undefined);
  const [loading, setLoading] = useState(false);
  const [nextButtonLoading, setNextButtonLoading] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    (async () => {
      setLoading(true);
      const pageId = util.getParameterByName("id", window.location.href);
      try {
        if (pageId) {
          const response =
            await request.get<PagesAPI.FetchDraftInitialStepResponse>(
              `/new-page/initial-step/${pageId}`,
              {
                auth: true,
              },
            );
          setType(response.type);
        }
        setLoading(false);
      } catch (e: any) {
        if (e?.status === 401) {
          window.location.href = "/login?redirected=new-page";
        }
      }
    })();
  }, []);

  const onRadioChange = (selectedType: TType) => {
    setType(selectedType);
  };

  const onNextButtonClicked = async () => {
    setNextButtonLoading(true);
    const pageId = util.getParameterByName("id", window.location.href);

    try {
      // Page is already there, so just update it
      let response;
      if (pageId) {
        response = await request.patch<PagesAPI.UpdateDraftPageResponse>(
          `/new-page/initial-step/${pageId}`,
          { page: { type } },
          { auth: true },
        );
      } else {
        // Create a new page
        response = await request.post<PagesAPI.NewDraftPageResponse>(
          `/new-page`,
          { page: { type } },
          { auth: true },
        );
      }

      navigate(`/new-page/page-contents?id=${response.id}`);
    } catch (e) {}

    setNextButtonLoading(false);
  };

  const renderContent = () => {
    if (loading)
      return (
        <div className="center-content">
          <Loading />
        </div>
      );

    return (
      <div>
        <div className="center-content">
          <h3 className="heading-tertiary">Choose Your Page Type</h3>
        </div>

        <div className="page-new__types">
          <label className="control control--radio">
            Public
            <input
              type="radio"
              value="public"
              name="radio"
              onClick={() => {
                onRadioChange("public");
              }}
              defaultChecked={type === "public"}
            />
            <div className="control__indicator" />
          </label>
          <div className="page-new__types__details">
            Choose this if you want your page visible to everyone. Public pages
            can be found by search engines if you provide quality content. They
            will appear on your public profile unless you create them
            anonymously.
          </div>
          <label className="control control--radio font-weight-400">
            Private
            <input
              type="radio"
              value="private"
              name="radio"
              defaultChecked={type === "private"}
              onClick={() => {
                onRadioChange("private");
              }}
            />
            <div className="control__indicator" />
          </label>
          <div className="page-new__types__details">
            Choose this if you want your page visible only to specific people,
            such as friends, colleagues, or students. Private pages won't appear
            on your public profile.{" "}
            <strong>
              The only way for others to find your page is if they have your
              page's URL.
            </strong>
          </div>
        </div>
        <div className="u-flex-text-center">
          <Button
            testId="initial-step-next"
            onClick={() => {
              onNextButtonClicked();
            }}
            color="blue"
            disabled={!type}
            loading={nextButtonLoading}
          >
            Next
            <i className="fa fa-arrow-circle-right button__icon-right"></i>
          </Button>
        </div>
      </div>
    );
  };

  return (
    <div>
      <ProgressBar width={20} />
      <div className="page-new">{renderContent()}</div>
    </div>
  );
};

export default InitialStep;
