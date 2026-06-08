import React from "react";

export default function Footer() {
  return (
    <footer className="border-t border-border/50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-10 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="font-display text-xl tracking-wider text-foreground">
          HET <span className="text-primary">VADERFIGUUR</span>
        </div>
        <p className="font-body text-sm text-muted-foreground">
          © {new Date().getFullYear()} Vaderfiguur. Alle rechten voorbehouden.
        </p>
      </div>
    </footer>
  );
}