//Pichu

const apiDataPichu = {
    url172: 'https://pokeapi.co/api/v2/',
    type172: 'pokemon',
    id172: '172',
}

const {url172, type172, id172} = apiDataPichu
const apiUrlPichu = `${url172}${type172}/${id172}`

fetch(apiUrlPichu)
    .then( (data) => data.json())
    .then( (pokemon) => generatePichu(pokemon) )

const generatePichu = (data) => {
    console.log(data)
    const html = `
        <div class="name">${data.name.toUpperCase()}</div>
        <img src=${data.sprites.front_default}>
    `
    const pichuDiv = document.querySelector('.pichu')
    pichuDiv.innerHTML = html
}
