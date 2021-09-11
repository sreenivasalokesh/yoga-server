"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var dotenv_1 = __importDefault(require("dotenv"));
var apollo_server_1 = require("apollo-server");
dotenv_1.default.config();
//graphql changes start
var typeDefs = (0, apollo_server_1.gql)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  type User {\n    firstname: String!\n    lastname: String!\n    email: String!\n  }\n\n  input UserInput {\n    firstname: String!\n    lastname: String!\n    email: String!\n  }\n\n  type Query {\n    users: [User!]!\n  }\n\n  type Mutation {\n    addUser(user: UserInput!): [User!]!\n  }\n"], ["\n  type User {\n    firstname: String!\n    lastname: String!\n    email: String!\n  }\n\n  input UserInput {\n    firstname: String!\n    lastname: String!\n    email: String!\n  }\n\n  type Query {\n    users: [User!]!\n  }\n\n  type Mutation {\n    addUser(user: UserInput!): [User!]!\n  }\n"])));
var resolvers = {
    Query: {
        users: function () { return Users; },
    },
    Mutation: {
        addUser: function (parent, args) {
            var user = __assign({}, args.data);
            console.log("Adding the user: ", JSON.stringify(user));
            return Users.push(user);
        },
    },
};
var Users = [
    {
        firstname: "sreenivasa",
        lastname: "lokesh",
        email: "sreenivasa.lokesh@gmail.com",
    },
    {
        firstname: "Shishir",
        lastname: "Nidudhala",
        email: "shishir.nidudhala@gmail.com",
    },
    {
        firstname: "vasavi",
        lastname: "sreenivasa",
        email: "vasavi.sreenivasa@gmail.com",
    },
];
var server = new apollo_server_1.ApolloServer({ typeDefs: typeDefs, resolvers: resolvers });
server.listen().then(function (_a) {
    var url = _a.url;
    console.log("\uD83D\uDE80  Server ready at " + url);
});
var templateObject_1;
