import Link from 'next/link';
import { useTranslations, useLocale } from 'next-intl';
import { navigationItems } from '@/lib/navigation';
import { Phone, Mail, MessageCircle, MapPin } from 'lucide-react';

export default function Footer() {
  const t = useTranslations();
  const locale = useLocale();

  return (
    <footer className="bg-black text-white relative border-t border-white/5">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-zinc-900/50 to-transparent pointer-events-none" />
      
      <div className="container mx-auto px-4 lg:px-8 py-16 relative z-10">
        <div className="grid gap-12 lg:grid-cols-3">
          {/* About Section */}
          <div>
            <h3 className="font-heading text-2xl font-bold mb-6 text-foreground">
              {t('footer.about')}
            </h3>
            <p className="text-primary font-medium text-sm mb-4 tracking-wide uppercase">
              {t('footer.description')}
            </p>
            <p className="text-muted-foreground text-sm leading-relaxed max-w-sm">
              FRTLUX verbindet deutsche Sicherheit mit türkischer Standortexpertise. 
              Gemeinsam mit Firat Emlak & Premlux begleiten wir Sie bei Ihrer Investition in Istanbul Yenişehir.
            </p>
          </div>

          {/* Quick Navigation */}
          <div>
            <h3 className="font-heading text-xl font-bold mb-6 text-foreground">
              {t('footer.quicklinks')}
            </h3>
            <ul className="space-y-3">
              {navigationItems.map((item) => (
                <li key={item.href}>
                  <Link
                    href={`/${locale}${item.href}`}
                    className="text-muted-foreground hover:text-primary transition-colors text-sm flex items-center group"
                  >
                    <span className="w-0 group-hover:w-2 h-[1px] bg-primary mr-0 group-hover:mr-2 transition-all duration-300 opacity-0 group-hover:opacity-100" />
                    {t(item.labelKey)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-heading text-xl font-bold mb-6 text-foreground">
              {t('footer.contactInfo')}
            </h3>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3 group">
                <div className="p-2 rounded-full bg-white/5 group-hover:bg-primary/10 transition-colors">
                  <MapPin className="text-primary mt-0.5 flex-shrink-0" size={16} />
                </div>
                <span className="text-muted-foreground pt-1">{t('footer.address')}</span>
              </li>
              <li className="flex items-center gap-3 group">
                <div className="p-2 rounded-full bg-white/5 group-hover:bg-primary/10 transition-colors">
                  <Phone className="text-primary flex-shrink-0" size={16} />
                </div>
                <a 
                  href="tel:+49123456789" 
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  {t('footer.phone')}
                </a>
              </li>
              <li className="flex items-center gap-3 group">
                <div className="p-2 rounded-full bg-white/5 group-hover:bg-primary/10 transition-colors">
                  <MessageCircle className="text-primary flex-shrink-0" size={16} />
                </div>
                <a 
                  href="https://wa.me/49123456789" 
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  {t('footer.whatsapp')}
                </a>
              </li>
              <li className="flex items-center gap-3 group">
                <div className="p-2 rounded-full bg-white/5 group-hover:bg-primary/10 transition-colors">
                  <Mail className="text-primary flex-shrink-0" size={16} />
                </div>
                <a 
                  href="mailto:info@frtlux.de" 
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  {t('footer.email')}
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-muted-foreground/60">
          <p>{t('footer.copyright')}</p>
          <div className="flex gap-8">
            <Link 
              href={`/${locale}/impressum`} 
              className="hover:text-primary transition-colors"
            >
              {t('footer.imprint')}
            </Link>
            <Link 
              href={`/${locale}/datenschutz`} 
              className="hover:text-primary transition-colors"
            >
              {t('footer.privacy')}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
