import React from 'react';

interface SwitchProps {
  checked: boolean;
  onChange?: () => void;
  label?: string;
  disabled?: boolean;
  className?: string;
  id?: string;
}

const Switch: React.FC<SwitchProps> = ({
  checked,
  onChange,
  label,
  disabled = false,
  className = '',
  id,
}) => {
  return (
    <div className={`flex items-center ${className}`}>
      {label && (
        <label
          htmlFor={id}
          className='block text-brand-text-primary pl-1 font-medium uppercase text-sm mr-3'
        >
          {label}
        </label>
      )}
      <div className='relative inline-flex items-center' onClick={onChange}>
        <input
          type='checkbox'
          checked={checked}
          onChange={onChange}
          disabled={disabled}
          id={id}
          className={`sr-only peer`}
        />
        <div
          className={`w-10 h-6 bg-gray-200 rounded-full peer-focus:outline-none
          peer-checked:bg-brand-primary peer-disabled:bg-gray-100 peer-disabled:cursor-not-allowed`}
        ></div>
        <div
          className={`absolute left-1 top-1 w-4 h-4 bg-white rounded-full transition-transform transform
          ${
            checked ? 'translate-x-4' : ''
          } peer-checked:translate-x-4 peer-disabled:translate-x-0`}
        ></div>
      </div>
    </div>
  );
};

export default Switch;
