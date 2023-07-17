import express from 'express'
import morgan from 'morgan'
import cors from 'cors'
import path from 'path'
import 'dotenv/config'
import './src/database/dbConnetion'
import servicioRouter from "./src/routes/servicios.routes"

const app = express()

app.set("port",process.env.PORT || 4000)
app.listen(app.get("port"),()=>{
    console.log("Servidor en el puerto " + app.get("port"))
})
app.use(cors())
app.use(express.json())
app.use(morgan("dev"))
app.use(express.static(path.join(__dirname,"/public")))

app.use("/apiveterinaria",servicioRouter)