export const scale = {
  basic: 0.4,
  extended: 1
};

export const nowaConfigSubjects = [
  {
    id: 1,
    title: 'Język obcy',
    input: [
      {
        id: 12,
        level: `Poziom \n Podstawowy \n (%)`,
        name: 'basicForeign',
        min: 0,
        max: 100,
        value: ''
      },
      {
        id: 22,
        level: `Poziom \n Rozszerzony \n (%)`,
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
        level: `Poziom \n Podstawowy \n (%)`,
        name: 'basicPolish',
        min: 0,
        max: 100,
        value: ''
      },
      {
        id: 42,
        level: `Poziom \n Rozszerzony \n (%)`,
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
        level: `Poziom \n Podstawowy \n (%)`,
        name: 'basicMaths',
        min: 0,
        max: 100,
        value: '',
        unique: true
      },
      {
        id: 62,
        level: `Poziom \n Rozszerzony \n (%)`,
        name: 'extMaths',
        min: 0,
        max: 100,
        value: '',
        unique: true
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
        level: `Poziom \n Podstawowy \n (%)`,
        name: 'basicExtra',
        min: 0,
        max: 100,
        value: '',
        unique: true
      },
      {
        id: 82,
        level: `Poziom \n Rozszerzony \n (%)`,
        name: 'extExtra',
        min: 0,
        max: 100,
        value: '',
        unique: true
      }
    ]
  }
];
