import Label from "../atoms/Label"
import Input from "../atoms/Input"

const InputField = ({ label, type, id, value, onChange, placeholder}) => {
  return (
    <div className="input-field">
        <Label htmlFor={id} text={label} />
        <Input id={id} type={type} value={value} onChange={onChange} placeholder={placeholder} />
    </div>
  )
}

export default InputField