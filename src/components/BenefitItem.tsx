
import React from 'react';
import { cn } from '@/lib/utils';

interface BenefitItemProps {
  icon: string;
  title: string;
  description: string;
  className?: string;
}

const BenefitItem = ({ 
  icon, 
  title, 
  description, 
  className 
}: BenefitItemProps) => {
  return (
    <div className={cn(
      'flex flex-col sm:flex-row items-start gap-4',
      className
    )}>
      <div className="text-2xl sm:text-3xl flex-shrink-0">
        {icon}
      </div>
      <div>
        <h3 className="font-semibold text-lg text-brand-blue mb-1">{title}</h3>
        <p className="text-gray-700">{description}</p>
      </div>
    </div>
  );
};

export default BenefitItem;
