//Tyrogue

const apiDataTyrogue = {
    url236: 'https://pokeapi.co/api/v2/',
    type236: 'pokemon',
    id236: '236',
}

const {url236, type236, id236} = apiDataTyrogue
const apiUrlTyrogue = `${url236}${type236}/${id236}`

fetch(apiUrlTyrogue)
    .then( (data) => data.json())
    .then( (pokemon) => generateTyrogue(pokemon) )

const generateTyrogue = (data) => {
    console.log(data)
    const html = `
        <div class="name">${data.name.toUpperCase()}</div>
        <img src=${data.sprites.front_default}>
    `
    const tyrogueDiv = document.querySelector('.tyrogue')
    tyrogueDiv.innerHTML = html
}
