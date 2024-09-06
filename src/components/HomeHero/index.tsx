import Link from 'next/link';
import Image from 'next/image';
import Button from '@/components/Button';
import { MAIN_IMAGE } from '@/constants';

const HomeHero: React.FC = () => {
  return (
    <section className='relative w-full h-full bg-gray-100'>
      {/* Background image */}
      <div className='absolute inset-0 z-0'>
        <Image
          src={MAIN_IMAGE}
          alt='Discover your next home'
          fill
          style={{ objectFit: 'cover' }}
          quality={80}
          className='w-full h-full'
        />
        <div className='absolute inset-0 bg-black opacity-50'></div>
      </div>

      {/* Content */}
      <div className='sm:-translate-y-0 relative z-10 flex flex-col justify-center items-center text-center h-full px-4 sm:px-6 lg:px-8'>
        <h1 className='text-white text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl'>
          Discover Your Next Home Effortlessly
        </h1>
        <p className='text-white mt-4 text-lg sm:text-xl'>
          Save on Every Step of Your Move
        </p>

        {/* CTA Button */}
        <div className='mt-6'>
          <Link href='/get-started'>
            <Button variant='cta' className='px-8 py-4 text-xl'>
              Get Started
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HomeHero;
