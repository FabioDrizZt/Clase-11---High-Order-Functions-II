const fs = require('node:fs')

//Leer el archivo JSON
fs.readFile('./superheroes.json', 'utf-8', (err, data) => {
  if (err) {
    console.error('error al leer el archivo: ', err)
    return
  }
  try {
    //Convertir el archivo JSON a un objeto
    const superheroes = JSON.parse(data)
    // console.log(superheroes)

    //Filtrar superheroes que sean vengadores
    const filtro = 'VengAdOres'.toLowerCase()
    const vengadores = superheroes.filter(
      (hero) => hero.grupo.toLowerCase() === filtro
    )
    // console.log(vengadores)

    // Mapeo de alias y poderes de los superheroes
    const aliasPoderes = superheroes.map((hero) => ({
      alias: hero.nombre_superheroe,
      poderes: hero.poderes,
    }))
    // console.log(aliasPoderes);
    //Ordenar los superheroes de forma ascendente
    aliasPoderes.sort((a, b) => b.alias.localeCompare(a.alias))

    //Convertir nuestros datos a JSON
    const json = JSON.stringify(aliasPoderes, null, 2)
    console.log(json)

    //escribir los resultados en un nuevo archivo JSON
    fs.writeFile('./superheroes-alias-poderes.json', json, (err) => {
      if (err) {
        console.error('error al leer el archivo: ', err)
        return
      }
      console.log('el archivo fue creado correctamente')
    })
  } catch (error) {
    console.error('error al leer el archivo: ', err)
  }
})
