import HomeAbout from '@/components/home/HomeAbout';
import HomeCards from '@/components/home/HomeCards';
import HomeGetStarted from '@/components/home/HomeGetStarted';
import HomeHero from '@/components/home/HomeHero';
import HomeHow from '@/components/home/HomeHow';

export default function Home() {
  return (
    <div>
      <HomeHero />
      <HomeCards />
      <HomeAbout />
      <HomeHow />
      <HomeGetStarted />
    </div>
  );
}
