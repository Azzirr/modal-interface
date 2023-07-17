declare module 'react-input-mask' {
  import * as React from 'react';

  interface InputMaskProps extends React.InputHTMLAttributes<HTMLInputElement> {
    mask: string;
  }

  const InputMask: React.FC<InputMaskProps>;

  export default InputMask;
}
