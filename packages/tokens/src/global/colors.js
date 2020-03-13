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
const amsterda = [
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
  amsterda.i10,
  amsterda.i20,
  amsterda.i30,
  amsterda.i40,
  amsterda.i50,
  amsterda.i60,
  amsterda.i70,
  amsterda.i80,
] = amsterda;

/**
 * @type {Color}
 */
const saopaulo = [
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
  saopaulo.i10,
  saopaulo.i20,
  saopaulo.i30,
  saopaulo.i40,
  saopaulo.i50,
  saopaulo.i60,
  saopaulo.i70,
  saopaulo.i80,
] = saopaulo;

/**
 * @type {Color}
 */
const buenosaires = [
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
  buenosaires.i10,
  buenosaires.i20,
  buenosaires.i30,
  buenosaires.i40,
  buenosaires.i50,
  buenosaires.i60,
  buenosaires.i70,
  buenosaires.i80,
] = buenosaires;

/**
 * @type {Color}
 */
const newyork = [
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
  newyork.i10,
  newyork.i20,
  newyork.i30,
  newyork.i40,
  newyork.i50,
  newyork.i60,
  newyork.i70,
  newyork.i80,
] = newyork;

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
const vilaolimpia = [
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
  vilaolimpia.i10,
  vilaolimpia.i20,
  vilaolimpia.i30,
  vilaolimpia.i40,
  vilaolimpia.i50,
  vilaolimpia.i60,
  vilaolimpia.i70,
  vilaolimpia.i80,
] = vilaolimpia;

const foundation = {
  text: { primary: '', secondary: '', disabled: '', light: '' },
  elements: { dropshadow: '', border: '', background: [] },
};

/**
 * @type {String}
 */
const white = '#FFFFFF';

/**
 * @type {FeedbackColor}
 */
const positive = [amsterda.i10, amsterda.i70];

/**
 * @type {FeedbackColor}
 */
const negative = [madrid.i10, madrid.i70];

/**
 * @type {FeedbackColor}
 */
const informative = [buenosaires.i10, buenosaires.i70];

/**
 * @type {FeedbackColor}
 */
const warning = [milan.i10, milan.i70];

const colors = {
  madrid,
  munich,
  milan,
  amsterda,
  saopaulo,
  buenosaires,
  newyork,
  paris,
  vilaolimpia,
  foundation,
  white,
  positive,
  negative,
  informative,
  warning,
};

export default colors;
