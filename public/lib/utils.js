"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isPasswordValid = exports.isEmailValid = void 0;
function isEmailValid(email) {
    const isValid = email.match(/^[a-zA-Z0-9_.+]+(?<!^[0-9]*)@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/)?.[0];
    return !!isValid;
}
exports.isEmailValid = isEmailValid;
function isPasswordValid(password) {
    const isValid = password.match(/(?=.*[a-z0-9]).{8,16}$/);
    return !!isValid;
}
exports.isPasswordValid = isPasswordValid;
