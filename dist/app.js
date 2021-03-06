"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var app = express_1.default();
var jsonResponse = JSON.parse("{\"response_type\": \"in_channel\",\"text\": \"Hello World from AWS Lambda\"}");
var jsonResponse2 = {
    response_type: 'in_channel',
    text: 'This is a brand new bag @graham'
};
app.get('/', function (req, res) {
    res.send(jsonResponse2);
});
module.exports = app;
