 
 
 //fonction pour formater une date en français
export function FormatDate(date: Date | null | undefined): string { 
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