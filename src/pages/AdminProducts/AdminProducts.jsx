import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { getProductsDataActionInitiate } from '../../Redux/Action/getProductsAction';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Box, Button, Container, IconButton, Stack, TablePagination, TextField } from '@mui/material';
import Snackbar from '@mui/material/Snackbar';
import { Loader } from '../../components/Loader/Loader';
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import ModeEditOutlineOutlinedIcon from '@mui/icons-material/ModeEditOutlineOutlined';
import { deleteProductDataActionInitiate } from '../../Redux/Action/deleteProductAction';


const StyledTableCell = styled(TableCell)(() => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: '#313647',
    color: '#EFECE3',
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(() => ({
  '&:nth-of-type(odd)': {
    backgroundColor: '#F9F8F6',
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

export default function CustomizedTables() {
  const [open, setOpen] = useState(false);
  const [search, setSearch] = useState('');
  const [loading,setLoading]=useState(true)
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const getproductdata = useSelector((state) => state.getproductsdata);
  let fetchedData = Object.keys(getproductdata.data).map(key => ({
    id: key,
    ...getproductdata.data[key]
  }));
  // console.log(fetchedData);
  console.log(fetchedData)
const [product,setProduct]=useState(fetchedData);
  useEffect(() => {
    dispatch(getProductsDataActionInitiate());
  }, [dispatch, open]);

  const handleDelete = (id) => {
    if (window.confirm('Are you sure you want to delete this item?')) {
      dispatch(deleteProductDataActionInitiate(id));

      setOpen(true);
    } else {
      console.log('Deletion cancelled.');
    }
  };
  const handleView = (id) => {
    navigate(`/products/${id}`);
  }
  const handleEdit = (id) => {
    navigate(`/edit/${id}`)
  }
  const handleAdd = () => {
    navigate('/AddProducts')
  }
  const handleBack = () => {
    navigate('/')
  }
  const handleClose = (event, reason) => {
    setOpen(false)
    if (reason === 'clickaway') {
      return;
    }
  }
  const handleChange=(e)=>{
    setSearch(e.target.value)
  }

  useEffect(()=>{
    if(search.length<1){
      setProduct(fetchedData)
      return
    }
    if(search&&fetchedData){
      let res=fetchedData
      if(search) res=res.filter(p=>p.category.toLowerCase().includes(search.toLowerCase()))
        setProduct(res);
    }
  },[search,getproductdata])

    
    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 2000);
    });


  const [page, setPage] = useState(0)
  const [rowsPerPage, setRowsPerPage] = useState(5)

  const handleChangePage = (newPage) => {
    setPage(newPage)
  }

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10))
    setPage(0)
  }

  const empty = !product || product.length === 0
  const visibleRows = empty ? [] : product.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)


  if(loading){
    return <Loader/>
  }
  return (
    <Container>
      <br></br>
      <Snackbar
        sx={{
          p: 2
        }}
        open={open}
        autoHideDuration={5000}
        onClose={handleClose}
        message="deleted successfully"
      />
      <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
      <Box sx={{ display: 'flex', gap: 2 }}>
        <TextField
          name='search'
          value={search}
          label='Search category'
          onChange={handleChange}
          size='small'
        >

        </TextField>
      </Box>
      <Box sx={{ display: 'flex', gap: 2}}>
        <Stack sx={{ display: 'flex' }} direction='row' spacing={2}>
          <Button size='small' sx={{ bgcolor: '#C9B59C' }} variant='contained' onClick={handleBack}>Home</Button>
          <Button size='small' sx={{ m: 4, bgcolor: '#C9B59C' }} variant='contained' onClick={handleAdd}>Add product</Button>
        </Stack>
      </Box>
      </Box>
      <TableContainer component={Paper}>
        <Table sx={{ width: '100%', mb: 10, mt: 2, color: '#452829', bgcolor: '#EFE9E3' }} aria-label="customized table" align='center'>
          <TableHead >
            <TableRow>
              <StyledTableCell align='center' style={{ width: 160 }}>Title</StyledTableCell>
              <StyledTableCell align='center' style={{ width: 160 }}>Price</StyledTableCell>
              <StyledTableCell align='center' style={{ width: 160 }}>Category</StyledTableCell>
              <StyledTableCell align="center" style={{ width: 160 }}>Image</StyledTableCell>
              <StyledTableCell align='center' >Action</StyledTableCell>
            </TableRow>
          </TableHead>  
          <TableBody>
            {visibleRows?.map((row) => (
              <StyledTableRow key={row.name}>
                <StyledTableCell component="th" scope="row" align='center'>
                  {row.title}
                </StyledTableCell>
                <StyledTableCell align='center'>{row.price}</StyledTableCell>
                <StyledTableCell align='center'>{row.category}</StyledTableCell>
                <StyledTableCell align='center'> <img src={row.image} alt={row.id} width='50' height='50' /> </StyledTableCell>
                <StyledTableCell align='center' gap="2">
                  {/* <Link to='/details'> */}

                  {/* </Link> */}
                  <IconButton onClick={() => handleView(row.id)}>  <VisibilityOutlinedIcon /></IconButton>
                  <IconButton onClick={() => handleDelete(row.id)} aria-label="delete" size="large">
                    <DeleteOutlineOutlinedIcon />
                  </IconButton>
                  <IconButton onClick={() => handleEdit(row.id)} aria-label="delete" size="large">
                    <ModeEditOutlineOutlinedIcon />
                  </IconButton>

                </StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
       
      </TableContainer>
 <TablePagination
        rowsPerPageOptions={[5, 10, 25]}
        component="div"
        count={product.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Container>
  );
}
