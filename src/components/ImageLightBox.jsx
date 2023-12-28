import { useState } from "react";
import closeIcon from '../images/icon-close.svg'
import { imagesMobile } from './images'
import prev from '../images/icon-previous.svg'
import next from '../images/icon-next.svg'

const ImageLightBox = ({ handleLightBox }) => {
    const [curSlide, setCurSlide] = useState(0);
    console.log(curSlide)
    const handleNextSlide = () => {
        setCurSlide((prevSlide) => (prevSlide + 1) % 4);

    }

    const handlePrevSlide = () => {
        setCurSlide(prevState => (prevState - 1 + imagesMobile.length) % imagesMobile.length);
    }

    const handleThumbnail = (slideIndex) => {
        setCurSlide(slideIndex)
    }

    const handleCloseLightBox = () => {
        handleLightBox()
    }


    return (
        <div className='w-full top-0 right-0 fixed flex flex-col items-center gap-4 pt-20 h-screen overflow-hidden' style={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}>

            <div className="flex flex-col w-4/12 gap-4    px-8 items-end relative">
                <button onClick={handleCloseLightBox} className='w-fit outline-none'><img src={closeIcon} alt="close" /> </button>
                <div className="flex flex-col justify-center items-center">
                    <div className="flex overflow-hidden">
                        {imagesMobile.map((item, idx) => {
                            return (
                                <img key={idx} className="rounded-2xl duration-700 ease-in-out -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" style={{ transform: `translateX(-${curSlide * 100}%)` }} src={item.image} alt="" aria-label="true"></img>
                            )
                        })}

                    </div>
                    <div className=" w-full flex  justify-between absolute">
                        <button onClick={handlePrevSlide} className="w-12 h-12 bg-white rounded-full flex items-center justify-center outline-none" aria-label='prev'><img className="w-3" src={prev}></img></button>
                        <button onClick={handleNextSlide} className="w-12 h-12 bg-white rounded-full flex items-center justify-center outline-none" aria-label='next'><img className="w-3" src={next}></img></button>
                    </div>
                </div>
            </div>

            <div className='flex gap-4'>
                {imagesMobile.map((item, idx) => {
                    return (
                        <img key={idx} onClick={() => handleThumbnail(idx)} className='cursor-pointer flex gap-4 rounded-xl w-20 hover:opacity-60' src={item.thumbnail} alt="" aria-label="true"></img>
                    )
                })}

            </div >
        </div>
    )
}

export default ImageLightBox
