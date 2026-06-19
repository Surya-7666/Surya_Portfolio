import { useEffect } from "react";
import LenisLib from "../lib/lenis";

const useScrollToTop = () => {
    return (
        useEffect(() => {
            const lenis = LenisLib();
            lenis?.scrollTo(10);

            setTimeout(() => {
                ScrollTrigger.refresh();
            }, 1000);
        })
    )
}

export default useScrollToTop