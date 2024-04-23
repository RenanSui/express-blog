"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.authValidation = void 0;
const site_1 = require("../config/site");
const utils_1 = require("../lib/utils");
const path_1 = require("path");
const authLayout = (0, path_1.join)(__dirname, '../views/layouts/auth');
exports.authValidation = {
    signIn(req, res, next) {
        const { email, password } = req.body;
        if (!(0, utils_1.isEmailValid)(email) || !(0, utils_1.isPasswordValid)(password)) {
            res.render('auth/sign-in', {
                ...site_1.siteConfig,
                email,
                emailValid: (0, utils_1.isEmailValid)(email),
                passwordValid: (0, utils_1.isPasswordValid)(password),
                layout: authLayout,
            });
        }
        return next();
    },
    signUp(req, res, next) {
        const { email, password } = req.body;
        if (!(0, utils_1.isEmailValid)(email) || !(0, utils_1.isPasswordValid)(password)) {
            res.render('auth/sign-up', {
                ...site_1.siteConfig,
                email,
                emailValid: (0, utils_1.isEmailValid)(email),
                passwordValid: (0, utils_1.isPasswordValid)(password),
                layout: authLayout,
            });
        }
        return next();
    },
};
