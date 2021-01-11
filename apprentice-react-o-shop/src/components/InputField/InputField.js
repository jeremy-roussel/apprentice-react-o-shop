import React from 'react'

const InputField = ({
    FieldType,
    FieldName,
    FieldPlaceholder,
    FieldValue,
    FieldChangeFunction,
    FormSubmitted
}) => {


  return (
    <div className="form-group">
        <input
            type={FieldType}
            name={FieldName}
            placeholder={FieldPlaceholder}
            value={FieldValue}
            onChange={FieldChangeFunction}
            className={
                'form-control' + ({FormSubmitted} && !{FieldValue} ? 'is-invalid' : " ")
            }
        />
        {{FormSubmitted} && !{FieldValue} && (
            <div className="invalid-feedback">${FieldPlaceholder} is required</div>
        )}
    </div>
  )
}

export default InputField
