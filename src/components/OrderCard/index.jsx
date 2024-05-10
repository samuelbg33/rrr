import { XMarkIcon } from '@heroicons/react/16/solid'

const OrderCard = props => {
    const{id,title,imageUrl,price,handleDelete} =props
    let renderXMarkIcon
    if (handleDelete){
        renderXMarkIcon = <XMarkIcon onClick={() => handleDelete(is)}className='h-6 w-6 text-black cursor-pointer'></XMarkIcon>
    }


    return(
        <div className=" flex justify-between items-center mb-3">
            <div className='flex items-center gap-2' >
                <figure className='w-20 h-20' >

                    <img className='w-full h-fill rounded-lg object-cover' src= {imageUrl} alt={title} />
                </figure>
                <p className='text-sm font-light' >{title}</p>
                {renderXMarkIcon}
            </div>
             
        </div>
    )

}
export default OrderCard