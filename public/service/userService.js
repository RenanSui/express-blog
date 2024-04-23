"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userService = void 0;
exports.userService = {
    create: ({ email, password }) => {
        console.log({ email, password });
    },
    login: ({ email, password }) => {
        console.log({ email, password });
    },
    logout: () => {
        console.log('Logged out');
    },
};
