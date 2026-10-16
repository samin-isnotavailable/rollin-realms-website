import React, { useState, useEffect } from 'react';
import { CONTACT_INFO, MEDIA, SERVICES } from '../data/content.ts';
import { MapPin, Phone, Mail, Send, CheckCircle2, Facebook, Instagram } from 'lucide-react';

interface ContactProps {
  onOpenLightbox: (src: string, title: string) => void;
}

export const Contact: React.FC<ContactProps> = ({ onOpenLightbox }) => {
  const emptyForm = {
    name: '',
    email: '',
    phone: '',
    projectType: 'Television Video Commercial (TVC)',
    message: '',
    botcheck: false, // honeypot: real users never tick this hidden box
  };
  const [formData, setFormData] = useState(emptyForm);
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  // Service buttons elsewhere fire 'rr:book' with a project format: preselect it and scroll to the form.
  useEffect(() => {
    const onBook = (e: Event) => {
      const projectType = (e as CustomEvent<{ projectType?: string }>).detail?.projectType;
      if (projectType) setFormData((f) => ({ ...f, projectType }));
      setStatus((st) => (st === 'success' ? 'idle' : st));
      const el = document.getElementById('booking-form');
      if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.pageYOffset - 96, behavior: 'smooth' });
    };
    window.addEventListener('rr:book', onBook);
    return () => window.removeEventListener('rr:book', onBook);
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const accessKey = import.meta.env.VITE_WEB3FORMS_KEY as string | undefined;
    if (!accessKey) {
      console.error('VITE_WEB3FORMS_KEY is not set. See README.');
      setStatus('error');
      return;
    }
    setStatus('sending');
    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          access_key: accessKey,
          subject: `New booking inquiry: ${formData.projectType} (${formData.name})`,
          from_name: 'Rollin Realms Website',
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          project_type: formData.projectType,
          message: formData.message,
          botcheck: formData.botcheck,
        }),
      });
      const data = await res.json();
      setStatus(data.success ? 'success' : 'error');
    } catch {
      setStatus('error');
    }
  };

  return (
    <section
      id="contact"
      className="py-24 sm:py-32 bg-[#07101E] border-t border-white/5 relative"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-14">
          <h2 className="font-extrabold text-5xl sm:text-7xl text-[#E5192D] tracking-tight">
            Contact Us
          </h2>
          <p className="text-slate-300 mt-3 text-lg sm:text-xl font-light max-w-2xl">
            Reach out to us for any questions, collaborations or if you want to hire us to ensure your next commercial success.
          </p>
          <div className="h-1.5 w-24 bg-[#E5192D] mt-4 rounded-full" />
        </div>

        {/* 3-Column Cinema Still Composition matching Slide 19 */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-stretch mb-20">
          {/* Left Column: Commercial scene 1 + Studio Address & Phone */}
          <div className="md:col-span-4 flex flex-col justify-between space-y-6">
            <div
              className="cursor-pointer overflow-hidden rounded border border-white/10 shadow-xl bg-[#0B1728] group hover:border-[#E5192D]/60 transition-all"
            >
              <img
                loading="lazy"
                decoding="async"
                src={MEDIA.contactStill1}
                alt="Commercial snapshot 1"
                referrerPolicy="no-referrer"
                className="w-full h-56 object-cover object-left-top group-hover:scale-105 transition-transform duration-500"
              />
            </div>

            {/* Studio Address Card */}
            <a
              href={CONTACT_INFO.address}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-4 p-4 rounded bg-[#0B1728] border border-[#E5192D]/40 hover:border-[#E5192D] transition-all"
            >  
              <div className="w-12 h-12 bg-[#E5192D] text-white rounded flex items-center justify-center shrink-0 text-xl group-hover:scale-105 transition-transform">
                <MapPin className="w-6 h-6" />
              </div>
              <div>
                <p className="text-xs font-mono uppercase text-slate-400">
                  Office
                </p>
                <p className="text-sm text-white font-medium group-hover:text-[#E5192D] transition-colors">
                  Lift: 5, House: 82/1, Block: A, Road: 2, Niketon, Dhaka 1212
                </p>
              </div>
            </a>
            {/* Phone Card */}
            <a
              href={`tel:${CONTACT_INFO.phone}`}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-4 p-4 rounded bg-[#0B1728] border border-[#E5192D]/40 hover:border-[#E5192D] transition-all"
            >  
              <div className="w-12 h-12 bg-[#E5192D] text-white rounded flex items-center justify-center shrink-0 text-xl group-hover:scale-105 transition-transform">
                <Phone className="w-6 h-6" />
              </div>
              <div>
                <p className="text-xs font-mono uppercase text-slate-400">
                  Phone
                </p>
                <p className="text-sm text-white font-medium group-hover:text-[#E5192D] transition-colors">
                  +880 1771 760946
                </p>
              </div>
            </a>
          </div>

          {/* Center Column: Full vertical dance/motion still */}
          <div
            className="cursor-pointer md:col-span-4 overflow-hidden rounded border border-white/10 shadow-xl bg-[#0B1728] group hover:border-[#E5192D]/60 transition-all"
          >
            <img
              loading="lazy"
              decoding="async"
              src={MEDIA.contactStill2}
              alt="Cinematic classical dancer still"
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover object-center min-h-[360px] group-hover:scale-105 transition-transform duration-500"
            />
          </div>

          {/* Right Column: Commercial scene 3 + Social / Email channels */}
          <div className="md:col-span-4 flex flex-col justify-between space-y-6">
            <div
              className="cursor-pointer overflow-hidden rounded border border-white/10 shadow-xl bg-[#0B1728] group hover:border-[#E5192D]/60 transition-all"
            >
              <img
                loading="lazy"
                decoding="async"
                src={MEDIA.contactStill3}
                alt="Humorous commercial frame"
                referrerPolicy="no-referrer"
                className="w-full h-56 object-cover object-right-top group-hover:scale-105 transition-transform duration-500"
              />
            </div>

            {/* Facebook */}
            <a
              href={CONTACT_INFO.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-4 p-4 rounded bg-[#0B1728] border border-[#E5192D]/40 hover:border-[#E5192D] transition-all"
            >
              <div className="w-12 h-12 bg-[#E5192D] text-white rounded flex items-center justify-center shrink-0 text-xl group-hover:scale-105 transition-transform">
                <Facebook className="w-6 h-6" />
              </div>
              <div>
                <p className="text-xs font-mono uppercase text-slate-400">
                  Facebook
                </p>
                <p className="text-sm text-white font-medium group-hover:text-[#E5192D] transition-colors">
                  Rollin Realms
                </p>
              </div>
            </a>

            {/* Instagram */}
            <a
              href={CONTACT_INFO.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-4 p-4 rounded bg-[#0B1728] border border-[#E5192D]/40 hover:border-[#E5192D] transition-all"
            >
              <div className="w-12 h-12 bg-[#E5192D] text-white rounded flex items-center justify-center shrink-0 text-xl group-hover:scale-105 transition-transform">
                <Instagram className="w-6 h-6" />
              </div>
              <div>
                <p className="text-xs font-mono uppercase text-slate-400">
                  Instagram
                </p>
                <p className="text-sm text-white font-medium group-hover:text-[#E5192D] transition-colors">
                  Rollin Realms
                </p>
              </div>
            </a>

            {/* Email */}
            <a
              href={`mailto:${CONTACT_INFO.email}`}
              className="group flex items-center gap-4 p-4 rounded bg-[#0B1728] border border-[#E5192D]/40 hover:border-[#E5192D] transition-all"
            >
              <div className="w-12 h-12 bg-[#E5192D] text-white rounded flex items-center justify-center shrink-0 text-xl group-hover:scale-105 transition-transform">
                <Mail className="w-6 h-6" />
              </div>
              <div>
                <p className="text-xs font-mono uppercase text-slate-400">
                  Email Inquiries
                </p>
                <p className="text-sm text-white font-medium group-hover:text-[#E5192D] transition-colors">
                  {CONTACT_INFO.email}
                </p>
              </div>
            </a>
          </div>
        </div>

        {/* Production Inquiry Form -> emailed via Web3Forms */}
        <div id="booking-form" className="bg-[#0B1728] border border-white/10 rounded-2xl p-8 sm:p-12 shadow-2xl relative overflow-hidden">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-8">
              <span className="text-xs font-mono uppercase tracking-[0.2em] text-[#E5192D] font-bold">
                Commercial &amp; Narrative Bookings
              </span>
              <h3 className="text-3xl sm:text-4xl font-extrabold text-white mt-1">
                Initiate a Production Brief
              </h3>
              <p className="text-slate-400 text-sm mt-2">
                Have a campaign or script in mind? Fill out the details below and our producing team will get back to you.
              </p>
            </div>

            {status === 'success' ? (
              <div className="p-8 rounded-xl bg-emerald-950/40 border border-emerald-500/40 text-center space-y-4">
                <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 mx-auto flex items-center justify-center">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h4 className="text-2xl font-bold text-white">Inquiry Received!</h4>
                <p className="text-sm text-slate-300 max-w-md mx-auto">
                  Thank you, <span className="text-white font-semibold">{formData.name}</span>. Our producers have your brief and will reach out at{' '}
                  <span className="text-white font-semibold">{formData.email}</span>.
                </p>
                <button
                  type="button"
                  onClick={() => {
                    setStatus('idle');
                    setFormData(emptyForm);
                  }}
                  className="px-6 py-2 text-xs font-mono uppercase tracking-wider text-slate-300 hover:text-white bg-white/5 rounded border border-white/10"
                >
                  Send Another Inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Honeypot (hidden from humans, bots tick it) */}
                <input
                  type="checkbox"
                  name="botcheck"
                  tabIndex={-1}
                  autoComplete="off"
                  checked={formData.botcheck}
                  onChange={(e) => setFormData({ ...formData, botcheck: e.target.checked })}
                  className="hidden"
                />

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-mono uppercase text-slate-300 mb-2">Your Name / Brand *</label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. ABC Ltd. / John Doe"
                      className="w-full px-4 py-3 bg-[#050B14] border border-white/10 rounded text-white placeholder-slate-500 text-sm focus:outline-none focus:border-[#E5192D] transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-mono uppercase text-slate-300 mb-2">Email Address *</label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="e.g. brand@company.com"
                      className="w-full px-4 py-3 bg-[#050B14] border border-white/10 rounded text-white placeholder-slate-500 text-sm focus:outline-none focus:border-[#E5192D] transition-colors"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-mono uppercase text-slate-300 mb-2">Phone / WhatsApp</label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="Optional"
                      className="w-full px-4 py-3 bg-[#050B14] border border-white/10 rounded text-white placeholder-slate-500 text-sm focus:outline-none focus:border-[#E5192D] transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-mono uppercase text-slate-300 mb-2">Project Format</label>
                    <select
                      value={formData.projectType}
                      onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                      className="w-full px-4 py-3 bg-[#050B14] border border-white/10 rounded text-white placeholder-slate-500 text-sm focus:outline-none focus:border-[#E5192D] transition-colors"
                    >
                      {SERVICES.map((svc) => (
                        <option key={svc.id}>{svc.title}</option>
                      ))}
                      <option>Other / Custom Production</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-mono uppercase text-slate-300 mb-2">Project Brief / Vision Details *</label>
                  <textarea
                    rows={4}
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Describe your target audience, campaign goals, key deliverables, and expected production schedule..."
                    className="w-full px-4 py-3 bg-[#050B14] border border-white/10 rounded text-white placeholder-slate-500 text-sm focus:outline-none focus:border-[#E5192D] transition-colors resize-none"
                  />
                </div>

                {status === 'error' && (
                  <p className="text-sm text-red-400" role="alert">
                    Something went wrong sending your brief. Please try again, or email us directly at {CONTACT_INFO.email}.
                  </p>
                )}

                <div className="flex justify-end pt-2">
                  <button
                    type="submit"
                    disabled={status === 'sending'}
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 text-xs font-bold uppercase tracking-widest bg-[#E5192D] hover:bg-[#FF283C] text-white rounded transition-all shadow-lg shadow-[#E5192D]/30 active:scale-95 disabled:opacity-50"
                  >
                    <span>{status === 'sending' ? 'Rollin ...' : 'Roll'}</span>
                    <Send className="w-3.5 h-3.5" />
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
