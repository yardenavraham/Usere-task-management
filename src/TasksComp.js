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


        <div>
            <Card sx={{ minWidth: 275 }}>
                <CardContent>

                    <Typography variant="body2">
                        <Stack spacing={2}>
                            <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
                                <TextField value={props.user.title} type="text" id="filled-basic" label="Title" variant="filled" />
                            </Box>
                            <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
                                <TextField value={props.user.completed} type="text" id="filled-basic" label="Compeleted" variant="filled" />
                            </Box>

                        </Stack>
                    </Typography>

                </CardContent>
                {!props.user.completed && (
                    <CardActions>
                        <Button size="small" onClick={() => props.callbackUpdateTask(props.user)}>Mark completed</Button>
                    </CardActions>)
                }
            </Card>
        </div>
    );
}

export default TasksComp;


