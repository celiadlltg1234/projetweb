
import type { Task } from "../Task";
import React, { useState, useEffect, type JSX } from "react";
import {FormatDate} from "../utile/FormatDate";
import { Link } from "react-router-dom";
interface TaskPreviewProps {
    task: Task;
    onValidateTask: (id: string) => void; //props
    //onDelete: (id: string) => void;  --- IGNORE --
    onDeleteTask: (id: string) => void;//props optionnelle
}

export  function TaskPreview({ task, onValidateTask, onDeleteTask }: TaskPreviewProps): JSX.Element {

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
   

  return (


    <li>
      {statutIcon(task.statut)}
      <Link to={`/task/${task.id}`}>
         {task.content} 
      
      </Link>
     
      {task.statut !== "done" ?( 
        <>
          <br/>
        <button onClick={() => onValidateTask(task.id)}>
          Valider   
        </button>
        </>
      ) : (
        <>
          
          <br/>
          <small>Validée le {FormatDate(task.completedAt)}</small>
          <br/>
          <button id= "redbutton" onClick={() => onDeleteTask(task.id)}>
            🗑️Supprimer
          </button>
        </>
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