import React from 'react';
import { Home, Github, ExternalLink } from 'lucide-react';

export default function FooterCTA() {
  return (
    <footer className="w-full bg-black py-10 text-white">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
          <div className="text-center sm:text-left">
            <h4 className="text-lg font-semibold">Your Single Orchestrator Agent</h4>
            <p className="text-sm text-white/70">TBC-style planning • LlamaIndex-ready • Directory-based caching</p>
          </div>
          <div className="flex flex-wrap items-center gap-3">
            <a href="#" className="inline-flex items-center gap-2 rounded-lg border border-white/15 px-3 py-2 hover:bg-white/10">
              <Home className="h-4 w-4" />
              Home
            </a>
            <a href="https://mistral-ai-three.vercel.app" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-lg border border-white/15 px-3 py-2 hover:bg-white/10">
              <ExternalLink className="h-4 w-4" />
              Mistral Bridge
            </a>
            <a href="https://github.com" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-lg border border-white/15 px-3 py-2 hover:bg-white/10">
              <Github className="h-4 w-4" />
              Repo
            </a>
          </div>
        </div>
        <p className="mt-6 text-center text-xs text-white/50">This is a UI preview. Backend endpoints and API keys can be wired next.</p>
      </div>
    </footer>
  );
}
