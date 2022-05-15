import { ChangeEvent, FC, useState } from "react"

interface Options {
  name?: string
  value: string
}

interface SelectProps {
  label: string
  selected?: string
  options: Options[]
  changeHandler: (value: string) => void
  ariaLabel: string
}

const Select: FC<SelectProps> = (props) => {
  const [value, setValue] = useState<string>(
    props.selected || props.options[0].value
  )

  const handleChange = (event: ChangeEvent<HTMLSelectElement>): void => {
    setValue(event.currentTarget.value)
    props.changeHandler(event.currentTarget.value)
  }

  return (
    <div>
      <label>
        {props.label}
        <br />
        <select
          aria-label={props.ariaLabel}
          value={value}
          onChange={(e) => handleChange(e)}
        >
          {props.options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.name || option.value}
            </option>
          ))}
        </select>
      </label>
    </div>
  )
}

export default Select
