/**
 * @module spacing
 * @desc Spacing tokens module.
 *
 * @memberof @gympass/yoga-tokens
 */

/**
 * A spacing
 * @typedef Spacing
 *
 * @type {Object}
 * @property {number} zero - 0
 * @property {number} xxsmall - 4
 * @property {number} xsmall - 8
 * @property {number} small - 12
 * @property {number} medium - 16
 * @property {number} large - 20
 * @property {number} xlarge - 24
 * @property {number} xxlarge - 32
 * @property {number} xxxlarge - 40
 * @property {number} huge - 48
 * @property {number} xhuge - 56
 * @property {number} xxhuge - 64
 * @property {number} xxxhuge - 72
 */

/**
 * @type {Spacing}
 * @default
 */
const spacing = [0, 4, 8, 12, 16, 20, 24, 32, 40, 48, 56, 64, 72];
[
  spacing.zero,
  spacing.xxsmall,
  spacing.xsmall,
  spacing.small,
  spacing.medium,
  spacing.large,
  spacing.xlarge,
  spacing.xxlarge,
  spacing.xxxlarge,
  spacing.huge,
  spacing.xhuge,
  spacing.xxhuge,
  spacing.xxxhuge,
] = spacing;

export default spacing;
