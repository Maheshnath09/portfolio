import React from 'react';
import { SKILL_CATEGORIES } from '../constants';
import { SectionHeading, PixelCard } from './ui/PixelStyles';
import { Brain, Globe, Database, PenTool, LucideIcon } from 'lucide-react';

const iconMap: Record<string, LucideIcon> = {
  brain: Brain,
  globe: Globe,
  database: Database,
  tool: PenTool
};

export const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-20 px-4 bg-black/5">
      <div className="max-w-6xl mx-auto">
        <SectionHeading title="SKILL TREE" subtitle="Abilities unlocked through years of grinding" />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {SKILL_CATEGORIES.map((category) => {
            const Icon = iconMap[category.icon];
            return (
              <PixelCard key={category.title} className="h-full hover:-translate-y-2 transition-transform duration-200">
                <div className="flex flex-col items-center text-center">
                  <div className="bg-pixel-yellow p-3 border-2 border-pixel-dark mb-4 shadow-pixel-sm">
                    <Icon size={32} strokeWidth={2.5} className="text-pixel-dark" />
                  </div>
                  <h3 className="font-press text-sm mb-4">{category.title}</h3>
                  <ul className="space-y-2 font-vt text-xl w-full">
                    {category.skills.map((skill) => (
                      <li key={skill} className="bg-gray-100 border-b-2 border-gray-200 px-2 py-1">
                        {skill}
                      </li>
                    ))}
                  </ul>
                </div>
              </PixelCard>
            );
          })}
        </div>
      </div>
    </section>
  );
};