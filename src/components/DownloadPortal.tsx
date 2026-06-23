import { Download, Sparkles, Layout, Calendar, Heart, FileText, ArrowRight, MessageSquare, Check, ExternalLink } from 'lucide-react';
import { PageView } from '../types';

interface DownloadPortalProps {
  customerName: string;
  packageName: string;
  onNavigateHome: () => void;
}

export default function DownloadPortal({ customerName, packageName, onNavigateHome }: DownloadPortalProps) {
  const getTemplates = () => {
    switch (packageName) {
      case 'Basic Package':
        return [
          {
            name: '365 Instagram Post Templates',
            type: 'Canva Link',
            size: 'Fully Editable',
            color: 'bg-brand-pink-100 text-brand-pink-300',
            icon: Layout,
            url: 'https://canva.com'
          },
          {
            name: '365 Instagram Story Templates',
            type: 'Canva Link',
            size: 'Fully Editable',
            color: 'bg-brand-beige-100 text-brand-charcoal-light',
            icon: Layout,
            url: 'https://canva.com'
          },
          {
            name: '365 Content Prompts Library',
            type: 'PDF Guide & Sheet',
            size: '4.8 MB',
            color: 'bg-brand-gold-100 text-brand-gold-700',
            icon: FileText,
            url: '#'
          }
        ];
      case 'Premium Package':
        return [
          {
            name: '365 Instagram Post Templates',
            type: 'Canva Link',
            size: 'Fully Editable',
            color: 'bg-brand-pink-100 text-brand-pink-300',
            icon: Layout,
            url: 'https://canva.com'
          },
          {
            name: '365 Instagram Story Templates',
            type: 'Canva Link',
            size: 'Fully Editable',
            color: 'bg-brand-beige-100 text-brand-charcoal-light',
            icon: Layout,
            url: 'https://canva.com'
          },
          {
            name: 'Instagram Carousel Blueprints',
            type: 'Canva Link',
            size: '40 Layouts',
            color: 'bg-brand-pink-50 text-brand-pink-300',
            icon: Layout,
            url: 'https://canva.com'
          },
          {
            name: 'Highlight Covers (Neutral Gold)',
            type: 'Canva Link',
            size: '50 Icons',
            color: 'bg-brand-gold-100 text-brand-gold-700',
            icon: Heart,
            url: 'https://canva.com'
          },
          {
            name: 'Interactive Content Calendar',
            type: 'Google Sheet & Notion',
            size: 'Template Link',
            color: 'bg-brand-beige-200 text-brand-charcoal',
            icon: Calendar,
            url: 'https://notion.so'
          },
          {
            name: '365 Done-For-You Captions',
            type: 'Excel Sheet',
            size: '1.2 MB',
            color: 'bg-brand-gold-100 text-brand-gold-700',
            icon: FileText,
            url: '#'
          }
        ];
      case 'Ultimate Bundle':
      default:
        return [
          {
            name: '365 Instagram Post Templates',
            type: 'Canva Link',
            size: 'Fully Editable',
            color: 'bg-brand-pink-100 text-brand-pink-300',
            icon: Layout,
            url: 'https://canva.com'
          },
          {
            name: '365 Instagram Story Templates',
            type: 'Canva Link',
            size: 'Fully Editable',
            color: 'bg-brand-beige-100 text-brand-charcoal-light',
            icon: Layout,
            url: 'https://canva.com'
          },
          {
            name: 'Instagram Carousel Blueprints',
            type: 'Canva Link',
            size: '40 Layouts',
            color: 'bg-brand-pink-50 text-brand-pink-300',
            icon: Layout,
            url: 'https://canva.com'
          },
          {
            name: 'Highlight Covers (Neutral Gold)',
            type: 'Canva Link',
            size: '50 Icons',
            color: 'bg-brand-gold-100 text-brand-gold-700',
            icon: Heart,
            url: 'https://canva.com'
          },
          {
            name: 'Interactive Content Calendar',
            type: 'Google Sheet & Notion',
            size: 'Template Link',
            color: 'bg-brand-beige-200 text-brand-charcoal',
            icon: Calendar,
            url: 'https://notion.so'
          },
          {
            name: 'Brand Style Guide Spreadsheet',
            type: 'Canva Template',
            size: '25-pages',
            color: 'bg-brand-gold-100 text-brand-gold-700',
            icon: FileText,
            url: 'https://canva.com'
          },
          {
            name: 'Ultimate AI Content Prompt Library',
            type: 'Web Sandbox & PDF',
            size: '1200+ Prompts',
            color: 'bg-brand-pink-200 text-brand-charcoal',
            icon: Sparkles,
            url: '#ai-prompt-sandbox'
          },
          {
            name: '365 Caption Mastery templates',
            type: 'Notion Database',
            size: 'Template Link',
            color: 'bg-brand-gold-100 text-brand-gold-700',
            icon: FileText,
            url: 'https://notion.so'
          }
        ];
    }
  };

  const templatesList = getTemplates();

  return (
    <div className="max-w-5xl mx-auto px-4 py-12 md:py-16">
      {/* Confetti Celebration Style Header */}
      <div className="text-center space-y-4 mb-12">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-50 text-emerald-700 border border-emerald-200 mb-2">
          <Check className="w-3.5 h-3.5" /> Order Successfully Placed
        </div>
        <h1 className="text-4xl md:text-5xl font-serif text-brand-charcoal leading-tight">
          Your Creative Studio is Ready!
        </h1>
        <p className="text-brand-charcoal-light max-w-xl mx-auto text-base">
          Welcome to the family, <span className="font-semibold text-brand-charcoal">{customerName || 'Gorgeous Creator'}</span>. Your download and template access links for the <span className="font-semibold text-brand-charcoal">{packageName}</span> have been generated below.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Resource List (7 columns) */}
        <div className="lg:col-span-8 space-y-4">
          <div className="p-4 bg-brand-pink-100/50 border border-brand-pink-200/50 rounded-2xl flex items-center gap-3">
            <Sparkles className="w-5 h-5 text-brand-pink-300 shrink-0" />
            <p className="text-xs text-brand-charcoal-light">
              <span className="font-bold text-brand-charcoal">Quick tip:</span> Simply click <span className="font-semibold">"Access Template"</span> to open directly inside Canva. Be sure to make a copy for your account before editing!
            </p>
          </div>

          <div className="space-y-3">
            {templatesList.map((tmpl, idx) => {
              const IconComp = tmpl.icon;
              return (
                <div 
                  key={idx}
                  className="p-4 md:p-5 bg-white border border-brand-beige-200 rounded-2xl flex flex-col sm:flex-row sm:items-center justify-between gap-4 hover:border-brand-gold-500/30 transition-all duration-300 shadow-xs"
                >
                  <div className="flex items-center gap-4">
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 ${tmpl.color}`}>
                      <IconComp className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-serif text-base font-semibold text-brand-charcoal">
                        {tmpl.name}
                      </h4>
                      <div className="flex items-center gap-2 mt-0.5">
                        <span className="text-xs font-mono text-brand-gold-700 bg-brand-gold-100/40 px-1.5 py-0.5 rounded">
                          {tmpl.type}
                        </span>
                        <span className="text-xs text-brand-charcoal-light">
                          • {tmpl.size}
                        </span>
                      </div>
                    </div>
                  </div>

                  <a
                    href={tmpl.url}
                    target={tmpl.url.startsWith('http') ? '_blank' : '_self'}
                    rel="referrer"
                    className="inline-flex items-center justify-center gap-2 bg-brand-beige-50 hover:bg-brand-charcoal border border-brand-beige-300 hover:border-brand-charcoal text-brand-charcoal-light hover:text-white px-4 py-2.5 rounded-xl text-xs font-semibold transition-all duration-300 whitespace-nowrap"
                  >
                    {tmpl.type.includes('Canva') || tmpl.type.includes('Notion') ? (
                      <>
                        <span>Access Link</span>
                        <ExternalLink className="w-3.5 h-3.5" />
                      </>
                    ) : (
                      <>
                        <span>Download</span>
                        <Download className="w-3.5 h-3.5" />
                      </>
                    )}
                  </a>
                </div>
              );
            })}
          </div>

          <div className="pt-4 flex justify-between">
            <button
              onClick={onNavigateHome}
              className="inline-flex items-center gap-2 text-sm text-brand-charcoal-light hover:text-brand-charcoal font-semibold"
            >
              ← Return to Main Store
            </button>
          </div>
        </div>

        {/* Dashboard Sidebar Instruction (4 columns) */}
        <div className="lg:col-span-4 space-y-6">
          <div className="p-6 rounded-3xl bg-white border border-brand-beige-200 shadow-xs">
            <h3 className="font-serif text-lg font-bold text-brand-charcoal mb-4 border-b border-brand-beige-200 pb-3">
              How to get started:
            </h3>
            <ul className="space-y-4 text-xs text-brand-charcoal-light">
              <li className="flex gap-3">
                <span className="w-5 h-5 rounded-full bg-brand-gold-100 flex items-center justify-center text-brand-gold-700 font-mono text-[10px] shrink-0 font-bold">1</span>
                <div>
                  <strong className="text-brand-charcoal block mb-0.5">Create a Free Canva Account</strong>
                  If you don't have one, sign up at Canva.com. You do **not** need Canva Pro; all of our elements are designed for the free tier.
                </div>
              </li>
              <li className="flex gap-3">
                <span className="w-5 h-5 rounded-full bg-brand-gold-100 flex items-center justify-center text-brand-gold-700 font-mono text-[10px] shrink-0 font-bold">2</span>
                <div>
                  <strong className="text-brand-charcoal block mb-0.5">Load and Edit</strong>
                  Click "Access Link" on your chosen templates. Choose "Use Template" inside Canva, customize your brand colors and text, and export as JPG/PNG!
                </div>
              </li>
              <li className="flex gap-3">
                <span className="w-5 h-5 rounded-full bg-brand-gold-100 flex items-center justify-center text-brand-gold-700 font-mono text-[10px] shrink-0 font-bold">3</span>
                <div>
                  <strong className="text-brand-charcoal block mb-0.5">Use the Caption Guide</strong>
                  Match our captions spreadsheets with your customized graphics for single-click daily postings.
                </div>
              </li>
            </ul>
          </div>

          <div className="p-6 rounded-3xl bg-brand-beige-100 border border-brand-beige-200 text-center space-y-4">
            <div className="w-10 h-10 rounded-full bg-brand-pink-100 text-brand-pink-300 flex items-center justify-center mx-auto">
              <MessageSquare className="w-5 h-5" />
            </div>
            <div>
              <h4 className="font-serif font-semibold text-brand-charcoal">Need Creative Support?</h4>
              <p className="text-xs text-brand-charcoal-light mt-1">
                We're here to help you shine! Email us anytime at hello@femsocialstudio.com. Average response time is under 12 hours.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
