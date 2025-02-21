import { Select, Option } from "@material-tailwind/react";

const CustomSelect = ({ options, value, onChange, label, status}) => {
  return (
    <Select value={value} onChange={onChange} variant="outlined" label={label} {...(status === "error" ? { error: true } : {})}>
        {options.map(option => (
            <Option key={option} value={option}>
                {option}
            </Option>
        ))}
    </Select>
  )
}

export default CustomSelect