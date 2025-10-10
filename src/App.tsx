
import './App.css'
//import des dépendances React et uuid
import {v4 as uuidv4} from "uuid";
import React, { useState, useEffect, type JSX } from "react";

//import des types et données
import type { Task } from "./Task";
import  {tasksCollection} from "./data";

//import des composants enfants
import { TaskForm } from './composant/TaskForm';
import { TaskPreview } from './composant/TaskPreview';


function App() {

  const [tasks, setTasks] = useState<Task[]>(tasksCollection);

//fonction pour ajouter une nouvelle tâche
  function addNewTask(content: string){
    const newTask: Task = {
      id: uuidv4(),
      content,
      statut: "todo",
      createdAt: new Date(),
    };
    setTasks([newTask, ...tasks]);//ajoute la nouvelle tâche au début de la liste
  }

  //fonction pour valider une tâche
  function validateTask(id: string){
    setTasks(tasks.map((task) => {
      if(task.id === id){
        return {...task,
                statut: "done", 
                completedAt: new Date()};
      }
      return task;
    }));
  }
//rendu du composant
  return (
    <>
    <h1>Todo List</h1>
    <p>Nombre de tâches : {tasks.length} </p>
    {/*<button id="newtask" onClick={handleClick}>
        Nouvelle tâche
    </button>*/}
    <TaskForm onAddTask={addNewTask} />
    {/*Boucle pour afficher les tâches*/}
    {tasks.map((task) => (
      <TaskPreview
       key={task.id} 
       task={task} 
       onValidateTask={validateTask} />
    ))}
    {/*  ou bien
    <TaskPreview task={task} onValidateTask={validateTask} />
    {/*  
    <ul>
      {tasks.map((task) => (
        <li key={task.id}>
          {statutIcon(task.statut)}    {task.content} <br/>
          <small>Initiée le {formatDate(task.createdAt)}</small><br/>
          {task.statut !== "done" ?( 
            <button onClick={() => validateTask(task.id)}>
              Valider
            </button>
          ) : (
            <small>Validée le {formatDate(task.completedAt)}</small>
          )
          }
        
 
        </li>
      ))}
    </ul> */ }
    
    
    </>
    
  );
}

export default App
