'use client';

import React from 'react';
import { motion } from 'motion/react';
import { 
  Shield, 
  Lock, 
  Key, 
  Eye, 
  EyeOff, 
  Fingerprint, 
  RotateCcw,
  ShieldCheck,
  Zap
} from 'lucide-react';
import { Sidebar } from '@/components/Sidebar';
import { TopNav } from '@/components/TopNav';

export default function VaultPage() {
  return (
    <div className="min-h-screen">
      <TopNav />
      <Sidebar />
      
      <main className="ml-20 md:ml-64 pt-32 px-12 pb-24 flex flex-col items-center justify-center min-h-[calc(100vh-128px)]">
        <div className="max-w-xl w-full text-center">
          <motion.div 
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="w-32 h-32 rounded-[2.5rem] bg-primary/10 border border-primary/30 flex items-center justify-center mx-auto mb-12 relative"
          >
            <div className="absolute inset-0 bg-primary/20 blur-3xl rounded-full animate-pulse"></div>
            <Shield size={64} className="text-primary relative" />
          </motion.div>

          <h1 className="text-6xl font-bold font-headline tracking-tighter text-on-surface mb-6 text-glow">
            Access <span className="text-primary italic">Vault</span>
          </h1>
          <p className="text-on-surface-variant text-lg mb-12 leading-relaxed">
            Your encrypted credentials and sensitive metadata are protected by the Aura-Shield protocol. Please authenticate to proceed.
          </p>

          <div className="liquid-glass p-10 rounded-[3.5rem] border-primary/20 space-y-8">
            <div className="space-y-4">
              <div className="relative">
                <Lock className="absolute left-6 top-1/2 -translate-y-1/2 text-primary/60" size={20} />
                <input 
                  type="password" 
                  placeholder="Master Passphrase" 
                  className="w-full bg-black/40 border border-white/10 rounded-2xl py-5 pl-16 pr-6 focus:border-primary/50 focus:ring-0 text-on-surface placeholder:text-on-surface-variant/40 transition-all"
                />
              </div>
            </div>

            <button className="w-full py-5 rounded-2xl bg-gradient-to-r from-primary via-secondary to-tertiary text-on-primary font-black text-[11px] uppercase tracking-[0.4em] gold-glow hover:scale-[1.02] transition-all shadow-[0_0_30px_rgba(255,215,0,0.3)]">
              Unlock Archives
            </button>

            <div className="flex items-center justify-center gap-8 pt-4">
              <button className="flex items-center gap-3 text-[10px] font-black uppercase tracking-widest text-on-surface-variant hover:text-primary transition-colors">
                <Fingerprint size={16} /> Biometric
              </button>
              <div className="w-px h-4 bg-white/10"></div>
              <button className="flex items-center gap-3 text-[10px] font-black uppercase tracking-widest text-on-surface-variant hover:text-primary transition-colors">
                <RotateCcw size={16} /> Reset
              </button>
            </div>
          </div>

          <div className="mt-16 grid grid-cols-3 gap-8">
            <div className="flex flex-col items-center gap-3">
              <ShieldCheck size={24} className="text-primary/60" />
              <span className="text-[9px] font-black uppercase tracking-widest text-on-surface-variant">AES-256</span>
            </div>
            <div className="flex flex-col items-center gap-3">
              <Zap size={24} className="text-primary/60" />
              <span className="text-[9px] font-black uppercase tracking-widest text-on-surface-variant">Zero-Knowledge</span>
            </div>
            <div className="flex flex-col items-center gap-3">
              <Key size={24} className="text-primary/60" />
              <span className="text-[9px] font-black uppercase tracking-widest text-on-surface-variant">Multi-Sig</span>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
