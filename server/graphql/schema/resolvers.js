"use strict";

const {
  GraphQLString,
} = require("graphql");

const {
  nations,
  periods,

  aircrafts,
  tanks,

  tanksByNation,
  aircraftsByNation,

  aircraftsByVariant,
  tanksByVariant,
} = require("../../repository/repository");

const resolvers = {
  Query: {
    allPeriods: (obj, args, context) => periods(),
  }
}

module.exports = resolvers;
