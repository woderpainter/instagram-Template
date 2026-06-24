import { useState } from 'react';
import { Heart, MessageSquare, Instagram, Users, ShieldCheck, Bookmark, ExternalLink, X, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface FeedPost {
  id: string;
  image: string;
  likes: string;
  comments: string;
  caption: string;
  tags: string[];
  date: string;
}

const instagramPosts: FeedPost[] = [
  {
    id: 'ig1',
    image: 'https://images.unsplash.com/photo-1513542789411-b6a5d4f31634?q=80&w=600&auto=format&fit=crop',
    likes: '1,248',
    comments: '42',
    caption: 'The secret to scaling your online business isn’t working 80 hours a week. It’s building aesthetic systems that speak for you even when you’re offline. 🕊️✨ Use our Neutral Sand & Cream templates to elevate your brand presence in minutes.',
    tags: ['#branding', '#femaleentrepreneur', '#instagramsolution'],
    date: '2 hours ago'
  },
  {
    id: 'ig2',
    image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=600&auto=format&fit=crop',
    likes: '894',
    comments: '28',
    caption: 'Consistency breeds trust. If your feed looks different every single day, your audience doesn’t know what to expect. Keep it beautifully uniform, sophisticated, and undeniably professional. 🎞️🤎',
    tags: ['#coachingtips', '#minimalistfeed', '#aestheticbrand'],
    date: '1 day ago'
  },
  {
    id: 'ig3',
    image: 'https://images.unsplash.com/photo-1542744094-3a31f103e35f?q=80&w=600&auto=format&fit=crop',
    likes: '2,104',
    comments: '89',
    caption: 'Ready-to-paste captions that actually spark conversations in the DMs. 💬 Our psychology-backed prompt spreadsheets make sure you never have to stare at a blinking cursor again. Link in bio to access.',
    tags: ['#copywriting', '#socialmediastrategy', '#aestheticmarketing'],
    date: '3 days ago'
  },
  {
    id: 'ig4',
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=600&auto=format&fit=crop',
    likes: '1,562',
    comments: '53',
    caption: 'Quiet luxury for your social media. No screaming gradients or generic templates. Just beautiful editorial designs, curated highlight covers, and stunning brand guides. ⚜️✨',
    tags: ['#quietluxury', '#aestheticdesign', '#canvatemplates'],
    date: '5 days ago'
  },
  {
    id: 'ig5',
    image: 'https://images.unsplash.com/photo-1493421419110-74f4e85ba124?q=80&w=600&auto=format&fit=crop',
    likes: '912',
    comments: '19',
    caption: 'How we spent Monday morning: scheduling an entire month of aesthetic carousel posts in under 45 minutes using the Notion Content Calendar included in our Ultimate Bundle. 💻📔',
    tags: ['#notiontemplate', '#productivityhacks', '#aestheticfeeds'],
    date: '1 week ago'
  },
  {
    id: 'ig6',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=600&auto=format&fit=crop',
    likes: '3,450',
    comments: '124',
    caption: 'Behind the lens: recording high-converting Reels with zero stress. 🎙️ Stop overthinking the content loop and start leveraging ready-to-use digital assets that represent your expertise flawlessly.',
    tags: ['#instagramreels', '#reelsstrategy', '#femalebusiness'],
    date: '1 week ago'
  }
];

export default function InstagramFeed() {
  const [selectedPost, setSelectedPost] = useState<FeedPost | null>(null);
  const [isFollowed, setIsFollowed] = useState(false);
  const [followersCount, setFollowersCount] = useState(14852);

  const handleFollowToggle = () => {
    if (isFollowed) {
      setFollowersCount(prev => prev - 1);
    } else {
      setFollowersCount(prev => prev + 1);
    }
    setIsFollowed(!isFollowed);
  };

  return (
    <section className="bg-brand-beige-100 py-16 border-t border-brand-beige-200">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        
        {/* Instagram Profile Header Simulation */}
        <div className="bg-white rounded-3xl border border-brand-beige-200 p-6 md:p-8 shadow-sm mb-12">
          <div className="flex flex-col md:flex-row items-center gap-6 md:gap-10 text-center md:text-left">
            
            {/* Avatar */}
            <div className="relative shrink-0">
              <div className="w-20 h-20 md:w-24 md:h-24 rounded-full p-[3px] bg-gradient-to-tr from-brand-gold-500 via-brand-pink-300 to-brand-gold-600">
                <div className="w-full h-full rounded-full bg-white p-[2px]">
                  <div className="w-full h-full rounded-full bg-brand-beige-100 flex items-center justify-center text-brand-charcoal overflow-hidden">
                    <Instagram className="w-8 h-8 md:w-10 md:h-10 text-brand-gold-700 animate-pulse" />
                  </div>
                </div>
              </div>
              <span className="absolute bottom-1 right-1 bg-brand-gold-500 text-white p-1 rounded-full border-2 border-white">
                <ShieldCheck className="w-3 h-3" />
              </span>
            </div>

            {/* Account Info */}
            <div className="flex-grow space-y-4">
              <div className="flex flex-col sm:flex-row sm:items-center gap-3 justify-center md:justify-start">
                <h3 className="font-serif text-lg md:text-xl font-bold text-brand-charcoal">
                  @instagramsolution
                </h3>
                <div className="flex justify-center gap-2">
                  <button 
                    onClick={handleFollowToggle}
                    className={`px-5 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider transition-all duration-300 ${
                      isFollowed 
                        ? 'bg-brand-beige-200 text-brand-charcoal hover:bg-brand-beige-300' 
                        : 'bg-brand-charcoal hover:bg-brand-gold-700 text-white'
                    }`}
                  >
                    {isFollowed ? 'Following' : 'Follow'}
                  </button>
                  <a 
                    href="https://instagram.com" 
                    target="_blank" 
                    rel="noreferrer" 
                    className="p-2 bg-brand-beige-50 border border-brand-beige-200 hover:border-brand-charcoal text-brand-charcoal-light hover:text-brand-charcoal rounded-full transition-colors"
                  >
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>

              {/* Stats Bar */}
              <div className="flex gap-6 justify-center md:justify-start text-xs font-mono text-brand-charcoal-light">
                <div>
                  <span className="font-bold text-brand-charcoal">365</span> posts
                </div>
                <div>
                  <span className="font-bold text-brand-charcoal">
                    {followersCount.toLocaleString()}
                  </span> followers
                </div>
                <div>
                  <span className="font-bold text-brand-charcoal">124</span> following
                </div>
              </div>

              {/* Bio Details */}
              <div className="space-y-1 text-xs text-brand-charcoal-light">
                <p className="font-semibold text-brand-charcoal">InstagramSolution • Digital Systems</p>
                <p>✨ DFY Aesthetic templates, Notion calendars & prompt databases</p>
                <p>🎞️ Stop spending hours inside Canva and own your day back</p>
                <p className="text-brand-gold-700 font-medium">✨ Join 15,000+ modern female founders thriving daily</p>
              </div>
            </div>

          </div>
        </div>

        {/* Section Title */}
        <div className="text-center max-w-xl mx-auto space-y-2 mb-8">
          <span className="text-xs font-semibold tracking-widest text-brand-gold-700 uppercase font-mono">LIVE FEED DEMO</span>
          <h2 className="text-2xl md:text-3xl font-serif text-brand-charcoal font-bold">See the System in Action</h2>
          <p className="text-xs text-brand-charcoal-light">
            Click on any post to read the strategy guide, view the high-converting caption, and experience the luxury visual consistency.
          </p>
        </div>

        {/* Feed Grid (3 columns) */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
          {instagramPosts.map((post) => (
            <motion.div
              key={post.id}
              whileHover={{ y: -4 }}
              onClick={() => setSelectedPost(post)}
              className="relative aspect-square rounded-2xl overflow-hidden bg-brand-beige-200 border border-brand-beige-200 group cursor-pointer shadow-xs"
            >
              <img 
                src={post.image} 
                alt="Instagram Solution Template" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                referrerPolicy="no-referrer"
              />
              
              {/* Overlay on Hover */}
              <div className="absolute inset-0 bg-brand-charcoal/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-6 text-white font-serif">
                <span className="flex items-center gap-1.5 font-bold text-sm md:text-base">
                  <Heart className="w-5 h-5 fill-white text-white" />
                  {post.likes}
                </span>
                <span className="flex items-center gap-1.5 font-bold text-sm md:text-base">
                  <MessageSquare className="w-5 h-5 fill-white text-white" />
                  {post.comments}
                </span>
              </div>

              {/* Tiny Instagram Icon badge */}
              <span className="absolute top-3 right-3 p-1.5 rounded-full bg-white/80 backdrop-blur-xs text-brand-charcoal shadow-2xs group-hover:bg-white transition-colors">
                <Instagram className="w-3.5 h-3.5" />
              </span>
            </motion.div>
          ))}
        </div>

      </div>

      {/* Lightbox / Post Detail View */}
      <AnimatePresence>
        {selectedPost && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-fade-in">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 10 }}
              className="bg-white rounded-3xl overflow-hidden max-w-4xl w-full grid grid-cols-1 md:grid-cols-12 shadow-2xl relative"
            >
              {/* Close Button */}
              <button 
                onClick={() => setSelectedPost(null)}
                className="absolute top-4 right-4 z-10 p-2 bg-white/90 backdrop-blur-xs text-brand-charcoal hover:text-brand-pink-300 rounded-full shadow-sm transition-all"
                aria-label="Close details"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Left Column: Visual Asset (7 cols) */}
              <div className="md:col-span-7 bg-brand-beige-50 relative flex items-center justify-center">
                <img 
                  src={selectedPost.image} 
                  alt="Post preview" 
                  className="w-full h-auto max-h-[400px] md:max-h-[550px] object-cover"
                  referrerPolicy="no-referrer"
                />
                
                {/* Floating editable badge */}
                <div className="absolute bottom-4 left-4 inline-flex items-center gap-1 bg-white/95 backdrop-blur-xs px-3 py-1 rounded-full text-[10px] font-mono tracking-wider text-brand-gold-700 font-semibold shadow-xs">
                  <Sparkles className="w-3 h-3 text-brand-gold-600 animate-pulse" />
                  100% CANVA COMPATIBLE
                </div>
              </div>

              {/* Right Column: Interaction & Strategy (5 cols) */}
              <div className="md:col-span-5 p-6 flex flex-col justify-between border-t md:border-t-0 md:border-l border-brand-beige-200">
                
                {/* Profile Header */}
                <div className="space-y-4">
                  <div className="flex items-center gap-3 pb-4 border-b border-brand-beige-100">
                    <div className="w-8 h-8 rounded-full bg-brand-gold-100 flex items-center justify-center text-brand-gold-700 shrink-0">
                      <Instagram className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="block text-xs font-semibold text-brand-charcoal">@instagramsolution</span>
                      <span className="block text-[9px] text-brand-gold-700 font-mono">ESTABLISHED STRATEGY</span>
                    </div>
                  </div>

                  {/* Caption block */}
                  <div className="space-y-3 pr-2 max-h-[180px] md:max-h-[250px] overflow-y-auto custom-scrollbar text-left">
                    <p className="text-xs text-brand-charcoal leading-relaxed font-sans whitespace-pre-line">
                      {selectedPost.caption}
                    </p>
                    <div className="flex flex-wrap gap-1.5 pt-1">
                      {selectedPost.tags.map((tag, idx) => (
                        <span key={idx} className="text-[10px] font-semibold text-brand-gold-700 hover:underline cursor-pointer">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Engagement Bar & CTA */}
                <div className="pt-4 border-t border-brand-beige-100 space-y-4">
                  <div className="flex justify-between items-center text-brand-charcoal">
                    <div className="flex gap-4">
                      <button className="hover:text-brand-pink-300 transition-colors">
                        <Heart className="w-5 h-5 fill-brand-pink-300/10" />
                      </button>
                      <button className="hover:text-brand-gold-700 transition-colors">
                        <MessageSquare className="w-5 h-5" />
                      </button>
                    </div>
                    <button className="hover:text-brand-gold-700 transition-colors">
                      <Bookmark className="w-5 h-5" />
                    </button>
                  </div>

                  <div className="space-y-1 text-left">
                    <span className="block text-xs font-bold text-brand-charcoal font-serif">
                      {selectedPost.likes} likes
                    </span>
                    <span className="block text-[9px] text-brand-beige-300 uppercase font-mono tracking-wider">
                      {selectedPost.date}
                    </span>
                  </div>

                  <button 
                    onClick={() => {
                      setSelectedPost(null);
                      const el = document.getElementById('pricing-plans');
                      if (el) el.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="w-full bg-brand-charcoal hover:bg-brand-gold-700 text-white py-3 rounded-xl text-xs font-semibold uppercase tracking-widest transition-all duration-300 flex items-center justify-center gap-1.5"
                  >
                    <span>Get This Editable Template</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </button>
                </div>

              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
