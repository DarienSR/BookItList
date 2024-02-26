import "./components.scss"
import React from 'react'

interface IRequiredButtonProps {
  text: string
}

interface IOptionalButtonProps {
  purpose: Function | null
  type: string | null
}

interface IButtonProps extends IRequiredButtonProps, IOptionalButtonProps {}

const defaultProps : IOptionalButtonProps = {
  purpose: null,
  type: null
}

const Button = (props: IButtonProps) => {

  const { text, purpose } = props

  function HandleButtonClick(purpose) {
    purpose()
  }

  return <button className='button' onClick={() => HandleButtonClick(purpose)}>
    { text }
  </button>
}

Button.defaultProps = defaultProps
export default Button