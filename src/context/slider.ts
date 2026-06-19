import { createContext } from "react";
import type { sliderContextProps } from "../types/context";

const SliderContext = createContext<sliderContextProps | null>(null);

export default SliderContext
