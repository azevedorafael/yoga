/**
 * @module radii
 * @desc Border radius (radii) tokens module.
 *
 * @memberof @gympass/yoga-tokens
 */

/**
 * A border radios (radii)
 * @typedef Radii
 *
 * @type {Object}
 * @property {number} xxsmall - 0 radius
 * @property {number} xsmall - 2 radius
 * @property {number} small - 4 radius
 * @property {number} medium - 8 radius
 * @property {number} large - 12 radius
 * @property {number} xlarge - 16 radius
 * @property {number} xxlarge - 9999 radius
 */

/**
 * @type {Radii}
 * @default
 */
const radii = [0, 2, 4, 8, 12, 16, 9999];
[
  radii.xxsmall,
  radii.xsmall,
  radii.small,
  radii.medium,
  radii.large,
  radii.xlarge,
  radii.xxlarge,
] = radii;

export default radii;
