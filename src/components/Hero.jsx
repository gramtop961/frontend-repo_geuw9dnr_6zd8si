import React from 'react';
import Spline from '@splinetool/react-spline';
import { Rocket, ShieldCheck } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-[70vh] w-full overflow-hidden bg-black text-white">
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/pDXeCthqjmzYX5Zk/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* subtle gradient overlays that do not block interaction */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/70 via-black/30 to-black/80" />

      <div className="relative mx-auto flex max-w-6xl flex-col items-center px-6 pb-16 pt-24 text-center sm:pt-28">
        <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/80 backdrop-blur">
          <ShieldCheck className="h-3.5 w-3.5" />
          Single Orchestrator • TBC-style pipeline • LlamaIndex-ready
        </div>

        <h1 className="mt-5 text-4xl font-semibold leading-tight text-white sm:text-5xl md:text-6xl">
          One AI Agent to Orchestrate All Your Creative Tools
        </h1>
        <p className="mt-4 max-w-2xl text-base text-white/80 sm:text-lg">
          From image and text generation to QR, PDF, code, mindmaps and notes — a single agent validates, plans, and executes your request step by step.
        </p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <a href="#planner" className="inline-flex items-center gap-2 rounded-lg bg-white px-4 py-2 text-black hover:bg-white/90">
            <Rocket className="h-4 w-4" />
            Start a Request
          </a>
          <a href="#tools" className="rounded-lg border border-white/15 px-4 py-2 text-white hover:bg-white/10">
            Explore Tools
          </a>
        </div>
      </div>
    </section>
  );
}
