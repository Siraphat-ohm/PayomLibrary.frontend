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
import { IconKey } from '@tabler/icons';
import { Navigate } from 'react-router-dom';
import axios from '../../config/baseAxios';
import { useAuth } from '../../context/AuthContext';

export const LoginAdmin = () => {
    const { isAuthenticated, setIsAuthenticated } = useAuth();

    const form = useForm({
        initialValues: {
            user: '',
            password: '',
        },
    
        validate: {
            password: (val) => (val.length <= 6 ? 'Password should include at least 6 characters' : null),
        },
    });

    const handleLogin = (event:any) => {
        event.preventDefault()
        const user = form.getInputProps('user').value;
        const password = form.getInputProps('password').value;

        axios.post('/login', { user, password }, { 'headers': { "Content-Type": "application/json" } } )
            .then( res => {
                setIsAuthenticated(true)
            })
            .catch(err => console.log(err));
    }

    return (
            isAuthenticated ? 
                <Navigate to="/sudo/home" replace={true}/>
                            :  
                <Container size={420} my={40}>
                    <Title
                    align="center"
                    sx={(theme) => ({ fontFamily: `Greycliff CF, ${theme.fontFamily}`, fontWeight: 900 })}
                    >
                        Admin <IconKey/>
                    </Title>
                    <Paper withBorder shadow="md" p={30} mt={30} radius="md">

                    <form onSubmit={handleLogin}>
                        <Stack>
                        <TextInput
                            required
                            label="User"
                            placeholder="Your username"
                            value={form.values.user}
                            onChange={(event) => form.setFieldValue('user', event.currentTarget.value)}
                            error={form.errors.user && 'Invalid user'}
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
