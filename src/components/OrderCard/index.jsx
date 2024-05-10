import { XMarkIcon } from '@heroicons/react/16/solid'

const OrderCard = props => {
    const{i,title,imageUrl,price} =props


    return(
        <div className=" flex justify-between items-center">
            <div className='flex items-center gap-2' >
                <figure className='w-20 h-20' >

                    <img className='w-full h-fill rounded-lg object-cover' src= {imageUrl} alt={title} />
                </figure>
                <p className='text-sm font-light' >{title}</p>
            </div>
            <div className='flex items-center gap-2'>
                <p className='text-sm font-medium' >{price}</p>
                <XMarkIcon className='h-6 w-6 text-black cursor-pointer'></XMarkIcon>

            </div>
        </div>
    )

}
export default OrderCard