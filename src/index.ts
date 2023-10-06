import app from "./external/api/config";
import RegistrarUsuario from "./core/usuario/service/RegistrarUsuario";
import RegistrarUsuarioController from "./adapters/RegistrarUsuarioController";
import RepositorioUsuarioPrismaPg from "./external/prisma/RepositorioUsuarioPrismaPG";
import ConsultarUsuarios from "./core/usuario/service/ConsultarUsuarios";
import ConsultarUsuariosController from "./adapters/ConsultarUsuarioController";
import ConsultarUsuarioPorId from "./core/usuario/service/ConsultarUsuariosPorId";
import ConsultarUsuariosPorIdController from "./adapters/ConsultarUsuariosPorIdController";


// -----------------------Registrar Rotas

const repositorioUsuario = new RepositorioUsuarioPrismaPg()

const registrarUsuario = new RegistrarUsuario(repositorioUsuario)
new RegistrarUsuarioController(app, registrarUsuario)

const consultarUsuarios = new ConsultarUsuarios(repositorioUsuario)
new ConsultarUsuariosController(app, consultarUsuarios)

const consultarPorId = new ConsultarUsuarioPorId(repositorioUsuario)
new ConsultarUsuariosPorIdController(app, consultarPorId)

app.listen(3000);

console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`
);
