import { Modal } from '@mui/material'
import React, { useState } from 'react';

interface CustomModalProps {
    open: boolean;
    setOpen: (open: boolean) => void;
}

function AleartModal(  ): React.FC<CustomModalProps> {

    const handleClose = () => setOpen(false);


    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        bgcolor: 'background.paper',
        boxShadow: 24,
        p: 4,
    };


  return (
    <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2" style={{ color: 'red', textAlign: 'center' }}>
            แจ้งเตือน 
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }} style={{ textAlign: 'center' }}>
            รหัสผ่านไม่ตรงกัน
          </Typography>
        </Box>
      </Modal>
  )
}

export default AleartModal