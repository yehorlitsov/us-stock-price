import { cn } from '../../utils/cn';

interface CardHeaderProps {
  children: React.ReactNode;
  className?: string;
}

export default function CardHeader({ children, className }: CardHeaderProps) {
  return <div className={cn('', className)}>{children}</div>;
}
