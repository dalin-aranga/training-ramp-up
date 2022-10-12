"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jwtToken = require('jsonwebtoken');
function AdminMiddleware(req, res, next) {
    let token;
    if (req.headers.authorization &&
        req.headers.authorization.startsWith('bearer')) {
        token = req.headers.authorization.split(' ')[1];
        console.log('Checking ', req.headers.authorization.split(' ')[1]);
        console.log('Checking ', req.headers.authorization.split(' ')[1]);
        if (token == null)
            res.sendStatus(401);
        const decode = jwtToken.verify(token, 'udwd4545');
        if (decode.role == 'Admin') {
            next();
        }
        if (decode.role == 'User' && req.method == 'GET') {
            next();
        }
    }
    else {
        res.sendStatus(401);
    }
}
exports.default = AdminMiddleware;
//# sourceMappingURL=admin.middleware.js.map