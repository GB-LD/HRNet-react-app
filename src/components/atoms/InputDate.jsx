import { useState } from "react";
import {
    Input,
    Popover,
    PopoverHandler,
    PopoverContent,
} from "@material-tailwind/react";
import { DayPicker } from "react-day-picker";
import { format } from "date-fns";
import "react-day-picker/style.css";

const CustomInputDate = ({ onChange, label, status }) => {
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
            {...(status === "error" ? { error: true } : {})}
          />
        </PopoverHandler>
        <PopoverContent>
        <DayPicker
            captionLayout="dropdown-years"
            mode="single"
            selected={date}
            onSelect={handleSelect}
          />
        </PopoverContent>
      </Popover>
    </div>
  )
}

export default CustomInputDate