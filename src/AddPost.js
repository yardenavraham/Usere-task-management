import { useState, useEffect } from 'react';
import { Stack, Button, TextField, Box, Typography, Card, CardActions, CardContent } from '@mui/material';

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
            <br></br>
            <Stack spacing={2} style={{ padding: 10, marginHorizontal: 5, }}>
                <Card sx={{ minWidth: 275, border: 5, borderColor: "primary.main" }}>
                    <CardContent>
                        <Stack spacing={2}>
                                <TextField onChange={e => setPost({ ...post, title: e.target.value })} type="text" id="outlined-basic" label="Title" variant="outlined" />
                                <TextField onChange={e => setPost({ ...post, body: e.target.value })} type="text" id="outlined-basic" label="Body" variant="outlined" />
                        </Stack>
                    </CardContent>
                    <CardActions>
                        <Button color="success" variant="contained" size="small" onClick={() => props.callbackAddPost(post)}>Add</Button>
                        <Button color="success" variant="contained" size="small" onClick={() => props.callbackIsAddPost()}>Cancel</Button>
                    </CardActions>
                </Card>
            </Stack>
        </>


    );
}

export default AddPost;


