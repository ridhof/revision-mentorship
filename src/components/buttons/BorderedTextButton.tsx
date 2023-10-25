type BorderedTextButtonProps = {
  text: string;
};

export default function BorderedTextButton({ text }: BorderedTextButtonProps) {
  return (
    <button className='rounded border border-black py-1 hover:border-gray-500 hover:text-gray-500'>
      {text}
    </button>
  );
}
