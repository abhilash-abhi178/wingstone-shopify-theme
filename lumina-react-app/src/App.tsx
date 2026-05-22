import React from "react";
import { motion } from "motion/react";
import { Music2, ArrowUpRight } from "lucide-react";

// Custom SVG Social Icons matching Lucide specifications
const Facebook = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
);

const Twitter = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
  </svg>
);

const Youtube = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17" />
    <path d="m10 15 5-3-5-3z" />
  </svg>
);

const Instagram = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);

function App() {
  return (
    <main className="relative w-full min-h-[115vh] overflow-x-hidden flex flex-col items-center font-sans selection:bg-white/20 selection:text-white">
      {/* Background Video */}
      <video
        className="fixed inset-0 w-full h-full object-cover z-[0]"
        autoPlay
        loop
        muted
        playsInline
      >
        <source
          src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260429_114316_1c7889ad-2885-410e-b493-98119fee0ddb.mp4"
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>

      {/* Dark Overlay to improve text legibility */}
      <div className="fixed inset-0 bg-black/40 z-[1] pointer-events-none" />

      {/* Content Wrapper */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 md:px-8 flex-1 flex flex-col justify-between py-12 md:py-24">
        {/* Upper Header and CTA */}
        <header className="w-full flex items-center justify-between mb-20">
          <div className="flex items-center gap-3 text-white">
            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 256 256" fill="currentColor" className="text-white">
              <path d="M 4.688 136 C 68.373 136 120 187.627 120 251.312 C 120 252.883 119.967 254.445 119.905 256 L 0 256 L 0 136.096 C 1.555 136.034 3.117 136 4.688 136 Z M 251.312 136 C 252.883 136 254.445 136.034 256 136.096 L 256 256 L 136.095 256 C 136.032 254.438 136.001 252.875 136 251.312 C 136 187.627 187.627 136 251.312 136 Z M 119.905 0 C 119.967 1.555 120 3.117 120 4.688 C 120 68.373 68.373 120 4.687 120 C 3.117 120 1.555 119.967 0 119.905 L 0 0 Z M 256 119.905 C 254.445 119.967 252.883 120 251.312 120 C 187.627 120 136 68.373 136 4.687 C 136 3.117 136.033 1.555 136.095 0 L 256 0 Z" />
            </svg>
            <span className="text-xl font-bold tracking-widest">LUMINA</span>
          </div>
          <a
            href="#explore"
            className="px-6 py-2 bg-white/10 hover:bg-white/20 border border-white/20 backdrop-blur-md rounded-full text-white text-xs font-semibold tracking-wider uppercase transition-all duration-300"
          >
            Enter Portal
          </a>
        </header>

        {/* Hero CTA Placeholder */}
        <section className="flex flex-col items-start text-left max-w-3xl my-auto py-12 md:py-20 text-white">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
          >
            <span className="px-3 py-1 bg-white/10 border border-white/20 rounded-full text-[10px] font-semibold tracking-widest uppercase mb-6 inline-block backdrop-blur-sm">
              Cosmic Observation Center
            </span>
          </motion.div>
          
          <motion.h1
            className="text-4xl md:text-7xl font-light tracking-tight leading-[1.1] mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          >
            Experience clarity <br />
            <span className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-white via-white/80 to-white/50">
              beyond the horizon.
            </span>
          </motion.h1>

          <motion.p
            className="text-lg text-white/80 font-light max-w-xl leading-relaxed mb-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          >
            Step into an immersive visual workspace curating deep stellar observations, planetary science updates, and global cultural touchpoints.
          </motion.p>

          <motion.div
            className="flex flex-wrap gap-4"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          >
            <button className="px-8 py-4 bg-white text-black font-semibold rounded-full hover:bg-white/90 transition-all shadow-lg shadow-white/10 flex items-center gap-2 group text-sm">
              Begin Exploration
              <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
            </button>
            <button className="px-8 py-4 bg-white/10 hover:bg-white/20 border border-white/20 backdrop-blur-md rounded-full text-white font-semibold transition-all text-sm">
              Watch Prelude
            </button>
          </motion.div>
        </section>

        {/* Liquid Glass Footer */}
        <motion.footer
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
          className="liquid-glass w-full rounded-3xl p-6 md:p-10 text-white/70 mt-32 md:mt-64"
        >
          {/* Top Grid */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-12 mb-10">
            {/* Logo/Brand Column */}
            <div className="md:col-span-5 flex flex-col items-start gap-4">
              <div className="flex items-center gap-3 text-white">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 256 256" fill="currentColor">
                  <path d="M 4.688 136 C 68.373 136 120 187.627 120 251.312 C 120 252.883 119.967 254.445 119.905 256 L 0 256 L 0 136.096 C 1.555 136.034 3.117 136 4.688 136 Z M 251.312 136 C 252.883 136 254.445 136.034 256 136.096 L 256 256 L 136.095 256 C 136.032 254.438 136.001 252.875 136 251.312 C 136 187.627 187.627 136 251.312 136 Z M 119.905 0 C 119.967 1.555 120 3.117 120 4.688 C 120 68.373 68.373 120 4.687 120 C 3.117 120 1.555 119.967 0 119.905 L 0 0 Z M 256 119.905 C 254.445 119.967 252.883 120 251.312 120 C 187.627 120 136 68.373 136 4.687 C 136 3.117 136.033 1.555 136.095 0 L 256 0 Z" />
                </svg>
                <span className="text-xl font-medium tracking-wider">LUMINA</span>
              </div>
              <p className="text-sm leading-relaxed max-w-sm text-white/60">
                Lumina provides premium clarity on global events and cosmic wonders - shared with all for free.
              </p>
            </div>

            {/* Links Columns */}
            <div className="md:col-span-7 grid grid-cols-1 sm:grid-cols-3 gap-8">
              {/* Column 1: Discover */}
              <div className="flex flex-col gap-4">
                <h4 className="text-sm uppercase tracking-wider text-white font-medium">Discover</h4>
                <ul className="flex flex-col gap-2.5 text-xs text-white/50">
                  <li><a href="#labs" className="hover:text-white transition-colors duration-300">Labs & Workshops</a></li>
                  <li><a href="#series" className="hover:text-white transition-colors duration-300">Deep Dive Series</a></li>
                  <li><a href="#circle" className="hover:text-white transition-colors duration-300">Global Circle</a></li>
                  <li><a href="#vault" className="hover:text-white transition-colors duration-300">Resource Vault</a></li>
                  <li><a href="#roadmap" className="hover:text-white transition-colors duration-300">Future Roadmap</a></li>
                </ul>
              </div>

              {/* Column 2: The Mission */}
              <div className="flex flex-col gap-4">
                <h4 className="text-sm uppercase tracking-wider text-white font-medium">The Mission</h4>
                <ul className="flex flex-col gap-2.5 text-xs text-white/50">
                  <li><a href="#origin" className="hover:text-white transition-colors duration-300">Origin Story</a></li>
                  <li><a href="#collective" className="hover:text-white transition-colors duration-300">The Collective</a></li>
                  <li><a href="#newsroom" className="hover:text-white transition-colors duration-300">Newsroom Hub</a></li>
                  <li><a href="#careers" className="hover:text-white transition-colors duration-300">Join the Team</a></li>
                </ul>
              </div>

              {/* Column 3: Concierge */}
              <div className="flex flex-col gap-4">
                <h4 className="text-sm uppercase tracking-wider text-white font-medium">Concierge</h4>
                <ul className="flex flex-col gap-2.5 text-xs text-white/50">
                  <li><a href="#contact" className="hover:text-white transition-colors duration-300">Get in Touch</a></li>
                  <li><a href="#privacy" className="hover:text-white transition-colors duration-300">Legal Privacy</a></li>
                  <li><a href="#terms" className="hover:text-white transition-colors duration-300">User Agreement</a></li>
                  <li><a href="#report" className="hover:text-white transition-colors duration-300">Report Concern</a></li>
                </ul>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="pt-6 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-6 md:gap-4">
            <p className="text-[10px] uppercase tracking-widest opacity-50">
              Curated by @GotInGeorgiG
            </p>
            <div className="flex items-center gap-4">
              <span className="text-[10px] uppercase tracking-widest opacity-50">Join the Journey:</span>
              <div className="flex items-center gap-3">
                <a href="#music" className="opacity-70 hover:opacity-100 transition-colors hover:text-white" aria-label="Music">
                  <Music2 className="w-4 h-4" />
                </a>
                <a href="#facebook" className="opacity-70 hover:opacity-100 transition-colors hover:text-white" aria-label="Facebook">
                  <Facebook className="w-4 h-4" />
                </a>
                <a href="#twitter" className="opacity-70 hover:opacity-100 transition-colors hover:text-white" aria-label="Twitter">
                  <Twitter className="w-4 h-4" />
                </a>
                <a href="#youtube" className="opacity-70 hover:opacity-100 transition-colors hover:text-white" aria-label="Youtube">
                  <Youtube className="w-4 h-4" />
                </a>
                <a href="#instagram" className="opacity-70 hover:opacity-100 transition-colors hover:text-white" aria-label="Instagram">
                  <Instagram className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </motion.footer>
      </div>
    </main>
  );
}

export default App;
