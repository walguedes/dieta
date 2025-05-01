import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { cn } from '@/lib/utils';
interface TransformationCardProps {
  name: string;
  timeframe: string;
  weightLoss?: string;
  beforeImage: string;
  afterImage: string;
  testimonial: string;
  className?: string;
}
const TransformationCard = ({
  name,
  timeframe,
  weightLoss,
  beforeImage,
  afterImage,
  testimonial,
  className
}: TransformationCardProps) => {
  return <Card className={cn('overflow-hidden border-0 shadow-lg', className)}>
      <div className="relative">
        <div className="flex flex-col md:flex-row">
          {/* Before Image */}
          <div className="relative flex-1">
            <div className="aspect-square overflow-hidden">
              <img src={beforeImage} alt={`${name} antes`} className="w-full h-full object-cover" />
            </div>
            <div className="absolute top-2 left-2 bg-gray-800 text-white px-3 py-1 text-sm font-medium rounded-full">
              Antes
            </div>
          </div>
          
          {/* After Image */}
          <div className="relative flex-1">
            <div className="aspect-square overflow-hidden">
              <img src={afterImage} alt={`${name} depois`} className="w-full h-full object-cover" />
            </div>
            <div className="absolute top-2 left-2 bg-brand-green text-white px-3 py-1 text-sm font-medium rounded-full">
              Depois
            </div>
          </div>
        </div>
        
        {/* Transformation Details - Removed weightLoss reference */}
        
      </div>
      
      <CardContent className="p-6">
        <h3 className="font-semibold text-lg text-brand-blue">{name}</h3>
        <p className="text-gray-700 mt-2 italic">"{testimonial}"</p>
      </CardContent>
    </Card>;
};
export default TransformationCard;