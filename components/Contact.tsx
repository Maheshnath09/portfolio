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
                <div className="flex gap-4 pt-4 flex-wrap">
                  <SocialBtn href={SOCIAL_LINKS.github} icon={<Github />} />
                  <SocialBtn href={SOCIAL_LINKS.linkedin} icon={<Linkedin />} />
                  <SocialBtn href={SOCIAL_LINKS.twitter} icon={<Twitter />} />
                  <SocialBtn href={SOCIAL_LINKS.discord} icon={<DiscordIcon />} />
                  <SocialBtn href={SOCIAL_LINKS.huggingface} icon={<HuggingFaceIcon />} />
                  <SocialBtn href={SOCIAL_LINKS.kaggle} icon={<KaggleIcon />} />
                  <SocialBtn href={SOCIAL_LINKS.devto} icon={<DevToIcon />} />
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
                    onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                    className="w-full bg-gray-100 border-2 border-pixel-dark p-3 font-vt text-xl focus:outline-none focus:bg-white focus:shadow-pixel-inset transition-all"
                    required
                  />
                </div>
                <div>
                  <label className="block font-press text-xs mb-2">EMAIL ADDRESS</label>
                  <input
                    type="email"
                    value={formState.email}
                    onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                    className="w-full bg-gray-100 border-2 border-pixel-dark p-3 font-vt text-xl focus:outline-none focus:bg-white focus:shadow-pixel-inset transition-all"
                    required
                  />
                </div>
                <div>
                  <label className="block font-press text-xs mb-2">MESSAGE</label>
                  <textarea
                    rows={4}
                    value={formState.message}
                    onChange={(e) => setFormState({ ...formState, message: e.target.value })}
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

// Custom Icons
const DiscordIcon: React.FC = () => (
  <svg role="img" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
    <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.068 0a.074.074 0 0 1 .078.01c.118.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.086 2.157 2.419 0 1.334-.956 2.419-2.157 2.419zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.086 2.157 2.419 0 1.334-.946 2.419-2.157 2.419z" />
  </svg>
);

const HuggingFaceIcon: React.FC = () => (
  <svg role="img" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
    <path d="M12.025 1.13c-5.77 0-10.449 4.647-10.449 10.378 0 1.112.178 2.181.503 3.185.064-.222.203-.444.416-.577a.96.96 0 0 1 .524-.15c.293 0 .584.124.84.284.278.173.48.408.71.694.226.282.458.611.684.951v-.014c.017-.324.106-.622.264-.874s.403-.487.762-.543c.3-.047.596.06.787.203s.31.313.4.467c.15.257.212.468.233.542.01.026.653 1.552 1.657 2.54.616.605 1.01 1.223 1.082 1.912.055.537-.096 1.059-.38 1.572.637.121 1.294.187 1.967.187.657 0 1.298-.063 1.921-.178-.287-.517-.44-1.041-.384-1.581.07-.69.465-1.307 1.081-1.913 1.004-.987 1.647-2.513 1.657-2.539.021-.074.083-.285.233-.542.09-.154.208-.323.4-.467a1.08 1.08 0 0 1 .787-.203c.359.056.604.29.762.543s.247.55.265.874v.015c.225-.34.457-.67.683-.952.23-.286.432-.52.71-.694.257-.16.547-.284.84-.285a.97.97 0 0 1 .524.151c.228.143.373.388.43.625l.006.04a10.3 10.3 0 0 0 .534-3.273c0-5.731-4.678-10.378-10.449-10.378M8.327 6.583a1.5 1.5 0 0 1 .713.174 1.487 1.487 0 0 1 .617 2.013c-.183.343-.762-.214-1.102-.094-.38.134-.532.914-.917.71a1.487 1.487 0 0 1 .69-2.803m7.486 0a1.487 1.487 0 0 1 .689 2.803c-.385.204-.536-.576-.916-.71-.34-.12-.92.437-1.103.094a1.487 1.487 0 0 1 .617-2.013 1.5 1.5 0 0 1 .713-.174m-10.68 1.55a.96.96 0 1 1 0 1.921.96.96 0 0 1 0-1.92m13.838 0a.96.96 0 1 1 0 1.92.96.96 0 0 1 0-1.92M8.489 11.458c.588.01 1.965 1.157 3.572 1.164 1.607-.007 2.984-1.155 3.572-1.164.196-.003.305.12.305.454 0 .886-.424 2.328-1.563 3.202-.22-.756-1.396-1.366-1.63-1.32q-.011.001-.02.006l-.044.026-.01.008-.03.024q-.018.017-.035.036l-.032.04a1 1 0 0 0-.058.09l-.014.025q-.049.088-.11.19a1 1 0 0 1-.083.116 1.2 1.2 0 0 1-.173.18q-.035.029-.075.058a1.3 1.3 0 0 1-.251-.243 1 1 0 0 1-.076-.107c-.124-.193-.177-.363-.337-.444-.034-.016-.104-.008-.2.022q-.094.03-.216.087-.06.028-.125.063l-.13.074q-.067.04-.136.086a3 3 0 0 0-.135.096 3 3 0 0 0-.26.219 2 2 0 0 0-.12.121 2 2 0 0 0-.106.128l-.002.002a2 2 0 0 0-.09.132l-.001.001a1.2 1.2 0 0 0-.105.212q-.013.036-.024.073c-1.139-.875-1.563-2.317-1.563-3.203 0-.334.109-.457.305-.454m.836 10.354c.824-1.19.766-2.082-.365-3.194-1.13-1.112-1.789-2.738-1.789-2.738s-.246-.945-.806-.858-.97 1.499.202 2.362c1.173.864-.233 1.45-.685.64-.45-.812-1.683-2.896-2.322-3.295s-1.089-.175-.938.647 2.822 2.813 2.562 3.244-1.176-.506-1.176-.506-2.866-2.567-3.49-1.898.473 1.23 2.037 2.16c1.564.932 1.686 1.178 1.464 1.53s-3.675-2.511-4-1.297c-.323 1.214 3.524 1.567 3.287 2.405-.238.839-2.71-1.587-3.216-.642-.506.946 3.49 2.056 3.522 2.064 1.29.33 4.568 1.028 5.713-.624m5.349 0c-.824-1.19-.766-2.082.365-3.194 1.13-1.112 1.789-2.738 1.789-2.738s.246-.945.806-.858.97 1.499-.202 2.362c-1.173.864.233 1.45.685.64.451-.812 1.683-2.896 2.322-3.295s1.089-.175.938.647-2.822 2.813-2.562 3.244 1.176-.506 1.176-.506 2.866-2.567 3.49-1.898-.473 1.23-2.037 2.16c-1.564.932-1.686 1.178-1.464 1.53s3.675-2.511 4-1.297c.323 1.214-3.524 1.567-3.287 2.405.238.839 2.71-1.587 3.216-.642.506.946-3.49 2.056-3.522 2.064-1.29.33-4.568 1.028-5.713-.624" />
  </svg>
);

const KaggleIcon = () => (
  <svg role="img" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
    <path d="M18.825 23.859c-.022.092-.117.141-.285.141h-2.969c-.167 0-.295-.049-.383-.146l-6.241-7.864-1.954 1.838v5.885c0 .2-.128.301-.384.301H3.64c-.256 0-.384-.101-.384-.301V.309c0-.201.128-.301.384-.301h2.969c.256 0 .384.1.384.301v15.222l7.98-8.24c.092-.102.22-.154.384-.154h3.047c.182 0 .282.059.299.177.017.118-.029.227-.14.326l-6.702 6.516 6.812 9.073c.098.134.148.246.152.336z" />
  </svg>
);

const DevToIcon = () => (
  <svg role="img" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
    <path d="M7.42 10.05c-.18-.16-.46-.23-.84-.23H6l.02 2.44.04 2.45.56-.02c.41 0 .63-.07.83-.26.24-.24.26-.36.26-2.2 0-1.91-.02-1.96-.29-2.18zM0 4.94v14.12h24V4.94H0zM8.56 15.3c-.44.58-1.06.77-2.53.77H4.71V8.53h1.4c1.67 0 2.16.18 2.6.9.27.43.29.6.32 2.57.05 2.23-.02 2.73-.47 3.3zm5.09-5.47h-2.47v1.77h1.52v1.28l-.72.04-.75.03v1.77l1.22.03 1.2.04v1.28h-1.6c-1.53 0-1.6-.01-1.87-.3l-.3-.28v-3.16c0-3.02.01-3.18.25-3.48.23-.31.25-.31 1.88-.31h1.64v1.3zm4.68 5.45c-.17.43-.64.79-1 .79-.18 0-.45-.15-.67-.39-.32-.32-.45-.63-.82-2.08l-.9-3.39-.45-1.67h.76c.4 0 .75.02.75.05 0 .06 1.16 4.54 1.26 4.83.04.15.32-.7.73-2.3l.66-2.52.74-.04c.4-.02.73 0 .73.04 0 .14-1.67 6.38-1.8 6.68z" />
  </svg>
);