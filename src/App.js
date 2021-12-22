import { useState, useEffect } from 'react'
import axios from 'axios';
import ManageUsers from './ManageUsers'


function App() {

  const [users, setUsers] = useState([]);
  const [posts, setPosts] = useState([]);
  const [todos, setTodos] = useState([]);


  useEffect(async () => {
    let respUsers = await axios.get("https://jsonplaceholder.typicode.com/users");
    let respPosts = await axios.get("https://jsonplaceholder.typicode.com/posts");
    let respTodos = await axios.get("https://jsonplaceholder.typicode.com/todos");
    setUsers(respUsers.data);
    setPosts(respPosts.data);
    setTodos(respTodos.data);
  }, [])

  return (
    <div style={{ backgroundColor:'#eaeef3'}}>
  <ManageUsers

    users={users} usersUrl="https://jsonplaceholder.typicode.com/users" posts={posts} todos={todos} ></ManageUsers >
    </div >
  );
}

export default App;


