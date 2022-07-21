import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { util, request } from "@pagser/common";
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
      const pageId =
        util.getParameterByName("id", window.location.href) || "id";
      try {
        const response = (await request.get(
          `/new-page/initial-step/${pageId}`,
          {
            auth: true,
          }
        )) as any;
        setType(response.type);
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
      const response = (await request.patch(
        `/new-page/initial-step/${pageId}`,
        { page: { type } },
        { auth: true }
      )) as any;
      navigate(`/new-page/page-contents?id=${response.id}`);
    } catch (e) {}

    setNextButtonLoading(false);
  };

  const renderContent = () => {
    if (type === "public" || type === "private" || type === null) {
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
              Choose this one if you want your page to be visible to everyone,
              your page can be founded by search engines if you supply it with
              good content. Public pages will be shown in your public profile
              unless you create it anonymously.
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
              Choose this if you want your page to be visible by only a specific
              kind of persons, such as your friends, workmates, students ,etc.
              You can restrict to only certain people to be able to view it.
              Your private pages will not been shown on your public profile.{" "}
              <strong>
                The only way for others to find the page is by the URL that you
                will give them.
              </strong>
            </div>
          </div>
          <div className="u-flex-text-center">
            <Button
              onClick={() => {
                onNextButtonClicked();
              }}
              color="blue"
              disabled={!type}
              loading={nextButtonLoading}
            >
              Next
            </Button>
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
    <div>
      <ProgressBar width={20} />
      <div className="page-new">{renderContent()}</div>
    </div>
  );
};

export default InitialStep;
