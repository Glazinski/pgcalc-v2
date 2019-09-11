const min = 0;
const max = 100;
const value = '';
const unique = true;
const disabled = false;

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
        min,
        max,
        value,
        disabled
      },
      {
        id: 22,
        level: `Poziom \n Rozszerzony \n (%)`,
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
        id: 32,
        level: `Poziom \n Podstawowy \n (%)`,
        name: 'basicPolish',
        min,
        max,
        value
      },
      {
        id: 42,
        level: `Poziom \n Rozszerzony \n (%)`,
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
        id: 52,
        level: `Poziom \n Podstawowy \n (%)`,
        name: 'basicMaths',
        min,
        max,
        value,
        unique
      },
      {
        id: 62,
        level: `Poziom \n Rozszerzony \n (%)`,
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
        id: 72,
        level: `Poziom \n Podstawowy \n (%)`,
        name: 'basicExtra',
        min,
        max,
        value,
        unique
      },
      {
        id: 82,
        level: `Poziom \n Rozszerzony \n (%)`,
        name: 'extExtra',
        min,
        max,
        value,
        unique
      }
    ]
  }
];
