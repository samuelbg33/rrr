import { useContext } from 'react'
import { XMarkIcon } from '@heroicons/react/16/solid'
import { Link } from 'react-router-dom'
import OrderCard from '../OrderCard'
import './style.css'
import {totalPrice} from '../../Utils'
import { ShoppingCartContext } from "../Context"


const CheckoutSideMenu = () => {
    const context = useContext(ShoppingCartContext)

    const handleDelete = (id) => {
        const filteredProducts = context.cartProducts.filter(product => product.id != id)
        context.setCartProducts(filteredProducts)
    }

    const handleCheckout = () =>{
        const orderToAdd={
            date:'01.02,23',
            Products: context.cartProducts,
            totalProducts: context.cartProducts.length,
            totalPrice: totalPrice(context.cartProducts)
        }

        context.setOrder([...context.order, orderToAdd])
        context.setCartProducts([])
    }

    return (
        <aside 
         className={`${context.isCheckoutSideMenuOpen ? 'flex':'hidden'} checkout-side-menu flex-col fixed right-0 border border-black rounded-lg bg-white`}>
            <div className='flex justify-between items-center p-6'>
                <h2 className='font-medium text-xl'>My Order</h2>
                <div>
                    <XMarkIcon 
                     className='h-6 w-6 text-black cursor-pointer'
                     onClick={() => context.closeCheckoutSideMenu()}></XMarkIcon>
                </div>
                <div className='px-6 overflow-y-scroll fled '>
                    {
                       context.cartProducts.map((product)=>(
                          <OrderCard  
                             key={product.id}
                             id={product.id }
                             title={product.title}
                             imageUrl={product.images}
                             price={product.price}
                             handleDelete={handleDelete}

                            />
                        ))
                    
                    }

                </div>
            </div>
            <div className='px-6 mb-2'>
                <p className='flex justify-between items-center'>
                    <span className='font-light'>Total:</span>
                    <span className='font-medium text-2xl'>${totalPrice(context.cartProducts)}</span>
                </p>
                <Link to={'/my-orders/last'}> 
                <button className='bg-black py-3 text-white w-full rounded-lg' onClick={() => handleCheckout()}>Checkout</button>
                </Link>
            
            </div>
        </aside>
    )
}

export default CheckoutSideMenu