import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

function TasksComp(props) {


    return (


        <Stack spacing={2} style={{ padding: 10, marginHorizontal: 5, }}>
            <Card sx={{ minWidth: 275, border: 3, borderColor:"secondary.main"}}>
                <CardContent>

                    <Typography variant="body2">
                        <Stack spacing={2}>
                            <Box >
                                <TextField value={props.user.title} type="text" id="filled-basic" label="Title" variant="filled" />
                            </Box>
                            <Box >
                                <TextField value={props.user.completed} type="text" id="filled-basic" label="Compeleted" variant="filled" />
                            </Box>

                        </Stack>
                    </Typography>

                </CardContent>
                {!props.user.completed && (
                    <CardActions>
                        <Button color="secondary" variant="contained" size="small" onClick={() => props.callbackUpdateTask(props.user)}>Mark completed</Button>
                    </CardActions>)
                }
            </Card>
        </Stack>
    );
}

export default TasksComp;


