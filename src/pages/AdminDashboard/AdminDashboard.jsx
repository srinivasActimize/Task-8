import React from 'react'
import Paper from '@mui/material/Paper'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button';
import { styled, Typography } from '@mui/material'
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import Stack from '@mui/system/Stack';
import { Link } from 'react-router-dom';
import { border, display } from '@mui/system';
import { getProductsDataActionInitiate } from '../../Redux/Action/getProductsAction';
const DemoPaper = styled(Paper)(({ theme }) => ({
    width: 200,
    height: 200,
    padding: theme.spacing(2),
    ...theme.typography.body2,
    textAlign: 'center',
}));

const linkStyle = {
    color: "white",
    textDecoration: "none",
    display:'flex',
    fontSize: "12px",
}
function AdminDashboard() {
      const dispatch=useDispatch();

  useEffect(() => {
    dispatch(getProductsDataActionInitiate());
  }, [dispatch]);
 
  const getproductdata = useSelector((state) => state.getproductsdata);
 
  const count=getproductdata.data.length;
//   console.log("array of data",getproductdata);
 
    return (
        <>
            <Box
                direction='column'

                sx={{
                    height: 200,
                    width: 200,
                    my: 4,
                    display: 'flex',
                    justifyContent:'center',
                    alignItems: 'center',
                    p: 2,
                    color:'#452829',
                    bgcolor:'#F3E8DF',
                    borderRadius:8,
                    boxShadow: '0px 2px 10px 10px rgba(0, 0, 0, 0.2)'
                }}
            > 
                <Typography variant='h5'  >  Total Products : {count}</Typography>
            </Box>
            <Box
            sx={{
                    height: 200,
                    width: 200,
                    ml: '42%',
                    display: 'flex',
                    justifyContent:'center'
                }}>

            <Stack direction='column' gap={1}>
                
                <Link to="/products" style={linkStyle}><Button variant="contained">manage products</Button></Link>
                <Link to='/AddProducts' style={linkStyle}><Button variant="contained">Add Product</Button></Link>
            </Stack>
            </Box>

        </>
    )
}

export default AdminDashboard;