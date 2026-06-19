import SubHeading from "../components/common/headings/SubHeading"
import Heading from "../components/common/headings/Heading"
import { previewData } from "../data/data"
import ContactForm from "../components/contact/ContactForm"
import useGSAPHeading from "../hooks/useGSAPHeading"
import { useRef } from "react"
import ContactCard from "../components/contact/ContactCard"

const Contact = () => {
    const contact = useRef(null)

    useGSAPHeading(".contactHeading", contact)
    useGSAPHeading(".contactFormHeading", contact)

    return (
        <>
            <section ref={contact} className="min-h-screen py-20 px-4 max-w-7xl mx-auto">
                <div className="mb-10 contactHeading">
                    <Heading title="Contact Me" center className="scale-130" />
                </div>
                
                {/* Main container: Ensures full width on layout columns */}
                <div className="flex gap-12 md:gap-20 flex-wrap flex-col justify-center items-center w-full">
                    
                    {/* Top Row: Contact Cards */}
                    <div className="flex flex-wrap justify-center gap-6 w-full">
                        {
                            previewData.map((data, index) => (
                                <ContactCard key={index} Icon={data.Icon} title={data.title} data={data.data} />
                            ))
                        }
                    </div>
                    
                    {/* Bottom Row: Contact Form wrapper expanded to stretch out */}
                    <div className="shadow-(--shadow-md) py-7 w-full max-w-4xl">
                        <div className="contactFormHeading">
                            <SubHeading title="Send Message" center />
                        </div>
                        {/* Dynamic padding: px-2 on mobile so it doesn't get squished, px-10 on bigger screens */}
                        <div className="px-2 sm:px-6 md:px-10 my-3 w-full">
                            <ContactForm />
                        </div>
                    </div>

                </div>
            </section>
        </>
    )
}

export default Contact