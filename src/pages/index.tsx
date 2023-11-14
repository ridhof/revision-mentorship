import Link from 'next/link';
import * as React from 'react';

import Card from '@/components/Card';
import Layout from '@/components/layout/Layout';
import Seo from '@/components/Seo';

export default function HomePage() {
  const loremText =
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.';
  return (
    <Layout>
      {/* <Seo templateTitle='Home' /> */}
      <Seo />

      <main>
        <section className='bg-white'>
          <div className='layout relative flex min-h-screen flex-col items-center py-12 text-center'>
            <h1 className='mt-4'>Web Commerce</h1>
            <p className='mt-2 text-gray-500'>
              Buy your favorite items anytime and anywhere
            </p>
            <Link
              href='/add'
              className='text-sm text-gray-500 underline hover:text-black'
            >
              Add New Item
            </Link>
            <div className='mt-8 grid w-full grid-cols-1 gap-4 px-12 sm:grid-cols-2 sm:px-0 md:grid-cols-3 lg:grid-cols-4'>
              <Card
                id={1}
                title={loremText}
                price={29500}
                description={loremText}
              />
              <Card
                id={2}
                title='Shampoo'
                price={42950}
                description='A shampoo to help cleanse your hair'
              />
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}
