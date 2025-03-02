import {
  getSubscriberInviteClicks,
  getSubscriberInviteCount,
  getSubscriberRankingPosition,
} from '@/http/api';
import { BadgeCheck, Medal, MousePointerClick } from 'lucide-react';

/**
 * O FETCH DE DADOS QUE SERÁ FEITO,
 * SÓ FUNCIONA EM COMPONENTES QUE
 * NÃO TEM O 'use client' NO TOPO
 * DO ARQUIVO
 *
 * PORQUE QUANDO TEM O 'use client'
 * O NEXT NÃO PERMITE QUE O COMPONENTE
 * SEJA ASSÍNCRONO
 */

interface IStatsProps {
  subscribeId: string;
}

export async function Stats({ subscribeId }: IStatsProps) {
  const { count: accessCount } = await getSubscriberInviteClicks(subscribeId);
  const { count: inviteCount } = await getSubscriberInviteCount(subscribeId);
  const { position: rankingPosition } =
    await getSubscriberRankingPosition(subscribeId);

  return (
    <div className='grid gap-3 md:grid-cols-3'>
      <div className='flex flex-col items-center justify-center gap-1 relative bg-gray-700 border border-gray-600 px-4 py-7 rounded-xl '>
        <span className='font-heading font-semibold text-2xl text-gray-200 leading-none'>
          {accessCount}
        </span>

        <span className='text-sm text-gray-300 text-center leading-none'>
          Acessos ao link
        </span>

        <MousePointerClick className='size-5 absolute top-3 left-3 text-purple' />
      </div>

      <div className='flex flex-col items-center justify-center gap-1 relative bg-gray-700 border border-gray-600 px-4 py-7 rounded-xl'>
        <span className='font-heading font-semibold text-2xl text-gray-200 leading-none'>
          {inviteCount}
        </span>

        <span className='text-sm text-gray-300 text-center leading-none'>
          Inscrições feitas
        </span>

        <BadgeCheck className='size-5 absolute top-3 left-3 text-purple' />
      </div>

      <div className='flex flex-col items-center justify-center gap-1 relative bg-gray-700 border border-gray-600 px-4 py-7 rounded-xl'>
        <span className='font-heading font-semibold text-2xl text-gray-200 leading-none'>
          {rankingPosition ? `${rankingPosition}º` : '-'}
        </span>

        <span className='text-sm text-gray-300 text-center leading-none'>
          Posição no ranking
        </span>

        <Medal className='size-5 absolute top-3 left-3 text-purple' />
      </div>
    </div>
  );
}
