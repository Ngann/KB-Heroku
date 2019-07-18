"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var prisma_lib_1 = require("prisma-client-lib");
var typeDefs = require("./prisma-schema").typeDefs;

var models = [
  {
    name: "User",
    embedded: false
  },
  {
    name: "Vendor",
    embedded: false
  },
  {
    name: "Customer",
    embedded: false
  },
  {
    name: "Bill",
    embedded: false
  },
  {
    name: "Invoice",
    embedded: false
  },
  {
    name: "Account",
    embedded: false
  },
  {
    name: "GeneralJournal",
    embedded: false
  },
  {
    name: "Status",
    embedded: false
  },
  {
    name: "Balance",
    embedded: false
  },
  {
    name: "Payment",
    embedded: false
  },
  {
    name: "AccountType",
    embedded: false
  },
  {
    name: "AccountCategory",
    embedded: false
  }
];
exports.Prisma = prisma_lib_1.makePrismaClientClass({
  typeDefs,
  models,
  endpoint: `https://us1.prisma.sh/ngan-nguyen-13344c/rando/dev`
});
exports.prisma = new exports.Prisma();
