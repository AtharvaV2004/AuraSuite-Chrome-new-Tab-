'use client';

import React, { useEffect, useState } from 'react';
import { motion } from 'motion/react';
import { 
  CloudLightning, 
  Youtube, 
  Mail, 
  MessageSquare, 
  Cloud as CloudIcon, 
  Music, 
  FileText,
  ChevronLeft,
  ChevronRight,
  ShieldCheck,
  FileDown,
  Play,
  SkipBack,
  SkipForward,
  Activity,
  Pin,
  Quote
} from 'lucide-react';
import { Sidebar } from '@/components/Sidebar';
import { TopNav } from '@/components/TopNav';

export default function HomePage() {
  const [time, setTime] = useState('18:42');
  const [date, setDate] = useState('Monday, Oct 24');

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date();
      setTime(now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: false }));
      setDate(now.toLocaleDateString([], { weekday: 'long', month: 'short', day: 'numeric' }));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen">
      <TopNav />
      <Sidebar />
      
      <main className="ml-20 md:ml-72 pt-32 px-12 pb-16 relative">
        <div className="max-w-7xl mx-auto space-y-20">
          
          {/* Hero Section */}
          <section className="flex flex-col md:flex-row justify-between items-start md:items-center gap-12">
            <div className="relative">
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 0.9, y: 0 }}
                className="font-headline text-[10rem] md:text-[13rem] font-bold leading-none tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white via-primary to-tertiary gold-glow -ml-6"
              >
                {time}
              </motion.h1>
              <div className="flex items-center gap-6 mt-4 ml-2">
                <span className="text-3xl font-headline text-primary tracking-tight font-medium text-glow">{date}</span>
                <span className="h-px w-24 bg-gradient-to-r from-primary/40 to-transparent"></span>
                <span className="text-2xl text-on-surface-variant font-light">Pune, IN</span>
              </div>
            </div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="liquid-glass p-10 rounded-[3rem] flex items-center gap-8 min-w-[340px]"
            >
              <div className="text-right">
                <p className="text-6xl font-headline font-light tracking-tighter text-on-surface">24°C</p>
                <p className="text-[10px] text-primary uppercase tracking-[0.4em] mt-3 font-black text-glow">Storm Systems</p>
              </div>
              <div className="relative">
                <div className="absolute inset-0 bg-primary/20 blur-3xl rounded-full animate-pulse"></div>
                <CloudLightning size={72} className="text-primary relative fill-primary/20" />
              </div>
            </motion.div>
          </section>

          {/* Active Nodes */}
          <section>
            <div className="flex items-center justify-between mb-8 px-2">
              <h3 className="font-headline text-[11px] uppercase tracking-[0.6em] text-primary/70 font-black">Active Nodes</h3>
              <div className="flex gap-4">
                <button className="w-10 h-10 rounded-full bg-black/40 border border-white/10 hover:border-primary/50 hover:bg-primary/5 transition-all flex items-center justify-center group">
                  <ChevronLeft size={18} className="group-hover:text-primary transition-colors" />
                </button>
                <button className="w-10 h-10 rounded-full bg-black/40 border border-white/10 hover:border-primary/50 hover:bg-primary/5 transition-all flex items-center justify-center group">
                  <ChevronRight size={18} className="group-hover:text-primary transition-colors" />
                </button>
              </div>
            </div>

            <div className="flex gap-8 overflow-x-auto pb-8 no-scrollbar">
              {[
                { icon: Youtube, label: 'YouTube', color: '#FF0000', active: true },
                { icon: Mail, label: 'Gmail', color: '#FFD700' },
                { icon: MessageSquare, label: 'WhatsApp', color: '#4ADE80' },
                { icon: CloudIcon, label: 'Drive', color: '#F59E0B' },
                { icon: Music, label: 'Spotify', color: '#22C55E' },
                { icon: FileText, label: 'Notion', color: '#FFFFFF' },
              ].map((node, i) => (
                <motion.div 
                  key={i}
                  whileHover={{ scale: 1.1 }}
                  className="flex-none group cursor-pointer"
                >
                  <div className="w-32 h-32 liquid-glass rounded-[2.5rem] flex flex-col items-center justify-center border border-white/10 group-hover:border-primary/60 transition-all duration-500 relative">
                    <node.icon size={36} style={{ color: node.color }} className="drop-shadow-[0_0_12px_rgba(255,215,0,0.2)]" />
                    <span className="text-[10px] mt-4 font-label uppercase tracking-widest text-on-surface-variant group-hover:text-primary transition-colors font-bold">
                      {node.label}
                    </span>
                    {node.active && (
                      <div className="absolute top-4 right-4 w-2 h-2 bg-primary rounded-full animate-ping" />
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </section>

          {/* Bento Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            {/* Operational Directives */}
            <section className="lg:col-span-8">
              <div className="liquid-glass rounded-[3.5rem] p-12 h-full">
                <div className="flex items-center justify-between mb-12">
                  <h3 className="font-headline text-2xl font-bold flex items-center gap-5 text-glow">
                    <ShieldCheck size={32} className="text-primary" />
                    Operational Directives
                  </h3>
                  <button className="px-8 py-3 rounded-full border border-primary/30 bg-primary/5 text-[11px] font-label uppercase tracking-[0.3em] text-primary hover:bg-primary/20 hover:border-primary transition-all font-black">
                    Add Protocol +
                  </button>
                </div>
                
                <div className="space-y-6">
                  {[
                    { title: 'Finalize architectural render for Cyber-Pune project', meta: 'Priority: Alpha • T-minus 2h', active: true },
                    { title: 'Review Q4 Digital Curator metadata assets', meta: 'Priority: Beta • Tomorrow', active: false },
                  ].map((task, i) => (
                    <div key={i} className="flex items-center gap-8 p-7 rounded-[2.5rem] bg-black/40 hover:bg-primary/5 transition-all group cursor-pointer border border-white/5 hover:border-primary/30">
                      <div className={`w-8 h-8 border-2 rounded-xl flex items-center justify-center transition-all ${task.active ? 'border-primary' : 'border-white/20'}`}>
                        {task.active && <div className="w-4 h-4 bg-primary rounded-sm" />}
                      </div>
                      <div className="flex-1">
                        <p className="text-lg font-medium tracking-tight text-on-surface">{task.title}</p>
                        <p className={`text-[11px] uppercase mt-2 tracking-widest font-black ${task.active ? 'text-primary opacity-80' : 'text-on-surface-variant'}`}>
                          {task.meta}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* Data Ingest */}
            <section className="lg:col-span-4">
              <div className="liquid-glass rounded-[3.5rem] p-12 h-full flex flex-col">
                <div className="flex items-center justify-between mb-12">
                  <h3 className="font-headline text-2xl font-bold text-glow">Data Ingest</h3>
                  <FileDown size={32} className="text-primary/80" />
                </div>
                
                <div className="space-y-10 flex-1">
                  <div className="flex items-start gap-6">
                    <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center text-primary border border-primary/30">
                      <FileText size={30} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-base font-bold truncate">Q3_Economic_Forecast.pdf</p>
                      <p className="text-[11px] text-primary/60 font-label mt-1 uppercase tracking-widest font-black">4.2 MB • Secure</p>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div className="flex items-start gap-6">
                      <div className="w-14 h-14 rounded-2xl bg-secondary/10 flex items-center justify-center text-secondary border border-secondary/30">
                        <Activity size={30} />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-base font-bold truncate">Project_Nova_Source.zip</p>
                        <p className="text-[11px] text-primary font-label mt-1 uppercase tracking-widest font-black">78% • 12s left</p>
                      </div>
                    </div>
                    <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
                      <motion.div 
                        initial={{ width: 0 }}
                        animate={{ width: '78%' }}
                        className="h-full bg-gradient-to-r from-primary via-secondary to-tertiary shadow-[0_0_20px_rgba(255,215,0,0.6)]"
                      />
                    </div>
                  </div>
                </div>

                <button className="mt-12 w-full py-5 rounded-3xl border border-white/10 text-[11px] font-label uppercase tracking-[0.4em] hover:bg-primary/5 hover:border-primary/40 transition-all font-black text-on-surface-variant hover:text-primary">
                  Purge Cache
                </button>
              </div>
            </section>
          </div>

          {/* Footer Grid */}
          <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
            {/* Music Player */}
            <div className="liquid-glass p-8 rounded-[3rem] flex flex-col justify-between h-64">
              <div className="flex justify-between items-start">
                <div>
                  <p className="text-[10px] font-black text-primary uppercase tracking-[0.4em] mb-2">Audio Feed</p>
                  <p className="text-xl font-bold tracking-tight text-on-surface">Neon Drift</p>
                  <p className="text-xs text-on-surface-variant mt-1 font-medium">Kavinsky • Nightcall</p>
                </div>
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center border border-primary/30">
                  <Activity size={24} className="text-primary" />
                </div>
              </div>
              <div className="flex items-center justify-center gap-10">
                <SkipBack size={28} className="text-on-surface-variant hover:text-primary cursor-pointer transition-colors" />
                <div className="w-16 h-16 rounded-full bg-primary text-on-primary flex items-center justify-center cursor-pointer hover:scale-110 transition-all shadow-[0_0_35px_rgba(255,215,0,0.5)]">
                  <Play size={32} fill="currentColor" />
                </div>
                <SkipForward size={28} className="text-on-surface-variant hover:text-primary cursor-pointer transition-colors" />
              </div>
            </div>

            {/* Market Pulse */}
            <div className="liquid-glass p-8 rounded-[3rem] flex flex-col justify-between h-64">
              <div className="flex justify-between items-start">
                <p className="text-[10px] font-black text-on-surface-variant uppercase tracking-[0.4em]">Market Pulse</p>
                <span className="text-[11px] bg-primary/10 text-primary px-4 py-1.5 rounded-full font-black border border-primary/30">+2.4%</span>
              </div>
              <div className="space-y-5">
                {[
                  { label: 'BTC', price: '$64,231.02', color: '#f7931a' },
                  { label: 'ETH', price: '$3,412.55', color: '#627eea' },
                  { label: 'SOL', price: '$145.20', color: '#FFD700' },
                ].map((coin, i) => (
                  <div key={i} className="flex justify-between items-center">
                    <div className="flex items-center gap-4">
                      <span className="w-3 h-3 rounded-full" style={{ backgroundColor: coin.color }} />
                      <span className="text-sm font-black tracking-widest">{coin.label}</span>
                    </div>
                    <span className="text-sm font-headline font-bold text-glow">{coin.price}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Sticky Note */}
            <div className="liquid-glass p-8 rounded-[3rem] bg-gradient-to-br from-primary/10 to-transparent h-64">
              <div className="flex justify-between items-center mb-6">
                <p className="text-[10px] font-black text-primary uppercase tracking-[0.4em]">Neural Draft</p>
                <Pin size={20} className="text-primary" />
              </div>
              <p className="text-lg font-light italic leading-relaxed text-on-surface/90 tracking-tight">
                &quot;The best way to predict the future is to curate it. Remember to check the Pune server logs at midnight.&quot;
              </p>
            </div>

            {/* Quote */}
            <div className="liquid-glass p-8 rounded-[3rem] h-64 relative overflow-hidden group">
              <div className="absolute inset-0 opacity-20 group-hover:opacity-40 transition-opacity duration-1000 scale-110 group-hover:scale-100">
                <img src="https://picsum.photos/seed/abstract/400/400" alt="bg" className="w-full h-full object-cover" />
              </div>
              <div className="relative h-full flex flex-col justify-center">
                <Quote size={48} className="text-primary/40 mb-4" />
                <p className="text-lg font-headline font-bold leading-snug text-glow">Complexity is the enemy of execution.</p>
                <p className="text-[10px] text-primary font-black uppercase mt-6 tracking-[0.4em]">— Curator AI</p>
              </div>
            </div>
          </section>

          {/* News Ticker */}
          <footer className="liquid-glass py-6 px-12 rounded-full flex items-center gap-10 overflow-hidden">
            <span className="text-[11px] font-black text-primary uppercase tracking-[0.6em] flex-none text-glow">Global Update:</span>
            <div className="flex-1 whitespace-nowrap overflow-hidden">
              <motion.div 
                animate={{ x: [0, -1000] }}
                transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
                className="inline-flex gap-20 text-[11px] font-bold uppercase tracking-[0.3em] text-on-surface-variant"
              >
                <span>Quantum networking reaches Pune&apos;s tech corridor</span>
                <span>•</span>
                <span>Artemis IV docking sequences successful</span>
                <span>•</span>
                <span>Neuralink integrates with Chrome OS 12.0</span>
                <span>•</span>
                <span>Digital Gold hit record highs in global markets</span>
              </motion.div>
            </div>
          </footer>
        </div>
      </main>

      {/* Background Decoration */}
      <div className="fixed inset-0 pointer-events-none z-[-1] overflow-hidden">
        <div className="absolute top-[10%] -right-[10%] w-[1000px] h-[1000px] bg-primary/10 blur-[200px] rounded-full animate-pulse"></div>
        <div className="absolute bottom-[10%] -left-[10%] w-[1000px] h-[1000px] bg-tertiary/5 blur-[200px] rounded-full"></div>
      </div>
    </div>
  );
}
