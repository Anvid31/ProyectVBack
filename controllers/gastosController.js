import {Router} from "express"
import respuestas from "../utils/respuestas.js"
import gastosService from "../services/gastosService.js"

const router = Router()

router.post("/Gastos", (req,res)=>{

     gastosService.crearGastos(req.body)

     .then((Gastos)=>{
         respuestas.exito(req,res,"Gasto Creado",201)
     })
     .catch((err)=>{
         respuestas.error(req,res,err,"Error al Crear",400)
         console.log(err)
     })
     
})

router.get("/", async (req,res)=>{
    

    gastosService.leerGastos()

    .then(Gastos =>{

        respuestas.exito(req,res,Gastos,200)
     })

     .catch(err=>{
         respuestas.error(req,res,err,"Error al leer",500)
     })

})

export default router