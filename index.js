import express from "express" 
import {tareas} from './model/tareas.js'
const app = express()
const port = 3000

app.get('/tareas', (req, res) => {
  res.json(tareas)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})