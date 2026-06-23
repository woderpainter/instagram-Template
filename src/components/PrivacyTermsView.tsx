interface PrivacyTermsViewProps {
  type: 'privacy' | 'terms';
}

export default function PrivacyTermsView({ type }: PrivacyTermsViewProps) {
  const isPrivacy = type === 'privacy';

  return (
    <div className="max-w-3xl mx-auto px-4 py-12 md:py-16 space-y-8 animate-fade-in">
      <div className="text-center space-y-2">
        <span className="text-[10px] font-semibold tracking-widest text-brand-gold-700 uppercase font-mono">
          LAST UPDATED: JUNE 23, 2026
        </span>
        <h1 className="text-4xl font-serif text-brand-charcoal">
          {isPrivacy ? 'Privacy Policy' : 'Terms & Conditions'}
        </h1>
        <p className="text-xs text-brand-charcoal-light max-w-md mx-auto">
          Please read this document carefully to understand how FemSocial Studio manages digital asset agreements and visitor data privacy.
        </p>
      </div>

      <div className="bg-white border border-brand-beige-200 rounded-3xl p-6 md:p-8 space-y-6 text-sm text-brand-charcoal-light leading-relaxed font-sans shadow-xs">
        {isPrivacy ? (
          <>
            <section className="space-y-2">
              <h3 className="font-serif text-lg font-bold text-brand-charcoal">1. Information We Collect</h3>
              <p>
                We collect personal information that you provide directly to us when purchasing our digital template assets or subscribing to our email capture systems. This includes your name, email address, payment billing details, and any business details (such as Instagram handles) entered to customize the AI library experience.
              </p>
            </section>

            <section className="space-y-2">
              <h3 className="font-serif text-lg font-bold text-brand-charcoal">2. How We Use Your Information</h3>
              <p>
                We utilize your personal information exclusively to:
              </p>
              <ul className="list-disc pl-5 space-y-1">
                <li>Generate and deliver your instant Canva template download credentials.</li>
                <li>Verify fraud protection during payment authorization sandbox simulations.</li>
                <li>Send premium creative resources, industry tips, and special promotional offers if you explicitly opted into our email list.</li>
              </ul>
            </section>

            <section className="space-y-2">
              <h3 className="font-serif text-lg font-bold text-brand-charcoal">3. Digital Storage and Security</h3>
              <p>
                Your personal data is encrypted through standard 256-bit Secure Sockets Layer (SSL) channels. We do not store, process, or keep credit card numbers locally; all payments are proxied to secure sandbox clearing partners.
              </p>
            </section>

            <section className="space-y-2">
              <h3 className="font-serif text-lg font-bold text-brand-charcoal">4. Cookies and Web Analytics</h3>
              <p>
                We use small data files called "cookies" to preserve user preferences, monitor your checkout cart state, record items in your creative wishlist, and evaluate traffic density to optimize the premium website loading speeds.
              </p>
            </section>
          </>
        ) : (
          <>
            <section className="space-y-2">
              <h3 className="font-serif text-lg font-bold text-brand-charcoal">1. Intellectual Property & Digital License</h3>
              <p>
                Upon purchasing any template package (Basic, Premium, or Ultimate) from FemSocial Studio, you are granted a **single-user, non-exclusive, non-transferable personal and commercial license** to customize and publish the graphics on your personal or company social media feeds.
              </p>
              <p className="font-semibold text-brand-charcoal">
                You are strictly prohibited from:
              </p>
              <ul className="list-disc pl-5 space-y-1">
                <li>Reselling, repackaging, or redistributing the raw Canva links, content spreadsheets, or AI prompt databases as your own digital products.</li>
                <li>Sharing download links, files, or Canva workspace URLs with non-purchasing team members or external networks.</li>
              </ul>
            </section>

            <section className="space-y-2">
              <h3 className="font-serif text-lg font-bold text-brand-charcoal">2. Refund & Cancellation Policy</h3>
              <p>
                Because our products are **instant digital downloads**, they are deemed "used" upon delivery and are therefore **non-refundable and non-exchangeable**. All sales are final. We highly encourage testing our Interactive AI Prompt Sandbox or looking through our product gallery mockups before finalizing checkout.
              </p>
            </section>

            <section className="space-y-2">
              <h3 className="font-serif text-lg font-bold text-brand-charcoal">3. Canva Compatibility</h3>
              <p>
                Our files are explicitly built to integrate with Canva.com. You do not need a Canva Pro license to customize the files; however, you must create a free personal Canva account to load and modify the templates. FemSocial Studio is an independent creative brand and is not officially affiliated with Canva, Inc.
              </p>
            </section>

            <section className="space-y-2">
              <h3 className="font-serif text-lg font-bold text-brand-charcoal">4. Limitation of Liability</h3>
              <p>
                While we design high-converting visual products, social media algorithms fluctuate constantly. FemSocial Studio makes no guarantees regarding specific follower growth numbers, client booking counts, or revenue metrics.
              </p>
            </section>
          </>
        )}
      </div>
    </div>
  );
}
