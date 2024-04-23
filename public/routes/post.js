"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.post = void 0;
const site_1 = require("../config/site");
const post_1 = require("../models/post");
const http_errors_1 = __importDefault(require("http-errors"));
const post = (router) => {
    router.get('/post/:id', async (req, res, next) => {
        try {
            const id = req.params.id;
            if (!id)
                throw new Error();
            const post = await post_1.PostModel.findById({ _id: id });
            if (!post)
                throw new Error();
            const newSiteConfig = {
                ...site_1.siteConfig,
                title: `${post.title} - ${site_1.siteConfig.title}`,
            };
            res.render('post', { ...newSiteConfig, post });
        }
        catch (error) {
            next((0, http_errors_1.default)(404));
        }
    });
    router.post('/post', async (req, res) => {
        res.render('post', { ...site_1.siteConfig, post: exports.post });
    });
};
exports.post = post;
