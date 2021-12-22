
import Card from '@mui/material/Card';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import CardContent from '@mui/material/CardContent';



function PostsComp(props) {

    return (
        <div>
            <form >
                <Card sx={{ minWidth: 275 }}>
                    <CardContent>
                        <Typography variant="body2">
                            <Stack spacing={2}>
                                <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
                                    <TextField value={props.user.title} type="text" id="filled-basic" label="Title" variant="filled" />
                                </Box>
                                <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
                                    <TextField value={props.user.body} type="text" id="filled-basic" label="Body" variant="filled" />
                                </Box>
                            </Stack>
                        </Typography>
                    </CardContent>
                </Card>
            </form>
        </div>
    );
}

export default PostsComp;


