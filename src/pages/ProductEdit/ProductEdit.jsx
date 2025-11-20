import { Box, Button, IconButton, Stack, TextField } from '@mui/material'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {  useParams } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import { getProductDataActionInitiate } from '../../Redux/Action/getProductAction'
import { updateProductDataActionInitiate } from '../../Redux/Action/updateProductAction'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
// import HomeIcon from '@mui/icons-material/HomeIcon';
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
    category: '',
    image: ''
  });
  const navigate = useNavigate();
  const { id } = useParams();
  const getproductdata = useSelector((state) => state.getproductdata.data);
  const dispatch = useDispatch();

  const handleBack = () => {
    navigate(-1);
  }
  const handleChange = e => {
    setProduct({ ...product, [e.target.name]: e.target.value })
  }
  const handleUpdate = () => {
    dispatch(updateProductDataActionInitiate(product, id))
    navigate('/products')
  }
  useEffect(() => {
    dispatch(getProductDataActionInitiate(id));
  }, [dispatch]);

  useEffect(() => {
    if (getproductdata) {
      setProduct(getproductdata)
    }
  }, [getproductdata])
  return (
    <div style={{ display: 'flex', justifyContent: 'center' }}>
      <Box component="form" sx={{
        display: 'flex',
        justifyContent: 'center',
        mb:5
      }}>
        <Box sx={{
          mt: 5,
          py: 2,
          px: 2,
          boxShadow: '0px 0px 0px 2px rgba(0, 0, 0, 0.2)',
          gap: 2,
          display: 'grid',
          color: '#000000',
          bgcolor: '#EFE9E3',
          borderRadius: 5,
          width: 'auto',
          maxWidth: 500,
          height: 'auto',
          maxHeight: 600,
        }}>
          <h3>Enter Details</h3>
          <div>
            <img src={product.image} width='100' height='100' />
          </div>
          <div sx={{
            display: 'flex',
            m: 2,
            p: 2
          }}>
            {/* <label for='outlined-required'>Name</label> */}
            <TextField
              required
              sx={{ bgcolor: '#F4F4F4', m: 1 }}
              id="outlined-required"
              name='title'
              value={product.title}
              onChange={handleChange}
              label="Title"
              size="small"
            />

            <TextField
              sx={{ bgcolor: '#F4F4F4', m: 1 }}
              required
              id="outlined-required"
              label='price'
              name='price'
              onChange={handleChange}
              value={product.price}
              size="small"
            />
          </div>
          <div sx={{
            display: 'flex',
            m: 5
          }}>
            <TextField
              sx={{ bgcolor: '#F4F4F4', m: 1 }}
              required
              id="outlined-required"
              name='category'
              value={product.category}
              onChange={handleChange}
              label='category'
              size="small"
            />
            <TextField
              sx={{ bgcolor: '#F4F4F4', m: 1 }}
              required
              id="outlined-required"
              name='description'
              value={product.description}
              onChange={handleChange}
              label='Description'
              size="small"
            />
            <TextField
              sx={{ bgcolor: '#F4F4F4', m: 1,width:'100%' }}
              required
              id="outlined-required"
              name='image'
              value={product.image}
              onChange={handleChange}
              label='image'
              size="small"
            />
          </div>
          <Stack direction='row' spacing={3} sx={{ justifyContent: 'center' }}>
            
            <Button startIcon={<ArrowBackIcon />} sx={{bgcolor:'#C9B59C'}} size="small" variant='contained' onClick={handleBack}>Back</Button>
            <Button sx={{bgcolor:'#C9B59C'}} size='small' variant='contained' onClick={handleUpdate} >Edit Details</Button>
            {/* <Button sx={{bgcolor:'#C9B59C'}} variant='contained' onClick={handleDelete}>DELETE</Button> */}
          </Stack>
        </Box>

      </Box>
    </div>
  )
}

export default ProductEdit