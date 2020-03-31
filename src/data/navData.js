import uniqid from 'uniqid';

export const navData = {
  matury: [
    {
      id: uniqid(), link: '', content: 'Nowa matura',
    },
    {
      id: uniqid(), link: 'stara-matura', content: 'Stara matura',
    },
    {
      id: uniqid(),
      link: 'matura-miedzynarodowa',
      content: 'Matura Międzynarodowa',
      style: { gridColumn: '1 / -1' },
    },
  ],
  pageTitle: 'Kalkulator Punktów',
  rules: {
    content: 'Załącznik z zasadami',
    link: 'https://pg.edu.pl/rekrutacja/zasady-rekrutacji/studia-i-stopnia#DtlsSmmr3',
  },
};
