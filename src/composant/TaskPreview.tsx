
import type { Task } from "../Task";
import React, { useState, useEffect, type JSX } from "react";

interface TaskPreviewProps {
    task: Task;
    onValidateTask: (id: string) => void;
}

export  function TaskPreview({ task, onValidateTask }: TaskPreviewProps): JSX.Element {

  //fonction pour afficher une icône selon le statut de la tâche
  function statutIcon(statut: string): JSX.Element {
    switch(statut){
      case "todo":
        return <span>📝</span>;
      case "doing":
        return <span>🚧</span>;
      case "done":
        return <span>✅</span>;
      default:
        return <span>❓</span>;
    }
  }

  //fonction pour formater une date en français
  function formatDate(date: Date | null | undefined): string { 
    if(!date) return "Date inconnue";
    const d = new Date(date);
    if(isNaN(d.getTime())) return "Date invalide";

    const jour = d.toLocaleDateString("fr-FR",{weekday: "long"}); 
    const lereste = d.toLocaleDateString("fr-FR", {
      day: "2-digit",  
      month: "long",   
      year: "numeric",
    });
    const j = jour.replace(/^\w/, (c) => c.toUpperCase()); //met la première lettre en majuscule
    return `${j}, ${lereste}`;//( jour, le reste)
  }  


  return (


    <li>
      {statutIcon(task.statut)}    {task.content} <br/>
      <small>Initiée le: {formatDate(task.createdAt)}</small><br/>
      {task.statut !== "done" ?( 
        <button onClick={() => onValidateTask(task.id)}>
          Valider   
        </button>
      ) : (
        <small>Validée le: {formatDate(task.completedAt)}</small>
      )
      }
    </li>
);
}

{/*
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
    </ul>
);
}*/}