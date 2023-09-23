import { BankCredentials } from '@/interfaces/host.interface';
import EditIcon from '@mui/icons-material/Edit';
import { IconButton, Typography } from '@mui/material';
import BankCard from './BankCard';

function PaymentSetting() {
  const mockBankCredentials: BankCredentials = {
    name: 'Bao Pham',
    bankName: 'Vietcombank',
    bankAccount: '1231231231'
  };
  return (
    <>
      <Typography variant="h5" fontWeight="500" component="div">
        Payment settings
        <IconButton>
          <EditIcon />
        </IconButton>
      </Typography>
      <BankCard bankCredentials={mockBankCredentials}  />

      {/* <Button></Button>
      <Stack direction="row" spacing={2}>
        <Box>
          <InputLabel htmlFor="modal-link" sx={{ mt: 2 }} required style={{ color: common.black }}>
            Bank
          </InputLabel>
          <TextField
            size="small"
            id="modal-link"
            variant="outlined"
            fullWidth={true}
            // value={url}
            // error={isError('url')}
            // onChange={(event) => setValue('url', event.target.value)}
          />
        </Box>
        <Box>
          <InputLabel htmlFor="modal-due-time" sx={{ mt: 2 }} required style={{ color: common.black }}>
            Bannk Account
          </InputLabel>
          <TextField
            size="small"
            id="modal-due-time"
            variant="outlined"
            fullWidth={true}
            // value={dueTime}
            // error={isError('dueTime')}
            // onChange={(event) => setValue('dueTime', event.target.value)}
          />
        </Box>
      </Stack> */}
    </>
  );
}

export default PaymentSetting;
