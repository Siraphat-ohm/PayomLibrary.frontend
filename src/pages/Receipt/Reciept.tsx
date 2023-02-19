import { useEffect, useState } from 'react';
import {
    createStyles,
    Table,
    ScrollArea,
    UnstyledButton,
    Group,
    Text,
    Center,
    Button
} from '@mantine/core';
import useAxiosPrivate from '../../hooks/useAxiosPrivate';

const useStyles = createStyles((theme) => ({
    th: {
        padding: '0 !important',
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

interface RowData {
    id: string,
    title:string[],
    loanDate: string,
    expectDate: string,
    user: string
}

interface ThProps {
    children: React.ReactNode;
    w? : string
}

function Th({ children, w }: ThProps) {
    const { classes } = useStyles();
    return (
    <th className={classes.th} style = {{ width : w }} >
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

export const Reciept = () => {
    const axiosPrivate = useAxiosPrivate();
    const [data, setData] = useState<RowData[]>([]);

    useEffect( () => {
        axiosPrivate.get('/receipt/all').then(res => setData(res.data));
    }, [])

    const handleReciept = (id: string) => {
        axiosPrivate.get(`/receipt/${id}/receive`).then(res => console.log(res.data));
    }

    const rows = data.map((row, index) => {
        console.log(row.id);
        return (
            <tr key={row.id}>
                <td>{index + 1}</td>
                <td>{row.title.map( item => <>{item}<br/></>)}</td>
                <td>{row.loanDate}</td>
                <td>{row.expectDate}</td>
                <td>{row.user}</td>
                <td><Button color="green" onClick={() => {handleReciept(row.id)}}>receipt</Button></td>
            </tr>
        )
    });


return (
    <ScrollArea>
    <Table
        horizontalSpacing="md"
        verticalSpacing="xs"
        sx={{  minWidth: 700 }}
        striped
        highlightOnHover
        withBorder 
        withColumnBorders
    >
        <thead>
            <tr>
                <Th w='111px' > index </Th>
                <Th> Title </Th>
                <Th> LoanDate </Th>
                <Th> ExpectDate </Th>
                <Th> User </Th>
                <Th> Action </Th>
            </tr>
        </thead>
        <tbody>
            {rows.length > 0 ? (
                rows
                ) : (
                <tr>
                    <td colSpan={6}>
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