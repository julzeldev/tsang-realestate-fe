'use client';
import React from 'react';
import Button from '@/components/Button';
import TextInput from '@/components/form/TextInput';
import Select from '@/components/form/Select';
import Switch from '@/components/form/Switch';

const ComponentTester = () => {
  const [value, setValue] = React.useState('');
  const [error, setError] = React.useState('');
  const [propertyTypeError, setPropertyTypeError] = React.useState('');
  const [propertyType, setPropertyType] = React.useState('');
  const [notifications, setNotifications] = React.useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  const handleNoticationsChange = () => {
    setNotifications(!notifications);
  };

  return (
    <div className='container mx-auto max-w-2xl p-4'>
      <div className='mb-1'>
        <TextInput
          type='text'
          value={value}
          onChange={handleChange}
          label='Full Name'
          placeholder='John Doe'
          error={error}
          id='full-name'
        />
        <div className='pt-4'>{value}</div>
      </div>
      <div className='mb-1'>
        <Select
          label='Choose a property type'
          value={propertyType}
          onChange={(e) => setPropertyType(e.target.value)}
          options={[
            { label: 'Apartment', value: 'apartment' },
            { label: 'House', value: 'house' },
            { label: 'Condo', value: 'condo' },
          ]}
          error={propertyTypeError}
          id='propertyType'
        />
        <div className='pt-4'>{propertyType}</div>
      </div>
      <div className='mb-1'>
        <Switch
          checked={notifications}
          onChange={handleNoticationsChange}
          label='Enable Notifications'
          id='notifications'
        />
      </div>
      <div className='mb-1'>
        <Button variant='cta' onClick={() => alert('CTA Button clicked!')}>
          Get Started
        </Button>

        <Button
          variant='cancel'
          onClick={() => alert('Cancel Button clicked!')}
        >
          Cancel
        </Button>

        <Button
          variant='outlined'
          onClick={() => alert('Outlined Button clicked!')}
        >
          Learn More
        </Button>

        <Button variant='link' href='/about'>
          About Us
        </Button>
      </div>
    </div>
  );
};

export default ComponentTester;
