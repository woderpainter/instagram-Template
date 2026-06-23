import { useState, FormEvent } from 'react';
import { Star, Check, Sparkles, Plus, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { CustomerReview } from '../types';

const initialReviews: CustomerReview[] = [
  {
    id: '1',
    name: 'Charlotte Vance',
    role: 'Business & Mindset Coach',
    handle: '@char_growth',
    rating: 5,
    comment: 'This system literally saved me 15 hours last week alone. Before, I would spend entire Sundays struggling in Canva. Now, I pick a template, paste the captioned prompt, and my grid looks like a high-end designer agency handled it.',
    date: '3 days ago',
    isVerified: true
  },
  {
    id: '2',
    name: 'Sofia Martinez',
    role: 'Beauty Content Creator',
    handle: '@sofia_glow',
    rating: 5,
    comment: 'The carousel blueprints are absolute genius. The visual transitions and negative space are beautiful, and the caption hooks got me 42 comments on my very first post. I finally feel proud of my feed!',
    date: '1 week ago',
    isVerified: true
  },
  {
    id: '3',
    name: 'Isla Thorne',
    role: 'Etsy Seller & Artisan',
    handle: '@isla_pottery',
    rating: 5,
    comment: 'Perfect for busy makers! I do not have a design background, but the Brand Style Guides and pre-curated color codes made it so easy to look consistent. Best business asset I have bought this year.',
    date: '2 weeks ago',
    isVerified: true
  },
  {
    id: '4',
    name: 'Olivia Sterling',
    role: 'Creative Freelancer & VA',
    handle: '@olivia_creative',
    rating: 4,
    comment: 'Incredible value for the Ultimate Bundle. The Notion Content Calendar keeps me completely on track and the AI Prompt templates help me brainstorm captions in minutes. Highly recommended for busy freelancers.',
    date: '3 weeks ago',
    isVerified: true
  }
];

export default function CustomerReviews() {
  const [reviews, setReviews] = useState<CustomerReview[]>(initialReviews);
  const [activeFilter, setActiveFilter] = useState<'all' | 'coach' | 'creator' | 'seller'>('all');
  const [isFormOpen, setIsFormOpen] = useState(false);
  
  // Review form states
  const [newName, setNewName] = useState('');
  const [newRole, setNewRole] = useState('Business Coach');
  const [newHandle, setNewHandle] = useState('');
  const [newComment, setNewComment] = useState('');
  const [newRating, setNewRating] = useState(5);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleAddReview = (e: FormEvent) => {
    e.preventDefault();
    if (newName && newComment && newHandle) {
      const addedReview: CustomerReview = {
        id: (reviews.length + 1).toString(),
        name: newName,
        role: newRole,
        handle: newHandle.startsWith('@') ? newHandle : `@${newHandle}`,
        rating: newRating,
        comment: newComment,
        date: 'Just now',
        isVerified: true
      };
      setReviews([addedReview, ...reviews]);
      setIsSubmitted(true);
      setTimeout(() => {
        setIsFormOpen(false);
        setIsSubmitted(false);
        setNewName('');
        setNewHandle('');
        setNewComment('');
        setNewRating(5);
      }, 3000);
    }
  };

  const filteredReviews = reviews.filter((r) => {
    if (activeFilter === 'all') return true;
    if (activeFilter === 'coach') return r.role.toLowerCase().includes('coach');
    if (activeFilter === 'creator') return r.role.toLowerCase().includes('creator') || r.role.toLowerCase().includes('influencer');
    if (activeFilter === 'seller') return r.role.toLowerCase().includes('seller') || r.role.toLowerCase().includes('shop') || r.role.toLowerCase().includes('artisan');
    return true;
  });

  return (
    <div className="space-y-10">
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6">
        <div className="space-y-2 text-left">
          <span className="text-xs font-semibold tracking-widest text-brand-gold-700 uppercase">REAL CUSTOMER STORIES</span>
          <h2 className="text-3xl md:text-4xl font-serif text-brand-charcoal">Loved by 15,000+ Female Founders</h2>
          <p className="text-xs text-brand-charcoal-light max-w-md">
            Hear how content creators, Etsy artisans, and business consultants are scaling their engagements and visual style with our premium templates.
          </p>
        </div>

        {/* Write a review toggle */}
        <button
          onClick={() => setIsFormOpen(true)}
          className="inline-flex items-center gap-1.5 px-4.5 py-2.5 bg-brand-charcoal hover:bg-brand-gold-700 text-white text-xs font-semibold uppercase tracking-widest rounded-xl transition-all duration-300 shadow-xs self-start"
        >
          <Plus className="w-4 h-4" />
          <span>Write a Review</span>
        </button>
      </div>

      {/* Review Category Filters */}
      <div className="flex flex-wrap gap-2 border-b border-brand-beige-200 pb-4">
        <button
          onClick={() => setActiveFilter('all')}
          className={`px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-wider transition-colors ${
            activeFilter === 'all'
              ? 'bg-brand-charcoal text-white shadow-xs'
              : 'bg-brand-beige-100 text-brand-charcoal-light hover:bg-brand-beige-200'
          }`}
        >
          All Reviews ({reviews.length})
        </button>
        <button
          onClick={() => setActiveFilter('coach')}
          className={`px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-wider transition-colors ${
            activeFilter === 'coach'
              ? 'bg-brand-charcoal text-white shadow-xs'
              : 'bg-brand-beige-100 text-brand-charcoal-light hover:bg-brand-beige-200'
          }`}
        >
          Coaches & Consultants
        </button>
        <button
          onClick={() => setActiveFilter('creator')}
          className={`px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-wider transition-colors ${
            activeFilter === 'creator'
              ? 'bg-brand-charcoal text-white shadow-xs'
              : 'bg-brand-beige-100 text-brand-charcoal-light hover:bg-brand-beige-200'
          }`}
        >
          Content Creators
        </button>
        <button
          onClick={() => setActiveFilter('seller')}
          className={`px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-wider transition-colors ${
            activeFilter === 'seller'
              ? 'bg-brand-charcoal text-white shadow-xs'
              : 'bg-brand-beige-100 text-brand-charcoal-light hover:bg-brand-beige-200'
          }`}
        >
          Makers & Etsy Sellers
        </button>
      </div>

      {/* Testimonials List */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {filteredReviews.map((rev) => (
          <div
            key={rev.id}
            className="p-6 bg-white border border-brand-beige-200 rounded-3xl space-y-4 shadow-2xs hover:border-brand-gold-500/20 transition-all duration-300 flex flex-col justify-between text-left relative"
          >
            <div className="space-y-3">
              {/* Stars & Verified badge */}
              <div className="flex items-center justify-between">
                <div className="flex text-brand-gold-500">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      className={`w-4 h-4 ${i < rev.rating ? 'fill-brand-gold-500 text-brand-gold-500' : 'text-brand-beige-200'}`}
                    />
                  ))}
                </div>
                {rev.isVerified && (
                  <span className="inline-flex items-center gap-1 text-[9px] font-semibold text-emerald-600 bg-emerald-50 border border-emerald-100 px-2 py-0.5 rounded-full">
                    <Check className="w-2.5 h-2.5" /> Verified Purchase
                  </span>
                )}
              </div>

              {/* Comment text */}
              <p className="text-xs text-brand-charcoal-light leading-relaxed font-sans">
                "{rev.comment}"
              </p>
            </div>

            {/* Author details */}
            <div className="flex justify-between items-center pt-4 border-t border-brand-beige-100">
              <div>
                <h4 className="font-serif text-sm font-bold text-brand-charcoal leading-tight">
                  {rev.name}
                </h4>
                <p className="text-[10px] text-brand-gold-700 font-mono mt-0.5">
                  {rev.role} • {rev.handle}
                </p>
              </div>
              <span className="text-[10px] text-brand-beige-300 font-mono font-medium">{rev.date}</span>
            </div>
          </div>
        ))}
      </div>

      {/* Write a review drawer overlay modal */}
      <AnimatePresence>
        {isFormOpen && (
          <div className="fixed inset-0 bg-black/40 backdrop-blur-xs flex items-center justify-center p-4 z-50">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="bg-white border border-brand-beige-200 rounded-3xl p-6 md:p-8 max-w-md w-full shadow-2xl relative text-left"
            >
              <button
                onClick={() => setIsFormOpen(false)}
                className="absolute top-4 right-4 p-1.5 rounded-full hover:bg-brand-beige-100 text-brand-charcoal transition-all"
                aria-label="Close"
              >
                <X className="w-5 h-5" />
              </button>

              {isSubmitted ? (
                <div className="text-center py-8 space-y-4">
                  <div className="w-12 h-12 rounded-full bg-emerald-50 border border-emerald-100 flex items-center justify-center mx-auto text-emerald-500">
                    <Check className="w-6 h-6 animate-pulse" />
                  </div>
                  <div>
                    <h3 className="font-serif text-xl font-bold text-brand-charcoal">Review Published!</h3>
                    <p className="text-xs text-brand-charcoal-light mt-1">
                      Thank you for sharing your creative story with our community. Your review has been listed.
                    </p>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleAddReview} className="space-y-4">
                  <div>
                    <h3 className="font-serif text-xl font-bold text-brand-charcoal leading-tight">Share Your Experience</h3>
                    <p className="text-xs text-brand-charcoal-light mt-0.5">Join thousands of creative women in rating our templates.</p>
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div className="space-y-1">
                      <label className="text-[10px] font-semibold text-brand-charcoal-light uppercase tracking-wider">Your Name</label>
                      <input
                        type="text"
                        required
                        placeholder="Amara"
                        value={newName}
                        onChange={(e) => setNewName(e.target.value)}
                        className="w-full px-3 py-2.5 bg-brand-beige-50 border border-brand-beige-300 rounded-xl text-xs text-brand-charcoal focus:bg-white focus:border-brand-gold-600 outline-none transition-all"
                      />
                    </div>
                    <div className="space-y-1">
                      <label className="text-[10px] font-semibold text-brand-charcoal-light uppercase tracking-wider">Instagram @</label>
                      <input
                        type="text"
                        required
                        placeholder="@amara"
                        value={newHandle}
                        onChange={(e) => setNewHandle(e.target.value)}
                        className="w-full px-3 py-2.5 bg-brand-beige-50 border border-brand-beige-300 rounded-xl text-xs text-brand-charcoal focus:bg-white focus:border-brand-gold-600 outline-none transition-all"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div className="space-y-1">
                      <label className="text-[10px] font-semibold text-brand-charcoal-light uppercase tracking-wider">Business Role</label>
                      <select
                        value={newRole}
                        onChange={(e) => setNewRole(e.target.value)}
                        className="w-full px-3 py-2.5 bg-brand-beige-50 border border-brand-beige-300 rounded-xl text-xs text-brand-charcoal focus:bg-white focus:border-brand-gold-600 outline-none transition-all"
                      >
                        <option value="Business Coach">Business Coach</option>
                        <option value="Beauty Creator">Beauty Creator</option>
                        <option value="Etsy Artisan">Etsy Artisan</option>
                        <option value="Fashion Consultant">Fashion Consultant</option>
                        <option value="Freelancer">Freelancer / VA</option>
                      </select>
                    </div>
                    <div className="space-y-1">
                      <label className="text-[10px] font-semibold text-brand-charcoal-light uppercase tracking-wider">Star Rating</label>
                      <div className="flex gap-1.5 pt-2 text-brand-gold-500">
                        {Array.from({ length: 5 }).map((_, idx) => (
                          <button
                            key={idx}
                            type="button"
                            onClick={() => setNewRating(idx + 1)}
                            className="focus:outline-none"
                          >
                            <Star className={`w-5 h-5 ${idx < newRating ? 'fill-brand-gold-500 text-brand-gold-500' : 'text-brand-beige-200'}`} />
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="space-y-1">
                    <label className="text-[10px] font-semibold text-brand-charcoal-light uppercase tracking-wider">Your Story</label>
                    <textarea
                      required
                      rows={4}
                      placeholder="Tell us how these layouts or prompt planners upgraded your social workflow..."
                      value={newComment}
                      onChange={(e) => setNewComment(e.target.value)}
                      className="w-full px-3 py-2.5 bg-brand-beige-50 border border-brand-beige-300 rounded-xl text-xs text-brand-charcoal focus:bg-white focus:border-brand-gold-600 outline-none transition-all"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-brand-charcoal hover:bg-brand-gold-700 text-white py-3 rounded-xl font-medium text-xs uppercase tracking-widest transition-all duration-300 shadow-md"
                  >
                    Publish Review
                  </button>
                </form>
              )}
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
