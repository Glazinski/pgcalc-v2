const min = 1;
const max = 7;
const value = '';
const unique = true;
const basLevel = `Poziom \n SL (1-7)`;
const extLevel = `Poziom \n HL (1-7)`;

export const basicGrades = new Map([
  ['', 0],
  [0, 0],
  [1, 0],
  [2, 30],
  [3, 40],
  [4, 50],
  [5, 60],
  [6, 70],
  [7, 80]
]);

export const extGrades = new Map([
  ['', 0],
  [0, 0],
  [1, 0],
  [2, 40],
  [3, 60],
  [4, 80],
  [5, 90],
  [6, 95],
  [7, 100]
]);

export const ibConfigSubject = [
  {
    id: 1,
    title: 'Język obcy',
    input: [
      {
        id: 12765,
        level: basLevel,
        name: 'basicForeign',
        min,
        max,
        value
      },
      {
        id: 22765,
        level: extLevel,
        name: 'extForeign',
        min,
        max,
        value
      }
    ]
  },
  {
    id: 2,
    title: 'Język polski',
    input: [
      {
        id: 32765,
        level: basLevel,
        name: 'basicPolish',
        min,
        max,
        value
      },
      {
        id: 42765,
        level: extLevel,
        name: 'extPolish',
        min,
        max,
        value
      }
    ]
  },
  {
    id: 3,
    title: 'Matematyka',
    hidden: true,
    removable: true,
    input: [
      {
        id: 52765,
        level: basLevel,
        name: 'basicMaths',
        min,
        max,
        value,
        unique
      },
      {
        id: 62765,
        level: extLevel,
        name: 'extMaths',
        min,
        max,
        value,
        unique
      }
    ]
  },
  {
    id: 4,
    title: 'Przedmiot dodatkowy',
    hidden: true,
    special: true,
    removable: true,
    input: [
      {
        id: 72765,
        level: basLevel,
        name: 'basicExtra',
        min,
        max,
        value,
        unique
      },
      {
        id: 82765,
        level: extLevel,
        name: 'extExtra',
        min,
        max,
        value,
        unique
      }
    ]
  }
];
