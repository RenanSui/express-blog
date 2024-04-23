"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.authController = void 0;
const site_1 = require("../config/site");
const userService_1 = require("../service/userService");
const path_1 = require("path");
const authLayout = (0, path_1.join)(__dirname, '../views/layouts/auth');
exports.authController = {
    signIn: (req, res) => {
        res.render('auth/sign-in', { ...site_1.siteConfig, layout: authLayout });
    },
    signUp: (req, res) => {
        res.render('auth/sign-up', { ...site_1.siteConfig, layout: authLayout });
    },
    signOut: (req, res) => {
        res.render('auth/sign-out', { ...site_1.siteConfig, layout: authLayout });
    },
    confirmation: (req, res) => {
        res.render('auth/confirmation', { ...site_1.siteConfig, layout: authLayout });
    },
    loginUser: (req, res) => {
        userService_1.userService.login({ email: req.body.email, password: req.body.password });
        res.redirect('/');
    },
    createUser: (req, res) => {
        userService_1.userService.create({ email: req.body.email, password: req.body.password });
        res.redirect('/auth/confirmation');
    },
    logoutUser: (req, res) => {
        userService_1.userService.logout();
        res.redirect('/');
    },
};
