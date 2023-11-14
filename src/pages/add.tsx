import Link from 'next/link';
import { useId, useState } from 'react';

import Layout from '@/components/layout/Layout';
import Seo from '@/components/Seo';

export default function HomePage() {
  const titleInputId = useId();
  const priceInputId = useId();
  const descriptionInputId = useId();
  const [getTitle, setTitle] = useState('');
  const [getPrice, setPrice] = useState(0);
  const [getDescription, setDescription] = useState('');
  const [showTitleError, setTitleError] = useState(false);
  const [showPriceError, setPriceError] = useState(false);
  const [showDescriptionError, setDescriptionError] = useState(false);
  function submit() {
    setTitleError(false);
    setPriceError(false);
    setDescriptionError(false);

    if (getTitle === '') setTitleError(true);
    if (getPrice === null || getPrice < 0 || isNaN(getPrice))
      setPriceError(true);
    if (getDescription === '') setDescriptionError(true);

    if (getTitle !== '' && getPrice !== null && getDescription !== '') {
      /*
      const data = {
        title: getTitle,
        price: getPrice,
        description: getDescription,
      };
      */
    }
  }
  return (
    <Layout>
      {/* <Seo templateTitle='Home' /> */}
      <Seo />

      <main>
        <section className='bg-white'>
          <div className='layout relative flex min-h-screen flex-col items-center py-12 text-center'>
            <h3 className='mt-4 w-full'>Add New Product</h3>
            <div className='mt-4 grid grid-cols-3 items-center gap-x-4 gap-y-6'>
              <p
                className={`col-span-3 border border-red-400 p-2 text-center text-sm ${
                  showTitleError ? 'block' : 'hidden'
                }`}
              >
                Title can't be empty
              </p>
              <label htmlFor={titleInputId} className='text-right'>
                Title:
              </label>
              <input
                id={titleInputId}
                className='col-span-2'
                type='text'
                name='title'
                value={getTitle}
                onChange={(e) => setTitle(e.target.value)}
              />
              <p
                className={`col-span-3 border border-red-400 p-2 text-center text-sm ${
                  showPriceError ? 'block' : 'hidden'
                }`}
              >
                Price can't be empty and should be greater than or equal to 0
              </p>
              <label htmlFor={priceInputId} className='text-right'>
                Price:
              </label>
              <input
                id={priceInputId}
                className='col-span-2'
                type='number'
                name='price'
                value={getPrice}
                onChange={(e) => setPrice(parseInt(e.target.value))}
              />
              <p
                className={`col-span-3 border border-red-400 p-2 text-center text-sm ${
                  showDescriptionError ? 'block' : 'hidden'
                }`}
              >
                Description can't be empty
              </p>
              <label htmlFor={descriptionInputId} className='text-right'>
                Description:
              </label>
              <textarea
                id={descriptionInputId}
                className='col-span-2'
                name='description'
                value={getDescription}
                onChange={(e) => setDescription(e.target.value)}
              ></textarea>
            </div>
            <div className='flex flex-row gap-x-4'>
              <button
                type='button'
                className='mt-5 rounded border border-black px-4 py-1 text-center hover:border-gray-500 hover:text-gray-500'
                onClick={submit}
              >
                Submit
              </button>
              <Link
                href='/'
                className='mt-5 rounded border border-black px-4 py-1 text-center hover:border-gray-500 hover:text-gray-500'
              >
                Cancel
              </Link>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}
