const opcionesC = {
    descripcion: {
        demand: true,
        alias: 'd'
    }
}
const opcionesA = {
    descripcion: {
        demand: true,
        alias: 'd'
    },
    completado: {
        alias: 'c',
        default: true
    }
}
const opcionesB = {
    descripcion: {
        alias: 'd',
        demand: true
    }
}
const argv = require('yargs')
    .command('crear', 'Crea un elemento por hacer', opcionesC)
    .command('actualizar', 'Actualiza el estado completado de una tarea', opcionesA)
    .command('borrar', 'Borra un elemento por hacer', opcionesB)
    .help()
    .argv;

module.exports = {
    argv
}