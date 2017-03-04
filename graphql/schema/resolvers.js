"use strict";

const {
  GraphQLString,
} = require("graphql");

const {
  tanks,
  aircrafts,
} = require("../../repository/repository");

const resolvers = {
  Tank: {},
  Query: {
    allTanks: (obj, args, context) => tanks(),
    allAircrafts: (obj, args, context) => aircrafts(),
  }
}

module.exports = resolvers;
