//Magby

const apiDataMagby = {
    url240: 'https://pokeapi.co/api/v2/',
    type240: 'pokemon',
    id240: '240',
}

const {url240, type240, id240} = apiDataMagby
const apiUrlMagby = `${url240}${type240}/${id240}`

fetch(apiUrlMagby)
    .then( (data) => data.json())
    .then( (pokemon) => generateMagby(pokemon) )

const generateMagby = (data) => {
    console.log(data)
    const html = `
        <div class="name">${data.name.toUpperCase()}</div>
        <img src=${data.sprites.front_default}>
    `
    const magbyDiv = document.querySelector('.magby')
    magbyDiv.innerHTML = html
}
