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
  Tank: {
    nation: obj => nations(obj.nation),
    period: obj => periods(obj.period),
    variants: obj => tanksByVariant(obj.id),
  },
  Aircraft: {
    nation: obj => nations(obj.nation),
    period: obj => periods(obj.period),
    variants: obj => aircraftsByVariant(obj.id),
  },
  Nation: {
    aircrafts: obj => aircraftsByNation(obj.id),
    tanks: obj => tanksByNation(obj.id),
  },
  Query: {
    allNations: (obj, args, context) => nations(),
    allPeriods: (obj, args, context) => periods(),

    allTanks: (obj, args, context) => tanks(),
    allAircrafts: (obj, args, context) => aircrafts(),

    findTankById: (obj, { id }) => tanks(id),
  }
}

module.exports = resolvers;
