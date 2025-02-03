import React from 'react';
import { Sprout } from 'lucide-react';

export function LoadingScreen() {
  return (
    <div className="fixed inset-0 bg-emerald-50 flex items-center justify-center z-50">
      <div className="text-center">
        <div className="animate-bounce mb-4">
          <Sprout className="h-16 w-16 text-emerald-600" />
        </div>
        <h1 className="text-3xl font-bold text-emerald-900 mb-2">TerraPure</h1>
        <p className="text-emerald-600">Loading organic prosperity...</p>
      </div>
    </div>
  );
}