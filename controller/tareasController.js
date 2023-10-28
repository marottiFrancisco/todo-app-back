import { tareas } from "../model/tareas.js";

function getTareas(){
    return tareas
}
function getTareasById(id){
    return tareas.find(tarea => tarea.id === id)
}

function createTarea(tarea){
    const nuevaTarea = {id: Math.floor(Math.random() * Date.now()).toString(16), completado: false, ...tarea}
    tareas.push(nuevaTarea)
    return tareas
}

function completarTareaById(id){
    const nuevasTareas = tareas.map(tarea => {
        if (tarea.id === id) {
            return {completado: true, ...tarea}
        }
        return tarea
    })
    tareas.
    tareas.push(...nuevasTareas)
    return tareas
}

export const TareasController = {getTareas, getTareasById, createTarea, completarTareaById}