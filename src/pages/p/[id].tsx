// import { useRouter } from 'next/router';

import BorderedTextButton from '@/components/buttons/BorderedTextButton';
import Layout from '@/components/layout/Layout';
import ArrowLink from '@/components/links/ArrowLink';
import Seo from '@/components/Seo';

export default function ProductDetail() {
  // const router = useRouter();
  // const id = router.query.id;
  const loremText =
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.';
  return (
    <Layout>
      <Seo />

      <main>
        <section className='bg-white'>
          <div className='layout relative flex min-h-screen flex-col py-12'>
            <ArrowLink href='/' direction='left' className='mt-4 w-24'>
              Go Back
            </ArrowLink>
            <div className='mt-8 border border-black p-4'>
              <p className='text-md text-justify font-semibold leading-normal'>
                {loremText}
              </p>
              <p className='mt-2 text-sm'>
                Rp{(12500).toLocaleString('id-ID')}
              </p>
              <p className='mt-2 text-justify text-sm leading-normal'>
                {loremText}
              </p>
              <div className='mt-4 grid grid-cols-2 gap-x-4 text-sm'>
                <BorderedTextButton path='#' text='Edit' />
                <BorderedTextButton path='#' text='Delete' />
              </div>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}
