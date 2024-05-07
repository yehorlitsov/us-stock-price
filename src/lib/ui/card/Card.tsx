import React from 'react';
import { cn } from '../../utils/cn';
import CardHeader from './CardHeader';

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

export default Card;
