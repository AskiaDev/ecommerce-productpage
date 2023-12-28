import { useState } from "react";
import { imagesMobile } from "./images";
import nextImage from '../images/icon-next.svg';
import prevImage from '../images/icon-previous.svg';
import ImageLightBox from "./ImageLightBox";

const ProductImage = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [currentImage, setCurrentImage] = useState(imagesMobile[0].image);
    const [isOpen, setIsOpen] = useState(false);
    console.log(isOpen)

    function handleNextSlide() {
        setCurrentSlide(prevState => (prevState + 1) % imagesMobile.length);
    }

    function handlePrevSlide() {
        setCurrentSlide(prevState => (prevState - 1 + imagesMobile.length) % imagesMobile.length);
    }

    function handleLightBox() {
        setIsOpen(prevState => !prevState);
    }

    function handleSelectedImage(img) {
        setCurrentImage(img);
    }



    return (
        <>
            {/* Only render the image selector for larger screens */}
            <div className="border-7 items-center hidden md:flex md:flex-col md:gap-7 md:w-full px-16 lg:w-full lg:gap-10 lg:px-0 lg:mt-10">
                <div className="md:h-35 rounded-4xl" >
                    {isOpen && <ImageLightBox currentImage={currentImage} handleLightBox={handleLightBox} />}
                    <img onClick={handleLightBox} className="rounded-2xl md:mt-5 lg:h-80 md:w-80 cursor-pointer xl:h-96 xl:w-full" src={currentImage} alt="" aria-label="true" />
                </div>
                <div className="flex md:justify-center md:flex-wrap md:gap-5 md:h-auto md:w-auto lg:flex-nowrap lg:h-auto">
                    {imagesMobile.map((image, idx) => (
                        <img
                            src={image.thumbnail}
                            alt={image.thumbnail}
                            key={idx}
                            className="hover:opacity-50 active:opacity-70 active:border-Orange active:border-2 md:w-24 rounded-lg cursor-pointer border-Orange lg:w-16 xl:w-1/5"
                            onClick={() => handleSelectedImage(image.image)}
                        />
                    ))}
                </div>
            </div>
            {/* Image slider for small screens */}
            <div className="overflow-hidden relative z-0 md:hidden h-80">
                <div className="flex overflow-hidden z-0">
                    {imagesMobile.map((image, index) => (
                        <img
                            key={index}
                            src={image.image}
                            alt=""
                            className="duration-700 ease-in-out w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                            aria-hidden="true"
                            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
                        />
                    ))}
                </div>
                <div className="w-full px-3 flex justify-between absolute top-1/2">
                    <button onClick={handlePrevSlide} className="flex justify-center items-center w-8 h-8 outline-none rounded-full bg-white cursor-pointer">
                        <img src={prevImage} alt="next-image" />
                    </button>
                    <button onClick={handleNextSlide} className="flex justify-center items-center w-8 h-8 outline-none rounded-full bg-white cursor-pointer">
                        <img src={nextImage} alt="previous-image" />
                    </button>
                </div>
            </div>
        </>
    );
};

export default ProductImage;
