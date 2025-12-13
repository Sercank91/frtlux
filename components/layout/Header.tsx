'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useTranslations, useLocale } from 'next-intl';
import { Menu, X } from 'lucide-react';
import { navigationItems } from '@/lib/navigation';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const t = useTranslations();
  const locale = useLocale();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const switchLocale = (newLocale: string) => {
    const currentPath = pathname.replace(`/${locale}`, '');
    return `/${newLocale}${currentPath}`;
  };

  return (
    <header
      className={`fixed top-0 z-50 w-full transition-all duration-300 border-b ${
        isScrolled
          ? 'bg-black/80 backdrop-blur-md shadow-lg border-white/10'
          : 'bg-transparent border-transparent'
      }`}
    >
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <Link href={`/${locale}`} className="group flex flex-col">
            <span className="font-heading text-2xl font-bold tracking-tight text-white md:text-3xl transition-colors group-hover:text-primary">
              FRTLUX
            </span>
            <span className="text-[10px] font-light uppercase tracking-[0.2em] text-primary/80">
              Deutschland–Istanbul
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:block">
            <ul className="flex items-center gap-8">
              {navigationItems.map((item) => {
                const isActive = pathname === `/${locale}${item.href}`;
                return (
                  <li key={item.href}>
                    <Link
                      href={`/${locale}${item.href}`}
                      className={`relative text-sm font-medium uppercase tracking-wide transition-colors ${
                        isActive ? 'text-primary' : 'text-white/70 hover:text-primary'
                      }`}
                    >
                      {t(item.labelKey)}
                      <span 
                        className={`absolute -bottom-1 left-0 h-[2px] bg-primary transition-all duration-300 ${isActive ? 'w-full' : 'w-0 group-hover:w-full'}`} 
                      />
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>

          {/* Language Switcher & Mobile Menu Toggle */}
          <div className="flex items-center gap-4">
            {/* Language Switcher */}
            <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/5 hover:border-white/10 transition-colors backdrop-blur-sm">
              <Link
                href={switchLocale('tr')}
                className={`text-xs font-medium uppercase transition-colors hover:text-primary ${
                  locale === 'tr' ? 'text-primary' : 'text-white/60'
                }`}
              >
                TR
              </Link>
              <span className="text-white/20">|</span>
              <Link
                href={switchLocale('en')}
                className={`text-xs font-medium uppercase transition-colors hover:text-primary ${
                  locale === 'en' ? 'text-primary' : 'text-white/60'
                }`}
              >
                EN
              </Link>
              <span className="text-white/20">|</span>
              <Link
                href={switchLocale('de')}
                className={`text-xs font-medium uppercase transition-colors hover:text-primary ${
                  locale === 'de' ? 'text-primary' : 'text-white/60'
                }`}
              >
                DE
              </Link>
            </div>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden text-white p-2 hover:text-primary transition-colors"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 top-20 z-40 bg-black/95 backdrop-blur-xl lg:hidden border-t border-white/10">
          <nav className="container mx-auto px-4 py-8">
            <ul className="flex flex-col gap-6">
              {navigationItems.map((item) => {
                const isActive = pathname === `/${locale}${item.href}`;
                return (
                  <li key={item.href}>
                    <Link
                      href={`/${locale}${item.href}`}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className={`block text-xl font-medium uppercase tracking-wide transition-colors ${
                        isActive ? 'text-primary' : 'text-white/80 hover:text-primary'
                      }`}
                    >
                      {t(item.labelKey)}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>
        </div>
      )}
    </header>
  );
}
