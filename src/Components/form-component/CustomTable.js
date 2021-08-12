// import React, {useState} from 'react';
// import { withStyles, makeStyles } from '@material-ui/core/styles';
// import Table from '@material-ui/core/Table';
// import TableBody from '@material-ui/core/TableBody';
// import TableCell from '@material-ui/core/TableCell';
// import TableContainer from '@material-ui/core/TableContainer';
// import TableHead from '@material-ui/core/TableHead';
// import TableRow from '@material-ui/core/TableRow';
// import Paper from '@material-ui/core/Paper';
// import {logDOM} from "@testing-library/react";
// import {Link} from "@material-ui/core";
// import Grid from "@material-ui/core/Grid";
// import { useForm } from 'react-hook-form';
// import useTrackedStore from '../../utils/ZustandStore';

// const StyledTableCell = withStyles((theme) => ({
//     head: {
//         backgroundColor: theme.palette.common.black,
//         color: theme.palette.common.white,
//     },
//     body: {
//         fontSize: 14,
//     },
// }))(TableCell);

// const StyledTableRow = withStyles((theme) => ({
//     root: {
//         '&:nth-of-type(odd)': {
//             backgroundColor: theme.palette.action.hover,
//         },
//     },
// }))(TableRow);

// function createData(name, calories, fat, carbs, protein) {
//     return { name, calories, fat, carbs, protein };
// }

// const rows = [
//     createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
//     createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
//     createData('Eclair', 262, 16.0, 24, 6.0),
//     createData('Cupcake', 305, 3.7, 67, 4.3),
//     createData('Gingerbread', 356, 16.0, 49, 3.9),
// ];

// const useStyles = makeStyles({
//     table: {
//         minWidth: 600,
//     },
// });

// const headers = ["Name", "+", "Quantity", "-"]

// export default function CustomizedTables({table}) {
//     const { register, handleSubmit, control } = useForm();
//     const classes = useStyles();

//     const state = useTrackedStore();
//     // const { handleSubmit, control, reset } = useForm();
//     const onSubmit = data => {
//         state.setFormOutput(data);
//         console.log("submit");
//     }

//     return (
//         <form onSubmit={handleSubmit(onSubmit)}>
//             <TableContainer component={Paper}>
//             <Table className={classes.table} aria-label="customized table">
//                 <TableHead>
//                     <TableRow>
//                         {
//                             headers.map((header, index)=>{
//                                 return index==0?<StyledTableCell>{header}</StyledTableCell>:
//                                     <StyledTableCell align="right">{header}</StyledTableCell>
//                             })
//                         }
//                     </TableRow>
//                 </TableHead>
//                 <TableBody>
//                     {table.menus.map((row) => (
//                         <StyledTableRow key={row.name}>

//                             <Grid component="th" scope="column">

//                                 <Grid >
//                                     {row.name}
//                                 </Grid>
//                                 <p >
//                                     {row.subText}
//                                 </p>
//                             </Grid>
//                             <StyledTableCell onClick={()=>{
//                                 console.log(row.quantity--)
//                             }} align="right"><a href="#">+</a></StyledTableCell>
//                             <StyledTableCell align="right">{row.quantity}</StyledTableCell>
//                             <StyledTableCell align="right" onClick={()=>{

//                                 console.log(row.quantity++)
//                             }}><a href={"#"}>-</a></StyledTableCell>
//                         </StyledTableRow>
//                     ))}
//                 </TableBody>
//             </Table>
//         </TableContainer>
//         <button type={"submit"}>Submit</button>
//         </form>
//     );
// }

import React from 'react';
import { useForm } from 'react-hook-form';
import useTrackedStore from '../../utils/ZustandStore';

function CustomTable(props) {
    const { register, handleSubmit, control } = useForm();
    // const { handleSubmit, control, reset } = useForm();
    const onSubmit = data => console.log(data);;
    const handleClick = (event) => {

    }
    const state = useTrackedStore();

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <button onClick={() => {
                state.setTableOutput(-1)
            }} >-</button>
            <input value={state.tableOutput} name="sampleInput" />
            <button onClick={() => {
                state.setTableOutput(1)
            }} >+</button>
            {/* <button type={"submit"}>Submit</button> */}
        </form>
    );
}

export default CustomTable;