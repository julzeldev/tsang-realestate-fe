import React from 'react';

interface TextInputProps {
  type: 'text' | 'password' | 'email' | 'number' | 'date';
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  label?: string;
  placeholder?: string;
  disabled?: boolean;
  error?: string | boolean;
  className?: string;
  id?: string;
}

const TextInput: React.FC<TextInputProps> = ({
  type,
  value,
  onChange,
  label,
  placeholder,
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
      <input
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        disabled={disabled}
        id={id}
        className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-1 focus:ring-brand-primary
        ${disabled ? 'bg-gray-100 cursor-not-allowed' : ''}
        ${error ? 'border-red-500' : 'border-brand-border'}`}
      />
      {error && typeof error === 'string' && (
        <p className='text-red-500 text-xs mt-1'>{error}</p>
      )}
    </div>
  );
};

export default TextInput;
