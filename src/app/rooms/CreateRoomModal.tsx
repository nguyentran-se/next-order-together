import CloseIcon from '@mui/icons-material/Close';
import { Box, Button, CircularProgress, IconButton, InputLabel, Modal, Stack, TextField, Typography } from '@mui/material';
import { common } from '@mui/material/colors';
import { useEffect, useState } from 'react';
import { isDueTimeValid, isUrlValid } from './room-utils';
import { useCreateRoom } from '@/queries/room/useCreateRoom';
import Spacer from '@/components/common/Spacer';

const modalStyle = {
  position: 'absolute' as 'absolute',
  top: '40%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 464,
  height: 380,
  bgcolor: 'background.paper',
  borderRadius: '5px',
  boxShadow: 24,
  p: '16px 24px',
};

function CreateRoomModal({ open, onClose }: { open: boolean; onClose: () => void }) {
  const [url, setUrl] = useState<string>('');
  const [dueTime, setDueTime] = useState<string>('');
  const [bankAccount, setBankAccount] = useState<string>('');
  const [created, setCreated] = useState(false);
  const { mutate: createRoom, isLoading  } = useCreateRoom(() => {onClose()});

  const setValue = (type: string, val: string) => {
    const handler: { [type: string]: any } = {
      url: () => setUrl(val),
      dueTime: () => setDueTime(val),
      bankAccount: () => setBankAccount(val),
    };
    if (handler[type]) handler[type]();
  };

  const isError = (type: string) => {
    const handler: { [type: string]: any } = {
      url: () => created && !isUrlValid(url),
      dueTime: () => created && !isDueTimeValid(dueTime),
    };
    return handler[type] ? handler[type]() : false;
  };

  const isFormValid = isUrlValid(url) && isDueTimeValid(dueTime);

  const onCreateRoom = async () => {
    if (!isFormValid) {
      setCreated(true);
    } else {
      createRoom({
        scrapingUrl: url || '',
        dueTime: dueTime || '',
        alias: bankAccount || '',
      });
    }
  };

  const handleClose = (event: {}, reason: 'backdropClick' | 'escapeKeyDown') => {
    if (reason && reason == 'backdropClick') return;
  };

  useEffect(() => {
    setValue('url', '');
    setValue('dueTime', '');
    setValue('bankAccount', '');
    setCreated(false);
  }, [open]);

  return (
    <Modal open={open} onClose={handleClose} aria-labelledby="modal-create-room" aria-describedby="modal-create-room-1">
      <Box sx={modalStyle}>
        {!isLoading && (
          <>
            <Stack justifyContent="space-between" flexDirection="row">
              <Typography id="modal-modal-title" variant="h6" component="h2">
                Create Room
              </Typography>{' '}
              <IconButton onClick={onClose}>
                <CloseIcon />
              </IconButton>
            </Stack>
            <Box width="100%">
              <InputLabel htmlFor="modal-link" sx={{ mt: 2 }} required style={{ color: common.black }}>
                Link to Food store
              </InputLabel>
              <TextField
                size="small"
                id="modal-link"
                variant="outlined"
                fullWidth={true}
                value={url}
                error={isError('url')}
                onChange={(event) => setValue('url', event.target.value)}
              />

              <InputLabel htmlFor="modal-due-time" sx={{ mt: 2 }} required style={{ color: common.black }}>
                Due time
              </InputLabel>
              <TextField
                size="small"
                id="modal-due-time"
                variant="outlined"
                fullWidth={true}
                value={dueTime}
                error={isError('dueTime')}
                onChange={(event) => setValue('dueTime', event.target.value)}
              />

              <InputLabel htmlFor="modal-bank-account" sx={{ mt: 2 }} style={{ color: common.black }}>
                Bank account
              </InputLabel>
              <TextField
                size="small"
                id="modal-bank-account"
                variant="outlined"
                fullWidth={true}
                value={bankAccount}
                onChange={(event) => setValue('bankAccount', event.target.value)}
              />
            </Box>
            <Spacer size={3} />
            <Box
              sx={{
                float: 'right',
              }}
            >
              <Button variant="outlined" sx={{ mr: 2 }} onClick={onClose}>
                Cancel
              </Button>
              <Button variant="contained" disableElevation onClick={onCreateRoom}>
                Create
              </Button>
            </Box>
          </>
        )}
        {isLoading && <Stack justifyContent='center' alignItems='center' height='100%'><Box><CircularProgress /></Box></Stack>}
      </Box>
    </Modal>
  );
}

export default CreateRoomModal;
