import { useEffect, useState } from 'react';
import io from 'socket.io-client';
const socket = io('http://127.0.0.1:4662');

import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import Button from '@mui/material/Button';
import useAxiosPrivate from '../../hooks/useAxiosPrivate';

interface Column {
    id: 'index' | 'title' | 'isbn' | 'amount' | 'user' |'confirm';
    label: string;
    minWidth?: number;
    align?: 'right';
    format?: (value: number) => string;
}

const columns: readonly Column[] = [
    { id: 'index', label: 'Index', minWidth: 170 },
    { id: 'title', label: 'Title', minWidth: 100},
    { id: 'isbn', label: 'ISBN', minWidth: 100 },
    { id: 'amount', label: 'amount', minWidth: 100 },
    { id: 'user', label: 'user', minWidth: 100 },
    { id: 'confirm', label: 'confirm', minWidth: 100 }
];

interface Data {
    index: number;
    title: string;
    isbn: string;
    amount: number;
    user: string;
    confirm?: JSX.Element | JSX.Element[];
}

function createData(index:number, title:string, isbn:string, amount:number, user:string,confirm?:any): Data {
    return { index, title, amount, isbn, user, confirm };
}

function RequestPage(){
    const axiosPrivate = useAxiosPrivate();
    const [rows, setRows] = useState<Data[]>([]);

    useEffect(() => {
        const getOrder = async() => {
            const response = await axiosPrivate.get('/getOrder')
            response.data.forEach((element:any, index:number) => {
                const confirmBtn = (<><Button variant='contained' color='success' size='small'>approve</Button><Button variant='contained' color='error' size='small'>discard</Button></>)
                setRows((e) => {
                    return [ ...e , createData( (index + 1), element.books.title, element.books.ISBN, element.amount, element.user,confirmBtn )]
                })
            })
        }
        getOrder();

    }, [])

    useEffect(() => {
        socket.on("send-order", (arg)=>{
            arg.forEach((element:any, index:number) => {
                const confirmBtn = (<><Button variant='contained' color='success' size='small'>approve</Button><Button variant='contained' color='error' size='small'>discard</Button></>)
                setRows((e) => {
                    return [ createData( (index + 1), element.books.title, element.books.ISBN, element.amount, element.user,confirmBtn )]
                })
            });
        })
    }, [socket])
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(10);

    const handleChangePage = (event: unknown, newPage: number) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };


    return (
    <Paper sx={{ width: '50%', overflow: 'hidden' }} style={{"margin":"0 auto", marginTop:"35px"}}>
        <TableContainer sx={{ maxHeight: 440 }}>
            <Table stickyHeader aria-label="sticky table">
            <TableHead>
                <TableRow>
                {columns.map((column, index) => (
                    <TableCell
                    key={index}
                    align={column.align}
                    style={{ minWidth: column.minWidth }}
                    >
                    {column.label}
                    </TableCell>
                ))}
                </TableRow>
            </TableHead>
            <TableBody>
                {rows
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row) => {
                    return (
                    <TableRow hover role="checkbox" tabIndex={-1} key={row.title}>
                        {columns.map((column) => {
                        const value = row[column.id];
                        return (
                            <TableCell key={column.id} align={column.align}>
                            {column.format && typeof value === 'number'
                                ? column.format(value)
                                : value}
                            </TableCell>
                        );
                        })}
                    </TableRow>
                    );
                })}
            </TableBody>
            </Table>
        </TableContainer>
        <TablePagination
            rowsPerPageOptions={[10, 25, 100]}
            component="div"
            count={rows.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
        />
    </Paper>
    )
}

export default RequestPage