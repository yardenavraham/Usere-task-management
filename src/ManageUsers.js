import { useState, useEffect } from 'react'
import UserComp from './UserComp'
import TasksComp from './TasksComp';
import PostsComp from './PostsComp';
import AddUser from './AddUser';
import AddTodo from './AddTodo'
import AddPost from './AddPost'
import AddCircleRoundedIcon from '@mui/icons-material/AddCircleRounded';
import PersonAddAltRoundedIcon from '@mui/icons-material/PersonAddAltRounded';
import IconButton from '@mui/material/IconButton';
import AddTaskRoundedIcon from '@mui/icons-material/AddTaskRounded';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import { makeStyles } from '@mui/styles';
import Tooltip from '@mui/material/Tooltip';
import { getCheckboxUtilityClass } from '@mui/material';


function ManageUsers(props) {

  const [users, setUsers] = useState([]);
  const [posts, setPosts] = useState([]);
  const [todos, setTodos] = useState([]);
  const [searchInput, setSearchInput] = useState('');
  const [showTasks, setShowTasks] = useState(false);
  const [userId, setUserId] = useState([]);
  const [isAddTodo, setIsAddTodo] = useState(false);
  const [isAddPost, setIsAddPost] = useState(false);
  const [isAddUser, setIsAddUser] = useState(false);

  const useStyles = makeStyles(theme => ({
    center: {
      justifyContent: "center", alignItems: "center"
    },
    centerDiv: {
      display: "flex", flexDirection: "column",
    }
  }));

  const classes = useStyles();


  useEffect(() => {
    setUsers(props.users);
    setPosts(props.posts);
    setTodos(props.todos);
  }, [props, searchInput, users, todos, posts, showTasks, userId, isAddPost, isAddTodo, isAddUser])


  const updateUser = (item) => {


    const index = users.findIndex(u => u.id === item.id);

    
    setUsers(users.splice(index, 1, item));

  }

  const deleteUser = (item) => {

    const index = users.findIndex(u => u.id === item.id);
    setUsers(users.splice(index, 1));

  }

  const updateTask = (item) => {
    let newItem = { ...item };
    newItem.completed = true;
    const index = todos.findIndex(u => u.id === newItem.id);
    setTodos(todos.splice(index, 1, newItem));
    //checkIfCompleted(newItem.id);
  }

  // const checkIfCompleted = (itemId) => {
  //   const tasksUsers = users.filter(x=> x.id === itemId);
  //   const checkCompleted = tasksUsers.map(x=> x.completed);
  //   const index = todos.findIndex(u => u.id === itemId);
  //   if (!checkCompleted.includes(false))
  //   {
  //     setUsers({ ...index, completed: true })
  //   }
    
  // }

  const addUser = (user) => {
    setUsers(users.splice(0, 0, { ...user, id: users.length + 1 }));
  }

  const addTask = (task) => {
    setTodos(todos.splice(0, 0, { ...task, id: todos.length + 1 }));
    setIsAddTodo(false);
  }

  const addPost = (post) => {
    setPosts(posts.splice(0, 0, { ...post, id: posts.length + 1 }));
    setIsAddPost(false);
  }



  return (
    <Grid container spacing={2} >
      <Grid item lg={12} >

        <TextField type="text" onChange={e => setSearchInput(e.target.value)} id="outlined-basic" label="Search user" variant="outlined" />
        <Button onClick={() => {
          setIsAddUser(true)
          setIsAddPost(false)
          setIsAddTodo(false)
          setShowTasks(false)
        }}
          variant="contained" endIcon={<PersonAddAltRoundedIcon />}>
          Add user
        </Button>

        <Button onClick={() => setIsAddTodo(true)} variant="contained" endIcon={<AddTaskRoundedIcon />}>
          Add task
        </Button>


        <Button onClick={() => setIsAddPost(true)} variant="contained" endIcon={<AddCircleRoundedIcon />}>
          Add post
        </Button>
      </Grid>

      <Grid item lg={4}>
        <ul>
          {users.filter(item => {
            return item.name.toLowerCase().includes(searchInput) || item.email.toLowerCase().includes(searchInput)
          })
            .map(item => {
              let arr = todos.filter(itemTodo => itemTodo.userId === item.id).map(itemCompleted => itemCompleted.completed);
              let isCompleted = !arr.includes(false);
              return (
                <UserComp key={item.id}
                  item={item}
                  isCompleted={isCompleted}
                  usersUrl={props.usersUrl}
                  callback={item => {
                    setShowTasks(item.showTasks);
                    setUserId(item.userId)
                  }}
                  callbackUpdate={item =>
                    updateUser(item)
                  }
                  callbackDelete={item =>
                    deleteUser(item)
                  }
                ></UserComp>
              )
            })}
        </ul>



      </Grid>



      {showTasks && (<Grid item lg={4}>
        {!isAddTodo && (
          
          <div >

            <ul>
              {todos.filter(item => item.userId === userId)
                .slice(0, 5)
                .map(item => {
                  return (
                    <TasksComp key={item.id}
                      user={item}
                      callbackUpdateTask={item => updateTask(item)}
                    ></TasksComp>)
                })
              }
            </ul>
          </div>)
        }

        {isAddTodo && (
          <AddTodo length={todos.length + 1} userId={userId} callbackAddTask={item => addTask(item)} callbackIsAddTask={item => setIsAddTodo(false)}></AddTodo>
        )}
      </Grid>)}

      {showTasks && (<Grid item lg={4}>
        {!isAddPost && (
          <div >

            <ul>
              {posts.filter(item => item.userId === userId).slice(0, 10).map(item => {
                return (<PostsComp key={item.id}
                  user={item}

                ></PostsComp>)
              })
              }
            </ul>
          </div>)}

        {isAddPost && (<Grid item lg={4}>
          <AddPost length={posts.length + 1} userId={userId} callbackAddPost={item => addPost(item)} callbackIsAddPost={item => setIsAddPost(false)}></AddPost>
        </Grid>)}
      </Grid>)}



      {!showTasks && isAddUser && (<Grid item lg={4}>
        <AddUser length={users.length + 1} userId={userId} callbackAddUser={item => addUser(item)} callbackIsAddUser={item => setIsAddUser(false)}></AddUser>
      </Grid>)}
    </Grid>
  );
}

export default ManageUsers;


