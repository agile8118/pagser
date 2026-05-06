import type { RouteMiddleware } from "cpeak";
import { DB } from "../../database/index.js";
import type { IUser } from "../../database/types.js";

export const logTheUserIn: RouteMiddleware = async (req, res, next) => {
  const { email, password } = req.body ?? {};
  if (!email || !password) throw { status: 401, message: "Unauthorized." };

  const user = await DB.find<IUser>(
    "SELECT id, username, password FROM users WHERE email = $1",
    [email],
  );
  if (!user) throw { status: 401, message: "Unauthorized." };

  const token = await req.login({ password, hashedPassword: user.password, userId: String(user.id) });
  if (!token) throw { status: 401, message: "Unauthorized." };

  req.user = { id: String(user.id), username: user.username };
  req._token = token;
  next();
};

export const requireAuth: RouteMiddleware = async (req, res, next) => {
  const token = req.headers["authorization"] as string | undefined;
  if (!token) throw { status: 401, message: "Unauthorized." };

  const result = await req.verifyToken(token);
  if (!result) throw { status: 401, message: "Unauthorized." };

  req.user = { id: result.userId };
  next();
};

export const optionalAuth: RouteMiddleware = async (req, _res, next) => {
  const token = req.headers["authorization"] as string | undefined;
  if (token) {
    const result = await req.verifyToken(token);
    if (result) req.user = { id: result.userId };
  }
  next();
};
