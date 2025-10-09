import React, { useState } from 'react';
import { ExternalLink, ArrowRight, ChevronDown, ChevronUp } from 'lucide-react';
interface FooterProps {
  'data-id'?: string;
  isLoggedIn?: boolean;
}
interface AccordionSectionProps {
  title: string;
  children: React.ReactNode;
}
function AccordionSection({
  title,
  children
}: AccordionSectionProps) {
  const [isOpen, setIsOpen] = useState(false);
  return <div className="border-b border-dq-navy/20 last:border-b-0">
      <button onClick={() => setIsOpen(!isOpen)} className="w-full py-4 flex items-center justify-between text-left" aria-expanded={isOpen}>
        <h3 className="font-semibold text-base text-white">{title}</h3>
        {isOpen ? <ChevronUp size={20} className="text-white/70" /> : <ChevronDown size={20} className="text-white/70" />}
      </button>
      {isOpen && <div className="pb-4">{children}</div>}
    </div>;
}
export function Footer({
  'data-id': dataId,
  isLoggedIn = false
}: FooterProps) {
  // Minimal App Footer (Post-login)
  if (isLoggedIn) {
    return <footer data-id={dataId} className="bg-gray-50 border-t border-gray-100 w-full h-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 h-full flex items-center justify-between">
          <div className="flex items-center space-x-3 text-xs text-gray-500">
            <span>© 2025 DQ | Digital Workspace. All rights reserved.</span>
            <span className="hidden sm:inline">Version v2.1.0</span>
          </div>
          <a href="#" className="text-xs text-gray-500 hover:text-gray-700 transition-colors">
            Support
          </a>
        </div>
      </footer>;
  }
  // Full Website Footer (Pre-login)
  return <footer data-id={dataId} className="bg-dq-navy text-white w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
        {/* Mobile Layout */}
        <div className="block lg:hidden">
          {/* Logo */}
          <div className="mb-6">
            <h2 className="text-xl sm:text-2xl font-bold tracking-tight">
              DQ | Digital
              <br />
              Workspace
            </h2>
          </div>
          {/* Newsletter - Mobile Full Width */}
          <div className="mb-8">
            <p className="text-white/80 text-sm mb-4 leading-relaxed">
              Stay connected with the latest tools, learning resources, and workspace updates from DQ.
            </p>
            <div className="space-y-3">
              <input type="email" placeholder="Enter your DQ email" className="w-full px-4 py-3 rounded-md text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-dq-coral/40" aria-label="Email address for newsletter" />
              <button type="submit" className="w-full bg-white text-dq-navy px-4 py-3 rounded-md hover:bg-white/90 focus:outline-none focus:ring-2 focus:ring-dq-coral/40 transition-colors font-medium" aria-label="Subscribe to newsletter">
                Subscribe
              </button>
            </div>
          </div>
          {/* Accordion Sections */}
          <div className="mb-8">
            <AccordionSection title="Get to Know Us">
              <ul className="space-y-3">
                <li>
                  <a href="#" className="text-white/90 hover:text-white transition-colors text-sm block">
                    About DQ Workspace
                  </a>
                </li>
                <li>
                  <a href="#" className="text-white/90 hover:text-white transition-colors text-sm block">
                    Help Centre
                  </a>
                </li>
                <li>
                  <a href="#" className="text-white/90 hover:text-white transition-colors text-sm block">
                    DQ Governance & Guidelines
                  </a>
                </li>
                <li>
                  <a href="#" className="text-white/90 hover:text-white transition-colors text-sm block">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="text-white/90 hover:text-white transition-colors text-sm block">
                    Terms of Use
                  </a>
                </li>
              </ul>
            </AccordionSection>
            <AccordionSection title="For You">
              <ul className="space-y-3">
                <li>
                  <a href="#" className="text-white/90 hover:text-white transition-colors text-sm block">
                    DQ LMS Courses
                  </a>
                </li>
                <li>
                  <a href="#" className="text-white/90 hover:text-white transition-colors text-sm block">
                    Services & Requests
                  </a>
                </li>
                <li>
                  <a href="#" className="text-white/90 hover:text-white transition-colors text-sm block">
                    Communities & Surveys
                  </a>
                </li>
                <li>
                  <a href="#" className="text-white/90 hover:text-white transition-colors text-sm block">
                    News & Announcements
                  </a>
                </li>
              </ul>
            </AccordionSection>
            <AccordionSection title="Find Us">
              <ul className="space-y-3">
                <li>
                  <a href="#" className="text-white/90 hover:text-white transition-colors text-sm flex items-center gap-2" target="_blank" rel="noopener noreferrer">
                    Viva Engage →
                    <ExternalLink size={14} />
                  </a>
                </li>
                <li>
                  <a href="#" className="text-white/90 hover:text-white transition-colors text-sm flex items-center gap-2" target="_blank" rel="noopener noreferrer">
                    SharePoint →
                    <ExternalLink size={14} />
                  </a>
                </li>
                <li>
                  <a href="#" className="text-white/90 hover:text-white transition-colors text-sm flex items-center gap-2" target="_blank" rel="noopener noreferrer">
                    GitHub →
                    <ExternalLink size={14} />
                  </a>
                </li>
                <li>
                  <a href="#" className="text-white/90 hover:text-white transition-colors text-sm flex items-center gap-2" target="_blank" rel="noopener noreferrer">
                    YouTube →
                    <ExternalLink size={14} />
                  </a>
                </li>
              </ul>
            </AccordionSection>
          </div>
          {/* Copyright - Mobile */}
          <div className="border-t border-dq-navy/20 pt-6 text-center">
            <p className="text-white/70 text-xs">
              © 2025 DQ | Digital Workspace. All rights reserved.
            </p>
            <p className="text-white/70 text-xs mt-1">Version v2.1.0</p>
          </div>
        </div>
        {/* Desktop Layout */}
        <div className="hidden lg:block">
          {/* Main Footer Content */}
          <div className="grid grid-cols-4 gap-12 mb-8">
            {/* Logo and Newsletter Section */}
            <div>
              <div className="mb-6">
                <h2 className="text-2xl font-bold tracking-tight">
                  DQ | Digital
                  <br />
                  Workspace
                </h2>
              </div>
              <div className="mb-6">
                <p className="text-white/80 text-sm mb-4 leading-relaxed">
                  Stay connected with the latest tools, learning resources, and workspace updates from DQ.
                </p>
                <div className="bg-white rounded-md flex items-center justify-between px-4 py-3">
                  <span className="text-gray-600 text-sm">
                    Enter your DQ email
                  </span>
                  <button type="submit" className="bg-white text-dq-navy p-2 rounded-md hover:bg-white/90 focus:outline-none focus:ring-2 focus:ring-dq-coral/40 transition-colors" aria-label="Subscribe to newsletter">
                    <ArrowRight size={16} />
                  </button>
                </div>
              </div>
            </div>
            {/* Get to Know Us */}
            <div>
              <h3 className="font-semibold text-lg mb-6">Get to Know Us</h3>
              <ul className="space-y-4">
                <li>
                  <a href="#" className="text-white/90 hover:text-white transition-colors text-sm">
                    About DQ Workspace
                  </a>
                </li>
                <li>
                  <a href="#" className="text-white/90 hover:text-white transition-colors text-sm">
                    Help Centre
                  </a>
                </li>
                <li>
                  <a href="#" className="text-white/90 hover:text-white transition-colors text-sm">
                    DQ Governance & Guidelines
                  </a>
                </li>
                <li>
                  <a href="#" className="text-white/90 hover:text-white transition-colors text-sm">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="text-white/90 hover:text-white transition-colors text-sm">
                    Terms of Use
                  </a>
                </li>
              </ul>
            </div>
            {/* For You */}
            <div>
              <h3 className="font-semibold text-lg mb-6">For You</h3>
              <ul className="space-y-4">
                <li>
                  <a href="#" className="text-white/90 hover:text-white transition-colors text-sm">
                    DQ LMS Courses
                  </a>
                </li>
                <li>
                  <a href="#" className="text-white/90 hover:text-white transition-colors text-sm">
                    Services & Requests
                  </a>
                </li>
                <li>
                  <a href="#" className="text-white/90 hover:text-white transition-colors text-sm">
                    Communities & Surveys
                  </a>
                </li>
                <li>
                  <a href="#" className="text-white/90 hover:text-white transition-colors text-sm">
                    News & Announcements
                  </a>
                </li>
              </ul>
            </div>
            {/* Find Us */}
            <div>
              <h3 className="font-semibold text-lg mb-6">Find Us</h3>
              <ul className="space-y-4">
                <li>
                  <a href="#" className="text-white/90 hover:text-white transition-colors text-sm flex items-center gap-2" target="_blank" rel="noopener noreferrer">
                    Viva Engage →
                    <ExternalLink size={14} />
                  </a>
                </li>
                <li>
                  <a href="#" className="text-white/90 hover:text-white transition-colors text-sm flex items-center gap-2" target="_blank" rel="noopener noreferrer">
                    SharePoint →
                    <ExternalLink size={14} />
                  </a>
                </li>
                <li>
                  <a href="#" className="text-white/90 hover:text-white transition-colors text-sm flex items-center gap-2" target="_blank" rel="noopener noreferrer">
                    GitHub →
                    <ExternalLink size={14} />
                  </a>
                </li>
                <li>
                  <a href="#" className="text-white/90 hover:text-white transition-colors text-sm flex items-center gap-2" target="_blank" rel="noopener noreferrer">
                    YouTube →
                    <ExternalLink size={14} />
                  </a>
                </li>
              </ul>
            </div>
          </div>
          {/* Copyright - Desktop */}
          <div className="border-t border-dq-navy/20 pt-6 flex items-center justify-between">
            <p className="text-white/70 text-sm">
              © 2025 DQ | Digital Workspace. All rights reserved.
            </p>
            <p className="text-white/70 text-sm">Version v2.1.0</p>
          </div>
        </div>
      </div>
    </footer>;
}
