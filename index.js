/**
 * Currency Information.
 *
 * @typedef {Object} CurrencyInfo
 * @property {string} symbol
 * @property {string} category
 * @property {string} platform
 */

/** @type {{[key:string]: CurrencyInfo}} */
const data = require("./data.json");

/**
 * Get the currency info.
 *
 * @param symbol {string} The currency symbol, e.g., BTC, ETH, EOS, USDT, etc.
 * @returns {CurrencyInfo} The CurrencyInfo
 */
// eslint-disable-next-line import/prefer-default-export
function getCurrencyInfo(symbol) {
  return data[symbol];
}

module.exports = { getCurrencyInfo };
