'use client';

import React from 'react';
import { motion } from 'motion/react';
import { 
  Sparkles, 
  Moon, 
  ShieldAlert, 
  Layout, 
  Cpu, 
  Search, 
  User, 
  Terminal, 
  ShieldCheck, 
  History,
  Trash2,
  ExternalLink,
  Plus
} from 'lucide-react';
import { Sidebar } from '@/components/Sidebar';
import { TopNav } from '@/components/TopNav';

const extensions = [
  { 
    id: 1, 
    icon: Sparkles, 
    title: 'AI Smart Scribe', 
    tag: 'Official', 
    desc: 'Real-time contextual AI suggestions and summarization for every webpage you visit.', 
    version: '2.4.1', 
    verified: true, 
    active: true 
  },
  { 
    id: 2, 
    icon: Moon, 
    title: 'Midnight Protocol', 
    desc: 'Enforces deep obsidian themes on all domains, utilizing adaptive OLED contrast ratios.', 
    version: '1.0.8', 
    updated: '2d ago', 
    active: true 
  },
  { 
    id: 3, 
    icon: ShieldAlert, 
    title: 'Vault Linker', 
    desc: 'Securely bridges your browsing credentials with hardware security modules.', 
    version: '4.2.0', 
    active: false,
    disabled: true
  },
];

export default function ExtensionsPage() {
  return (
    <div className="min-h-screen">
      <TopNav />
      <Sidebar />
      
      <main className="ml-20 md:ml-64 pt-32 px-12 pb-24 min-h-screen">
        <header className="mb-16 flex flex-col md:flex-row justify-between items-end gap-6">
          <div>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-6xl font-bold font-headline tracking-tighter text-on-surface mb-3 text-glow leading-none"
            >
              Extensions
            </motion.h1>
            <p className="text-on-surface-variant font-medium text-sm tracking-wide">
              Manage and customize your AuraSuite workspace with advanced modules.
            </p>
          </div>
          <div className="flex gap-4">
            <button className="px-8 py-3 rounded-full border border-primary/30 bg-primary/5 text-[11px] font-label uppercase tracking-[0.3em] text-primary hover:bg-primary/20 hover:border-primary transition-all font-black">
              Developer Mode
            </button>
            <button className="bg-gradient-to-br from-primary via-secondary to-tertiary text-on-primary px-10 py-3 rounded-full text-[11px] font-black uppercase tracking-[0.3em] gold-glow hover:scale-105 transition-all shadow-[0_0_20px_rgba(255,215,0,0.3)]">
              Get More
            </button>
          </div>
        </header>

        <div className="grid grid-cols-1 xl:grid-cols-2 2xl:grid-cols-3 gap-10">
          {extensions.map((ext) => (
            <motion.div 
              key={ext.id}
              whileHover={{ y: -5 }}
              className={`liquid-glass p-10 rounded-[3rem] flex flex-col group transition-all duration-700 ${ext.disabled ? 'opacity-60 grayscale' : ''}`}
            >
              <div className="flex justify-between items-start mb-8">
                <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center border border-primary/20">
                  <ext.icon size={36} className="text-primary" />
                </div>
                <div className="flex items-center">
                  <div className={`w-12 h-6 rounded-full relative cursor-pointer transition-colors ${ext.active ? 'bg-primary/20' : 'bg-white/10'}`}>
                    <div className={`absolute top-1 w-4 h-4 rounded-full transition-all ${ext.active ? 'right-1 bg-primary' : 'left-1 bg-white/40'}`} />
                  </div>
                </div>
              </div>
              
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-2">
                  <h3 className="text-2xl font-bold font-headline text-on-surface tracking-tight">{ext.title}</h3>
                  {ext.tag && (
                    <span className="text-[9px] bg-primary/10 text-primary px-3 py-1 rounded-full font-black uppercase tracking-[0.2em] border border-primary/30">
                      {ext.tag}
                    </span>
                  )}
                </div>
                <p className="text-sm text-on-surface-variant mb-6 leading-relaxed">{ext.desc}</p>
                <div className="flex items-center gap-6 text-[10px] font-black uppercase tracking-widest text-on-surface-variant/60 mb-10">
                  <span className="flex items-center gap-2"><Terminal size={14} className="text-primary" /> v. {ext.version}</span>
                  {ext.verified && <span className="flex items-center gap-2"><ShieldCheck size={14} className="text-primary" /> Aura-Verified</span>}
                  {ext.updated && <span className="flex items-center gap-2"><History size={14} className="text-primary" /> Updated {ext.updated}</span>}
                </div>
              </div>

              <div className="flex gap-4">
                <button className="flex-1 py-3.5 rounded-2xl bg-black/40 border border-white/10 text-on-surface font-black text-[10px] uppercase tracking-widest hover:bg-primary/5 hover:text-primary hover:border-primary/30 transition-all">
                  Details
                </button>
                <button className="px-6 py-3.5 rounded-2xl bg-red-500/10 border border-red-500/20 text-red-400 font-black text-[10px] uppercase tracking-widest hover:bg-red-500 hover:text-white transition-all">
                  Remove
                </button>
              </div>
            </motion.div>
          ))}

          {/* Featured Extension */}
          <div className="xl:col-span-2 liquid-glass p-10 rounded-[3.5rem] flex flex-col md:flex-row gap-12 items-center">
            <div className="w-full md:w-[40%] aspect-[4/3] rounded-[2.5rem] overflow-hidden border border-primary/20 shadow-2xl relative">
              <img 
                src="https://picsum.photos/seed/tech/600/450" 
                alt="Featured" 
                className="w-full h-full object-cover opacity-60"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
            </div>
            <div className="flex-1">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <span className="text-primary text-[10px] font-black uppercase tracking-[0.5em] mb-4 block text-glow">Featured Engine</span>
                  <h3 className="text-4xl font-bold font-headline text-on-surface leading-tight mb-6">Aura Canvas Studio</h3>
                </div>
                <div className="w-12 h-6 rounded-full bg-primary/20 relative cursor-pointer mt-2">
                  <div className="absolute top-1 right-1 w-4 h-4 rounded-full bg-primary" />
                </div>
              </div>
              <p className="text-on-surface-variant text-base mb-10 leading-relaxed max-w-xl">
                Transform any website into a creative playground. Annotate, redesign, and share interactive web layouts with the integrated Studio toolset.
              </p>
              <div className="flex gap-6">
                <button className="bg-primary text-on-primary px-10 py-3.5 rounded-2xl text-[11px] font-black uppercase tracking-widest hover:scale-105 transition-all gold-glow">
                  Launch Studio
                </button>
                <button className="px-8 py-3.5 rounded-2xl bg-black/40 border border-primary/20 text-on-surface font-black text-[11px] uppercase tracking-widest hover:bg-primary/5 hover:text-primary transition-all">
                  Settings
                </button>
              </div>
            </div>
          </div>

          {/* System Optimization */}
          <div className="liquid-glass p-10 rounded-[3rem] flex flex-col justify-center gap-8">
            <div>
              <div className="flex justify-between items-center mb-4">
                <span className="text-[10px] font-black uppercase tracking-[0.4em] text-on-surface-variant">System Optimization</span>
                <span className="text-[11px] bg-primary/10 text-primary px-4 py-1.5 rounded-full font-black border border-primary/30">Stable</span>
              </div>
              <h3 className="text-2xl font-bold font-headline text-on-surface tracking-tight mb-8">Memory Integrity</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center text-[10px] font-black uppercase tracking-widest text-on-surface-variant/80">
                  <span>Extension Allocation</span>
                  <span className="text-primary text-glow">82% Capacity</span>
                </div>
                <div className="w-full h-2 bg-black/40 rounded-full overflow-hidden border border-primary/10">
                  <motion.div 
                    initial={{ width: 0 }}
                    animate={{ width: '82%' }}
                    className="h-full bg-gradient-to-r from-primary via-secondary to-tertiary shadow-[0_0_20px_rgba(255,215,0,0.4)]"
                  />
                </div>
              </div>
            </div>
            <button className="w-full py-4 rounded-2xl bg-black/40 border border-white/10 text-[10px] font-black uppercase tracking-[0.3em] hover:bg-primary/5 hover:text-primary transition-all">
              Purge Buffer Cache
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}
