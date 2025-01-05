import React from 'react';
import { Home, LogIn } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-sm border-b">
      <div className="container mx-auto px-4">
        <div className="h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Home className="h-6 w-6" />
            <span className="font-semibold text-lg">Summit Climbing</span>
          </div>
          
          <div className="flex items-center gap-4">
            <Button variant="ghost" className="text-sm">
              <Home className="h-4 w-4 mr-2" />
              Home
            </Button>
            <Button variant="default" className="text-sm">
              <LogIn className="h-4 w-4 mr-2" />
              Login
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
}