import { useLoaderData } from "react-router-dom";
import {obtenerClientes} from '../data/clientes'
import Cliente from "../components/Cliente";

export function loader(){
  const clientesApi = obtenerClientes()
  return clientesApi
}

const Index = () => {

  const clientes1 = useLoaderData();

  return (
    <>
      <h1 className="font-black text-4xl text-blue-900">Clientes index</h1>
      <p className="mt-3">Administra tus clientes</p>
      {clientes1.length ? (
        <table className="w-full bg-gray-300 shadow mt-5 table-auto">
          <thead className="bg-blue-800 text-white">
            <tr>
              <th className="p-2">Clientes</th>
              <th className="p-2">Contacto</th>
              <th className="p-2">Acciones</th>
            </tr>
          </thead>
          <tbody>
            {clientes1.map(cliente => (
                  <Cliente
                    cliente={cliente}
                    key={cliente.id}
                  />
            ))}
          </tbody>
        </table>
      ) : (
        <p className="text-center mt-10">No hay clientes aun</p>
      )}
    </>
  )
}

export default Index