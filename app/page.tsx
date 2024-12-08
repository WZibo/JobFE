import Image from 'next/image';
import Logo from '../assets/logo.png';
import LandingImg from '../assets/main.png';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
export default function Home() {
  return (
    <main>
      <header className='max-w-6xl mx-auto px-4 sm:px-8 py-6 '>
        <Image src={Logo} alt='logo' style={{ width: '60px', height: '60px', borderRadius: '20%' }} />
      </header>
      <section className='max-w-6xl mx-auto px-4 sm:px-8 h-screen -mt-20 grid lg:grid-cols-[1fr,400px] items-center'>
        <div>
          <h1 className='capitalize text-4xl md:text-7xl font-bold'>
            job <span className='text-primary'>tracker</span>
          </h1>
          <p className='leading-loose max-w-xl mt-4 '>
          Job searching is like a marathon; speed doesn’t matter, persistence does. Every resume you submit and every 
          interview you attend brings you one step closer to success. Don’t be discouraged by temporary rejections—there’s 
          an opportunity that’s perfect for you just around the corner. Believe in yourself, keep pushing forward, and the 
          right job will be waiting for you.
          </p>
          <Button asChild className='mt-4'>
            <Link href='/add-job'>Get Started</Link>
          </Button>
        </div>
        <Image src={LandingImg} alt='landing' className='hidden lg:block ' style={{width: '900px ', height:'300px', borderRadius:' 6%'}}/>
      </section>
    </main>
  );
}
