import { Github, Linkedin, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Footer = () => {
  const socialLinks = [
    { name: 'GitHub', href: 'https://github.com/ankan-das', icon: Github },
    { name: 'LinkedIn', href: '#', icon: Linkedin },
    { name: 'Email', href: 'mailto:example@email.com', icon: Mail },
  ];

  return (
    <footer className="bg-stone-900 text-stone-400">
      <div className="container mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-between gap-8 md:flex-row">
          <div className="text-center md:text-left">
            <p className="font-headline text-lg font-bold text-white">Ankan Das</p>
            <p className="text-sm">Aspiring Full Stack Developer</p>
          </div>
          <div className="flex gap-2">
            {socialLinks.map((link) => (
              <Button key={link.name} asChild variant="ghost" size="icon" className="bg-stone-800 hover:bg-stone-700 text-stone-400 hover:text-white rounded-md">
                <a href={link.href} aria-label={link.name} target="_blank" rel="noopener noreferrer">
                  <link.icon className="h-5 w-5" />
                </a>
              </Button>
            ))}
          </div>
        </div>
        <div className="mt-8 border-t border-stone-800 pt-8 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} Ankan Das. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
