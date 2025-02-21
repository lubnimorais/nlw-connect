import type { ComponentProps } from 'react'

interface IInputRootProps extends ComponentProps<'div'> {
  error?: boolean
}

export function InputRoot({ error = false, ...rest }: IInputRootProps) {
  return (
    /**
      PARA PEGAR O EFEITO DE FOCUS, ADICIONAMOS UMA PROPRIEDADE CHAMADA "group"
      QUE PERMITE DEFINIR O ESTILO DE UM ELEMENTO DENTRO DE UM GRUPO COM BASE
      DO ESTADO DE OUTRO ELEMENTO
    */
    <div
      data-error={error}
      className="
        h-12 
        flex 
        items-center 
        gap-2 
        group
        bg-gray-800 
        border 
        border-gray-600 
        rounded-xl 
        px-4
        focus-within:border-gray-100
        data-[error=true]:border-danger
      "
      {...rest}
    />
  )
}

interface IInputIconProps extends ComponentProps<'span'> {}

export function InputIcon({ ...rest }: IInputIconProps) {
  return (
    <span
      className="
        text-gray-400 
        group-focus-within:text-gray-100 
        group-[&:not(:has(input:placeholder-shown))]:text-gray-100 
        group-data-[error=true]:text-danger
        "
      {...rest}
    />
  )
}

interface IInputFieldProps extends ComponentProps<'input'> {}

export function InputField({ ...rest }: IInputFieldProps) {
  return (
    <input
      className="
        flex-1 
        outline-0
      "
      {...rest}
    />
  )
}
