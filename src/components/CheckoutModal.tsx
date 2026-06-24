import { useState, ChangeEvent, FormEvent } from 'react';
import { X, ShieldCheck, Lock, CreditCard, Sparkles, Check, Heart, Mail, User } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { ProductPackage } from '../types';

interface CheckoutModalProps {
  isOpen: boolean;
  onClose: () => void;
  product: ProductPackage | null;
  onCheckoutSuccess: (customerName: string, packageName: string) => void;
}

export default function CheckoutModal({ isOpen, onClose, product, onCheckoutSuccess }: CheckoutModalProps) {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [cardNumber, setCardNumber] = useState('');
  const [expiry, setExpiry] = useState('');
  const [cvv, setCvv] = useState('');
  const [promoCode, setPromoCode] = useState('');
  const [promoApplied, setPromoApplied] = useState(false);
  const [promoError, setPromoError] = useState('');
  
  // Checkout progress state
  const [isProcessing, setIsProcessing] = useState(false);
  const [processStep, setProcessStep] = useState(0);

  if (!product) return null;

  // Compute values
  const rawPrice = product.price;
  const discount = promoApplied ? Math.round(rawPrice * 0.10 * 100) / 100 : 0;
  const finalPrice = rawPrice - discount;

  // Formatting inputs
  const handleCardNumberChange = (e: ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value.replace(/\D/g, '');
    const formatted = val.replace(/(.{4})/g, '$1 ').trim().substring(0, 19);
    setCardNumber(formatted);
  };

  const handleExpiryChange = (e: ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value.replace(/\D/g, '');
    let formatted = val;
    if (val.length > 2) {
      formatted = `${val.substring(0, 2)}/${val.substring(2, 4)}`;
    }
    setExpiry(formatted.substring(0, 5));
  };

  const handleCvvChange = (e: ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value.replace(/\D/g, '').substring(0, 3);
    setCvv(val);
  };

  const applyPromo = () => {
    if (promoCode.trim().toUpperCase() === 'FEM10') {
      setPromoApplied(true);
      setPromoError('');
    } else {
      setPromoError('Invalid coupon code');
      setPromoApplied(false);
    }
  };

  const handlePaymentSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!email || !name || !cardNumber || !expiry || !cvv) {
      alert('Please complete all premium checkout fields.');
      return;
    }

    setIsProcessing(true);
    setProcessStep(1);

    // Simulate luxury merchant authorization pipeline
    setTimeout(() => {
      setProcessStep(2);
      setTimeout(() => {
        setProcessStep(3);
        setTimeout(() => {
          setIsProcessing(false);
          onCheckoutSuccess(name, product.name);
          onClose();
        }, 1200);
      }, 1200);
    }, 1200);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-xs flex items-center justify-center p-4 z-50 overflow-y-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 15 }}
            className="bg-white border border-brand-beige-200 rounded-3xl max-w-4xl w-full shadow-2xl relative overflow-hidden grid grid-cols-1 md:grid-cols-12"
          >
            {/* Left side: Premium Order Summary (5 cols) */}
            <div className="md:col-span-5 bg-brand-beige-100 p-6 md:p-8 flex flex-col justify-between border-r border-brand-beige-200">
              <div className="space-y-6">
                <div>
                  <span className="text-[10px] font-semibold tracking-widest text-brand-gold-700 uppercase block mb-1">YOUR INVESTMENT</span>
                  <h3 className="text-2xl font-serif text-brand-charcoal">Order Summary</h3>
                </div>

                {/* Selected Package Details */}
                <div className="p-4 rounded-2xl bg-white border border-brand-beige-200 space-y-3">
                  <div className="flex justify-between items-start">
                    <div>
                      <h4 className="font-serif font-bold text-brand-charcoal text-base">{product.name}</h4>
                      <p className="text-xs text-brand-charcoal-light mt-0.5">{product.tagline}</p>
                    </div>
                    <span className="text-lg font-serif font-bold text-brand-charcoal">${rawPrice}</span>
                  </div>

                  <div className="border-t border-brand-beige-100 pt-3 space-y-1.5">
                    {product.features.slice(0, 4).map((f, i) => (
                      <div key={i} className="flex items-center gap-2 text-xs text-brand-charcoal-light">
                        <Check className="w-3 h-3 text-brand-gold-600 shrink-0" />
                        <span className="truncate">{f}</span>
                      </div>
                    ))}
                    {product.features.length > 4 && (
                      <p className="text-[10px] text-brand-gold-700 font-medium">
                        + {product.features.length - 4} more premium elements included
                      </p>
                    )}
                  </div>
                </div>

                {/* Promo Code Entry */}
                <div className="space-y-2">
                  <label className="block text-xs font-semibold tracking-wider text-brand-charcoal-light uppercase">Have a Discount Code?</label>
                  <div className="flex gap-2">
                    <input
                      type="text"
                      placeholder="e.g. FEM10"
                      value={promoCode}
                      onChange={(e) => setPromoCode(e.target.value)}
                      disabled={promoApplied}
                      className="flex-1 px-3 py-2 bg-white border border-brand-beige-300 rounded-xl text-xs text-brand-charcoal uppercase focus:border-brand-gold-600 outline-none transition-colors"
                    />
                    <button
                      type="button"
                      onClick={applyPromo}
                      disabled={promoApplied}
                      className="px-4 py-2 bg-brand-charcoal text-white hover:bg-brand-gold-700 rounded-xl text-xs font-semibold transition-colors disabled:bg-emerald-50 disabled:text-emerald-700 disabled:border-emerald-200 border"
                    >
                      {promoApplied ? 'Applied' : 'Apply'}
                    </button>
                  </div>
                  {promoApplied && (
                    <span className="text-[11px] text-emerald-600 font-semibold block">✓ Code FEM10 has been applied (10% Off!)</span>
                  )}
                  {promoError && (
                    <span className="text-[11px] text-rose-500 font-medium block">✗ {promoError}</span>
                  )}
                </div>
              </div>

              {/* Price Calculation Bottom */}
              <div className="border-t border-brand-beige-200 pt-6 mt-6 space-y-2">
                <div className="flex justify-between text-xs text-brand-charcoal-light">
                  <span>Subtotal</span>
                  <span>${rawPrice.toFixed(2)}</span>
                </div>
                {promoApplied && (
                  <div className="flex justify-between text-xs text-emerald-600 font-semibold">
                    <span>Discount (10%)</span>
                    <span>-${discount.toFixed(2)}</span>
                  </div>
                )}
                <div className="flex justify-between text-xs text-brand-charcoal-light">
                  <span>Tax</span>
                  <span>$0.00</span>
                </div>
                <div className="flex justify-between items-center text-brand-charcoal pt-2 border-t border-brand-beige-100 font-serif">
                  <span className="text-base font-bold">Total Due</span>
                  <span className="text-xl font-bold">${finalPrice.toFixed(2)}</span>
                </div>

                <div className="pt-4 flex items-center justify-center gap-2 text-[10px] text-brand-beige-300">
                  <ShieldCheck className="w-4 h-4 text-brand-gold-600 shrink-0" />
                  <span>Secure 256-Bit SSL Encrypted Sandbox</span>
                </div>
              </div>
            </div>

            {/* Right side: Modern Form inputs (7 cols) */}
            <form onSubmit={handlePaymentSubmit} className="md:col-span-7 p-6 md:p-8 flex flex-col justify-between space-y-6 relative">
              <button
                type="button"
                onClick={onClose}
                className="absolute top-4 right-4 p-1.5 rounded-full hover:bg-brand-beige-100 text-brand-charcoal transition-all"
                aria-label="Close"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="space-y-6">
                <div>
                  <h3 className="text-2xl font-serif text-brand-charcoal leading-tight">Secure Checkout</h3>
                  <p className="text-xs text-brand-charcoal-light mt-0.5">Please provide your details below for instant digital download delivery.</p>
                </div>

                <div className="space-y-4">
                  {/* Customer Information */}
                  <div className="space-y-3">
                    <span className="block text-xs font-semibold tracking-wider text-brand-gold-700 uppercase">1. Delivery Information</span>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <div className="relative">
                        <User className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-brand-beige-300" />
                        <input
                          type="text"
                          required
                          placeholder="Full Name"
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          className="w-full pl-10 pr-4 py-2.5 bg-brand-beige-50 border border-brand-beige-300 rounded-xl text-xs text-brand-charcoal focus:bg-white focus:border-brand-gold-600 outline-none transition-all"
                        />
                      </div>
                      <div className="relative">
                        <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-brand-beige-300" />
                        <input
                          type="email"
                          required
                          placeholder="Email Address"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          className="w-full pl-10 pr-4 py-2.5 bg-brand-beige-50 border border-brand-beige-300 rounded-xl text-xs text-brand-charcoal focus:bg-white focus:border-brand-gold-600 outline-none transition-all"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Payment Details */}
                  <div className="space-y-3">
                    <span className="block text-xs font-semibold tracking-wider text-brand-gold-700 uppercase">2. Elegant Payment Details</span>
                    <div className="p-4 bg-brand-beige-50 border border-brand-beige-200 rounded-2xl space-y-3">
                      <div className="relative">
                        <CreditCard className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-brand-beige-300" />
                        <input
                          type="text"
                          required
                          placeholder="Card Number (e.g. 4111 2222 3333 4444)"
                          value={cardNumber}
                          onChange={handleCardNumberChange}
                          className="w-full pl-10 pr-4 py-2.5 bg-white border border-brand-beige-300 rounded-xl text-xs text-brand-charcoal focus:border-brand-gold-600 outline-none transition-all"
                        />
                      </div>
                      <div className="grid grid-cols-2 gap-3">
                        <input
                          type="text"
                          required
                          placeholder="MM/YY"
                          value={expiry}
                          onChange={handleExpiryChange}
                          className="w-full px-3.5 py-2.5 bg-white border border-brand-beige-300 rounded-xl text-xs text-brand-charcoal focus:border-brand-gold-600 outline-none transition-all text-center"
                        />
                        <input
                          type="password"
                          required
                          placeholder="CVV"
                          value={cvv}
                          onChange={handleCvvChange}
                          className="w-full px-3.5 py-2.5 bg-white border border-brand-beige-300 rounded-xl text-xs text-brand-charcoal focus:border-brand-gold-600 outline-none transition-all text-center"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Submit Checkout Button */}
              <div className="space-y-3 pt-4">
                <button
                  type="submit"
                  className="w-full bg-brand-charcoal text-white hover:bg-brand-gold-700 py-3 rounded-xl font-medium text-sm transition-all duration-300 shadow-md flex items-center justify-center gap-2"
                >
                  <Lock className="w-4 h-4" />
                  <span>Secure Complete Payment • ${finalPrice.toFixed(2)}</span>
                </button>
                <p className="text-[10px] text-brand-beige-300 text-center">
                  By clicking, you authorize InstagramSolution to deliver these digital assets immediately to your inbox. All transactions are sandbox-simulated.
                </p>
              </div>
            </form>

            {/* Processing Overlay (High Fidelity Step Progress) */}
            <AnimatePresence>
              {isProcessing && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="absolute inset-0 bg-white/95 backdrop-blur-xs flex flex-col items-center justify-center p-6 text-center space-y-6 z-50"
                >
                  <div className="relative">
                    <div className="w-16 h-16 rounded-full border-2 border-brand-pink-100 border-t-brand-gold-500 animate-spin" />
                    <Sparkles className="w-6 h-6 text-brand-gold-500 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 animate-pulse" />
                  </div>

                  <div className="space-y-2 max-w-sm">
                    <h4 className="font-serif text-xl font-bold text-brand-charcoal">Authorizing Transaction</h4>
                    
                    {/* Status Logs */}
                    <div className="space-y-1.5 font-mono text-[10px] text-brand-charcoal-light">
                      <div className="flex items-center justify-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                        <span>Establishing SSL handshake... Secured</span>
                      </div>
                      
                      {processStep >= 2 && (
                        <div className="flex items-center justify-center gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                          <span>Contacting merchant clearinghouse... Approved</span>
                        </div>
                      )}

                      {processStep >= 3 && (
                        <div className="flex items-center justify-center gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                          <span>Configuring secure Canva templates... Active</span>
                        </div>
                      )}
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
