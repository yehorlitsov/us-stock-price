import { Link } from 'react-router-dom';
import { cn } from '../utils/cn';

const variants = {
  primary: 'bg-primary hover:bg-primary-hover text-white',
  secondary: 'bg-secondary hover:bg-secondary-hover text-white',
  danger: 'bg-red-500 hover:bg-red-700 text-white',
  success: 'bg-green-500 hover:bg-green-700 text-white',
};

const sizes = {
  small: 'px-2 py-1 text-sm',
  medium: 'px-4 py-2 text-base',
  large: 'px-6 py-3 text-lg',
};

export interface LinkButtonPops {
  to: string;
  label: string;
  variant?: 'primary' | 'secondary' | 'danger' | 'success';
  size?: 'small' | 'medium' | 'large';
  className?: string;
}

export default function LinkButton({
  to,
  label,
  variant = 'primary',
  size = 'medium',
  className,
  ...props
}: LinkButtonPops) {
  const variantClass = variants[variant];
  const sizeClass = sizes[size];
  const classes = cn('rounded transition', variantClass, sizeClass, className);

  return (
    <Link to={to} className={classes} {...props}>
      {label}
    </Link>
  );
}
