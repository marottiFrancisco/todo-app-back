let tareas = [{
    id: '1',
    titulo: 'trabajar',
    descripcion: 'horario de 9 a 18',
    asignado: 'Andy',
    completado: true,
    prioridad: 'alta'
},
{
    id: '2',
    titulo: 'cocinar',
    descripcion: 'milanesas',
    asignado: 'Martin',
    completado: false,
    prioridad: 'baja'
},
{
    id: '3',
    titulo: 'estudiar',
    descripcion: 'matematicas',
    asignado: 'Facundo',
    completado: true,
    prioridad: 'alta'
}]


function getTareas(){
    return tareas
}
function getTareasById(id){
    return tareas.find(tarea => tarea.id === id)
}

function createTarea(tarea){
    const nuevaTarea = {...tarea, id: Math.floor(Math.random() * Date.now()).toString(16) , completado: false}
    tareas.push(nuevaTarea)
    return tareas
}

function completarTareaById(id){
    const nuevasTareas = tareas.map(tarea => {
        if (tarea.id === id) {
            return { ...tarea, completado: true}
        }
        return tarea
    })
    tareas = nuevasTareas
    return tareas
}

export const TareasController = {getTareas, getTareasById, createTarea, completarTareaById}