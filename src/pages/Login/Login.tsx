import {
    TextInput,
    PasswordInput,
    Paper,
    Title,
    Container,
    Button,
    Stack,
} from '@mantine/core';
import { useForm } from '@mantine/form';
import { IconKey } from '@tabler/icons-react';
import { Navigate } from 'react-router-dom';
import axios from '../../config/baseAxios';
import { useAuth } from '../../context/AuthContext';

interface LoginProps {
    admin?: boolean
}

const Login = ({admin = false}: LoginProps) => {
    const { isAuthenticated, setIsAuthenticated, isAdmin, setIsAdmin } = useAuth();

    const form = useForm({
        initialValues: {
            email: '',
            password: '',
        },
    
        validate: {
            email: (val) => (/^\S+@\S+$/.test(val) ? null : 'Invalid email'),
            password: (val) => (val.length <= 6 ? 'Password should include at least 6 characters' : null),
        },
    });

    const handleLogin = (event:any) => {
        event.preventDefault()
        const email = form.getInputProps('email').value;
        const password = form.getInputProps('password').value;

        axios.post('/login', { email, password, admin }, { 'headers': { "Content-Type": "application/json" } } )
            .then( res => {
                setIsAuthenticated(true);
                setIsAdmin(res.data.isAdmin);
            })
            .catch(err => console.log(err));
    }

    return (
            isAuthenticated ? 
                isAdmin ? <Navigate to="/sudo" replace={true}/> : <Navigate to="/main/home" replace={true}/> 
                            :  
                <Container size={420} my={40}>
                    <Paper withBorder shadow="md" p={30} mt={30} radius="md">

                    <form onSubmit={handleLogin}>
                        <Stack>
                        <TextInput
                            required
                            label="Email"
                            placeholder="hello@mantine.dev"
                            value={form.values.email}
                            onChange={(event) => form.setFieldValue('email', event.currentTarget.value)}
                            error={form.errors.email && 'Invalid email'}
                        />

                        <PasswordInput
                            required
                            label="Password"
                            placeholder="Your password"
                            value={form.values.password}
                            onChange={(event) => form.setFieldValue('password', event.currentTarget.value)}
                            error={form.errors.password && 'Password should include at least 6 characters'}
                        />
                        </Stack>
                        <Button fullWidth mt="xl" type='submit'>
                            login
                        </Button>
                        </form>
                    </Paper>
                </Container> 
    );
}

const UserLogin = () => {
    return (
        <div style={{paddingTop:"30px"}}>
            <Title
            align="center"
            sx={(theme) => ({ fontFamily: `Greycliff CF, ${theme.fontFamily}`, fontWeight: 900 })}
            >
            Welcome to yrs-lib
            </Title>
            <Login/>
        </div>
    )
}

const AdminLogin = () => {
    return (
        <div style={{paddingTop:"30px"}}>
            <Title
            align="center"
            sx={(theme) => ({ fontFamily: `Greycliff CF, ${theme.fontFamily}`, fontWeight: 900 })}
            >
                Admin <IconKey/>
            </Title>
            <Login admin/>

        </div>
    )
}

export { UserLogin, AdminLogin};