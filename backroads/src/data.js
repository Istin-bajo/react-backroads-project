import tourImg1 from './images/tour-1.jpeg';
import tourImg2 from './images/tour-2.jpeg';
import tourImg3 from './images/tour-3.jpeg';
import tourImg4 from './images/tour-4.jpeg';

export const pageLinks = [
  { id: 1, href: '#home', text: 'home' },
  { id: 2, href: '#about', text: 'about' },
  { id: 1, href: '#services', text: 'services' },
  { id: 1, href: '#tours', text: 'tours' },
];

export const socialLinks = [
  { id: 1, href: 'https://www.twiter.com', icon: 'fab fa-facebook' },
  { id: 2, href: 'https://www.twiter.com', icon: 'fab fa-twitter' },
  { id: 3, href: 'https://www.twiter.com', icon: 'fab fa-squarespace' },
];

export const services = [
  {
    id: 1,
    icon: 'fas fa-wallet fa-fw',
    title: 'saving money',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, officia.',
  },
  {
    id: 2,
    icon: 'fas fa-tree fa-fw',
    title: 'endless hiking',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, officia.',
  },
  {
    id: 3,
    icon: 'fas fa-socks fa-fw',
    title: 'amazing comfort',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, officia.',
  },
];

export const tours = [
  {
    id: 1,
    img: tourImg1,
    tourDate: 'august 26th, 2020',
    tourTitle: 'Tibet Adventure',
    tourText:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.',
    tourCountry: 'china',
    tourLength: '6 days',
    tourPrice: 'from $2100',
  },
  {
    id: 2,
    img: tourImg2,
    tourDate: 'october 1th, 2020',
    tourTitle: 'best of java',
    tourText:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.',
    tourCountry: 'indonesia',
    tourLength: '11 days',
    tourPrice: 'from $1400',
  },
  {
    id: 3,
    img: tourImg3,
    tourDate: 'september 15th, 2020',
    tourTitle: 'explore hong kong',
    tourText:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.',
    tourCountry: 'hong kong',
    tourLength: '9 days',
    tourPrice: 'from $5000',
  },
  {
    id: 4,
    img: tourImg4,
    tourDate: 'december 5th, 2019',
    tourTitle: 'kenya highlights',
    tourText:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.',
    tourCountry: 'kenya',
    tourLength: '20 days',
    tourPrice: 'from $3300',
  },
];
