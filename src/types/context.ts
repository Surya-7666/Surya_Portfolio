import type React from "react"

export interface sliderContextProps{
    sliderStat: boolean 
    setSliderStat: React.Dispatch<React.SetStateAction<boolean>>
}