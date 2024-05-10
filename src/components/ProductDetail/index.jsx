import { useContext } from 'react'
import { XMarkIcon } from '@heroicons/react/16/solid'
import './styles.css'
import { ShoppingCartContext } from "../Context"


const productDetail = () => {
    const context = useContext(ShoppingCartContext)

    return (
        <aside 
         className={`${context.isProductDetailOpen ? 'flex':'hidden'} product-detail  flex-col fixed right-0 border border-black rounded-lg bg-white`}>
            <div className='flex justify-between items-center'>
                <h2 className='font-medium text-xl'>detail</h2>
                <div>
                    <XMarkIcon 
                    onClick={() => context.closeProductDetail()} 
                    className='h-6 w-6 text-black cursor-pointer'></XMarkIcon>
                </div>

            </div>
            <figure className='px-6'>
                <img className='w-full h-full rounded-lg '
                src={context.productToShow.images} 
                alt={context.productToShow.title} />
            </figure>
            <p className='flex flex-col p-6'>
                <span className='font-medium text-2xl'>${context.productToShow.price}</span>
                <span className='font-medium text-md'>{context.productToShow.title}</span>
                <span className='font-light text-sm'>{context.productToShow.description}</span>

            </p>
        </aside>
    )
}

export default productDetail