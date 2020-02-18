#!/usr/bin/env node
const { getCurrencyInfo } = require("./index");

const args = process.argv.slice(2);

if (args.length !== 1) {
  console.error("Usage: cryptocurrency-info <symbol>");
  process.exit(0);
}

console.info(getCurrencyInfo("BTC"));
