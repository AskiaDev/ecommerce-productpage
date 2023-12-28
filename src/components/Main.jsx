import ProductImage from './ProductImage'
import Description from './Description'

const Main = () => {
    return (
        <div className='flex flex-col lg:flex-row lg:gap-[100px] lg:w-10/12	lg:mx-auto'>
            <ProductImage />
            <Description />
        </div>
    )
}

export default Main
