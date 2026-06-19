import { useNavigate } from "react-router-dom"
import video from "../assets/videos/no result found.webm"
import ButtonOutline from "../components/common/buttons/ButtonOutline"

const NotFound = ({message = "not found", goBack = true}: {message?: string, goBack?: boolean}) => {
    const navigate = useNavigate()
    return (
        <>
            <div className='w-screen min-h-screen flex flex-col justify-center items-center py-30'>
                <video src={video} width={'300px'} className='border-t-2 opacity-40' autoPlay loop muted playsInline></video>
                <p className="text-(--text-muted) mb-4 capitalize">{message}</p>
                {
                    goBack && <ButtonOutline value="Go Back" onClick={() => navigate(-1)} />
                }
            </div>
        </>
    )
}

export default NotFound