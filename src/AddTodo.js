import { useState, useEffect } from 'react'
// import './index.css';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import CreateRoundedIcon from '@mui/icons-material/CreateRounded';

function AddTodo(props) {
    const [todo, setTodo] = useState({
        "userId": props.userId,
        "id": props.length,
        "title": "",
        "completed": false
    });

    useEffect(() => {
        setTodo(todo);
    }, [todo])

    return (
        <>
            <h3> Add new todo</h3>
            <form >
                <Stack spacing={2}>
                    <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
                        <CreateRoundedIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
                        <TextField type="text" onChange={e => setTodo({ ...todo, title: e.target.value })} id="outlined-basic" label="Title" variant="outlined" />
                    </Box>
                    <Stack spacing={2} direction="row" >
                        <Button variant="outlined" onClick={() => props.callbackAddTask(todo)}>Add</Button>
                        <Button variant="outlined" onClick={() => props.callbackIsAddTask()}>Cancel</Button>
                    </Stack>
                </Stack>
            </form>
        </>
    );
}

export default AddTodo;


