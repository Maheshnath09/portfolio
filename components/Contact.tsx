import React, { useState } from 'react';
import { SOCIAL_LINKS } from '../constants';
import { SectionHeading, PixelCard, PixelButton } from './ui/PixelStyles';
import { Github, Linkedin, Twitter, Mail, Send } from 'lucide-react';

export const Contact: React.FC = () => {
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const to = 'maheshnath2143@gmail.com';
    const subject = `New message from ${formState.name || 'Website Visitor'}`;
    const bodyLines = [
      `Name: ${formState.name}`,
      `Email: ${formState.email}`,
      '',
      `${formState.message}`,
    ];
    const body = encodeURIComponent(bodyLines.join('\n'));
    const mailto = `mailto:${to}?subject=${encodeURIComponent(subject)}&body=${body}`;

    // Open user's mail client with pre-filled message
    window.location.href = mailto;

    // clear form (the mail client handles sending)
    setFormState({ name: '', email: '', message: '' });
  };

  return (
    <section id="contact" className="py-20 px-4 pb-32">
      <div className="max-w-4xl mx-auto">
        <SectionHeading title="GAME OVER?" subtitle="Continue? Insert coin or send a message." />
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Contact Info & Socials */}
          <div className="space-y-6">
            <PixelCard className="bg-pixel-dark text-white">
              <h3 className="font-press text-lg mb-4 text-pixel-yellow">Connect</h3>
              <p className="font-vt text-xl mb-6">
                I'm currently available for freelance work and open to new opportunities. Let's build something awesome.
              </p>
              
              <div className="space-y-4">
                 <a href={`mailto:${SOCIAL_LINKS.email}`} className="flex items-center gap-3 hover:text-pixel-yellow transition-colors font-vt text-xl">
                    <Mail /> {SOCIAL_LINKS.email}
                 </a>
                 <div className="flex gap-4 pt-4">
                    <SocialBtn href={SOCIAL_LINKS.github} icon={<Github />} />
                    <SocialBtn href={SOCIAL_LINKS.linkedin} icon={<Linkedin />} />
                    <SocialBtn href={SOCIAL_LINKS.twitter} icon={<Twitter />} />
                 </div>
              </div>
            </PixelCard>
          </div>

          {/* Contact Form */}
          <div>
            <PixelCard>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block font-press text-xs mb-2">PLAYER NAME</label>
                  <input 
                    type="text" 
                    value={formState.name}
                    onChange={(e) => setFormState({...formState, name: e.target.value})}
                    className="w-full bg-gray-100 border-2 border-pixel-dark p-3 font-vt text-xl focus:outline-none focus:bg-white focus:shadow-pixel-inset transition-all"
                    required
                  />
                </div>
                <div>
                  <label className="block font-press text-xs mb-2">EMAIL ADDRESS</label>
                  <input 
                    type="email" 
                    value={formState.email}
                    onChange={(e) => setFormState({...formState, email: e.target.value})}
                    className="w-full bg-gray-100 border-2 border-pixel-dark p-3 font-vt text-xl focus:outline-none focus:bg-white focus:shadow-pixel-inset transition-all"
                    required
                  />
                </div>
                <div>
                  <label className="block font-press text-xs mb-2">MESSAGE</label>
                  <textarea 
                    rows={4}
                    value={formState.message}
                    onChange={(e) => setFormState({...formState, message: e.target.value})}
                    className="w-full bg-gray-100 border-2 border-pixel-dark p-3 font-vt text-xl focus:outline-none focus:bg-white focus:shadow-pixel-inset transition-all"
                    required
                  ></textarea>
                </div>
                <PixelButton type="submit" className="w-full flex justify-center items-center gap-2">
                  <Send size={18} /> SEND MESSAGE
                </PixelButton>
              </form>
            </PixelCard>
          </div>
        </div>
      </div>
    </section>
  );
};

const SocialBtn: React.FC<{ href: string; icon: React.ReactNode }> = ({ href, icon }) => (
  <a 
    href={href} 
    target="_blank" 
    rel="noreferrer"
    className="w-12 h-12 flex items-center justify-center bg-white text-pixel-dark border-2 border-transparent hover:border-white hover:bg-pixel-dark hover:text-white transition-all shadow-pixel-sm"
  >
    {icon}
  </a>
);