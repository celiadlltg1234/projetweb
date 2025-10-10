import type { Task } from "../Task";
import {TaskPreview}  from "./TaskPreview";
import React, { useState, useEffect, type JSX } from "react";


interface TaskMasterProps {
    tasks: Task[];
    onValidateTask: (id: string) => void;
}

export function TaskMaster({ tasks, onValidateTask }: TaskMasterProps) {

    return (
        <ul>
            
        {tasks.map((task) => (
            <TaskPreview
                key={task.id}
                task={task}
                onValidateTask={onValidateTask}
            />
            
        ))};
        </ul>
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