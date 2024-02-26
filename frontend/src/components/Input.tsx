import "./components.scss"
import React from 'react'
import Button from './Button.tsx'
import { useState } from 'react'

interface IRequiredInputProps {
  type: string,
  id: string,
}

interface IOptionalInputProps {
  initial_value: any,
  header: string,
  text: string,
  action: { text: string, purpose: Function } | null
}

interface IInputProps extends IRequiredInputProps, IOptionalInputProps {}

const defaultProps : IOptionalInputProps = {
  initial_value: '',
  header: '',
  text: '',
  action: null
}

const Input = (props: IInputProps) => {
  const { type, id, initial_value, header, text, action } = props
  const [value, setValue] = useState<any>('')

  function HandleButtonClick(e) {
    e.purpose()
  }

  return <span>
    { header ? <label>{ header }</label> : null }
    <input className="input"
      type = { type }
      id = { id }
      value = { value }
      ref = { initial_value }
      placeholder = { text }
      onChange={ (e) => { setValue(e.target.value) } }
    />

    { action ? <Button text={ action.text } purpose={ () => HandleButtonClick(action) } /> : null}
  </span>
}

Input.defaultProps = defaultProps
export default Input