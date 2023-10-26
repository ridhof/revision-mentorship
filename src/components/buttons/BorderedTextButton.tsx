type BorderedTextButtonProps = {
  path: string;
  text: string;
};

export default function BorderedTextButton({
  path,
  text,
}: BorderedTextButtonProps) {
  return (
    <a
      href={path}
      className='rounded border border-black py-1 text-center hover:border-gray-500 hover:text-gray-500'
    >
      {text}
    </a>
  );
}
