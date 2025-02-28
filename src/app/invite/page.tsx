import Image from 'next/image';

import logo from '../../assets/logo.svg';

import { Stats } from './components/stats';
import { Ranking } from './components/ranking';
import { InviteLinkInput } from './components/invite-link-input';

export default function InvitePage() {
  const inviteLink = 'http://localhost:3000/invite/510147958';

  return (
    <div className='min-h-dvh flex flex-col items-center justify-between gap-16 md:flex-row'>
      <div className='w-full max-w-[500px] flex flex-col gap-10'>
        <Image src={logo} alt='devstage' width={108.5} height={30} />

        <div className='space-y-2'>
          <h1 className='font-heading font-semibold text-4xl text-gray-100 leading-none'>
            Inscrição confirmada!
          </h1>

          <p className='text-gray-300'>
            Para entrar no evento, acesso o link enviado para seu e-mail.
          </p>
        </div>

        <div className='space-y-6'>
          <div className='space-y-3'>
            <h2 className='font-heading font-semibold text-xl text-gray-200 leading-none'>
              Indique e ganhe
            </h2>

            <p className='text-gray-300'>
              Convide mais pessoas para o evento e concorra a prêmios
              exclusivos! É só compartilhar o link abaixo e acompanhar as
              inscrições:
            </p>
          </div>

          <InviteLinkInput inviteLink={inviteLink} />

          <Stats />
        </div>
      </div>

      <Ranking />
    </div>
  );
}
