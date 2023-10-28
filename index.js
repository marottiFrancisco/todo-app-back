import express from "express" 
import { TareasController } from "./controller/tareasController.js"
const app = express()
const port = 3000

app.get('/tareas', (req, res) => {
  res.json(TareasController.getTareas())
})

app.get('/tareas/:id', (req, res) => {
  console.log(req.params.id)
  res.json(TareasController.getTareasById(req.params.id)) 
})


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

