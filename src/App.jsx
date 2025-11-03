import React from 'react';
import Hero from './components/Hero';
import ToolGrid from './components/ToolGrid';
import PromptPlanner from './components/PromptPlanner';
import WorkflowTimeline from './components/WorkflowTimeline';
import FooterCTA from './components/FooterCTA';

function App() {
  return (
    <div className="min-h-screen w-full bg-black text-white">
      <Hero />
      <ToolGrid />
      <PromptPlanner />
      <WorkflowTimeline />
      <FooterCTA />
    </div>
  );
}

export default App;
