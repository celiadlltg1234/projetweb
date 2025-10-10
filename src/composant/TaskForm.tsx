import React, { useState, useEffect, type JSX } from "react";
import type { Task } from "../Task";

interface TaskFormProps {
  onAddTask: (content: string) => void;
}
export function TaskForm({ onAddTask }: TaskFormProps): JSX.Element {
    function handleClick(){
    const content = prompt("Veuillez saisir le contenu...");
    if(!content || content === ""){
      alert("Veuillez saisir le contenu");
      return;
    }
    onAddTask(content); 
  }
    return <button id= "newtask" onClick={handleClick}>Nouvelle tâche</button>;
}