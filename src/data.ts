import type { Task } from "./Task";
import { v4 as uuidv4 } from "uuid";
export const tasksCollection: Task[] = [
  {  id: uuidv4(),
     content: "Installer VS code, Bun et Git",
     statut: "done", 
     createdAt: new Date(), 
     completedAt: new Date() 
    },

  { id: uuidv4(),
    content: "Apprendre TypeScript", 
    statut: "doing", 
    createdAt: new Date() ,
    completedAt: null 
    },
  { id: uuidv4(),
    content: "Apprendre React", 
    statut: "doing", 
    createdAt: new Date(), 
    completedAt: null 
   },
  { id: uuidv4(),
    content: "Réaliser un TD", 
    statut: "doing", 
    createdAt: new Date() ,
    completedAt: null 
   },
    { id: uuidv4(),
    content: "Penser à saisir prénom et mon nom dans le fichier README.md", 
    statut: "todo", 
    createdAt: new Date() ,
    completedAt: null 
   },
];
