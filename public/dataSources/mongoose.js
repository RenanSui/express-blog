"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mongoose = void 0;
const mongoose_1 = require("mongoose");
exports.mongoose = {
    run: async () => {
        try {
            return await (0, mongoose_1.connect)(process.env.MONGODB_URI);
        }
        catch (error) {
            console.log(`Error: ${error}`);
        }
    },
    stop: async () => {
        try {
            return await mongoose_1.connection.destroy();
        }
        catch (error) {
            console.log(`Error: ${error}`);
        }
    },
};
