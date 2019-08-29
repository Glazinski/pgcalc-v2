const min = 2;
const max = 6;
const value = '';
const unique = true;

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
        level: `Egzamin \n Pisemny \n (2-6)`,
        name: 'writtenForeign',
        min,
        max,
        value
      },
      {
        id: 222,
        level: `Egzamin \n Ustny \n (2-6)`,
        name: 'verbalForeign',
        min,
        max,
        value
      },
      {
        id: 322,
        level: `Oceny ze \n świadectwa \n (2-6)`,
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
        level: `Egzamin \n Pisemny \n (2-6)`,
        name: 'writtenPolish',
        min,
        max,
        value
      },
      {
        id: 522,
        level: `Egzamin \n Ustny \n (2-6)`,
        name: 'verbalPolish',
        min,
        max,
        value
      },
      {
        id: 622,
        level: `Oceny ze \n świadectwa \n (2-6)`,
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
        level: `Egzamin \n Pisemny \n (2-6)`,
        name: 'writtenMaths',
        min,
        max,
        value,
        unique
      },
      {
        id: 622,
        level: `Egzamin \n Ustny \n (2-6)`,
        name: 'verbalMaths',
        min,
        max,
        value,
        unique
      },
      {
        id: 722,
        level: `Oceny ze \n świadectwa \n (2-6)`,
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
        level: `Egzamin \n Pisemny \n (2-6)`,
        name: 'writtenExtra',
        min,
        max,
        value,
        unique
      },
      {
        id: 922,
        level: `Egzamin \n Ustny \n (2-6)`,
        name: 'verbalExtra',
        min,
        max,
        value,
        unique
      },
      {
        id: 1022,
        level: `Oceny ze \n świadectwa \n (2-6)`,
        name: 'certExtra',
        min,
        max,
        value,
        unique
      }
    ]
  }
];
