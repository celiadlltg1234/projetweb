import { Link, useParams } from "react-router-dom";
import type { Task } from "../Task";
import { FormatDate } from "../utile/FormatDate";

interface TaskDetailsProps {
    tasks: Task[];
   
}
export function TaskDetails({ tasks }: TaskDetailsProps) {  
    const { id } = useParams();
    const task = tasks.find((t) => t.id === id);
    if (!task) {
        return <div>Tâche non trouvée</div>;
        <Link to="/">Retour à la liste</Link>   
    }
   
    return (
        <div>
            <h2>Détails de la tâche</h2>
            <p><strong>Contenu:</strong> {task.content}</p>
            <p><strong>Statut:</strong> {task.statut}</p>
            <p><strong>Créée le:</strong> {FormatDate(task.createdAt)}</p> 
            {task.completedAt && <p><strong>Validée le:</strong> {FormatDate(task.completedAt)}</p>}
           <button><Link to="/">Retour à la liste</Link> </button>  
        </div>
    );
}