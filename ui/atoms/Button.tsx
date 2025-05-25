import React, { ComponentPropsWithoutRef } from 'react'

const Button = (props:ComponentPropsWithoutRef<"button">) => {
    const {type ="button",children,...rest} = props
  return (
   <button className='w-fit' type={type} {...rest}>
    {children}
   </button>
  )
}

export default Button