import React, { useMemo, useState, useRef, cloneElement, Component } from 'react';
import { useNavigate } from 'react-router-dom';
import { BookOpen, Briefcase, Users, Newspaper, Lightbulb, TrendingUp, Briefcase as JobIcon, Globe, Calendar, BookIcon, Award, MessageCircle, X, Clock, Compass, HeartHandshake, Building, Lock, ArrowRight, ChevronRight, GraduationCap, BarChart } from 'lucide-react';
import { AnimatedCounter, FadeInUpOnScroll, useInView } from './AnimationUtils';
// AI Chatbot component
const AIChatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  return <>
      {/* Floating button */}
      <button onClick={() => setIsOpen(true)} className="fixed bottom-6 right-6 w-14 h-14 rounded-full bg-[image:var(--dq-cta-gradient)] text-white flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 z-50 animate-pulse hover:animate-none hover:brightness-105" aria-label="Open AI Assistant">
        <MessageCircle size={24} />
      </button>
      {/* Chat modal */}
      {isOpen && <div className="fixed bottom-24 right-6 w-80 sm:w-96 bg-white rounded-lg shadow-xl z-50 overflow-hidden border border-gray-200 animate-fade-in-up">
          <div className="bg-[image:var(--dq-cta-gradient)] p-4 text-white flex justify-between items-center">
            <h3 className="font-medium">AI Assistant</h3>
            <button onClick={() => setIsOpen(false)} className="text-white hover:text-gray-200 transition-colors">
              <X size={18} />
            </button>
          </div>
          <div className="p-4 h-80 overflow-y-auto bg-gray-50">
            <div className="bg-dq-navy/10 p-3 rounded-lg rounded-tl-none inline-block max-w-[85%] animate-fade-in">
              <p className="text-gray-800">
                Hi there! How can I help you navigate the Abu Dhabi Enterprise
                Journey Platform?
              </p>
            </div>
            <div className="mt-4">
              <input type="text" placeholder="Type your question here..." className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-dq-coral/40 transition-all duration-300" autoFocus />
            </div>
          </div>
        </div>}
    </>;
};
// Service Category Card Component
const ServiceCard = ({
  service,
  onClick,
  isComingSoon = false,
  sectionColor = 'bg-dqsec-indigo'
}: {
  service: any;
  onClick: () => void;
  isComingSoon?: boolean;
  sectionColor?: string;
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const baseClasses = 'rounded-xl shadow-md overflow-hidden transition-all duration-500 transform p-6 h-full';
  const activeClasses = `${sectionColor} text-white hover:shadow-lg hover:-translate-y-1 hover:scale-102 cursor-pointer`;
  const disabledClasses = 'bg-dqsec-tint text-dq-navy/50 opacity-80 cursor-not-allowed';
  const activeButtonClasses = 'w-full inline-flex items-center justify-center gap-2 rounded-md bg-white text-[#030F35] text-sm font-semibold px-4 py-2 shadow-sm transition-colors duration-200 hover:bg-[#F7F9FF] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#030F35]/20';
  const disabledButtonClasses = 'w-full inline-flex items-center justify-center gap-2 rounded-md bg-white/80 text-dq-navy/40 text-sm font-semibold px-4 py-2 shadow-sm cursor-not-allowed';
  return <div className={`${baseClasses} ${isComingSoon ? disabledClasses : activeClasses}`} onClick={isComingSoon ? undefined : onClick} onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
      <div className="flex flex-col h-full relative">
        {isComingSoon && <div className="absolute top-0 right-0 bg-yellow-400 text-xs font-bold px-2 py-1 rounded-full text-gray-800 flex items-center animate-pulse">
            <Clock size={12} className="mr-1" />
            Coming Soon
          </div>}
        <div className={`w-14 h-14 rounded-full flex items-center justify-center mb-4 shadow-sm transition-all duration-500 ${isHovered ? 'transform -translate-y-2 animate-pulse' : ''}`} style={{
        background: 'white'
      }}>
          <div className={isComingSoon ? 'text-gray-500' : 'text-dq-coral'}>
            {cloneElement(service.icon, {
            size: 24,
            className: isComingSoon ? 'text-gray-500' : 'text-dq-coral'
          })}
          </div>
        </div>
        <h2 className="text-lg font-semibold text-white mb-1">
          {service.title}
        </h2>
        <p className="text-sm text-white/90 mb-4 flex-grow">
          {service.description}
        </p>
        <button className={`${isComingSoon ? disabledButtonClasses : activeButtonClasses} mt-auto`} disabled={isComingSoon} onClick={e => {
        if (!isComingSoon) {
          e.stopPropagation();
          onClick();
        }
      }}>
          {isComingSoon ? <>
            <Lock size={14} className="mr-2" />
            Coming Soon
          </> : <>
            Explore Now →
          </>}
        </button>
        {/* Background animation on hover */}
        {!isComingSoon && <div className="absolute inset-0 bg-white/5 opacity-0 transition-opacity duration-500" style={{
        opacity: isHovered ? 1 : 0
      }}></div>}
      </div>
    </div>;
};
// Category Header Component
interface CategoryHeaderProps {
  icon: React.ReactNode;
  title: string;
  count?: number | null;
}

const CategoryHeader: React.FC<CategoryHeaderProps> = ({
  icon,
  title,
  count = null
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const [ref, isInView] = useInView({
    threshold: 0.1
  });
  return <div className="mb-6" ref={ref} onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
      <div className="flex items-center mb-2">
        <div className="w-10 h-10 rounded-full bg-dq-navy/10 flex items-center justify-center mr-3 text-dq-navy">
          {icon}
        </div>
        <h2 className="text-2xl font-bold text-gray-800">
          {title}
        </h2>
      </div>
      {count !== null && <div className="ml-13 text-gray-600">
          <span className="font-semibold mr-1">
            <AnimatedCounter value={count} />+
          </span>
          services available in this category
        </div>}
    </div>;
};
export const HomePage: React.FC = () => {
  const navigate = useNavigate();
  // Define all services with categories
  const allServices = useMemo(() => {
    return {
      finance: [{
        id: 'dq-lms-courses',
        title: 'DQ LMS Courses',
        description: 'Learning journeys & certifications (GHC, Digital, HoV, Day in DQ, Key Tools…).',
        icon: <GraduationCap />,
        path: '/marketplace/courses',
        gradientFrom: 'from-dq-navy',
        gradientTo: 'to-dq-coral',
        isActive: true
      }, {
        id: 'dq-onboarding-flows',
        title: 'DQ Onboarding Flows',
        description: 'Step-by-step onboarding for associates, roles, and projects.',
        icon: <Compass />,
        path: '#',
        gradientFrom: 'from-dq-navy',
        gradientTo: 'to-dq-coral',
        isActive: true
      }, {
        id: 'dq-guideline-center',
        title: 'DQ Guideline Center',
        description: 'Governance frameworks & working guidelines.',
        icon: <BookIcon />,
        path: '#',
        gradientFrom: 'from-dq-navy',
        gradientTo: 'to-dq-coral',
        isActive: true
      }, {
        id: 'dq-faqs',
        title: 'DQ FAQs',
        description: 'Workspace and process knowledge base.',
        icon: <MessageCircle />,
        path: '#',
        gradientFrom: 'from-dq-navy',
        gradientTo: 'to-dq-coral',
        isActive: true
      }],
      advisory: [{
        id: 'dq-services-requests',
        title: 'DQ Services & Requests',
        description: 'IT, HR, Finance, and Facilities service support.',
        icon: <Briefcase />,
        path: '#',
        gradientFrom: 'from-dq-navy',
        gradientTo: 'to-dq-coral',
        isActive: true
      }, {
        id: 'self-service-center',
        title: 'Self-Service Center',
        description: 'Tools, apps, dashboards, templates, and DMS.',
        icon: <Globe />,
        path: '#',
        gradientFrom: 'from-dq-navy',
        gradientTo: 'to-dq-coral',
        isActive: true
      }, {
        id: 'self-service-tools',
        title: 'Self-Service Tools',
        description: 'Self-service templates and dashboards.',
        icon: <Lightbulb />,
        path: '#',
        gradientFrom: 'from-dq-navy',
        gradientTo: 'to-dq-coral',
        isActive: false
      }, {
        id: 'service-integrations',
        title: 'Service Integrations',
        description: 'Integrations and connectors planned.',
        icon: <TrendingUp />,
        path: '#',
        gradientFrom: 'from-dq-navy',
        gradientTo: 'to-dq-coral',
        isActive: false
      }],
      growth: [{
        id: 'units-directory',
        title: 'Units & Associates Directory',
        description: 'Find colleagues and explore unit structures.',
        icon: <Users />,
        path: '#',
        gradientFrom: 'from-dq-navy',
        gradientTo: 'to-dq-coral',
        isActive: true
      }, {
        id: 'communities-surveys',
        title: 'Communities & Surveys',
        description: 'Join groups, share feedback, and pulse checks.',
        icon: <HeartHandshake />,
        path: '#',
        gradientFrom: 'from-dq-navy',
        gradientTo: 'to-dq-coral',
        isActive: true
      }, {
        id: 'events-calendars',
        title: 'Events & Calendars',
        description: 'Track key events, sessions, and team activities.',
        icon: <Calendar />,
        path: '#',
        gradientFrom: 'from-dq-navy',
        gradientTo: 'to-dq-coral',
        isActive: true
      }, {
        id: 'news-announcements',
        title: 'News & Announcements',
        description: 'Stay up-to-date on updates and insights.',
        icon: <Newspaper />,
        path: '#',
        gradientFrom: 'from-dq-navy',
        gradientTo: 'to-dq-coral',
        isActive: true
      }],
      learning: [{
        id: 'asset-library',
        title: 'Asset Library',
        description: 'Design system, infographics, and branded resources.',
        icon: <Building />,
        path: '#',
        gradientFrom: 'from-dq-navy',
        gradientTo: 'to-dq-coral',
        isActive: true
      }, {
        id: 'blueprint-library',
        title: 'Blueprint Library',
        description: 'Products & solution blueprints (Discern, Designs, Deploys, Drive).',
        icon: <Compass />,
        path: '#',
        gradientFrom: 'from-dq-navy',
        gradientTo: 'to-dq-coral',
        isActive: true
      }, {
        id: 'strategy-center',
        title: 'Strategy Center',
        description: 'DQ vision, milestones, DNA, and initiatives.',
        icon: <BarChart />,
        path: '#',
        gradientFrom: 'from-dq-navy',
        gradientTo: 'to-dq-coral',
        isActive: true
      }, {
        id: 'job-center',
        title: 'Job Center',
        description: 'Vacancies, referral programs, and career mobility.',
        icon: <JobIcon />,
        path: '#',
        gradientFrom: 'from-dq-navy',
        gradientTo: 'to-dq-coral',
        isActive: true
      }, {
        id: 'glossary',
        title: 'Glossary',
        description: 'Key terms and definitions used across DQ.',
        icon: <BookOpen />,
        path: '#',
        gradientFrom: 'from-dq-navy',
        gradientTo: 'to-dq-coral',
        isActive: false
      }, {
        id: 'knowledge-base',
        title: 'Knowledge Base',
        description: 'Curated how-tos and troubleshooting guides.',
        icon: <BookIcon />,
        path: '#',
        gradientFrom: 'from-dq-navy',
        gradientTo: 'to-dq-coral',
        isActive: false
      }, {
        id: 'research-hub',
        title: 'Research Hub',
        description: 'Insights, reports, and studies.',
        icon: <Lightbulb />,
        path: '#',
        gradientFrom: 'from-dq-navy',
        gradientTo: 'to-dq-coral',
        isActive: false
      }, {
        id: 'template-library',
        title: 'Template Library',
        description: 'Ready-to-use docs and slide templates.',
        icon: <Award />,
        path: '#',
        gradientFrom: 'from-amber-600',
        gradientTo: 'to-amber-400',
        isActive: false
      }]
    };
  }, []);
  // State for managing "View All" modal
  const [showAllComingSoon, setShowAllComingSoon] = useState(false);
  const sectionColors: Record<string, string> = {
    'Learning & Enablement': 'bg-dqsec-indigo',
    'Services & Requests': 'bg-dqsec-teal',
    'Collaboration & Communities': 'bg-dqsec-aqua',
    'Resources & Libraries': 'bg-dqsec-sky'
  };
  // Function to handle service click
  const handleServiceClick = path => {
    navigate(path);
  };
  return <div className="bg-white py-16">
      <div className="container mx-auto px-4">
        {/* Marketplaces by Category */}
        <div className="mb-16">
          <FadeInUpOnScroll className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-3">
              Services & Marketplaces
            </h2>
            <div>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Discover tailored tools, learning, and resources organized by category to help you work smarter and grow at DQ.
              </p>
            </div>
          </FadeInUpOnScroll>
          {/* Learning & Enablement Category */}
          <div className="mb-10">
            <FadeInUpOnScroll>
              <CategoryHeader icon={<GraduationCap size={24} />} title="Learning & Enablement" count={4} />
            </FadeInUpOnScroll>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {allServices.finance.map((service, index) => <FadeInUpOnScroll key={service.id} delay={index * 0.1}>
                  <ServiceCard service={service} sectionColor={sectionColors['Learning & Enablement']} onClick={() => handleServiceClick(service.path)} isComingSoon={!service.isActive} />
                </FadeInUpOnScroll>)}
            </div>
          </div>
          {/* Services & Requests Category */}
          <div className="mb-10">
            <FadeInUpOnScroll>
              <CategoryHeader icon={<Briefcase size={24} />} title="Services & Requests" count={4} />
            </FadeInUpOnScroll>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {allServices.advisory.map((service, index) => <FadeInUpOnScroll key={service.id} delay={index * 0.1}>
                  <ServiceCard service={service} sectionColor={sectionColors['Services & Requests']} onClick={() => handleServiceClick(service.path)} isComingSoon={!service.isActive} />
                </FadeInUpOnScroll>)}
            </div>
          </div>
          {/* Collaboration & Communities Category */}
          <div className="mb-10">
            <FadeInUpOnScroll>
              <CategoryHeader icon={<Users size={24} />} title="Collaboration & Communities" count={4} />
            </FadeInUpOnScroll>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {allServices.growth.map((service, index) => <FadeInUpOnScroll key={service.id} delay={index * 0.1}>
                  <ServiceCard service={service} sectionColor={sectionColors['Collaboration & Communities']} onClick={() => handleServiceClick(service.path)} isComingSoon={!service.isActive} />
                </FadeInUpOnScroll>)}
            </div>
          </div>
          {/* Resources & Libraries Category */}
          <div className="mb-10">
            <FadeInUpOnScroll>
              <CategoryHeader icon={<BookOpen size={24} />} title="Resources & Libraries" count={8} />
            </FadeInUpOnScroll>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {allServices.learning.map((service, index) => <FadeInUpOnScroll key={service.id} delay={index * 0.1}>
                  <ServiceCard service={service} sectionColor={sectionColors['Resources & Libraries']} onClick={() => handleServiceClick(service.path)} isComingSoon={!service.isActive} />
                </FadeInUpOnScroll>)}
            </div>
          </div>
        </div>
      </div>
      {/* AI Chatbot */}
      <AIChatbot />
      {/* Add keyframes for animations */}
      <style jsx>{`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes fade-in {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
        @keyframes scale-in {
          from {
            opacity: 0;
            transform: scale(0.95);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
        @keyframes pulse {
          0%,
          100% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.05);
          }
        }
        .animate-fade-in-up {
          animation: fade-in-up 0.5s ease-out forwards;
        }
        .animate-fade-in {
          animation: fade-in 0.3s ease-out forwards;
        }
        .animate-scale-in {
          animation: scale-in 0.3s ease-out forwards;
        }
        .animate-pulse {
          animation: pulse 2s infinite;
        }
        .hover\:scale-102:hover {
          transform: scale(1.02);
        }
      `}</style>
    </div>;
};
export default HomePage;
