import { NbMenuItem } from '@nebular/theme';

export const menuItems: NbMenuItem[] = [
  {
    title: 'Home',
    icon: 'home-outline',
    link: '/',
    home: true,
    pathMatch: 'full'
  },
  {
    title: 'About',
    icon: 'info-outline',
    link: '/about',
  },
  {
    title: 'Products',
    icon: 'shopping-cart-outline',
    link: '/products',
  },
  {
    title: 'Admin',
    icon: 'settings-2-outline',
    link: '/admin',
  },
];
