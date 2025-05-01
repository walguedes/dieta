
import React, { useState } from 'react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";

// Array com os caminhos das imagens de depoimentos
const testimonialImages = [
  "public/lovable-uploads/d799cd03-1153-4762-bd15-3ed843ad8a2d.png",
  "public/lovable-uploads/8a10796c-838d-4a3e-919a-59c8036217a4.png",
  "public/lovable-uploads/b86b9e01-f163-431c-91e2-5d8dd85c7f61.png",
  "public/lovable-uploads/fef8db3e-b2de-476c-a63f-8c04fa622794.png",
  "public/lovable-uploads/e01a6b6a-6ba2-4fb4-a0b4-9f1e45f49117.png",
  "public/lovable-uploads/79929cc2-2aa4-4c7f-9d5f-6628fa62d323.png",
  "public/lovable-uploads/e6f22aeb-fa47-4cf5-a298-296c89b41d29.png",
  "public/lovable-uploads/df0303ef-39f5-434c-ac08-c388f8ae62a7.png",
  "public/lovable-uploads/ba4ec244-30b5-4600-8d6a-405a4cf82271.png"
];

const TestimonialCarousel: React.FC = () => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  return (
    <div className="w-full max-w-4xl mx-auto px-4 py-10">
      <Carousel
        className="w-full"
        opts={{
          align: "center",
          loop: true,
        }}
      >
        <CarouselContent className="-ml-2 md:-ml-4">
          {testimonialImages.map((image, index) => (
            <CarouselItem 
              key={index} 
              className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3"
            >
              <div 
                className="relative overflow-hidden rounded-lg shadow-md transition-all duration-300 ease-in-out"
                style={{ 
                  height: "480px", 
                  transform: expandedIndex === index ? "scale(1.7)" : "scale(1)",
                  zIndex: expandedIndex === index ? 50 : 1,
                  transformOrigin: "center",
                  transition: "transform 0.3s ease"
                }}
                onMouseEnter={() => setExpandedIndex(index)}
                onMouseLeave={() => setExpandedIndex(null)}
              >
                <img 
                  src={image} 
                  alt={`Depoimento ${index + 1}`}
                  className="w-full h-full object-cover object-center"
                />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="hidden md:flex" />
        <CarouselNext className="hidden md:flex" />
      </Carousel>
      <div className="mt-4 text-center text-sm text-gray-500">
        <p>Passe o mouse sobre as imagens para ampliar e ler melhor os depoimentos</p>
      </div>
    </div>
  );
};

export default TestimonialCarousel;
