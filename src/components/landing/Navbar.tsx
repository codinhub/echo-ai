"use client";

import { Button } from "@/components/ui/button";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-black/70 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        <h1 className="text-2xl font-bold">
          <span className="text-violet-500">Echo</span>AI
        </h1>

        <nav className="hidden gap-8 md:flex">
          <a href="#features" className="hover:text-violet-400">Features</a>
          <a href="#pricing" className="hover:text-violet-400">Pricing</a>
          <a href="#faq" className="hover:text-violet-400">FAQ</a>
        </nav>

        <div className="flex gap-3">
          <Button variant="ghost">Login</Button>
          <Button>Get Started</Button>
        </div>
      </div>
    </header>
  );
}