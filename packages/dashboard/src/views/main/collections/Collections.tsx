import React, { useState, useEffect } from "react";
import {
  Modal,
  Dropdown,
  Input,
  Textarea,
  Button,
  Loading,
} from "@pagser/reusable";
import { alert, request, loadingModal } from "@pagser/common";
import Collection from "../../../partials/CollectionThumbnail";
import { useDispatch } from "react-redux";
import { setSection } from "../side-nav/sideNavSlice";

interface ICollection {
  _id: string;
  name: string;
  photo: any;
  description: string;
  user: any;
  pages: any;
}

const Collections = () => {
  const [loadingCreated, setLoadingCreated] = useState(false); // loading for user created collections
  const [loadingSaved, setLoadingSaved] = useState(false); // loading for saved collections

  const [newCollectionMdl, setNewCollectionMdl] = useState(false);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [savedCollections, setSavedCollections] = useState<ICollection[]>([]);
  const [createdCollections, setCreatedCollections] = useState<ICollection[]>(
    []
  );
  const [sortByCC, setSortByCC] = useState("date-created"); // created collections
  const [sortBySC, setSortBySC] = useState("date-added"); // saved collections

  const dispatch = useDispatch<any>();

  useEffect(() => {
    document.title = "Collections | Pagser";
    fetchCollections("created-saved");
  }, []);

  // Creates a new collection
  const createCollection = async (e) => {
    e.preventDefault();
    loadingModal("Loading...");
    try {
      await request.post(
        `/collection`,
        { name: name, description: description },
        {
          auth: true,
        }
      );
      loadingModal();
      alert("Your collection created successfully.", "success");

      fetchCollections("created", "date-created");
    } catch (e) {}
    setNewCollectionMdl(false);
    setName("");
    setDescription("");
  };

  // Fetches the list of collection from the server, either those that the user has created or saved
  const fetchCollections = async (
    kind: "created" | "saved" | "created-saved",
    sortBy?: string
  ) => {
    switch (kind) {
      case "created-saved":
        setLoadingCreated(true);
        setLoadingSaved(true);
        break;
      case "saved":
        setLoadingSaved(true);
        break;
      case "created":
        setLoadingCreated(true);
        break;
    }

    try {
      const response = (await request.get(
        `/collections/${kind}?sortBy=${sortBy}`,
        {
          auth: true,
        }
      )) as any;

      switch (kind) {
        case "created-saved":
          setSavedCollections(response.savedCollections);
          setCreatedCollections(response.createdCollections);
          break;
        case "saved":
          setSavedCollections(response.savedCollections);

          break;
        case "created":
          setCreatedCollections(response.createdCollections);
          break;
      }
    } catch (e) {}

    setLoadingCreated(false);
    setLoadingSaved(false);
  };

  const renderCollections = (
    kind: "savedCollections" | "createdCollections"
  ) => {
    let list: ICollection[] = [];
    if (kind === "savedCollections") {
      list = savedCollections;
    } else {
      list = createdCollections;
    }

    if (list.length === 0)
      return <div className="a-14">Collection list is empty.</div>;

    return list.map((cl) => {
      return (
        <div
          key={cl._id}
          className="col-lg-1-of-5 col-md-1-of-5 col-sm-1-of-3 col-xs-1-of-2 col-xxs-1-of-1"
        >
          <Collection
            id={cl._id}
            name={cl.name}
            img={cl.photo.secure_url}
            desc={cl.description}
            pageNum={cl.pages.length}
            author={cl.user.name}
            onClick={() => {
              dispatch(setSection(""));
            }}
          />
        </div>
      );
    });
  };

  return (
    <React.Fragment>
      <Modal
        header="Create a New Collection"
        open={newCollectionMdl}
        onClose={() => {
          setNewCollectionMdl(false);
        }}
      >
        <form className="form" onSubmit={createCollection}>
          <div className="form-group">
            <Input
              label="Name"
              type="text"
              placeholder="The name of your collection."
              onChange={(value) => {
                setName(value);
              }}
              value={name}
              required
            />
          </div>
          <div className="form-group">
            <Textarea
              label="Description (optional)"
              placeholder="Describe what this collection is for, contains, or any other information you deem useful."
              value={description}
              rows={4}
              onChange={(value) => {
                setDescription(value);
              }}
            />
          </div>
          <div className="u-flex-text-right">
            <Button color="blue" type="submit">
              Create
            </Button>
          </div>
        </form>
      </Modal>
      <div className="row">
        <div className="header-nav margin-bottom-1">
          <h3 className="heading-tertiary">Collections You've Created:</h3>
          <div className="header-nav__actions">
            {createdCollections.length > 1 && (
              <Dropdown
                num="1"
                select={sortByCC}
                onChange={(name) => {
                  fetchCollections("created", name);
                }}
              >
                <div
                  data-role-name="btn-name"
                  data-icon-class="fa fa-sort-amount-asc"
                >
                  Sort By
                </div>
                <div data-role-name="item" data-name="date-created">
                  Date Created
                </div>
                <div data-role-name="item" data-name="a-z">
                  A - Z
                </div>
              </Dropdown>
            )}
            <button
              className="btn-text"
              onClick={() => {
                setNewCollectionMdl(true);
              }}
            >
              Create a new collection{" "}
              <i className="fa fa-plus" aria-hidden="true" />
            </button>
          </div>
        </div>
        {loadingCreated && (
          <div className="center-content margin-top-1">
            <Loading />
          </div>
        )}
        {!loadingCreated && (
          <div className="row">{renderCollections("createdCollections")}</div>
        )}
      </div>
      <div className="row">
        <div className="header-nav margin-bottom-1">
          <h3 className="heading-tertiary">Collections You've Saved:</h3>
          <div className="header-nav__actions">
            {/* {savedCollections.length > 1 && (
                <Dropdown
                  num="2"
                  select={sortBySC}
                  onChange={(name) => {
                    this.fetchCollections("saved", name);
                  }}
                >
                  <div
                    data-role-name="btn-name"
                    data-icon-class="fa fa-sort-amount-asc"
                  >
                    Sort By
                  </div>
                  <div data-role-name="item" data-name="date-added">
                    Date Added
                  </div>
                  <div data-role-name="item" data-name="a-z">
                    A - Z
                  </div>
                  <div data-role-name="item" data-name="date-created">
                    Date Created
                  </div>
                </Dropdown>
              )} */}
          </div>
        </div>
        {loadingSaved && (
          <div className="center-content margin-top-1">
            <Loading />
          </div>
        )}
        {!loadingSaved && (
          <div className="row">{renderCollections("savedCollections")}</div>
        )}
      </div>
    </React.Fragment>
  );
};

export default Collections;
