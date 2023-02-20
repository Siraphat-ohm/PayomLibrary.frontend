import { useEffect, useState } from 'react';
import {
    createStyles,
    Table,
    ScrollArea,
    UnstyledButton,
    Group,
    Text,
    Center,
    Button,
} from '@mantine/core';
import { useCart } from '../../context/CartContext';
import { IconTrashX } from '@tabler/icons-react';
import useAxiosPrivate from '../../hooks/useAxiosPrivate';

const useStyles = createStyles((theme) => ({
    th: {
        padding: '0 !important',
        width: "300px"
    },

    control: {
        width: '100%',
        padding: `${theme.spacing.xs}px ${theme.spacing.md}px`,

    '&:hover': {
        backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[0],
    },
    },

    icon: {
        width: 21,
        height: 21,
        borderRadius: 21,
    },
}));

type RowData = {
    id: string
    title: string[],
    ISBN: string[],
    category: string[],
    status: boolean
}


interface ThProps {
    children: React.ReactNode;
    w? : string | number
}  

function Th({ children, w }: ThProps) {
    const { classes } = useStyles();
    return (
    <th className={classes.th} style = {{ width : w }}>
        <UnstyledButton className={classes.control}>
        <Group position="apart">
            <Text weight={500} size="sm">
            {children}
            </Text>
            <Center className={classes.icon}>
            </Center>
        </Group>
        </UnstyledButton>
    </th>
    );
}

export const Order = () => {
    const axiosPrivate = useAxiosPrivate();
    const [data, setData] = useState<RowData[]>([])

    useEffect(() => {
        const interval = setInterval(() => {
            axiosPrivate.get("/order/list").then( res => setData(res.data))
        }, 1000)
        return () => clearInterval(interval);
    }, [])

    const rows = data?.map((row, index) => {
        return (
            <tr key={index}>
                <td>{index + 1}</td>
                <td>{row.title.map( item => <div key={Math.random()}>{item}<br/></div> )}</td>
                <td>{row.category.map( item => <div key={Math.random()}>{item}<br/></div>)}</td>
                <td>{row.ISBN.map( item => <div key={Math.random()}>{item}<br/></div> )}</td>
                <td><Button color={ !row.status ? "gray" : "green"} >{ !row.status ? "wait" : "approve"}</Button></td>
            </tr>
        )
    });

    return (
    <ScrollArea>
    <Table
        horizontalSpacing="md"
        verticalSpacing="xs"
        sx={{  minWidth: 30 }}
        highlightOnHover
        striped
        withBorder 
        withColumnBorders
    >
        <thead>
            <tr>
                <Th w = '10px'> Index </Th>
                <Th> Title </Th>
                <Th> Category </Th>
                <Th> ISBN </Th>
                <Th w = '80px'> status </Th>
            </tr>
        </thead>
        <tbody>
            {rows.length > 0 ? (
                rows
                ) : (
                <tr>
                    <td colSpan={5}>
                    <Text weight={500} align="center">
                        Nothing found
                    </Text>
                    </td>
                </tr>
            )}
        </tbody>
    </Table>
    </ScrollArea>
    );
}