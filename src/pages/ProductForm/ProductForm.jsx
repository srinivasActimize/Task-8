import { Box, Button, Stack, TextField} from '@mui/material'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { addProductDataActionInitiate, addProductDataError } from '../../Redux/Action/addProductAction'
import Snackbar from '@mui/material/Snackbar';

import ArrowBackIcon from '@mui/icons-material/ArrowBack';

const ProductForm = () => {
  const [product, setProduct] = useState({
    title: '',
    price: '',
    description: '',
    category: '',
    image: ''
  })

  const [open, setOpen] = useState(false);
  const handleBack = () => {
    navigate(-1)
  }
  const handleClose = ( reason) => {
    setOpen(false)
    if (reason === 'clickaway') {
      return;
    }
  }

  const handleChange = e => {
    setProduct({ ...product, [e.target.name]: e.target.value })
  }
  const navigate = useNavigate();

  const dispatch = useDispatch();
  const submitHandle = async () => {
    const { title, price, description, category } = product

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
    setOpen(true)
  }
  return (
    <div>
      <Box component="form"
        sx={{
          display: 'flex',
          justifyContent: 'center',
        }}>
        <Box sx={{
          mt: 5,
          boxShadow: '0px 0px 0px 2px rgba(0, 0, 0, 0.2)',
          py: 2,
          px: 2,
          gap: 2,
          display: 'grid',
          color: '#000000',
          bgcolor: '#EFE9E3',
          borderRadius: 5,
          width: 'auto',
          maxWidth: 500,
          height: 'auto',
          maxHeight: 400,
        }}>
          <h3>Enter Details</h3>
          <div sx={{
            display: 'grid',
          }}>

            <TextField
              sx={{ bgcolor: '#F4F4F4',m:1 }}
              required
              id="outlined-required"
              label="Enter Product Title"
              name="title"
              value={product.title}
              onChange={handleChange}
               size="small"
            />
            <TextField
              sx={{ bgcolor: '#F4F4F4',m:1 }}
              required
              id="outlined-required"
              label="Enter price"
              name='price'
              onChange={handleChange}
              value={product.price}
               size="small"
            />
          </div>
          <div sx={{
            display: 'flex',
            spacing: 2
          }}>
            <TextField
              sx={{ bgcolor: '#F4F4F4',m:1 }}
              required
              id="outlined-required"
              label="category"
              name="category"
              value={product.category}
              onChange={handleChange}
               size="small"
            />
            <TextField
              sx={{ bgcolor: '#F4F4F4',m:1 }}
              required
              id="outlined-required"
              label="Description"
              name="description"
              value={product.description}
              onChange={handleChange}
               size="small"
            />

          </div>
          <div >
            <TextField
              sx={{ bgcolor: '#F4F4F4', width: "100%"}}
              required
              id="outlined-required"
              label="Image"
              name="image"
              value={product.image}
              onChange={handleChange}
               size="small"
            />
          </div>
          <Stack direction='row' spacing={3} sx={{ justifyContent: 'center' }}>
            <Button startIcon={<ArrowBackIcon />} sx={{bgcolor:'#C9B59C'}} onClick={handleBack} variant='contained'>Back</Button>
            <Button sx={{bgcolor:'#C9B59C'}} variant='contained' onClick={submitHandle} >Add</Button>
          </Stack>
        </Box>

      </Box>
      <Snackbar
        open={open}
        autoHideDuration={5000}
        onClose={handleClose}
        message="Added successfully"
      />
    </div>
  )
}

export default ProductForm