import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Box, Paper, Typography, TextField, Button, Modal } from '@mui/material';
import { PATHS } from '../../constants/paths';
import { registerUser } from '../../services/auth';
import { RegisterRequest } from '../../services/auth/type';

const Register: React.FC = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [password2, setPassword2] = useState<string>('');
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const navigate = useNavigate();

  //Modal
  const [open, setOpen] = useState<boolean>(false);
  const handleClose = () => setOpen(false);
  const handleOpen = () => setOpen(true);


  const handleSubmitRegister = async (event: React.FormEvent<HTMLFormElement>): Promise<void> => {
    event.preventDefault();
    setError(null);

    if (password !== password2) {
      setError('รหัสผ่านไม่ตรงกัน');
      handleOpen();
      return;
    }

    try {
      setLoading(true);
      const registerRequest: RegisterRequest = { email, password };
      const response = await registerUser(registerRequest);

      if (response.statusCode === 200) {
        alert(response.message || 'ลงทะเบียนสำเร็จ!');
        navigate(PATHS.LOGIN);
      }

      console.log(response);

    } catch (err: unknown) {
      if (err instanceof Error) {
        setError(err.message || 'เกิดข้อผิดพลาดที่ไม่คาดคิด');
      } else {
        setError('เกิดข้อผิดพลาดที่ไม่คาดคิด');
      }
    } finally {
      setLoading(false);
    }
  };

  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };

  return (
    <>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            แจ้งเตือน 
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            รหัสผ่านไม่ตรงกัน
          </Typography>
        </Box>
      </Modal>

      <Box className="flex justify-center items-center h-screen bg-gray-100">
        <Paper elevation={3} className="w-96 p-8">
          <Typography variant="h4" className="text-center mb-4">
            ลงทะเบียน
          </Typography>
          <form onSubmit={handleSubmitRegister}>
            {error && (
              <Typography color="error" className="mb-4 text-center">
                {error}
              </Typography>
            )}
            <div className="mb-4">
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
                label="ยืนยันรหัสผ่าน"
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
              disabled={loading}
              className="mb-4"
            >
              {loading ? 'กำลังลงทะเบียน...' : 'ลงทะเบียน'}
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
  );
};

export default Register;
