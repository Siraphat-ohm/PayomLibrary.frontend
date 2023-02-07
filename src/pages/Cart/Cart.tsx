import { useEffect, useState } from 'react';
import {
    createStyles,
    Table,
    ScrollArea,
    UnstyledButton,
    Group,
    Text,
    Center,
    TextInput,
    Button,
} from '@mantine/core';
import { keys } from '@mantine/utils';
import { IconSelector, IconChevronDown, IconChevronUp, IconSearch } from '@tabler/icons';
import { ButtonQuantity } from './ButtonQuantity';
import { useCart } from '../../context/CartContext';
import { IconTrashX } from '@tabler/icons-react';

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
    reversed: boolean;
    sorted: boolean;
    onSort(): void;
    w? : string | number
}  

function Th({ children, reversed, sorted, onSort , w }: ThProps) {
    const { classes } = useStyles();
    const Icon = sorted ? (reversed ? IconChevronUp : IconChevronDown) : IconSelector;
    return (
    <th className={classes.th} style = {{ width : w }}>
        <UnstyledButton onClick={onSort} className={classes.control}>
        <Group position="apart">
            <Text weight={500} size="sm">
            {children}
            </Text>
            <Center className={classes.icon}>
            <Icon size={14} stroke={1.5} />
            </Center>
        </Group>
        </UnstyledButton>
    </th>
    );
}

function filterData(data: RowData[], search: string) {
    const query = search.toLowerCase().trim();
        return data.filter((item) =>
    keys(data[0]).some((key) => item[key].toLowerCase().includes(query))
    );
}

function sortData( data: RowData[], payload: { sortBy: keyof RowData | null; reversed: boolean; search: string }    ) {
    const { sortBy } = payload;

    if (!sortBy) {
        return filterData(data, payload.search);
    }

    return filterData(
    [...data].sort((a, b) => {
        if (payload.reversed) {
            return b[sortBy].localeCompare(a[sortBy]);
        }

        return a[sortBy].localeCompare(b[sortBy]);
    }),
    payload.search
    );
}

export const Cart = () => {
    const { cartItems, removeFromCart } = useCart();

    const [data, setData] = useState<RowData[]>([])
    const [rows, setRows] = useState<JSX.Element[]>([])

    const [search, setSearch] = useState('');
    const [sortedData, setSortedData] = useState(data);
    const [sortBy, setSortBy] = useState<keyof RowData | null>(null);
    const [reverseSortDirection, setReverseSortDirection] = useState(false);

    useEffect(() => {
        const items = cartItems.map(item => item)
        setData(items)
        const rows:JSX.Element[] = items.map((row) => (
        <tr key={row.id}>
            <td>{row.title}</td>
            <td>{row.category}</td>
            <td>{row.ISBN}</td>
            <td><ButtonQuantity id={row.id}/></td>
            <td><IconTrashX onClick={() => removeFromCart(row.id)}></IconTrashX></td>
        </tr>));
        setRows(rows)
        }, [cartItems])

    const setSorting = (field: keyof RowData) => {
        const reversed = field === sortBy ? !reverseSortDirection : false;
        setReverseSortDirection(reversed);
        setSortBy(field);
        setSortedData(sortData(data, { sortBy: field, reversed, search }));
    };

    const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.currentTarget;
    setSearch(value);
    setSortedData(sortData(data, { sortBy, reversed: reverseSortDirection, search: value }));
    };

    return (
    <ScrollArea>
        <TextInput
            placeholder="Search by any field"
            mb="md"
            icon={<IconSearch size={14} stroke={1.5} />}
            value={search}
            onChange={handleSearchChange}
        />
    <Table
        horizontalSpacing="md"
        verticalSpacing="xs"
        sx={{  minWidth: 300 }}
        highlightOnHover
        withBorder 
        withColumnBorders
    >
        <thead>
            <tr>
                <Th
                    sorted={sortBy == 'title'}
                    reversed={reverseSortDirection}
                    onSort={() => setSorting("title")}
                >
                    Title
                </Th>
                <Th
                    sorted={sortBy == 'category'}
                    reversed={reverseSortDirection}
                    onSort={() => setSorting("category")}
                >
                    Category
                </Th>
                <Th
                    sorted={sortBy == 'ISBN'}
                    reversed={reverseSortDirection}
                    onSort={() => setSorting("ISBN")}
                >
                    ISBN
                </Th>
                <Th
                    sorted={sortBy == 'quantity'}
                    reversed={reverseSortDirection}
                    onSort={() => setSorting("quantity")}
                    w = '100px'
                >
                    quanity
                </Th>
                <Th
                    sorted={sortBy == 'quantity'}
                    reversed={reverseSortDirection}
                    onSort={() => setSorting("quantity")}
                    w = '100px'
                >
                    action
                </Th>
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
    <Button>rent now</Button>
    </ScrollArea>
    );
}