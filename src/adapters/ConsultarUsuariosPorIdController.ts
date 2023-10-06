import Elysia from "elysia";
import ConsultarUsuariosPorId from "../core/usuario/service/ConsultarUsuariosPorId";

export default class ConsultarUsuariosPorIdController{
    constructor(
       readonly servidor: Elysia,
       readonly casoDeUso: ConsultarUsuariosPorId
    ){
       servidor.get('/usuarios:/id', async ({params}) => {
          
          return casoDeUso.executar(+params.id)
          
       })
    }
}