import { useState, useEffect } from 'react'
import AccountCircle from '@mui/icons-material/AccountCircle';
import EmailRoundedIcon from '@mui/icons-material/EmailRounded';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { makeStyles } from '@mui/styles';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';



function AddUser(props) {
    const [user, setUser] = useState({
        "userId": props.userId,
        "id": props.length,
        "name": "",
        "email": ""
    });

    const useStyles = makeStyles(theme => ({
        titles: {
            letterSpacing: 5, color: "white"
        }

    }));

    const classes = useStyles();


    return (
        <>
        <br></br>
        <Typography component="div" align="center" variant="h6">
                <Box className={classes.titles}>Add new user</Box>
             </Typography>
        <Stack spacing={2} style={{ padding: 10, marginHorizontal: 5, }}>
            <Card sx={{ minWidth: 275, border: 5, borderColor: "primary.main" }}>
                <CardContent>
                    <Stack spacing={2}>
                        <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
                            <AccountCircle sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
                            <TextField onChange={e => setUser({ ...user, name: e.target.value })} id="outlined-helperText" label="Name" size="small" />
                        </Box>
                        <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
                            <EmailRoundedIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
                            <TextField onChange={e => setUser({ ...user, email: e.target.value })} id="outlined-helperText" label="Email" size="small" />
                        </Box>
                    </Stack>
                </CardContent>
                <CardActions>
                    <Button color="success" variant="contained" size="small" onClick={() => {props.callbackAddUser(user) 
                                                                                             props.callbackIsAddUser()}} >Add</Button>
                    <Button color="success" variant="contained" size="small" onClick={() => props.callbackIsAddUser()}>Cancel</Button>
                </CardActions>
            </Card>
        </Stack>
        </>
    );
}

export default AddUser;


