import uniqid from 'uniqid';
import * as yup from 'yup';

const min = 1;
const max = 7;
const primaryScale = 1;
const advanceScale = 1;
const primaryScore = '';
const advanceScore = '';
const bigger = 0;
const basLevel = 'Poziom \n SL (1-7)';
const extLevel = 'Poziom \n HL (1-7)';

export const grades = {
  basicGrades: new Map([
    ['', ''],
    [0, 0],
    [1, 0],
    [2, 30],
    [3, 40],
    [4, 50],
    [5, 60],
    [6, 70],
    [7, 80],
  ]),
  extGrades: new Map([
    ['', ''],
    [0, 0],
    [1, 0],
    [2, 40],
    [3, 60],
    [4, 80],
    [5, 90],
    [6, 95],
    [7, 100],
  ]),
};

export const subjects = {
  id: uniqid(),
  title: 'Matura Międzynarodowa',
  basLevel,
  extLevel,
  min,
  max,
  subjects: [
    {
      id: uniqid(),
      title: 'Język obcy',
      primaryScore,
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
      advanceScore,
      primaryScale,
      advanceScale,
      hidden: true,
      forLanguage: true,
      bigger,
    },
  ],
};
