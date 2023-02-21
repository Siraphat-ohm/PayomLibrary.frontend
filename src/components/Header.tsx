import { createStyles, Header, Autocomplete, Group, Burger, Text, Button, Drawer, Stack } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { IconLogout, IconSearch } from '@tabler/icons';
import { useNavigate } from 'react-router-dom';
import axios from '../config/baseAxios';
import { useAuth } from '../context/AuthContext';
import ron from "../assets/ron.png"

const useStyles = createStyles((theme) => ({
    header: {
        paddingLeft: theme.spacing.md,
        paddingRight: theme.spacing.md,
    },

    inner: {
        height: 56,
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
    },

    links: {
        [theme.fn.smallerThan('md')]: {
            display: 'none',
        },
    },

    search: {
        [theme.fn.smallerThan('xs')]: {
            display: 'none',
        },
    },

    link: {
        display: 'block',
        lineHeight: 1,
        padding: '8px 12px',
        borderRadius: theme.radius.sm,
        textDecoration: 'none',
        color: theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.colors.gray[7],
        fontSize: theme.fontSizes.sm,
        fontWeight: 500,

    '&:hover': {
        backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[0],
    },
    },
}));

interface headerProps {
    admin?: boolean
}



export function HeaderSearch({ admin = false }: headerProps ) {
    const { logout, user } = useAuth();

    const handleLogout = () => {
        axios.get("/logout").then(res => {
            logout();
            navigate('/login', { replace: true })
        })
    }
    const navigate = useNavigate();
    const links = admin ? [
        {
            "link": "/sudo/request",
            "label": "Request"
        },
        {
            "link": "/sudo/receipt",
            "label": "Receive"
        },
        {
            "link": "/sudo/register-book",
            "label": "Register"
        }
    ]:[
        {
            "link": "/main/home",
            "label": "Home"
        },
        {
            "link": "/main/orders",
            "label": "Order"
        },
        {
            "link": "/main/cart",
            "label": "Cart"
        }
    ]
    const [opened,  toggle ] = useDisclosure(false);
    const { classes } = useStyles();

    const items = links.map((link, index) => {
        return (
            <Text key={index}
                color="dimmed"
                variant='link'
                onClick={() => {
                    navigate(link.link)
                }}
            >
                {link.label}
            </Text>
        )
    })

    return (
        <Header height={56} className={classes.header} mb={120}>
            <div className={classes.inner}>
            <Group>
                <Burger opened={opened} onClick={toggle.open} size="sm" />
                <Text>YRS-LIB</Text>
            </Group>
        <Drawer
            opened={opened}
            onClose={toggle.close}
            title="UserInfo"
            padding="xl"
            size="md"
            >
            <Stack align={'center'}>
                <img
                    src={ron}
                    alt='Avatar'
                    width={256}
                    style={
                        {borderRadius: "100%"}
                    }
                />
                <Text>{user.email}</Text>
                <Button leftIcon={<IconLogout/>} onClick={handleLogout} color="red" size='xs'> logout </Button>
            </Stack>
        </Drawer>

        <Group position="center">
        </Group>
            <Group>
                <Group ml={50} spacing={5} className={classes.links}>
                {items}
                </Group>
                <Autocomplete
                className={classes.search}
                placeholder="Search"
                icon={<IconSearch size={16} stroke={1.5} />}
                data={[]}
                />
            </Group>
            </div>
        </Header>
    );
}
