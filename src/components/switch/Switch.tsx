import { ChangeEvent, FC, useEffect, useState } from "react"

import "./Switch.scss"

export interface SwitchChangeProps {}

interface SwitchProps {
  checked: boolean
  id?: number
  changeHandler: (value: boolean, id?: number) => void
}

const Switch: FC<SwitchProps> = (props) => {
  const [checked, setChecked] = useState<boolean>(props.checked)

  const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
    props.changeHandler(props.checked, Number(event.currentTarget.value))
  }

  useEffect(() => {
    setChecked(props.checked)
  }, [props.checked])

  return (
    <label className="switch">
      <input
        type="checkbox"
        value={props.id}
        onChange={(e) => handleChange(e)}
        checked={checked}
      />
      <div className="slider round"></div>
    </label>
  )
}

export default Switch
