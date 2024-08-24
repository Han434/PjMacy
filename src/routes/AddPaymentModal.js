import { Modal, Box, Typography, Button, TextField } from '@mui/material';
import { useState } from 'react';

const AddPaymentModal = ({ open, onClose, onAddPayment }) => {
  const [paymentMethod, setPaymentMethod] = useState('');
  const [amount, setAmount] = useState(0);

  const handleAddPayment = () => {
    onAddPayment({ paymentMethod, amount });
    onClose();
  };

  return (
    <Modal
      open={open}
      onClose={onClose}
    >
      <Box sx={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24,
        p: 4,
      }}>
        <Typography variant="h6" component="h2">
            Add Payment
        </Typography>
        <Typography sx={{ mt: 2 }}>
            Enter payment details
        </Typography>
        <form>
            <TextField
            label="Payment Method"
            value={paymentMethod}
            onChange={(e) => setPaymentMethod(e.target.value)}
            sx={{ mt: 2 }}
            />
            <TextField
            label="Amount"
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            sx={{ mt: 2 }}
            />
            <Button variant="contained" onClick={handleAddPayment} sx={{ mt: 2 }}>
            Add Payment
            </Button>
            <Button variant="outlined" sx={{ mt: 2 }}>
                Cancle
            </Button>
        </form>
      </Box>
    </Modal>
  );
};

export default AddPaymentModal;