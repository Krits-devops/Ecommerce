import React from 'react'
import toast from 'react-hot-toast';
import { useDispatch, useSelector } from 'react-redux'
import {add , remove} from '../redux/CartSlice'

function Product({post}) {

    const {cart} = useSelector(state => state);
    const dispatch = useDispatch();

    const addToCart = ()=>{
        dispatch(add(post))
        toast.success('Item added to cart');
    }

    const removeFromCart= ()=>{
        dispatch(remove(post.id))
        toast.error('Item removed from cart');
    }


  return (
    <div>
        <div>
            <p>{post.title}</p>
        </div>
        <div>
            <p>{post.description}</p>
        </div>
        <div>
            <img src={post.image}/>
        </div>
        <div>
            <p>{post.price}</p>
        </div>
       {
         cart.some((p) => p.id === post.id) ?
         (<button
         onClick={removeFromCart}>
            Remove Item
        </button>) :
        (<button
        onClick={addToCart}>
            Add to Cart
        </button>)

       }
    </div>
  )
}

export default Product