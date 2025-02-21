import React from 'react'
import { Input } from "@material-tailwind/react";

const CustomInputZipCode = ({label, placeholder, onChange}) => {
  return (
    <div className="w-96">
    <Input
        placeholder={placeholder}
        onChange={onChange}
        type="number"
        inputMode="numeric"
        label={label}
        className="appearance-none [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
    />
    </div>
  )
}

export default CustomInputZipCode