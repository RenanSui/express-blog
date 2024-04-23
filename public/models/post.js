"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostModel = void 0;
const mongoose_1 = require("mongoose");
const schema = new mongoose_1.Schema({
    title: String,
    body: String,
    createdAt: Date,
    updatedAt: Date,
});
exports.PostModel = (0, mongoose_1.model)('Post', schema);
