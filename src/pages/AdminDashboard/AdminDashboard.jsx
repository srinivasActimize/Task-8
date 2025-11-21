import Paper from '@mui/material/Paper'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button';
import { styled, Typography } from '@mui/material'
import { useEffect} from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import Stack from '@mui/system/Stack';
import { Link } from 'react-router-dom';
import { getProductsDataActionInitiate } from '../../Redux/Action/getProductsAction';


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
  const fetchedData = Object.keys(getproductdata.data).map(key => ({
      id: key,
      ...getproductdata.data[key]
    }));

    const count=fetchedData.length;
  console.log('counnnnnt',count)
 
    return (
        <>
            <Box
                direction='column'

                sx={{
                    height: 200,
                    width: 200,
                    my: 4,
                    ml:'40%',
                    display: 'flex',
                    justifyContent:'center',
                    alignItems: 'center',
                    p: 2,
                    color:'#452829',
                    bgcolor:'#F3E8DF',
                    borderRadius:8,
                    boxShadow: '0px 0px 0px 2px rgba(0, 0, 0, 0.2)'
                }}
            > 
                <Box >
                <Typography  variant='h6'  >  Total Products :</Typography>
                <Typography sx={{my:3}} variant='h1'>{count}</Typography>
                </Box>
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
                
                <Link to="/products" style={linkStyle}><Button sx={{bgcolor:'#C9B59C'}}variant="contained">manage products</Button></Link>
                <Link to='/AddProducts' style={linkStyle}><Button sx={{bgcolor:'#C9B59C'}} variant="contained">Add Product</Button></Link>
            </Stack>
            </Box>

        </>
    )
}

export default AdminDashboard;