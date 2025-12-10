import React, { useState, useRef, useEffect } from 'react';
import { FileText, Plus, Trash2, Download, Wand2, Save, Eye, Briefcase, GraduationCap, User, Wrench, Loader2, Award, Mail, Phone, Linkedin, Globe, ChevronDown } from 'lucide-react';
import { GoogleGenAI } from "@google/genai";
import SEO from '../components/SEO';
import AIAssistant from '../components/AIAssistant';
import html2canvas from 'html2canvas';
import { jsPDF } from 'jspdf';

// Helper to safely get API Key
const getApiKey = () => {
  try {
    return (typeof process !== 'undefined' && process.env) ? process.env.API_KEY : undefined;
  } catch (e) {
    return undefined;
  }
};

// Helper to get initials
const getInitials = (name: string) => {
    if (!name.trim()) return 'NN';
    const parts = name.trim().split(' ').filter(p => p);
    if (parts.length > 1) {
        return `${parts[0][0]}${parts[parts.length - 1][0]}`.toUpperCase();
    }
    if (parts.length === 1 && parts[0].length > 0) {
        return parts[0].substring(0,2).toUpperCase();
    }
    return 'NN';
};

// --- TEMPLATE DATA ---
const templates = [
  { id: 'onyx', name: 'Onyx' },
  { id: 'sapphire', name: 'Sapphire' },
  { id: 'emerald', name: 'Emerald' },
];

const TemplateComponent = ({ templateId, data }: { templateId: string, data: any }) => {
    switch (templateId) {
        case 'sapphire': return <SapphireTemplate data={data} />;
        case 'emerald': return <EmeraldTemplate data={data} />;
        case 'onyx':
        default:
            return <OnyxTemplate data={data} />;
    }
};


// --- TEMPLATE COMPONENTS ---

const OnyxTemplate = ({ data }: { data: any }) => (
  <div className="bg-white text-slate-800 p-8 font-serif text-sm">
    <div className="text-center border-b-2 border-slate-800 pb-4 mb-6">
      <h1 className="text-3xl font-bold tracking-wider uppercase">{data.fullName || 'YOUR NAME'}</h1>
      <div className="flex justify-center items-center gap-x-4 gap-y-1 text-xs mt-2 flex-wrap">
        {data.email && <span>{data.email}</span>}
        {data.phone && <span className="hidden sm:inline">• {data.phone}</span>}
        {data.linkedin && <a href={data.linkedin} target="_blank" rel="noreferrer" className="text-blue-600 hover:underline">• LinkedIn</a>}
        {data.website && <a href={data.website} target="_blank" rel="noreferrer" className="text-blue-600 hover:underline">• Portfolio</a>}
      </div>
    </div>
    {data.summary && (
      <div className="mb-6">
        <h2 className="text-xs font-bold uppercase tracking-widest border-b border-slate-300 pb-1 mb-2">Summary</h2>
        <p className="text-sm leading-relaxed">{data.summary}</p>
      </div>
    )}
    {data.experience.length > 0 && data.experience[0].role && (
      <div className="mb-6">
        <h2 className="text-xs font-bold uppercase tracking-widest border-b border-slate-300 pb-1 mb-2">Experience</h2>
        {data.experience.map((exp: any) => exp.role && (
          <div key={exp.id} className="mb-4">
            <div className="flex justify-between items-baseline">
              <h3 className="font-bold text-base">{exp.role}</h3>
              <span className="text-xs font-medium text-slate-600 shrink-0 ml-4">{exp.duration}</span>
            </div>
            <p className="text-sm font-semibold text-slate-700">{exp.company}</p>
            <p className="text-sm whitespace-pre-wrap mt-1 text-slate-600">{exp.description}</p>
          </div>
        ))}
      </div>
    )}
     {data.skills && (
      <div className="mb-6">
        <h2 className="text-xs font-bold uppercase tracking-widest border-b border-slate-300 pb-1 mb-2">Skills</h2>
        <p className="text-sm leading-relaxed">{data.skills}</p>
      </div>
    )}
    {data.education.length > 0 && data.education[0].degree && (
      <div>
        <h2 className="text-xs font-bold uppercase tracking-widest border-b border-slate-300 pb-1 mb-2">Education</h2>
        {data.education.map((edu: any) => edu.degree && (
          <div key={edu.id} className="mb-4">
            <div className="flex justify-between items-baseline">
              <h3 className="font-bold text-base">{edu.degree}</h3>
              <span className="text-xs font-medium text-slate-600 shrink-0 ml-4">{edu.year}</span>
            </div>
            <p className="text-sm text-slate-700">{edu.college}</p>
          </div>
        ))}
      </div>
    )}
  </div>
);

const SapphireTemplate = ({ data }: { data: any }) => (
    <div className="bg-white text-slate-800 p-8 font-sans text-sm flex gap-6">
        <div className="w-[35%] border-r pr-6 border-slate-200">
            <h1 className="text-2xl font-bold text-blue-800 mb-1 uppercase">{data.fullName || 'Your Name'}</h1>
            <div className="space-y-1 text-xs text-slate-600">
                {data.email && <p className="flex items-center gap-2"><Mail size={12}/> {data.email}</p>}
                {data.phone && <p className="flex items-center gap-2"><Phone size={12}/> {data.phone}</p>}
                {data.linkedin && <a href={data.linkedin} target="_blank" rel="noreferrer" className="flex items-center gap-2 text-blue-600 hover:underline"><Linkedin size={12}/> LinkedIn</a>}
                {data.website && <a href={data.website} target="_blank" rel="noreferrer" className="flex items-center gap-2 text-blue-600 hover:underline"><Globe size={12}/> Portfolio</a>}
            </div>
            {data.skills && (
            <div className="mt-6">
                <h2 className="font-bold text-blue-800 text-xs uppercase tracking-wider mb-2 border-b-2 border-blue-200 pb-1">Skills</h2>
                <div className="flex flex-wrap gap-1 text-[10px] mt-2">
                    {data.skills.split(',').map((skill: string, i: number) => skill.trim() && <span key={i} className="bg-blue-100 text-blue-800 px-2 py-0.5 rounded">{skill.trim()}</span>)}
                </div>
            </div>
            )}
            {data.education.length > 0 && data.education[0].degree && (
                <div className="mt-6">
                    <h2 className="font-bold text-blue-800 text-xs uppercase tracking-wider mb-2 border-b-2 border-blue-200 pb-1">Education</h2>
                    {data.education.map((edu: any) => edu.degree && (
                        <div key={edu.id} className="mb-3">
                                <h3 className="font-bold text-sm">{edu.degree}</h3>
                                <p className="text-xs text-slate-700">{edu.college}</p>
                                <p className="text-xs text-slate-500">{edu.year}</p>
                        </div>
                    ))}
                </div>
            )}
        </div>
        <div className="w-[65%]">
            {data.summary && (
            <div className="mb-6">
                <h2 className="text-sm font-bold text-blue-800 uppercase tracking-widest mb-2 border-b-2 border-blue-200 pb-1">Summary</h2>
                <p className="text-sm leading-relaxed">{data.summary}</p>
            </div>
            )}
            {data.experience.length > 0 && data.experience[0].role && (
                <div>
                    <h2 className="text-sm font-bold text-blue-800 uppercase tracking-widest mb-2 border-b-2 border-blue-200 pb-1">Experience</h2>
                    {data.experience.map((exp: any) => exp.role && (
                        <div key={exp.id} className="mb-4">
                            <div className="flex justify-between items-baseline">
                                <h3 className="font-bold text-base text-slate-900">{exp.role}</h3>
                                <span className="text-xs font-medium text-slate-500 shrink-0 ml-4">{exp.duration}</span>
                            </div>
                            <p className="text-sm font-semibold text-blue-700">{exp.company}</p>
                            <p className="text-sm whitespace-pre-wrap mt-1 text-slate-600">{exp.description}</p>
                        </div>
                    ))}
                </div>
            )}
        </div>
    </div>
);

const EmeraldTemplate = ({ data }: { data: any }) => (
    <div className="bg-white text-slate-800 p-8 font-sans text-sm">
        <div className="flex items-center gap-6 mb-6 pb-4 border-b-2 border-emerald-500">
            <div className="w-20 h-20 bg-emerald-500 text-white rounded-full flex items-center justify-center text-3xl font-bold shadow-md shrink-0">
                {getInitials(data.fullName)}
            </div>
            <div>
                <h1 className="text-3xl font-bold tracking-tight uppercase">{data.fullName || 'Your Name'}</h1>
                <div className="flex flex-wrap gap-x-4 gap-y-1 text-xs mt-1 text-slate-600">
                    {data.email && <span className="flex items-center gap-1"><Mail size={12}/>{data.email}</span>}
                    {data.phone && <span className="flex items-center gap-1"><Phone size={12}/>{data.phone}</span>}
                    {data.linkedin && <a href={data.linkedin} className="flex items-center gap-1 text-blue-600 hover:underline"><Linkedin size={12}/>LinkedIn</a>}
                </div>
            </div>
        </div>
         {data.summary && (
          <div className="mb-6">
            <h2 className="text-xs font-bold uppercase tracking-wider text-emerald-700 mb-2">Summary</h2>
            <p className="text-sm leading-relaxed border-l-2 border-emerald-200 pl-4">{data.summary}</p>
          </div>
        )}
        {data.experience.length > 0 && data.experience[0].role && (
          <div className="mb-6">
            <h2 className="text-xs font-bold uppercase tracking-wider text-emerald-700 mb-3">Experience</h2>
            {data.experience.map((exp: any) => exp.role && (
              <div key={exp.id} className="mb-4">
                <div className="flex justify-between items-baseline">
                  <h3 className="font-bold text-base">{exp.role} at {exp.company}</h3>
                  <span className="text-xs font-medium text-slate-500 shrink-0 ml-4">{exp.duration}</span>
                </div>
                <p className="text-sm whitespace-pre-wrap mt-1 text-slate-600">{exp.description}</p>
              </div>
            ))}
          </div>
        )}
        <div className="grid grid-cols-2 gap-6">
             {data.education.length > 0 && data.education[0].degree && (
                <div>
                    <h2 className="text-xs font-bold uppercase tracking-wider text-emerald-700 mb-3">Education</h2>
                    {data.education.map((edu: any) => edu.degree && (
                    <div key={edu.id} className="mb-3">
                        <h3 className="font-bold text-sm">{edu.degree} - {edu.year}</h3>
                        <p className="text-sm text-slate-700">{edu.college}</p>
                    </div>
                    ))}
                </div>
            )}
            {data.skills && (
                <div>
                    <h2 className="text-xs font-bold uppercase tracking-wider text-emerald-700 mb-3">Skills</h2>
                    <p className="text-sm leading-relaxed">{data.skills}</p>
                </div>
            )}
        </div>
    </div>
);

const ResumeBuilder: React.FC = () => {
    // Component state and logic would go here
    return (
        <div className="pt-24 pb-20 bg-slate-100 min-h-screen">
             <SEO title="AI Resume Builder" description="Build a professional resume with AI assistance and beautiful templates." />
             <AIAssistant pageContext="AI Resume Builder" title="Resume AI" suggestions={["Suggest action verbs", "Improve my summary", "Check for ATS keywords"]} />
             <div className="container mx-auto px-4">
                 <h1 className="text-4xl font-bold text-center mb-12">Resume Builder</h1>
                 <p className="text-center text-slate-600 -mt-8 mb-12">This is a placeholder for the Resume Builder feature.</p>
                 <div className="bg-white p-8 rounded-lg shadow-md">
                     <OnyxTemplate data={{
                         fullName: "John Doe",
                         email: "john.doe@example.com",
                         phone: "123-456-7890",
                         linkedin: "#",
                         website: "#",
                         summary: "A passionate developer with experience in building web applications.",
                         experience: [{id: 1, role: 'Software Engineer', company: 'Tech Corp', duration: '2020-Present', description: 'Developed features for a major web application.'}],
                         education: [{id: 1, degree: 'B.Sc. Computer Science', college: 'State University', year: '2020'}],
                         skills: "JavaScript, React, Node.js, Python"
                     }} />
                 </div>
             </div>
        </div>
    );
};

export default ResumeBuilder;
