import React, { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { alert, request } from "@pagser/common";
import Modal from "./Modal";
import Loading from "../Loading";
import Input from "../forms/Input";
import Button from "../forms/Button";

interface IProps {
  pageId: string;
  open: boolean;
  onClose: () => void;
}

interface ICollection {
  selected: boolean;
  id: string;
  name: string;
}

const CollectionModal = (props: IProps) => {
  const [name, setName] = useState("");
  const [status, setStatus] = useState<"normal" | "loading" | "creating">(
    "normal"
  ); // We'll show different elements depending on the value
  const [collections, setCollections] = useState<ICollection[]>([]);

  // Check to see if the modal is opened or not, if so fetch the collections
  useEffect(() => {
    if (props.open) {
      fetchCollections();
    }
  }, [props.open]);

  // Fetch all the collections user has created
  const fetchCollections = async () => {
    setStatus("loading");
    const response = (await request.get(
      `/collections/created/${props.pageId}`,
      {
        auth: true,
      }
    )) as any;

    setStatus("normal");
    setCollections(response.collections);
  };

  // Send a request to user to create a new collection
  const createCollection = async () => {
    setStatus("loading");

    const response = (await request.post(
      `/collection`,
      { name },
      {
        auth: true,
      }
    )) as any;

    // Add the page in the newly created collection
    togglePageInCL(response.collection._id);
  };

  // Send the request to server to either remove the page from selected collection
  // or add it to that collection
  const togglePageInCL = async (clId: string) => {
    setStatus("loading");
    const response = (await request.post(
      `/collection/add-remove/${clId}/${props.pageId}`,
      null,
      {
        auth: true,
      }
    )) as any;

    // Show a right message to user based on server response
    if (response.selected)
      alert(
        `Page successfully added to ${response.clName} collection.`,
        "success"
      );
    else
      alert(
        `Page successfully removed from ${response.clName} collection.`,
        "success"
      );

    // Fetch collections again
    fetchCollections();
  };

  return (
    <Modal
      header="Page in Collections:"
      type="small"
      open={props.open}
      onClose={() => {
        props.onClose();
        setName("");
        setStatus("normal");
        setCollections([]);
      }}
    >
      {!collections ||
        (status === "loading" && (
          <div className="center-content margin-top-5px">
            <Loading />
          </div>
        ))}
      {collections && status === "normal" && (
        <div className="margin-bottom-08">
          <Button
            color="blue"
            outlined={true}
            block={true}
            onClick={() => {
              setStatus("creating");
            }}
            type="button"
          >
            Create a new collection
            <i
              className="fa fa-plus-circle button__icon-right"
              aria-hidden="true"
            />
          </Button>
        </div>
      )}

      {status === "creating" && (
        <div className="right-content">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              createCollection();
            }}
          >
            <div className="margin-bottom-1">
              <Input
                type="text"
                lined={true}
                autoComplete="off"
                autoFocus
                placeholder="Collection name"
                required
                value={name}
                onChange={(value) => setName(value)}
              />
            </div>

            <div className="a-19">
              <Button
                color="default"
                size="small"
                onClick={() => {
                  setName("");
                  setStatus("normal");
                }}
                type="button"
              >
                Cancel
              </Button>
              <Button color="blue" outlined={true} size="small" type="submit">
                Create and add
              </Button>
            </div>
          </form>
        </div>
      )}

      {collections &&
        status === "normal" &&
        collections.map((cl) => {
          return (
            <a
              href="javascript:void(0)"
              className={`selectable-item ${
                cl.selected ? "selectable-item--selected" : ""
              }`}
              onClick={() => togglePageInCL(cl.id)}
              key={cl.id}
            >
              {cl.name} <span />
            </a>
          );
        })}

      {!collections.length && status === "normal" && (
        <div className="u-text-center margin-top-1-5">
          <em>Currently you don't have any collections.</em>

          <em>Create one by clicking on the button above.</em>
        </div>
      )}
    </Modal>
  );
};

export default CollectionModal;
