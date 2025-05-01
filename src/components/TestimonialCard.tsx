
import React from 'react';
import { cn } from '@/lib/utils';

interface TestimonialCardProps {
  quote: string;
  name: string;
  image: string;
  result?: string;
  className?: string;
}

const TestimonialCard = ({ 
  quote, 
  name, 
  image, 
  result,
  className 
}: TestimonialCardProps) => {
  return (
    <div className={cn(
      'bg-white p-6 rounded-lg shadow-md border border-gray-100',
      className
    )}>
      <div className="flex items-center mb-4">
        <div className="h-14 w-14 rounded-full overflow-hidden mr-4 border-2 border-brand-green">
          <img 
            src={image} 
            alt={`Foto de ${name}`}
            className="h-full w-full object-cover"
          />
        </div>
        <div>
          <h4 className="font-semibold text-brand-blue">{name}</h4>
          {result && <p className="text-sm text-brand-green">{result}</p>}
        </div>
      </div>
      <p className="text-gray-700 italic">"{quote}"</p>
    </div>
  );
};

export default TestimonialCard;
