import InputField from "../molecules/InputField"
import Select from "../atoms/Select"

const AdressForm = ({adress, setAdress}) => {
    const states = ["Alabama", "Alaska", "Arizona", "Arkansas", "California"]

  return (
    <div className="">
        <InputField
            label="Street"
            id='street'
            value={adress.street}
            onChange={(e) => setAdress({...adress, street: e.target.value})}
            placeholder='street name'
        />
        <InputField
            label="City"
            id='city'
            value={adress.city}
            onChange={(e) => setAdress({...adress, city: e.target.value})}
            placeholder='city name'
        />
        <Select
            options={states}
            value={adress.state}
            onChange={(e) => setAdress({...adress, state: e.target.value})}
        />
        <InputField
            label="Zip code"
            type='number'
            id='zipCode'
            value={adress.zipCode}
            onChange={(e) => setAdress({...adress, zipCode: e.target.value})}
            placeholder='zip code number'
        />
    </div>
  )
}

export default AdressForm