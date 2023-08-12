import './App.css'
import NavBar from './components/NavBar'
import ShowTasksCard from './components/ShowTasksCard'
import TasksCard from './components/TasksCard'

function App() {

  // const tasks = [
  //   {task_name:'Todo List',task_description:'I shell create first project of todo list'},
  //   {task_name:'Chat App',task_description:'I shell create secont project of chat app'},
  //   {task_name:'E-commerce app',task_description:'I shell create third project of ecommerce app'}
  // ]

  return (
    <>
    <NavBar/>
    <div
          className="container-fluid d-flex justify-content-between align-items-center gap-2"
          style={{ width: "100%"}}
        >
          <TasksCard />
          <ShowTasksCard />
    </div>
    </>
  )
};

export default App
