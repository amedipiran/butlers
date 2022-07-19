import images from './images';

const wines = [
  {
    title: 'Cava',
    price: '585:-',
    tags: 'AU | Bottle | Segura Viudas, Brut Reserva',
  },
  {
    title: 'Taittinger',
    price: '950:-',
    tags: 'AU | Bottle | Brut Réserve, Champagne',
  },
  {
    title: 'Piccini',
    price: '445:-',
    tags: 'AU | Bottle | Patriale, Chardonnay',
  },
  {
    title: 'Candy Weisse',
    price: '129:-',
    tags: 'CA | 33cl | 4,5%',
  },
  {
    title: 'Butlers Ljusa Lager',
    price: '76:-',
    tags: 'IE | 40cl | 5,0%',
  },
];

const cocktails = [
  {
    title: 'Aperol Spritz',
    price: '145:-',
    tags: 'Aperol | Villa Marchesi prosecco | soda | 30 ml',
  },
  {
    title: "Klassisk Dry Martini",
    price: '145:-',
    tags: 'Dry Gin | Vermouth | Grön Oliv',
  },
  {
    title: 'Daiquiri',
    price: '145:-',
    tags: 'Rom | Citronjuice | Socker',
  },
  {
    title: 'Old Fashioned',
    price: '145:-',
    tags: 'Bourbon | Farinsocker | Angostura Bitters',
  },
  {
    title: 'Negroni',
    price: '145:-',
    tags: 'Gin | Söt Vermouth | Campari',
  },
];

const awards = [
  {
    imgUrl: images.award02,
    title: 'Bib Gourmond',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur.',
  },
  {
    imgUrl: images.award01,
    title: 'Rising Star',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur.',
  },
  {
    imgUrl: images.award05,
    title: 'AA Hospitality',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur.',
  },
  {
    imgUrl: images.award03,
    title: 'Outstanding Chef',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur.',
  },
];

export default { wines, cocktails, awards };
