import React, { useContext } from 'react'
import FormContext from './FormContext'

import './InputField.css'

const InputField = (props) => {
  const form = useContext(FormContext)

  if (!form.value) {
    return 'InputField should be wrapped in a form'
  }

  const { name, label, ...otherProps } = props

  const value = form.value(name)

  return (
    <div className="InputField">
      <label htmlFor={name}>{label || name}:</label>
      <input
        id={name}
        value={value || ''}
        onChange={(event) => {
          form.setValue(name, event.target.value)
        }}
        {...otherProps}
      />{' '}
      {}
    </div>
  )
}

export default InputField