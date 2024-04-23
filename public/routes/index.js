"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = require("express");
const admin_1 = require("./admin");
const auth_1 = require("./auth");
const lobby_1 = require("./lobby");
const post_1 = require("./post");
const search_1 = require("./search");
const router = (0, express_1.Router)();
exports.router = router;
const routes = {
    lobby: lobby_1.lobby,
    post: post_1.post,
    search: search_1.search,
    admin: admin_1.admin,
    auth: auth_1.auth,
};
for (const route in routes) {
    routes[route](router);
}
