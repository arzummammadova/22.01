import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { fetchProducts } from '../redux/features/productsSlice'

const Details = () => {

    const products=useSelector((state)=>state.products.products)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(fetchProducts())
    }, [dispatch])

   const {id}=useParams()
    const selected=products.find((item)=>item._id==id)
  return (
    <>

    <div className="container">
          <h1>Details</h1>
          <p>{selected.name}</p>
          <img src={selected.image} alt="" />
    </div>

  
      
    </>
  )
}

export default Details
