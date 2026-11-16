"use client"; //Tells Next.js to run this components in the browser.

import { useState, useEffect } from "react";

export default function Footer() {
    const [year, setYear] = useState(2026);

    return (
     <footer className="w-full bg-slate-950 text-slate-400 py-8 mt-auto border-t border-slate-800">
        <div className="max-w-5xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
        
        {/* Copyright */}
        <div className="text-sm">
        {currentYear} Abeer Imran. All rights reserved.
        </div>

        {/* Social Links */}
        <div className="flex gap-6 text-sm font-medium">
          <a 
            href="https://github.com/abeer-imran" 
            target="_blank" 
            rel="noopener noreferrer"
            className="hover:text-blue-400 transition-colors"
          >
            GitHub
          </a>
          <a 
            href="https://www.linkedin.com/in/abeer-imran-9281b4356/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="hover:text-blue-400 transition-colors"
          >
            LinkedIn
          </a>
          <a 
            href="abeerimran2006@gmail.com" 
            className="hover:text-blue-400 transition-colors"
          >
            Email
          </a>
        </div>

      </div>
    </footer>
  );
}