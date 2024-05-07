import React from 'react';
import { cn } from '../utils/cn';

interface CardProps {
  children: React.ReactNode;
  className?: string;
}

export default function Card({ children, className }: CardProps) {
  return (
    <div
      className={cn(
        'rounded p-4 bg-background-card border border-border',
        className
      )}
    >
      {children}
    </div>
  );
}
