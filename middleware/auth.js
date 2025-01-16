const { JWT_SECRET } = require("../utils/config");

const jwt = require("jsonwebtoken");
const User = require("../models/User");
const auth = {
  checkauth: (req, res, next) => {
    const token = req.cookies.token;
    if (!token) {
      return res.status(401).json({ message: "Unauthorized" });
    }
    //verify the token
    jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
      if (err) {
        return res.status(403).json({ message: "Forbidden" });
      }
      req.userId = user.id;
      next();
    });
  },
  allowRoles: (roles) => {
    return async (req, res, next) => {
      const userId = req.userId;

      const user = await User.findById(userId);
      if (!user) {
        return res.status(403).json({ message: "unauthorised" });

        if (!roles.includes(user.role)) {
          return res.status(403).json({ message: "Forbidden" });
        }
      }
      next();
    };
  },
};

module.exports = auth;
