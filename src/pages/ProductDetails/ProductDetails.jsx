import React, { useEffect, useState } from 'react'
import Typography from '@mui/material/Typography';
import { Link, Navigate, useParams } from 'react-router-dom';
// import { getProductDataApi } from '../../Redux/Api/getProductApi';
import { Box, Button } from '@mui/material';
import { getProductDataActionInitiate } from '../../Redux/Action/getProductAction';
import { useDispatch, useSelector } from 'react-redux';

import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
import DeleteOutlineRoundedIcon from '@mui/icons-material/DeleteOutlineRounded';
import ModeEditOutlineOutlinedIcon from '@mui/icons-material/ModeEditOutlineOutlined';

import { useNavigate } from 'react-router-dom';

const ProductDetails = () => {
  const { id } = useParams();
  const navigate=useNavigate();
  
const handleDelete=()=>{
  alert("do you want to delete?");
}
console.log('id',id)
const handleEdit=()=>{
  navigate(`/edit/${id}`)
}
  const [product, setProduct] = useState({
    title: '',
    description: '',
    price: '',
    image: ''
  });

 const getproductdata = useSelector((state) => state.getproductdata.data);
    //  console.log('hello',getproductdata)
   const dispatch=useDispatch();
   
  
    useEffect(() => {
      dispatch(getProductDataActionInitiate(id));
    }, [id]);
   
    useEffect(()=> {
       if(getproductdata){
          setProduct(getproductdata)
       }
    },[getproductdata])
  const handleBack=()=>{
    navigate(-1);
  }
  return (
    <>
      <Box sx={{
        display: 'inline-flex', width: 'auto',maxWidth:900, height: 'auto', maxHeight:550,
        borderRadius:5, mt: 3, p:1,bgcolor:'#e5fdff', color:'#11224E'
      }} >
        <Box sx={{display:'flex', justifyContent: 'center',p:2}}>
          <img src={product.image} width='250' />
        </Box>
        <Box sx={{
          ml:4,
          p:1
        }} textAlign='left'>
            <Typography gutterBottom variant="h4" component="div">
              {product.title}
            </Typography>
            <Typography variant='h5' component="div">
              Price:{product.price}
            </Typography>
            
            <Typography sx={{my:2}} variant='h7' component="div">
              Category: {product.category}
            </Typography>
            <Typography variant="body2">
              {product.description}
            </Typography>
          <Button variant='contained' sx={{m:5}} onClick={handleBack}>Go Back</Button>
        </Box>
          <ModeEditOutlineOutlinedIcon onClick={handleEdit}/>
         <DeleteOutlineRoundedIcon onClick={handleDelete}/>
      </Box>
    
    </>

  )
}

export default ProductDetails