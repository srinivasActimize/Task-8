import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { getProductsDataActionInitiate } from '../../Redux/Action/getProductsAction';
import { useDispatch,useSelector } from 'react-redux';
import { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from '@mui/material';

import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import ModeEditOutlineOutlinedIcon from '@mui/icons-material/ModeEditOutlineOutlined';


const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

export default function CustomizedTables() {
  const dispatch=useDispatch();
  const navigate=useNavigate();
  const getproductdata = useSelector((state) => state.getproductsdata);
const fetchedData = Object.keys(getproductdata.data).map(key => ({
          id: key,
          ...getproductdata.data[key]
        }));
        // console.log(fetchedData);
const handleDelete=(id)=>{
  alert('hi');
}
const handleView=(id)=>{
  navigate(`/products/${id}`);
}
const handleEdit=(id)=>{
  navigate(`/edit/${id}`)
}

  useEffect(() => {
    dispatch(getProductsDataActionInitiate());
  }, [dispatch]);

  return (
    <TableContainer component={Paper}>
      <Table sx={{ width: 'auto', border:'2px solid grey',mb:2,mt:2 }} aria-label="customized table" align='center'>
        <TableHead >
          <TableRow>
            <StyledTableCell align='center'style={{ width: 160 }}>Title</StyledTableCell>
            <StyledTableCell align='center' style={{ width: 160 }}>Price</StyledTableCell>
            <StyledTableCell align='center' style={{ width: 160 }}>Category</StyledTableCell>
            <StyledTableCell align="center" style={{ width: 160 }}>Image</StyledTableCell>
            <StyledTableCell align='center' >Action</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {fetchedData.map((row) => (
            <StyledTableRow key={row.name}>
              <StyledTableCell component="th" scope="row">
                {row.title}
              </StyledTableCell>
              <StyledTableCell align='center'>{row.price}</StyledTableCell>
              <StyledTableCell align='center'>{row.category}</StyledTableCell>
              <StyledTableCell align='center'> <img src={row.image} alt={row.id} width='50' height='50'/> </StyledTableCell>
              <StyledTableCell align='right'>
                 {/* <Link to='/details'> */}
                 <Button onClick={()=>handleView(row.id)}><VisibilityOutlinedIcon  /></Button>
                 {/* </Link> */}
                <Button onClick={() => handleDelete(row.id)}><DeleteOutlineOutlinedIcon/></Button>
                <Button onClick={()=>handleEdit(row.id)}><ModeEditOutlineOutlinedIcon/></Button> 
              </StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
