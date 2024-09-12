'use client';
import Link from 'next/link';
import { motion } from 'framer-motion';
import Button from '@/components/Button';
import { growInVariants } from '@/util/animations';

const Content = () => {
  return (
    <div className='sm:-translate-y-0 relative flex flex-col justify-center items-center text-center h-full px-4 sm:px-6 lg:px-8'>
      <motion.div
        variants={growInVariants}
        initial='hidden'
        animate='visible'
        custom={0}
      >
        <h1 className='text-white text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl'>
          Discover Your Next Home Effortlessly
        </h1>
        <p className='text-white mt-4 text-lg sm:text-xl'>
          Save on Every Step of Your Move
        </p>

        {/* CTA Button */}
        <div className='mt-6'>
          <Link href='#home-getStarted'>
            <Button variant='cta' className='px-8 py-4 text-xl'>
              Get Started
            </Button>
          </Link>
        </div>
      </motion.div>
    </div>
  );
};

export default Content;
