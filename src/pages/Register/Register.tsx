import { Box, Button, Paper, TextField, Typography } from "@mui/material"
import { useState } from "react";
import './Register.css';
import { Link } from "react-router-dom";
import { PATHS } from "../../constants/paths";
import { AuthService } from "../../services/auth";
import { AuthRequest } from "../../services/auth/type";

const Register: React.FC = () => {

    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [password2, setPassword2] = useState<string>('');

    const handleSubmitRegister = (event: React.FormEvent<HTMLFormElement>): void => {
        event.preventDefault();
        // Handle form submission logic here
        // console.log('Email:', email);
        // console.log('Password:', password);
        // console.log('Password2:', password2);

        if (password !== password2) {
            alert('Password not match');
            return;
        }

        const authRequest: AuthRequest = {
            email: email,
            password: password,
        }

        AuthService.register(authRequest);

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
                    <form onSubmit={handleSubmitRegister}>
                        <div className="mb-4 mt-2">
                            <TextField
                                fullWidth
                                label="อีเมล์"
                                variant="outlined"
                                type="email"
                                required
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>
                        <div className="mb-4">
                            <TextField
                                fullWidth
                                label="รหัสผ่าน"
                                variant="outlined"
                                type="password"
                                required
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </div>
                        <div className="mb-6">
                            <TextField
                                fullWidth
                                label="ยืนยันรหัสผ่าน "
                                variant="outlined"
                                type="password"
                                required
                                value={password2}
                                onChange={(e) => setPassword2(e.target.value)}
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