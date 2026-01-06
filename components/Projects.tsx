import React from 'react';
import { PROJECTS } from '../constants';
import { SectionHeading, PixelCard, PixelButton } from './ui/PixelStyles';
import { Github, ExternalLink } from 'lucide-react';

export const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <SectionHeading title="QUEST LOG" subtitle="Recent missions completed successfully" />
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {PROJECTS.map((project) => (
            <PixelCard key={project.id} noPadding className="flex flex-col h-full group">
              {/* Image Container with Overlay Effect */}
              <div className="h-48 md:h-64 bg-gray-200 border-b-4 border-pixel-dark relative overflow-hidden">
                <img 
                  src={project.thumbnailUrl} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 pixel-antialiasing-off" 
                />
                <div className="absolute inset-0 bg-pixel-orange opacity-0 group-hover:opacity-20 transition-opacity duration-300 mix-blend-multiply"></div>
              </div>
              
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="font-press text-lg md:text-xl mb-3">{project.title}</h3>
                <p className="font-vt text-xl text-gray-700 mb-6 flex-grow">
                  {project.description}
                </p>
                
                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag) => (
                    <span key={tag} className="text-xs font-press text-pixel-dark bg-pixel-yellow/50 px-2 py-1 border border-pixel-dark">
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Actions */}
                <div className="flex gap-4 mt-auto">
                  {project.liveLink && (
                    <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="flex-1">
                      <PixelButton size="sm" className="w-full flex items-center justify-center gap-2">
                        <ExternalLink size={16} /> LIVE
                      </PixelButton>
                    </a>
                  )}
                  {project.repoLink && (
                    <a href={project.repoLink} target="_blank" rel="noopener noreferrer" className="flex-1">
                      <PixelButton variant="secondary" size="sm" className="w-full flex items-center justify-center gap-2">
                        <Github size={16} /> CODE
                      </PixelButton>
                    </a>
                  )}
                </div>
              </div>
            </PixelCard>
          ))}
        </div>
      </div>
    </section>
  );
};