import { tareas } from "../model/tareas.js";

function getTareas(){
    return tareas
}
function getTareasById(id){
    return tareas.find(tarea => tarea.id === id)
}


export const TareasController = {getTareas, getTareasById}