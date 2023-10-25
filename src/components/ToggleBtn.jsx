import { useState } from "react"

const ToggleBtn = () => {

    const [isToggle, setIsToggle] = useState(false)

    const handle = () => {
        setIsToggle(!isToggle)
    }

    return (
        <>
            <label htmlFor="togglebtn">
                <input type="checkbox" name="togglebtn" onChange={handle} />
            </label>

            <span>{isToggle ? "on" : "off"}</span>
        </>
    )
}

export default ToggleBtn