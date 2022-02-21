import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Link } from 'react-router-dom';


const Students =()=> {
  const rows = [
    {name:'Md Ashraful Huda',age:35,course: "MERN",batch: "Jan",change:<Link to='#'>Edit</Link>},
    {name:'Ravi',age:35,course: "MERN",batch: "July",change:<Link to='#'>Edit</Link>},
    {name:'Sourav',age:35,course: "MERN",batch: "November",change:<Link to='#'>Edit</Link>},
    {name:'Zakariya',age:35,course: "MERN",batch: "December",change:<Link to='#'>Edit</Link>},
    {name:'Suraj',age:35,course: "MERN",batch: "July",change:<Link to='#'>Edit</Link>},
    {name:'Pavan',age:35,course: "MERN",batch: "August",change:<Link to='#'>Edit</Link>},
    {name:'Baazigar',age:35,course: "MERN",batch: "September",change:<Link to='#'>Edit</Link>},
  ];
  
  return (
    <div id='studentsComponent'>
      <div className='flex'>
        <h1>Students List</h1>
        <button><Link to="#">Add new Student</Link></button>
      </div>
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell align="right">Age</TableCell>
            <TableCell align="right">Course</TableCell>
            <TableCell align="right">Batch</TableCell>
            <TableCell align="right">Change</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.age}</TableCell>
              <TableCell align="right">{row.course}</TableCell>
              <TableCell align="right">{row.batch}</TableCell>
              <TableCell align="right">{row.change}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </div>
  );
}

export default Students