import express from "express" 
import { TareasController } from "./controller/tareasController.js"
import bodyParser from "body-parser"
const app = express()
const port = 3000
const jsonParser = bodyParser.json()

app.get('/tareas', (req, res) => {
  res.json(TareasController.getTareas())
})

app.get('/tareas/:id', (req, res) => {
  res.json(TareasController.getTareasById(req.params.id)) 
})

app.post('/tareas', jsonParser, (req, res) => {
  res.json(TareasController.createTarea(req.body)) 
})

app.post('/tareas/:id', (req, res) => {
  res.json(TareasController.completarTareaById(req.params.id)) 
})

app.delete('/tareas/:id', (req, res) => {
  res.json(TareasController.eliminarTareaById(req.params.id)) 
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})


