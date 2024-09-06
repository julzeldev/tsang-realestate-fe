'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { fadeInVariants } from '@/util/animations';

const HomeHow: React.FC = () => {
  return (
    <div className='bg-sky-600 p-0 w-full'>
      <div className='mx-auto max-w-4xl p-16'>
        <motion.h2
          className='text-3xl font-bold tracking-tight text-gray-100 sm:text-4xl'
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true }}
          variants={fadeInVariants}
          custom={0}
        >
          How we work
        </motion.h2>
        <div className='mt-6 leading-10 flex flex-col gap-x-8 gap-y-10 lg:flex-row'>
          <motion.p
            initial='hidden'
            whileInView='visible'
            viewport={{ once: true }}
            variants={fadeInVariants}
            className='text-xl leading-8 text-gray-200'
          >
            Our agents are fully licensed real estate professionals under the
            Texas Relocation Expert brokerage. In the real estate market, most
            apartment complexes and large property management companies have set
            aside a marketing budget. This is where we come in.
          </motion.p>
          <div className='text-lg leading-7 text-gray-100'>
            <motion.p
              initial='hidden'
              whileInView='visible'
              viewport={{ once: true }}
              variants={fadeInVariants}
            >
              We receive a referral fee from these properties when you lease
              through us. Your rent, specials, and availability remain exactly
              the same. By using our service, you save time, effort, and money
              while finding the ideal property that fits your needs. <br />
              We streamline your search so you save time, money, and effort
              while finding the best deal that fits your wants and needs as best
              as possible.
            </motion.p>
            <motion.p
              initial='hidden'
              whileInView='visible'
              viewport={{ once: true }}
              variants={fadeInVariants}
              className='mt-10'
            >
              When applying, please remember to list your agent&apos;s full name
              in the referral or “How Did You Hear About Us” section. If
              there&apos;s a dropdown menu, select options like &quot;Apartment
              Locator&quot;, &quot;Locator Service&quot;, &quot;Realtor&quot;,
              or &quot;Real Estate Agent&quot;. Make sure to let the property
              know you&apos;re working with us during your visits!
            </motion.p>
            <motion.p
              initial='hidden'
              whileInView='visible'
              viewport={{ once: true }}
              variants={fadeInVariants}
              className='mt-10'
            >
              In addition, some properties even offer up to 2 hours of free
              moving services, which we cover! If your move takes longer,
              you&apos;ll only need to pay the market rate directly to the
              movers. Please provide a screenshot showing where you listed your
              agent on the application.
            </motion.p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeHow;
