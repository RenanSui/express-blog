"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.authGuard = void 0;
exports.authGuard = {
    isAuth: (req, res, next) => {
        next();
    },
};
