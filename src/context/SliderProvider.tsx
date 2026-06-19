import { useState, type ReactNode } from "react";
import SliderContext from "./slider"

const SliderProvider = ({ children }: { children: ReactNode }) => {
    const [sliderStat, setSliderStat] = useState(false)
    return (
        <>
            <SliderContext.Provider value={{ sliderStat, setSliderStat }}>
                {children}
            </SliderContext.Provider>
        </>
    )
}

export default SliderProvider