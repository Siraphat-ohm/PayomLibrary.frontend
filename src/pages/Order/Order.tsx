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
    title: string,
    ISBN: string,
    quantity: string,
    category: string
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
    const { cartItems, removeFromCart, clearCart } = useCart();
    const axiosPrivate = useAxiosPrivate();

    const [rows, setRows] = useState<JSX.Element[]>([])

    useEffect(() => {
        const items = cartItems.map(item => item)
        const rows:JSX.Element[] = items.map((row) => {
            return <tr key={row.id}>
                        <td>{row.title}</td>
                        <td>{row.category}</td>
                        <td>{row.ISBN}</td>
                        <td><IconTrashX onClick={() => removeFromCart(row.id)}></IconTrashX></td>
                    </tr>});
        setRows(rows)
        }, [cartItems])

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
                <Th> Title </Th>
                <Th> Category </Th>
                <Th> ISBN </Th>
                <Th w = '100px'> quanity </Th>
                <Th w = '30px'> action </Th>
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