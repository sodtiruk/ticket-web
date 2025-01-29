import { Box, Button, Paper, TextField, Typography } from "@mui/material"
import { useState } from "react";
import './Login.css';

const Login: React.FC = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        // Handle form submission logic here
        console.log('Email:', email);
        console.log('Password:', password);
    };

    return (
        <Box
            className="flex justify-center items-center h-screen bg-gray-100"
        >
            <Paper
                elevation={3}
                className="w-96 p-8"
            >
                <Typography variant="h4" className="text-center mb-6">
                    เข้าสู่ระบบ 
                </Typography>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <TextField
                            fullWidth
                            label="Email"
                            variant="outlined"
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <div className="mb-6">
                        <TextField
                            fullWidth
                            label="Password"
                            variant="outlined"
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    <Button
                        fullWidth
                        type="submit"
                        variant="contained"
                        color="primary"
                        className="mb-4"
                    >
                        Login
                    </Button>
                    <div className="text-center">
                        <Typography variant="body2">
                            Don't have an account?{' '}
                            <a href="#" className="text-blue-500 hover:underline">
                                Sign up
                            </a>
                        </Typography>
                    </div>
                </form>
            </Paper>
        </Box>
    )
}

export default Login