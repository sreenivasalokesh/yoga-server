import dotenv from "dotenv";

import { ApolloServer, gql } from "apollo-server";
import { User } from "./src/generated/graphql";

dotenv.config();

//graphql changes start
const typeDefs = gql`
  type User {
    firstname: String!
    lastname: String!
    email: String!
  }

  input UserInput {
    firstname: String!
    lastname: String!
    email: String!
  }

  type Query {
    users: [User!]!
  }

  type Mutation {
    addUser(user: UserInput!): [User!]!
  }
`;

const resolvers = {
  Query: {
    users: () => Users,
  },
  Mutation: {
    addUser: (parent: any, args: any) => {
      const user = { ...args.data };
      console.log("Adding the user: ", JSON.stringify(user));
      return Users.push(user);
    },
  },
};
const Users: User[] = [
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

const server = new ApolloServer({ typeDefs, resolvers });

server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
