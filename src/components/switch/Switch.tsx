import { FC } from "react"

import "./Switch.scss"

type switchProps = {
  value?: boolean
  id: number
}

const Switch: FC<switchProps> = (props) => {
  const handleChange = (event: any) => console.log(event.target.value)
  return (
    <label className="switch">
      <input
        type="checkbox"
        value={props.id}
        onChange={handleChange}
        checked={props.value}
      />
      <div className="slider round"></div>
    </label>
  )
}

export default Switch
