import { FaLocationArrow, FaEnvelope, FaPaperPlane } from "react-icons/fa"
import Button from "../common/buttons/Button"
import Input from "../common/input/Input"
import { useRef, type FormEvent } from "react"
import emailjs from "@emailjs/browser"
import toast from "react-hot-toast"
import { useGSAP } from "@gsap/react"
import triggerFade from "../../animations/triggerFade"
import Textarea from "../common/input/Teaxtarea" // Kept your project's original spelling 'Teaxtarea'

const ContactForm = () => {
    const form = useRef<HTMLFormElement>(null)

    const sendMail = (e: FormEvent) => {
        e.preventDefault()

        if (!form.current) return

        emailjs.sendForm(
            import.meta.env.VITE_EMAIL_SERVICE_ID,
            import.meta.env.VITE_EMAIL_TEMPLATE_ID,
            form.current,
            import.meta.env.VITE_EMAIL_PUBLIC_KEY
        )
            .then(() => {
                toast.success("Message sent successfully")
                form?.current?.reset()
            })
            .catch((error) => {
                console.log(error)
                toast.error("Failed to send message")
                form?.current?.reset()
            })
    }

    useGSAP(() => {
        triggerFade({
            target: ".inputs",
            trigger: ".inputs",
            direction: "left",
            distance: 400,
            start: "top bottom",
            end: "+=300",
        })

        triggerFade({
            target: ".inputBtn",
            trigger: ".inputBtn",
            direction: "right",
            distance: 150,
            start: "top bottom",
            end: "+=200",
        })
    }, { scope: form })

    return (
        // Outer wrapper: takes full width on mobile, max-width on desktop
        <div className="w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-6 md:py-12">
            
            {/* Card Body: properly flows edge-to-edge on small screens with rounded corners */}
            <div className="w-full grid grid-cols-1 lg:grid-cols-12 overflow-hidden rounded-2xl md:rounded-3xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 shadow-xl shadow-neutral-100 dark:shadow-none">
                
                {/* Left Side: Header Info Panel */}
                <div className="lg:col-span-5 bg-linear-to-br from-neutral-50 to-neutral-100 dark:from-neutral-900 dark:to-neutral-950 p-6 sm:p-10 lg:p-12 flex flex-col justify-between border-b lg:border-b-0 lg:border-r border-neutral-200 dark:border-neutral-800">
                    <div className="space-y-4 md:space-y-6">
                        <div className="inline-flex items-center justify-center w-11 h-11 rounded-xl bg-neutral-900 dark:bg-neutral-100 text-white dark:text-neutral-900 shadow-sm">
                            <FaEnvelope className="w-4 h-4" />
                        </div>
                        <div className="space-y-2">
                            <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-neutral-900 dark:text-white">
                                Get in touch
                            </h2>
                            <p className="text-neutral-500 dark:text-neutral-400 text-sm leading-relaxed">
                                Have a question or want to work together? Drop a message and I'll get back to you as soon as possible.
                            </p>
                        </div>
                    </div>

                    <div className="mt-6 pt-4 border-t border-neutral-200 dark:border-neutral-800 hidden lg:block">
                        <div className="flex items-center gap-3 text-xs tracking-wider text-neutral-400 uppercase font-semibold">
                            <FaPaperPlane className="animate-pulse" />
                            <span>Typically replies within 24 hours</span>
                        </div>
                    </div>
                </div>

                {/* Right Side: Form Element */}
                <form
                    ref={form}
                    onSubmit={sendMail}
                    className="lg:col-span-7 p-6 sm:p-10 lg:p-12 flex flex-col justify-center contactForm space-y-5 md:space-y-6"
                >
                    {/* Input field layout adjusts dynamically from 1 col to 2 cols */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 md:gap-6">
                        <div className="inputs w-full">
                            <Input
                                label="Full Name"
                                name="name"
                                required
                            />
                        </div>

                        <div className="inputs w-full">
                            <Input
                                label="Email Address"
                                name="email"
                                type="email"
                                required
                            />
                        </div>
                    </div>

                    {/* Message Field */}
                    <div className="inputs w-full">
                        <Textarea
                            label="Your Message"
                            name="message"
                            required
                        />
                    </div>

                    {/* Button container: buttons snap full-width on tiny displays */}
                    <div className="inputBtn pt-2 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                        <p className="text-xs text-neutral-400 dark:text-neutral-500 order-2 sm:order-1 text-center sm:text-left">
                            By submitting, you agree to our privacy handling.
                        </p>
                        <div className="order-1 sm:order-2 w-full sm:w-auto">
                            <Button
                                value="Send Message"
                                Icon={FaLocationArrow}
                                type="submit"
                                className="w-full sm:w-48 justify-center"
                            />
                        </div>
                    </div>
                </form>

            </div>
        </div>
    )
}

export default ContactForm