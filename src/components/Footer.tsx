import Link from 'next/link';
import { Logo } from '@/components/Logo';

const quickLinks = [
  { title: 'Home', url: '#' },
  { title: 'About', url: '#' },
  { title: 'FAQ', url: '#' },
  { title: 'Properties', url: '#' },
];

const socialLinks = [
  { icon: 'instagram', url: 'https://www.instagram.com' },
  { icon: 'facebook', url: 'https://www.facebook.com' },
  { icon: 'linkedin', url: 'https://www.linkedin.com' },
  { icon: 'twitter', url: 'https://twitter.com' },
];

const Footer = () => {
  return (
    <footer className='relative bg-slate-900 dark:bg-slate-800'>
      <div className='container relative mx-auto max-w-7xl'>
        <div className='grid grid-cols-1'>
          <div className='relative py-16'>
            <div className='relative w-full'>
              <div className='grid md:grid-cols-12 grid-cols-1 gap-[30px]'>
                <div className='lg:col-span-4 md:col-span-12 flex flex-col px-2 md:px-0 items-center md:items-start'>
                  <Link
                    href='#'
                    aria-label='Home'
                    className='flex items-center'
                  >
                    <Logo className='h-14 w-auto text-slate-100' />
                    <span className='ml-2 text-2xl font-bold text-slate-100'>
                      Tsang
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='py-6 px-0 border-t border-gray-800 dark:border-gray-700'>
        <div className='container relative text-center mx-auto max-w-7xl'>
          <div className='grid md:grid-cols-2 items-center gap-6'>
            <div className='md:text-start text-center'>
              <p className='mb-0 text-gray-300'>
                © Copyright Tsang {new Date().getFullYear()} {''}
                All Right Reserved.{' '}
              </p>
            </div>

            <ul className='list-none md:text-end text-center text-slate-300 text-sm'>
              <li className='inline'>
                <a href='#' className='hover:text-slate-50'>
                  Terms Of Use
                </a>
              </li>
              <li className='inline mx-2'> | </li>
              <li className='inline'>
                <a href='#' className='hover:text-slate-50'>
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
