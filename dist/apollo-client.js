"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var client_1 = require("@apollo/client");
var client = new client_1.ApolloClient({
    uri: "http://localhost:4000",
    cache: new client_1.InMemoryCache(),
});
