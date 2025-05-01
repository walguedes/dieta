
import React, { useState } from 'react';
import { cn } from '@/lib/utils';

interface FAQItemProps {
  question: string;
  answer: string;
  className?: string;
}

const FAQItem = ({ 
  question, 
  answer, 
  className 
}: FAQItemProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={cn(
      'border-b border-gray-200 last:border-0',
      className
    )}>
      <button
        className="flex justify-between items-center w-full py-4 text-left font-medium text-brand-blue hover:text-brand-green transition-colors"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span>{question}</span>
        <svg
          className={`w-5 h-5 transform transition-transform ${isOpen ? 'rotate-180' : ''}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ${
          isOpen ? 'max-h-96 pb-4' : 'max-h-0'
        }`}
      >
        <p className="text-gray-700">{answer}</p>
      </div>
    </div>
  );
};

export default FAQItem;
