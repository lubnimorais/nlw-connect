import { BadgeCheck, Medal, MousePointerClick } from 'lucide-react';

export function Stats() {
  return (
    <div className='grid gap-3 md:grid-cols-3'>
      <div className='flex flex-col items-center justify-center gap-1 relative bg-gray-700 border border-gray-600 px-4 py-7 rounded-xl '>
        <span className='font-heading font-semibold text-2xl text-gray-200 leading-none'>
          1042
        </span>

        <span className='text-sm text-gray-300 text-center leading-none'>
          Acessos ao link
        </span>

        <MousePointerClick className='size-5 absolute top-3 left-3 text-purple' />
      </div>

      <div className='flex flex-col items-center justify-center gap-1 relative bg-gray-700 border border-gray-600 px-4 py-7 rounded-xl'>
        <span className='font-heading font-semibold text-2xl text-gray-200 leading-none'>
          1042
        </span>

        <span className='text-sm text-gray-300 text-center leading-none'>
          Inscrições feitas
        </span>

        <BadgeCheck className='size-5 absolute top-3 left-3 text-purple' />
      </div>

      <div className='flex flex-col items-center justify-center gap-1 relative bg-gray-700 border border-gray-600 px-4 py-7 rounded-xl'>
        <span className='font-heading font-semibold text-2xl text-gray-200 leading-none'>
          3º
        </span>

        <span className='text-sm text-gray-300 text-center leading-none'>
          Posição no ranking
        </span>

        <Medal className='size-5 absolute top-3 left-3 text-purple' />
      </div>
    </div>
  );
}
