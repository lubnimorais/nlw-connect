'use client';

import { useRouter, useSearchParams } from 'next/navigation';

import { User, Mail, ArrowRight } from 'lucide-react';

import { useForm } from 'react-hook-form';

import { z as zod } from 'zod';

import { zodResolver } from '@hookform/resolvers/zod';

import { subscribeToEvent } from '@/http/api';

import { InputRoot, InputIcon, InputField } from '@/components/Input';
import { Button } from '@/components/Button';

const subscriptionFormSchema = zod.object({
  name: zod.string().min(2, 'Digite seu nome completo'),
  email: zod.string().email('Digite um e-mail válido'),
});

type ISubscriptionFormData = zod.infer<typeof subscriptionFormSchema>;

export function SubscriptionForm() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ISubscriptionFormData>({
    resolver: zodResolver(subscriptionFormSchema),
  });

  async function onSubscribe({ name, email }: ISubscriptionFormData) {
    const referrer = searchParams.get('referrer');

    const { subscriberId } = await subscribeToEvent({ name, email, referrer });

    router.push(`/invite/${subscriberId}`);
  }

  return (
    <form
      onSubmit={handleSubmit(onSubscribe)}
      className='w-full bg-gray-700 border border-gray-600 rounded-2xl p-8 space-y-6 md:max-w-[440px]'
    >
      <h2 className='font-heading font-semibold text-xl text-gray-200 '>
        Inscrição
      </h2>

      <div className='space-y-3'>
        <div className='space-y-2'>
          <InputRoot>
            <InputIcon>
              <User />
            </InputIcon>

            <InputField
              type='text'
              placeholder='Nome completo'
              {...register('name')}
            />
          </InputRoot>

          {errors.name && (
            <p className='font-semibold text-xs text-danger'>
              {errors.name.message}
            </p>
          )}
        </div>

        <div className='space-y-2'>
          <InputRoot>
            <InputIcon>
              <Mail />
            </InputIcon>

            <InputField
              type='email'
              placeholder='E-mail'
              {...register('email')}
            />
          </InputRoot>

          {errors.email && (
            <p className='font-semibold text-xs text-danger'>
              {errors.email.message}
            </p>
          )}
        </div>
      </div>

      <Button>
        Confirmar
        <ArrowRight />
      </Button>
    </form>
  );
}
