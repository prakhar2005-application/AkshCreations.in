import Link from 'next/link';
import { Logo } from '@/components/icons';
import { Button } from '@/components/ui/button';
import { Facebook, Twitter, Instagram } from 'lucide-react';
import { NewsletterForm } from './NewsletterForm';

const footerLinks = {
  categories: [
    { title: 'T-Shirts', href: '/shop?category=t-shirts' },
    { title: 'Mugs', href: '/shop?category=mugs' },
    { title: 'Business Cards', href: '/shop?category=business-cards' },
    { title: 'Banners', href: '/shop?category=banners' },
  ],
  company: [
    { title: 'About Us', href: '/about' },
    { title: 'Blog', href: '/blog' },
    { title: 'Contact Us', href: '/contact' },
    { title: 'AI Suggestions', href: '/ai-suggestion' },
  ],
  support: [
    { title: 'FAQ', href: '#' },
    { title: 'Shipping Policy', href: '#' },
    { title: 'Returns & Exchanges', href: '#' },
    { title: 'Privacy Policy', href: '#' },
  ],
};

export function Footer() {
  return (
    <footer className="bg-secondary text-secondary-foreground">
      <div className="container py-12 lg:py-16">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <Link href="/" className="mb-4 inline-block">
              <Logo />
            </Link>
            <p className="max-w-xs text-sm text-muted-foreground">
              Your one-stop shop for high-quality custom printing.
            </p>
          </div>

          <div>
            <h3 className="mb-4 font-headline text-sm font-semibold">Categories</h3>
            <ul className="space-y-2">
              {footerLinks.categories.map((link) => (
                <li key={link.title}>
                  <Link href={link.href} className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-4 font-headline text-sm font-semibold">Company</h3>
            <ul className="space-y-2">
              {footerLinks.company.map((link) => (
                <li key={link.title}>
                  <Link href={link.href} className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-4 font-headline text-sm font-semibold">Support</h3>
            <ul className="space-y-2">
              {footerLinks.support.map((link) => (
                <li key={link.title}>
                  <Link href={link.href} className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-border pt-8 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex flex-col gap-4">
                 <h3 className="font-headline text-sm font-semibold">Subscribe to our newsletter</h3>
                <NewsletterForm />
            </div>
            <div className="flex items-center space-x-2">
              <Button variant="ghost" size="icon" asChild>
                <a href="#" aria-label="Facebook">
                  <Facebook className="h-5 w-5" />
                </a>
              </Button>
              <Button variant="ghost" size="icon" asChild>
                <a href="#" aria-label="Twitter">
                  <Twitter className="h-5 w-5" />
                </a>
              </Button>
              <Button variant="ghost" size="icon" asChild>
                <a href="#" aria-label="Instagram">
                  <Instagram className="h-5 w-5" />
                </a>
              </Button>
            </div>
        </div>
      </div>
      <div className="bg-muted">
        <div className="container py-4 text-center text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} AkshCreations. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
}
