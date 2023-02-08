import { useState } from 'react';
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
import { IconSelector, IconChevronDown, IconChevronUp, IconSearch, IconX } from '@tabler/icons';
import React from 'react';
import { IconCheck } from '@tabler/icons-react';

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
    title: string[],
    ISBN: string[],
    amount: string,
    user: string
}


interface ThProps {
    children: React.ReactNode;
    reversed: boolean;
    sorted: boolean;
    onSort(): void;
    w? : string
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

export const RequestOrder = () => {
    const data:RowData[] = [ { id:"1", ISBN:["4879"], amount:"3", title:["kuy"], user:"banana"}
    ]
    const [search, setSearch] = useState('');
    const [sortedData, setSortedData] = useState(data);
    const [sortBy, setSortBy] = useState<keyof RowData | null>(null);
    const [reverseSortDirection, setReverseSortDirection] = useState(false);

    const setSorting = (field: keyof RowData) => {
        const reversed = field === sortBy ? !reverseSortDirection : false;
        setReverseSortDirection(reversed);
        setSortBy(field);
    };

    const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.currentTarget;
    setSearch(value);
    };

    const rows = sortedData.map((row) => (
    <tr key={row.id}>
        <td>{row.title}</td>
        <td>{row.ISBN}</td>
        <td>{row.amount}</td>
        <td><Button leftIcon={<IconX/>} color="red">Approve</Button><Button leftIcon={<IconCheck/>} color="green">Discard</Button></td>
    </tr>
    ));
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
        sx={{  minWidth: 700 }}
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
                    sorted={sortBy == 'ISBN'}
                    reversed={reverseSortDirection}
                    onSort={() => setSorting("ISBN")}
                >
                    ISBN
                </Th>
                <Th
                    sorted={sortBy == 'amount'}
                    reversed={reverseSortDirection}
                    onSort={() => setSorting("amount")}
                >
                    Amount
                </Th>
                <Th
                    sorted={false}
                    reversed={false}
                    onSort={() => {}}
                    w = '300px'
                >
                    Action
                </Th>
            </tr>
        </thead>
        <tbody>
            {rows.length > 0 ? (
                rows
                ) : (
                <tr>
                    <td colSpan={4}>
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