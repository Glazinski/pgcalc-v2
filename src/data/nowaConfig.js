export const nowaConfigSubjects = [
  {
    id: 1,
    title: 'Język obcy',
    inputTitle: 'Foreign'
  },
  {
    id: 2,
    title: 'Język polski',
    inputTitle: 'Polish'
  },
  {
    id: 3,
    title: 'Matematyka',
    inputTitle: 'Maths',
    hidden: true,
    removable: true
  },
  {
    id: 4,
    title: 'Fizyka',
    inputTitle: 'Extra',
    hidden: true,
    special: true,
    removable: true
  }
];

export const nowaInputsConfig = [
  {
    id: 12,
    level: `Poziom Podstawowy (%)`,
    subject: 'basic',
    min: 0,
    max: 100,
    value: 0
  },
  {
    id: 22,
    level: `Poziom Rozszerzony (%)`,
    subject: 'ext',
    min: 0,
    max: 100,
    value: 0
  }
];
