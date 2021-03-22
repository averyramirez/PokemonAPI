//Togepi

const apiDataTogepi = {
    url175: 'https://pokeapi.co/api/v2/',
    type175: 'pokemon',
    id175: '175',
}

const {url175, type175, id175} = apiDataTogepi
const apiUrlTogepi = `${url175}${type175}/${id175}`

fetch(apiUrlTogepi)
    .then( (data) => data.json())
    .then( (pokemon) => generateTogepi(pokemon) )

const generateTogepi = (data) => {
    console.log(data)
    const html = `
        <div class="name">${data.name.toUpperCase()}</div>
        <img src=${data.sprites.front_default}>
    `
    const togepiDiv = document.querySelector('.togepi')
    togepiDiv.innerHTML = html
}
