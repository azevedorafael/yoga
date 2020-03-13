/**
 * @module fontWeight
 * @desc Font Weights tokens module.
 *
 * @memberof @gympass/yoga-tokens
 */

/**
 * A font weight
 * @typedef FontWeight
 *
 * @type {Object}
 * @property {number} light - 300
 * @property {number} regular - 400
 * @property {number} semiBold - 600
 * @property {number} bold - 700
 * @property {number} extraBold - 800
 */

/**
 * @type {FontWeight}
 * @default
 */
const fontWeights = [300, 400, 600, 700, 800];

[
  fontWeights.light,
  fontWeights.regular,
  fontWeights.semiBold,
  fontWeights.bold,
  fontWeights.extraBold,
] = fontWeights;

export default fontWeights;
