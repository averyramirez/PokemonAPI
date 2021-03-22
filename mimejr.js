//Mime Jr.

const apiDataMimejr = {
    url439: 'https://pokeapi.co/api/v2/',
    type439: 'pokemon',
    id439: '439',
}

const {url439, type439, id439} = apiDataMimejr
const apiUrlMimejr = `${url439}${type439}/${id439}`

fetch(apiUrlMimejr)
    .then( (data) => data.json())
    .then( (pokemon) => generateMimejr(pokemon) )

const generateMimejr = (data) => {
    console.log(data)
    const html = `
        <div class="name">${data.name.toUpperCase()}</div>
        <img src=${data.sprites.front_default}>
    `
    const mimejrDiv = document.querySelector('.mimejr')
    mimejrDiv.innerHTML = html
}
