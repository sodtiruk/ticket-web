import { Box, Button, Paper, TextField, Typography } from "@mui/material"
import { useState } from "react";
import './Register.css';
import { Link } from "react-router-dom";
import { PATHS } from "../../constants/paths";

const Register: React.FC = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        // Handle form submission logic here
        console.log('Email:', email);
        console.log('Password:', password);
    };

    return (
        <>
            <Box
                className="flex justify-center items-center h-screen bg-gray-100"
            >
                <Paper
                    elevation={3}
                    className="w-96 p-8"
                >
                    <Typography variant="h4" className="text-center">
                        ลงทะเบียน
                    </Typography>
                    <form onSubmit={handleSubmit}>
                        <div className="mb-4 mt-2">
                            <TextField
                                fullWidth
                                label="Email"
                                variant="outlined"
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>
                        <div className="mb-4">
                            <TextField
                                fullWidth
                                label="Password"
                                variant="outlined"
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
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
                            ลงทะเบียน 
                        </Button>
                        <div className="text-center">
                            <Typography variant="body2">
                                มี username และ password แล้ว?{' '}
                                <Link to={PATHS.LOGIN} className="text-blue-500 hover:underline">
                                    เข้าสู่ระบบ 
                                </Link>
                            </Typography>
                        </div>
                    </form>
                </Paper>
            </Box>
        </>
    )
}

export default Register 