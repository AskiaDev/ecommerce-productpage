import plusIcon from '../images/icon-plus.svg'
import minusIcon from '../images/icon-minus.svg'
import { useCart } from './CartContext'
import { useState } from 'react';

const Description = () => {
    const [counter, setCounter] = useState(0);

    const { addToCart } = useCart();

    function handleIncrease() {

        setCounter(prevState => prevState + 1);
    }

    function handleDecrease() {
        if (counter > 0) {
            setCounter(prevState => prevState - 1);
        } else {
            setCounter(0);
        }
    }

    function handleAddToCart() {
        if (counter === 0) return;
        addToCart(1, counter);
        setCounter(0);
    }

    return (
        <div className="p-4 flex lg:w-full flex-col justify-center">
            <h3 className=" text-sm tracking-wider uppercase text-orange font-kumbhSans font-bold">sneaker company</h3>
            <h1 className="font-kumbhSans font-bold my-4 text-xl">Fall Limited Edition Sneakers</h1>
            <p className="  text-darkGrayish ">
                These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they’ll withstand everything the weather can offer.
            </p>
            <div className="flex md:flex-col justify-between my-4">
                <div className="flex gap-2 items-center">
                    <h1 className="font-kumbhSans font-bold text-2xl">$125.00</h1>
                    <span className="bg-paleOrange px-2 rounded-md">
                        <p className="text-orange font-kumbhSans font-bold">50%</p>
                    </span>
                </div>
                <p className="text-grayishBlue line-through">$250.00</p>
            </div>
            <div className='flex flex-col items-center lg:gap-10 lg:flex-row'>
                <div className="flex w-full lg:w-1/3 p-3 rounded-md items-center bg-lightGrayishBlue justify-around">
                    <button onClick={handleDecrease}>
                        <img src={minusIcon} alt="minus" className='' />
                    </button>
                    <span className='font-kumbhSans font-bold'>
                        {counter}
                    </span>
                    <button onClick={handleIncrease}>
                        <img src={plusIcon} alt="minus" />
                    </button>
                </div>
                <button onClick={handleAddToCart} className='lg:w-1/2 w-full  flex justify-center items-center bg-orange my-4 rounded-lg gap-2'>
                    <svg width="22" height="20" xmlns="http://www.w3.org/2000/svg"><path d="M20.925 3.641H3.863L3.61.816A.896.896 0 0 0 2.717 0H.897a.896.896 0 1 0 0 1.792h1l1.031 11.483c.073.828.52 1.726 1.291 2.336C2.83 17.385 4.099 20 6.359 20c1.875 0 3.197-1.87 2.554-3.642h4.905c-.642 1.77.677 3.642 2.555 3.642a2.72 2.72 0 0 0 2.717-2.717 2.72 2.72 0 0 0-2.717-2.717H6.365c-.681 0-1.274-.41-1.53-1.009l14.321-.842a.896.896 0 0 0 .817-.677l1.821-7.283a.897.897 0 0 0-.87-1.114ZM6.358 18.208a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm10.015 0a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm2.021-7.243-13.8.81-.57-6.341h15.753l-1.383 5.53Z" fill="#FFFF" fillRule="nonzero" /></svg>
                    <p className="font-kumbhSans font-bold text-white py-2">Add to cart</p>
                </button>
            </div>
        </div>
    )
}

export default Description
