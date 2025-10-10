import type { Task } from "../Task";
import {TaskPreview}  from "./TaskPreview";
import { TaskForm } from "./TaskForm";
import React, { useState, useEffect, type JSX } from "react";


interface TaskMasterProps {
    tasks: Task[];
    onAddTask: (content: string) => void;
    onValidateTask: (id: string) => void;
    onDeleteTask: (id: string) => void;
}

export  function TaskMaster({ tasks,onAddTask, onValidateTask, onDeleteTask}: TaskMasterProps) {

    return (
        <>
        <h1>Todo List</h1>
        <p>Nombre de tâches : {tasks.length} </p>
        <TaskForm onAddTask={onAddTask} />
        <ul>
            
            {tasks.map((task) => (
                
                    
                    <TaskPreview
                        task={task}
                        onValidateTask={onValidateTask}
                        onDeleteTask={onDeleteTask}/>
                 
             
                    
            ))
            };
      </ul>
        </>
    );
    
}


    {/*
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

  //fonction pour gérer le clic sur le bouton "Nouvelle tâche"
  function handleClick(){
    const content = prompt("Veuillez saisir le contenu...");
    if(!content || content === ""){
      alert("Veuillez saisir le contenu");
      return;
    }
    addNewTask(content); 
    
  }
}
*/}