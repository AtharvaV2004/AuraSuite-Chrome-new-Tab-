'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { 
  Bookmark, 
  History, 
  BookOpen, 
  Puzzle, 
  Shield, 
  HelpCircle, 
  LogOut,
  Library
} from 'lucide-react';
import { motion } from 'motion/react';

const navItems = [
  { icon: Bookmark, label: 'Bookmarks', href: '/bookmarks' },
  { icon: History, label: 'History', href: '/history' },
  { icon: BookOpen, label: 'Reading List', href: '/reading-list' },
  { icon: Puzzle, label: 'Extensions', href: '/extensions' },
  { icon: Shield, label: 'Vault', href: '/vault' },
];

export function Sidebar() {
  const pathname = usePathname();

  return (
    <nav className="fixed left-0 top-0 h-screen w-20 md:w-72 flex flex-col py-28 px-6 z-40 bg-black/40 backdrop-blur-3xl border-r border-white/[0.05]">
      <div className="mb-12 px-4">
        <h2 className="font-headline text-primary/60 text-[10px] uppercase tracking-[0.5em] font-bold">Registry</h2>
      </div>

      <div className="space-y-4 flex-1">
        {navItems.map((item) => {
          const isActive = pathname === item.href;
          return (
            <Link key={item.href} href={item.href}>
              <motion.div
                whileHover={{ x: 4 }}
                className={`flex items-center gap-5 px-5 py-3.5 rounded-2xl transition-all group ${
                  isActive 
                    ? 'bg-primary/5 text-primary border border-primary/20 gold-border-glow' 
                    : 'text-on-surface-variant hover:text-primary hover:bg-primary/5'
                }`}
              >
                <item.icon size={20} className={isActive ? 'fill-primary/20' : ''} />
                <span className="text-xs font-headline uppercase tracking-widest font-bold hidden md:inline">
                  {item.label}
                </span>
              </motion.div>
            </Link>
          );
        })}
      </div>

      <div className="mt-auto px-4 pb-12 space-y-8">
        <div className="space-y-3">
          <div className="h-1 w-full bg-white/5 rounded-full overflow-hidden">
            <motion.div 
              initial={{ width: 0 }}
              animate={{ width: '75%' }}
              className="h-full bg-gradient-to-r from-primary to-tertiary shadow-[0_0_15px_rgba(255,215,0,0.4)]"
            />
          </div>
          <div className="flex justify-between items-center">
            <p className="text-[9px] text-on-surface-variant font-bold uppercase tracking-[0.2em]">Storage</p>
            <p className="text-[9px] text-primary font-bold">75%</p>
          </div>
        </div>

        <div className="space-y-4 border-t border-white/5 pt-8">
           <button className="flex items-center gap-4 text-on-surface-variant hover:text-primary transition-colors text-[10px] uppercase font-bold tracking-widest">
            <HelpCircle size={14} /> Support
          </button>
          <button className="flex items-center gap-4 text-on-surface-variant hover:text-primary transition-colors text-[10px] uppercase font-bold tracking-widest">
            <LogOut size={14} /> Sign Out
          </button>
        </div>
      </div>
    </nav>
  );
}
