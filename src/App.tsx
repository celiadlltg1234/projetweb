
import './App.css'
import  {tasksCollection} from "./data";

function App() {
  const tasks = tasksCollection;
  return (
    <>
    <h1>Todo List</h1>
    <p>Nombre de tâches : {tasksCollection.length} </p>
    <ul>
      {tasks.map((task) => (
        <li key={task.id}>
          <p>Contenu : {task.content}</p>
          <p>Statut : {task.statut}</p>
          <p>Date de création : {task.createdAt.toLocaleDateString()}</p>
          <p>Date d'achèvement : {task.completedAt ? task.completedAt.toLocaleDateString() : "Non complétée"}</p>
        </li>
      ))}
    </ul>
    <footer>
      <p>© 2024 Mon Application Todo List</p>
    </footer>
    </>
  )
}

export default App
