import React, { useMemo, useState } from 'react';
import { Wand2, CheckCircle2, ClipboardList, PlayCircle } from 'lucide-react';

function makeProfessionalPrompt(input) {
  const base = input.trim();
  if (!base) return '';
  return `You are a single orchestrator agent using a TBC-style pipeline with LlamaIndex for retrieval. Validate the request, then plan and execute tool calls sequentially. Request: ${base}`;
}

function makeExecutionPlan(input) {
  const wants = input.toLowerCase();
  const steps = [
    'Normalize and professionalize the user prompt',
    'Legitimacy and safety check',
    'Select tools required and their parameters',
    'Call each tool one-by-one with validated prompts',
    'Aggregate results and generate notes/mindmap if requested',
    'Package results (PDF/links) and return to user',
  ];

  const selected = [];
  if (wants.includes('image')) selected.push('Photo Generation');
  if (wants.includes('twitter') || wants.includes('post') || wants.includes('text')) selected.push('Text Generation');
  if (wants.includes('qr')) selected.push('QR Code Generation');
  if (wants.includes('pdf')) selected.push('PDF Generation');
  if (wants.includes('code')) selected.push('Code Generation');
  if (wants.includes('mindmap')) selected.push('Mindmap Generation');
  if (wants.includes('note')) selected.push('Notes Generator');

  return { steps, tools: selected.length ? selected : ['Auto (detect)'] };
}

export default function PromptPlanner() {
  const [input, setInput] = useState('Generate an image for a space-tech theme, write a short on-time Twitter post for it, plus notes and a simple mindmap.');
  const professional = useMemo(() => makeProfessionalPrompt(input), [input]);
  const plan = useMemo(() => makeExecutionPlan(input), [input]);

  return (
    <section id="planner" className="relative w-full bg-neutral-950 py-16 text-white">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-6 flex items-center justify-between gap-4">
          <h2 className="text-3xl font-semibold">Plan your request</h2>
        </div>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
            <label className="mb-2 block text-sm text-white/70">Describe what you want the agent to do</label>
            <textarea
              value={input}
              onChange={(e) => setInput(e.target.value)}
              rows={6}
              className="w-full rounded-lg border border-white/10 bg-black/40 p-3 outline-none ring-0 placeholder:text-white/40"
              placeholder="e.g., Generate an image, write a tweet, create notes and a mindmap"
            />

            <div className="mt-4 flex flex-wrap items-center gap-3">
              <button className="inline-flex items-center gap-2 rounded-lg bg-white px-4 py-2 text-black hover:bg-white/90">
                <Wand2 className="h-4 w-4" />
                Generate plan
              </button>
              <button className="inline-flex items-center gap-2 rounded-lg border border-white/15 px-4 py-2 hover:bg-white/10">
                <PlayCircle className="h-4 w-4" />
                Run (demo)
              </button>
            </div>
          </div>

          <div className="space-y-6">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
              <div className="mb-2 flex items-center gap-2">
                <ClipboardList className="h-5 w-5" />
                <h3 className="text-lg font-medium">Professional Prompt</h3>
              </div>
              <pre className="mt-2 whitespace-pre-wrap rounded-lg bg-black/40 p-3 text-sm text-white/80">{professional || '—'}</pre>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
              <div className="mb-2 flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5" />
                <h3 className="text-lg font-medium">Execution Plan</h3>
              </div>
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div>
                  <p className="mb-2 text-sm text-white/70">Steps</p>
                  <ol className="list-inside list-decimal space-y-1 text-sm text-white/90">
                    {plan.steps.map((s) => (
                      <li key={s}>{s}</li>
                    ))}
                  </ol>
                </div>
                <div>
                  <p className="mb-2 text-sm text-white/70">Tools involved</p>
                  <div className="flex flex-wrap gap-2">
                    {plan.tools.map((t) => (
                      <span key={t} className="rounded-md border border-white/15 bg-black/30 px-2 py-1 text-xs">{t}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
