'use client';

import { Link, Copy } from 'lucide-react';

import { InputRoot, InputIcon, InputField } from '@/components/Input';
import { IconButton } from '@/components/IconButton';

interface IInviteLinkInputProps {
  inviteLink: string;
}

export function InviteLinkInput({ inviteLink }: IInviteLinkInputProps) {
  function copuInviteLink() {
    // ACESSA A API DE CONTRO C, CONTROL v
    navigator.clipboard.writeText(inviteLink);
  }

  return (
    <InputRoot>
      <InputIcon>
        <Link className='size-5' />
      </InputIcon>

      <InputField defaultValue={inviteLink} readOnly />

      <IconButton className='-mr-2' onClick={copuInviteLink}>
        <Copy className='size-5' />
      </IconButton>
    </InputRoot>
  );
}
