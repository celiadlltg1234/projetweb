
import './App.css'
//import des dépendances React et uuid
import {v4 as uuidv4} from "uuid";
import React, { useState, useEffect, type JSX } from "react";
import { BrowserRouter, Routes , Route } from 'react-router-dom';
//import des types et données
import type { Task } from "./Task";
import  {tasksCollection} from "./data";

//import des composants enfants
import { TaskMaster } from './composant/TaskMaster';
import { TaskDetails } from './composant/TaskDetails';


function App() {

  //initialisation de l'état des tâches avec les données par défaut
  const storedTasks = localStorage.getItem("tasks");
  
  //si des tâches sont stockées dans le local storage, on les utilise, sinon on utilise les données par défaut
  const [tasks, setTasks] = useState<Task[]>( 
  storedTasks ? JSON.parse(storedTasks).map((task: any) => (
    {...task, 
    createdAt: new Date(task.createdAt), 
    completedAt: task.completedAt ? new Date(task.completedAt) : null,
  }
  )) : tasksCollection.map((task) => (
    {...task, 
    createdAt: new Date(task.createdAt), 
    completedAt: task.completedAt ? new Date(task.completedAt) : null,
  }
  ))
  );
  //sauvegarde des tâches dans le local storage à chaque modification de la liste des tâches
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

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

  //fonction pour supprimer une tâche
  function deleteTask(id: string){
    const confirm = window.confirm("Êtes-vous sûr de vouloir supprimer cette tâche ?");
    if(!confirm) return;
    setTasks(tasks.filter((task) => task.id !== id));
  }

  //rendu du composant
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={
          <TaskMaster 
            tasks={tasks}
            onAddTask={addNewTask} 
            onValidateTask={validateTask}
            onDeleteTask={deleteTask} />
        } />
        <Route 
          path="/task/:id" 
          element={<TaskDetails tasks={tasks}/>} 
        />
      </Routes>
      </BrowserRouter>
      
    
    
    
    {/*tasks.map((task) => (
      <TaskPreview
       key={task.id} 
       task={task} 
       onValidateTask={validateTask}
       onDeleteTask={deleteTask} />
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
