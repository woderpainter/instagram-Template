import { useState, useEffect, FormEvent } from 'react';
import { X, Sparkles, Mail, Check, Percent } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export function EmailCapturePopup() {
  const [isOpen, setIsOpen] = useState(false);
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    // Check if user already saw or submitted
    const isSubscribed = localStorage.getItem('femsocial_subscribed');
    const isClosed = localStorage.getItem('femsocial_email_popup_closed');
    
    if (!isSubscribed && !isClosed) {
      const timer = setTimeout(() => {
        setIsOpen(true);
      }, 7000); // Trigger after 7 seconds
      return () => clearTimeout(timer);
    }
  }, []);

  const handleClose = () => {
    setIsOpen(false);
    localStorage.setItem('femsocial_email_popup_closed', 'true');
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setIsSubmitted(true);
      localStorage.setItem('femsocial_subscribed', 'true');
      setTimeout(() => {
        setIsOpen(false);
      }, 3000); // close after 3s
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 bg-black/40 backdrop-blur-xs flex items-center justify-center p-4 z-50">
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="bg-white border border-brand-beige-200 rounded-3xl p-6 md:p-8 max-w-md w-full shadow-2xl relative overflow-hidden"
          >
            {/* Decorative graphics */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-brand-pink-100 rounded-full blur-2xl opacity-60 -z-10" />
            
            <button
              onClick={handleClose}
              className="absolute top-4 right-4 p-1.5 rounded-full hover:bg-brand-beige-100 text-brand-charcoal transition-all"
              aria-label="Close"
            >
              <X className="w-5 h-5" />
            </button>

            {!isSubmitted ? (
              <div className="text-center space-y-4">
                <div className="w-12 h-12 rounded-full bg-brand-pink-100 flex items-center justify-center mx-auto text-brand-pink-300">
                  <Sparkles className="w-6 h-6" />
                </div>

                <div className="space-y-1">
                  <span className="text-xs font-semibold tracking-widest text-brand-gold-700 uppercase">Exclusive Free Gift</span>
                  <h3 className="text-2xl md:text-3xl font-serif text-brand-charcoal leading-tight">
                    Get 10 Aesthetic Story Templates
                  </h3>
                  <p className="text-sm text-brand-charcoal-light">
                    Join our club of 15,000+ female entrepreneurs and get a headstart with these gorgeous Canva templates, totally free.
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-3 mt-4">
                  <div className="relative">
                    <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4.5 h-4.5 text-brand-beige-300" />
                    <input
                      type="email"
                      required
                      placeholder="Enter your elegant email..."
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full pl-11 pr-4 py-3 bg-brand-beige-50 border border-brand-beige-300 rounded-xl text-sm text-brand-charcoal focus:bg-white focus:ring-1 focus:ring-brand-gold-600 focus:border-brand-gold-600 outline-none transition-all"
                    />
                  </div>
                  
                  <button
                    type="submit"
                    className="w-full bg-brand-charcoal text-white py-3 rounded-xl font-medium text-sm hover:bg-brand-gold-700 shadow-md transition-all duration-300"
                  >
                    Send Me The Freebies
                  </button>
                </form>

                <p className="text-[11px] text-brand-beige-300">
                  By signing up, you agree to receive aesthetic tips. Unsubscribe anytime.
                </p>
              </div>
            ) : (
              <div className="text-center py-8 space-y-4">
                <div className="w-16 h-16 rounded-full bg-emerald-50 flex items-center justify-center mx-auto border border-emerald-100">
                  <Check className="w-8 h-8 text-emerald-500" />
                </div>
                <div className="space-y-1">
                  <h3 className="text-2xl font-serif text-brand-charcoal">Check Your Inbox!</h3>
                  <p className="text-sm text-brand-charcoal-light max-w-xs mx-auto">
                    We just sent the 10 Canva Story Templates directly to <span className="font-medium text-brand-charcoal">{email}</span>. Enjoy your brand upgrade!
                  </p>
                </div>
              </div>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}

export function ExitIntentPopup() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Check if they already dismissed exit intent
    const dismissed = localStorage.getItem('femsocial_exit_dismissed');
    
    if (dismissed) return;

    const handleMouseLeave = (e: MouseEvent) => {
      // Trigger if user moves cursor near the top edge of screen, suggesting a tab close
      if (e.clientY < 30) {
        setIsOpen(true);
      }
    };

    document.addEventListener('mouseleave', handleMouseLeave);
    return () => {
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  const handleDismiss = () => {
    setIsOpen(false);
    localStorage.setItem('femsocial_exit_dismissed', 'true');
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 bg-black/40 backdrop-blur-xs flex items-center justify-center p-4 z-50">
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: -20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: -20 }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="bg-white border-2 border-brand-gold-500/30 rounded-3xl p-6 md:p-8 max-w-md w-full shadow-2xl relative overflow-hidden text-center"
          >
            {/* Soft pink gradient background glow */}
            <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-brand-pink-200 via-brand-gold-500 to-brand-pink-100" />
            <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-brand-gold-100 rounded-full blur-3xl opacity-50 -z-10" />

            <button
              onClick={handleDismiss}
              className="absolute top-4 right-4 p-1.5 rounded-full hover:bg-brand-beige-100 text-brand-charcoal transition-all"
              aria-label="Close"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="w-12 h-12 rounded-full bg-brand-gold-100 flex items-center justify-center mx-auto text-brand-gold-700 mb-4">
              <Percent className="w-5 h-5" />
            </div>

            <div className="space-y-2">
              <span className="text-xs font-semibold tracking-widest text-brand-pink-300 uppercase">Wait! Don't Miss Out</span>
              <h3 className="text-2xl md:text-3xl font-serif text-brand-charcoal leading-tight">
                Get an Extra 10% Off
              </h3>
              <p className="text-sm text-brand-charcoal-light">
                Ready to elevate your Instagram? Try the **Ultimate Content Bundle** today with an extra discount. Code is active for 15 minutes!
              </p>
            </div>

            {/* Code Box */}
            <div className="my-5 p-4 bg-brand-beige-100 border border-brand-beige-300 rounded-2xl relative">
              <span className="block text-[10px] font-mono uppercase text-brand-gold-700 mb-1">YOUR EXCLUSIVE PROMO CODE</span>
              <span className="text-2xl font-mono font-bold tracking-wider text-brand-charcoal">FEM10</span>
              <button
                onClick={() => {
                  navigator.clipboard.writeText('FEM10');
                  alert('Discount code "FEM10" copied to your clipboard!');
                }}
                className="mt-2 block mx-auto text-xs font-medium text-brand-gold-700 hover:text-brand-gold-600 underline"
              >
                Copy Code
              </button>
            </div>

            <div className="space-y-3">
              <button
                onClick={handleDismiss}
                className="w-full bg-brand-charcoal text-white py-3 rounded-xl font-medium text-sm hover:bg-brand-gold-700 shadow-md transition-all duration-300"
              >
                Claim My 10% Discount
              </button>
              <button
                onClick={handleDismiss}
                className="text-xs text-brand-beige-300 hover:text-brand-charcoal-light transition-colors"
              >
                No thanks, I'll pay full price
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
