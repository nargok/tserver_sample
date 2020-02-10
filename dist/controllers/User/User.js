"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var log4js_1 = __importDefault(require("log4js"));
var CrudController_1 = require("../CrudController");
var logger = log4js_1.default.getLogger();
logger.level = 'debug';
var UserController = /** @class */ (function (_super) {
    __extends(UserController, _super);
    function UserController() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    UserController.prototype.create = function (req, res) {
        throw new Error("Method not implemented.");
    };
    UserController.prototype.read = function (req, res) {
        res.json({ message: 'GET /user request received' });
        var user = {
            id: 1,
            name: 'hogehgoe',
            age: 23,
        };
        var users = [
            { id: 1, name: 'yamada taro', age: 23 },
            { id: 2, name: 'wakabayashi ichiro', age: 30 },
        ];
        logger.debug('get user request: ' + JSON.stringify(users));
        // logger.debug('get user request: ' + JSON.stringify(user))
    };
    UserController.prototype.update = function (req, res) {
        throw new Error("Method not implemented.");
    };
    UserController.prototype.delete = function (req, res) {
        throw new Error("Method not implemented.");
    };
    return UserController;
}(CrudController_1.CrudController));
exports.UserController = UserController;
