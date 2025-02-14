import { useState } from "react";
import {
    Input,
    Popover,
    PopoverHandler,
    PopoverContent,
} from "@material-tailwind/react";
import { DayPicker } from "react-day-picker";
import "react-day-picker/style.css";
import { format } from "date-fns";


const CustomInputDate = ({ onChange, label }) => {
    const [date, setDate] = useState('');
    const handleSelect = (selectedDate) => {
        setDate(selectedDate);
        onChange(selectedDate);
    };


  return (
    <div>
    <Popover placement="bottom">
        <PopoverHandler>
          <Input
            label={label}
            onChange={onChange}
            value={date ? format(date, "PPP") : ""}
          />
        </PopoverHandler>
        <PopoverContent>
        <DayPicker
            mode="single"
            selected={date}
            onSelect={handleSelect}
            captionLayout="dropdown"
        />
        </PopoverContent>
      </Popover>
    </div>
  )
}

export default CustomInputDate