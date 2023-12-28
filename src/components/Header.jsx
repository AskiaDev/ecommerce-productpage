import menu from '../images/icon-menu.svg';
import cartIcon from '../images/icon-cart.svg';
import profileIcon from '../images/image-avatar.png';
import iconClose from '../images/icon-close.svg'
import { useState } from 'react';
import { useCart } from './CartContext';
import { imagesMobile } from './images';
import deleteIcon from '../images/icon-delete.svg'
const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [isCartOpen, setIsCartOpen] = useState(false);

    const { total, cart, quantity, dispatch } = useCart();

    function handleMenu() {
        setMenuOpen(prevState => !prevState)
        setIsCartOpen(false)
    }

    function handleCart() {
        setIsCartOpen(prevState => !prevState)
    }

    function handleRemoveItem(id) {
        dispatch({ type: "REMOVE_ITEM", payload: { itemId: id } })
        setIsCartOpen(false)
    }

    return (

        <>
            <div className="bg-white lg:border-b-2 lg:border-b-gray-300 w-full lg:w-10/12 h-16 p-4 flex justify-between items-center">
                <div className='flex items-center gap-4'>
                    <img onClick={handleMenu} src={menu} alt='menu' className="mr-2 md:hidden cursor-pointer" />
                    <h1 className='lg:pb-6 lg:mt-4 font-kumbhSans font-black'>SNEAKERS</h1>
                    <div className=' items-center justify-center hidden lg:flex '>
                        <ul className='flex gap-7 lg:mt-4 text-darkGrayish text-md '>
                            <li className='border-b-2 border-b-gray-300 hover:border-b-2 pb-6 hover:border-b-orange'>Collections</li>
                            <li className=' border-b-2 border-b-gray-300 hover:border-b-2 pb-6 hover:border-b-orange'>Men</li>
                            <li className='border-b-2 border-b-gray-300 hover:border-b-2 pb-6 hover:border-b-orange'>Women</li>
                            <li className='border-b-2 border-b-gray-300 hover:border-b-2 pb-6 hover:border-b-orange'>About</li>
                            <li className='border-b-2 border-b-gray-300 hover:border-b-2 pb-6 hover:border-b-orange'>Contact</li>
                        </ul>
                    </div>
                </div>
                <div className='flex items-center gap-4'>
                    {cart.length !== 0 && <span className='px-2  font-bold text-xs text-white bg-orange rounded-xl absolute top-3 right-12  md:right-[14%] lg:top-3 lg:right-44 '>{cart.length}</span>}
                    <img onClick={handleCart} className='cursor-pointer' src={cartIcon} alt='cart' />
                    <img src={profileIcon} alt='profile' className='w-6' />
                </div>
            </div>
            {menuOpen && <div className='h-screen w-full z-10 top-0 fixed' style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>
                <div className='absolute p-4 bg-white h-screen w-[65%] '>
                    <img onClick={handleMenu} src={iconClose} alt='close' className='cursor-pointer' />
                    <ul className='flex flex-col  gap-4'>
                        <li className=' font-bold font-kumbhSans'>Collections</li>
                        <li className=' font-bold font-kumbhSans'>Men</li>
                        <li className=' font-bold font-kumbhSans'>Women</li>
                        <li className=' font-bold font-kumbhSans'>About</li>
                        <li className=' font-bold font-kumbhSans'>Contact</li>
                    </ul>
                </div>
            </div>}
            {isCartOpen && <div className=' fixed top-[25%] rounded-md left-[50%] lg:h-[27%] -translate-x-1/2 w-[60%] md:w-[30%] md:top-[20%] md:left-[65%] lg:left-[75%] lg:w-[20%] max-w-full max- -translate-y-1/2 shadow-lg bg-white z-30 '>
                <div className='p-4 '>
                    <h1 className='font-kumbhSans font-bold'>Cart</h1>
                </div>
                <hr className='w-full' />
                <div className='flex flex-col  justify-center p-4'>
                    {cart.length === 0 && <h1 className='text-center font-kumbhSans font-bold text-darkGrayish '>Your cart is empty</h1>}
                    {cart.length !== 0 &&
                        <>
                            <div className='flex items-center gap-3'>
                                <img src={imagesMobile[0].thumbnail} alt='cart' className='w-[50px] rounded-lg' />
                                <div className='flex w-full flex-col'>
                                    <span className='text-sm font-kumbhSans text-gray-500'>Fall Limited Sneakers</span>
                                    <span className='flex gap-2 items-center'>
                                        <p className='font-kumbhSans text-gray-500'>$125 x {quantity} </p>
                                        <p className='font-kumbhSans font-bold'>${total}</p>
                                    </span>
                                </div>
                                <img onClick={() => handleRemoveItem(cart[0].id)} src={deleteIcon} alt='delete' className='cursor-pointer' />
                            </div>
                            <button className='bg-orange text-white font-kumbhSans font-bold rounded-lg py-3 mt-4'>Checkout</button>
                        </>
                    }
                </div>
            </div>}
        </>
    );
}

export default Header;
