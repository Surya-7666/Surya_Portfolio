import { useEffect, type ReactNode } from "react"
import useSlider from "../hooks/useSlider"
import SliderTransition from "../components/transitions/SliderTransition";
import ChildTransition from "../components/transitions/ChildTransition";

const Slider = ({ children }: { children: ReactNode }) => {


    const context = useSlider()


    const setSliderStat = context?.setSliderStat
    const sliderStat = context?.sliderStat

    useEffect(() => {

        if (!setSliderStat) return

        setSliderStat(true)

    }, [setSliderStat])

    if (sliderStat) {
        setTimeout(() => {
            context.setSliderStat(false)
        }, 1500)
    }

    return (
        <>
            {
                sliderStat ? <SliderTransition /> : <ChildTransition children={children} />
            }
        </>
    )
}

export default Slider