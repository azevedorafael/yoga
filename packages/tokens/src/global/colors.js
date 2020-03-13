/**
 * @module colors
 * @desc Color tokens module.
 *
 * @memberof @gympass/yoga-tokens
 */

/**
 * A color
 * @typedef Color
 *
 * @type {Object}
 * @property {number} i10 - color intensity 10
 * @property {number} i20 - color intensity 20
 * @property {number} i30 - color intensity 30
 * @property {number} i40 - color intensity 40
 * @property {number} i50 - color intensity 50
 * @property {number} i60 - color intensity 60
 * @property {number} i70 - color intensity 70
 * @property {number} i80 - color intensity 80
 */

/**
 * A feedbackcolor
 * @typedef FeedbackColor
 *
 * @type {String[]}
 */

/**
 * @type {Color}
 */
const madrid = [
  '#FFE3E1',
  '#F8C6BD',
  '#F5A391',
  '#F48170',
  '#F46152',
  '#D65048',
  '#CB3530',
  '#A9221F',
];
[
  madrid.i10,
  madrid.i20,
  madrid.i30,
  madrid.i40,
  madrid.i50,
  madrid.i60,
  madrid.i70,
  madrid.i80,
] = madrid;

/**
 * @type {Color}
 */
const munich = [
  '#FDECE0',
  '#FADCC4',
  '#FCBE94',
  '#FFAC6F',
  '#F69755',
  '#E27B2D',
  '#C76518',
  '#AD5007',
];
[
  munich.i10,
  munich.i20,
  munich.i30,
  munich.i40,
  munich.i50,
  munich.i60,
  munich.i70,
  munich.i80,
] = munich;

/**
 * @type {Color}
 */
const milan = [
  '#FBFBBE',
  '#FDEF8F',
  '#FFE461',
  '#F3D04A',
  '#DFAF26',
  '#D39E16',
  '#BD8D10',
  '#997108',
];
[
  milan.i10,
  milan.i20,
  milan.i30,
  milan.i40,
  milan.i50,
  milan.i60,
  milan.i70,
  milan.i80,
] = milan;

/**
 * @type {Color}
 */
const amsterdam = [
  '#D4FADC',
  '#AAFDB6',
  '#83FC8B',
  '#39924D',
  '#4ECF6B',
  '#44B55E',
  '#3A9A50',
  '#317D42',
];
[
  amsterdam.i10,
  amsterdam.i20,
  amsterdam.i30,
  amsterdam.i40,
  amsterdam.i50,
  amsterdam.i60,
  amsterdam.i70,
  amsterdam.i80,
] = amsterdam;

/**
 * @type {Color}
 */
const saoPaulo = [
  '#D8F5F5',
  '#B4F1EA',
  '#80EEDB',
  '#6FDCCB',
  '#58C2B4',
  '#178173',
  '#2B9486',
  '#117D6F',
];
[
  saoPaulo.i10,
  saoPaulo.i20,
  saoPaulo.i30,
  saoPaulo.i40,
  saoPaulo.i50,
  saoPaulo.i60,
  saoPaulo.i70,
  saoPaulo.i80,
] = saoPaulo;

/**
 * @type {Color}
 */
const buenosAires = [
  '#CAE5F5',
  '#95D4EF',
  '#6EBCEA',
  '#4C9FE4',
  '#3B83DB',
  '#1968C9',
  '#0553B1',
  '#004294',
];
[
  buenosAires.i10,
  buenosAires.i20,
  buenosAires.i30,
  buenosAires.i40,
  buenosAires.i50,
  buenosAires.i60,
  buenosAires.i70,
  buenosAires.i80,
] = buenosAires;

/**
 * @type {Color}
 */
const newYork = [
  '#EBECF9',
  '#D7DAF3',
  '#AFB5E8',
  '#5F6BD2',
  '#3847C7',
  '#27318B',
  '#181E56',
  '#001027',
];
[
  newYork.i10,
  newYork.i20,
  newYork.i30,
  newYork.i40,
  newYork.i50,
  newYork.i60,
  newYork.i70,
  newYork.i80,
] = newYork;

/**
 * @type {Color}
 */
const paris = [
  '#EBE6FF',
  '#D8D0FC',
  '#C5BAF4',
  '#B3A1F2',
  '#9B83F1',
  '#876FDF',
  '#715EB8',
  '#5A4A91',
];
[
  paris.i10,
  paris.i20,
  paris.i30,
  paris.i40,
  paris.i50,
  paris.i60,
  paris.i70,
  paris.i80,
] = paris;
/**
 * @type {Color}
 */
const vilaOlimpia = [
  '#F5F5FA',
  '#E6E6F0',
  '#D3D3E2',
  '#C5C5D6',
  '#A9A9B8',
  '#9898A7',
  '#6B6B78',
  '#41414A',
];
[
  vilaOlimpia.i10,
  vilaOlimpia.i20,
  vilaOlimpia.i30,
  vilaOlimpia.i40,
  vilaOlimpia.i50,
  vilaOlimpia.i60,
  vilaOlimpia.i70,
  vilaOlimpia.i80,
] = vilaOlimpia;

/**
 * @type {String}
 */
const white = '#FFFFFF';

/**
 * @type {String}
 */
const text = newYork.i80;

/**
 * @type {FeedbackColor}
 */
const positive = [amsterdam.i10, amsterdam.i70];

/**
 * @type {FeedbackColor}
 */
const negative = [madrid.i10, madrid.i70];

/**
 * @type {FeedbackColor}
 */
const informative = [buenosAires.i10, buenosAires.i70];

/**
 * @type {FeedbackColor}
 */
const warning = [milan.i10, milan.i70];

const colors = {
  madrid,
  munich,
  milan,
  amsterdam,
  saoPaulo,
  buenosAires,
  newYork,
  paris,
  vilaOlimpia,
  white,
  text,
  positive,
  negative,
  informative,
  warning,
};

export default colors;
