//Elekid

const apiDataElekid = {
    url239: 'https://pokeapi.co/api/v2/',
    type239: 'pokemon',
    id239: '239',
}

const {url239, type239, id239} = apiDataElekid
const apiUrlElekid = `${url239}${type239}/${id239}`

fetch(apiUrlElekid)
    .then( (data) => data.json())
    .then( (pokemon) => generateHtml(pokemon) )

const generateHtml = (data) => {
    console.log(data)
    const html = `
        <div class="name">${data.name.toUpperCase()}</div>
        <img src=${data.sprites.front_default}>
    `
    const elekidDiv = document.querySelector('.elekid')
    elekidDiv.innerHTML = html
}



