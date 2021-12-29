import { useState, useEffect } from 'react'
import axios from 'axios';
import ManageUsers from './ManageUsers'
import { makeStyles } from '@mui/styles';



function App() {

  const [users, setUsers] = useState([]);
  const [posts, setPosts] = useState([]);
  const [todos, setTodos] = useState([]);
  const useStyles = makeStyles(theme => ({
    bg: {
      backgroundColor: `${theme.palette.primary.dark}`,
    },
  }));

  const classes = useStyles();


  useEffect(async () => {
    let respUsers = await axios.get("https://jsonplaceholder.typicode.com/users");
    let respPosts = await axios.get("https://jsonplaceholder.typicode.com/posts");
    let respTodos = await axios.get("https://jsonplaceholder.typicode.com/todos");
    setUsers(respUsers.data);
    setPosts(respPosts.data);
    setTodos(respTodos.data);
  }, [])

  return (
      <ManageUsers users={users} usersUrl="https://jsonplaceholder.typicode.com/users" posts={posts} todos={todos} ></ManageUsers >
  );
}

export default App;


