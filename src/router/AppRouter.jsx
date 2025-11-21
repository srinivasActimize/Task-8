import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AdminDashboard from '../pages/AdminDashboard/AdminDashboard';
import ProductDetails from '../pages/ProductDetails/ProductDetails';
import AdminProducts from '../pages/AdminProducts/AdminProducts';
import ProductEdit from '../pages/ProductEdit/ProductEdit';
import ProductForm from '../pages/ProductForm/ProductForm';
import { Typography } from '@mui/material';
export const AppRouter = () => {
  return (
    <div>
        <Typography  variant='h3' sx={{
            // color:'red',
             bgcolor: '#D9CFC7',
        }}> Admin Panel</Typography>
        
       
        <BrowserRouter>
        <Routes>
            <Route path='/' element={<AdminDashboard/>}/>
             <Route path='/products' element={<AdminProducts/>}/>
            <Route path='/AddProducts' element={<ProductForm/>}/>
            <Route path='/products/:id' element={<ProductDetails/>}/>
            <Route path='/edit/:id' element={<ProductEdit/>}/>
        </Routes>
        </BrowserRouter>
    </div>
  )
}
