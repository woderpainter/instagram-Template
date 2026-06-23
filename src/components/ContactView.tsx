import { useState, FormEvent } from 'react';
import { Mail, Check, MessageSquare, Send, Sparkles, MapPin, Globe } from 'lucide-react';
import { motion } from 'motion/react';

export default function ContactView() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [instagram, setInstagram] = useState('');
  const [subject, setSubject] = useState('support');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (name && email && message) {
      setSubmitted(true);
    }
  };

  return (
    <div className="max-w-5xl mx-auto px-4 py-12 md:py-16">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        {/* Left column: Contact info & logistics (4 cols) */}
        <div className="lg:col-span-4 space-y-8">
          <div className="space-y-3">
            <span className="text-xs font-semibold tracking-widest text-brand-gold-700 uppercase">WE ARE HERE FOR YOU</span>
            <h1 className="text-4xl font-serif text-brand-charcoal leading-tight">Get in Touch</h1>
            <p className="text-sm text-brand-charcoal-light leading-relaxed">
              Have a question about our Instagram systems or need help with a custom order? Drop us a line and our dedicated client happiness team will get back to you within 12 hours.
            </p>
          </div>

          <div className="space-y-4 border-t border-brand-beige-200 pt-6">
            <div className="flex gap-4 items-center">
              <div className="w-10 h-10 rounded-full bg-brand-pink-100 text-brand-pink-300 flex items-center justify-center shrink-0">
                <Mail className="w-5 h-5" />
              </div>
              <div>
                <span className="block text-[10px] font-mono text-brand-gold-700 uppercase">EMAIL SUPPORT</span>
                <span className="text-sm font-semibold text-brand-charcoal">hello@femsocialstudio.com</span>
              </div>
            </div>

            <div className="flex gap-4 items-center">
              <div className="w-10 h-10 rounded-full bg-brand-gold-100 text-brand-gold-700 flex items-center justify-center shrink-0">
                <Globe className="w-5 h-5" />
              </div>
              <div>
                <span className="block text-[10px] font-mono text-brand-gold-700 uppercase">OFFICE HOURS</span>
                <span className="text-sm font-semibold text-brand-charcoal">Mon - Fri • 9:00 AM - 6:00 PM EST</span>
              </div>
            </div>
          </div>

          <div className="p-6 rounded-2xl bg-brand-beige-100 border border-brand-beige-200 text-xs text-brand-charcoal-light space-y-2">
            <span className="font-semibold text-brand-charcoal block">Instant Digital Delivery Guarantee</span>
            <p>
              Please note: Our checkout system generates template download links immediately. If you did not receive your delivery email, please check your spam folder or reach out directly with your order email address.
            </p>
          </div>
        </div>

        {/* Right column: Interactive form (8 cols) */}
        <div className="lg:col-span-8">
          <div className="bg-white border border-brand-beige-200 rounded-3xl p-6 md:p-8 shadow-xs relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-brand-pink-100 rounded-full blur-2xl opacity-40 -z-10" />

            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-12 space-y-6"
              >
                <div className="w-16 h-16 rounded-full bg-emerald-50 border border-emerald-100 flex items-center justify-center mx-auto text-emerald-500">
                  <Check className="w-8 h-8 animate-bounce" />
                </div>
                <div className="space-y-2 max-w-sm mx-auto">
                  <h3 className="font-serif text-2xl font-bold text-brand-charcoal">Message Delivered!</h3>
                  <p className="text-sm text-brand-charcoal-light">
                    Thank you, <span className="font-semibold text-brand-charcoal">{name}</span>! We have received your inquiry regarding **{subject === 'support' ? 'Customer Support' : subject === 'collab' ? 'Partnerships' : 'Custom Orders'}** and will respond within 12 hours.
                  </p>
                </div>
                <button
                  onClick={() => {
                    setSubmitted(false);
                    setName('');
                    setEmail('');
                    setInstagram('');
                    setMessage('');
                  }}
                  className="px-5 py-2.5 bg-brand-beige-50 hover:bg-brand-charcoal text-brand-charcoal-light hover:text-white border border-brand-beige-300 hover:border-brand-charcoal rounded-xl text-xs font-semibold transition-all"
                >
                  Send Another Inquiry
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <h3 className="font-serif text-2xl font-bold text-brand-charcoal leading-tight">Send an Inquiry</h3>
                  <p className="text-xs text-brand-charcoal-light mt-0.5">Please provide your details below to speak with our support and design team.</p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="block text-xs font-semibold tracking-wider text-brand-charcoal-light uppercase">Full Name</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Amara"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full px-4 py-2.5 bg-brand-beige-50 border border-brand-beige-300 rounded-xl text-xs text-brand-charcoal focus:bg-white focus:border-brand-gold-600 outline-none transition-all"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="block text-xs font-semibold tracking-wider text-brand-charcoal-light uppercase">Email Address</label>
                    <input
                      type="email"
                      required
                      placeholder="e.g. hello@business.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full px-4 py-2.5 bg-brand-beige-50 border border-brand-beige-300 rounded-xl text-xs text-brand-charcoal focus:bg-white focus:border-brand-gold-600 outline-none transition-all"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="block text-xs font-semibold tracking-wider text-brand-charcoal-light uppercase">Instagram Handle</label>
                    <input
                      type="text"
                      placeholder="e.g. @femsocial"
                      value={instagram}
                      onChange={(e) => setInstagram(e.target.value)}
                      className="w-full px-4 py-2.5 bg-brand-beige-50 border border-brand-beige-300 rounded-xl text-xs text-brand-charcoal focus:bg-white focus:border-brand-gold-600 outline-none transition-all"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="block text-xs font-semibold tracking-wider text-brand-charcoal-light uppercase">Inquiry Category</label>
                    <select
                      value={subject}
                      onChange={(e) => setSubject(e.target.value)}
                      className="w-full px-4 py-2.5 bg-brand-beige-50 border border-brand-beige-300 rounded-xl text-xs text-brand-charcoal focus:bg-white focus:border-brand-gold-600 outline-none transition-all"
                    >
                      <option value="support">Customer & Delivery Support</option>
                      <option value="custom">Custom Template Design</option>
                      <option value="collab">Partnership / Influencer Program</option>
                      <option value="general">General Inquiries</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="block text-xs font-semibold tracking-wider text-brand-charcoal-light uppercase">Your Message</label>
                  <textarea
                    required
                    rows={5}
                    placeholder="Tell us about your brand goals, template questions, or order assistance details..."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="w-full px-4 py-2.5 bg-brand-beige-50 border border-brand-beige-300 rounded-xl text-xs text-brand-charcoal focus:bg-white focus:border-brand-gold-600 outline-none transition-all"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-brand-charcoal text-white hover:bg-brand-gold-700 py-3 rounded-xl font-medium text-sm transition-all duration-300 shadow-md flex items-center justify-center gap-2"
                >
                  <Send className="w-4 h-4" />
                  <span>Send Secure Message</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
