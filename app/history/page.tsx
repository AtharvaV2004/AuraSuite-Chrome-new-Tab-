'use client';

import React from 'react';
import { motion } from 'motion/react';
import { 
  Palette, 
  FileText, 
  Terminal, 
  Film, 
  Globe, 
  Mail, 
  Star, 
  Trash2,
  Download,
  Calendar
} from 'lucide-react';
import { Sidebar } from '@/components/Sidebar';
import { TopNav } from '@/components/TopNav';

const historyItems = [
  { icon: Palette, title: 'Behance - Discover the world\'s top designers', url: 'behance.net/gallery/aura-suite-redesign', time: '2:45 PM', date: 'Today' },
  { icon: FileText, title: 'Architecture Digest - Pune Modernist Movements', url: 'archdigest.com/article/pune-glass-architecture', time: '11:20 AM', date: 'Today' },
  { icon: Terminal, title: 'GitHub - AuraSuite Core Repository', url: 'github.com/aurasuite/browser-engine/commits/main', time: '9:15 AM', date: 'Today', bento: true },
  { icon: Film, title: 'Criterion Channel - Neo-Noir Collection', url: 'criterionchannel.com/neo-noir-essentials', time: '8:02 AM', date: 'Today', bento: true },
  { icon: Globe, title: 'Wikipedia - Glassmorphism in Interface Design', url: 'en.wikipedia.org/wiki/Glassmorphism', time: 'Nov 21, 11:45 PM', date: 'Yesterday' },
  { icon: Mail, title: 'AuraSuite Mail - (2) New Subscriptions', url: 'mail.aura.suite/inbox/182a9', time: 'Nov 21, 9:20 PM', date: 'Yesterday' },
];

export default function HistoryPage() {
  return (
    <div className="min-h-screen">
      <TopNav />
      <Sidebar />
      
      <main className="ml-20 md:ml-72 pt-32 px-12 pb-16 relative">
        <div className="max-w-5xl mx-auto">
          <header className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div>
              <motion.h1 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className="text-5xl md:text-7xl font-headline font-bold text-on-surface tracking-tighter text-glow mb-4"
              >
                Browsing History
              </motion.h1>
              <p className="text-on-surface-variant font-body max-w-md">
                Your digital footsteps across the curated web, preserved in liquid glass.
              </p>
            </div>
            <div className="flex gap-4">
              <button className="px-6 py-3 rounded-full bg-white/5 text-on-surface font-medium hover:bg-white/10 transition-all border border-primary/10">
                Export Logs
              </button>
              <button className="px-6 py-3 rounded-full bg-gradient-to-r from-primary to-secondary text-on-primary font-bold shadow-[0_4px_20px_rgba(255,215,0,0.4)] hover:shadow-[0_8px_30px_rgba(255,215,0,0.6)] transition-all">
                Clear History
              </button>
            </div>
          </header>

          <div className="space-y-12">
            <section>
              <div className="flex items-center gap-4 mb-6">
                <span className="text-primary font-headline font-bold text-xl">Today</span>
                <div className="h-[1px] flex-1 bg-gradient-to-r from-primary/30 to-transparent"></div>
              </div>

              <div className="grid grid-cols-1 gap-4">
                {historyItems.filter(i => i.date === 'Today').map((item, idx) => (
                  <motion.div 
                    key={idx}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: idx * 0.1 }}
                    className={`liquid-glass rounded-2xl p-4 flex items-center justify-between group hover:scale-[1.01] transition-all duration-300 ${item.bento ? 'md:col-span-1' : ''}`}
                  >
                    <div className="flex items-center gap-5">
                      <div className="w-12 h-12 rounded-xl bg-black/40 flex items-center justify-center border border-white/10">
                        <item.icon size={24} className="text-primary" />
                      </div>
                      <div>
                        <h3 className="text-on-surface font-medium group-hover:text-primary transition-colors">{item.title}</h3>
                        <p className="text-on-surface-variant text-sm flex items-center gap-2">
                          {item.url}
                          <span className="w-1 h-1 rounded-full bg-white/20"></span>
                          {item.time}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3 opacity-0 group-hover:opacity-100 transition-opacity">
                      <button className="p-2 hover:bg-white/5 rounded-lg text-on-surface-variant hover:text-on-surface">
                        <Star size={18} />
                      </button>
                      <button className="p-2 hover:bg-white/5 rounded-lg text-on-surface-variant hover:text-red-500">
                        <Trash2 size={18} />
                      </button>
                    </div>
                  </motion.div>
                ))}
              </div>
            </section>

            <section>
              <div className="flex items-center gap-4 mb-6">
                <span className="text-on-surface-variant font-headline font-bold text-xl">Yesterday</span>
                <div className="h-[1px] flex-1 bg-gradient-to-r from-white/10 to-transparent"></div>
              </div>

              <div className="grid grid-cols-1 gap-4 opacity-70 hover:opacity-100 transition-opacity">
                {historyItems.filter(i => i.date === 'Yesterday').map((item, idx) => (
                  <div key={idx} className="liquid-glass rounded-2xl p-4 flex items-center justify-between group hover:scale-[1.01] transition-all duration-300">
                    <div className="flex items-center gap-5">
                      <div className="w-12 h-12 rounded-xl bg-black/40 flex items-center justify-center border border-white/10">
                        <item.icon size={24} className="text-on-surface-variant" />
                      </div>
                      <div>
                        <h3 className="text-on-surface font-medium group-hover:text-primary transition-colors">{item.title}</h3>
                        <p className="text-on-surface-variant text-sm flex items-center gap-2">
                          {item.url}
                          <span className="w-1 h-1 rounded-full bg-white/20"></span>
                          {item.time}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </div>

          {/* Activity Stats */}
          <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="md:col-span-2 liquid-glass rounded-3xl p-8 overflow-hidden relative">
              <div className="relative z-10">
                <h4 className="text-primary font-headline font-bold mb-6">Browsing Activity</h4>
                <div className="flex items-end gap-2 h-32">
                  {[24, 16, 28, 12, 32, 20, 28].map((h, i) => (
                    <motion.div 
                      key={i}
                      initial={{ height: 0 }}
                      animate={{ height: `${h * 3}px` }}
                      className="w-full bg-primary/20 rounded-t-lg hover:bg-primary/40 transition-colors"
                    />
                  ))}
                </div>
                <div className="flex justify-between mt-4 text-xs font-mono text-on-surface-variant">
                  <span>MON</span><span>TUE</span><span>WED</span><span>THU</span><span>FRI</span><span>SAT</span><span>SUN</span>
                </div>
              </div>
              <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-primary/10 blur-[80px] rounded-full"></div>
            </div>

            <div className="liquid-glass rounded-3xl p-8 flex flex-col justify-center items-center text-center">
              <span className="text-on-surface-variant text-sm font-medium mb-2">Total Sites Visited</span>
              <span className="text-6xl font-headline font-bold text-on-surface text-glow tracking-tighter">1,284</span>
              <div className="mt-6 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold uppercase tracking-widest">
                +12% vs last week
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
