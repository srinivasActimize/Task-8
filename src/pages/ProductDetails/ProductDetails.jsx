import React, { useEffect, useState } from 'react'
import Typography from '@mui/material/Typography';
import { Link, useParams } from 'react-router-dom';
// import { getProductDataApi } from '../../Redux/Api/getProductApi';
import { Box } from '@mui/material';
import { getProductDataActionInitiate } from '../../Redux/Action/getProductAction';
import { useDispatch, useSelector } from 'react-redux';
const ProductDetails = () => {
  const { id } = useParams();
  
  const [product, setProduct] = useState({
    title: '',
    description: '',
    price: '',
    image: ''
  });

 const getproductdata = useSelector((state) => state.getproductdata.data);
     console.log('hello',getproductdata)
   const dispatch=useDispatch();
  
    useEffect(() => {
      dispatch(getProductDataActionInitiate(id));
    }, [id]);
   
    useEffect(()=> {
       if(getproductdata){
          setProduct(getproductdata)
       }
    },[getproductdata])
  
  // console.log('id is', id)
  // useEffect(() => {
  //   fetching();
  // }, [id])

  // const fetching = async () => {
  //   const { data } = await getProductDataApi(id);
  //   setProduct(data);
  // }
  // console.log('view', product)
  return (
    <>
      <Box sx={{
        display: 'inline-flex', width: 800, height: 'auto',
        border: '2px solid black', mt: 3, p:1
      }} >
        <Box sx={{ justifyContent: 'center',p:2}}>
          <img src={product.image} width='200' />
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
            <Typography variant="body2" sx={{ color: 'text.secondary' }}>
              {product.description}
            </Typography>

          {/* <Box sx={{
            display: 'flex',
            justifyContent: 'center',
            mt:3
          }}>
            
          </Box> */}
          
        </Box>

      </Box>
    
    </>

  )
}

export default ProductDetails