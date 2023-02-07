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
    isAdmin?: boolean
}

const Login = ({isAdmin = false}: LoginProps) => {
    const { isAuthenticated, setIsAuthenticated } = useAuth();

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

        axios.post('/login', { email, password, isAdmin }, { 'headers': { "Content-Type": "application/json" } } )
            .then( res => {
                setIsAuthenticated(true)
            })
            .catch(err => console.log(err));
    }

    return (
            isAuthenticated ? 
                <Navigate to="/main/home" replace={true}/>
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
            <Login isAdmin={true}/>

        </div>
    )
}

export { UserLogin, AdminLogin};