import Image from 'next/image';

import medalGold from '../../../assets/medal-gold.svg';
import medalSilver from '../../../assets/medal-silver.svg';
import medalCooper from '../../../assets/medal-cooper.svg';

export function Ranking() {
  return (
    <div className='w-full max-w-[440px] space-y-5'>
      <h2 className='font-heading font-semibold text-xl text-gray-200 leading-none'>
        Ranking de indicações
      </h2>

      <div className='space-y-4'>
        <div className='flex flex-col justify-center gap-3 relative rounded-xl bg-gray-700 border border-gray-600 p-6'>
          <span className='text-sm text-gray-300 leading-none'>
            <span className='font-semibold'>1º</span> | Lubni Morais
          </span>

          <span className='font-heading font-semibold text-2xl text-gray-200 leading-none'>
            1030
          </span>

          <Image src={medalGold} alt='' className='absolute top-0 right-8' />
        </div>

        <div className='flex flex-col justify-center gap-3 relative rounded-xl bg-gray-700 border border-gray-600 p-6'>
          <span className='text-sm text-gray-300 leading-none'>
            <span className='font-semibold'>2º</span> | Lubni Morais
          </span>

          <span className='font-heading font-semibold text-2xl text-gray-200 leading-none'>
            1030
          </span>

          <Image src={medalSilver} alt='' className='absolute top-0 right-8' />
        </div>

        <div className='flex flex-col justify-center gap-3 relative rounded-xl bg-gray-700 border border-gray-600 p-6'>
          <span className='text-sm text-gray-300 leading-none'>
            <span className='font-semibold'>3º</span> | Lubni Morais
          </span>

          <span className='font-heading font-semibold text-2xl text-gray-200 leading-none'>
            1030
          </span>

          <Image src={medalCooper} alt='' className='absolute top-0 right-8' />
        </div>
      </div>
    </div>
  );
}
