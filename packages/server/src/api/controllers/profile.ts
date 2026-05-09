import type {
  CpeakRequest as Request,
  CpeakResponse as Response,
} from "cpeak";
import { DB } from "../../database/index.js";
import { IUser } from "../../database/types.js";
import { ProfileAPI } from "@pagser/common";

// Fetch user's profile data
const fetchUserData = async (req: Request, res: Response) => {
  const userId = req.user.id;

  const user = await DB.find<IUser>(
    `SELECT id, name, username, email, biography, headline,
            links_website, links_facebook, links_youtube, links_twitter, links_linkedin,
            photo_key, photo_url, verified, created_at
     FROM users WHERE id = $1`,
    [userId],
  );

  if (!user) throw { status: 404, message: "User not found" };

  const body: ProfileAPI.GetProfileResponse = {
    user: {
      ...user,
      links: {
        website: user.links_website || "",
        facebook: user.links_facebook || "",
        youtube: user.links_youtube || "",
        twitter: user.links_twitter || "",
        linkedin: user.links_linkedin || "",
      },
    },
  };
  res.json(body);
};

// Update user's profile data
const updateUserData = async (req: Request, res: Response) => {
  const userId = req.user.id;
  const { name, headline, biography, links } = req.body;

  await DB.update(
    `users`,
    {
      name,
      headline,
      biography,
      links_website: links?.website,
      links_facebook: links?.facebook,
      links_youtube: links?.youtube,
      links_twitter: links?.twitter,
      links_linkedin: links?.linkedin,
    },
    `id = $9`,
    [userId],
  );

  const user = await DB.find<IUser>(
    `SELECT id, name, username, email, biography, headline,
            links_website, links_facebook, links_youtube, links_twitter, links_linkedin,
            photo_key, photo_url, verified, created_at
     FROM users WHERE id = $1`,
    [userId],
  );

  if (!user) throw { status: 404, message: "User not found." };

  const body: ProfileAPI.UpdateProfileResponse = {
    user: {
      ...user,
      links: {
        website: user.links_website || "",
        facebook: user.links_facebook || "",
        youtube: user.links_youtube || "",
        twitter: user.links_twitter || "",
        linkedin: user.links_linkedin || "",
      },
    },
  };
  res.json(body);
};

const controller = {
  fetchUserData,
  updateUserData,
};

export default controller;
