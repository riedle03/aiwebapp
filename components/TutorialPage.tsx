import React, { useState, ElementType } from 'react';
import { TutorialSectionData, TutorialStep } from '../types';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { oneDark } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { icons, IconName } from './icons';

interface TutorialPageProps {
  section: TutorialSectionData;
  icon?: ElementType;
}

const CodeBlock: React.FC<{ code: string; language: string }> = ({ code, language }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(code).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  return (
    <div className="my-4 rounded-lg overflow-hidden bg-gray-800 shadow-md">
      <div className="px-4 py-2 bg-gray-700 text-xs text-gray-300 font-mono flex justify-between items-center">
        <span>{language}</span>
        <button
          onClick={handleCopy}
          className={`text-gray-300 hover:text-white text-xs font-sans px-2 py-1 rounded transition-colors ${
            copied
              ? 'bg-green-600 text-white cursor-default'
              : 'bg-gray-600 hover:bg-gray-500'
          }`}
          disabled={copied}
          aria-label={copied ? "Copied to clipboard" : "Copy code to clipboard"}
        >
          {copied ? 'Copied!' : 'Copy'}
        </button>
      </div>
      <SyntaxHighlighter language={language} style={oneDark} customStyle={{ margin: 0, fontSize: '0.9rem' }}>
        {code}
      </SyntaxHighlighter>
    </div>
  );
};

const ParsedText: React.FC<{ text: string }> = ({ text }) => {
  // Regex to match markdown links, bold text, or custom icon tags
  const combinedRegex = /\[([^\]]+)\]\(([^)]+)\)|\*\*([^*]+)\*\*|##ICON:(\w+)##/g;
  const elements: React.ReactNode[] = [];
  let lastIndex = 0;
  let match;

  while ((match = combinedRegex.exec(text)) !== null) {
    // Add the text before the match
    if (match.index > lastIndex) {
      elements.push(text.substring(lastIndex, match.index));
    }

    const linkText = match[1];
    const linkUrl = match[2];
    const boldText = match[3];
    const iconName = match[4] as IconName;

    if (linkText && linkUrl) {
      // It's a link
      elements.push(
        <a
          key={lastIndex}
          href={linkUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 hover:text-blue-800 hover:underline font-medium"
        >
          {linkText}
        </a>
      );
    } else if (boldText) {
      // It's bold text
      elements.push(
        <strong key={lastIndex} className="font-semibold text-gray-700">
          {boldText}
        </strong>
      );
    } else if (iconName && icons[iconName]) {
      // It's an icon tag
      const IconComponent = icons[iconName];
      elements.push(<IconComponent key={lastIndex} className="inline-block w-5 h-5 mr-2 align-bottom" />);
    }
    
    lastIndex = combinedRegex.lastIndex;
  }
  
  // Add any remaining text after the last match
  if (lastIndex < text.length) {
    elements.push(text.substring(lastIndex));
  }

  return (
    <div className="text-gray-600 leading-relaxed mb-4 whitespace-pre-line">
      {elements.map((el, i) => <React.Fragment key={i}>{el}</React.Fragment>)}
    </div>
  );
};

const ProjectCard: React.FC<{ step: TutorialStep; linkText?: string }> = ({ step, linkText = '프로젝트 보기' }) => {
    const urlMatch = step.text.match(/\(([^)]+)\)/);
    const url = urlMatch ? urlMatch[1] : '#';

    return (
        <a 
            href={url} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="group flex flex-col bg-white rounded-xl overflow-hidden shadow-md border border-gray-200 transition-all duration-300 ease-in-out hover:shadow-xl hover:-translate-y-2"
            aria-label={`'${step.title}' ${linkText}`}
        >
            <div className="aspect-video overflow-hidden flex items-center justify-center bg-gray-100">
                <img 
                    src={step.image} 
                    alt={`${step.title} 미리보기`} 
                    className="max-w-full max-h-full object-contain transition-transform duration-300 group-hover:scale-105" 
                />
            </div>
            <div className="p-4 sm:p-5 flex flex-col flex-grow">
                <h3 className="text-base sm:text-lg font-bold text-gray-800" title={step.title}>{step.title}</h3>
                <p className="mt-auto pt-2 text-sm font-medium text-blue-600 flex items-center">
                    {linkText}
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                </p>
            </div>
        </a>
    );
};

const FeaturedProjectCard: React.FC<{ step: TutorialStep; linkText?: string }> = ({ step, linkText = '자세히 보기' }) => {
    const urlMatch = step.text.match(/\(([^)]+)\)/);
    const url = urlMatch ? urlMatch[1] : '#';

    return (
        <a 
            href={url} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="group flex flex-col sm:flex-row bg-white rounded-xl overflow-hidden shadow-md border border-gray-200 transition-all duration-300 ease-in-out hover:shadow-xl hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            aria-label={`'${step.title}' ${linkText}`}
        >
            <div className="sm:w-1/3 flex-shrink-0 aspect-video sm:aspect-auto flex items-center justify-center bg-gray-100">
                <img 
                    src={step.image} 
                    alt={`${step.title} 미리보기`} 
                    className="max-w-full max-h-full object-contain transition-transform duration-300 group-hover:scale-105"
                />
            </div>
            <div className="p-5 sm:p-6 flex flex-col flex-grow items-start justify-center">
                <h3 className="text-xl font-bold text-gray-800">{step.title}</h3>
                <p className="mt-4 text-base font-medium text-blue-600 flex items-center">
                    {linkText}
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1.5 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                    </svg>
                </p>
            </div>
        </a>
    );
};

const StepCard: React.FC<{ step: TutorialStep }> = ({ step }) => (
    <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 transition-shadow hover:shadow-md">
        <h3 className="text-xl font-bold text-gray-800 mb-3">{step.title}</h3>
        <ParsedText text={step.text} />
        {step.code && step.language && (
            <CodeBlock code={step.code} language={step.language} />
        )}
        {step.image && (
            <div className="mt-4 rounded-lg overflow-hidden border border-gray-200 flex justify-center items-center bg-gray-50">
                <img src={step.image} alt={step.title} className="max-w-full h-auto object-contain" />
            </div>
        )}
    </div>
);


const TutorialPage: React.FC<TutorialPageProps> = ({ section, icon: Icon }) => {
  // Gallery layout for 'results' page
  if (section.id === 'results') {
      const description = 'Github, Vite, Netlify로 만들어진 다양한 AI 웹 애플리케이션 프로젝트들입니다. 각 카드를 클릭하여 실제 작동하는 결과물을 확인해보세요.';
      const linkText = '프로젝트 보기';

      return (
          <div className="max-w-7xl mx-auto">
              <header className="mb-10 pb-4 border-b border-gray-300">
                  <h2 className="text-4xl font-extrabold text-gray-900 tracking-tight flex items-center">
                      {Icon && <Icon className="w-9 h-9 mr-4 text-blue-700 flex-shrink-0" />}
                      <span>{section.title}</span>
                  </h2>
                  <p className="mt-4 text-xl text-gray-600">
                      {description}
                  </p>
              </header>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                  {section.steps.map((item, index) => (
                      <ProjectCard key={index} step={item} linkText={linkText} />
                  ))}
              </div>
          </div>
      );
  }

  // Special list layout for 'author-info' page
  if (section.id === 'author-info') {
      const description = '이 가이드를 만든 이대형(AI CreatorZ)의 저서 및 온라인 강의입니다. 더 깊이 있는 학습을 원하시면 각 항목을 확인해보세요.';
      const linkText = '자세히 보기';

      return (
          <div className="max-w-5xl mx-auto">
              <header className="mb-10 pb-4 border-b border-gray-300">
                  <h2 className="text-4xl font-extrabold text-gray-900 tracking-tight flex items-center">
                      {Icon && <Icon className="w-9 h-9 mr-4 text-blue-700 flex-shrink-0" />}
                      <span>{section.title}</span>
                  </h2>
                  <p className="mt-4 text-xl text-gray-600">
                      {description}
                  </p>
              </header>
              <div className="space-y-8">
                  {section.steps.map((item, index) => (
                      <FeaturedProjectCard key={index} step={item} linkText={linkText} />
                  ))}
              </div>
          </div>
      );
  }

  // Default layout for all other pages
  return (
    <div className="max-w-4xl mx-auto">
      <header className="mb-10 pb-4 border-b border-gray-300">
        <h2 className="text-4xl font-extrabold text-gray-900 tracking-tight flex items-center">
            {Icon && <Icon className="w-9 h-9 mr-4 text-blue-700 flex-shrink-0" />}
            <span>{section.title}</span>
        </h2>
      </header>
      <div className="space-y-8">
        {section.steps.map((step, index) => (
          <StepCard key={index} step={step} />
        ))}
      </div>
    </div>
  );
};

export default TutorialPage;