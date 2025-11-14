import { Box, Button, Stack, TextField } from '@mui/material'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
const linkStyle = {
    color: "white",
    textDecoration: "none",
    display:'flex',
    fontSize: "12px",
}
const ProductEdit = () => {
  const [name,useName]=useState('');
  
  const navigate=useNavigate();
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
            label="enter product name"
          />
          <TextField
            required
            id="outlined-required"
            label="Enter cost"
          />
        </div>
        <div sx={{
          display: 'flex',
          spacing: 2
        }}>
          <TextField
            required
            id="outlined-required"
            label="calories"
          />
          <TextField
            required
            id="outlined-required"
            label="Required"
          />
        </div>
        <Stack direction='row' spacing={3} sx={{justifyContent:'center'}}>        
          <Link to='/products/' style={linkStyle} ><Button variant='contained'>Goo Back</Button></Link>
          <Button variant='contained' >Update</Button>
        </Stack>
      </Box>
    </div>
  )
}

export default ProductEdit