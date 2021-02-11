//Smoochum

const apiDataSmoochum = {
    url238: 'https://pokeapi.co/api/v2/',
    type238: 'pokemon',
    id238: '238',
}

const {url238, type238, id238} = apiDataSmoochum
const apiUrlSmoochum = `${url238}${type238}/${id238}`

fetch(apiUrlSmoochum)
    .then( (data) => data.json())
    .then( (pokemon) => generateSmoochum(pokemon) )

const generateSmoochum = (data) => {
    console.log(data)
    const html = `
        <div class="name">${data.name.toUpperCase()}</div>
        <img src=${data.sprites.front_default}>
    `
    const smoochumDiv = document.querySelector('.smoochum')
    smoochumDiv.innerHTML = html
}
