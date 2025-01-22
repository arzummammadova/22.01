import React, { useEffect } from 'react'
import './table.scss'
import { useDispatch, useSelector } from 'react-redux'
import { createProducts, deleteProducts, fetchProducts, sortlowtoHigh } from '../redux/features/productsSlice'
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

import { useFormik } from 'formik';
import schema from '../schema/validation';


const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

const Add = () => {
  const products = useSelector((state) => state.products.products)
  const dispatch = useDispatch()
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  useEffect(() => {
    dispatch(fetchProducts())
  }, [dispatch])
  const removeProduct = (id) => {
    dispatch(deleteProducts(id))

  }

  const formik = useFormik({
    initialValues: {
      name: '',
      image: '',
      price: '',
      description: ''
    },
    validationSchema:schema,
    onSubmit: values => {
    dispatch(createProducts(values))
    handleClose()
    },
  });

  const sortlw=()=>{
    dispatch(sortlowtoHigh())
  }
  // console.log(products)
  return (
    <>
      <div class="container">
        <h1>Add page</h1>
        <Button onClick={handleOpen}>create product</Button>
        <button className='btn-primary' onClick={()=>{sortlw()}}>low to high</button>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <Typography id="modal-modal-title" variant="h6" component="h2">
              create product
              <form onSubmit={formik.handleSubmit}>
                <input
                  id="name"
                  name="name"
                  type="text"
                  placeholder='ad'
                  onChange={formik.handleChange}
                  value={formik.values.name}
                />
                 {formik.errors.name ? <div style={{color:"red"}}>{formik.errors.name}</div> : null}
                <input
                  id="image"
                  name="image"
                  type="text"
                  placeholder='sekil'
                  onChange={formik.handleChange}
                  value={formik.values.image}
                />   
                           {formik.errors.image ? <div style={{color:"red"}}>{formik.errors.image}</div> : null}
                  <input
                  id="price"
                  name="price"
                  type="number"
                  onChange={formik.handleChange}
                  value={formik.values.price}
                />   
                           {formik.errors.price ? <div style={{color:"red"}}>{formik.errors.price}</div> : null}
                <input
                  id="description"
                  name="description"
                  type="text"
                  onChange={formik.handleChange}
                  value={formik.values.description}
                />
                           {formik.errors.description? <div style={{color:"red"}}>{formik.errors.description}</div> : null}
                <button type="submit" className='btn btn-danger'>create</button>
              </form>
            </Typography>

          </Box>
        </Modal>
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
              products.length > 0 ? (
                products.map((product) => (
                  <div class="table-row" key={product._id}>
                    <div class="table-data">{product.name}</div>
                    <div class="table-data">
                      <img style={{width:"80px",height:"80px"}}         src={product.image} alt="" />
                    </div>
                    <div class="table-data">{product.price}</div>
                    <div class="table-data">
                      {product.description}
                    </div>
                    <div class="table-data" >

                      <button className='btn btn-danger' onClick={() => { removeProduct(product._id) }}>
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


    </>
  )
}

export default Add
