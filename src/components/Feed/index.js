import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import "./feed.css";

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 650,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function Feed() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
    <div className='mt-4'>
      <div onClick={() => handleOpen()} className="inputarea">
        <textarea disabled placeholder='Express your talks here......'></textarea>
      </div>
    </div>
      
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <textarea className='postarea' type='text' placeholder='Write your post...'/>
          <input type="file" accept="image/png, image/jpg, image/jpeg"/>
          <button className='postbutton'>POST</button>
        </Box>
      </Modal>
    
    </>
  );
}
