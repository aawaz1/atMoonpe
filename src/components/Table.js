import * as React from 'react';
import PropTypes from 'prop-types';
import { alpha } from '@mui/material/styles';
import { MdEdit } from "react-icons/md";
import { FaRegTrashAlt } from "react-icons/fa";
import { FaTrash } from "react-icons/fa";
import Box from '@mui/material/Box';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import TableSortLabel from '@mui/material/TableSortLabel';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import Checkbox from '@mui/material/Checkbox';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';
import DeleteIcon from '@mui/icons-material/Delete';
import FilterListIcon from '@mui/icons-material/FilterList';
import { visuallyHidden } from '@mui/utils';
import axios from 'axios';
import {useEffect , useState} from 'react';
import { FaSearch } from "react-icons/fa";

function createData(id, name, email, deposit, balance, action ,) {
 
  return {
    id,
    name,
    email,
    deposit,
    balance,
    action,
    
  };
}




function descendingComparator(a, b, orderBy) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

function getComparator(order, orderBy) {
  return order === 'desc'
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
}

// Since 2020 all major browsers ensure sort stability with Array.prototype.sort().
// stableSort() brings sort stability to non-modern browsers (notably IE11). If you
// only support modern browsers you can replace stableSort(exampleArray, exampleComparator)
// with exampleArray.slice().sort(exampleComparator)
function stableSort(array, comparator) {
  const stabilizedThis = array.map((el, index) => [el, index]);
  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0]);
    if (order !== 0) {
      return order;
    }
    return a[1] - b[1];
  });
  return stabilizedThis.map((el) => el[0]);
}

const headCells = [
  {
    id: 'name',
    numeric: false,
    disablePadding: true,
    label: 'Name',
  },
  {
    id: 'calories',
    numeric: true,
    disablePadding: false,
    label: 'Email',
  },
  {
    id: 'fat',
    numeric: true,
    disablePadding: false,
    label: 'Balance',
  },
  {
    id: 'carbs',
    numeric: true,
    disablePadding: false,
    label: 'Deposit',
  },
  {
    id: 'protein',
    numeric: true,
    disablePadding: false,
    label: 'Action',
  },
 
];

function EnhancedTableHead(props) {
  const { onSelectAllClick, order, orderBy, numSelected, rowCount, onRequestSort } =
    props;
  const createSortHandler = (property) => (event) => {
    onRequestSort(event, property);
  };

  return (
    <TableHead>
      <TableRow>
        <TableCell padding="checkbox">
          <Checkbox
            color="primary"
            indeterminate={numSelected > 0 && numSelected < rowCount}
            checked={rowCount > 0 && numSelected === rowCount}
            onChange={onSelectAllClick}
            inputProps={{
              'aria-label': 'select all desserts',
            }}
          />
        </TableCell>
        {headCells.map((headCell) => (
          <TableCell
            key={headCell.id}
            align={headCell.numeric ? 'right' : 'left'}
            padding={headCell.disablePadding ? 'none' : 'normal'}
            sortDirection={orderBy === headCell.id ? order : false}
          >
            <TableSortLabel
              active={orderBy === headCell.id}
              direction={orderBy === headCell.id ? order : 'asc'}
              onClick={createSortHandler(headCell.id)}
            >
              {headCell.label}
              {orderBy === headCell.id ? (
                <Box component="span" sx={visuallyHidden}>
                  {order === 'desc' ? 'sorted descending' : 'sorted ascending'}
                </Box>
              ) : null}
            </TableSortLabel>
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
}


EnhancedTableHead.propTypes = {
  numSelected: PropTypes.number.isRequired,
  onRequestSort: PropTypes.func.isRequired,
  onSelectAllClick: PropTypes.func.isRequired,
  order: PropTypes.oneOf(['asc', 'desc']).isRequired,
  orderBy: PropTypes.string.isRequired,
  rowCount: PropTypes.number.isRequired,
};

function EnhancedTableToolbar(props) {
    const { numSelected, setNameSortDirection, setSearchQuery } = props;
    const [isOpen, setIsOpen] = useState(false);
  
    return (
      <Toolbar
        sx={{
          pl: { sm: 2 },
          pr: { xs: 1, sm: 1 },
          ...(numSelected > 0 && {
            bgcolor: (theme) =>
              alpha(theme.palette.primary.main, theme.palette.action.activatedOpacity),
          }),
        }}
      >
        {numSelected > 0 ? (
          <Typography
            sx={{ flex: '1 1 100%' }}
            color="inherit"
            variant="subtitle1"
            component="div"
          >
            {numSelected} selected
          </Typography>
        ) : (
            <div className='flex gap-6'>
         <div className="bg-gray-300 flex  gap-4 rounded-md justify-center items-center p-2">
          <span><FaSearch className='text-customBlue' /></span>
          <input 
            className="outline-none bg-gray-300" 
            placeholder="search here.."
            onChange={(e) => setSearchQuery(e.target.value)}
          />
         </div>
          
            <IconButton className=''>
              <FilterListIcon className='relative text-customBlue' onClick={() => setIsOpen(!isOpen)} />
            </IconButton>
            </div>
        
        )}
  
        {numSelected > 0 ? (
          <Tooltip title="Delete">
            <IconButton>
              <DeleteIcon />
            </IconButton>
          </Tooltip>
        ) :""}
        {isOpen && <div className='absolute w-[20%] z-40 md:w-[10%] p-4 rounded-md flex flex-col gap-3 bg-gray-100 top-10 left-60'>
          <button onClick={() => setNameSortDirection('asc')} className="text-sm text-blue  hover:text-customBlue font-semibold">A-Z</button>
          <button onClick={() => setNameSortDirection('desc')} className="text-sm text-blue hover:text-customBlue font-semibold">Z-A</button>
          </div>}
      </Toolbar>
    );
  }
  
  EnhancedTableToolbar.propTypes = {
    numSelected: PropTypes.number.isRequired,
    setNameSortDirection: PropTypes.func.isRequired,
    setSearchQuery: PropTypes.func.isRequired,
  };
  
  
  EnhancedTableToolbar.propTypes = {
    numSelected: PropTypes.number.isRequired,
    setNameSortDirection: PropTypes.func.isRequired,
  };
  


EnhancedTableToolbar.propTypes = {
  numSelected: PropTypes.number.isRequired,
};

const sortByNameAsc = (a, b) => a.name.localeCompare(b.name);
const sortByNameDesc = (a, b) => b.name.localeCompare(a.name);


export default function EnhancedTable() {
 
    const [rows ,setRows] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');

    const [nameSortDirection, setNameSortDirection] = useState(null);

   
  
    const getUser = async () => {
        const data = await axios.get('https://dummyjson.com/users');
        console.log(data)
        setRows(
          data?.data?.users?.map(user => {
            return createData(
              user?.id,
              user?.firstName,
              user?.email,
             "5000 INR",
             
            
             "3000 INR",
             
              <div className='w-[100%] flex gap-2 justify-end items-end'>
                <span><MdEdit className='text-[1.2rem]'/></span>
                <span><FaTrash className='text-[1.2rem]'/></span>
              </div> 
            );
          })
        );
      };
      
      
useEffect(() => {
    getUser();
   
} , []);
  const [order, setOrder] = React.useState('asc');
  const [orderBy, setOrderBy] = React.useState('calories');
  const [selected, setSelected] = React.useState([]);
  const [page, setPage] = React.useState(0);
  const [dense, setDense] = React.useState(false);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(property);
  };

  const handleSelectAllClick = (event) => {
    if (event.target.checked) {
      const newSelected = rows.map((n) => n.id);
      setSelected(newSelected);
      return;
    }
    setSelected([]);
  };

  const handleClick = (event, id) => {
    const selectedIndex = selected.indexOf(id);
    let newSelected = [];

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, id);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1),
      );
    }
    setSelected(newSelected);
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const handleChangeDense = (event) => {
    setDense(event.target.checked);
  };

  const isSelected = (id) => selected.indexOf(id) !== -1;

  
  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;

    const visibleRows = React.useMemo(() => {
        let filteredRows = rows;
      
        if (searchQuery) {
          filteredRows = rows.filter((row) => 
            row.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
            row.email.toLowerCase().includes(searchQuery.toLowerCase())
          );
        }
      
        let sortedRows = filteredRows;
        if (nameSortDirection === 'asc') {
          sortedRows = [...filteredRows].sort(sortByNameAsc);
        } else if (nameSortDirection === 'desc') {
          sortedRows = [...filteredRows].sort(sortByNameDesc);
        } else {
          sortedRows = stableSort(filteredRows, getComparator(order, orderBy));
        }
      
        return sortedRows.slice(
          page * rowsPerPage,
          page * rowsPerPage + rowsPerPage,
        );
      }, [order, orderBy, page, rowsPerPage, rows, nameSortDirection, searchQuery]);
      
      

  return (
    <Box sx={{ width: '100%' }}>
      <Paper sx={{ width: '100%', mb: 2 }}>
      <EnhancedTableToolbar 
  numSelected={selected.length} 
  setNameSortDirection={setNameSortDirection} 
  setSearchQuery={setSearchQuery} 
/>

        <TableContainer>
          <Table
            sx={{ minWidth: 750 }}
            aria-labelledby="tableTitle"
            size={dense ? 'small' : 'medium'}
          >
            <EnhancedTableHead
              numSelected={selected.length}
              order={order}
              orderBy={orderBy}
              onSelectAllClick={handleSelectAllClick}
              onRequestSort={handleRequestSort}
              rowCount={rows.length}
            />
            <TableBody>
              {visibleRows.map((row, index) => {
                const isItemSelected = isSelected(row.id);
                const labelId = `enhanced-table-checkbox-${index}`;

                return (
                  <TableRow
                    hover
                    onClick={(event) => handleClick(event, row.id)}
                    role="checkbox"
                    aria-checked={isItemSelected}
                    tabIndex={-1}
                    key={row.id}
                    selected={isItemSelected}
                    sx={{ cursor: 'pointer' }}
                  >
                    <TableCell padding="checkbox">
                      <Checkbox
                        color="primary"
                        checked={isItemSelected}
                        inputProps={{
                          'aria-labelledby': labelId,
                        }}
                      />
                    </TableCell>
                    <TableCell
                      component="th"
                      id={labelId}
                      scope="row"
                      padding="none"
                    >
                      {row.name}
                    </TableCell>
                    <TableCell align="right">{row.email}</TableCell>
                    <TableCell align="right">{row.deposit}</TableCell>
                    <TableCell align="right">{row.balance}</TableCell>
                    <TableCell align="right">{row.action}</TableCell>
                  </TableRow>
                );
              })}
              {emptyRows > 0 && (
                <TableRow
                  style={{
                    height: (dense ? 33 : 53) * emptyRows,
                  }}
                >
                  <TableCell colSpan={6} />
                </TableRow>
              )}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[5, 10, 25]}
          component="div"
          count={rows.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Paper>
      {/* <FormControlLabel
        control={<Switch checked={dense} onChange={handleChangeDense} />}
        label="Dense padding"
      /> */}
    </Box>
  );
}
