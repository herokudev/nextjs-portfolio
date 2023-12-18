"use client";

import Navbar from '../../components/Navbar';
import PostDetails from '../../components/PostDetails';
import { usePathname, useSearchParams } from 'next/navigation';

export default function slugDetails() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
   
  const url = `${pathname}?${searchParams}`;
  const parts = url.split('/');
  let slug = parts[parts.length - 1];
  slug = slug.replace('?', '');
  console.log(slug);

    return (
      <main className='relative z-0 bg-primary'>
      <Navbar />
      <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center ml-[10%]'>        
        <br />
        <br />
        <br />
        <h3 className='font-bold text-blue-700 text-[50px]'>Blog app.</h3>
        <div className='mt-20 flex flex-wrap gap-7'>
          <PostDetails slug={slug} />          

        </div>        
      </div>
    </main>      
   
    )
  }