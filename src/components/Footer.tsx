import { useState, FormEvent } from 'react';
import { Mail, Check, ArrowRight, Instagram, Heart } from 'lucide-react';
import { PageView } from '../types';

interface FooterProps {
  onNavigate: (view: PageView) => void;
}

export default function Footer({ onNavigate }: FooterProps) {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubscribe = (e: FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubmitted(true);
      setEmail('');
      setTimeout(() => setSubmitted(false), 4000);
    }
  };

  const handleLinkClick = (view: PageView) => {
    onNavigate(view);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-white border-t border-brand-beige-200 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 grid grid-cols-1 md:grid-cols-12 gap-10">
        {/* Brand Details (4 cols) */}
        <div className="md:col-span-4 space-y-4">
          <button 
            onClick={() => handleLinkClick('home')} 
            className="flex flex-col text-left group"
          >
            <span className="font-serif text-2xl font-bold tracking-tight text-brand-charcoal group-hover:text-brand-gold-600 transition-colors">
              Instagram<span className="font-serif italic font-normal text-brand-gold-500">Solution</span>
            </span>
            <span className="text-[10px] font-mono tracking-widest text-brand-beige-300 uppercase -mt-1">
              AESTHETIC DIGITAL SYSTEMS
            </span>
          </button>
          
          <p className="text-xs text-brand-charcoal-light leading-relaxed max-w-sm">
            Providing premium, conversion-tested social media template suites, aesthetic visual structures, and automated content guides designed specifically for female founders, consultants, and content creators.
          </p>

          <div className="flex gap-3 pt-2">
            <a 
              href="https://instagram.com" 
              target="_blank" 
              rel="noreferrer" 
              className="p-2 rounded-full border border-brand-beige-200 hover:border-brand-pink-200 text-brand-charcoal-light hover:text-brand-pink-300 transition-colors"
              aria-label="Instagram"
            >
              <Instagram className="w-4 h-4" />
            </a>
            <a 
              href="https://tiktok.com" 
              target="_blank" 
              rel="noreferrer" 
              className="p-2 rounded-full border border-brand-beige-200 hover:border-brand-pink-200 text-brand-charcoal-light hover:text-brand-pink-300 transition-colors"
              aria-label="TikTok"
            >
              <svg 
                className="w-4 h-4 fill-current" 
                viewBox="0 0 24 24" 
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .77.1v-3.5a6.93 6.93 0 0 0-1.9-.26 6.34 6.34 0 0 0-6.35 6.34 6.34 0 0 0 6.35 6.35 6.34 6.34 0 0 0 6.35-6.35V9a10.42 10.42 0 0 0 4.7 1.09V6.69z" />
              </svg>
            </a>
          </div>
        </div>

        {/* Quick Links Navigation (2 cols) */}
        <div className="md:col-span-2 space-y-4 text-left">
          <h4 className="text-xs font-semibold tracking-widest text-brand-gold-700 uppercase">Studio Navigation</h4>
          <ul className="space-y-2.5 text-xs font-medium text-brand-charcoal-light">
            <li>
              <button onClick={() => handleLinkClick('home')} className="hover:text-brand-gold-600 transition-colors">
                Home Boutique
              </button>
            </li>
            <li>
              <button onClick={() => handleLinkClick('about')} className="hover:text-brand-gold-600 transition-colors">
                About Our Vision
              </button>
            </li>
            <li>
              <button onClick={() => handleLinkClick('blog')} className="hover:text-brand-gold-600 transition-colors">
                The Growth Journal
              </button>
            </li>
            <li>
              <button onClick={() => handleLinkClick('contact')} className="hover:text-brand-gold-600 transition-colors">
                Customer Support
              </button>
            </li>
          </ul>
        </div>

        {/* Legal Policies (2 cols) */}
        <div className="md:col-span-2 space-y-4 text-left">
          <h4 className="text-xs font-semibold tracking-widest text-brand-gold-700 uppercase">Legal Policy</h4>
          <ul className="space-y-2.5 text-xs font-medium text-brand-charcoal-light">
            <li>
              <button onClick={() => handleLinkClick('privacy')} className="hover:text-brand-gold-600 transition-colors">
                Privacy Policy
              </button>
            </li>
            <li>
              <button onClick={() => handleLinkClick('terms')} className="hover:text-brand-gold-600 transition-colors">
                Terms of License
              </button>
            </li>
          </ul>
        </div>

        {/* Newsletter Signup (4 cols) */}
        <div className="md:col-span-4 space-y-4 text-left">
          <h4 className="text-xs font-semibold tracking-widest text-brand-gold-700 uppercase">Aesthetic Weekly Tips</h4>
          <p className="text-xs text-brand-charcoal-light leading-relaxed">
            Sign up to receive free template freebies, viral hook blueprints, and 10% off codes directly in your inbox.
          </p>

          <form onSubmit={handleSubscribe} className="space-y-2">
            <div className="relative">
              <input
                type="email"
                required
                placeholder="Enter your elegant email..."
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-2.5 bg-brand-beige-50 border border-brand-beige-300 rounded-xl text-xs text-brand-charcoal outline-none focus:bg-white focus:border-brand-gold-600 transition-all pr-10"
              />
              <button 
                type="submit" 
                className="absolute right-2.5 top-1/2 -translate-y-1/2 text-brand-charcoal hover:text-brand-gold-600 p-1"
                aria-label="Subscribe"
              >
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

            {submitted && (
              <span className="text-[10px] text-emerald-600 font-semibold block flex items-center gap-1">
                <Check className="w-3 h-3" /> ✓ Subscribed! Check your inbox.
              </span>
            )}
          </form>
        </div>
      </div>

      {/* Footer Bottom (Copyright) */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 pt-12 mt-12 border-t border-brand-beige-100 flex flex-col sm:flex-row items-center justify-between gap-4 text-[10px] text-brand-beige-300">
        <p>© 2026 InstagramSolution. All rights reserved.</p>
        <p className="flex items-center gap-1">
          Designed with <Heart className="w-3 h-3 text-brand-pink-300 fill-brand-pink-300" /> for visionary women entrepreneurs.
        </p>
      </div>
    </footer>
  );
}
