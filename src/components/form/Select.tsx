import React from 'react';

interface SelectOption {
  label: string;
  value: string | number;
}

interface SelectProps {
  value: string | number;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  options: SelectOption[];
  label?: string;
  disabled?: boolean;
  error?: string | boolean;
  className?: string;
  id?: string;
}

const Select: React.FC<SelectProps> = ({
  value,
  onChange,
  options,
  label,
  disabled = false,
  error = false,
  className = '',
  id,
}) => {
  return (
    <div className={`w-full ${className}`}>
      {label && (
        <label
          htmlFor={id}
          className='block text-brand-text-primary mb-2 pl-1 font-medium uppercase text-sm'
        >
          {label}
        </label>
      )}
      <div className='relative'>
        <select
          value={value}
          onChange={onChange}
          disabled={disabled}
          id={id}
          className={`w-full bg-white px-4 py-2 border rounded-lg appearance-none focus:outline-none focus:ring-1 focus:ring-brand-primary
          ${disabled ? 'bg-gray-100 cursor-not-allowed' : ''}
          ${error ? 'border-red-500' : 'border-brand-border'}`}
        >
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
        <div className='absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none'>
          <svg
            className='w-4 h-4 text-gray-500'
            fill='none'
            stroke='currentColor'
            viewBox='0 0 24 24'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth='2'
              d='M19 9l-7 7-7-7'
            />
          </svg>
        </div>
      </div>
      {error && typeof error === 'string' && (
        <p className='text-red-500 text-xs mt-1'>{error}</p>
      )}
    </div>
  );
};

export default Select;
