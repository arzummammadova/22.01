import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import './table.scss'
import { deleteProduct } from '../redux/features/basketSlice'
const Basket = () => {

  const baskets = useSelector((state) => state.basket.basket)
  const dispatch=useDispatch()

  // console.log(baskets)
  const removeBasket=(id)=>{
    dispatch(deleteProduct(id))

}


  return (
    <div>



      <div class="container">
        <h1>Basket</h1>
        <div class="table">
          <div class="table-header">
            <div class="header__item"><a id="name" class="filter__link" href="#">Name</a></div>
            <div class="header__item"><a id="wins" class="filter__link filter__link--number" href="#">Image</a></div>
            <div class="header__item"><a id="draws" class="filter__link filter__link--number" href="#">price</a></div>
            <div class="header__item"><a id="losses" class="filter__link filter__link--number" href="#">count</a></div>
            <div class="header__item"><a id="total" class="filter__link filter__link--number" href="#">action</a></div>
          </div>
          <div class="table-content">

            {
              baskets.length > 0 ? (
                baskets.map((basket)=>(
                     <div class="table-row" key={basket._id}>
                  <div class="table-data">{basket.name}</div>
                  <div class="table-data">
                    <img src={basket.image} alt="" />
                  </div>
                  <div class="table-data">{basket.price}</div>
                  <div class="table-data">
                    {basket.count}
                  </div>
                  <div class="table-data" >

                    <button className='btn btn-danger' onClick={()=>{removeBasket(basket._id)}}>
                      delete
                    </button>
                  </div>
                </div>
                ))
             
              ) : ("mo prduct")
            }


          </div>
        </div>
      </div>


    </div>
  )
}

export default Basket
