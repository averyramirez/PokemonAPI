//Munchlax

const apiDataMunchlax = {
    url446: 'https://pokeapi.co/api/v2/',
    type446: 'pokemon',
    id446: '446',
}

const {url446, type446, id446} = apiDataMunchlax
const apiUrlMunchlax = `${url446}${type446}/${id446}`

fetch(apiUrlMunchlax)
    .then( (data) => data.json())
    .then( (pokemon) => generateMunchlax(pokemon) )

const generateMunchlax = (data) => {
    console.log(data)
    const html = `
        <div class="name">${data.name.toUpperCase()}</div>
        <img src=${data.sprites.front_default}>
    `
    const munchlaxDiv = document.querySelector('.munchlax')
    munchlaxDiv.innerHTML = html
}
