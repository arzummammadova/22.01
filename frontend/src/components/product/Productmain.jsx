import React, { useEffect } from 'react'
import './product.scss'
import { CiHeart } from "react-icons/ci";
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from '../../redux/features/productsSlice';
import { addtobasket } from '../../redux/features/basketSlice';
import { useNavigate } from 'react-router-dom';

const Productmain = () => {

    const products = useSelector((state) => state.products.products)
    const basket = useSelector((state) => state.basket.basket)
    //  console.log(basket)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(fetchProducts())
    }, [dispatch])
    // console.log(products)
    const baskets = useSelector((state) => state.basket.basket)

    console.log(baskets)

    const addTobasket = (product) => {
        dispatch(addtobasket(product))
    }

    const navigate=useNavigate()

    const godetail=(id)=>{
        navigate(`/details/${id}`)
        }
    return (
        <>
            <section>
                <div className="container-p">
                    <div className="products">
                        <div className="titles">
                            <h2>Popular Items</h2>
                            <p>Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida.</p>
                        </div>

                        <div className="pro-cards">

                            {
                                products.length > 0 ? (
                                    products.slice(0, 6).map((product) => (
                                        <div className="pro-card" key={product._id} onClick={()=>godetail(product._id)}>

                                            <figure>
                                                <CiHeart size={25} className='heart' />

                                                <img src={product.image} alt="" />



                                            </figure>

                                            <div className="text" style={{ textAlign: "center" }}>

                                                <h3>
                                                    {product.name}
                                                </h3>
                                                <p>{product.price}</p>

                                                <button className='btn btn-danger' onClick={() => { addTobasket(product) }}>add to card</button>
                                            </div>





                                        </div>

                                    ))
                                ) : ("no products")
                            }

                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}

export default Productmain
