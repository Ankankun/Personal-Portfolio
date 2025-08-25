import { Button } from '@/components/ui/button';

const Hero = () => {
  return (
    <section id="hero" className="py-24 sm:py-32">
      <div className="container mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
        <h1 className="font-headline font-bold text-foreground [font-size:clamp(2.5rem,6vw,3.75rem)] leading-tight">
          Aspiring Full Stack Developer
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground md:text-xl">
          I build and learn about web & desktop applications, focusing on robust backends and clean user interfaces. Here's a look at my work and my journey.
        </p>
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button asChild size="lg" className="transition-transform duration-150 hover:-translate-y-0.5 hover:shadow-md">
            <a href="#projects">View My Work</a>
          </Button>
          <Button asChild size="lg" variant="outline" className="transition-transform duration-150 hover:-translate-y-0.5 hover:shadow-sm">
            <a href="#contact">Get In Touch</a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
