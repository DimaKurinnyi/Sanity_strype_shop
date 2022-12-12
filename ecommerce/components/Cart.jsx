import React,{useRef} from 'react'
import Link from 'next/link'
import {AiOutlineMinus,AiOutlinePlus,AiOutlineLeft,AiOutlineShopping} from 'react-icons/ai'
import {TiDeleteOutline} from 'react-icons/ti'
import toast from 'react-hot-toast'

import {useStateContext} from '../context/StateContext'
import {urlFor} from '../lib/client'

function Cart() {
  const cartRef = useRef()
  const {totalPrice,totalQuantities,setShowCart,cartItems}= useStateContext()
  return (
    <div className='cart-wrapper' ref={cartRef}>
      <div className="cart-container">
        <button className="cart-heading"
        type='button'
        onClick={()=> setShowCart(false)}>
          <AiOutlineLeft/>
          <span className="heading">You cart</span>
          <span className="cart-num-items">({totalQuantities} items)</span>

        </button>
        {cartItems.length <1 &&(
          <div className="empty-cart">
            <AiOutlineShopping size={150}/>
            <h3>You shopping bag is empty</h3>
            <Link href='/'>
              <button className='btn'
              type='buton'
              onClick={()=> setShowCart(false)}
              > Continue shopping</button>
            </Link>
          </div>
        )}
      </div>
    </div>
  )
}

export default Cart

