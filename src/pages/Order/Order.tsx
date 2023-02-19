import {
    createStyles,
    Table,
    Group,
    Text,
    Center,
} from '@mantine/core';

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
    title: string,
    category: string,
    ISBN: string,
    amount: string,
    status?: any
}


interface ThProps {
    children: React.ReactNode
}

function Th({ children }: ThProps) {
    const { classes } = useStyles();
    return (
    <th className={classes.th}>
        <Group position="apart">
            <Text weight={500} size="sm">
            {children}
            </Text>
            <Center className={classes.icon}>
            </Center>
        </Group>
    </th>
    );
}


export function Order() {
    const data:RowData[] = []

    const rows = data.map((row) => (
    <tr key={row.title}>
        <td>{row.title}</td>
        <td>{row.category}</td>
        <td>{row.ISBN}</td>
        <td>{row.amount}</td>
        <td>{row.status}</td>
    </tr>
    ));

    return (
    <Table
        horizontalSpacing="md"
        verticalSpacing="xs"
        sx={{  minWidth: 700 }}
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
                <Th> Amount </Th>
                <Th> Status </Th>
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
    );
}