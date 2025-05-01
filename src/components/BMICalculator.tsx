
import React, { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from '@/components/ui/card';
import CTAButton from '@/components/CTAButton';
import { cn } from '@/lib/utils';

const BMICalculator = () => {
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');
  const [result, setResult] = useState<{bmi: number; category: string; message: string} | null>(null);

  const calculateBMI = () => {
    if (!height || !weight) return;
    
    const heightInMeters = parseFloat(height) / 100;
    const weightInKg = parseFloat(weight);
    
    if (isNaN(heightInMeters) || isNaN(weightInKg)) return;
    
    const bmi = weightInKg / (heightInMeters * heightInMeters);
    const roundedBMI = Math.round(bmi * 10) / 10;
    
    let category = '';
    let message = '';
    
    if (bmi < 18.5) {
      category = 'Abaixo do peso';
      message = 'Um programa de alimentação adequado pode ajudar você a ganhar peso de forma saudável.';
    } else if (bmi < 24.9) {
      category = 'Peso normal';
      message = 'Parabéns! Nosso método pode ajudar você a manter seu peso saudável.';
    } else if (bmi < 29.9) {
      category = 'Sobrepeso';
      message = 'Nosso método pode ajudar você a atingir seu peso ideal em poucos meses!';
    } else if (bmi < 34.9) {
      category = 'Obesidade Grau I';
      message = 'Com nosso método, você pode perder até 10kg em 3 meses de forma saudável.';
    } else if (bmi < 39.9) {
      category = 'Obesidade Grau II';
      message = 'Nosso método já ajudou pessoas a perderem 15-20kg de forma sustentável.';
    } else {
      category = 'Obesidade Grau III';
      message = 'Nosso método pode ser um grande aliado no início da sua jornada de emagrecimento.';
    }
    
    setResult({ bmi: roundedBMI, category, message });
  };
  
  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      calculateBMI();
    }
  };
  
  return (
    <Card className="w-full max-w-md mx-auto transform transition-all hover:shadow-lg animate-fade-in">
      <CardHeader className="text-center">
        <CardTitle className="text-xl text-brand-blue">Calculadora de IMC</CardTitle>
        <CardDescription>Descubra seu Índice de Massa Corporal</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2">
          <label htmlFor="height" className="text-sm font-medium">
            Altura (cm)
          </label>
          <Input
            id="height"
            type="number"
            placeholder="Ex: 175"
            value={height}
            onChange={(e) => setHeight(e.target.value)}
            onKeyPress={handleKeyPress}
            className="transition-all focus:ring-2 focus:ring-brand-green/50"
          />
        </div>
        <div className="space-y-2">
          <label htmlFor="weight" className="text-sm font-medium">
            Peso (kg)
          </label>
          <Input
            id="weight"
            type="number"
            placeholder="Ex: 70"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
            onKeyPress={handleKeyPress}
            className="transition-all focus:ring-2 focus:ring-brand-green/50"
          />
        </div>
        
        <CTAButton onClick={calculateBMI} className="w-full mt-4">
          Calcular IMC
        </CTAButton>
      </CardContent>
      
      {result && (
        <CardFooter className="flex flex-col">
          <div className="bg-brand-green/10 p-4 rounded-lg w-full text-center space-y-2">
            <h4 className="font-semibold text-lg">Seu IMC: {result.bmi}</h4>
            <p className="font-medium">{result.category}</p>
            <div className={cn(
              "h-3 w-full bg-gray-200 rounded-full overflow-hidden",
              "animate-[pulse_2s_cubic-bezier(0.4,0,0.6,1)_1]"
            )}>
              <div 
                className="h-full bg-brand-green" 
                style={{ 
                  width: `${Math.min(100, (result.bmi / 40) * 100)}%`,
                  transition: "width 1s ease-in-out"
                }} 
              />
            </div>
            <p className="text-sm mt-2">{result.message}</p>
          </div>
        </CardFooter>
      )}
    </Card>
  );
};

export default BMICalculator;
