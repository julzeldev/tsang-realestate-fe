import { HEADER_HEIGHT } from '@/constants';
import HomeHero from '@/components/HomeHero';
import HomeAbout from '@/components/HomeAbout';
import HomeHow from '@/components/HomeHow';

export default function Home() {
  const distanceFromTop = `calc(100vh - ${HEADER_HEIGHT})`;
  return (
    <div>
      <div
        style={{ height: distanceFromTop, minHeight: '100vh' }}
        className='fixed bg-red-600 w-full'
      >
        <HomeHero />
      </div>
      <div
        style={{ transform: `translateY(${distanceFromTop})` }}
        className={`relative h-[100vh] w-full`}
      >
        <HomeAbout />
        <HomeHow />
      </div>
    </div>
  );
}
