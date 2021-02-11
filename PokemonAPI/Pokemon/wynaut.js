//Wynaut

const apiDataWynaut = {
    url360: 'https://pokeapi.co/api/v2/',
    type360: 'pokemon',
    id360: '360',
}

const {url360, type360, id360} = apiDataWynaut
const apiUrlWynaut = `${url360}${type360}/${id360}`

fetch(apiUrlWynaut)
    .then( (data) => data.json())
    .then( (pokemon) => generateWynaut(pokemon) )

const generateWynaut = (data) => {
    console.log(data)
    const html = `
        <div class="name">${data.name.toUpperCase()}</div>
        <img src=${data.sprites.front_default}>
    `
    const wynautDiv = document.querySelector('.wynaut')
    wynautDiv.innerHTML = html
}
