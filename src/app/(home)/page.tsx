import Image from 'next/image';

import { Radio } from 'lucide-react';

import logo from '../../assets/logo.svg';

import { SubscriptionForm } from './components/subscrition-form';

export default function Home() {
  /**
   * mx-auto: tudo centralizado
   * px-5: para no mobile não ficar nada colado nas laterais
   * py-8 para no mobile não ficar colocado nada no topo nem embaixo
   * md:py-0: para telas maiores retirar o espaçamento do topo e de baixo,
   * porque vai estar tudo centralizado na tela
   */
  return (
    <div className='min-h-dvh flex flex-col justify-center gap-16'>
      <div className='flex flex-col items-center gap-8 md:items-start'>
        <Image src={logo} alt='devstage' width={108.5} height={30} />

        <h1
          className='
              flex 
              flex-col 
              font-heading 
              font-medium 
              leading-none 
              text-4xl 
              text-center 
              md:text-7xl 
              md:text-left
            '
        >
          <span className='text-blue'>CodeCraft</span>
          Summit 2025
        </h1>
      </div>

      <div className='flex flex-col items-stretch gap-5 md:flex-row'>
        <div className='flex-1 bg-gray-700 border border-gray-600 rounded-2xl p-8 space-y-6'>
          <div className='flex items-center justify-between'>
            <h2 className='font-heading font-semibold text-xl text-gray-200 '>
              Sobre o evento
            </h2>

            <span className='flex flex-row items-center gap-2 font-semibold text-xs text-purple'>
              <Radio className='size-5' />
              AO VIVO
            </span>
          </div>

          <p className='text-sm text-gray-300 leading-relaxed md:text-base'>
            Um evento feito por e para pessoas desenvolvedoras apaixonadas por
            criar soluções inovadoras e compartilhar conhecimento. Vamos
            mergulhar nas tendências mais recentes em desenvolvimento de
            software, arquitetura de sistemas e tecnologias emergentes, com
            palestras, workshops e hackathons.
            <br />
            <br />
            Dias 15 a 17 de março | Das 18h às 21h | Online & Gratuito
          </p>
        </div>

        <SubscriptionForm />
      </div>
    </div>
  );
}
