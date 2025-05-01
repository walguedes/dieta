import React from 'react';
import { cn } from '@/lib/utils';
interface SectionContainerProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
  background?: 'white' | 'light' | 'gradient';
}
const SectionContainer = ({
  children,
  className,
  id,
  background = 'white'
}: SectionContainerProps) => {
  return <section id={id} className={cn('py-16', background === 'light' && 'bg-brand-gray-light', background === 'gradient' && 'bg-gradient-to-b from-white to-brand-gray-light', className)}>
      <div className="container md:px-6 px-[64px]">
        {children}
      </div>
    </section>;
};
export default SectionContainer;