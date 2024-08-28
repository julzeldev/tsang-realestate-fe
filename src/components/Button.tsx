import React from 'react';
import Link from 'next/link';

interface ButtonProps {
  type?: 'button' | 'submit' | 'reset';
  variant?: 'cta' | 'cancel' | 'outlined' | 'link' | 'icon';
  onClick?: () => void;
  disabled?: boolean;
  className?: string;
  children: React.ReactNode;
  icon?: React.ReactNode;
  href?: string;
}

const Button: React.FC<ButtonProps> = ({
  type = 'button',
  variant = 'cta',
  onClick,
  disabled = false,
  className = '',
  children,
  icon,
  href,
}) => {
  const baseStyles =
    'inline-flex items-center justify-center px-4 py-2 rounded-md text-sm font-medium focus:outline-none transition-colors duration-300';

  const variantStyles = {
    cta: 'bg-brand-primary text-white hover:bg-brand-secondary disabled:bg-gray-300',
    cancel: 'bg-gray-200 hover:bg-gray-300 disabled:bg-gray-300',
    outlined:
      'border border-brand-primary text-brand-primary hover:bg-brand-primary hover:text-white disabled:border-gray-300 disabled:text-gray-300',
    link: 'text-brand-primary hover:underline disabled:text-gray-300',
    icon: 'text-brand-primary hover:bg-gray-100 p-2 rounded-full disabled:text-gray-300',
  };

  const combinedStyles = `${baseStyles} ${variantStyles[variant]} ${className}`;

  if (href && variant === 'link') {
    return (
      <Link href={href}>
        <span className={combinedStyles}>
          {icon && <span className='mr-2'>{icon}</span>}
          {children}
        </span>
      </Link>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={combinedStyles}
    >
      {icon && <span className='mr-2'>{icon}</span>}
      {children}
    </button>
  );
};

export default Button;
