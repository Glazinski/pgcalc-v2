import uniqid from 'uniqid';

const unique = true;

export const pageTitle = 'Kalkulator Punktów';

export const navData = [
  {
    id: uniqid(), link: '', content: 'Nowa matura', unique,
  },
  {
    id: uniqid(), link: 'stara-matura', content: 'Stara matura', unique,
  },
  {
    id: uniqid(),
    link: 'matura-miedzynarodowa',
    content: 'Matura Międzynarodowa',
    style: { gridColumn: '1 / -1' },
    unique,
  },
  // { id: 1634, link: 'kontakt', content: 'Kontakt' },
  // { id: 1734, link: 'moje-wyniki', content: 'Moje \n Wyniki' }
];

export const rulesLink = {
  content: 'Załącznik z zasadami',
  link:
    'https://pg.edu.pl/rekrutacja/zasady-rekrutacji/studia-i-stopnia#DtlsSmmr3',
};
