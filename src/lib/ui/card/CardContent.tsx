import { cn } from '../../utils/cn';

interface CardContentProps {
  children: React.ReactNode;
  className?: string;
}

export default function CardContent({ children, className }: CardContentProps) {
  return <div className={cn('', className)}>{children}</div>;
}
