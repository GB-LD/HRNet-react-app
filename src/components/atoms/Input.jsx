import { Input } from "@material-tailwind/react";

const CustomInput = ({type = 'text', id, value, onChange, label, placeholder}) => {
  return (
    <Input
        type={type}
        id={id}
        value={value ?? ''}
        onChange={onChange}
        label={label}
        placeholder={placeholder}
        className="input"
    />
  )
}

export default CustomInput