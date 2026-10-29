import React, { useState } from 'react';
import {
  Mail,
  Phone,
  MapPin,
  Send,
  Github,
  Linkedin,
  Twitter,
  Youtube,
  CheckCircle2,
  AlertCircle,
  Loader2
} from 'lucide-react';
import contactBg from '../assets/contact-background.webp';
import { portfolioData } from '../data/portfolioData.js';

export default function ContactSection() {
  const { personal } = portfolioData;

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState('idle'); // idle | loading | success | error
  const [submitError, setSubmitError] = useState('');

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Please provide your name';
    if (!formData.email.trim()) {
      newErrors.email = 'Please provide your email address';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please provide a valid email format';
    }
    if (!formData.subject.trim()) newErrors.subject = 'Subject is required';
    if (!formData.message.trim() || formData.message.length < 10) {
      newErrors.message = 'Message must be at least 10 characters long';
    }
    return newErrors;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (status === 'error') setStatus('idle');
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: null }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    // No third-party AJAX service: compose an email locally to avoid CORS/service outages.
    const subject = encodeURIComponent(formData.subject.trim());
    const body = encodeURIComponent(
      `Name: ${formData.name.trim()}\nReply email: ${formData.email.trim()}\n\nMessage:\n${formData.message.trim()}`
    );
    window.location.href = `mailto:${personal.email}?subject=${subject}&body=${body}`;
    setStatus('email-opened');
    setSubmitError('Your email app should open with this message prepared. Please press Send in that app to deliver it. If it does not open, use the direct email link.');
  };

  return (
    <section
      id="contact"
      className="relative min-h-screen flex flex-col justify-between pt-24 pb-8 overflow-hidden bg-[#050607] border-t border-[#24282C]"
    >
      {/* Wide Panoramic Background Artwork: Bank, Mask, Heist Crew, MONEY HEIST */}
      <div
        className="absolute inset-0 pointer-events-none z-0"
        style={{
          backgroundImage: `
            linear-gradient(90deg, #050607 0%, rgba(5,6,7,0.96) 38%, rgba(5,6,7,0.65) 75%, rgba(5,6,7,0.2) 100%),
            linear-gradient(0deg, #050607 0%, rgba(5,6,7,0.1) 45%, rgba(5,6,7,0.85) 100%),
            url(${contactBg})
          `,
          backgroundSize: 'cover',
          backgroundPosition: 'right 40%',
          backgroundRepeat: 'no-repeat',
          opacity: 0.9,
        }}
        aria-hidden="true"
      />

      <div className="absolute inset-0 bg-radial-[at_85%_45%] from-[#8E0017]/20 via-transparent to-transparent pointer-events-none z-0" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full mb-16">
        {/* Section Kicker */}
        <div className="flex items-center gap-3 mb-3">
          <span className="font-mono text-xs tracking-[0.25em] text-[#E50924] uppercase font-bold">
            07 / SECURE COMMS
          </span>
          <div className="h-[1px] w-12 bg-[#E50924]" />
        </div>

        <h2 className="font-['Barlow_Condensed'] text-5xl sm:text-6xl md:text-7xl font-black uppercase tracking-tight text-white mb-2 leading-none">
          GET IN <span className="text-[#E50924]">TOUCH</span>
        </h2>

        <h3 className="font-mono text-xs sm:text-sm tracking-[0.2em] uppercase text-[#A7ADB5] mb-12">
          LET'S WORK TOGETHER
        </h3>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Left Column: Direct Intel & Channels */}
          <div className="lg:col-span-5 space-y-6">
            <p className="text-base text-[#A7ADB5] leading-relaxed max-w-md">
              Whether you have an ambitious web project, a frontend development opportunity, or want to discuss architecture, my channels are open.
            </p>

            <div className="space-y-4 pt-4">
              {/* Email */}
              <div className="flex items-center gap-4 p-4 bg-[#0B0D0F]/90 border border-[#24282C] backdrop-blur-sm">
                <div className="p-3 bg-[#050607] border border-[#24282C] text-[#E50924]">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <span className="font-mono text-[10px] text-[#A7ADB5] uppercase tracking-wider block">
                    DIRECT EMAIL
                  </span>
                  <a
                    href={`mailto:${personal.email}`}
                    className="font-mono text-sm text-white hover:text-[#E50924] transition-colors"
                  >
                    {personal.email}
                  </a>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-center gap-4 p-4 bg-[#0B0D0F]/90 border border-[#24282C] backdrop-blur-sm">
                <div className="p-3 bg-[#050607] border border-[#24282C] text-[#E50924]">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <span className="font-mono text-[10px] text-[#A7ADB5] uppercase tracking-wider block">
                    TELEPHONE
                  </span>
                  <a
                    href={`tel:${personal.phone}`}
                    className="font-mono text-sm text-white hover:text-[#E50924] transition-colors"
                  >
                    {personal.phone}
                  </a>
                </div>
              </div>

              {/* Location */}
              <div className="flex items-center gap-4 p-4 bg-[#0B0D0F]/90 border border-[#24282C] backdrop-blur-sm">
                <div className="p-3 bg-[#050607] border border-[#24282C] text-[#E50924]">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <span className="font-mono text-[10px] text-[#A7ADB5] uppercase tracking-wider block">
                    LOCATION
                  </span>
                  <span className="font-mono text-sm text-white">
                    {personal.location}
                  </span>
                </div>
              </div>
            </div>

            {/* Social Channels */}
            <div className="pt-4">
              <span className="font-mono text-xs text-[#A7ADB5] uppercase tracking-wider block mb-3">
                INTELLIGENCE NETWORKS:
              </span>
              <div className="flex gap-2.5">
                <a
                  href={personal.social.github}
                  target="_blank"
                  rel="noreferrer"
                  className="p-3 bg-[#0B0D0F] border border-[#24282C] text-[#A7ADB5] hover:text-white hover:border-[#E50924] transition-colors"
                  aria-label="GitHub"
                >
                  <Github className="w-4 h-4" />
                </a>
                <a
                  href={personal.social.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="p-3 bg-[#0B0D0F] border border-[#24282C] text-[#A7ADB5] hover:text-white hover:border-[#E50924] transition-colors"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
                <a
                  href={personal.social.twitter}
                  target="_blank"
                  rel="noreferrer"
                  className="p-3 bg-[#0B0D0F] border border-[#24282C] text-[#A7ADB5] hover:text-white hover:border-[#E50924] transition-colors"
                  aria-label="X / Twitter"
                >
                  <Twitter className="w-4 h-4" />
                </a>
                <a
                  href={personal.social.youtube}
                  target="_blank"
                  rel="noreferrer"
                  className="p-3 bg-[#0B0D0F] border border-[#24282C] text-[#A7ADB5] hover:text-white hover:border-[#E50924] transition-colors"
                  aria-label="YouTube"
                >
                  <Youtube className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Transmission Form */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-8 bg-[#0B0D0F]/95 border border-[#24282C] backdrop-blur-md shadow-[0_20px_50px_rgba(0,0,0,0.8)]">
              <div className="flex items-center justify-between pb-4 mb-6 border-b border-[#24282C]">
                <h4 className="font-['Barlow_Condensed'] text-2xl font-bold uppercase text-white tracking-wide">
                  TRANSMIT A MESSAGE
                </h4>
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  <span className="font-mono text-[10px] text-emerald-400 uppercase tracking-wider">
                    CHANNEL ENCRYPTED
                  </span>
                </div>
              </div>

              {status === 'email-opened' ? (
                <div className="py-10 text-center space-y-4">
                  <div className="w-12 h-12 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 mx-auto flex items-center justify-center">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <h4 className="font-['Barlow_Condensed'] text-3xl font-bold uppercase text-white">
                    EMAIL DRAFT PREPARED
                  </h4>
                  <p className="text-sm text-[#A7ADB5] max-w-md mx-auto">
                    Your email app should open with your message ready. You must press Send in that app. If it did not open, email me directly at{' '}
                    <span className="text-[#E50924]">{personal.email}</span>.
                  </p>
                  <button
                    onClick={() => setStatus('idle')}
                    className="px-6 py-2.5 bg-[#050607] border border-[#24282C] hover:border-[#E50924] text-xs font-mono text-white uppercase tracking-wider transition-colors cursor-pointer"
                  >
                    BACK TO CONTACT FORM
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">

                  {status === 'error' && (
                    <div role="alert" className="p-3 border border-[#E50924]/50 bg-[#E50924]/10 text-sm text-white">
                      <p>{submitError}</p>
                      <p className="mt-2 text-xs text-[#A7ADB5]">You can email me directly at <a className="text-[#E50924] underline" href={`mailto:${personal.email}`}>{personal.email}</a>.</p>
                    </div>
                  )}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Name */}
                    <div>
                      <label className="block font-mono text-[11px] uppercase tracking-wider text-[#A7ADB5] mb-1.5">
                        YOUR NAME *
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Dilmurad Operative"
                        className={`w-full px-4 py-3 bg-[#050607] border ${
                          errors.name ? 'border-[#E50924]' : 'border-[#24282C]'
                        } text-white font-mono text-xs focus:outline-none focus:border-[#E50924] transition-colors`}
                      />
                      {errors.name && (
                        <p className="font-mono text-[10px] text-[#E50924] mt-1 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" />
                          {errors.name}
                        </p>
                      )}
                    </div>

                    {/* Email */}
                    <div>
                      <label className="block font-mono text-[11px] uppercase tracking-wider text-[#A7ADB5] mb-1.5">
                        YOUR EMAIL *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="operative@agency.com"
                        className={`w-full px-4 py-3 bg-[#050607] border ${
                          errors.email ? 'border-[#E50924]' : 'border-[#24282C]'
                        } text-white font-mono text-xs focus:outline-none focus:border-[#E50924] transition-colors`}
                      />
                      {errors.email && (
                        <p className="font-mono text-[10px] text-[#E50924] mt-1 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" />
                          {errors.email}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Subject */}
                  <div>
                    <label className="block font-mono text-[11px] uppercase tracking-wider text-[#A7ADB5] mb-1.5">
                      SUBJECT *
                    </label>
                    <input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="Web Development / UI Design Mission"
                      className={`w-full px-4 py-3 bg-[#050607] border ${
                        errors.subject ? 'border-[#E50924]' : 'border-[#24282C]'
                      } text-white font-mono text-xs focus:outline-none focus:border-[#E50924] transition-colors`}
                    />
                    {errors.subject && (
                      <p className="font-mono text-[10px] text-[#E50924] mt-1 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" />
                        {errors.subject}
                      </p>
                    )}
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block font-mono text-[11px] uppercase tracking-wider text-[#A7ADB5] mb-1.5">
                      YOUR MESSAGE *
                    </label>
                    <textarea
                      rows={5}
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Detail your mission requirements, timeline, and scope..."
                      className={`w-full px-4 py-3 bg-[#050607] border ${
                        errors.message ? 'border-[#E50924]' : 'border-[#24282C]'
                      } text-white font-mono text-xs focus:outline-none focus:border-[#E50924] transition-colors resize-none`}
                    />
                    {errors.message && (
                      <p className="font-mono text-[10px] text-[#E50924] mt-1 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" />
                        {errors.message}
                      </p>
                    )}
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={status === 'loading'}
                    className="w-full py-4 bg-[#E50924] hover:bg-[#ff1a35] text-white font-['Barlow_Condensed'] font-bold text-base tracking-widest uppercase transition-all duration-300 shadow-[0_0_20px_rgba(229,9,36,0.4)] hover:shadow-[0_0_30px_rgba(229,9,36,0.7)] flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                  >
                    {status === 'loading' ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin" />
                        <span>TRANSMITTING MESSAGE...</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>SEND MESSAGE</span>
                      </>
                    )}
                  </button>

                  <p className="font-mono text-[10px] text-[#A7ADB5]/60 text-center pt-2">
                    This opens your email app with the message prepared. Press Send to deliver it. No third-party form service or API key is required.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
