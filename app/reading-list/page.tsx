'use client';

import React from 'react';
import { motion } from 'motion/react';
import { 
  Search, 
  Filter, 
  Plus, 
  Clock, 
  Check, 
  Trash2, 
  Share2, 
  Star,
  ArrowRight
} from 'lucide-react';
import { Sidebar } from '@/components/Sidebar';
import { TopNav } from '@/components/TopNav';

const articles = [
  { 
    id: 1, 
    category: 'Techno-Philosophy', 
    readTime: '12 min read', 
    title: 'The Architecture of Digital Solitude: Designing for Deep Work', 
    desc: 'How modern interfaces are shifting from attention-grabbing loops to serene, architectural spaces that foster human creativity and focus.',
    img: 'https://picsum.photos/seed/architecture/800/500',
    featured: true
  },
  { 
    id: 2, 
    category: 'Design', 
    readTime: '8 min read', 
    title: 'Neo-Glassmorphism: Beyond the Blur', 
    desc: 'A deep dive into the evolution of semi-transparent UI patterns in 2024 and why depth is the new flat.',
    img: 'https://picsum.photos/seed/design/400/300'
  },
  { 
    id: 3, 
    category: 'Engineering', 
    readTime: '15 min read', 
    title: 'The Rust Revolution', 
    desc: 'Understanding how memory safety and extreme speed are redefining the backend landscape.',
    img: 'https://picsum.photos/seed/code/400/300'
  },
  { 
    id: 4, 
    category: 'AI Ethics', 
    readTime: '5 min read', 
    title: 'The Ghost in the Latent Space', 
    desc: 'Who owns the dreams of an AI? Exploring intellectual property in the age of generative models.',
    img: 'https://picsum.photos/seed/ai/400/300'
  },
  { 
    id: 5, 
    category: 'Life', 
    readTime: '10 min read', 
    title: 'Quietude in the Age of Noise', 
    desc: 'A travelogue through the last silent places on earth and the psychological impact of silence.',
    img: 'https://picsum.photos/seed/nature/400/300'
  },
];

const archives = [
  { title: 'Minimalism as a Survival Strategy', source: 'The New Yorker', time: 'Completed 2 hours ago', img: 'https://picsum.photos/seed/minimal/100/100' },
  { title: 'The Future of Remote Collaboration', source: 'Wired Magazine', time: 'Completed Yesterday', img: 'https://picsum.photos/seed/remote/100/100' },
];

export default function ReadingListPage() {
  return (
    <div className="min-h-screen">
      <TopNav />
      <Sidebar />
      
      <main className="md:ml-64 pt-28 pb-16 px-12 min-h-screen">
        <section className="mb-16 relative">
          <div className="absolute -top-24 -left-24 w-96 h-96 bg-primary/5 rounded-full blur-[120px]"></div>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 relative z-10">
            <div>
              <h1 className="font-headline text-[5rem] md:text-[6rem] font-bold text-on-surface tracking-tighter leading-none text-glow">
                Reading <span className="text-primary italic opacity-90">List</span>
              </h1>
              <p className="text-on-surface-variant font-body mt-4 max-w-lg text-lg">
                Curated knowledge, preserved in liquid glass. You have <span className="text-primary font-bold">14 articles</span> waiting for your focus.
              </p>
            </div>
            <div className="flex gap-4">
              <button className="flex items-center gap-3 px-8 py-4 rounded-2xl liquid-glass border-primary/10 hover:border-primary/40 transition-all group">
                <Filter size={18} className="text-primary group-hover:rotate-180 transition-transform duration-500" />
                <span className="text-[11px] font-black uppercase tracking-widest">Filter By Topic</span>
              </button>
              <button className="flex items-center gap-3 px-8 py-4 rounded-2xl bg-gradient-to-r from-primary to-tertiary text-on-primary hover:shadow-[0_0_25px_rgba(255,215,0,0.4)] transition-all font-black text-[11px] uppercase tracking-widest">
                <Plus size={18} />
                <span>Add New Link</span>
              </button>
            </div>
          </div>
        </section>

        <section className="grid grid-cols-1 md:grid-cols-12 gap-8">
          {/* Featured Article */}
          <article className="md:col-span-8 group relative overflow-hidden rounded-[3.5rem] liquid-glass h-[500px] border-primary/20">
            <div className="absolute inset-0">
              <img src={articles[0].img} alt="Featured" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 opacity-60" />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent"></div>
            </div>
            <div className="absolute bottom-0 left-0 p-12 w-full">
              <div className="flex items-center gap-4 mb-6">
                <span className="px-4 py-1.5 rounded-full bg-primary text-on-primary text-[10px] font-black uppercase tracking-[0.2em] shadow-lg">{articles[0].category}</span>
                <span className="text-[10px] text-primary font-black uppercase tracking-widest flex items-center gap-2">
                  <Clock size={14} /> {articles[0].readTime}
                </span>
              </div>
              <h2 className="font-headline text-4xl font-bold text-on-surface mb-6 leading-tight group-hover:text-glow transition-all duration-500">{articles[0].title}</h2>
              <div className="flex items-center justify-between">
                <p className="text-on-surface-variant text-base line-clamp-2 max-w-xl">{articles[0].desc}</p>
                <div className="flex gap-4">
                  <button className="w-14 h-14 rounded-full liquid-glass flex items-center justify-center hover:bg-primary hover:text-on-primary transition-all">
                    <Check size={24} />
                  </button>
                  <button className="w-14 h-14 rounded-full liquid-glass flex items-center justify-center hover:bg-red-500/20 hover:text-red-500 border-red-500/20 transition-all">
                    <Trash2 size={24} />
                  </button>
                </div>
              </div>
            </div>
          </article>

          {/* Secondary Articles */}
          {articles.slice(1).map((art) => (
            <article key={art.id} className="md:col-span-4 group relative overflow-hidden rounded-[3rem] liquid-glass border-primary/15 flex flex-col">
              <div className="h-44 overflow-hidden">
                <img src={art.img} alt={art.title} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 opacity-60" />
              </div>
              <div className="p-8 flex-1 flex flex-col">
                <div className="flex items-center gap-3 mb-4">
                  <span className="px-3 py-1 rounded-full border border-primary/30 text-primary text-[9px] font-black uppercase tracking-widest">{art.category}</span>
                  <span className="text-[9px] text-on-surface-variant font-black uppercase tracking-widest">{art.readTime}</span>
                </div>
                <h3 className="font-headline text-2xl font-bold text-on-surface mb-4 group-hover:text-primary transition-colors text-glow">{art.title}</h3>
                <p className="text-on-surface-variant text-sm mb-8 line-clamp-2">{art.desc}</p>
                <div className="mt-auto flex gap-4">
                  <button className="flex-1 py-3 text-[10px] font-black uppercase tracking-widest text-on-primary bg-primary rounded-xl hover:shadow-[0_0_15px_rgba(255,215,0,0.4)] transition-all">Mark as Read</button>
                  <button className="px-4 py-3 text-on-surface-variant hover:text-red-500 transition-colors">
                    <Trash2 size={20} />
                  </button>
                </div>
              </div>
            </article>
          ))}
        </section>

        {/* Recently Read Archives */}
        <section className="mt-24">
          <div className="flex items-center justify-between mb-10 px-4">
            <h2 className="font-headline text-[11px] uppercase tracking-[0.6em] text-primary font-black text-glow">Recently Read Archives</h2>
            <button className="text-[10px] font-black text-on-surface-variant hover:text-primary transition-colors flex items-center gap-3 tracking-[0.2em] uppercase">
              VIEW ALL <ArrowRight size={14} />
            </button>
          </div>
          <div className="space-y-4">
            {archives.map((arch, i) => (
              <div key={i} className="flex items-center gap-8 p-6 rounded-[2.5rem] bg-black/40 border border-white/5 hover:border-primary/30 hover:bg-primary/5 transition-all group cursor-pointer">
                <div className="w-20 h-20 rounded-2xl overflow-hidden flex-shrink-0 border border-white/10">
                  <img src={arch.img} alt={arch.title} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700" />
                </div>
                <div className="flex-1">
                  <h4 className="text-xl font-bold text-on-surface group-hover:text-primary transition-colors">{arch.title}</h4>
                  <div className="flex items-center gap-6 mt-2 text-[10px] font-black uppercase tracking-widest text-on-surface-variant">
                    <span className="text-primary/70">{arch.source}</span>
                    <span className="flex items-center gap-2"><Clock size={12} /> {arch.time}</span>
                  </div>
                </div>
                <div className="flex gap-4">
                  <button className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-on-surface-variant hover:text-primary hover:border-primary/40 transition-all">
                    <Share2 size={18} />
                  </button>
                  <button className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-on-surface-variant hover:text-primary hover:border-primary/40 transition-all">
                    <Star size={18} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
