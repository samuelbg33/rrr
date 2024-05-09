import { useContext } from 'react'
import { XMarkIcon } from '@heroicons/react/16/solid'
import './styles.css'
import { ShoppingCartContext } from "../Context"


const ProductDetail = () => {
    const context = useContext(ShoppingCartContext)

    return (
        <aside 
         className={`${context.isProductDetailOpen ? 'flex':'hidden'} product-detail  flex-col fixed right-0 border border-black rounded-lg bg-white`}>
            <div className='flex justify-between items-center'>
                <h2 className='font-medium text-xl'>detail</h2>
                <div>
                    <XMarkIcon className='h-6 w-6 text-black'></XMarkIcon>
                </div>

            </div>
        </aside>
    )
}

export default ProductDetail