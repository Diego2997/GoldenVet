import express from 'express'
import morgan from 'morgan'
import cors from 'cors'
import path from 'path'
import 'dotenv/config'
import './src/database/dbConnetion'
import comentariosRouter from './src/routes/comentarios.routes'
import pacientesRouter from './src/routes/pacientes.routes.js';
import servicioRouter from "./src/routes/servicios.routes"
import turnosRuta from './src/routes/turnos.routes'
import usuariosRouter from "./src/routes/usuarios.routes";
import productosRouter from "./src/routes/productos.routes";

const app = express();

app.set("port",process.env.PORT || 4000)
app.listen(app.get("port"),()=>{
    console.log("Servidor en el puerto " + app.get("port"))
})
app.use(cors())
app.use(express.json())
app.use(morgan("dev"))
app.use(express.static(path.join(__dirname,"/public")))

app.use("/apiveterinaria", usuariosRouter);

app.use('/apiveterinaria', pacientesRouter)

app.use('/apiveterinaria',comentariosRouter)

app.use("/apiveterinaria",servicioRouter)

app.use("/apiveterinaria",turnosRuta)

app.use("/apiveterinaria", productosRouter)