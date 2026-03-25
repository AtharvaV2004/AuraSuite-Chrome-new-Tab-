'use client';

import React from 'react';
import { Search, Cloud, Clock, Settings, User } from 'lucide-react';
import { motion } from 'motion/react';
import Link from 'next/link';

export function TopNav() {
  return (
    <header className="fixed top-0 w-full flex items-center justify-between px-8 py-6 z-50 bg-black/20 backdrop-blur-2xl border-b border-white/[0.05]">
      <div className="flex items-center gap-8">
        <Link href="/">
          <span className="text-xl font-bold bg-gradient-to-r from-primary via-secondary to-tertiary bg-clip-text text-transparent font-headline tracking-tighter text-glow cursor-pointer">
            Digital Curator
          </span>
        </Link>
        
        <div className="hidden md:flex items-center bg-black/40 border border-white/10 rounded-full px-6 py-2.5 w-[450px] focus-within:border-primary/40 focus-within:bg-black/60 transition-all duration-500">
          <Search size={18} className="text-primary/60 mr-3" />
          <input 
            type="text" 
            placeholder="Search the golden archives..."
            className="bg-transparent border-none focus:ring-0 text-sm w-full text-on-surface placeholder:text-on-surface-variant/40"
          />
        </div>
      </div>

      <div className="flex items-center gap-8">
        <div className="flex items-center gap-6">
          <Cloud size={20} className="text-on-surface-variant hover:text-primary transition-all cursor-pointer" />
          <Clock size={20} className="text-on-surface-variant hover:text-primary transition-all cursor-pointer" />
          <Settings size={20} className="text-on-surface-variant hover:text-primary transition-all cursor-pointer" />
        </div>
        
        <div className="relative group cursor-pointer">
          <div className="absolute -inset-1 bg-primary/20 rounded-full blur-md opacity-0 group-hover:opacity-100 transition duration-700"></div>
          <div className="relative w-10 h-10 rounded-full border border-primary/30 overflow-hidden">
            <img 
              src="https://picsum.photos/seed/user/100/100" 
              alt="User" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </header>
  );
}
