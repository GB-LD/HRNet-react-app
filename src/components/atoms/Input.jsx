const Input = ({type = 'text', id, value, onChange, placeholder}) => {
  return (
    <input
        type={type}
        id={id}
        value={value ?? ''}
        onChange={onChange}
        placeholder={placeholder}
        className="input"
    />
  )
}

export default Input