import { User, Mail, ArrowRight } from 'lucide-react';

import { InputRoot, InputIcon, InputField } from '@/components/Input';
import { Button } from '@/components/Button';

export function SubscriptionForm() {
  return (
    <form className='w-full bg-gray-700 border border-gray-600 rounded-2xl p-8 space-y-6 md:max-w-[440px]'>
      <h2 className='font-heading font-semibold text-xl text-gray-200 '>
        Inscrição
      </h2>

      <div className='space-y-3'>
        <InputRoot>
          <InputIcon>
            <User />
          </InputIcon>

          <InputField type='text' placeholder='Nome completo' />
        </InputRoot>

        <InputRoot>
          <InputIcon>
            <Mail />
          </InputIcon>

          <InputField type='email' placeholder='E-mail' />
        </InputRoot>
      </div>

      <Button>
        Confirmar
        <ArrowRight />
      </Button>
    </form>
  );
}
