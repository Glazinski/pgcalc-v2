const min = 2;
const max = 6;
const value = '';
const unique = true;
const basLevel = `Egzamin \n Pisemny \n (2-6)`;
const verbalLevel = `Egzamin \n Ustny \n (2-6)`;
const certLevel = `Oceny ze \n świadectwa \n (2-6)`;

export const scale = {
  cert: 0.25,
  written: 1
};

// Grades equivalent to points
export const grades = new Map([
  [2, 20],
  [3, 40],
  [4, 60],
  [5, 80],
  [6, 100],
  [0, 0],
  ['', 0]
]);

export const staraConfigSubjects = [
  {
    id: 11,
    title: 'Język obcy',
    input: [
      {
        id: 122,
        level: basLevel,
        name: 'writtenForeign',
        min,
        max,
        value
      },
      {
        id: 222,
        level: verbalLevel,
        name: 'verbalForeign',
        min,
        max,
        value
      },
      {
        id: 322,
        level: certLevel,
        name: 'certForeign',
        min,
        max,
        value
      }
    ]
  },
  {
    id: 21,
    title: 'Język polski',
    input: [
      {
        id: 422,
        level: basLevel,
        name: 'writtenPolish',
        min,
        max,
        value
      },
      {
        id: 522,
        level: verbalLevel,
        name: 'verbalPolish',
        min,
        max,
        value
      },
      {
        id: 622,
        level: certLevel,
        name: 'certPolish',
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
        id: 522,
        level: basLevel,
        name: 'writtenMaths',
        min,
        max,
        value,
        unique
      },
      {
        id: 622,
        level: verbalLevel,
        name: 'verbalMaths',
        min,
        max,
        value,
        unique
      },
      {
        id: 722,
        level: certLevel,
        name: 'certMaths',
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
        id: 822,
        level: basLevel,
        name: 'writtenExtra',
        min,
        max,
        value,
        unique
      },
      {
        id: 922,
        level: verbalLevel,
        name: 'verbalExtra',
        min,
        max,
        value,
        unique
      },
      {
        id: 1022,
        level: certLevel,
        name: 'certExtra',
        min,
        max,
        value,
        unique
      }
    ]
  }
];
