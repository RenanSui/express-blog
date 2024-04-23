"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.admin = void 0;
const site_1 = require("../config/site");
const admin = (router) => {
    router.get('/admin', async (req, res) => {
        res.render('admin', { ...site_1.siteConfig });
    });
};
exports.admin = admin;
