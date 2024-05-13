'use client'

import { EmailErrorText, EmailValue, ValueInput } from '@bitgouel/common';
import { ChangeEvent } from 'react';
import { useRecoilState } from 'recoil';

interface Props {
  isLoading: boolean
}

const Email = ({ isLoading }: Props) => {
  const [emailValue, setEmailValue] = useRecoilState(EmailValue)
  const [emailErrorText, setEmailErrorText] = useRecoilState(EmailErrorText)

  const onEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
          const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
          setEmailValue(e.target.value)
          if (e.target.value === '') setEmailErrorText('')
          else if (!emailRegex.test(e.target.value))
        setEmailErrorText('잘못된 이메일입니다.')
      else setEmailErrorText('')
    }

    return (
      <ValueInput
            type='text'
            value={emailValue}
            onChange={onEmailChange}
            placeholder='이메일'
            onClear={() => setEmailValue('')}
            length={emailValue.length}
            errorText={emailErrorText}
            isLoading={isLoading}
          />
    );
};

export default Email;