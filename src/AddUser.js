import { useState, useEffect } from 'react'
import AccountCircle from '@mui/icons-material/AccountCircle';
import EmailRoundedIcon from '@mui/icons-material/EmailRounded';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

function AddUser(props) {
    const [user, setUser] = useState({
        "userId": props.userId,
        "id": props.length,
        "name": "",
        "email": ""
    });


    return (
        <>
            <h3> Add new user</h3>
            <form >
                <Stack spacing={2}>

                    <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
                        <AccountCircle sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
                        <TextField onChange={e => setUser({ ...user, name: e.target.value })} id="input-with-sx" variant="standard" />
                    </Box>
                    <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
                        <EmailRoundedIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
                        <TextField onChange={e => setUser({ ...user, email: e.target.value })} id="input-with-sx" variant="standard" />
                    </Box>
                    <Stack spacing={2} direction="row" >
                        <Button variant="outlined" onClick={() => props.callbackAddUser(user)} >Add</Button>
                        <Button variant="outlined" onClick={() => props.callbackIsAddUser()}>Cancel</Button>
                    </Stack>
                </Stack>
            </form>
        </>
    );
}

export default AddUser;


