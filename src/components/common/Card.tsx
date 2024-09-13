'use client';
import Link from 'next/link';
import React from 'react';
import { fadeInVariants, slideFromRightVariants } from '@/util/animations';
import { motion } from 'framer-motion';

interface CardProps {
  title: string;
  description: string;
  icon: JSX.Element;
  linkText: string;
  linkHref: string;
}

const Card: React.FC<CardProps> = ({
  title,
  description,
  icon,
  linkText,
  linkHref,
}) => {
  return (
    <motion.div
      className="flex flex-col justify-center items-center p-8 border rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 min-h-[400px] max-w-md mx-auto"
      style={{ background: "#fff" }}
      initial='hidden'
      whileInView='visible'
      viewport={{ once: true }}
      variants={fadeInVariants}
      custom={2}
    >
      <div className="mb-8">{icon}</div>
      <h3 className="text-xl font-semibold mb-6 text-center">{title}</h3>
      <p className="text-gray-500 text-center mb-10">{description}</p>
      <Link
        href={linkHref}
        className="text-blue-500 hover:text-blue-700 transition-colors"
      >
        {linkText} &rarr;
      </Link>
    </motion.div>
  );
};

export default Card;
