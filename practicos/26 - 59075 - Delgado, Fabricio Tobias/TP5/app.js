import express from 'express'
import cors from 'cors'
const app = express()
app.use(express.json());
app.use(cors())

let datos = [
    // Datos de ejemplo   
    // Datos de ejemplo 
    {id: 1, nombre: 'Fabricio', apellido: 'Delgado', edad: 19, borrado: false, actualizado: Date.now()},
    {id: 2, nombre: 'Matias', apellido: 'Cueva', edad: 22, borrado: false, actualizado: Date.now()},
    {id: 3, nombre: 'Mario', apellido: 'Corral', edad: 20, borrado: false, actualizado: Date.now()},
    {id: 4, nombre: 'Franco', apellido: 'Catania', edad: 25, borrado: false, actualizado: Date.now()},
    {id: 5, nombre: 'Gonzalo', apellido: 'Chavez', edad: 32, borrado: false, actualizado: Date.now()},
]

app.get('/personas', (req, res) => {
    // Implementar GET_ALL
    const usuariosNoBorrados = datos.filter(persona => !persona.borrado);
    res.json(usuariosNoBorrados);
});

app.put('/personas', (req, res) => {
    // Implementar PUT
    const dato = req.body;

    if (dato.id === undefined) {
        dato.id = datos.length > 0 ? datos[datos.length - 1].id + 1 : 1;
        dato.borrado = false;
        datos.push(dato);
        res.status(201).json(dato);
      } else {
        const usuarioIndex = datos.findIndex((persona) => persona.id === dato.id);
        if (usuarioIndex !== -1) {
          datos[usuarioIndex] = { ...datos[usuarioIndex], ...dato };
          res.status(201).json(datos[usuarioIndex]);
        } else {
          res.status(404).json({ message: "Hubo un error, no se encuentra el usuario" });
        }
      }

    res.json(datos[usuarioIndex]);
})

export default app