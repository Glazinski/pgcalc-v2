const min = 0;
const max = 100;
const value = '';
const unique = true;
const disabled = false;
const basLevel = `Poziom \n Podstawowy \n (%)`;
const extLevel = `Poziom \n Rozszerzony \n (%)`;

export const scale = {
  langs: 0.1,
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
        level: basLevel,
        name: 'basicForeign',
        min,
        max,
        value,
        disabled
      },
      {
        id: 22,
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
        id: 32,
        level: basLevel,
        name: 'basicPolish',
        min,
        max,
        value
      },
      {
        id: 42,
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
        id: 52,
        level: basLevel,
        name: 'basicMaths',
        min,
        max,
        value,
        unique
      },
      {
        id: 62,
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
        id: 72,
        level: basLevel,
        name: 'basicExtra',
        min,
        max,
        value,
        unique
      },
      {
        id: 82,
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
