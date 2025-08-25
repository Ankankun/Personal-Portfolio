'use client';
import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

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

  return (
    <header className={cn(
      "sticky top-0 z-50 w-full transition-all duration-150",
      isScrolled ? "bg-background/80 backdrop-blur-sm border-b border-border" : "bg-transparent"
    )}>
      <div className="container mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <a href="#" className="font-headline text-xl font-bold text-foreground">
          Ankan Das
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
      </div>
    </header>
  );
};

export default Header;
