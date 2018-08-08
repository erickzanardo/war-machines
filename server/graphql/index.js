const fs = require("fs");
const { makeExecutableSchema } = require("graphql-tools");
const graphqlSchema = fs.readFileSync("./graphql/schema/schema.graphql", "utf8");
const resolvers = require("./schema/resolvers");

const { graphqlExpress, graphiqlExpress } = require("graphql-server-express");
const { Router } = require("express");

const bodyParser = require("body-parser");

const router = Router();

const schema = makeExecutableSchema({
  typeDefs: graphqlSchema,
  resolvers,
});


router.use("/explorer", graphiqlExpress({
  endpointURL: "/graphql",
}));

router.use("/", bodyParser.json(), graphqlExpress({ schema }));

module.exports = router;
