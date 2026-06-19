import { CgMail } from "react-icons/cg"
import { FaLocationCrosshairs } from "react-icons/fa6"

const Footer = () => {


    return (
        <>
            <div className="overflow-hidden">
                <footer style={{ background: "var(--gradient-primary)" }} className="py-3 rounded-full mb-2 mx-1.5 md:mx-7 flex justify-between items-center flex-wrap ">
                    <div className="flex items-center gap-2 px-5">
                        <CgMail size={25} />
                        <h2>surya1237890@gmail.com</h2>
                    </div>
                    <div className="flex items-center gap-2 px-5">
                        <FaLocationCrosshairs />
                        <h2>Tirunelveli, Tamilnadu</h2>
                    </div>
                </footer>
            </div>
        </>
    )
}

export default Footer