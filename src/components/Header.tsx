import { useState } from 'react';
import { Menu, X, Heart, Search, Sparkles, AlertCircle } from 'lucide-react';
import { PageView, WishlistItem } from '../types';

interface HeaderProps {
  currentView: PageView;
  onNavigate: (view: PageView) => void;
  wishlist: WishlistItem[];
  onRemoveFromWishlist: (id: string) => void;
  onSelectPackage: () => void;
}

export default function Header({ currentView, onNavigate, wishlist, onRemoveFromWishlist, onSelectPackage }: HeaderProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isWishlistOpen, setIsWishlistOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  // Hardcoded mock template searchable index to represent our products
  const mockTemplatesToSearch = [
    { id: '1', title: '365 Instagram Post Templates', desc: 'Square 1080x1080 high-converting editorial layouts' },
    { id: '2', title: '365 Content Prompts', desc: 'High-performing hook and layout ideas for daily uploads' },
    { id: '3', title: '365 Done-For-You Captions', desc: 'Pre-written caption spreadsheets with placeholder tags' },
    { id: '4', title: 'Aesthetic Carousel Blueprints', desc: 'Seamless, swipe-able multipage Instagram layouts' },
    { id: '5', title: 'Luxury Instagram Story Templates', desc: 'Portrait 1080x1920 layouts focused on lifestyle content' },
    { id: '6', title: 'Neutral Highlight Covers', desc: '50+ curated gold line-art icon covers for your highlights' },
    { id: '7', title: 'Notion Content Calendar', desc: 'Full workspace template for scheduling and planning drafts' },
    { id: '8', title: 'Ultimate Brand Style Guide', desc: '25-page layout specifying fonts, colors, and typography scales' },
    { id: '9', title: 'AI Prompt Sandbox Creator', desc: 'A custom generator for quick copy layouts' }
  ];

  const searchResults = searchQuery
    ? mockTemplatesToSearch.filter(t => t.title.toLowerCase().includes(searchQuery.toLowerCase()))
    : [];

  const handleLinkClick = (view: PageView) => {
    onNavigate(view);
    setIsMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 bg-white/85 backdrop-blur-md border-b border-brand-beige-200 z-40 transition-all">
      {/* Decorative Top Accent Bar */}
      <div className="bg-gradient-to-r from-brand-pink-200 via-brand-gold-500 to-brand-pink-100 text-[10px] text-brand-charcoal py-1.5 px-4 text-center tracking-widest font-semibold uppercase flex items-center justify-center gap-1.5">
        <Sparkles className="w-3 h-3 animate-pulse text-brand-gold-700" />
        <span>LIMITED OFFER: Use Code <strong className="font-bold">FEM10</strong> for an Extra 10% Off!</span>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">
        {/* Brand Logo - Cormorant Garamond Serif */}
        <button 
          onClick={() => handleLinkClick('home')}
          className="flex flex-col text-left group"
        >
          <span className="font-serif text-xl sm:text-2xl font-bold tracking-tight text-brand-charcoal group-hover:text-brand-gold-600 transition-colors">
            FemSocial <span className="font-serif italic font-normal text-brand-gold-500">Studio</span>
          </span>
          <span className="text-[9px] font-mono tracking-widest text-brand-beige-300 uppercase -mt-1 group-hover:text-brand-charcoal transition-colors">
            AESTHETIC DIGITAL SYSTEMS
          </span>
        </button>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-8 text-xs font-semibold uppercase tracking-widest text-brand-charcoal-light">
          <button 
            onClick={() => handleLinkClick('home')}
            className={`hover:text-brand-gold-600 transition-colors ${currentView === 'home' ? 'text-brand-gold-600' : ''}`}
          >
            Home
          </button>
          <button 
            onClick={() => handleLinkClick('about')}
            className={`hover:text-brand-gold-600 transition-colors ${currentView === 'about' ? 'text-brand-gold-600' : ''}`}
          >
            About Us
          </button>
          <button 
            onClick={() => handleLinkClick('blog')}
            className={`hover:text-brand-gold-600 transition-colors ${currentView === 'blog' ? 'text-brand-gold-600' : ''}`}
          >
            Growth Blog
          </button>
          <button 
            onClick={() => handleLinkClick('contact')}
            className={`hover:text-brand-gold-600 transition-colors ${currentView === 'contact' ? 'text-brand-gold-600' : ''}`}
          >
            Contact
          </button>
        </nav>

        {/* Desktop Interactive Controls (Search, Wishlist, CTA) */}
        <div className="flex items-center gap-4">
          {/* Search Trigger */}
          <button 
            onClick={() => setIsSearchOpen(true)}
            className="p-1.5 rounded-full hover:bg-brand-beige-50 text-brand-charcoal hover:text-brand-gold-600 transition-all"
            title="Search Products"
          >
            <Search className="w-5 h-5" />
          </button>

          {/* Wishlist Trigger */}
          <button 
            onClick={() => setIsWishlistOpen(true)}
            className="p-1.5 rounded-full hover:bg-brand-beige-50 text-brand-charcoal hover:text-brand-pink-300 transition-all relative"
            title="View Wishlist"
          >
            <Heart className={`w-5 h-5 ${wishlist.length > 0 ? 'fill-brand-pink-300 text-brand-pink-300' : ''}`} />
            {wishlist.length > 0 && (
              <span className="absolute -top-1 -right-1 bg-brand-charcoal text-white font-semibold rounded-full w-4.5 h-4.5 flex items-center justify-center text-[9px] border border-white">
                {wishlist.length}
              </span>
            )}
          </button>

          {/* CTA Access Button */}
          <button
            onClick={onSelectPackage}
            className="hidden sm:inline-block bg-brand-charcoal hover:bg-brand-gold-700 text-white text-xs font-semibold uppercase tracking-widest px-4.5 py-2.5 rounded-xl transition-all duration-300 shadow-xs"
          >
            Get templates
          </button>

          {/* Mobile Menu Toggle */}
          <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-1.5 rounded-full hover:bg-brand-beige-50 text-brand-charcoal transition-all"
            aria-label="Toggle Menu"
          >
            {isMobileMenuOpen ? <X className="w-5.5 h-5.5" /> : <Menu className="w-5.5 h-5.5" />}
          </button>
        </div>
      </div>

      {/* Mobile Nav Overlay */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-brand-beige-200 px-4 py-6 space-y-4 shadow-xl flex flex-col text-left text-sm font-semibold uppercase tracking-widest text-brand-charcoal-light">
          <button onClick={() => handleLinkClick('home')} className="hover:text-brand-gold-600 transition-colors py-1.5">Home</button>
          <button onClick={() => handleLinkClick('about')} className="hover:text-brand-gold-600 transition-colors py-1.5">About Us</button>
          <button onClick={() => handleLinkClick('blog')} className="hover:text-brand-gold-600 transition-colors py-1.5">Growth Blog</button>
          <button onClick={() => handleLinkClick('contact')} className="hover:text-brand-gold-600 transition-colors py-1.5">Contact</button>
          <button 
            onClick={() => {
              setIsMobileMenuOpen(false);
              onSelectPackage();
            }}
            className="w-full text-center bg-brand-charcoal text-white text-xs font-semibold uppercase tracking-widest py-3 rounded-xl transition-colors"
          >
            Get Templates Now
          </button>
        </div>
      )}

      {/* Interactive Search Modal Overlay */}
      {isSearchOpen && (
        <div className="fixed inset-0 bg-black/40 backdrop-blur-xs flex items-start justify-center p-4 z-50 pt-20">
          <div className="bg-white border border-brand-beige-200 rounded-2xl max-w-lg w-full shadow-2xl p-6 relative">
            <button 
              onClick={() => {
                setIsSearchOpen(false);
                setSearchQuery('');
              }}
              className="absolute top-4 right-4 p-1.5 rounded-full hover:bg-brand-beige-100 text-brand-charcoal"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="space-y-4">
              <h3 className="font-serif text-xl font-bold text-brand-charcoal">Search the Template Suite</h3>
              
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4.5 h-4.5 text-brand-beige-300" />
                <input
                  type="text"
                  placeholder="e.g. story, calendar, carousel..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-2.5 bg-brand-beige-50 border border-brand-beige-300 rounded-xl text-xs text-brand-charcoal outline-none focus:bg-white focus:border-brand-gold-600 transition-all"
                  autoFocus
                />
              </div>

              {searchQuery ? (
                <div className="space-y-2 max-h-60 overflow-y-auto">
                  {searchResults.length > 0 ? (
                    searchResults.map((item) => (
                      <div 
                        key={item.id}
                        className="p-3 hover:bg-brand-beige-50 rounded-xl border border-brand-beige-100 transition-all flex flex-col text-left"
                      >
                        <span className="font-serif text-sm font-semibold text-brand-charcoal">{item.title}</span>
                        <span className="text-[11px] text-brand-charcoal-light mt-0.5">{item.desc}</span>
                      </div>
                    ))
                  ) : (
                    <div className="text-center py-6 text-xs text-brand-beige-300 flex flex-col items-center gap-2">
                      <AlertCircle className="w-6 h-6" />
                      <span>No matching premium elements found. Try "story" or "captions".</span>
                    </div>
                  )}
                </div>
              ) : (
                <p className="text-xs text-brand-beige-300 text-center py-4">Type a query to filter through our 365 Instagram Content System.</p>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Interactive Wishlist Slider Drawer */}
      {isWishlistOpen && (
        <div className="fixed inset-0 bg-black/40 backdrop-blur-xs flex justify-end z-50">
          {/* Backdrop click close */}
          <div className="absolute inset-0" onClick={() => setIsWishlistOpen(false)} />

          <div className="bg-white w-full max-w-md h-full shadow-2xl relative p-6 flex flex-col justify-between z-10 animate-slide-left">
            <div>
              <div className="flex items-center justify-between border-b border-brand-beige-200 pb-4 mb-6">
                <div className="flex items-center gap-2">
                  <Heart className="w-5 h-5 text-brand-pink-300 fill-brand-pink-300" />
                  <h3 className="font-serif text-xl font-bold text-brand-charcoal">My Creative Wishlist</h3>
                </div>
                <button 
                  onClick={() => setIsWishlistOpen(false)}
                  className="p-1.5 rounded-full hover:bg-brand-beige-100 text-brand-charcoal"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {wishlist.length > 0 ? (
                <div className="space-y-4 overflow-y-auto max-h-[70vh] pr-2 scrollbar-hide">
                  {wishlist.map((item) => (
                    <div 
                      key={item.id}
                      className="flex items-center gap-4 p-3 bg-brand-beige-50 border border-brand-beige-100 rounded-xl relative group"
                    >
                      <div className="w-16 h-16 rounded-lg overflow-hidden border border-brand-beige-200 shrink-0">
                        <img 
                          src={item.image} 
                          alt={item.title} 
                          className="w-full h-full object-cover" 
                          referrerPolicy="no-referrer"
                        />
                      </div>
                      <div className="text-left flex-1">
                        <span className="text-[9px] font-semibold tracking-widest text-brand-gold-700 uppercase">{item.category}</span>
                        <h4 className="font-serif text-xs font-semibold text-brand-charcoal truncate mt-0.5">{item.title}</h4>
                        <button
                          onClick={() => onRemoveFromWishlist(item.id)}
                          className="text-[10px] text-brand-pink-300 hover:text-brand-pink-300/80 mt-1 block hover:underline"
                        >
                          Remove favorite
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-center py-16 space-y-3 text-brand-charcoal-light">
                  <Heart className="w-10 h-10 text-brand-beige-200 mx-auto" />
                  <p className="text-sm">Your creative wishlist is currently empty.</p>
                  <p className="text-xs text-brand-beige-300 max-w-xs mx-auto">Click the heart icon on any template mockup in our preview gallery to pin your favorites here!</p>
                </div>
              )}
            </div>

            <div className="space-y-3 pt-6 border-t border-brand-beige-200">
              <button
                onClick={() => {
                  setIsWishlistOpen(false);
                  onSelectPackage();
                }}
                className="w-full bg-brand-charcoal text-white hover:bg-brand-gold-700 py-3 rounded-xl text-xs font-semibold uppercase tracking-widest transition-all duration-300 shadow-md"
              >
                Secure Access to All Templates
              </button>
              <button
                onClick={() => setIsWishlistOpen(false)}
                className="w-full text-center text-xs text-brand-charcoal-light hover:text-brand-charcoal font-semibold underline"
              >
                Continue Browsing
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
