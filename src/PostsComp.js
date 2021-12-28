
import Card from '@mui/material/Card';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import CardContent from '@mui/material/CardContent';
import { makeStyles } from '@mui/material';



function PostsComp(props) {

    return (
        <Stack spacing={2} style={{ padding: 10, marginHorizontal: 5, }}>
            <Card sx={{ minWidth: 275, border: 3, borderColor:"secondary.main"}}>
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
        </Stack>

    );
}

export default PostsComp;


