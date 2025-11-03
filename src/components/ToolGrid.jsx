import React from 'react';
import { Image as ImageIcon, Type, QrCode, FileText, Code, Brain, List } from 'lucide-react';

const tools = [
  {
    name: 'Photo Generation',
    desc: 'Create images from prompts with controllable styles and sizes.',
    icon: ImageIcon,
  },
  {
    name: 'Text Generation',
    desc: 'Compose posts, blogs, and outlines with factual checks.',
    icon: Type,
  },
  {
    name: 'QR Code Generation',
    desc: 'Generate branded QR codes for links and assets.',
    icon: QrCode,
  },
  {
    name: 'PDF Generation',
    desc: 'Compile results into exportable PDFs with sections.',
    icon: FileText,
  },
  {
    name: 'Code Generation',
    desc: 'Bootstrap scripts and utilities with explanations.',
    icon: Code,
  },
  {
    name: 'Mindmap Generation',
    desc: 'Visualize ideas and relationships programmatically.',
    icon: Brain,
  },
  {
    name: 'Notes Generator',
    desc: 'Summarize and organize key points into notes.',
    icon: List,
  },
  {
    name: 'RAG / NLP',
    desc: 'Retrieve and ground outputs from your knowledge base.',
    icon: Brain,
  },
];

export default function ToolGrid() {
  return (
    <section id="tools" className="relative w-full bg-neutral-950 py-16 text-white">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-8 flex items-end justify-between gap-4">
          <div>
            <h2 className="text-3xl font-semibold">Essential Tools</h2>
            <p className="mt-1 text-white/70">All managed by a single agent that plans and executes end-to-end.</p>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {tools.map((t) => (
            <div
              key={t.name}
              className="group rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur transition hover:translate-y-[-2px] hover:bg-white/10"
            >
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-white/10">
                  <t.icon className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="text-lg font-medium">{t.name}</h3>
                  <p className="text-sm text-white/70">{t.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
