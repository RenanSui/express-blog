"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.search = void 0;
const site_1 = require("../config/site");
const models_1 = require("../models");
const http_errors_1 = __importDefault(require("http-errors"));
const search = (router) => {
    router.post('/search', async (req, res, next) => {
        try {
            const searchInput = req.body.searchInput.replace(/[^a-zA-Z0-9]/g, '');
            const posts = searchInput.length === 0
                ? []
                : await models_1.PostModel.find({
                    $or: [
                        { title: { $regex: new RegExp(searchInput, 'i') } },
                        { body: { $regex: new RegExp(searchInput, 'i') } },
                    ],
                });
            res.render('search', { ...site_1.siteConfig, searchInput, posts });
        }
        catch (error) {
            next((0, http_errors_1.default)(404));
        }
    });
};
exports.search = search;
