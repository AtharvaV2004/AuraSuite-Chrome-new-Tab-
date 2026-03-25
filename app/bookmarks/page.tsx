'use client';

import React from 'react';
import { motion } from 'motion/react';
import { 
  Search, 
  Grid, 
  List, 
  FolderPlus, 
  MoreHorizontal, 
  ExternalLink, 
  Star,
  Clock,
  Plus,
  Tag
} from 'lucide-react';
import { Sidebar } from '@/components/Sidebar';
import { TopNav } from '@/components/TopNav';

const bookmarks = [
  { id: 1, title: 'AuraSuite Documentation', url: 'docs.aurasuite.io', category: 'Dev', img: 'https://picsum.photos/seed/docs/200/200' },
  { id: 2, title: 'Dribbble - Design Inspiration', url: 'dribbble.com', category: 'Design', img: 'https://picsum.photos/seed/dribbble/200/200' },
  { id: 3, title: 'Stripe Dashboard', url: 'dashboard.stripe.com', category: 'Finance', img: 'https://picsum.photos/seed/stripe/200/200' },
  { id: 4, title: 'Vercel - Deployment', url: 'vercel.com', category: 'Dev', img: 'https://picsum.photos/seed/vercel/200/200' },
  { id: 5, title: 'Midjourney Gallery', url: 'midjourney.com', category: 'AI', img: 'https://picsum.photos/seed/mj/200/200' },
  { id: 6, title: 'Linear - Issue Tracking', url: 'linear.app', category: 'Product', img: 'https://picsum.photos/seed/linear/200/200' },
];

export default function BookmarksPage() {
  return (
    <div className="min-h-screen">
      <TopNav />
      <Sidebar />
      
      <main className="ml-20 md:ml-64 pt-32 px-12 pb-24">
        <header className="mb-16 flex flex-col md:flex-row justify-between items-end gap-8">
          <div>
            <motion.h1 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="text-7xl font-bold font-headline tracking-tighter text-on-surface text-glow leading-none mb-4"
            >
              Bookmarks
            </motion.h1>
            <div className="flex items-center gap-6 text-on-surface-variant font-medium">
              <span className="flex items-center gap-2"><Star size={16} className="text-primary" /> 128 Favorites</span>
              <span className="w-1 h-1 rounded-full bg-white/20"></span>
              <span className="flex items-center gap-2"><Clock size={16} /> Recently Added</span>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="flex bg-black/40 rounded-2xl p-1 border border-white/10">
              <button className="p-3 rounded-xl bg-primary/10 text-primary border border-primary/20">
                <Grid size={20} />
              </button>
              <button className="p-3 rounded-xl text-on-surface-variant hover:text-on-surface transition-colors">
                <List size={20} />
              </button>
            </div>
            <button className="flex items-center gap-3 px-8 py-4 rounded-2xl bg-gradient-to-r from-primary to-secondary text-on-primary font-black text-[11px] uppercase tracking-widest gold-glow">
              <FolderPlus size={18} />
              <span>New Collection</span>
            </button>
          </div>
        </header>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {bookmarks.map((bookmark) => (
            <motion.div 
              key={bookmark.id}
              whileHover={{ y: -8 }}
              className="liquid-glass rounded-[2.5rem] overflow-hidden group border-primary/10 hover:border-primary/40 transition-all duration-500"
            >
              <div className="h-48 relative overflow-hidden">
                <img 
                  src={bookmark.img} 
                  alt={bookmark.title} 
                  className="w-full h-full object-cover opacity-60 group-hover:opacity-80 transition-all duration-1000 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent"></div>
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                  <button className="w-10 h-10 rounded-full bg-black/60 backdrop-blur-md border border-white/20 flex items-center justify-center text-on-surface hover:text-primary transition-colors">
                    <ExternalLink size={18} />
                  </button>
                </div>
              </div>
              <div className="p-8">
                <div className="flex items-center gap-2 mb-3">
                  <Tag size={12} className="text-primary" />
                  <span className="text-[9px] font-black uppercase tracking-widest text-primary/70">{bookmark.category}</span>
                </div>
                <h3 className="text-xl font-bold font-headline text-on-surface mb-2 group-hover:text-glow transition-all">{bookmark.title}</h3>
                <p className="text-sm text-on-surface-variant mb-6 truncate">{bookmark.url}</p>
                <div className="flex justify-between items-center">
                  <div className="flex -space-x-2">
                    {[1, 2, 3].map((i) => (
                      <div key={i} className="w-6 h-6 rounded-full border-2 border-background bg-white/10 overflow-hidden">
                        <img src={`https://picsum.photos/seed/avatar${i}/50/50`} alt="user" />
                      </div>
                    ))}
                  </div>
                  <button className="text-on-surface-variant hover:text-primary transition-colors">
                    <MoreHorizontal size={20} />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
          
          {/* Add Card */}
          <button className="rounded-[2.5rem] border-2 border-dashed border-white/10 flex flex-col items-center justify-center gap-4 hover:border-primary/40 hover:bg-primary/5 transition-all group min-h-[380px]">
            <div className="w-16 h-16 rounded-full bg-white/5 flex items-center justify-center text-on-surface-variant group-hover:text-primary transition-colors">
              <Plus size={32} />
            </div>
            <span className="text-[11px] font-black uppercase tracking-[0.4em] text-on-surface-variant group-hover:text-primary transition-colors">Add Bookmark</span>
          </button>
        </div>
      </main>
    </div>
  );
}
