import { Alert, Snackbar } from '@mui/material';
import React, { useEffect, useState } from 'react';

const MessageBox=(props)=>{
    useEffect(()=>{
        console.log(props)
    })
    return (<>
             <Snackbar open={props.open} autoHideDuration={props.duration} onClose={props.handleClose}>
                 <Alert severity={props.type}>
                     {props.message}
                 </Alert>
             </Snackbar>
    </>)
}
export default MessageBox;