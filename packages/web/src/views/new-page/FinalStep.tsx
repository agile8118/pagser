import React, { useState, useEffect } from "react";
import { util, request } from "@pagser/common";
import { useNavigate } from "react-router-dom";
import { Loading } from "@pagser/reusable";
import ProgressBar from "./ProgressBar";

import FinalStepPublic from "./FinalStepPublic";
import FinalStepPrivate from "./FinalStepPrivate";

const FinalStep = () => {
  const [type, setType] = useState<string | null>(null);
  const [comments, setComments] = useState<boolean | null>(null);
  const [rating, setRating] = useState<boolean | null>(null);
  const [anonymously, setAnonymously] = useState<boolean | null>(null);
  const [links, setLinks] = useState<boolean | null>(null);
  const [tags, setTags] = useState("");
  const [username, setUsername] = useState<string | null>(null);
  const [url, setUrl] = useState<string | null>(null);
  const [usedUrls, setUsedUrls] = useState<string[]>([]);

  const navigate = useNavigate();

  useEffect(() => {
    (async () => {
      try {
        const response = (await request.get(
          `/new-page/final-step/${util.getParameterByName(
            "id",
            window.location.href
          )}`,
          {
            auth: true,
          }
        )) as any;

        setType(response.page.type);
        setComments(response.page.comments_disabled);
        setRating(response.page.ratings_disabled);
        setAnonymously(response.page.anonymously);
        setLinks(response.page.links_disabled);

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
        setUsedUrls(response.urls);
      } catch (error: any) {
        if (error.status === 401) {
          window.location.href = "/login?redirected=new-page";
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
        comments={comments || false}
        rating={rating || false}
        links={links || false}
        anonymously={anonymously || false}
        tags={tags}
      />
    );
  } else if (type === "private") {
    content = (
      <FinalStepPrivate
        username={username || ""}
        comments={comments || false}
        rating={rating || false}
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
