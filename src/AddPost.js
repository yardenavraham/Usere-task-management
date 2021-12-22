import { useState, useEffect } from 'react'
import { createTheme } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';





function AddPost(props) {

    const [post, setPost] = useState({
        "userId": props.userId,
        "id": props.length,
        "title": "",
        "body": ""
    });

    useEffect(() => {
        setPost(post);
    }, [post])

    return (
        <>
            <h3> Add new post</h3>
            <form >
                <Card sx={{ minWidth: 275 }}>
                    <CardContent>
                        <Typography variant="body2">
                            <Stack spacing={2}>
                                <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
                                    <TextField onChange={e => setPost({ ...post, title: e.target.value })} type="text" id="filled-basic" label="Title" variant="filled" />
                                </Box>
                                <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
                                    <TextField onChange={e => setPost({ ...post, body: e.target.value })} type="text" id="filled-basic" label="Body" variant="filled" />
                                </Box>

                            </Stack>
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button size="small" onClick={() => props.callbackAddPost(post)}>Add</Button>
                        <Button size="small" onClick={() => props.callbackIsAddPost()}>Cancel</Button>
                    </CardActions>
                </Card>
            </form>


        </>
    );
}

export default AddPost;


