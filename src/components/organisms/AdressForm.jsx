import CustomInput from "../atoms/Input"
import CustomInputZipCode from "../atoms/InputZipCode"
import CustomSelect from "../atoms/Select"

const AdressForm = ({adress, setAdress}) => {
    const states = ["Alabama", "Alaska", "Arizona", "Arkansas", "California"]

  return (
    <div className="flex flex-col gap-6">
        <CustomInput
            label="Street"
            id='street'
            value={adress.street}
            onChange={(e) => setAdress({...adress, street: e.target.value})}
            placeholder='street name'
        />
        <CustomInput
            label="City"
            id='city'
            value={adress.city}
            onChange={(e) => setAdress({...adress, city: e.target.value})}
            placeholder='city name'
        />
        <CustomSelect
            label="State"
            options={states}
            value={adress.state}
            onChange={(value) => setAdress({...adress, state: value})}
        />
        <CustomInputZipCode
            label="Zip Code"
            value={adress.zipCode}
            onChange={(e) => setAdress({...adress, zip: e.target.value})}
            placeholder='zip code number'
        />
    </div>
  )
}

export default AdressForm