import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import type { Project } from '@/lib/data';
import { Button } from '@/components/ui/button';
import { Github, ExternalLink } from 'lucide-react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <Card className="flex h-full flex-col overflow-hidden transition-transform duration-150 hover:-translate-y-1 hover:shadow-md">
      <CardHeader>
        <div className="flex justify-between items-start gap-4">
          <CardTitle className="font-headline text-xl">{project.title}</CardTitle>
          <div className="flex flex-shrink-0 gap-2">
            <Badge variant={project.category === 'Major' ? 'categoryMajor' : 'categoryMinor'}>
              {project.category}
            </Badge>
            <Badge variant={project.status === 'Completed' ? 'statusCompleted' : 'statusOngoing'}>
              {project.status}
            </Badge>
          </div>
        </div>
        <CardDescription className="pt-2">{project.description}</CardDescription>
      </CardHeader>
      <CardContent className="flex-grow space-y-6">
        <div>
            <p className="text-sm font-semibold text-foreground mb-2">Tech Stack</p>
            <div className="flex flex-wrap gap-2">
            {project.techStack.map((tech) => (
                <Badge key={tech} variant="tech">{tech}</Badge>
            ))}
            </div>
        </div>
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="item-1" className="border-b-0">
            <AccordionTrigger className="text-sm font-semibold text-foreground hover:no-underline py-0">What I Learned</AccordionTrigger>
            <AccordionContent className="text-sm text-muted-foreground pt-2">
              {project.learnings}
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </CardContent>
      <CardFooter className="flex gap-4">
        {project.liveDemo && (
          <Button asChild variant="outline" size="sm">
            <a href={project.liveDemo} target="_blank" rel="noopener noreferrer">
              <ExternalLink className="mr-2 h-4 w-4" />
              Live Demo
            </a>
          </Button>
        )}
        {project.repository && (
          <Button asChild variant="outline" size="sm">
            <a href={project.repository} target="_blank" rel="noopener noreferrer">
              <Github className="mr-2 h-4 w-4" />
              Repository
            </a>
          </Button>
        )}
      </CardFooter>
    </Card>
  );
};

export default ProjectCard;
