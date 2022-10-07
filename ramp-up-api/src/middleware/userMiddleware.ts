const jwt = require('jsonwebtoken');

require('dotenv').config();

module.exports = function (req, res, next) {
  let token;

  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith('bearer')
  ) {
    token = req.headers.authorization.split(' ')[1];
    if (token == null) res.sendStatus(401);

    jwt.verify(token, process.env.TOKEN_KEY);
    next();
  } else {
    res.sendStatus(401);
  }
};
