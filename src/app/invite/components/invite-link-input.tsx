import { Link, Copy } from 'lucide-react';

import { InputRoot, InputIcon, InputField } from '@/components/Input';
import { IconButton } from '@/components/IconButton';

export function InviteLinkInput() {
  return (
    <InputRoot>
      <InputIcon>
        <Link className='size-5' />
      </InputIcon>

      <InputField
        defaultValue='http://localhost:3000/invite/dksdjkjekwjkd'
        readOnly
      />

      <IconButton className='-mr-2'>
        <Copy className='size-5' />
      </IconButton>
    </InputRoot>
  );
}
