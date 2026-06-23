import { useState } from 'react';
import { Sparkles, Copy, Check, RotateCcw, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface PromptTemplate {
  id: string;
  niche: string;
  goal: string;
  title: string;
  hook: string;
  body: string;
  callToAction: string;
  hashtags: string;
}

const templates: PromptTemplate[] = [
  {
    id: '1',
    niche: 'Coaches & Consultants',
    goal: 'Build Authority',
    title: 'The Hard Pill to Swallow',
    hook: "🛑 Here's the harsh truth about [Your Niche Topic] that nobody wants to admit...",
    body: "Most people think the secret to [Desirable Outcome] is [Common Myth]. But after working with [Number] clients, I've realized that's actually keeping you stuck.\n\nThe real culprit? It's [The Real Problem].\n\nWhen you focus on [Proper Solution], here's what happens:\n1️⃣ [Benefit 1]\n2️⃣ [Benefit 2]\n3️⃣ [Benefit 3]",
    callToAction: "💬 Ready to stop wasting time on what doesn't work? DM me 'GROW' and let's map out your custom [Your Niche Topic] strategy today.",
    hashtags: "#FemaleBusinessCoach #CoachingForWomen #CreativeEntrepreneurs #MindsetCoach #FemaleFounder"
  },
  {
    id: '2',
    niche: 'Coaches & Consultants',
    goal: 'Sell/Promote',
    title: 'The Blueprint Release',
    hook: "✨ I'm letting you in on the exact process that got my client [Result] in just [Timeframe]...",
    body: "We didn't do it by spending hours on [Unnecessary Action] or stressing over [Frustration]. We did it with 3 simple shifts:\n\n🔥 Phase 1: [Shift 1 - Strategy]\n🔥 Phase 2: [Shift 2 - System]\n🔥 Phase 3: [Shift 3 - Execution]\n\nThis is the exact framework I teach inside [Your Program Name].",
    callToAction: "👉 I'm accepting only [Number] new clients for [Month]. Click the link in my bio to apply before spots fill up!",
    hashtags: "#BusinessStrategist #GoalSlayer #WomenInBusiness #DreamBigWorkHard #CoachingProgram"
  },
  {
    id: '3',
    niche: 'Beauty & Fashion Creators',
    goal: 'Build Authority',
    title: 'Beauty Routine Breakdown',
    hook: "💄 Stop scroll! You are probably making this crucial [Beauty/Skincare] mistake...",
    body: "If your [Skin/Makeup] is feeling [Problem, e.g., dry or patchy], it might not be your products—it's how you're applying them.\n\nHere is the correct order for flawless results:\n🌟 Step 1: [Product 1] to pre-treat\n🌟 Step 2: [Product 2] for hydration\n🌟 Step 3: [Product 3] to seal it all in\n\nSave this post so you don't forget tonight!",
    callToAction: "👇 Tell me in the comments: What's your absolute holy grail beauty product right now?",
    hashtags: "#AestheticBeauty #SkincareRoutine #BeautyInfluencer #GlowUpTips #NeutralAesthetic"
  },
  {
    id: '4',
    niche: 'Beauty & Fashion Creators',
    goal: 'Connect/Relate',
    title: 'Style/Glow Transformation',
    hook: "👗 Proof that finding your signature style changes more than just your wardrobe...",
    body: "Years ago, I used to wear [Old Style Detail] because I thought I had to 'fit in.' I felt so [Uncomfortable Emotion].\n\nOnce I embraced [New Style Direction] and started styling with intention, my confidence skyrocketed. \n\nRemember: Your personal brand and style are a visual business card. Wear what makes you feel like the CEO.",
    callToAction: "💌 Save this post for your next outfit inspiration, and share this with a bestie who needs a style confidence boost today!",
    hashtags: "#NeutralStyle #MinimalistOOTD #FashionInfluencer #ClassyStyle #StyleConfidence"
  },
  {
    id: '5',
    niche: 'Etsy Sellers & Product Shops',
    goal: 'Sell/Promote',
    title: 'The Behind-The-Scenes Restock',
    hook: "📦 PACK AN ORDER WITH ME: Why this handmade [Product Name] took [Hours] to perfect...",
    body: "Every single piece is designed, crafted, and packaged in my studio with so much love.\n\nFrom [Raw Material] to [Finished Beautiful Product], we obsess over every tiny detail so that when it arrives at your doorstep, it feels like absolute luxury.\n\nWe are officially restocked, but they are going fast!",
    callToAction: "🛍️ Tap the link in our bio to shop the [Collection Name] restock today before your favorites sell out again.",
    hashtags: "#EtsySeller #SupportFemaleBusinesses #AestheticPackaging #HandmadeBoutique #SmallBusinessOwner"
  },
  {
    id: '6',
    niche: 'Etsy Sellers & Product Shops',
    goal: 'Connect/Relate',
    title: 'Why I Started This Shop',
    hook: "🥺 I was told that turning my passion into a business was 'too risky'...",
    body: "But [Number] years ago, I decided to take the leap anyway. I was tired of [Corporate/Old Job Pain] and craved [Desire, e.g., creative freedom].\n\nToday, packaging your orders and hearing how much my [Product Category] brightens your day is my absolute favorite thing in the world.\n\nThank you for choosing handmade and supporting my dream.",
    callToAction: "💭 What is your absolute favorite piece from our current collection? Let me know below!",
    hashtags: "#ShopSmallLove #FeminineBoutique #CreativeProcess #EtsyGifts #SmallBusinessJourney"
  },
  {
    id: '7',
    niche: 'Freelancers & Service Providers',
    goal: 'Build Authority',
    title: 'The Secret To Consistency',
    hook: "💻 The #1 workflow mistake [Designers/Copywriters/VA] make that kills client retention...",
    body: "It's not your talent—it's your onboarding and delivery systems. \n\nClients don't just pay for your deliverables; they pay for a stress-free experience. When I shifted from chaotic emails to [System Name, e.g., client portals], three amazing things happened:\n\n✨ Clients felt completely taken care of\n✨ Feedback rounds dropped by 50%\n✨ Referrals started coming in on autopilot",
    callToAction: "🔗 Tap the link in my bio to book a free discovery call for [Month] and let's streamline your next project.",
    hashtags: "#FemaleFreelancer #CreativeAgency #GraphicDesigner #VirtualAssistant #FemaleWebDesigner"
  },
  {
    id: '8',
    niche: 'Freelancers & Service Providers',
    goal: 'Connect/Relate',
    title: 'My Studio Vibe & Values',
    hook: "☕ Day in the life of an independent [Creative Niche] building her dream studio...",
    body: "A typical day in my studio starts with oat milk lattes, mood boards, and client strategy sessions.\n\nBut behind the pretty desk shots, my core values are what run this business:\n✨ Quality over speed\n✨ Intentional, warm communication\n✨ Collaborative partnership\n\nI love working with founders who value aesthetics and strategy.",
    callToAction: "💌 Currently booking for [Month] launch slots. Send me a DM with 'STUDIO' to receive my latest Service & Pricing guide.",
    hashtags: "#CreativeStudio #DayInTheLife #WomensWorkspace #BrandStrategy #FreelanceLife"
  }
];

export default function AiLibraryDemo() {
  const niches = [
    'Coaches & Consultants',
    'Beauty & Fashion Creators',
    'Etsy Sellers & Product Shops',
    'Freelancers & Service Providers'
  ];

  const goals = [
    'Build Authority',
    'Sell/Promote',
    'Connect/Relate'
  ];

  const [selectedNiche, setSelectedNiche] = useState(niches[0]);
  const [selectedGoal, setSelectedGoal] = useState(goals[0]);
  const [copiedField, setCopiedField] = useState<string | null>(null);

  // Filter templates based on selection, or find the closest
  const filteredTemplates = templates.filter(
    t => t.niche === selectedNiche && t.goal === selectedGoal
  );

  // Fallback if none found
  const activeTemplate = filteredTemplates.length > 0 
    ? filteredTemplates[0] 
    : templates.find(t => t.niche === selectedNiche) || templates[0];

  const handleCopy = (text: string, field: string) => {
    navigator.clipboard.writeText(text);
    setCopiedField(field);
    setTimeout(() => setCopiedField(null), 2000);
  };

  const getFullTemplateText = (t: PromptTemplate) => {
    return `${t.hook}\n\n${t.body}\n\n${t.callToAction}\n\n${t.hashtags}`;
  };

  return (
    <div id="ai-prompt-sandbox" className="p-6 md:p-8 rounded-3xl bg-white border border-brand-beige-200 shadow-sm relative overflow-hidden">
      {/* Decorative background accent */}
      <div className="absolute top-0 right-0 w-48 h-48 bg-brand-pink-100 rounded-full blur-3xl opacity-50 -z-10" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-brand-gold-100 rounded-full blur-3xl opacity-40 -z-10" />

      <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
        <div>
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-brand-gold-100 text-brand-gold-700 tracking-wider uppercase mb-2">
            <Sparkles className="w-3.5 h-3.5" /> Interactive Sandbox
          </span>
          <h3 className="text-2xl md:text-3xl font-serif text-brand-charcoal">
            AI Content Prompt & Caption Simulator
          </h3>
          <p className="text-sm text-brand-charcoal-light mt-1 max-w-xl">
            Test a sample from our 365 Content System. Toggle your niche and content strategy goal to generate professional copy ideas instantly.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Controls Panel (4 columns) */}
        <div className="lg:col-span-5 space-y-6">
          <div>
            <label className="block text-xs font-semibold tracking-wider text-brand-gold-700 uppercase mb-3">
              1. Select Your Niche
            </label>
            <div className="grid grid-cols-1 gap-2.5">
              {niches.map((n) => (
                <button
                  key={n}
                  onClick={() => setSelectedNiche(n)}
                  className={`text-left px-4 py-3 rounded-xl border text-sm font-medium transition-all duration-300 ${
                    selectedNiche === n
                      ? 'bg-brand-pink-100 border-brand-pink-300 text-brand-charcoal ring-1 ring-brand-pink-300'
                      : 'bg-brand-beige-50 border-brand-beige-200 text-brand-charcoal-light hover:bg-brand-beige-100'
                  }`}
                >
                  {n}
                </button>
              ))}
            </div>
          </div>

          <div>
            <label className="block text-xs font-semibold tracking-wider text-brand-gold-700 uppercase mb-3">
              2. Choose Strategy Goal
            </label>
            <div className="flex flex-wrap gap-2">
              {goals.map((g) => (
                <button
                  key={g}
                  onClick={() => setSelectedGoal(g)}
                  className={`px-4 py-2.5 rounded-full border text-xs font-medium transition-all duration-300 ${
                    selectedGoal === g
                      ? 'bg-brand-charcoal border-brand-charcoal text-white shadow-sm'
                      : 'bg-brand-beige-50 border-brand-beige-200 text-brand-charcoal-light hover:bg-brand-beige-100'
                  }`}
                >
                  {g}
                </button>
              ))}
            </div>
          </div>

          <div className="p-4 rounded-xl bg-brand-gold-100/50 border border-brand-gold-500/20 text-xs text-brand-gold-700 flex gap-3">
            <Sparkles className="w-5 h-5 shrink-0 text-brand-gold-600 mt-0.5" />
            <div>
              <span className="font-semibold block mb-0.5">Need customized templates?</span>
              Our full **365 Content System** includes editable Canva structures matched with matching prompt templates like this for every single day of the year.
            </div>
          </div>
        </div>

        {/* Output Sandbox (7 columns) */}
        <div className="lg:col-span-7 flex flex-col h-full">
          <div className="border border-brand-beige-200 rounded-2xl overflow-hidden bg-brand-beige-50 shadow-inner flex flex-col flex-1">
            {/* Template Header */}
            <div className="px-5 py-3.5 bg-brand-beige-100/75 border-b border-brand-beige-200 flex items-center justify-between">
              <span className="text-xs font-mono text-brand-gold-700 flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-500 inline-block animate-pulse"></span>
                ACTIVE PROMPT TEMPLATE: {activeTemplate.title}
              </span>
              <button
                onClick={() => handleCopy(getFullTemplateText(activeTemplate), 'full')}
                className="text-xs text-brand-charcoal hover:text-brand-gold-600 font-medium flex items-center gap-1.5 py-1 px-2.5 rounded-lg hover:bg-brand-beige-200 transition-all duration-200"
              >
                {copiedField === 'full' ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-600" />
                    <span className="text-emerald-600">Copied Suite!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5" />
                    <span>Copy Full Copy</span>
                  </>
                )}
              </button>
            </div>

            {/* Template Body */}
            <div className="p-5 space-y-4 text-sm flex-1 font-sans">
              <AnimatePresence mode="wait">
                <motion.div
                  key={`${selectedNiche}-${selectedGoal}`}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.25 }}
                  className="space-y-4"
                >
                  {/* Hook */}
                  <div className="relative group p-3.5 bg-white border border-brand-pink-100 rounded-xl">
                    <span className="absolute -top-2.5 left-3 px-1.5 py-0.5 rounded text-[9px] font-bold tracking-wider uppercase bg-brand-pink-100 text-brand-pink-700 border border-brand-pink-200">
                      1. The Scroll-Stopping Hook
                    </span>
                    <p className="mt-1 font-semibold text-brand-charcoal pr-8 leading-relaxed">
                      {activeTemplate.hook}
                    </p>
                    <button
                      onClick={() => handleCopy(activeTemplate.hook, 'hook')}
                      className="absolute top-2.5 right-2.5 p-1 text-brand-beige-300 hover:text-brand-gold-600 transition-colors"
                      title="Copy Hook"
                    >
                      {copiedField === 'hook' ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4" />}
                    </button>
                  </div>

                  {/* Body */}
                  <div className="relative group p-3.5 bg-white border border-brand-beige-200 rounded-xl">
                    <span className="absolute -top-2.5 left-3 px-1.5 py-0.5 rounded text-[9px] font-bold tracking-wider uppercase bg-brand-beige-200 text-brand-charcoal-light border border-brand-beige-300">
                      2. Captivating Body Copy
                    </span>
                    <p className="mt-1 text-brand-charcoal-light whitespace-pre-line pr-8 leading-relaxed">
                      {activeTemplate.body}
                    </p>
                    <button
                      onClick={() => handleCopy(activeTemplate.body, 'body')}
                      className="absolute top-2.5 right-2.5 p-1 text-brand-beige-300 hover:text-brand-gold-600 transition-colors"
                      title="Copy Body"
                    >
                      {copiedField === 'body' ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4" />}
                    </button>
                  </div>

                  {/* Call to Action */}
                  <div className="relative group p-3.5 bg-white border border-brand-gold-100 rounded-xl">
                    <span className="absolute -top-2.5 left-3 px-1.5 py-0.5 rounded text-[9px] font-bold tracking-wider uppercase bg-brand-gold-100 text-brand-gold-700 border border-brand-gold-500/20">
                      3. High-Converting Call to Action
                    </span>
                    <p className="mt-1 font-medium text-brand-charcoal pr-8 leading-relaxed">
                      {activeTemplate.callToAction}
                    </p>
                    <button
                      onClick={() => handleCopy(activeTemplate.callToAction, 'cta')}
                      className="absolute top-2.5 right-2.5 p-1 text-brand-beige-300 hover:text-brand-gold-600 transition-colors"
                      title="Copy CTA"
                    >
                      {copiedField === 'cta' ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4" />}
                    </button>
                  </div>

                  {/* Hashtags */}
                  <div className="relative group p-3.5 bg-white border border-brand-beige-100 rounded-xl">
                    <span className="absolute -top-2.5 left-3 px-1.5 py-0.5 rounded text-[9px] font-bold tracking-wider uppercase bg-brand-beige-100 text-brand-charcoal-light">
                      4. Editorial Hashtag Cloud
                    </span>
                    <p className="mt-1 text-xs font-mono text-brand-gold-600 pr-8 leading-relaxed">
                      {activeTemplate.hashtags}
                    </p>
                    <button
                      onClick={() => handleCopy(activeTemplate.hashtags, 'tags')}
                      className="absolute top-2.5 right-2.5 p-1 text-brand-beige-300 hover:text-brand-gold-600 transition-colors"
                      title="Copy Hashtags"
                    >
                      {copiedField === 'tags' ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4" />}
                    </button>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
