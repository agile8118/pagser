import React, { useState, useEffect } from "react";
import { util, request, redirectToLogin, PagesAPI } from "@pagser/common";
import { useNavigate } from "react-router-dom";
import { Loading } from "@pagser/reusable";
import ProgressBar from "./ProgressBar";

import FinalStepPublic from "./FinalStepPublic";
import FinalStepPrivate from "./FinalStepPrivate";

const FinalStep = () => {
  const [type, setType] = useState<string | null>(null);
  const [commentsDisabled, setCommentsDisabled] = useState<boolean | null>(null);
  const [ratingsDisabled, setRatingsDisabled] = useState<boolean | null>(null);
  const [anonymously, setAnonymously] = useState<boolean | null>(null);
  const [linksDisabled, setLinksDisabled] = useState<boolean | null>(null);
  const [tags, setTags] = useState("");
  const [username, setUsername] = useState<string | null>(null);
  const [url, setUrl] = useState<string | null>(null);
  const [usedUrls, setUsedUrls] = useState<string[]>([]);

  const navigate = useNavigate();

  useEffect(() => {
    (async () => {
      try {
        const response = await request.get<PagesAPI.FetchDraftFinalStepResponse>(
          `/new-page/final-step/${util.getParameterByName(
            "id",
            window.location.href,
          )}`,
          {
            auth: true,
          },
        );

        setType(response.page.type);
        setCommentsDisabled(response.page.comments_disabled);
        setRatingsDisabled(response.page.ratings_disabled);
        setAnonymously(response.page.anonymously);
        setLinksDisabled(response.page.links_disabled);

        // We are getting the tags in a format of an array, but in order for our
        // tag input to work, we need to convert it into a string. So something like
        // [{id: 1, name: 'tag1'}, {id: 2, name: 'tag2'}] will be converted to 'tag1,tag2'
        let tagsStr = "";
        response.tags.map((t) => {
          tagsStr += `${t.name},`;
        });
        // Remove the last comma
        if (tagsStr.length) tagsStr = tagsStr.slice(0, -1);

        setTags(tagsStr);
        setUsername(response.page.user_username);
        setUrl(response.page.url || null);
        setUsedUrls(response.urls.map((u) => u.url ?? "").filter(Boolean) as string[]);
      } catch (error: any) {
        if (error.status === 401) {
          redirectToLogin("Please log in to create a new page.");
        } else {
          navigate(`/new-page/initial-step`);
        }
      }
    })();
  }, []);

  let content;
  if (!type) {
    content = (
      <div className="center-content">
        <Loading />
      </div>
    );
  } else if (type === "public") {
    content = (
      <FinalStepPublic
        commentsDisabled={commentsDisabled || false}
        ratingsDisabled={ratingsDisabled || false}
        linksDisabled={linksDisabled || false}
        anonymously={anonymously || false}
        tags={tags}
      />
    );
  } else if (type === "private") {
    content = (
      <FinalStepPrivate
        username={username || ""}
        commentsDisabled={commentsDisabled || false}
        ratingsDisabled={ratingsDisabled || false}
        anonymously={anonymously || false}
        url={url || ""}
        usedUrls={usedUrls}
      />
    );
  }

  return (
    <div id="new-page-container">
      <ProgressBar width={100} />
      <div className="page-new">{content}</div>
    </div>
  );
};

export default FinalStep;
