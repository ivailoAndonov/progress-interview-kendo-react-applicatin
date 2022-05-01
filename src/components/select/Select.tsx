import { FC, useState } from "react"

interface SelectProps {
  label: string
  selected?: string
  options: string[]
  changeHandler: any
}

const Select: FC<SelectProps> = (props) => {
  const [value, setValue] = useState(props.selected || props.options[0])

  const handleChange = (event: any) => {
    setValue(event.target.value)
    props.changeHandler(event.target.value)
  }

  return (
    <div>
      <label>{props.label}</label>
      <br />
      <select value={value} onChange={handleChange}>
        {props.options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  )
}

export default Select
