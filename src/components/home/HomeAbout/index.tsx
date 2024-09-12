'use client';
import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Background from './Background';
import { fadeInVariants, slideFromRightVariants } from '@/util/animations';

const HomeAbout: React.FC = () => {
  return (
    <div className='bg-white p-8 sm:p-16 isolate overflow-hidden' id='home-about'>
      <div className='relative isolate -z-10'>
        <Background />
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
                  How Are Your Locating Services Free? <br /> IS THIS A SCAM?!
                </motion.h1>
                <motion.p
                  className='relative mt-6 text-lg leading-8 text-gray-600 sm:max-w-md lg:max-w-lg'
                  initial='hidden'
                  whileInView='visible'
                  viewport={{ once: true }}
                  variants={fadeInVariants}
                  custom={1}
                >
                  Not at all! Our service is paid for by the property&apos;s
                  marketing budget, so you get the same great deal without any
                  extra cost. All we ask is that you include your agent&apos;s
                  name in the referral section of the application and let the
                  property know you&apos;re working with us. It&apos;s that
                  simple!
                </motion.p>
              </div>
              <motion.div
                className='mt-14 flex justify-center md:justify-end gap-8 sm:-mt-44 sm:justify-start sm:pl-20 lg:mt-0 lg:pl-0'
                initial='hidden'
                whileInView='visible'
                viewport={{ once: true }}
                variants={slideFromRightVariants}
                custom={2}
              >
                <div className='ml-auto hidden sm:flex md:-translate-x-16 w-44 flex-none space-y-8 pt-32 sm:ml-0 sm:pt-80 lg:order-last lg:pt-36 xl:order-none xl:pt-80'>
                  <div className='relative'>
                    <Image
                      src='https://images.unsplash.com/photo-1618220179428-22790b461013?q=80&w=528&auto=format&fit=crop&ixlib=rb-4.0.3'
                      alt='Example image 1'
                      width={528}
                      height={792} // Adjust height based on aspect ratio
                      className='aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg'
                    />
                    <div className='pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10' />
                  </div>
                </div>
                <div className='mr-auto  md:-translate-x-16 w-44 flex-none space-y-8 sm:mr-0 sm:pt-52 lg:pt-36'>
                  <div className='relative'>
                    <Image
                      src='https://images.unsplash.com/photo-1502005229762-cf1b2da7c5d6?q=80&w=528&auto=format&fit=crop&ixlib=rb-4.0.3'
                      alt='Example image 2'
                      width={528}
                      height={792} // Adjust height based on aspect ratio
                      className='aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg'
                    />
                    <div className='pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10' />
                  </div>
                  <div className='relative'>
                    <Image
                      src='https://images.unsplash.com/photo-1560440021-33f9b867899d?q=80&w=528&auto=format&fit=crop&ixlib=rb-4.0.3'
                      alt='Example image 3'
                      width={528}
                      height={792} // Adjust height based on aspect ratio
                      className='aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg'
                    />
                    <div className='pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10' />
                  </div>
                </div>
                <div className='md:-translate-x-16 w-44 flex-none space-y-8 pt-32 sm:pt-0'>
                  <div className='relative'>
                    <Image
                      src='https://images.unsplash.com/photo-1502005097973-6a7082348e28?q=80&w=528&auto=format&fit=crop&ixlib=rb-4.0.3'
                      alt='Example image 4'
                      width={528}
                      height={792} // Adjust height based on aspect ratio
                      className='aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg'
                    />
                    <div className='pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10' />
                  </div>
                  <div className='relative'>
                    <Image
                      src='https://images.unsplash.com/photo-1602872029708-84d970d3382b?q=80&w=528&auto=format&fit=crop&ixlib=rb-4.0.3'
                      alt='Example image 5'
                      width={528}
                      height={792} // Adjust height based on aspect ratio
                      className='aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg'
                    />
                    <div className='pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10' />
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeAbout;
