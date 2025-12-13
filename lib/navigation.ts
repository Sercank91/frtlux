export interface NavItem {
  labelKey: string;
  href: string;
}

export const navigationItems: NavItem[] = [
  { labelKey: 'nav.why', href: '/warum-frtlux' },
  { labelKey: 'nav.yenisehir', href: '/istanbul-yenisehir' },
  { labelKey: 'nav.timeline', href: '/entwicklung-arnavutkoy' },
  { labelKey: 'nav.news', href: '/news' },
  { labelKey: 'nav.seminars', href: '/seminare' },
  { labelKey: 'nav.contact', href: '/kontakt' },
];
