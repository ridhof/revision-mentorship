import BorderedTextButton from '@/components/buttons/BorderedTextButton';

type CardProps = {
  title: string;
  price: number;
  description: string | null;
};

export default function Card({ title, price, description }: CardProps) {
  return (
    <div className='grid grid-rows-1 rounded border border-black p-4 text-left'>
      <div>
        <p className='text-md line-clamp-2 text-justify font-semibold leading-normal'>
          {title}
        </p>
        <p className='mt-2 text-sm'>Rp{price.toLocaleString('id-ID')}</p>
        <p className='mt-2 line-clamp-6 text-justify text-sm leading-normal'>
          {description}
        </p>
      </div>
      <div className='mt-4 grid grid-cols-3 gap-x-4 text-sm'>
        <BorderedTextButton text='View' />
        <BorderedTextButton text='Update' />
        <BorderedTextButton text='Delete' />
      </div>
    </div>
  );
}
