import { Box, Button, Stack, TextField } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useParams } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import { getProductDataActionInitiate } from '../../Redux/Action/getProductAction'
const linkStyle = {
  color: "white",
  textDecoration: "none",
  display: 'flex',
  fontSize: "12px",
}
const ProductEdit = () => {
  const [product, setProduct] = useState({
    title: '',
    price: '',
    description: '',
    category: ''
  });
  const navigate = useNavigate();
  const { id } = useParams();
  const getproductdata = useSelector((state) => state.getproductdata.data);
  const dispatch = useDispatch();


  
  const handleBack = () => {
    navigate(-1);
  }
  const handleChange=e=>{
    setProduct({...product,[e.target.name]:e.target.value})
  }

  const handleUpdate = () => {
    navigate('/products')
  }
  useEffect(() => {
    dispatch(getProductDataActionInitiate(id));
  }, [id]);

  useEffect(() => {
    if (getproductdata) {
      setProduct(getproductdata)
    }
  }, [getproductdata])
  return (
    <div style={{ display: 'flex', justifyContent: 'center' }}>
      <Box component="form" sx={{
        mt: 5,
        p: 2,
        border: '2px solid grey',
        width: 'auto',
        maxWidth: 600,
        height: 'auto',
      }}>
        <h3>Enter Details</h3>
        <img src={product.image} width='100' height='100' />
        <div sx={{
          display: 'flex',
          m: 2,
          p: 2
        }}>
          {/* <label for='outlined-required'>Name</label> */}
          <TextField
            required
            id="outlined-required"
            name='title'
            value={product.title}
            onChange={handleChange}
            label="Title"
          />

          <TextField
            required
            id="outlined-required"
            label='price'
            name='price'
            onChange={handleChange}
            value={product.price}
          />
        </div>
        <div sx={{
          display: 'flex',
          m: 5
        }}>
          <TextField
            required
            id="outlined-required"
            name='category'
            value={product.category}
            onChange={handleChange}
            label='category'
          />
          <TextField
            required
            id="outlined-required"
            name='description'
            value={product.description}
            onChange={handleChange}
            label='Description'
          />
        </div>
        <Stack direction='row' spacing={3} sx={{ justifyContent: 'center' }}>
          <Button variant='contained' onClick={handleBack}>Goo Back</Button>
          <Button variant='contained' onClick={handleUpdate} >Update</Button>
        </Stack>
      </Box>
    </div>
  )
}

export default ProductEdit