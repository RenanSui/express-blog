"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.lobby = void 0;
const site_1 = require("../config/site");
const post_1 = require("../models/post");
const http_errors_1 = __importDefault(require("http-errors"));
const lobby = (router) => {
    router.get('/', async (req, res, next) => {
        try {
            const perPage = 10;
            const page = 1 * 1;
            const posts = await post_1.PostModel.aggregate([{ $sort: { createdAt: -1 } }])
                .skip(perPage * page - perPage)
                .limit(perPage)
                .exec();
            const count = await post_1.PostModel.countDocuments();
            const nextPage = page + 1;
            const hasNextPage = nextPage <= Math.ceil(count / perPage);
            res.render('lobby', {
                ...site_1.siteConfig,
                posts,
                currentPage: page,
                nextPage: hasNextPage ? nextPage : null,
            });
        }
        catch (error) {
            next((0, http_errors_1.default)(404));
        }
    });
};
exports.lobby = lobby;
