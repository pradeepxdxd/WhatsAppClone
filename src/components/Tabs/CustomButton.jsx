import React from 'react'
import { handleSnackbarClick } from '../../store/ui/snakebar/snakebar.slice'
import { useDispatch } from 'react-redux'
import { Button } from '@mui/material';

export default function CustomButton({ tab }) {
  const dispatch = useDispatch()
  return (
    <>
      <Button
        variant="contained"
        onClick={() => dispatch(handleSnackbarClick())}
        sx={{
          backgroundColor: '#2c343d', // Set the background color to gray
          color: 'gray',          // Set the text color to white for contrast
          '&:hover': {
            backgroundColor: '#303941', // Darker shade on hover
          },
          borderRadius: '50px',
          margin: '0 4px',
          fontWeight: 'small',
          '@media (max-width: 799px)': {
            fontWeight: 'lighter',
            margin: '0px 0px',
          },
          '@media (max-width: 736px)': {
            fontSize: '10px',
            margin: '0px 0px',
          },
          '@media (max-width: 6750px)': {
            fontSize: '10px',
            margin: '0px 0px',
            width: '10px',
            marginLeft: '7px'
          },
        }}
      >
        {tab}
      </Button>
    </>
  )
}
