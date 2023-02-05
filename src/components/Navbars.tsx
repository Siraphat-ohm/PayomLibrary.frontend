import { Navbar, Center, Tooltip, UnstyledButton, createStyles, Stack, Button } from '@mantine/core';
import {
    IconHome2,
    IconLogout,
    IconListCheck,
    IconShoppingCart,
} from '@tabler/icons-react';
import { MantineLogo } from '@mantine/ds';
import { useLinkClickHandler, useLocation, useNavigate } from 'react-router-dom';
import axios from '../config/baseAxios';

const useStyles = createStyles((theme) => ({
    link: {
        width: 50,
        height: 50,
        borderRadius: theme.radius.md,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.colors.gray[7],
    '&:hover': {
        backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.colors.gray[0],
    },
    },
    active: {
    '&, &:hover': {
        backgroundColor: theme.fn.variant({ variant: 'light', color: theme.primaryColor }).background,
        color: theme.fn.variant({ variant: 'light', color: theme.primaryColor }).color,
        },
    },


}));


function NavbarLink({ icon: Icon, label, active, onClick }:any ) {
    const { classes, cx } = useStyles();
    return (
    <Tooltip label={label} position="right" transitionDuration={0}>
        <UnstyledButton onClick={onClick} className={cx(classes.link, { [classes.active]: active })}>
            <Icon stroke={1.5} />
        </UnstyledButton>
    </Tooltip>
    );
}

const mockdata = [
    { icon: IconHome2, label: 'Home', link:'/main/home' },
    { icon: IconListCheck, label: 'Order', link:'/main/orders'},
    { icon: IconShoppingCart, label: 'Cart', link:'/main/cart'}
];

export function Navbars() {
    const navigate = useNavigate();

    const handleLogout = () => {
        axios.get("/logout").then(res => {
            navigate('/login', { replace: true })
        })
    }
    
    const links = mockdata.map((link) => {
        return(<NavbarLink
            {...link}
            key={link.label}
            active={useLocation().pathname === link.link}
            onClick={useLinkClickHandler(link.link)}
        />)
    });

    return (
    <Navbar height={950} width={{ base: 80 }} p="md">
        <Center>
            <MantineLogo type="mark" size={30} />
        </Center>
        <Navbar.Section grow mt={50}>
            <Stack justify="center" spacing={0}>
                {links}
            </Stack>
            </Navbar.Section>
            <Navbar.Section>
            <Stack justify="center" spacing={0}>
            <NavbarLink icon={IconLogout} label="Logout" onClick={handleLogout}/>
        </Stack>
        </Navbar.Section>
    </Navbar>
    );
}
