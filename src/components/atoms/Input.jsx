import { Input } from "@material-tailwind/react";

const CustomInput = ({id, value, onChange, label, placeholder, status}) => {
  return (
    <Input
        id={id}
        value={value ?? ''}
        onChange={onChange}
        label={label}
        placeholder={placeholder}
        className="input"
        {...(status === "error" ? { error: true } : {})}
    />
  )
}

export default CustomInput