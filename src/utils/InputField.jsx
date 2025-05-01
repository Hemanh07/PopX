import React, { useState } from 'react'

import './style.css'

const InputField = ({ fieldName, inputType }) => {
  let [data, setData] = useState("");
  let [isTyping, setIsTyping] = useState(false)
  return (

    <fieldset>
      {
        (data || isTyping) &&
        <legend>{fieldName}
          <span
            style={{
              color: "red"
            }}
          >
            *
          </span>

        </legend>
      }
      <input
        required={true}
        type={inputType}
        name={fieldName}
        placeholder={
          !isTyping && fieldName + "*" || ""
        }
        pattern={
          inputType === 'tel' && "[0-9]{10}" || undefined
        }
        id={fieldName}
        onChange={(event) => {
          setData(event.target.value)
          setIsTyping(false)
        }}
        value={data}
        onClick={() => {
          setIsTyping(true)
        }}

      />
    </fieldset>

  )
}

export default InputField