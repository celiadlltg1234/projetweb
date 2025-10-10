import React, { useState, useEffect, type JSX } from "react";
import type { Task } from "../Task";
import {useForm} from "react-hook-form";

interface TaskFormProps {
  onAddTask: (content: string) => void;
}
interface FormData {
  content: string;
}

export function TaskForm({ onAddTask }: TaskFormProps): JSX.Element {
  const { register, handleSubmit, formState: { errors }, reset } = useForm<FormData>();

  const onSubmit = (data: FormData) => {
    const content = data.content.trim();
    if(!content || content === ""){
      alert("Veuillez saisir une tâche");
      reset();//vider le formulaire après soumission
      return;
    }
    onAddTask(content);
    reset();//vider le formulaire après soumission
  };  

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input  
        type="text"
        placeholder="Nouvelle tâche..."
        {...register("content", { required: true })}
      />
      <button type="submit">Nouvelle tâche</button>
    </form>
  );
}
{/*
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
    */}