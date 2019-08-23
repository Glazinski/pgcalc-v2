export const nowaConfigSubjects = [
  {
    id: 1,
    title: 'Język obcy',
    input: [
      {
        id: 12,
        level: `Poziom Podstawowy (%)`,
        name: 'basicForeign',
        min: 0,
        max: 100,
        value: ''
      },
      {
        id: 22,
        level: `Poziom Rozszerzony (%)`,
        name: 'extForeign',
        min: 0,
        max: 100,
        value: ''
      }
    ]
  },
  {
    id: 2,
    title: 'Język polski',
    input: [
      {
        id: 32,
        level: `Poziom Podstawowy (%)`,
        name: 'basicPolish',
        min: 0,
        max: 100,
        value: ''
      },
      {
        id: 42,
        level: `Poziom Rozszerzony (%)`,
        name: 'extPolish',
        min: 0,
        max: 100,
        value: ''
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
        id: 52,
        level: `Poziom Podstawowy (%)`,
        name: 'basicMaths',
        min: 0,
        max: 100,
        value: ''
      },
      {
        id: 62,
        level: `Poziom Rozszerzony (%)`,
        name: 'extMaths',
        min: 0,
        max: 100,
        value: ''
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
        id: 72,
        level: `Poziom Podstawowy (%)`,
        name: 'basicExtra',
        min: 0,
        max: 100,
        value: ''
      },
      {
        id: 82,
        level: `Poziom Rozszerzony (%)`,
        name: 'extExtra',
        min: 0,
        max: 100,
        value: ''
      }
    ]
  }
];
