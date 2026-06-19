import { useContext } from "react";
import SliderContext from "../context/slider";
import type { sliderContextProps } from "../types/context";

const useSlider = (): sliderContextProps | null => {
    const context = useContext(SliderContext)
    if (!context) return null;
    return context;
}

export default useSlider
