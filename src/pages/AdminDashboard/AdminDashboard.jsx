import React from 'react'
import Paper from '@mui/material/Paper'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button';
import { styled, Typography } from '@mui/material'
import Stack from '@mui/system/Stack';
import { Link } from 'react-router-dom';
import { border, display } from '@mui/system';
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
    padding: "10px",
}
function AdminDashboard() {
    return (
        <>
            {/* <Box
                sx={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    '& > :not(style)': {
                        ml: 25,
                        mt: 8,
                        width: 300,
                        height: 300,
                    },
                }}
            >
                <DemoPaper elevation={6}> Total products:{ }

                </DemoPaper>
                <Stack>
    </Stack> 
            </Box> */}
            <Box
                direction='column'

                sx={{
                    height: 200,
                    width: 200,
                    my: 4,
                    ml: '40%',
                    display: 'flex',
                    alignItems: 'center',
                    p: 2,
                    border: '2px solid grey',
                }}
            > 
                <Typography variant='h5' >  Total Products :</Typography>
            </Box>
            <Box
            sx={{
                    height: 200,
                    width: 200,
                    ml: '42%',
                    display: 'flex',
                    alignItems: 'center',
                }}>

            <Stack direction='column' gap={1}>
                <Button variant="contained"><Link to="/products" style={linkStyle}>manage products</Link></Button>
                <Button variant="contained"><Link to='/AddProducts' style={linkStyle}>Add Product</Link></Button>
            </Stack>
            </Box>

        </>
    )
}

export default AdminDashboard;