'use client';
import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet"
import { Button } from '@/components/ui/button';
import { Menu } from 'lucide-react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isSheetOpen, setIsSheetOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'Learning', href: '#learning' },
    { name: 'Contact', href: '#contact' },
  ];

  const closeSheet = () => setIsSheetOpen(false);

  return (
    <header className={cn(
      "md:sticky top-0 z-50 w-full transition-all duration-150",
      isScrolled ? "bg-background/80 backdrop-blur-sm border-b border-border" : "bg-transparent"
    )}>
      <div className="container mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <a href="#" className="flex items-center gap-2 text-xl font-bold text-foreground">
            <span className="font-headline text-2xl tracking-tight">
                <span className="text-primary">Ankan</span>
                <span>kun</span>
            </span>
        </a>
        <nav className="hidden md:flex">
          <ul className="flex items-center space-x-6 text-sm font-semibold">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-muted-foreground transition-colors hover:text-primary"
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <div className="md:hidden">
            <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
                <SheetTrigger asChild>
                    <Button variant="ghost" size="icon">
                        <Menu className="h-6 w-6" />
                        <span className="sr-only">Open menu</span>
                    </Button>
                </SheetTrigger>
                <SheetContent side="left">
                    <div className="flex flex-col gap-4 p-4">
                        <a href="#" className="flex items-center gap-2 text-xl font-bold text-foreground mb-4" onClick={closeSheet}>
                            <span className="font-headline text-2xl tracking-tight">
                                <span className="text-primary">Ankan</span>
                                <span>kun</span>
                            </span>
                        </a>
                        <ul className="flex flex-col items-start space-y-4 text-lg font-semibold">
                            {navLinks.map((link) => (
                            <li key={link.href}>
                                <a
                                href={link.href}
                                className="text-muted-foreground transition-colors hover:text-primary"
                                onClick={closeSheet}
                                >
                                {link.name}
                                </a>
                            </li>
                            ))}
                        </ul>
                    </div>
                </SheetContent>
            </Sheet>
        </div>
      </div>
    </header>
  );
};

export default Header;
