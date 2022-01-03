import { useState } from 'react'
import { AccountCircle,EmailRounded } from '@mui/icons-material';
import { Stack,Button,TextField,Box, Typography, Card, CardActions, CardContent} from '@mui/material';
import { makeStyles } from '@mui/styles';

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
                            <EmailRounded sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
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


