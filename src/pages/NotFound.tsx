import React from 'react';

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-secondary p-10">
      <h1 className="text-primary text-9xl font-black italic">404</h1>
      <p className="text-background font-mono mt-4 uppercase tracking-tighter text-xl">Coordinate not found in urban grid.</p>
      <a href="/" className="mt-12 bg-primary text-secondary px-8 py-4 font-mono font-bold hover:scale-105 transition-transform">
        Return to Source
      </a>
    </div>
  );
}