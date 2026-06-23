import { useState, useEffect } from 'react';
import { 
  Sparkles, Heart, Check, Clock, ShieldCheck, 
  ChevronDown, ArrowRight, Layout, Calendar, 
  FileText, Zap, Layers, Smartphone, Eye, 
  AlertCircle, MessageSquare, Flame, Quote, 
  BookOpen, Compass, ChevronRight 
} from 'lucide-react';
import { PageView, ProductPackage, WishlistItem } from './types';
import Header from './components/Header';
import Footer from './components/Footer';
import AboutView from './components/AboutView';
import BlogView from './components/BlogView';
import ContactView from './components/ContactView';
import PrivacyTermsView from './components/PrivacyTermsView';
import AiLibraryDemo from './components/AiLibraryDemo';
import CustomerReviews from './components/CustomerReviews';
import { EmailCapturePopup, ExitIntentPopup } from './components/Popups';
import CheckoutModal from './components/CheckoutModal';
import DownloadPortal from './components/DownloadPortal';

// Static packages data
const pricingPackages: ProductPackage[] = [
  {
    id: 'basic',
    name: 'Basic Package',
    price: 29,
    originalPrice: 49,
    tagline: 'Ideal for getting started with beautiful templates.',
    features: [
      '365 Instagram Post Templates (1080x1080)',
      '365 Daily Content Prompts',
      '365 Ready-To-Paste Captions',
      'Neutral Sand & Cream color palette',
      'Instant Canva direct access links',
      'Free Canva compatibility'
    ]
  },
  {
    id: 'premium',
    name: 'Premium Package',
    price: 79,
    originalPrice: 119,
    tagline: 'Perfect for established creators & growing consultants.',
    features: [
      '365 Instagram Post Templates (1080x1080)',
      '365 Daily Content Prompts',
      '365 Ready-To-Paste Captions',
      'Instagram Story Templates (1080x1920)',
      'Instagram Carousel Blueprints',
      '50 Curated Highlight Covers',
      'Notion Content Calendar Template',
      'Instant Canva access + email support'
    ]
  },
  {
    id: 'ultimate',
    name: 'Ultimate Bundle',
    price: 149,
    originalPrice: 249,
    tagline: 'The complete creative agency pipeline in one click.',
    badge: 'BEST VALUE',
    isBestValue: true,
    features: [
      '365 Instagram Post Templates (1080x1080)',
      '365 Daily Content Prompts',
      '365 Ready-To-Paste Captions',
      'Instagram Story Templates (1080x1920)',
      'Instagram Carousel Blueprints',
      '50 Curated Highlight Covers',
      'Notion Content Calendar Template',
      '25-Page Brand Style Guide spreadsheet',
      'Interactive AI Content Prompt Library',
      'Priority lifetime updates & premium support'
    ]
  }
];

// Mock previews database for our Product Preview Gallery
const galleryPreviews = [
  { id: 'p1', category: 'feed', title: 'Elegant Quote Board', image: 'https://picsum.photos/seed/quote/400/400' },
  { id: 'p2', category: 'feed', title: 'Educational Listicle', image: 'https://picsum.photos/seed/edu/400/400' },
  { id: 'p3', category: 'story', title: 'Q&A Sticker Layout', image: 'https://picsum.photos/seed/storyqa/400/711' },
  { id: 'p4', category: 'carousel', title: 'Seamless Swipe Part 1', image: 'https://picsum.photos/seed/caro1/400/400' },
  { id: 'p5', category: 'carousel', title: 'Seamless Swipe Part 2', image: 'https://picsum.photos/seed/caro2/400/400' },
  { id: 'p6', category: 'story', title: 'Morning Coffee Behind-Scenes', image: 'https://picsum.photos/seed/storybts/400/711' },
  { id: 'p7', category: 'covers', title: 'Line Art Woman Silhouette', image: 'https://picsum.photos/seed/cover1/400/400' },
  { id: 'p8', category: 'covers', title: 'Elegant Botanical Leaf', image: 'https://picsum.photos/seed/cover2/400/400' }
];

export default function App() {
  const [currentView, setCurrentView] = useState<PageView>('home');
  const [wishlist, setWishlist] = useState<WishlistItem[]>([]);
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);
  const [selectedPkg, setSelectedPkg] = useState<ProductPackage | null>(null);
  
  // Post-checkout success details
  const [customerName, setCustomerName] = useState('');
  const [purchasedPackageName, setPurchasedPackageName] = useState('');

  // FAQ open state accordion
  const [activeFaqIdx, setActiveFaqIdx] = useState<number | null>(null);

  // Gallery active filter
  const [activeGalleryTab, setActiveGalleryTab] = useState<'all' | 'feed' | 'story' | 'carousel' | 'covers'>('all');

  // Trigger scroll to pricing
  const handleScrollToPricing = () => {
    // If not on homepage, switch there first
    if (currentView !== 'home') {
      setCurrentView('home');
      setTimeout(() => {
        const el = document.getElementById('pricing-plans');
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 300);
    } else {
      const el = document.getElementById('pricing-plans');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Open checkout for specific product package
  const handleOpenCheckout = (pkg: ProductPackage) => {
    setSelectedPkg(pkg);
    setIsCheckoutOpen(true);
  };

  const handleCheckoutSuccess = (name: string, packageName: string) => {
    setCustomerName(name);
    setPurchasedPackageName(packageName);
    setCurrentView('downloads');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleToggleWishlist = (item: WishlistItem) => {
    const exists = wishlist.some(w => w.id === item.id);
    if (exists) {
      setWishlist(wishlist.filter(w => w.id !== item.id));
    } else {
      setWishlist([...wishlist, item]);
    }
  };

  // Previews based on gallery tab
  const filteredGallery = activeGalleryTab === 'all'
    ? galleryPreviews
    : galleryPreviews.filter(g => g.category === activeGalleryTab);

  return (
    <div className="flex flex-col min-h-screen bg-brand-beige-50">
      {/* Popups to boost conversion */}
      <EmailCapturePopup />
      <ExitIntentPopup />

      {/* Navigation Header */}
      <Header 
        currentView={currentView} 
        onNavigate={setCurrentView} 
        wishlist={wishlist}
        onRemoveFromWishlist={(id) => setWishlist(wishlist.filter(w => w.id !== id))}
        onSelectPackage={handleScrollToPricing}
      />

      {/* Main Content Layout */}
      <main className="flex-grow">
        {currentView === 'downloads' && (
          <DownloadPortal 
            customerName={customerName} 
            packageName={purchasedPackageName} 
            onNavigateHome={() => setCurrentView('home')} 
          />
        )}

        {currentView === 'about' && <AboutView />}

        {currentView === 'blog' && <BlogView />}

        {currentView === 'contact' && <ContactView />}

        {currentView === 'privacy' && <PrivacyTermsView type="privacy" />}

        {currentView === 'terms' && <PrivacyTermsView type="terms" />}

        {currentView === 'home' && (
          <div className="space-y-24 pb-20">
            {/* 1. HERO SECTION */}
            <section className="relative overflow-hidden py-16 md:py-24 border-b border-brand-beige-200 bg-gradient-feminine">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                
                {/* Hero Sales Text (7 cols) */}
                <div className="lg:col-span-7 space-y-6 text-left">
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-brand-pink-100 text-brand-pink-300 border border-brand-pink-200 tracking-wide uppercase">
                    <Sparkles className="w-3.5 h-3.5" /> 2026 Content Evolution
                  </div>

                  <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif text-brand-charcoal leading-tight tracking-tight font-bold">
                    Create a Month of Instagram Content in <span className="font-serif italic font-normal text-brand-gold-600 block sm:inline">Just One Hour</span>
                  </h1>

                  <p className="text-sm sm:text-base md:text-lg text-brand-charcoal-light max-w-2xl leading-relaxed">
                    Beautiful done-for-you templates, captions, and content ideas designed for female entrepreneurs. Look cohesive, attract dream leads, and claim your hours back from Canva.
                  </p>

                  <div className="flex flex-col sm:flex-row gap-4 pt-2">
                    <button
                      onClick={handleScrollToPricing}
                      className="bg-brand-charcoal hover:bg-brand-gold-700 text-white text-xs sm:text-sm font-semibold uppercase tracking-widest px-8 py-4 rounded-xl transition-all duration-300 shadow-md flex items-center justify-center gap-2"
                    >
                      <span>Get Instant Access</span>
                      <ArrowRight className="w-4.5 h-4.5" />
                    </button>
                    <a
                      href="#sandbox"
                      onClick={(e) => {
                        e.preventDefault();
                        const el = document.getElementById('sandbox');
                        if (el) el.scrollIntoView({ behavior: 'smooth' });
                      }}
                      className="inline-flex items-center justify-center border border-brand-beige-300 hover:border-brand-charcoal bg-white/50 hover:bg-white text-brand-charcoal-light hover:text-brand-charcoal text-xs sm:text-sm font-semibold uppercase tracking-widest px-8 py-4 rounded-xl transition-all duration-300"
                    >
                      Try prompt sandbox
                    </a>
                  </div>

                  {/* Trust Indicators */}
                  <div className="grid grid-cols-3 gap-4 pt-6 border-t border-brand-beige-200">
                    <div>
                      <span className="block text-2xl font-serif font-bold text-brand-charcoal">15k+</span>
                      <span className="block text-[10px] text-brand-gold-700 font-mono uppercase tracking-wider">FOUNDERS TRUSTED</span>
                    </div>
                    <div>
                      <span className="block text-2xl font-serif font-bold text-brand-charcoal">100%</span>
                      <span className="block text-[10px] text-brand-gold-700 font-mono uppercase tracking-wider">EDITABLE IN CANVA</span>
                    </div>
                    <div>
                      <span className="block text-2xl font-serif font-bold text-brand-charcoal">INSTANT</span>
                      <span className="block text-[10px] text-brand-gold-700 font-mono uppercase tracking-wider">DIGITAL DELIVERY</span>
                    </div>
                  </div>
                </div>

                {/* Hero Asset Frame (5 cols) */}
                <div className="lg:col-span-5 relative">
                  <div className="p-3 bg-white border border-brand-beige-200 rounded-3xl shadow-xl rotate-1 hover:rotate-0 transition-all duration-500">
                    <img
                      src="/src/assets/images/girl_filming_instagram_reel_1782258756354.jpg"
                      alt="Female entrepreneur filming an Instagram Reel"
                      className="rounded-2xl w-full h-auto object-cover"
                      referrerPolicy="no-referrer"
                    />
                    
                    {/* Floating conversion badge */}
                    <div className="absolute -bottom-6 -right-6 p-4 bg-brand-gold-100 border border-brand-gold-500/30 rounded-2xl shadow-lg max-w-[180px] space-y-1 text-left">
                      <div className="flex text-brand-gold-600">
                        {Array.from({ length: 5 }).map((_, i) => <Check key={i} className="w-3 h-3 fill-brand-gold-600" />)}
                      </div>
                      <p className="font-serif text-xs font-bold text-brand-charcoal">"Absolutely gorgeous templates!"</p>
                      <span className="text-[9px] text-brand-gold-700 font-mono font-medium block">AMARA V., BRAND STRATEGIST</span>
                    </div>
                  </div>
                </div>

              </div>
            </section>

            {/* 2. PROBLEM SECTION */}
            <section className="max-w-7xl mx-auto px-4 sm:px-6">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                {/* Big Bold Headline Left (5 cols) */}
                <div className="lg:col-span-5 space-y-4 text-left">
                  <span className="text-xs font-semibold tracking-widest text-brand-gold-700 uppercase">THE FRUSTRATION IS REAL</span>
                  <h2 className="text-3xl md:text-4xl font-serif text-brand-charcoal leading-tight font-bold">
                    Are you wasting hours fighting with blank screens?
                  </h2>
                  <p className="text-sm text-brand-charcoal-light leading-relaxed">
                    Most female entrepreneurs spend up to 10 hours a week designing graphics from scratch, only to feel frustrated by low engagement and a feed that doesn't represent their expertise.
                  </p>
                </div>

                {/* Grid of frustrations Right (7 cols) */}
                <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6 text-left">
                  <div className="p-5 rounded-2xl bg-white border border-brand-beige-200 space-y-2.5">
                    <div className="w-8 h-8 rounded-full bg-brand-pink-100 text-brand-pink-300 flex items-center justify-center text-xs font-bold font-mono">1</div>
                    <h4 className="font-serif font-bold text-brand-charcoal">Canva Overwhelm</h4>
                    <p className="text-xs text-brand-charcoal-light leading-relaxed">
                      Scrolling endlessly through millions of mismatched Canva components, feeling overwhelmed and settling for graphics you don't love.
                    </p>
                  </div>

                  <div className="p-5 rounded-2xl bg-white border border-brand-beige-200 space-y-2.5">
                    <div className="w-8 h-8 rounded-full bg-brand-pink-100 text-brand-pink-300 flex items-center justify-center text-xs font-bold font-mono">2</div>
                    <h4 className="font-serif font-bold text-brand-charcoal">Blank Grid Anxiety</h4>
                    <p className="text-xs text-brand-charcoal-light leading-relaxed">
                      Staring at an empty grid draft at 6:00 PM, struggling with write block, and wondering "what should I post to actually make sales today?"
                    </p>
                  </div>

                  <div className="p-5 rounded-2xl bg-white border border-brand-beige-200 space-y-2.5">
                    <div className="w-8 h-8 rounded-full bg-brand-pink-100 text-brand-pink-300 flex items-center justify-center text-xs font-bold font-mono">3</div>
                    <h4 className="font-serif font-bold text-brand-charcoal">Mismatched Colors</h4>
                    <p className="text-xs text-brand-charcoal-light leading-relaxed">
                      Your feed looks chaotic and scattered. Without a cohesive style guide, your profile looks unprofessional to premium client leads.
                    </p>
                  </div>

                  <div className="p-5 rounded-2xl bg-white border border-brand-beige-200 space-y-2.5">
                    <div className="w-8 h-8 rounded-full bg-brand-pink-100 text-brand-pink-300 flex items-center justify-center text-xs font-bold font-mono">4</div>
                    <h4 className="font-serif font-bold text-brand-charcoal">Zero DM Inquiries</h4>
                    <p className="text-xs text-brand-charcoal-light leading-relaxed">
                      Posting random lifestyle quotes that get polite likes but never convert into actual coaching clients or ecommerce orders.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* 3. SOLUTION SECTION */}
            <section className="bg-brand-beige-100 py-16 md:py-24 border-y border-brand-beige-200 overflow-hidden">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                
                {/* Mockup Display Left (5 cols) */}
                <div className="lg:col-span-5 relative">
                  <div className="p-3 bg-white border border-brand-beige-200 rounded-3xl shadow-xl">
                    <img
                      src="/src/assets/images/instagram_feed_mockup_1782253817982.jpg"
                      alt="Feminine Instagram Templates Mockup"
                      className="rounded-2xl w-full h-auto object-cover"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                </div>

                {/* Copy Solution Right (7 cols) */}
                <div className="lg:col-span-7 space-y-6 text-left">
                  <span className="text-xs font-semibold tracking-widest text-brand-gold-700 uppercase">THE ULTIMATE WORKFLOW UPGRADE</span>
                  <h2 className="text-3xl md:text-4xl font-serif text-brand-charcoal leading-tight font-bold">
                    Meet the 365 Feminine Instagram Content System
                  </h2>
                  <p className="text-sm text-brand-charcoal-light leading-relaxed">
                    This isn't just another pack of basic graphics. It is a **fully integrated social media growth framework** designed with luxurious, eye-safe, warm sand and rose palettes.
                  </p>
                  <p className="text-sm text-brand-charcoal-light leading-relaxed">
                    By combining fully pre-designed aesthetic posts, captions, carousel guides, and interactive prompt plannings, we give you the keys to a high-end creative agency pipeline for a fraction of the cost.
                  </p>

                  <div className="space-y-3">
                    <div className="flex gap-3 text-xs text-brand-charcoal-light">
                      <div className="w-5 h-5 rounded-full bg-brand-gold-100 text-brand-gold-700 flex items-center justify-center shrink-0">✓</div>
                      <span>**Zero design expertise required**: Open templates directly in Canva free.</span>
                    </div>
                    <div className="flex gap-3 text-xs text-brand-charcoal-light">
                      <div className="w-5 h-5 rounded-full bg-brand-gold-100 text-brand-gold-700 flex items-center justify-center shrink-0">✓</div>
                      <span>**Aesthetic coherence**: Maintain gorgeous, professional neutral tones.</span>
                    </div>
                    <div className="flex gap-3 text-xs text-brand-charcoal-light">
                      <div className="w-5 h-5 rounded-full bg-brand-gold-100 text-brand-gold-700 flex items-center justify-center shrink-0">✓</div>
                      <span>**Psychological copy outlines**: Formatted captions with call-to-actions built in.</span>
                    </div>
                  </div>
                  
                  <div className="pt-2">
                    <button
                      onClick={handleScrollToPricing}
                      className="bg-brand-charcoal hover:bg-brand-gold-700 text-white text-xs font-semibold uppercase tracking-widest px-6 py-3.5 rounded-xl transition-all"
                    >
                      Unlock the Whole System Now
                    </button>
                  </div>
                </div>

              </div>
            </section>

            {/* 4. WHAT'S INCLUDED SECTION */}
            <section className="max-w-7xl mx-auto px-4 sm:px-6 space-y-12">
              <div className="text-center max-w-xl mx-auto space-y-3">
                <span className="text-xs font-semibold tracking-widest text-brand-gold-700 uppercase">THE WHOLE BOUTIQUE ACCESS</span>
                <h2 className="text-3xl md:text-4xl font-serif text-brand-charcoal leading-tight font-bold">
                  Everything You Need to Look Like a Premium Brand
                </h2>
                <p className="text-sm text-brand-charcoal-light">
                  No subscriptions, no hidden fees. Get lifetime access to a complete social media marketing department in a single download.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="p-6 bg-white border border-brand-beige-200 rounded-3xl space-y-4 text-left hover:border-brand-gold-500/30 transition-all">
                  <div className="w-12 h-12 rounded-2xl bg-brand-pink-100 text-brand-pink-300 flex items-center justify-center">
                    <Layout className="w-6 h-6" />
                  </div>
                  <h4 className="font-serif text-lg font-bold text-brand-charcoal">365 Instagram Post Templates</h4>
                  <p className="text-xs text-brand-charcoal-light leading-relaxed">
                    Fully designed, cohesive square templates (1080x1080) optimized for educational charts, inspirational quotes, and high-converting notifications.
                  </p>
                </div>

                <div className="p-6 bg-white border border-brand-beige-200 rounded-3xl space-y-4 text-left hover:border-brand-gold-500/30 transition-all">
                  <div className="w-12 h-12 rounded-2xl bg-brand-gold-100 text-brand-gold-700 flex items-center justify-center">
                    <Compass className="w-6 h-6" />
                  </div>
                  <h4 className="font-serif text-lg font-bold text-brand-charcoal">365 Daily Content Prompts</h4>
                  <p className="text-xs text-brand-charcoal-light leading-relaxed">
                    Stop guessing. Our structured prompt database outlines exactly what content format to post every single day of the year to build authority.
                  </p>
                </div>

                <div className="p-6 bg-white border border-brand-beige-200 rounded-3xl space-y-4 text-left hover:border-brand-gold-500/30 transition-all">
                  <div className="w-12 h-12 rounded-2xl bg-brand-beige-200 text-brand-charcoal-light flex items-center justify-center">
                    <FileText className="w-6 h-6" />
                  </div>
                  <h4 className="font-serif text-lg font-bold text-brand-charcoal">365 Done-for-You Captions</h4>
                  <p className="text-xs text-brand-charcoal-light leading-relaxed">
                    Pre-written caption spreadsheets optimized with strategic placeholder tags. Simply insert your niche details and post in under 2 minutes.
                  </p>
                </div>

                <div className="p-6 bg-white border border-brand-beige-200 rounded-3xl space-y-4 text-left hover:border-brand-gold-500/30 transition-all">
                  <div className="w-12 h-12 rounded-2xl bg-brand-pink-100 text-brand-pink-300 flex items-center justify-center">
                    <Layers className="w-6 h-6" />
                  </div>
                  <h4 className="font-serif text-lg font-bold text-brand-charcoal">Aesthetic Carousel Blueprints</h4>
                  <p className="text-xs text-brand-charcoal-light leading-relaxed">
                    Seamless, swipe-able multipage carousel frames engineered to skyrocket your Instagram watch time and drive saves/shares on autopilot.
                  </p>
                </div>

                <div className="p-6 bg-white border border-brand-beige-200 rounded-3xl space-y-4 text-left hover:border-brand-gold-500/30 transition-all">
                  <div className="w-12 h-12 rounded-2xl bg-brand-gold-100 text-brand-gold-700 flex items-center justify-center">
                    <Smartphone className="w-6 h-6" />
                  </div>
                  <h4 className="font-serif text-lg font-bold text-brand-charcoal">Luxury Story Templates</h4>
                  <p className="text-xs text-brand-charcoal-light leading-relaxed">
                    Vertical 1080x1920 frames designed for daily behind-the-scenes vlogs, client testimonials, Q&A blocks, and sales announcements.
                  </p>
                </div>

                <div className="p-6 bg-white border border-brand-beige-200 rounded-3xl space-y-4 text-left hover:border-brand-gold-500/30 transition-all">
                  <div className="w-12 h-12 rounded-2xl bg-brand-beige-200 text-brand-charcoal-light flex items-center justify-center">
                    <Heart className="w-6 h-6" />
                  </div>
                  <h4 className="font-serif text-lg font-bold text-brand-charcoal">Neutral Highlight Covers</h4>
                  <p className="text-xs text-brand-charcoal-light leading-relaxed">
                    50+ curated minimalist line-art and letter highlight covers to keep your profile landing page looking impeccably clean and polished.
                  </p>
                </div>

                <div className="p-6 bg-white border border-brand-beige-200 rounded-3xl space-y-4 text-left hover:border-brand-gold-500/30 transition-all">
                  <div className="w-12 h-12 rounded-2xl bg-brand-gold-100 text-brand-gold-700 flex items-center justify-center">
                    <Calendar className="w-6 h-6" />
                  </div>
                  <h4 className="font-serif text-lg font-bold text-brand-charcoal">Notion Content Calendar</h4>
                  <p className="text-xs text-brand-charcoal-light leading-relaxed">
                    A beautifully mapped Notion workspace template that acts as your central dashboard. Draft, organize, schedule, and archive your assets.
                  </p>
                </div>

                <div className="p-6 bg-white border border-brand-beige-200 rounded-3xl space-y-4 text-left hover:border-brand-gold-500/30 transition-all">
                  <div className="w-12 h-12 rounded-2xl bg-brand-pink-100 text-brand-pink-300 flex items-center justify-center">
                    <BookOpen className="w-6 h-6" />
                  </div>
                  <h4 className="font-serif text-lg font-bold text-brand-charcoal">Ultimate Brand Style Guide</h4>
                  <p className="text-xs text-brand-charcoal-light leading-relaxed">
                    A 25-page layout specifying professional typography, color harmony guidelines, image framing, and grid hierarchy standards.
                  </p>
                </div>

                <div className="p-6 bg-white border border-brand-beige-200 rounded-3xl space-y-4 text-left hover:border-brand-gold-500/30 transition-all">
                  <div className="w-12 h-12 rounded-2xl bg-brand-beige-200 text-brand-charcoal-light flex items-center justify-center">
                    <Sparkles className="w-6 h-6 animate-pulse" />
                  </div>
                  <h4 className="font-serif text-lg font-bold text-brand-charcoal">AI Content Prompt Library</h4>
                  <p className="text-xs text-brand-charcoal-light leading-relaxed">
                    Our customized, high-converting sandbox generator that maps perfect strategy categories with strategic copy blocks in under 10 seconds.
                  </p>
                </div>
              </div>
            </section>

            {/* 5. BENEFITS SECTION */}
            <section className="bg-white py-16 md:py-24 border-y border-brand-beige-200">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                
                {/* Benefits Copy Left */}
                <div className="space-y-6 text-left">
                  <span className="text-xs font-semibold tracking-widest text-brand-gold-700 uppercase">THE BUSINESS OUTCOMES</span>
                  <h2 className="text-3xl md:text-4xl font-serif text-brand-charcoal leading-tight font-bold">
                    What happens when you run a systematic social workflow?
                  </h2>
                  <p className="text-sm text-brand-charcoal-light leading-relaxed">
                    When you stop treating social media as a last-minute chore and start using cohesive systems, your business undergoes an immediate, effortless upgrade.
                  </p>
                  
                  <div className="space-y-4 pt-4">
                    <div className="flex gap-4">
                      <div className="w-10 h-10 rounded-full bg-brand-pink-100 text-brand-pink-300 flex items-center justify-center font-bold shrink-0">✓</div>
                      <div>
                        <h4 className="font-serif font-bold text-brand-charcoal text-base">Save 10+ Hours Every Week</h4>
                        <p className="text-xs text-brand-charcoal-light mt-0.5">Instead of staring at a blank screen, pick a template, paste the prompt, and publish. Use your recovered time to serve clients.</p>
                      </div>
                    </div>

                    <div className="flex gap-4">
                      <div className="w-10 h-10 rounded-full bg-brand-gold-100 text-brand-gold-700 flex items-center justify-center font-bold shrink-0">✓</div>
                      <div>
                        <h4 className="font-serif font-bold text-brand-charcoal text-base">Establish Premium Trust</h4>
                        <p className="text-xs text-brand-charcoal-light mt-0.5">High-quality, balanced typography and editorial styling command premium rates. Make your brand match your level of expert advice.</p>
                      </div>
                    </div>

                    <div className="flex gap-4">
                      <div className="w-10 h-10 rounded-full bg-brand-beige-200 text-brand-charcoal-light flex items-center justify-center font-bold shrink-0">✓</div>
                      <div>
                        <h4 className="font-serif font-bold text-brand-charcoal text-base">Compound Organic Growth</h4>
                        <p className="text-xs text-brand-charcoal-light mt-0.5">Consistently gorgeous, scroll-stopping visuals paired with our pre-tested hooks earn double the likes, shares, and bookmarks.</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Benefits Quote & Mock Card Right */}
                <div className="p-8 rounded-3xl bg-brand-beige-100 border border-brand-beige-200 text-left relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-brand-gold-100 rounded-full blur-3xl opacity-30 -z-10" />
                  <Quote className="w-10 h-10 text-brand-gold-600/40" />
                  
                  <blockquote className="font-serif italic text-lg text-brand-charcoal mt-2 leading-relaxed">
                    "I was on the verge of hiring an Instagram manager for $800/month because I was just so exhausted. Purchasing the Ultimate Bundle saved my sanity and my budget. I schedule everything on Monday mornings, and my grid looks better than ever."
                  </blockquote>

                  <div className="flex gap-3 items-center mt-6 border-t border-brand-beige-200 pt-4">
                    <div className="w-10 h-10 rounded-full bg-brand-pink-100 text-brand-pink-300 flex items-center justify-center font-bold">K</div>
                    <div>
                      <span className="block text-xs font-semibold text-brand-charcoal">Katrina Sterling</span>
                      <span className="block text-[10px] text-brand-gold-700 font-mono">FINANCIAL ADVISOR & COACH</span>
                    </div>
                  </div>
                </div>

              </div>
            </section>

            {/* 6. PRODUCT PREVIEW GALLERY */}
            <section className="max-w-7xl mx-auto px-4 sm:px-6 space-y-8">
              <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
                <div className="text-left space-y-2">
                  <span className="text-xs font-semibold tracking-widest text-brand-gold-700 uppercase">STUDIO SPECIMENS</span>
                  <h2 className="text-3xl md:text-4xl font-serif text-brand-charcoal">Explore the Template Suite</h2>
                  <p className="text-xs text-brand-charcoal-light max-w-md">
                    Filter through live previews of our visual elements. Pin your favorites to your wishlist using the heart button.
                  </p>
                </div>

                {/* Tabs to filter */}
                <div className="flex flex-wrap gap-2 self-start md:self-end">
                  {['all', 'feed', 'story', 'carousel', 'covers'].map((tab) => (
                    <button
                      key={tab}
                      onClick={() => setActiveGalleryTab(tab as any)}
                      className={`px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-wider transition-colors ${
                        activeGalleryTab === tab
                          ? 'bg-brand-charcoal text-white shadow-xs'
                          : 'bg-brand-beige-100 text-brand-charcoal-light hover:bg-brand-beige-200'
                      }`}
                    >
                      {tab === 'all' ? 'All Previews' : tab}
                    </button>
                  ))}
                </div>
              </div>

              {/* Gallery Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
                {filteredGallery.map((item) => {
                  const isWished = wishlist.some(w => w.id === item.id);
                  return (
                    <div 
                      key={item.id}
                      className="bg-white border border-brand-beige-200 rounded-2xl overflow-hidden group hover:border-brand-gold-500/30 transition-all duration-300 flex flex-col relative"
                    >
                      <div className={`overflow-hidden border-b border-brand-beige-100 relative ${item.category === 'story' ? 'aspect-[9/16]' : 'aspect-square'}`}>
                        <img 
                          src={item.image} 
                          alt={item.title} 
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                          referrerPolicy="no-referrer"
                        />
                        
                        {/* Wishlist toggle absolute button */}
                        <button
                          onClick={() => handleToggleWishlist(item)}
                          className="absolute top-3 right-3 p-2 rounded-full bg-white/90 backdrop-blur-xs text-brand-charcoal hover:text-brand-pink-300 hover:scale-110 shadow-sm transition-all"
                          title="Save to Wishlist"
                        >
                          <Heart className={`w-4.5 h-4.5 ${isWished ? 'fill-brand-pink-300 text-brand-pink-300' : 'text-brand-charcoal'}`} />
                        </button>

                        <span className="absolute bottom-3 left-3 bg-white/95 backdrop-blur-xs px-2.5 py-0.5 rounded text-[9px] font-semibold text-brand-gold-700 tracking-wider uppercase shadow-2xs">
                          {item.category}
                        </span>
                      </div>

                      <div className="p-3 text-left">
                        <h4 className="font-serif text-xs font-semibold text-brand-charcoal truncate">{item.title}</h4>
                        <p className="text-[10px] text-brand-beige-300 font-mono mt-0.5">EDITABLE IN CANVA</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </section>

            {/* 7. CUSTOMER TESTIMONIALS SECTION */}
            <section className="bg-brand-beige-100 py-16 md:py-24 border-y border-brand-beige-200">
              <div className="max-w-7xl mx-auto px-4 sm:px-6">
                <CustomerReviews />
              </div>
            </section>

            {/* AI Sandbox Playground Hook (Interactivity!) */}
            <section id="sandbox" className="max-w-7xl mx-auto px-4 sm:px-6 scroll-mt-20">
              <AiLibraryDemo />
            </section>

            {/* 8. PRICING SECTION */}
            <section id="pricing-plans" className="max-w-7xl mx-auto px-4 sm:px-6 space-y-12 scroll-mt-20">
              <div className="text-center max-w-xl mx-auto space-y-3">
                <span className="text-xs font-semibold tracking-widest text-brand-gold-700 uppercase font-mono">PREMIUM INVESTMENT PLANS</span>
                <h2 className="text-3xl md:text-4xl font-serif text-brand-charcoal font-bold">Invest in Your Brand Aesthetic</h2>
                <p className="text-sm text-brand-charcoal-light">
                  Choose the plan that matches your current business level. All purchases unlock immediate, lifetime digital download delivery.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
                {pricingPackages.map((pkg) => (
                  <div 
                    key={pkg.id}
                    className={`bg-white border-2 rounded-3xl p-6 md:p-8 flex flex-col justify-between text-left relative transition-all duration-300 hover:shadow-lg ${
                      pkg.isBestValue 
                        ? 'border-brand-gold-500 ring-2 ring-brand-gold-500/15 scale-100 md:scale-102 z-10' 
                        : 'border-brand-beige-200 hover:border-brand-gold-500/30'
                    }`}
                  >
                    {pkg.badge && (
                      <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-brand-gold-500 text-white font-semibold text-[10px] tracking-widest px-4 py-1 rounded-full uppercase shadow-sm">
                        {pkg.badge}
                      </span>
                    )}

                    <div className="space-y-6">
                      {/* Package Name & Price */}
                      <div>
                        <h4 className="font-serif text-2xl font-bold text-brand-charcoal">{pkg.name}</h4>
                        <p className="text-xs text-brand-charcoal-light mt-1 min-h-[32px]">{pkg.tagline}</p>
                        
                        <div className="flex items-baseline gap-2 mt-4">
                          <span className="text-4xl font-serif font-bold text-brand-charcoal">${pkg.price}</span>
                          {pkg.originalPrice && (
                            <span className="text-sm text-brand-beige-300 line-through">${pkg.originalPrice}</span>
                          )}
                          <span className="text-[10px] text-brand-gold-700 font-mono font-bold uppercase tracking-wider">USD • ONE-TIME</span>
                        </div>
                      </div>

                      {/* Features Bullet List */}
                      <ul className="border-t border-brand-beige-200 pt-6 space-y-3">
                        {pkg.features.map((feat, idx) => (
                          <li key={idx} className="flex gap-3 text-xs text-brand-charcoal-light leading-relaxed">
                            <Check className="w-4 h-4 text-brand-gold-600 shrink-0 mt-0.5" />
                            <span>{feat}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Purchase Button */}
                    <div className="pt-8 border-t border-brand-beige-100 mt-8">
                      <button
                        onClick={() => handleOpenCheckout(pkg)}
                        className={`w-full py-3.5 rounded-xl font-semibold text-xs uppercase tracking-widest transition-all duration-300 shadow-md ${
                          pkg.isBestValue 
                            ? 'bg-brand-charcoal hover:bg-brand-gold-700 text-white' 
                            : 'bg-brand-beige-100 hover:bg-brand-charcoal hover:text-white text-brand-charcoal-light border border-brand-beige-300'
                        }`}
                      >
                        Buy Now • Get Instant Access
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* 9. FAQ SECTION */}
            <section className="bg-white py-16 md:py-24 border-y border-brand-beige-200">
              <div className="max-w-4xl mx-auto px-4 sm:px-6 grid grid-cols-1 md:grid-cols-12 gap-12 items-start">
                
                {/* FAQ Intro Left (4 cols) */}
                <div className="md:col-span-4 space-y-4 text-left">
                  <span className="text-xs font-semibold tracking-widest text-brand-gold-700 uppercase">COMMON OBJECTIONS</span>
                  <h2 className="text-3xl font-serif text-brand-charcoal font-bold leading-tight">Got Template Questions?</h2>
                  <p className="text-sm text-brand-charcoal-light leading-relaxed">
                    Here are answers to the questions we receive most from modern female founders before they upgrade their systems.
                  </p>
                </div>

                {/* FAQ List Accordions Right (8 cols) */}
                <div className="md:col-span-8 space-y-3.5 w-full text-left">
                  {[
                    {
                      q: 'Do I need Canva Pro to edit these files?',
                      a: 'Absolutely not! We purposefully design every visual grid element, font pair, and icon style to be 100% compatible with the Free tier of Canva. You do not need to pay for any premium Canva upgrades to use our systems.'
                    },
                    {
                      q: 'Are all templates and captions completely editable?',
                      a: 'Yes, fully. With single-click Canva access, you can modify all text blocks, swap brand color codes, substitute your own lifestyle images, and toggle layouts to match your unique brand identity guidelines.'
                    },
                    {
                      q: 'Can absolute beginners use this system?',
                      a: 'Yes! If you can click a mouse button and type on a keyboard, you can customize our entire system. We also include a 25-page Brand Style Guide and straightforward PDF tutorials to walk you through starting your edit in minutes.'
                    },
                    {
                      q: 'Is it an instant download? How do I get delivery?',
                      a: 'Yes, delivery is immediate. The exact second your sandbox payment is authorized, our secure system redirects you to the Instant Access Portal. We also fire a digital confirmation email containing direct links straight to your inbox.'
                    }
                  ].map((faq, idx) => {
                    const isOpen = activeFaqIdx === idx;
                    return (
                      <div 
                        key={idx}
                        className="bg-brand-beige-50 border border-brand-beige-200 rounded-2xl overflow-hidden transition-all duration-300"
                      >
                        <button
                          onClick={() => setActiveFaqIdx(isOpen ? null : idx)}
                          className="w-full px-5 py-4.5 flex justify-between items-center text-left hover:bg-brand-beige-100 transition-colors"
                        >
                          <span className="font-serif font-bold text-sm text-brand-charcoal">{faq.q}</span>
                          <ChevronDown className={`w-4 h-4 text-brand-gold-700 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
                        </button>
                        
                        {isOpen && (
                          <div className="px-5 pb-5 pt-1 text-xs text-brand-charcoal-light leading-relaxed border-t border-brand-beige-200 bg-white animate-fade-in font-sans">
                            {faq.a}
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>

              </div>
            </section>

            {/* 10. FINAL CTA SECTION */}
            <section className="max-w-5xl mx-auto px-4 py-8">
              <div className="p-8 md:p-12 rounded-3xl bg-gradient-feminine border-2 border-brand-gold-500/25 text-center relative overflow-hidden space-y-6">
                {/* Ambient glow backgrounds */}
                <div className="absolute top-0 left-0 w-64 h-64 bg-brand-pink-100 rounded-full blur-3xl opacity-60 -z-10" />
                <div className="absolute bottom-0 right-0 w-64 h-64 bg-brand-gold-100 rounded-full blur-3xl opacity-50 -z-10" />

                <div className="space-y-3">
                  <span className="text-xs font-semibold tracking-widest text-brand-gold-700 uppercase block font-mono">YOUR UPGRADE IS ONE CLICK AWAY</span>
                  <h2 className="text-3xl md:text-5xl font-serif text-brand-charcoal font-bold">Stop Wondering What To Post Every Day</h2>
                  <p className="text-sm text-brand-charcoal-light max-w-xl mx-auto leading-relaxed">
                    Say goodbye to layout exhaustion and blank drafts. Join 15,000+ female entrepreneurs who have upgraded to our high-converting design systems.
                  </p>
                </div>

                <div className="pt-2">
                  <button
                    onClick={handleScrollToPricing}
                    className="bg-brand-charcoal hover:bg-brand-gold-700 text-white text-xs sm:text-sm font-semibold uppercase tracking-widest px-10 py-4.5 rounded-xl transition-all duration-300 shadow-md"
                  >
                    Download Now
                  </button>
                </div>
              </div>
            </section>
          </div>
        )}
      </main>

      {/* Footer component */}
      <Footer onNavigate={setCurrentView} />

      {/* Secure simulated checkout drawer */}
      <CheckoutModal 
        isOpen={isCheckoutOpen} 
        onClose={() => setIsCheckoutOpen(false)} 
        product={selectedPkg} 
        onCheckoutSuccess={handleCheckoutSuccess} 
      />
    </div>
  );
}
