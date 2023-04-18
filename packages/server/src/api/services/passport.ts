import passport from "passport";
import { Strategy as LocalStrategy } from "passport-local";
import bcrypt from "bcrypt";
import { Strategy as JwtStrategy, ExtractJwt } from "passport-jwt";
import keys from "../../config/keys";
import { DB } from "../../database";
import { IUser } from "../../database/types";

// Create local strategy
const localLogin = new LocalStrategy(
  { usernameField: "email" },
  async (email, password, done) => {
    // Verify this email and password, call done with the user
    // if it is the correct email and password
    // otherwise, call done with false
    try {
      const user = await DB.find<IUser>(
        `SELECT id, username, password FROM users WHERE email = '${email}'`
      );

      if (!user) return done(null, false);

      const isMatch = await bcrypt.compare(password, user.password);

      if (isMatch) {
        return done(null, { id: user.id, username: user.username });
      } else {
        return done(null, false);
      }
    } catch (e) {
      return done(null, false);
    }
  }
);

// Create JWT strategy
const jwtLogin = new JwtStrategy(
  {
    jwtFromRequest: ExtractJwt.fromHeader("authorization"),
    secretOrKey: keys.jwtSecret,
  },
  async (payload, done) => {
    // See if the user ID in the payload exists in our database
    // If it does, call 'done' with that user object
    // otherwise, call done without a user object
    try {
      const user = await DB.find<IUser>(
        `SELECT id, username FROM users WHERE id = '${payload.sub}'`
      );

      if (!user) return done(null, false);

      return done(null, { id: user.id, username: user.username });
    } catch (e) {
      done(null, false);
    }
  }
);

// Tell passport to use these strategies
passport.use(jwtLogin);
passport.use(localLogin);

export const requireAuth = passport.authenticate("jwt", { session: false });
export const logTheUserIn = passport.authenticate("local", { session: false });
