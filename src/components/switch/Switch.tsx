import { FC } from "react"

import "./Switch.scss"

interface SwitchProps {
  checked?: boolean
  id: number
  changeHandler?: (value: string) => void
}

const Switch: FC<SwitchProps> = (props) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    // props.changeHandler(event.currentTarget.value)
    console.log(event.target.value)
  }

  return (
    <label className="switch">
      <input
        type="checkbox"
        value={props.id}
        onChange={(e) => handleChange(e)}
        checked={props.checked}
      />
      <div className="slider round"></div>
    </label>
  )
}

export default Switch
