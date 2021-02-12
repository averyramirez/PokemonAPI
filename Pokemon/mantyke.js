//Mantyke

const apiDataMantyke = {
    url458: 'https://pokeapi.co/api/v2/',
    type458: 'pokemon',
    id458: '458',
}

const {url458, type458, id458} = apiDataMantyke
const apiUrlMantyke = `${url458}${type458}/${id458}`

fetch(apiUrlMantyke)
    .then( (data) => data.json())
    .then( (pokemon) => generateMantyke(pokemon) )

const generateMantyke = (data) => {
    console.log(data)
    const html = `
        <div class="name">${data.name.toUpperCase()}</div>
        <img src=${data.sprites.front_default}>
    `
    const mantykeDiv = document.querySelector('.mantyke')
    mantykeDiv.innerHTML = html
}
