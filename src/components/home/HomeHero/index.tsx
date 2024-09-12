import Image from 'next/image';
import { MAIN_IMAGE, HEADER_HEIGHT } from '@/constants';
import Content from './Content';

const HomeHero: React.FC = () => {
  const distanceFromTop = `calc(100vh - ${HEADER_HEIGHT})`;
  return (
    <section
      className='relative w-full h-full bg-gray-100'
      style={{ height: distanceFromTop, minHeight: distanceFromTop }}
    >
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
      <Content />
    </section>
  );
};

export default HomeHero;
