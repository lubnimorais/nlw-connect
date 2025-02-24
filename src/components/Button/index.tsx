import type { ComponentProps } from 'react';

interface IButtonProps extends ComponentProps<'button'> {}

export function Button({ ...rest }: IButtonProps) {
  return (
    <button
      className='
        w-full 
        h-12
        flex
        items-center
        justify-between
        px-5 
        bg-gray-500 
        text-blue 
        font-semibold 
        rounded-xl 
        cursor-pointer
        transition-colors
        duration-300
        hover:bg-blue
        hover:text-gray-900
      '
      {...rest}
    />
  );
}
