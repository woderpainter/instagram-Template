import { useState } from 'react';
import { Calendar, Clock, BookOpen, ChevronRight, X, ArrowLeft, Sparkles, MessageSquare } from 'lucide-react';
import { BlogArticle } from '../types';

const articles: BlogArticle[] = [
  {
    id: '1',
    title: 'The Aesthetic Feed Blueprint: How to Stand Out in a Crowded Feed',
    slug: 'aesthetic-feed-blueprint',
    category: 'Instagram Strategy',
    readTime: '5 min read',
    publishedDate: 'June 18, 2026',
    summary: 'Discover the exact grid rules, font hierarchies, and palette configurations that premium service providers use to look trustworthy and double their booking rates.',
    image: 'https://picsum.photos/seed/aesthetic_grid/800/500',
    content: [
      'Have you ever landed on an Instagram profile and instantly felt, "This person is a high-level expert," before even reading their bio? That is the power of a mature, cohesive visual brand style. In 2026, scattered palettes and inconsistent graphics are the fastest way to lose client trust.',
      'To build a feed that feels luxurious and authoritative, you must transition away from pre-packaged generic templates toward a dedicated "style system." Here are the three non-negotiable elements of an aesthetic feed blueprint:',
      '1. Palette Discipline: Select exactly 4 colors (a crisp base, a warm cream sand neutral, a deep charcoal/chocolate body shade, and a subtle warm rose highlight). Never use more than this in your grid. This establishes immediate visual rhythm.',
      '2. Typographical Contrast: Pair a high-contrast elegant serif font (like Cormorant Garamond) for headline text with a clean, light sans-serif font (like Plus Jakarta Sans) for informational copy. The serif commands attention, while the sans-serif ensures comfortable reading.',
      '3. Negative Space Integrity: Do not pack text to the very edge of your square posts. Leave a generous 15% clear margin on all four borders. This gives your designs a breathing, expansive look that feels premium, not chaotic.',
      'By implementing these subtle shifts, you shift the focus from "just posting graphics" to projecting an elite, professional studio vibe.'
    ]
  },
  {
    id: '2',
    title: '3 Client-Attracting Instagram Story Sequences You Can Copy Today',
    slug: 'client-attracting-story-sequences',
    category: 'Sales Formulas',
    readTime: '4 min read',
    publishedDate: 'June 12, 2026',
    summary: 'Stop guessing what to say on Stories. Use these three step-by-step psychological sequences to engage your followers and drive them directly to your DMs.',
    image: 'https://picsum.photos/seed/stories_seq/800/500',
    content: [
      'Stories are where the real relationships and conversions happen. While your Feed positions you as an expert, your Stories are where your audience gets to know the face and values behind the brand. However, randomly posting your morning coffee or listing generic services does not generate qualified sales inquiries.',
      'To turn Story views into high-paying consulting or product customers, you should run structured, three-frame narrative sequences. Try these three formulas this week:',
      '💸 Sequence 1: The Frustration Pivot\nFrame 1: Present a common annoying problem your audience is facing. Use an aesthetic background and a clear poll: "Struggling to write captions that actually get client leads?"\nFrame 2: Deliver a quick, actionable solution or perspective shift. (e.g. "It is not your words—it is your lack of a hook.")\nFrame 3: Call to action with a sticker. "We included 365 premade hooks in our Content System. Tap here to get instant access."',
      '🎓 Sequence 2: The Client Win Breakdown\nFrame 1: Screenshot a glowing client text message or email, blurred to respect privacy. Add a text overlay: "Another amazing milestone from our premium mastermind member..."\nFrame 2: Break down the exact action step that led to that result. Show behind-the-scenes.\nFrame 3: Interactive DM prompt: "Booked out for July slots! Send me a DM with the word CHAT to see if we are a fit for August."',
      '☕ Sequence 3: The Value-First Q&A\nFrame 1: Put a Q&A box up with a highly specific prompt: "Ask me anything about scaling your Pinterest or Instagram lead generation."\nFrame 2-4: Answer questions using short video frames or beautiful, well-spaced typed overlays using matching brand fonts.\nFrame 5: Direct them to a resource. "Loved these questions! If you want a full content map, my Ultimate Bundle is currently 10% off using code FEM10."'
    ]
  },
  {
    id: '3',
    title: 'Why Consistency and Template Systems Outperform "Post-In-The-Moment" Methods',
    slug: 'consistency-beats-scattered',
    category: 'Growth Systems',
    readTime: '6 min read',
    publishedDate: 'June 05, 2026',
    summary: 'The numbers do not lie: creators who utilize pre-planned grid systems and structured content calendars grow 3x faster than those who design from scratch every single day.',
    image: 'https://picsum.photos/seed/consistency_feed/800/500',
    content: [
      'We have all been there: It is 6:00 PM, you know you need to post, and you are staring blankly at Canva, frantically trying to find an illustration or write a caption. The result? A rushed, low-quality post that does not perform, leading to ultimate creative burnout.',
      'Relying on "momentary inspiration" is a recipe for failure on modern social media. High-converting brands succeed because they run Instagram as a predictable, structured system.',
      'When you utilize an organized, pre-designed template library (like the 365 Feminine Instagram Content System), you unlock three immense business assets:',
      '🚀 Overcoming Blank-Page Syndrome: You never have to ask, "What should I write today?" The hook, the layout, and the caption prompts are already mapped out for you. You are just customizing details.',
      '🧘 Zero Brand Fragmentation: Your brand colors, margins, styles, and typography are pre-configured. Your feed remains completely cohesive, no matter how busy or tired you are.',
      '✨ Compounded Engagement: Because you spend less time designing, you have more time to interact with your target audience, answer comments, send personalized DMs, and build actual human connection.',
      'Stop starting from scratch. Design your social workflow to be as seamless and systematic as possible, and watch your business flourish.'
    ]
  }
];

export default function BlogView() {
  const [selectedArticle, setSelectedArticle] = useState<BlogArticle | null>(null);

  return (
    <div className="max-w-5xl mx-auto px-4 py-12 md:py-16">
      {selectedArticle ? (
        // Detailed Article Reading View
        <div className="space-y-8 animate-fade-in">
          <button
            onClick={() => setSelectedArticle(null)}
            className="inline-flex items-center gap-2 text-sm text-brand-charcoal-light hover:text-brand-charcoal font-semibold mb-2"
          >
            <ArrowLeft className="w-4 h-4" /> Back to Blog List
          </button>

          <div className="space-y-4">
            <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-brand-pink-100 text-brand-pink-300">
              {selectedArticle.category}
            </span>
            <h1 className="text-3xl md:text-5xl font-serif text-brand-charcoal leading-tight max-w-4xl">
              {selectedArticle.title}
            </h1>
            
            <div className="flex items-center gap-4 text-xs text-brand-charcoal-light">
              <span className="flex items-center gap-1"><Calendar className="w-3.5 h-3.5" /> {selectedArticle.publishedDate}</span>
              <span className="flex items-center gap-1"><Clock className="w-3.5 h-3.5" /> {selectedArticle.readTime}</span>
            </div>
          </div>

          <div className="aspect-video rounded-3xl overflow-hidden border border-brand-beige-200">
            <img
              src={selectedArticle.image}
              alt={selectedArticle.title}
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>

          <div className="max-w-3xl mx-auto space-y-6 text-brand-charcoal-light leading-relaxed text-sm md:text-base">
            {selectedArticle.content.map((paragraph, index) => (
              <p key={index} className="whitespace-pre-line">
                {paragraph}
              </p>
            ))}
          </div>

          {/* Post Footer Call to Action */}
          <div className="max-w-3xl mx-auto mt-12 p-6 rounded-2xl bg-brand-beige-100 border border-brand-beige-200 text-center space-y-4">
            <div className="w-10 h-10 rounded-full bg-brand-gold-100 text-brand-gold-700 flex items-center justify-center mx-auto">
              <Sparkles className="w-5 h-5 animate-pulse" />
            </div>
            <div>
              <h3 className="font-serif text-lg font-bold text-brand-charcoal">Stop Struggling with Instagram Design</h3>
              <p className="text-xs text-brand-charcoal-light max-w-md mx-auto mt-1">
                The 365 Feminine Instagram Content System provides fully editable versions of the grid, story, and prompt techniques discussed in this article.
              </p>
            </div>
            <button 
              onClick={() => {
                setSelectedArticle(null);
                // Scroll down to pricing section
                const el = document.getElementById('pricing-plans');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              }}
              className="px-5 py-2.5 bg-brand-charcoal hover:bg-brand-gold-700 text-white rounded-xl text-xs font-semibold shadow-xs transition-colors"
            >
              Get Instant Access Now
            </button>
          </div>
        </div>
      ) : (
        // Grid Directory view
        <div className="space-y-12">
          <div className="text-center space-y-4 max-w-xl mx-auto">
            <span className="text-xs font-semibold tracking-widest text-brand-gold-700 uppercase">EXPERTISE & STRATEGY</span>
            <h1 className="text-4xl md:text-5xl font-serif text-brand-charcoal leading-tight">The FemSocial Journal</h1>
            <p className="text-sm text-brand-charcoal-light">
              High-value Instagram growth insights, marketing tutorials, and aesthetic brand secrets compiled by our creative agency experts.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {articles.map((art) => (
              <div 
                key={art.id}
                className="bg-white border border-brand-beige-200 rounded-3xl overflow-hidden shadow-xs hover:border-brand-gold-500/30 transition-all duration-300 flex flex-col group"
              >
                <div className="aspect-video w-full overflow-hidden border-b border-brand-beige-200 relative">
                  <img
                    src={art.image}
                    alt={art.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                  <span className="absolute top-3 left-3 bg-white/90 backdrop-blur-xs px-2.5 py-1 rounded-md text-[10px] font-semibold text-brand-gold-700 tracking-wider uppercase shadow-xs">
                    {art.category}
                  </span>
                </div>

                <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                  <div className="space-y-2">
                    <div className="flex items-center gap-3 text-[10px] text-brand-beige-300 font-mono font-medium">
                      <span>{art.publishedDate}</span>
                      <span>•</span>
                      <span>{art.readTime}</span>
                    </div>
                    <h3 className="font-serif text-lg font-bold text-brand-charcoal leading-snug group-hover:text-brand-gold-600 transition-colors">
                      {art.title}
                    </h3>
                    <p className="text-xs text-brand-charcoal-light leading-relaxed line-clamp-3">
                      {art.summary}
                    </p>
                  </div>

                  <button
                    onClick={() => setSelectedArticle(art)}
                    className="text-xs font-semibold text-brand-charcoal group-hover:text-brand-gold-600 flex items-center gap-1 transition-colors self-start"
                  >
                    <span>Read Article</span>
                    <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
