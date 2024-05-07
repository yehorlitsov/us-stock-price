import React from 'react';
import { cn } from '../../utils/cn';
import CardHeader from './CardHeader';
import CardContent from './CardContent';

interface CardProps {
  children: React.ReactNode;
  className?: string;
}

const Card = ({ children, className }: CardProps) => {
  return (
    <div className={cn('rounded p-4 bg-white border border-border', className)}>
      {children}
    </div>
  );
};

Card.CardHeader = CardHeader;
Card.CardContent = CardContent;

export default Card;
