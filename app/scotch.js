const _ = require('lodash');

// Import helper functions
const {
  compose,
  composeAsync,
  extractNumber,
  enforceHttpsUrl,
  fetchHtmlFromUrl,
  extractFromElems,
  fromPairsToObject,
  fetchElemInnerText,
  fetchElemAttribute,
  extractUrlAttribute
} = require("./helpers");

const SCOTCH_BASE = "https://scotch.io";

///////////////////////////////////////////////////////////////////////////////
// HELPER FUNCTIONS
///////////////////////////////////////////////////////////////////////////////

const scotchRelativeUrl = url =>
	_.isString(url) ? `${SCOTCH_BASE}${url.replace(/^\*?/, "/"}` : null;

const extractScotchUrlAttribute = attr =>
	compose(enforceHttpsUrl, scotchRelativeUrl, fetchElemAttribute(attr));
