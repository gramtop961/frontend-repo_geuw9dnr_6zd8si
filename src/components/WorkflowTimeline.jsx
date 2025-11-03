import React from 'react';
import { Check, ClipboardCheck, ListChecks, Boxes, Server, Share2 } from 'lucide-react';

const steps = [
  {
    title: 'Normalize Prompt',
    desc: 'Convert user text into a professional, structured prompt.',
    icon: ClipboardCheck,
  },
  {
    title: 'Legitimacy Check',
    desc: 'Validate safety and compliance before running any tool.',
    icon: Check,
  },
  {
    title: 'Select Tools',
    desc: 'Decide which tools to call and set parameters.',
    icon: ListChecks,
  },
  {
    title: 'Execute Sequentially',
    desc: 'Call each tool one-by-one and cache artifacts into directories.',
    icon: Boxes,
  },
  {
    title: 'Package & Host',
    desc: 'Bundle outputs (PDF/links) and host static files if needed.',
    icon: Server,
  },
  {
    title: 'Return Results',
    desc: 'Send final assets plus short notes and mindmap back to user.',
    icon: Share2,
  },
];

export default function WorkflowTimeline() {
  return (
    <section className="relative w-full bg-neutral-950 py-16 text-white">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="mb-8 text-3xl font-semibold">How the Single Agent Works</h2>
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {steps.map((s) => (
            <div key={s.title} className="rounded-2xl border border-white/10 bg-white/5 p-5">
              <div className="mb-3 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-white/10">
                  <s.icon className="h-5 w-5" />
                </div>
                <h3 className="text-lg font-medium">{s.title}</h3>
              </div>
              <p className="text-sm text-white/75">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
