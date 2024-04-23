"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ErrorHandler = void 0;
const site_1 = require("../config/site");
const ErrorHandler = (err, req, res, next) => {
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};
    res.status(err.status || 500);
    res.render('error', { ...site_1.siteConfig });
};
exports.ErrorHandler = ErrorHandler;
