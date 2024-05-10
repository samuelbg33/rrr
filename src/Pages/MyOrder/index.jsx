import Layout from "../../components/Layout"
import { useContext } from 'react'
import { ShoppingCartContext } from '../../components/Context'
import OrderCard from "../../components/OrderCard" 




function MyOrder() {
  const context = useContext(ShoppingCartContext)
  return (
    <Layout>
      Myorder

      <div className='px-6 overflow-y-scroll fled '>
          {
           context.order?.slice(-1)[0].Products.map(product)=>(
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
    </Layout>  
  
  )
}
  
  
  
  
export default MyOrder