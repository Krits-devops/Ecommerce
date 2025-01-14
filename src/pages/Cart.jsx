import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom';
import CartItem from '../components/CartItem';

function Cart() {

  const {cart} = useSelector((state)=> state);
  const [totalAmount, setTotalAmount] = useState(0);

  useEffect(()=>{
    setTotalAmount( cart.reduce((acc, curr)=> acc + curr.price, 0))
  },[cart])

  return (
    <div>
        {
          cart.length > 0 ?
          (<div>
            {
              cart.map((item,index)=>{
                return  <CartItem key={item.id} item={item} itemIndex={index}/>
              })
            }

            <div>
              <div>
                <div>Your Cart</div>
                <div>Summary</div>
                <p>
                  total items : {cart.length}
                </p>
              </div>

                <div>
                  <p>Total Amount : {totalAmount}</p>
                  <button>
                    CheckOut
                  </button>
                </div>

            </div>
            
          </div>) :
          (<div>
            <h2>Cart Empty</h2>
            <Link to={'/'}>
              <button>
                Shop Now
              </button>
            </Link>  
          </div>)
        }
    </div>
  )
}

export default Cart;