import "./style/global.css"
import Portfolio from "./routes/Portfolio"  
import { useEffect } from "react"
import LenisLib from "./lib/lenis"
import { ScrollTrigger } from "gsap/ScrollTrigger"

const App = () => {

  useEffect(() => {
    const lenis = LenisLib();
    lenis?.scrollTo(0, { duration: 1.2 });

    const timer = setTimeout(() => {
      ScrollTrigger.refresh();
    }, 250);

    return () => {
      clearTimeout(timer);
      lenis?.destroy();
    }
  }, [])

  return (
    <>
      
      <Portfolio />
    </>
  )
}

export default App