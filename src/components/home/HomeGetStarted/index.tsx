'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { fadeInVariants, slideFromRightVariants } from '@/util/animations';

const HomeGetStarted: React.FC = () => {
  return (
    <div className='bg-white p-8 sm:p-16 isolate overflow-hidden' id='home-getStarted'>
      <div className='relative isolate -z-10'>
        <div>
          <div className='mx-auto max-w-7xl px-6 lg:px-8 py-16'>
            <div className='mx-auto max-w-2xl gap-x-14 lg:mx-0 lg:flex lg:max-w-none lg:items-center'>
              <div className='w-full max-w-xl lg:shrink-0 xl:max-w-2xl'>
                <motion.h1
                  className='text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl'
                  initial='hidden'
                  whileInView='visible'
                  viewport={{ once: true }}
                  variants={fadeInVariants}
                  custom={0}
                >
                  GET STARTED PLACEHOLDER
                </motion.h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeGetStarted;
