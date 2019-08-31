const min = 1;
const max = 7;
const value = '';
const unique = true;

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
        level: `Poziom \n SL (1-7)`,
        name: 'basicForeign',
        min,
        max,
        value
      },
      {
        id: 22765,
        level: `Poziom \n HL (1-7)`,
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
        level: `Poziom \n SL (1-7)`,
        name: 'basicPolish',
        min,
        max,
        value
      },
      {
        id: 42765,
        level: `Poziom \n HL (1-7)`,
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
        level: `Poziom \n SL (1-7)`,
        name: 'basicMaths',
        min,
        max,
        value,
        unique
      },
      {
        id: 62765,
        level: `Poziom \n HL (1-7)`,
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
    title: 'Przedmiot Dodatkowy',
    hidden: true,
    special: true,
    removable: true,
    input: [
      {
        id: 72765,
        level: `Poziom \n SL (1-7)`,
        name: 'basicExtra',
        min,
        max,
        value,
        unique
      },
      {
        id: 82765,
        level: `Poziom \n HL (1-7)`,
        name: 'extExtra',
        min,
        max,
        value,
        unique
      }
    ]
  }
];
