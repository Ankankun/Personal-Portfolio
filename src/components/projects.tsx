'use client';
import React, { useState, useMemo } from 'react';
import ProjectCard from './project-card';
import { projects, projectFilters } from '@/lib/data';
import type { Project } from '@/lib/data';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('All');

  const filteredProjects = useMemo(() => {
    if (activeFilter === 'All') {
      return projects;
    }
    return projects.filter(
      (project) =>
        project.category === activeFilter || project.status === activeFilter
    );
  }, [activeFilter]);

  return (
    <section id="projects" className="py-16 sm:py-24 bg-stone-50">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="font-headline text-3xl font-bold tracking-tight text-foreground sm:text-4xl [font-size:clamp(2rem,4vw,2.75rem)]">
            Projects
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            A selection of projects I've worked on.
          </p>
        </div>

        <div className="mt-10 flex flex-wrap justify-center gap-2">
          {projectFilters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={cn(
                'rounded-full px-4 py-2 text-sm font-semibold transition-colors duration-150',
                activeFilter === filter
                  ? 'bg-primary text-primary-foreground'
                  : 'bg-stone-200 text-stone-600 hover:bg-stone-300'
              )}
            >
              {filter}
            </button>
          ))}
        </div>

        <div
          aria-live="polite"
          className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-2"
        >
          {filteredProjects.map((project: Project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
