import { Box, Button, Stack, TextField } from '@mui/material'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import { addProductDataActionInitiate, addProductDataError, addProductDataStart } from '../../Redux/Action/addProductAction'
import { addProductDataApi } from '../../Redux/Api/addProductApi'
const linkStyle = {
    color: "white",
    textDecoration: "none",
    display:'flex',
    fontSize: "12px",
}

const ProductForm = () => {
  const [product,setProduct]=useState({
    title:'',
    price:'',
    description:'',
    category:''
  })
  
  const handleChange=e=>{
    setProduct({...product,[e.target.name]:e.target.value})
  }
  const navigate=useNavigate();
  
  const dispatch=useDispatch();
  const submitHandle = async () => {
        const { title, price, description,category} = product
               
                if (!title || !price || !description || !category) {
                    alert("please give all input fields")
                } else {
                    const newdata = { ...product };
                    try {
                        dispatch(addProductDataActionInitiate(newdata));
                    } catch (error) {
                        dispatch(addProductDataError(error));
                    }
                }
                navigate(-1);
        }
  return (
    <div>
      <Box component="form" sx={{
        mt: 5,
        ml: 45,
        py: 2,
        gap: 2,
        display: 'grid',
        border: '2px solid grey',
        width: '500px',
        height: '300px',
        justifyContent: 'center',
      }}>
        <h3>Enter Details</h3>
        <div sx={{
          display: 'grid',
          gap: 1,
          m: 2,
        }}>
          <TextField
            required
            id="outlined-required"
            label="Enter Product Title"
            name="title"
            value={product.title}
            onChange={handleChange}
          />
          <TextField
            required
            id="outlined-required"
            label="Enter price"
            name='price'
            onChange={handleChange}
            value={product.price}
          />
        </div>
        <div sx={{
          display: 'flex',
          spacing: 2
        }}>
          <TextField
            required
            id="outlined-required"
            label="category"
            name="category"
            value={product.category}
            onChange={handleChange}
          />
          <TextField
            required
            id="outlined-required"
            label="Description"
            name="description"
            value={product.description}
            onChange={handleChange}
          />
        </div>
        <Stack direction='row' spacing={3} sx={{justifyContent:'center'}}>        
          <Link to='/' style={linkStyle} ><Button variant='contained'>Go Back</Button></Link>
          <Button variant='contained' onClick={submitHandle} >Add</Button>
        </Stack>
      </Box>
    </div>
  )
}

export default ProductForm