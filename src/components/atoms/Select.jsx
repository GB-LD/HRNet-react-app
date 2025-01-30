const Select = ({ options, value, onChange}) => {
  return (
    <select value={value} onChange={onChange} className="select">
        {options.map(option => (
            <option key={option} value={option}>
                {option}
            </option>
        ))}
    </select>
  )
}

export default Select