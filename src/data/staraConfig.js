import uniqid from 'uniqid';

const min = 2;
const max = 6;
const primaryScale = 1;
const advanceScale = 0.25;
const primaryScore = '';
const oralScore = '';
const advanceScore = '';
const bigger = 0;
const basLevel = 'Egzamin \n Pisemny \n (2-6)';
const oralLevel = 'Egzamin \n Ustny \n (2-6)';
const extLevel = 'Oceny ze \n świadectwa \n (2-6)';

// Grades equivalent to points
export const grades = new Map([
  [2, 20],
  [3, 40],
  [4, 60],
  [5, 80],
  [6, 100],
  [0, 0],
  ['', ''],
]);

export const subjects = {
  id: uniqid(),
  title: 'Stara Matura',
  basLevel,
  extLevel,
  oralLevel,
  min,
  max,
  subjects: [
    {
      id: uniqid(),
      title: 'Język obcy',
      primaryScore,
      oralScore,
      advanceScore,
      primaryScale,
      advanceScale,
      forLanguage: 0.1,
      bigger,
    },
    {
      id: uniqid(),
      title: 'Język polski',
      primaryScore,
      oralScore,
      advanceScore,
      primaryScale,
      advanceScale,
      forLanguage: 0.1,
      bigger,
    },
    {
      id: uniqid(),
      title: 'Matematyka',
      primaryScore,
      oralScore,
      advanceScore,
      primaryScale,
      advanceScale,
      hidden: true,
      forLanguage: true,
      bigger,
    },
    {
      id: uniqid(),
      title: 'Przedmiot dodatkowy',
      primaryScore,
      oralScore,
      advanceScore,
      primaryScale,
      advanceScale,
      hidden: true,
      forLanguage: true,
      bigger,
    },
  ],
};
