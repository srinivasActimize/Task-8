import { useEffect, useState } from 'react'
import Typography from '@mui/material/Typography';
import { useParams } from 'react-router-dom';
import { Box, Button, IconButton } from '@mui/material';
import { getProductDataActionInitiate } from '../../Redux/Action/getProductAction';
import { useDispatch, useSelector } from 'react-redux';
import DeleteOutlineRoundedIcon from '@mui/icons-material/DeleteOutlineRounded';
import ModeEditOutlineOutlinedIcon from '@mui/icons-material/ModeEditOutlineOutlined';
import { useNavigate } from 'react-router-dom';
import { deleteProductDataActionInitiate } from '../../Redux/Action/deleteProductAction';
import Snackbar from '@mui/material/Snackbar';

const ProductDetails = () => {
  const [open, setOpen] = useState(false);
  const { id } = useParams();
  const navigate = useNavigate();

  const handleDelete = () => {
    if (window.confirm('Are you sure you want to delete this item?')) {
      dispatch(deleteProductDataActionInitiate(id))
      setOpen(true)
    } else {
      console.log('Deletion cancelled.');
    }
  };

  console.log('id', id)
  const handleEdit = () => {
    navigate(`/edit/${id}`)
  }
  const [product, setProduct] = useState({
    title: '',
    description: '',
    price: '',
    image: ''
  });

  const getproductdata = useSelector((state) => state.getproductdata.data);
  const dispatch = useDispatch();

  const handleClose = () => {
    setOpen(false)
    navigate(-1)
  }
  useEffect(() => {
    dispatch(getProductDataActionInitiate(id));
  }, [dispatch]);

  useEffect(() => {
    if (getproductdata) {
      setProduct(getproductdata)
    }
  }, [getproductdata])
  const handleBack = () => {
    navigate(-1);
  }
  return (
    <>
      <Box sx={{display:'flex', justifyContent:'center'}}>
        <Box sx={{
        display: 'inline-flex', width: 'auto', height: 'auto', 
        borderRadius: 5, mt: 3, p: 1, bgcolor: '#EFE9E3', color: '#11224E'
      }} >
        <Box sx={{ display: 'flex', justifyContent: 'center', p: 1 }}>
          <img src={product.image} width='250' />
        </Box>
        <Box sx={{
          ml: 4,
          p: 1
        }} textAlign='left'>

          <Box sx={{ display: 'flex', justifyContent: 'center' }}>
            <Typography gutterBottom variant="h4" component="div">
              {product.title}
            </Typography>
            <Box sx={{ ml: 10 }}>
              <IconButton> <ModeEditOutlineOutlinedIcon onClick={handleEdit} /></IconButton>
              <IconButton>  <DeleteOutlineRoundedIcon onClick={handleDelete} /></IconButton>
            </Box>
          </Box>


          <Typography variant='h5' component="div">
            Price:{product.price}
          </Typography>

          <Typography sx={{ my: 2 }} variant='h7' component="div">
            Category: {product.category}
          </Typography>
          <Typography variant="body2">
            {product.description}
          </Typography>
          <Button variant='contained' sx={{ bgcolor: '#C9B59C' }} onClick={handleBack}>Go Back</Button>
        </Box>

      </Box>
      </Box>
      
      <Snackbar
        open={open}
        autoHideDuration={5000}
        onClose={handleClose}
        message="deleted successfully"
      />
    </>

  )
}

export default ProductDetails