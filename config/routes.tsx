interface Route {
  title: string;
  to: string;
  icon: string;
}

const routes: Route[] = [
  {
    title: 'Home',
    to: '/',
    icon: 'https://cdn-icons-png.flaticon.com/64/1946/1946488.png',
  },
  {
    title: 'Campaign',
    to: '/campaign',
    icon: 'https://cdn-icons-png.flaticon.com/64/1946/1946488.png',
  },
  {
    title: 'Content',
    to: '/content',
    icon: 'https://cdn-icons-png.flaticon.com/64/1946/1946488.png',
  },
  {
    title: 'Ship Sample',
    to: '/ship-sample',
    icon: 'https://cdn-icons-png.flaticon.com/64/1946/1946488.png',
  },
  {
    title: 'Billing',
    to: '/billing',
    icon: 'https://cdn-icons-png.flaticon.com/64/1946/1946488.png',
  },
  {
    title: 'Orders',
    to: '/orders',
    icon: 'https://cdn-icons-png.flaticon.com/64/1946/1946488.png',
  },
  {
    title: 'Settings',
    to: '/settings',
    icon: 'https://cdn-icons-png.flaticon.com/64/1946/1946488.png',
  },
];

export default routes;
