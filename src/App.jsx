import React from 'react';
import Hero from './components/Hero';
import ToolGrid from './components/ToolGrid';
import PromptPlanner from './components/PromptPlanner';
import WorkflowTimeline from './components/WorkflowTimeline';

function App() {
  return (
    <div className="min-h-screen w-full bg-black text-white">
      <Hero />
      <ToolGrid />
      <PromptPlanner />
      <WorkflowTimeline />
    </div>
  );
}

export default App;
