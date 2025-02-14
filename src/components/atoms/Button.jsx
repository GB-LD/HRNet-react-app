import { Button } from "@material-tailwind/react"

const CustomButton = ({ text, onClick}) => {
  return (
    <Button onClick={onClick}>{ text }</Button>
  )
}

export default CustomButton