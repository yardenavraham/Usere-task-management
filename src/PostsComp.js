
import {Stack,Card,CardContent, TextField} from '@mui/material';

function PostsComp(props) {

    return (
        <Stack spacing={2} style={{ padding: 10, marginHorizontal: 5, }}>
            <Card sx={{ minWidth: 275, border: 5, borderColor:"primary.main"}}>
                <CardContent>
                        <Stack spacing={2}>
                            <TextField value={props.user.title} type="text" id="outlined-helperText" label="Title" size="small" />
                            <TextField value={props.user.body} type="text" id="outlined-helperText" label="Body" size="small" />
                        </Stack>
                </CardContent>
            </Card>
        </Stack>

    );
}

export default PostsComp;


