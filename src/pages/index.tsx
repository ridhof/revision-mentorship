import * as React from 'react';

import Layout from '@/components/layout/Layout';
import Seo from '@/components/Seo';

export default function HomePage() {
  return (
    <Layout>
      {/* <Seo templateTitle='Home' /> */}
      <Seo />

      <main>
        <section className='bg-white'>
          <div className='layout relative flex min-h-screen flex-col items-center justify-center py-12 text-center'>
            <h1 className='mt-4'>Web Commerce</h1>
            <p className='mt-2 text-gray-500'>
              Buy your favorite items anytime and anywhere with Web Commerce
            </p>
          </div>
        </section>
      </main>
    </Layout>
  );
}
