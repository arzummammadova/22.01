import React from 'react'
import Card from '../card/Card'
import './products.scss'
const Products = () => {
    return (
        <>
            <section id='products'>
                <div className="container-p">
                    <div className="products">
                      <h2>New Arrivals</h2>
                    <div className="p-cards">
                        <Card />
                        <Card />
                        <Card />
                    </div>  
                    </div>
                    

                </div>

            </section>

        </>
    )
}

export default Products
