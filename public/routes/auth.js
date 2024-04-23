"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.auth = void 0;
const controllers_1 = require("../controllers");
const guards_1 = require("../guards");
const validations_1 = require("../validations");
const auth = (router) => {
    router.get('/auth/sign-in', guards_1.authGuard.isAuth, controllers_1.authController.signIn);
    router.post('/auth/sign-in', guards_1.authGuard.isAuth, validations_1.authValidation.signIn, controllers_1.authController.loginUser);
    router.get('/auth/sign-up', guards_1.authGuard.isAuth, controllers_1.authController.signUp);
    router.post('/auth/sign-up', guards_1.authGuard.isAuth, validations_1.authValidation.signUp, controllers_1.authController.createUser);
    router.get('/auth/sign-out', guards_1.authGuard.isAuth, controllers_1.authController.signOut);
    router.post('/auth/sign-out', guards_1.authGuard.isAuth, controllers_1.authController.logoutUser);
    router.get('/auth/confirmation', guards_1.authGuard.isAuth, controllers_1.authController.signUp);
};
exports.auth = auth;
