export type TaskStatut = "todo" | "doing" | "done";

export interface Task {
  id: string;
  content: string;
  createdAt: Date;
  completedAt?: Date | null;//le ? rend la propriété optionnelle
  statut: TaskStatut;  
}